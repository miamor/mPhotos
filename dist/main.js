function _taggedTemplateLiteral(t, e) {
    return Object.freeze(Object.defineProperties(t, {
        raw: {
            value: Object.freeze(e)
        }
    }))
}

function gup(t) {
    t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]")
    var e = "[\\?&]" + t + "=([^&#]*)",
        i = new RegExp(e),
        n = i.exec(window.location.href)
    return null === n ? "" : n[1]
}! function (t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document) throw new Error("jQuery requires a window with a document")
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (t, e) {
    "use strict";

    function i(t, e) {
        e = e || it;
        var i = e.createElement("script")
        i.text = t, e.head.appendChild(i).parentNode.removeChild(i)
    }

    function n(t) {
        var e = !!t && "length" in t && t.length,
            i = mt.type(t)
        return "function" !== i && !mt.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    function s(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }

    function o(t, e, i) {
        return mt.isFunction(e) ? mt.grep(t, function (t, n) {
            return !!e.call(t, n, t) !== i
        }) : e.nodeType ? mt.grep(t, function (t) {
            return t === e !== i
        }) : "string" != typeof e ? mt.grep(t, function (t) {
            return rt.call(e, t) > -1 !== i
        }) : Dt.test(e) ? mt.filter(e, t, i) : (e = mt.filter(e, t), mt.grep(t, function (t) {
            return rt.call(e, t) > -1 !== i && 1 === t.nodeType
        }))
    }

    function a(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;)
            return t
    }

    function r(t) {
        var e = {};
        return mt.each(t.match(St) || [], function (t, i) {
            e[i] = !0
        }), e
    }

    function l(t) {
        return t
    }

    function c(t) {
        throw t
    }

    function h(t, e, i, n) {
        var s;
        try {
            t && mt.isFunction(s = t.promise) ? s.call(t).done(e).fail(i) : t && mt.isFunction(s = t.then) ? s.call(t, e, i) : e.apply(void 0, [t].slice(n))
        } catch (t) {
            i.apply(void 0, [t])
        }
    }

    function u() {
        it.removeEventListener("DOMContentLoaded", u), t.removeEventListener("load", u), mt.ready()
    }

    function d() {
        this.expando = mt.expando + d.uid++
    }

    function p(t) {
        return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Lt.test(t) ? JSON.parse(t) : t)
    }

    function f(t, e, i) {
        var n;
        if (void 0 === i && 1 === t.nodeType)
            if (n = "data-" + e.replace($t, "-$&").toLowerCase(), "string" == typeof (i = t.getAttribute(n))) {
                try {
                    i = p(i)
                } catch (t) {}
                Ht.set(t, e, i)
            } else i = void 0;
        return i
    }

    function m(t, e, i, n) {
        var s, o = 1,
            a = 20,
            r = n ? function () {
                return n.cur()
            } : function () {
                return mt.css(t, e, "")
            },
            l = r(),
            c = i && i[3] || (mt.cssNumber[e] ? "" : "px"),
            h = (mt.cssNumber[e] || "px" !== c && +l) && Ft.exec(mt.css(t, e))
        if (h && h[3] !== c) {
            c = c || h[3], i = i || [], h = +l || 1;
            do {
                o = o || ".5", h /= o, mt.style(t, e, h + c)
            } while (o !== (o = r() / l) && 1 !== o && --a)
        }
        return i && (h = +h || +l || 0, s = i[1] ? h + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = h, n.end = s)), s
    }

    function g(t) {
        var e, i = t.ownerDocument,
            n = t.nodeName,
            s = Bt[n];
        return s || (e = i.body.appendChild(i.createElement(n)), s = mt.css(e, "display"), e.parentNode.removeChild(e), "none" === s && (s = "block"), Bt[n] = s, s)
    }

    function b(t, e) {
        for (var i, n, s = [], o = 0, a = t.length; o < a; o++) n = t[o], n.style && (i = n.style.display, e ? ("none" === i && (s[o] = Nt.get(n, "display") || null, s[o] || (n.style.display = "")), "" === n.style.display && Rt(n) && (s[o] = g(n))) : "none" !== i && (s[o] = "none", Nt.set(n, "display", i)))
        for (o = 0; o < a; o++) null != s[o] && (t[o].style.display = s[o])
        return t
    }

    function v(t, e) {
        var i;
        return i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && s(t, e) ? mt.merge([t], i) : i
    }

    function _(t, e) {
        for (var i = 0, n = t.length; i < n; i++) Nt.set(t[i], "globalEval", !e || Nt.get(e[i], "globalEval"))
    }

    function y(t, e, i, n, s) {
        for (var o, a, r, l, c, h, u = e.createDocumentFragment(), d = [], p = 0, f = t.length; p < f; p++)
            if ((o = t[p]) || 0 === o)
                if ("object" === mt.type(o)) mt.merge(d, o.nodeType ? [o] : o)
        else if (Xt.test(o)) {
            for (a = a || u.appendChild(e.createElement("div")), r = (Yt.exec(o) || ["", ""])[1].toLowerCase(), l = Vt[r] || Vt._default, a.innerHTML = l[1] + mt.htmlPrefilter(o) + l[2], h = l[0]; h--;) a = a.lastChild;
            mt.merge(d, a.childNodes), a = u.firstChild, a.textContent = ""
        } else d.push(e.createTextNode(o))
        for (u.textContent = "", p = 0; o = d[p++];)
            if (n && mt.inArray(o, n) > -1) s && s.push(o)
        else if (c = mt.contains(o.ownerDocument, o), a = v(u.appendChild(o), "script"), c && _(a), i)
            for (h = 0; o = a[h++];) Kt.test(o.type || "") && i.push(o)
        return u
    }

    function w() {
        return !0
    }

    function x() {
        return !1
    }

    function k() {
        try {
            return it.activeElement
        } catch (t) {}
    }

    function C(t, e, i, n, s, o) {
        var a, r;
        if ("object" == typeof e) {
            "string" != typeof i && (n = n || i, i = void 0)
            for (r in e) C(t, r, i, n, e[r], o)
            return t
        }
        if (null == n && null == s ? (s = i, n = i = void 0) : null == s && ("string" == typeof i ? (s = n, n = void 0) : (s = n, n = i, i = void 0)), !1 === s) s = x;
        else if (!s) return t;
        return 1 === o && (a = s, s = function (t) {
            return mt().off(t), a.apply(this, arguments)
        }, s.guid = a.guid || (a.guid = mt.guid++)), t.each(function () {
            mt.event.add(this, e, s, n, i)
        })
    }

    function D(t, e) {
        return s(t, "table") && s(11 !== e.nodeType ? e : e.firstChild, "tr") ? mt(">tbody", t)[0] || t : t
    }

    function T(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function M(t) {
        var e = ne.exec(t.type)
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function I(t, e) {
        var i, n, s, o, a, r, l, c;
        if (1 === e.nodeType) {
            if (Nt.hasData(t) && (o = Nt.access(t), a = Nt.set(e, o), c = o.events)) {
                delete a.handle, a.events = {};
                for (s in c)
                    for (i = 0, n = c[s].length; i < n; i++) mt.event.add(e, s, c[s][i])
            }
            Ht.hasData(t) && (r = Ht.access(t), l = mt.extend({}, r), Ht.set(e, l))
        }
    }

    function P(t, e) {
        var i = e.nodeName.toLowerCase()
        "input" === i && Ut.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
    }

    function S(t, e, n, s) {
        e = ot.apply([], e)
        var o, a, r, l, c, h, u = 0,
            d = t.length,
            p = d - 1,
            f = e[0],
            m = mt.isFunction(f)
        if (m || d > 1 && "string" == typeof f && !pt.checkClone && ie.test(f)) return t.each(function (i) {
            var o = t.eq(i)
            m && (e[0] = f.call(this, i, o.html())), S(o, e, n, s)
        })
        if (d && (o = y(e, t[0].ownerDocument, !1, t, s), a = o.firstChild, 1 === o.childNodes.length && (o = a), a || s)) {
            for (r = mt.map(v(o, "script"), T), l = r.length; u < d; u++) c = o, u !== p && (c = mt.clone(c, !0, !0), l && mt.merge(r, v(c, "script"))), n.call(t[u], c, u)
            if (l)
                for (h = r[r.length - 1].ownerDocument, mt.map(r, M), u = 0; u < l; u++) c = r[u], Kt.test(c.type || "") && !Nt.access(c, "globalEval") && mt.contains(h, c) && (c.src ? mt._evalUrl && mt._evalUrl(c.src) : i(c.textContent.replace(se, ""), h))
        }
        return t
    }

    function j(t, e, i) {
        for (var n, s = e ? mt.filter(e, t) : t, o = 0; null != (n = s[o]); o++) i || 1 !== n.nodeType || mt.cleanData(v(n)), n.parentNode && (i && mt.contains(n.ownerDocument, n) && _(v(n, "script")), n.parentNode.removeChild(n));
        return t
    }

    function A(t, e, i) {
        var n, s, o, a, r = t.style;
        return i = i || re(t), i && (a = i.getPropertyValue(e) || i[e], "" !== a || mt.contains(t.ownerDocument, t) || (a = mt.style(t, e)), !pt.pixelMarginRight() && ae.test(a) && oe.test(e) && (n = r.width, s = r.minWidth, o = r.maxWidth, r.minWidth = r.maxWidth = r.width = a, a = i.width, r.width = n, r.minWidth = s, r.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function E(t, e) {
        return {
            get: function () {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function O(t) {
        if (t in pe) return t;
        for (var e = t[0].toUpperCase() + t.slice(1), i = de.length; i--;)
            if ((t = de[i] + e) in pe) return t
    }

    function N(t) {
        var e = mt.cssProps[t];
        return e || (e = mt.cssProps[t] = O(t) || t), e
    }

    function H(t, e, i) {
        var n = Ft.exec(e)
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
    }

    function L(t, e, i, n, s) {
        var o, a = 0;
        for (o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0; o < 4; o += 2) "margin" === i && (a += mt.css(t, i + Wt[o], !0, s)), n ? ("content" === i && (a -= mt.css(t, "padding" + Wt[o], !0, s)), "margin" !== i && (a -= mt.css(t, "border" + Wt[o] + "Width", !0, s))) : (a += mt.css(t, "padding" + Wt[o], !0, s), "padding" !== i && (a += mt.css(t, "border" + Wt[o] + "Width", !0, s)))
        return a
    }

    function $(t, e, i) {
        var n, s = re(t),
            o = A(t, e, s),
            a = "border-box" === mt.css(t, "boxSizing", !1, s)
        return ae.test(o) ? o : (n = a && (pt.boxSizingReliable() || o === t.style[e]), "auto" === o && (o = t["offset" + e[0].toUpperCase() + e.slice(1)]), (o = parseFloat(o) || 0) + L(t, e, i || (a ? "border" : "content"), n, s) + "px")
    }

    function z(t, e, i, n, s) {
        return new z.prototype.init(t, e, i, n, s)
    }

    function F() {
        me && (!1 === it.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(F) : t.setTimeout(F, mt.fx.interval), mt.fx.tick())
    }

    function W() {
        return t.setTimeout(function () {
            fe = void 0
        }), fe = mt.now()
    }

    function R(t, e) {
        var i, n = 0,
            s = {
                height: t
            };
        for (e = e ? 1 : 0; n < 4; n += 2 - e) i = Wt[n], s["margin" + i] = s["padding" + i] = t;
        return e && (s.opacity = s.width = t), s
    }

    function q(t, e, i) {
        for (var n, s = (Y.tweeners[e] || []).concat(Y.tweeners["*"]), o = 0, a = s.length; o < a; o++)
            if (n = s[o].call(i, e, t)) return n
    }

    function B(t, e, i) {
        var n, s, o, a, r, l, c, h, u = "width" in e || "height" in e,
            d = this,
            p = {},
            f = t.style,
            m = t.nodeType && Rt(t),
            g = Nt.get(t, "fxshow")
        i.queue || (a = mt._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, r = a.empty.fire, a.empty.fire = function () {
            a.unqueued || r()
        }), a.unqueued++, d.always(function () {
            d.always(function () {
                a.unqueued--, mt.queue(t, "fx").length || a.empty.fire()
            })
        }))
        for (n in e)
            if (s = e[n], ge.test(s)) {
                if (delete e[n], o = o || "toggle" === s, s === (m ? "hide" : "show")) {
                    if ("show" !== s || !g || void 0 === g[n]) continue;
                    m = !0
                }
                p[n] = g && g[n] || mt.style(t, n)
            } if ((l = !mt.isEmptyObject(e)) || !mt.isEmptyObject(p)) {
            u && 1 === t.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], c = g && g.display, null == c && (c = Nt.get(t, "display")), h = mt.css(t, "display"), "none" === h && (c ? h = c : (b([t], !0), c = t.style.display || c, h = mt.css(t, "display"), b([t]))), ("inline" === h || "inline-block" === h && null != c) && "none" === mt.css(t, "float") && (l || (d.done(function () {
                f.display = c
            }), null == c && (h = f.display, c = "none" === h ? "" : h)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", d.always(function () {
                f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
            })), l = !1;
            for (n in p) l || (g ? "hidden" in g && (m = g.hidden) : g = Nt.access(t, "fxshow", {
                display: c
            }), o && (g.hidden = !m), m && b([t], !0), d.done(function () {
                m || b([t]), Nt.remove(t, "fxshow")
                for (n in p) mt.style(t, n, p[n])
            })), l = q(m ? g[n] : 0, n, d), n in g || (g[n] = l.start, m && (l.end = l.start, l.start = 0))
        }
    }

    function U(t, e) {
        var i, n, s, o, a;
        for (i in t)
            if (n = mt.camelCase(i), s = e[n], o = t[i], Array.isArray(o) && (s = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), (a = mt.cssHooks[n]) && "expand" in a) {
                o = a.expand(o), delete t[n];
                for (i in o) i in t || (t[i] = o[i], e[i] = s)
            } else e[n] = s
    }

    function Y(t, e, i) {
        var n, s, o = 0,
            a = Y.prefilters.length,
            r = mt.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (s) return !1;
                for (var e = fe || W(), i = Math.max(0, c.startTime + c.duration - e), n = i / c.duration || 0, o = 1 - n, a = 0, l = c.tweens.length; a < l; a++) c.tweens[a].run(o)
                return r.notifyWith(t, [c, o, i]), o < 1 && l ? i : (l || r.notifyWith(t, [c, 1, 0]), r.resolveWith(t, [c]), !1)
            },
            c = r.promise({
                elem: t,
                props: mt.extend({}, e),
                opts: mt.extend(!0, {
                    specialEasing: {},
                    easing: mt.easing._default
                }, i),
                originalProperties: e,
                originalOptions: i,
                startTime: fe || W(),
                duration: i.duration,
                tweens: [],
                createTween: function (e, i) {
                    var n = mt.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing)
                    return c.tweens.push(n), n
                },
                stop: function (e) {
                    var i = 0,
                        n = e ? c.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; i < n; i++) c.tweens[i].run(1)
                    return e ? (r.notifyWith(t, [c, 1, 0]), r.resolveWith(t, [c, e])) : r.rejectWith(t, [c, e]), this
                }
            }),
            h = c.props;
        for (U(h, c.opts.specialEasing); o < a; o++)
            if (n = Y.prefilters[o].call(c, t, h, c.opts)) return mt.isFunction(n.stop) && (mt._queueHooks(c.elem, c.opts.queue).stop = mt.proxy(n.stop, n)), n;
        return mt.map(h, q, c), mt.isFunction(c.opts.start) && c.opts.start.call(t, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), mt.fx.timer(mt.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c
    }

    function K(t) {
        return (t.match(St) || []).join(" ")
    }

    function V(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    function X(t, e, i, n) {
        var s;
        if (Array.isArray(e)) mt.each(e, function (e, s) {
            i || Me.test(t) ? n(t, s) : X(t + "[" + ("object" == typeof s && null != s ? e : "") + "]", s, i, n)
        })
        else if (i || "object" !== mt.type(e)) n(t, e)
        else
            for (s in e) X(t + "[" + s + "]", e[s], i, n)
    }

    function G(t) {
        return function (e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, s = 0,
                o = e.toLowerCase().match(St) || [];
            if (mt.isFunction(i))
                for (; n = o[s++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }

    function Q(t, e, i, n) {
        function s(r) {
            var l;
            return o[r] = !0, mt.each(t[r] || [], function (t, r) {
                var c = r(e, i, n)
                return "string" != typeof c || a || o[c] ? a ? !(l = c) : void 0 : (e.dataTypes.unshift(c), s(c), !1)
            }), l
        }
        var o = {},
            a = t === ze;
        return s(e.dataTypes[0]) || !o["*"] && s("*")
    }

    function Z(t, e) {
        var i, n, s = mt.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((s[i] ? t : n || (n = {}))[i] = e[i])
        return n && mt.extend(!0, t, n), t
    }

    function J(t, e, i) {
        for (var n, s, o, a, r = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"))
        if (n)
            for (s in r)
                if (r[s] && r[s].test(n)) {
                    l.unshift(s)
                    break
                } if (l[0] in i) o = l[0];
        else {
            for (s in i) {
                if (!l[0] || t.converters[s + " " + l[0]]) {
                    o = s;
                    break
                }
                a || (a = s)
            }
            o = o || a
        }
        if (o) return o !== l[0] && l.unshift(o), i[o]
    }

    function tt(t, e, i, n) {
        var s, o, a, r, l, c = {},
            h = t.dataTypes.slice()
        if (h[1])
            for (a in t.converters) c[a.toLowerCase()] = t.converters[a];
        for (o = h.shift(); o;)
            if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = h.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (!(a = c[l + " " + o] || c["* " + o]))
                for (s in c)
                    if (r = s.split(" "), r[1] === o && (a = c[l + " " + r[0]] || c["* " + r[0]])) {
                        !0 === a ? a = c[s] : !0 !== c[s] && (o = r[0], h.unshift(r[1]))
                        break
                    } if (!0 !== a)
                if (a && t.throws) e = a(e)
            else try {
                console.log(e)
                e = a(e)
            } catch (t) {
                return {
                    state: "parsererror",
                    error: a ? t : "No conversion from " + l + " to " + o
                }
            }
        }
        return {
            state: "success",
            data: e
        }
    }
    var et = [],
        it = t.document,
        nt = Object.getPrototypeOf,
        st = et.slice,
        ot = et.concat,
        at = et.push,
        rt = et.indexOf,
        lt = {},
        ct = lt.toString,
        ht = lt.hasOwnProperty,
        ut = ht.toString,
        dt = ut.call(Object),
        pt = {},
        ft = "3.2.1",
        mt = function (t, e) {
            return new mt.fn.init(t, e)
        },
        gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        bt = /^-ms-/,
        vt = /-([a-z])/g,
        _t = function (t, e) {
            return e.toUpperCase()
        };
    mt.fn = mt.prototype = {
        jquery: ft,
        constructor: mt,
        length: 0,
        toArray: function () {
            return st.call(this)
        },
        get: function (t) {
            return null == t ? st.call(this) : t < 0 ? this[t + this.length] : this[t]
        },
        pushStack: function (t) {
            var e = mt.merge(this.constructor(), t)
            return e.prevObject = this, e
        },
        each: function (t) {
            return mt.each(this, t)
        },
        map: function (t) {
            return this.pushStack(mt.map(this, function (e, i) {
                return t.call(e, i, e)
            }))
        },
        slice: function () {
            return this.pushStack(st.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (t) {
            var e = this.length,
                i = +t + (t < 0 ? e : 0)
            return this.pushStack(i >= 0 && i < e ? [this[i]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: at,
        sort: et.sort,
        splice: et.splice
    }, mt.extend = mt.fn.extend = function () {
        var t, e, i, n, s, o, a = arguments[0] || {},
            r = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[r] || {}, r++), "object" == typeof a || mt.isFunction(a) || (a = {}), r === l && (a = this, r--); r < l; r++)
            if (null != (t = arguments[r]))
                for (e in t) i = a[e], n = t[e], a !== n && (c && n && (mt.isPlainObject(n) || (s = Array.isArray(n))) ? (s ? (s = !1, o = i && Array.isArray(i) ? i : []) : o = i && mt.isPlainObject(i) ? i : {}, a[e] = mt.extend(c, o, n)) : void 0 !== n && (a[e] = n))
        return a
    }, mt.extend({
        expando: "jQuery" + (ft + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (t) {
            throw new Error(t)
        },
        noop: function () {},
        isFunction: function (t) {
            return "function" === mt.type(t)
        },
        isWindow: function (t) {
            return null != t && t === t.window
        },
        isNumeric: function (t) {
            var e = mt.type(t)
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        },
        isPlainObject: function (t) {
            var e, i;
            return !(!t || "[object Object]" !== ct.call(t) || (e = nt(t)) && ("function" != typeof (i = ht.call(e, "constructor") && e.constructor) || ut.call(i) !== dt))
        },
        isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        type: function (t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? lt[ct.call(t)] || "object" : typeof t
        },
        globalEval: function (t) {
            i(t)
        },
        camelCase: function (t) {
            return t.replace(bt, "ms-").replace(vt, _t)
        },
        each: function (t, e) {
            var i, s = 0;
            if (n(t))
                for (i = t.length; s < i && !1 !== e.call(t[s], s, t[s]); s++);
            else
                for (s in t)
                    if (!1 === e.call(t[s], s, t[s])) break;
            return t
        },
        trim: function (t) {
            return null == t ? "" : (t + "").replace(gt, "")
        },
        makeArray: function (t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? mt.merge(i, "string" == typeof t ? [t] : t) : at.call(i, t)), i
        },
        inArray: function (t, e, i) {
            return null == e ? -1 : rt.call(e, t, i)
        },
        merge: function (t, e) {
            for (var i = +e.length, n = 0, s = t.length; n < i; n++) t[s++] = e[n];
            return t.length = s, t
        },
        grep: function (t, e, i) {
            for (var n = [], s = 0, o = t.length, a = !i; s < o; s++) !e(t[s], s) !== a && n.push(t[s])
            return n
        },
        map: function (t, e, i) {
            var s, o, a = 0,
                r = [];
            if (n(t))
                for (s = t.length; a < s; a++) null != (o = e(t[a], a, i)) && r.push(o)
            else
                for (a in t) null != (o = e(t[a], a, i)) && r.push(o)
            return ot.apply([], r)
        },
        guid: 1,
        proxy: function (t, e) {
            var i, n, s;
            if ("string" == typeof e && (i = t[e], e = t, t = i), mt.isFunction(t)) return n = st.call(arguments, 2), s = function () {
                return t.apply(e || this, n.concat(st.call(arguments)))
            }, s.guid = t.guid = t.guid || mt.guid++, s
        },
        now: Date.now,
        support: pt
    }), "function" == typeof Symbol && (mt.fn[Symbol.iterator] = et[Symbol.iterator]), mt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
        lt["[object " + e + "]"] = e.toLowerCase()
    })
    var yt = function (t) {
        function e(t, e, i, n) {
            var s, o, a, r, l, h, d, p = e && e.ownerDocument,
                f = e ? e.nodeType : 9;
            if (i = i || [], "string" != typeof t || !t || 1 !== f && 9 !== f && 11 !== f) return i;
            if (!n && ((e ? e.ownerDocument || e : z) !== j && S(e), e = e || j, E)) {
                if (11 !== f && (l = mt.exec(t)))
                    if (s = l[1]) {
                        if (9 === f) {
                            if (!(a = e.getElementById(s))) return i;
                            if (a.id === s) return i.push(a), i
                        } else if (p && (a = p.getElementById(s)) && L(e, a) && a.id === s) return i.push(a), i
                    } else {
                        if (l[2]) return G.apply(i, e.getElementsByTagName(t)), i;
                        if ((s = l[3]) && y.getElementsByClassName && e.getElementsByClassName) return G.apply(i, e.getElementsByClassName(s)), i
                    } if (y.qsa && !B[t + " "] && (!O || !O.test(t))) {
                    if (1 !== f) p = e, d = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((r = e.getAttribute("id")) ? r = r.replace(_t, yt) : e.setAttribute("id", r = $), h = C(t), o = h.length; o--;) h[o] = "#" + r + " " + u(h[o])
                        d = h.join(","), p = gt.test(t) && c(e.parentNode) || e
                    }
                    if (d) try {
                        return G.apply(i, p.querySelectorAll(d)), i
                    } catch (t) {} finally {
                        r === $ && e.removeAttribute("id")
                    }
                }
            }
            return T(t.replace(ot, "$1"), e, i, n)
        }

        function i() {
            function t(i, n) {
                return e.push(i + " ") > w.cacheLength && delete t[e.shift()], t[i + " "] = n
            }
            var e = [];
            return t
        }

        function n(t) {
            return t[$] = !0, t
        }

        function s(t) {
            var e = j.createElement("fieldset")
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function o(t, e) {
            for (var i = t.split("|"), n = i.length; n--;) w.attrHandle[i[n]] = e
        }

        function a(t, e) {
            var i = e && t,
                n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === e) return -1;
            return t ? 1 : -1
        }

        function r(t) {
            return function (e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && xt(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function l(t) {
            return n(function (e) {
                return e = +e, n(function (i, n) {
                    for (var s, o = t([], i.length, e), a = o.length; a--;) i[s = o[a]] && (i[s] = !(n[s] = i[s]))
                })
            })
        }

        function c(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }

        function h() {}

        function u(t) {
            for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
            return n
        }

        function d(t, e, i) {
            var n = e.dir,
                s = e.next,
                o = s || n,
                a = i && "parentNode" === o,
                r = W++;
            return e.first ? function (e, i, s) {
                for (; e = e[n];)
                    if (1 === e.nodeType || a) return t(e, i, s)
                return !1
            } : function (e, i, l) {
                var c, h, u, d = [F, r];
                if (l) {
                    for (; e = e[n];)
                        if ((1 === e.nodeType || a) && t(e, i, l)) return !0
                } else
                    for (; e = e[n];)
                        if (1 === e.nodeType || a)
                            if (u = e[$] || (e[$] = {}), h = u[e.uniqueID] || (u[e.uniqueID] = {}), s && s === e.nodeName.toLowerCase()) e = e[n] || e;
                            else {
                                if ((c = h[o]) && c[0] === F && c[1] === r) return d[2] = c[2];
                                if (h[o] = d, d[2] = t(e, i, l)) return !0
                            } return !1
            }
        }

        function p(t) {
            return t.length > 1 ? function (e, i, n) {
                for (var s = t.length; s--;)
                    if (!t[s](e, i, n)) return !1;
                return !0
            } : t[0]
        }

        function f(t, i, n) {
            for (var s = 0, o = i.length; s < o; s++) e(t, i[s], n)
            return n
        }

        function m(t, e, i, n, s) {
            for (var o, a = [], r = 0, l = t.length, c = null != e; r < l; r++)(o = t[r]) && (i && !i(o, n, s) || (a.push(o), c && e.push(r)))
            return a
        }

        function g(t, e, i, s, o, a) {
            return s && !s[$] && (s = g(s)), o && !o[$] && (o = g(o, a)), n(function (n, a, r, l) {
                var c, h, u, d = [],
                    p = [],
                    g = a.length,
                    b = n || f(e || "*", r.nodeType ? [r] : r, []),
                    v = !t || !n && e ? b : m(b, d, t, r, l),
                    _ = i ? o || (n ? t : g || s) ? [] : a : v;
                if (i && i(v, _, r, l), s)
                    for (c = m(_, p), s(c, [], r, l), h = c.length; h--;)(u = c[h]) && (_[p[h]] = !(v[p[h]] = u))
                if (n) {
                    if (o || t) {
                        if (o) {
                            for (c = [], h = _.length; h--;)(u = _[h]) && c.push(v[h] = u)
                            o(null, _ = [], c, l)
                        }
                        for (h = _.length; h--;)(u = _[h]) && (c = o ? Z(n, u) : d[h]) > -1 && (n[c] = !(a[c] = u))
                    }
                } else _ = m(_ === a ? _.splice(g, _.length) : _), o ? o(null, a, _, l) : G.apply(a, _)
            })
        }

        function b(t) {
            for (var e, i, n, s = t.length, o = w.relative[t[0].type], a = o || w.relative[" "], r = o ? 1 : 0, l = d(function (t) {
                    return t === e
                }, a, !0), c = d(function (t) {
                    return Z(e, t) > -1
                }, a, !0), h = [function (t, i, n) {
                    var s = !o && (n || i !== M) || ((e = i).nodeType ? l(t, i, n) : c(t, i, n))
                    return e = null, s
                }]; r < s; r++)
                if (i = w.relative[t[r].type]) h = [d(p(h), i)];
                else {
                    if (i = w.filter[t[r].type].apply(null, t[r].matches), i[$]) {
                        for (n = ++r; n < s && !w.relative[t[n].type]; n++)
                            return g(r > 1 && p(h), r > 1 && u(t.slice(0, r - 1).concat({
                                value: " " === t[r - 2].type ? "*" : ""
                            })).replace(ot, "$1"), i, r < n && b(t.slice(r, n)), n < s && b(t = t.slice(n)), n < s && u(t))
                    }
                    h.push(i)
                } return p(h)
        }

        function v(t, i) {
            var s = i.length > 0,
                o = t.length > 0,
                a = function (n, a, r, l, c) {
                    var h, u, d, p = 0,
                        f = "0",
                        g = n && [],
                        b = [],
                        v = M,
                        _ = n || o && w.find.TAG("*", c),
                        y = F += null == v ? 1 : Math.random() || .1,
                        x = _.length;
                    for (c && (M = a === j || a || c); f !== x && null != (h = _[f]); f++) {
                        if (o && h) {
                            for (u = 0, a || h.ownerDocument === j || (S(h), r = !E); d = t[u++];)
                                if (d(h, a || j, r)) {
                                    l.push(h);
                                    break
                                } c && (F = y)
                        }
                        s && ((h = !d && h) && p--, n && g.push(h))
                    }
                    if (p += f, s && f !== p) {
                        for (u = 0; d = i[u++];) d(g, b, a, r);
                        if (n) {
                            if (p > 0)
                                for (; f--;) g[f] || b[f] || (b[f] = V.call(l));
                            b = m(b)
                        }
                        G.apply(l, b), c && !n && b.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                    }
                    return c && (F = y, M = v), g
                };
            return s ? n(a) : a
        }
        var _, y, w, x, k, C, D, T, M, I, P, S, j, A, E, O, N, H, L, $ = "sizzle" + 1 * new Date,
            z = t.document,
            F = 0,
            W = 0,
            R = i(),
            q = i(),
            B = i(),
            U = function (t, e) {
                return t === e && (P = !0), 0
            },
            Y = {}.hasOwnProperty,
            K = [],
            V = K.pop,
            X = K.push,
            G = K.push,
            Q = K.slice,
            Z = function (t, e) {
                for (var i = 0, n = t.length; i < n; i++)
                    if (t[i] === e) return i;
                return -1
            },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            tt = "[\\x20\\t\\r\\n\\f]",
            et = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            it = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + et + "))|)" + tt + "*\\]",
            nt = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + it + ")*)|.*)\\)|)",
            st = new RegExp(tt + "+", "g"),
            ot = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"),
            at = new RegExp("^" + tt + "*," + tt + "*"),
            rt = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"),
            lt = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]", "g"),
            ct = new RegExp(nt),
            ht = new RegExp("^" + et + "$"),
            ut = {
                ID: new RegExp("^#(" + et + ")"),
                CLASS: new RegExp("^\\.(" + et + ")"),
                TAG: new RegExp("^(" + et + "|[*])"),
                ATTR: new RegExp("^" + it),
                PSEUDO: new RegExp("^" + nt),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + J + ")$", "i"),
                needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i")
            },
            dt = /^(?:input|select|textarea|button)$/i,
            pt = /^h\d$/i,
            ft = /^[^{]+\{\s*\[native \w/,
            mt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            gt = /[+~]/,
            bt = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)", "ig"),
            vt = function (t, e, i) {
                var n = "0x" + e - 65536;
                return n !== n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            _t = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            yt = function (t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            },
            wt = function () {
                S()
            },
            xt = d(function (t) {
                return !0 === t.disabled && ("form" in t || "label" in t)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            G.apply(K = Q.call(z.childNodes), z.childNodes), K[z.childNodes.length].nodeType
        } catch (t) {
            G = {
                apply: K.length ? function (t, e) {
                    X.apply(t, Q.call(e))
                } : function (t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++];);
                    t.length = i - 1
                }
            }
        }
        y = e.support = {}, k = e.isXML = function (t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }, S = e.setDocument = function (t) {
            var e, i, n = t ? t.ownerDocument || t : z;
            return n !== j && 9 === n.nodeType && n.documentElement ? (j = n, A = j.documentElement, E = !k(j), z !== j && (i = j.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", wt, !1) : i.attachEvent && i.attachEvent("onunload", wt)), y.attributes = s(function (t) {
                return t.className = "i", !t.getAttribute("className")
            }), y.getElementsByTagName = s(function (t) {
                return t.appendChild(j.createComment("")), !t.getElementsByTagName("*").length
            }), y.getElementsByClassName = ft.test(j.getElementsByClassName), y.getById = s(function (t) {
                return A.appendChild(t).id = $, !j.getElementsByName || !j.getElementsByName($).length
            }), y.getById ? (w.filter.ID = function (t) {
                var e = t.replace(bt, vt);
                return function (t) {
                    return t.getAttribute("id") === e
                }
            }, w.find.ID = function (t, e) {
                if (void 0 !== e.getElementById && E) {
                    var i = e.getElementById(t);
                    return i ? [i] : []
                }
            }) : (w.filter.ID = function (t) {
                var e = t.replace(bt, vt);
                return function (t) {
                    var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return i && i.value === e
                }
            }, w.find.ID = function (t, e) {
                if (void 0 !== e.getElementById && E) {
                    var i, n, s, o = e.getElementById(t);
                    if (o) {
                        if ((i = o.getAttributeNode("id")) && i.value === t) return [o];
                        for (s = e.getElementsByName(t), n = 0; o = s[n++];)
                            if ((i = o.getAttributeNode("id")) && i.value === t) return [o]
                    }
                    return []
                }
            }), w.find.TAG = y.getElementsByTagName ? function (t, e) {
                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : y.qsa ? e.querySelectorAll(t) : void 0
            } : function (t, e) {
                var i, n = [],
                    s = 0,
                    o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; i = o[s++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return o
            }, w.find.CLASS = y.getElementsByClassName && function (t, e) {
                if (void 0 !== e.getElementsByClassName && E) return e.getElementsByClassName(t)
            }, N = [], O = [], (y.qsa = ft.test(j.querySelectorAll)) && (s(function (t) {
                A.appendChild(t).innerHTML = "<a id='" + $ + "'></a><select id='" + $ + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + tt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || O.push("\\[" + tt + "*(?:value|" + J + ")"), t.querySelectorAll("[id~=" + $ + "-]").length || O.push("~="), t.querySelectorAll(":checked").length || O.push(":checked"), t.querySelectorAll("a#" + $ + "+*").length || O.push(".#.+[+~]")
            }), s(function (t) {
                t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = j.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && O.push("name" + tt + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && O.push(":enabled", ":disabled"), A.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && O.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), O.push(",.*:")
            })), (y.matchesSelector = ft.test(H = A.matches || A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && s(function (t) {
                y.disconnectedMatch = H.call(t, "*"), H.call(t, "[s!='']:x"), N.push("!=", nt)
            }), O = O.length && new RegExp(O.join("|")), N = N.length && new RegExp(N.join("|")), e = ft.test(A.compareDocumentPosition), L = e || ft.test(A.contains) ? function (t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t,
                    n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
            } : function (t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, U = e ? function (t, e) {
                if (t === e) return P = !0, 0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i || (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !y.sortDetached && e.compareDocumentPosition(t) === i ? t === j || t.ownerDocument === z && L(z, t) ? -1 : e === j || e.ownerDocument === z && L(z, e) ? 1 : I ? Z(I, t) - Z(I, e) : 0 : 4 & i ? -1 : 1)
            } : function (t, e) {
                if (t === e) return P = !0, 0;
                var i, n = 0,
                    s = t.parentNode,
                    o = e.parentNode,
                    r = [t],
                    l = [e];
                if (!s || !o) return t === j ? -1 : e === j ? 1 : s ? -1 : o ? 1 : I ? Z(I, t) - Z(I, e) : 0;
                if (s === o) return a(t, e);
                for (i = t; i = i.parentNode;) r.unshift(i);
                for (i = e; i = i.parentNode;) l.unshift(i);
                for (; r[n] === l[n];) n++;
                return n ? a(r[n], l[n]) : r[n] === z ? -1 : l[n] === z ? 1 : 0
            }, j) : j
        }, e.matches = function (t, i) {
            return e(t, null, null, i)
        }, e.matchesSelector = function (t, i) {
            if ((t.ownerDocument || t) !== j && S(t), i = i.replace(lt, "='$1']"), y.matchesSelector && E && !B[i + " "] && (!N || !N.test(i)) && (!O || !O.test(i))) try {
                var n = H.call(t, i);
                if (n || y.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
            } catch (t) {}
            return e(i, j, null, [t]).length > 0
        }, e.contains = function (t, e) {
            return (t.ownerDocument || t) !== j && S(t), L(t, e)
        }, e.attr = function (t, e) {
            (t.ownerDocument || t) !== j && S(t);
            var i = w.attrHandle[e.toLowerCase()],
                n = i && Y.call(w.attrHandle, e.toLowerCase()) ? i(t, e, !E) : void 0;
            return void 0 !== n ? n : y.attributes || !E ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }, e.escape = function (t) {
            return (t + "").replace(_t, yt)
        }, e.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function (t) {
            var e, i = [],
                n = 0,
                s = 0;
            if (P = !y.detectDuplicates, I = !y.sortStable && t.slice(0), t.sort(U), P) {
                for (; e = t[s++];) e === t[s] && (n = i.push(s));
                for (; n--;) t.splice(i[n], 1)
            }
            return I = null, t
        }, x = e.getText = function (t) {
            var e, i = "",
                n = 0,
                s = t.nodeType;
            if (s) {
                if (1 === s || 9 === s || 11 === s) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += x(t)
                } else if (3 === s || 4 === s) return t.nodeValue
            } else
                for (; e = t[n++];) i += x(e);
            return i
        }, w = e.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: ut,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (t) {
                    return t[1] = t[1].replace(bt, vt), t[3] = (t[3] || t[4] || t[5] || "").replace(bt, vt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function (t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function (t) {
                    var e, i = !t[6] && t[2];
                    return ut.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ct.test(i) && (e = C(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function (t) {
                    var e = t.replace(bt, vt).toLowerCase();
                    return "*" === t ? function () {
                        return !0
                    } : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function (t) {
                    var e = R[t + " "];
                    return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && R(t, function (t) {
                        return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function (t, i, n) {
                    return function (s) {
                        var o = e.attr(s, t);
                        return null == o ? "!=" === i : !i || (o += "", "=" === i ? o === n : "!=" === i ? o !== n : "^=" === i ? n && 0 === o.indexOf(n) : "*=" === i ? n && o.indexOf(n) > -1 : "$=" === i ? n && o.slice(-n.length) === n : "~=" === i ? (" " + o.replace(st, " ") + " ").indexOf(n) > -1 : "|=" === i && (o === n || o.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function (t, e, i, n, s) {
                    var o = "nth" !== t.slice(0, 3),
                        a = "last" !== t.slice(-4),
                        r = "of-type" === e;
                    return 1 === n && 0 === s ? function (t) {
                        return !!t.parentNode
                    } : function (e, i, l) {
                        var c, h, u, d, p, f, m = o !== a ? "nextSibling" : "previousSibling",
                            g = e.parentNode,
                            b = r && e.nodeName.toLowerCase(),
                            v = !l && !r,
                            _ = !1;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (d = e; d = d[m];)
                                        if (r ? d.nodeName.toLowerCase() === b : 1 === d.nodeType) return !1;
                                    f = m = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [a ? g.firstChild : g.lastChild], a && v) {
                                for (d = g, u = d[$] || (d[$] = {}), h = u[d.uniqueID] || (u[d.uniqueID] = {}), c = h[t] || [], p = c[0] === F && c[1], _ = p && c[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (_ = p = 0) || f.pop();)
                                    if (1 === d.nodeType && ++_ && d === e) {
                                        h[t] = [F, p, _];
                                        break
                                    }
                            } else if (v && (d = e, u = d[$] || (d[$] = {}), h = u[d.uniqueID] || (u[d.uniqueID] = {}), c = h[t] || [], p = c[0] === F && c[1], _ = p), !1 === _)
                                for (;
                                    (d = ++p && d && d[m] || (_ = p = 0) || f.pop()) && ((r ? d.nodeName.toLowerCase() !== b : 1 !== d.nodeType) || !++_ || (v && (u = d[$] || (d[$] = {}), h = u[d.uniqueID] || (u[d.uniqueID] = {}), h[t] = [F, _]), d !== e)););
                            return (_ -= s) === n || _ % n == 0 && _ / n >= 0
                        }
                    }
                },
                PSEUDO: function (t, i) {
                    var s, o = w.pseudos[t] || w.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[$] ? o(i) : o.length > 1 ? (s = [t, t, "", i], w.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function (t, e) {
                        for (var n, s = o(t, i), a = s.length; a--;) n = Z(t, s[a]), t[n] = !(e[n] = s[a])
                    }) : function (t) {
                        return o(t, 0, s)
                    }) : o
                }
            },
            pseudos: {
                not: n(function (t) {
                    var e = [],
                        i = [],
                        s = D(t.replace(ot, "$1"));
                    return s[$] ? n(function (t, e, i, n) {
                        for (var o, a = s(t, null, n, []), r = t.length; r--;)(o = a[r]) && (t[r] = !(e[r] = o))
                    }) : function (t, n, o) {
                        return e[0] = t, s(e, null, o, i), e[0] = null, !i.pop()
                    }
                }),
                has: n(function (t) {
                    return function (i) {
                        return e(t, i).length > 0
                    }
                }),
                contains: n(function (t) {
                    return t = t.replace(bt, vt),
                        function (e) {
                            return (e.textContent || e.innerText || x(e)).indexOf(t) > -1
                        }
                }),
                lang: n(function (t) {
                    return ht.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(bt, vt).toLowerCase(),
                        function (e) {
                            var i;
                            do {
                                if (i = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function (e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id
                },
                root: function (t) {
                    return t === A
                },
                focus: function (t) {
                    return t === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: r(!1),
                disabled: r(!0),
                checked: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function (t) {
                    return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                },
                empty: function (t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function (t) {
                    return !w.pseudos.empty(t)
                },
                header: function (t) {
                    return pt.test(t.nodeName)
                },
                input: function (t) {
                    return dt.test(t.nodeName)
                },
                button: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function (t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: l(function () {
                    return [0]
                }),
                last: l(function (t, e) {
                    return [e - 1]
                }),
                eq: l(function (t, e, i) {
                    return [i < 0 ? i + e : i]
                }),
                even: l(function (t, e) {
                    for (var i = 0; i < e; i += 2) t.push(i);
                    return t
                }),
                odd: l(function (t, e) {
                    for (var i = 1; i < e; i += 2) t.push(i);
                    return t
                }),
                lt: l(function (t, e, i) {
                    for (var n = i < 0 ? i + e : i; --n >= 0;) t.push(n);
                    return t
                }),
                gt: l(function (t, e, i) {
                    for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
                    return t
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (_ in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[_] = function (t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }(_);
        for (_ in {
                submit: !0,
                reset: !0
            }) w.pseudos[_] = function (t) {
            return function (e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t
            }
        }(_);
        return h.prototype = w.filters = w.pseudos, w.setFilters = new h, C = e.tokenize = function (t, i) {
            var n, s, o, a, r, l, c, h = q[t + " "];
            if (h) return i ? 0 : h.slice(0);
            for (r = t, l = [], c = w.preFilter; r;) {
                n && !(s = at.exec(r)) || (s && (r = r.slice(s[0].length) || r), l.push(o = [])), n = !1, (s = rt.exec(r)) && (n = s.shift(), o.push({
                    value: n,
                    type: s[0].replace(ot, " ")
                }), r = r.slice(n.length));
                for (a in w.filter) !(s = ut[a].exec(r)) || c[a] && !(s = c[a](s)) || (n = s.shift(), o.push({
                    value: n,
                    type: a,
                    matches: s
                }), r = r.slice(n.length));
                if (!n) break
            }
            return i ? r.length : r ? e.error(t) : q(t, l).slice(0)
        }, D = e.compile = function (t, e) {
            var i, n = [],
                s = [],
                o = B[t + " "];
            if (!o) {
                for (e || (e = C(t)), i = e.length; i--;) o = b(e[i]), o[$] ? n.push(o) : s.push(o);
                o = B(t, v(s, n)), o.selector = t
            }
            return o
        }, T = e.select = function (t, e, i, n) {
            var s, o, a, r, l, h = "function" == typeof t && t,
                d = !n && C(t = h.selector || t);
            if (i = i || [], 1 === d.length) {
                if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === e.nodeType && E && w.relative[o[1].type]) {
                    if (!(e = (w.find.ID(a.matches[0].replace(bt, vt), e) || [])[0])) return i;
                    h && (e = e.parentNode), t = t.slice(o.shift().value.length)
                }
                for (s = ut.needsContext.test(t) ? 0 : o.length; s-- && (a = o[s], !w.relative[r = a.type]);)
                    if ((l = w.find[r]) && (n = l(a.matches[0].replace(bt, vt), gt.test(o[0].type) && c(e.parentNode) || e))) {
                        if (o.splice(s, 1), !(t = n.length && u(o))) return G.apply(i, n), i;
                        break
                    }
            }
            return (h || D(t, d))(n, e, !E, i, !e || gt.test(t) && c(e.parentNode) || e), i
        }, y.sortStable = $.split("").sort(U).join("") === $, y.detectDuplicates = !!P, S(), y.sortDetached = s(function (t) {
            return 1 & t.compareDocumentPosition(j.createElement("fieldset"))
        }), s(function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (t, e, i) {
            if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), y.attributes && s(function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || o("value", function (t, e, i) {
            if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        }), s(function (t) {
            return null == t.getAttribute("disabled")
        }) || o(J, function (t, e, i) {
            var n;
            if (!i) return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }), e
    }(t);
    mt.find = yt, mt.expr = yt.selectors, mt.expr[":"] = mt.expr.pseudos, mt.uniqueSort = mt.unique = yt.uniqueSort, mt.text = yt.getText, mt.isXMLDoc = yt.isXML, mt.contains = yt.contains, mt.escapeSelector = yt.escape;
    var wt = function (t, e, i) {
            for (var n = [], s = void 0 !== i;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (s && mt(t).is(i)) break;
                    n.push(t)
                } return n
        },
        xt = function (t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        },
        kt = mt.expr.match.needsContext,
        Ct = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        Dt = /^.[^:#\[\.,]*$/;
    mt.filter = function (t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? mt.find.matchesSelector(n, t) ? [n] : [] : mt.find.matches(t, mt.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, mt.fn.extend({
        find: function (t) {
            var e, i, n = this.length,
                s = this;
            if ("string" != typeof t) return this.pushStack(mt(t).filter(function () {
                for (e = 0; e < n; e++)
                    if (mt.contains(s[e], this)) return !0
            }));
            for (i = this.pushStack([]), e = 0; e < n; e++) mt.find(t, s[e], i);
            return n > 1 ? mt.uniqueSort(i) : i
        },
        filter: function (t) {
            return this.pushStack(o(this, t || [], !1))
        },
        not: function (t) {
            return this.pushStack(o(this, t || [], !0))
        },
        is: function (t) {
            return !!o(this, "string" == typeof t && kt.test(t) ? mt(t) : t || [], !1).length
        }
    });
    var Tt, Mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (mt.fn.init = function (t, e, i) {
        var n, s;
        if (!t) return this;
        if (i = i || Tt, "string" == typeof t) {
            if (!(n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : Mt.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
            if (n[1]) {
                if (e = e instanceof mt ? e[0] : e, mt.merge(this, mt.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : it, !0)), Ct.test(n[1]) && mt.isPlainObject(e))
                    for (n in e) mt.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                return this
            }
            return s = it.getElementById(n[2]), s && (this[0] = s, this.length = 1), this
        }
        return t.nodeType ? (this[0] = t, this.length = 1, this) : mt.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(mt) : mt.makeArray(t, this)
    }).prototype = mt.fn, Tt = mt(it);
    var It = /^(?:parents|prev(?:Until|All))/,
        Pt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    mt.fn.extend({
        has: function (t) {
            var e = mt(t, this),
                i = e.length;
            return this.filter(function () {
                for (var t = 0; t < i; t++)
                    if (mt.contains(this, e[t])) return !0
            })
        },
        closest: function (t, e) {
            var i, n = 0,
                s = this.length,
                o = [],
                a = "string" != typeof t && mt(t);
            if (!kt.test(t))
                for (; n < s; n++)
                    for (i = this[n]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (a ? a.index(i) > -1 : 1 === i.nodeType && mt.find.matchesSelector(i, t))) {
                            o.push(i);
                            break
                        } return this.pushStack(o.length > 1 ? mt.uniqueSort(o) : o)
        },
        index: function (t) {
            return t ? "string" == typeof t ? rt.call(mt(t), this[0]) : rt.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (t, e) {
            return this.pushStack(mt.uniqueSort(mt.merge(this.get(), mt(t, e))))
        },
        addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), mt.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function (t) {
            return wt(t, "parentNode")
        },
        parentsUntil: function (t, e, i) {
            return wt(t, "parentNode", i)
        },
        next: function (t) {
            return a(t, "nextSibling")
        },
        prev: function (t) {
            return a(t, "previousSibling")
        },
        nextAll: function (t) {
            return wt(t, "nextSibling")
        },
        prevAll: function (t) {
            return wt(t, "previousSibling")
        },
        nextUntil: function (t, e, i) {
            return wt(t, "nextSibling", i)
        },
        prevUntil: function (t, e, i) {
            return wt(t, "previousSibling", i)
        },
        siblings: function (t) {
            return xt((t.parentNode || {}).firstChild, t)
        },
        children: function (t) {
            return xt(t.firstChild)
        },
        contents: function (t) {
            return s(t, "iframe") ? t.contentDocument : (s(t, "template") && (t = t.content || t), mt.merge([], t.childNodes))
        }
    }, function (t, e) {
        mt.fn[t] = function (i, n) {
            var s = mt.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (s = mt.filter(n, s)), this.length > 1 && (Pt[t] || mt.uniqueSort(s), It.test(t) && s.reverse()), this.pushStack(s)
        }
    });
    var St = /[^\x20\t\r\n\f]+/g;
    mt.Callbacks = function (t) {
        t = "string" == typeof t ? r(t) : mt.extend({}, t);
        var e, i, n, s, o = [],
            a = [],
            l = -1,
            c = function () {
                for (s = s || t.once, n = e = !0; a.length; l = -1)
                    for (i = a.shift(); ++l < o.length;) !1 === o[l].apply(i[0], i[1]) && t.stopOnFalse && (l = o.length, i = !1);
                t.memory || (i = !1), e = !1, s && (o = i ? [] : "")
            },
            h = {
                add: function () {
                    return o && (i && !e && (l = o.length - 1, a.push(i)), function e(i) {
                        mt.each(i, function (i, n) {
                            mt.isFunction(n) ? t.unique && h.has(n) || o.push(n) : n && n.length && "string" !== mt.type(n) && e(n)
                        })
                    }(arguments), i && !e && c()), this
                },
                remove: function () {
                    return mt.each(arguments, function (t, e) {
                        for (var i;
                            (i = mt.inArray(e, o, i)) > -1;) o.splice(i, 1), i <= l && l--
                    }), this
                },
                has: function (t) {
                    return t ? mt.inArray(t, o) > -1 : o.length > 0
                },
                empty: function () {
                    return o && (o = []), this
                },
                disable: function () {
                    return s = a = [], o = i = "", this
                },
                disabled: function () {
                    return !o
                },
                lock: function () {
                    return s = a = [], i || e || (o = i = ""), this
                },
                locked: function () {
                    return !!s
                },
                fireWith: function (t, i) {
                    return s || (i = i || [], i = [t, i.slice ? i.slice() : i], a.push(i), e || c()), this
                },
                fire: function () {
                    return h.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!n
                }
            };
        return h
    }, mt.extend({
        Deferred: function (e) {
            var i = [
                    ["notify", "progress", mt.Callbacks("memory"), mt.Callbacks("memory"), 2],
                    ["resolve", "done", mt.Callbacks("once memory"), mt.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", mt.Callbacks("once memory"), mt.Callbacks("once memory"), 1, "rejected"]
                ],
                n = "pending",
                s = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function (t) {
                        return s.then(null, t)
                    },
                    pipe: function () {
                        var t = arguments;
                        return mt.Deferred(function (e) {
                            mt.each(i, function (i, n) {
                                var s = mt.isFunction(t[n[4]]) && t[n[4]];
                                o[n[1]](function () {
                                    var t = s && s.apply(this, arguments);
                                    t && mt.isFunction(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[n[0] + "With"](this, s ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    then: function (e, n, s) {
                        function o(e, i, n, s) {
                            return function () {
                                var r = this,
                                    h = arguments,
                                    u = function () {
                                        var t, u;
                                        if (!(e < a)) {
                                            if ((t = n.apply(r, h)) === i.promise()) throw new TypeError("Thenable self-resolution");
                                            u = t && ("object" == typeof t || "function" == typeof t) && t.then, mt.isFunction(u) ? s ? u.call(t, o(a, i, l, s), o(a, i, c, s)) : (a++, u.call(t, o(a, i, l, s), o(a, i, c, s), o(a, i, l, i.notifyWith))) : (n !== l && (r = void 0, h = [t]), (s || i.resolveWith)(r, h))
                                        }
                                    },
                                    d = s ? u : function () {
                                        try {
                                            u()
                                        } catch (t) {
                                            mt.Deferred.exceptionHook && mt.Deferred.exceptionHook(t, d.stackTrace), e + 1 >= a && (n !== c && (r = void 0, h = [t]), i.rejectWith(r, h))
                                        }
                                    };
                                e ? d() : (mt.Deferred.getStackHook && (d.stackTrace = mt.Deferred.getStackHook()), t.setTimeout(d))
                            }
                        }
                        var a = 0;
                        return mt.Deferred(function (t) {
                            i[0][3].add(o(0, t, mt.isFunction(s) ? s : l, t.notifyWith)), i[1][3].add(o(0, t, mt.isFunction(e) ? e : l)), i[2][3].add(o(0, t, mt.isFunction(n) ? n : c))
                        }).promise()
                    },
                    promise: function (t) {
                        return null != t ? mt.extend(t, s) : s
                    }
                },
                o = {};
            return mt.each(i, function (t, e) {
                var a = e[2],
                    r = e[5];
                s[e[1]] = a.add, r && a.add(function () {
                    n = r
                }, i[3 - t][2].disable, i[0][2].lock), a.add(e[3].fire), o[e[0]] = function () {
                    return o[e[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[e[0] + "With"] = a.fireWith
            }), s.promise(o), e && e.call(o, o), o
        },
        when: function (t) {
            var e = arguments.length,
                i = e,
                n = Array(i),
                s = st.call(arguments),
                o = mt.Deferred(),
                a = function (t) {
                    return function (i) {
                        n[t] = this, s[t] = arguments.length > 1 ? st.call(arguments) : i, --e || o.resolveWith(n, s)
                    }
                };
            if (e <= 1 && (h(t, o.done(a(i)).resolve, o.reject, !e), "pending" === o.state() || mt.isFunction(s[i] && s[i].then))) return o.then();
            for (; i--;) h(s[i], a(i), o.reject);
            return o.promise()
        }
    });
    var jt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    mt.Deferred.exceptionHook = function (e, i) {
        t.console && t.console.warn && e && jt.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, i)
    }, mt.readyException = function (e) {
        t.setTimeout(function () {
            throw e
        })
    };
    var At = mt.Deferred();
    mt.fn.ready = function (t) {
        return At.then(t).catch(function (t) {
            mt.readyException(t)
        }), this
    }, mt.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (t) {
            (!0 === t ? --mt.readyWait : mt.isReady) || (mt.isReady = !0, !0 !== t && --mt.readyWait > 0 || At.resolveWith(it, [mt]))
        }
    }), mt.ready.then = At.then, "complete" === it.readyState || "loading" !== it.readyState && !it.documentElement.doScroll ? t.setTimeout(mt.ready) : (it.addEventListener("DOMContentLoaded", u), t.addEventListener("load", u));
    var Et = function (t, e, i, n, s, o, a) {
            var r = 0,
                l = t.length,
                c = null == i;
            if ("object" === mt.type(i)) {
                s = !0;
                for (r in i) Et(t, e, r, i[r], !0, o, a)
            } else if (void 0 !== n && (s = !0, mt.isFunction(n) || (a = !0), c && (a ? (e.call(t, n), e = null) : (c = e, e = function (t, e, i) {
                    return c.call(mt(t), i)
                })), e))
                for (; r < l; r++) e(t[r], i, a ? n : n.call(t[r], r, e(t[r], i)));
            return s ? t : c ? e.call(t) : l ? e(t[0], i) : o
        },
        Ot = function (t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };
    d.uid = 1, d.prototype = {
        cache: function (t) {
            var e = t[this.expando];
            return e || (e = {}, Ot(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        },
        set: function (t, e, i) {
            var n, s = this.cache(t);
            if ("string" == typeof e) s[mt.camelCase(e)] = i;
            else
                for (n in e) s[mt.camelCase(n)] = e[n];
            return s
        },
        get: function (t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][mt.camelCase(e)]
        },
        access: function (t, e, i) {
            return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e)
        },
        remove: function (t, e) {
            var i, n = t[this.expando];
            if (void 0 !== n) {
                if (void 0 !== e) {
                    Array.isArray(e) ? e = e.map(mt.camelCase) : (e = mt.camelCase(e), e = e in n ? [e] : e.match(St) || []), i = e.length;
                    for (; i--;) delete n[e[i]]
                }(void 0 === e || mt.isEmptyObject(n)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function (t) {
            var e = t[this.expando];
            return void 0 !== e && !mt.isEmptyObject(e)
        }
    };
    var Nt = new d,
        Ht = new d,
        Lt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        $t = /[A-Z]/g;
    mt.extend({
        hasData: function (t) {
            return Ht.hasData(t) || Nt.hasData(t)
        },
        data: function (t, e, i) {
            return Ht.access(t, e, i)
        },
        removeData: function (t, e) {
            Ht.remove(t, e)
        },
        _data: function (t, e, i) {
            return Nt.access(t, e, i)
        },
        _removeData: function (t, e) {
            Nt.remove(t, e)
        }
    }), mt.fn.extend({
        data: function (t, e) {
            var i, n, s, o = this[0],
                a = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (s = Ht.get(o), 1 === o.nodeType && !Nt.get(o, "hasDataAttrs"))) {
                    for (i = a.length; i--;) a[i] && (n = a[i].name, 0 === n.indexOf("data-") && (n = mt.camelCase(n.slice(5)), f(o, n, s[n])));
                    Nt.set(o, "hasDataAttrs", !0)
                }
                return s
            }
            return "object" == typeof t ? this.each(function () {
                Ht.set(this, t)
            }) : Et(this, function (e) {
                var i;
                if (o && void 0 === e) {
                    if (void 0 !== (i = Ht.get(o, t))) return i;
                    if (void 0 !== (i = f(o, t))) return i
                } else this.each(function () {
                    Ht.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function (t) {
            return this.each(function () {
                Ht.remove(this, t)
            })
        }
    }), mt.extend({
        queue: function (t, e, i) {
            var n;
            if (t) return e = (e || "fx") + "queue", n = Nt.get(t, e), i && (!n || Array.isArray(i) ? n = Nt.access(t, e, mt.makeArray(i)) : n.push(i)), n || []
        },
        dequeue: function (t, e) {
            e = e || "fx";
            var i = mt.queue(t, e),
                n = i.length,
                s = i.shift(),
                o = mt._queueHooks(t, e),
                a = function () {
                    mt.dequeue(t, e)
                };
            "inprogress" === s && (s = i.shift(), n--), s && ("fx" === e && i.unshift("inprogress"), delete o.stop, s.call(t, a, o)), !n && o && o.empty.fire()
        },
        _queueHooks: function (t, e) {
            var i = e + "queueHooks";
            return Nt.get(t, i) || Nt.access(t, i, {
                empty: mt.Callbacks("once memory").add(function () {
                    Nt.remove(t, [e + "queue", i])
                })
            })
        }
    }), mt.fn.extend({
        queue: function (t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? mt.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                var i = mt.queue(this, t, e);
                mt._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && mt.dequeue(this, t)
            })
        },
        dequeue: function (t) {
            return this.each(function () {
                mt.dequeue(this, t)
            })
        },
        clearQueue: function (t) {
            return this.queue(t || "fx", [])
        },
        promise: function (t, e) {
            var i, n = 1,
                s = mt.Deferred(),
                o = this,
                a = this.length,
                r = function () {
                    --n || s.resolveWith(o, [o])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)(i = Nt.get(o[a], t + "queueHooks")) && i.empty && (n++, i.empty.add(r));
            return r(), s.promise(e)
        }
    });
    var zt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ft = new RegExp("^(?:([+-])=|)(" + zt + ")([a-z%]*)$", "i"),
        Wt = ["Top", "Right", "Bottom", "Left"],
        Rt = function (t, e) {
            return t = e || t, "none" === t.style.display || "" === t.style.display && mt.contains(t.ownerDocument, t) && "none" === mt.css(t, "display")
        },
        qt = function (t, e, i, n) {
            var s, o, a = {};
            for (o in e) a[o] = t.style[o], t.style[o] = e[o];
            s = i.apply(t, n || []);
            for (o in e) t.style[o] = a[o];
            return s
        },
        Bt = {};
    mt.fn.extend({
        show: function () {
            return b(this, !0)
        },
        hide: function () {
            return b(this)
        },
        toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                Rt(this) ? mt(this).show() : mt(this).hide()
            })
        }
    });
    var Ut = /^(?:checkbox|radio)$/i,
        Yt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Kt = /^$|\/(?:java|ecma)script/i,
        Vt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Vt.optgroup = Vt.option, Vt.tbody = Vt.tfoot = Vt.colgroup = Vt.caption = Vt.thead, Vt.th = Vt.td;
    var Xt = /<|&#?\w+;/;
    ! function () {
        var t = it.createDocumentFragment(),
            e = t.appendChild(it.createElement("div")),
            i = it.createElement("input");
        i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), e.appendChild(i), pt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", pt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Gt = it.documentElement,
        Qt = /^key/,
        Zt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Jt = /^([^.]*)(?:\.(.+)|)/;
    mt.event = {
        global: {},
        add: function (t, e, i, n, s) {
            var o, a, r, l, c, h, u, d, p, f, m, g = Nt.get(t);
            if (g)
                for (i.handler && (o = i, i = o.handler, s = o.selector), s && mt.find.matchesSelector(Gt, s), i.guid || (i.guid = mt.guid++), (l = g.events) || (l = g.events = {}), (a = g.handle) || (a = g.handle = function (e) {
                        return void 0 !== mt && mt.event.triggered !== e.type ? mt.event.dispatch.apply(t, arguments) : void 0
                    }), e = (e || "").match(St) || [""], c = e.length; c--;) r = Jt.exec(e[c]) || [], p = m = r[1], f = (r[2] || "").split(".").sort(), p && (u = mt.event.special[p] || {}, p = (s ? u.delegateType : u.bindType) || p, u = mt.event.special[p] || {}, h = mt.extend({
                    type: p,
                    origType: m,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: s,
                    needsContext: s && mt.expr.match.needsContext.test(s),
                    namespace: f.join(".")
                }, o), (d = l[p]) || (d = l[p] = [], d.delegateCount = 0, u.setup && !1 !== u.setup.call(t, n, f, a) || t.addEventListener && t.addEventListener(p, a)), u.add && (u.add.call(t, h), h.handler.guid || (h.handler.guid = i.guid)), s ? d.splice(d.delegateCount++, 0, h) : d.push(h), mt.event.global[p] = !0)
        },
        remove: function (t, e, i, n, s) {
            var o, a, r, l, c, h, u, d, p, f, m, g = Nt.hasData(t) && Nt.get(t);
            if (g && (l = g.events)) {
                for (e = (e || "").match(St) || [""], c = e.length; c--;)
                    if (r = Jt.exec(e[c]) || [], p = m = r[1], f = (r[2] || "").split(".").sort(), p) {
                        for (u = mt.event.special[p] || {}, p = (n ? u.delegateType : u.bindType) || p, d = l[p] || [], r = r[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) h = d[o], !s && m !== h.origType || i && i.guid !== h.guid || r && !r.test(h.namespace) || n && n !== h.selector && ("**" !== n || !h.selector) || (d.splice(o, 1), h.selector && d.delegateCount--, u.remove && u.remove.call(t, h));
                        a && !d.length && (u.teardown && !1 !== u.teardown.call(t, f, g.handle) || mt.removeEvent(t, p, g.handle), delete l[p])
                    } else
                        for (p in l) mt.event.remove(t, p + e[c], i, n, !0);
                mt.isEmptyObject(l) && Nt.remove(t, "handle events")
            }
        },
        dispatch: function (t) {
            var e, i, n, s, o, a, r = mt.event.fix(t),
                l = new Array(arguments.length),
                c = (Nt.get(this, "events") || {})[r.type] || [],
                h = mt.event.special[r.type] || {};
            for (l[0] = r, e = 1; e < arguments.length; e++) l[e] = arguments[e];
            if (r.delegateTarget = this, !h.preDispatch || !1 !== h.preDispatch.call(this, r)) {
                for (a = mt.event.handlers.call(this, r, c), e = 0;
                    (s = a[e++]) && !r.isPropagationStopped();)
                    for (r.currentTarget = s.elem, i = 0;
                        (o = s.handlers[i++]) && !r.isImmediatePropagationStopped();) r.rnamespace && !r.rnamespace.test(o.namespace) || (r.handleObj = o, r.data = o.data, void 0 !== (n = ((mt.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, l)) && !1 === (r.result = n) && (r.preventDefault(), r.stopPropagation()));
                return h.postDispatch && h.postDispatch.call(this, r), r.result
            }
        },
        handlers: function (t, e) {
            var i, n, s, o, a, r = [],
                l = e.delegateCount,
                c = t.target;
            if (l && c.nodeType && !("click" === t.type && t.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                        for (o = [], a = {}, i = 0; i < l; i++) n = e[i], s = n.selector + " ", void 0 === a[s] && (a[s] = n.needsContext ? mt(s, this).index(c) > -1 : mt.find(s, this, null, [c]).length), a[s] && o.push(n);
                        o.length && r.push({
                            elem: c,
                            handlers: o
                        })
                    } return c = this, l < e.length && r.push({
                elem: c,
                handlers: e.slice(l)
            }), r
        },
        addProp: function (t, e) {
            Object.defineProperty(mt.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: mt.isFunction(e) ? function () {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function (e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function (t) {
            return t[mt.expando] ? t : new mt.Event(t)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== k() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === k() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && s(this, "input")) return this.click(), !1
                },
                _default: function (t) {
                    return s(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, mt.removeEvent = function (t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i)
    }, mt.Event = function (t, e) {
        return this instanceof mt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? w : x, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && mt.extend(this, e), this.timeStamp = t && t.timeStamp || mt.now(), void(this[mt.expando] = !0)) : new mt.Event(t, e)
    }, mt.Event.prototype = {
        constructor: mt.Event,
        isDefaultPrevented: x,
        isPropagationStopped: x,
        isImmediatePropagationStopped: x,
        isSimulated: !1,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = w, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = w, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = w, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, mt.each({
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
            return null == t.which && Qt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Zt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
    }, mt.event.addProp), mt.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (t, e) {
        mt.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function (t) {
                var i, n = this,
                    s = t.relatedTarget,
                    o = t.handleObj;
                return s && (s === n || mt.contains(n, s)) || (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i
            }
        }
    }), mt.fn.extend({
        on: function (t, e, i, n) {
            return C(this, t, e, i, n)
        },
        one: function (t, e, i, n) {
            return C(this, t, e, i, n, 1)
        },
        off: function (t, e, i) {
            var n, s;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, mt(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof t) {
                for (s in t) this.off(s, e, t[s]);
                return this
            }
            return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = x), this.each(function () {
                mt.event.remove(this, t, i, e)
            })
        }
    });
    var te = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        ee = /<script|<style|<link/i,
        ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ne = /^true\/(.*)/,
        se = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    mt.extend({
        htmlPrefilter: function (t) {
            return t.replace(te, "<$1></$2>")
        },
        clone: function (t, e, i) {
            var n, s, o, a, r = t.cloneNode(!0),
                l = mt.contains(t.ownerDocument, t);
            if (!(pt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || mt.isXMLDoc(t)))
                for (a = v(r), o = v(t), n = 0, s = o.length; n < s; n++) P(o[n], a[n]);
            if (e)
                if (i)
                    for (o = o || v(t), a = a || v(r), n = 0, s = o.length; n < s; n++) I(o[n], a[n]);
                else I(t, r);
            return a = v(r, "script"), a.length > 0 && _(a, !l && v(t, "script")), r
        },
        cleanData: function (t) {
            for (var e, i, n, s = mt.event.special, o = 0; void 0 !== (i = t[o]); o++)
                if (Ot(i)) {
                    if (e = i[Nt.expando]) {
                        if (e.events)
                            for (n in e.events) s[n] ? mt.event.remove(i, n) : mt.removeEvent(i, n, e.handle);
                        i[Nt.expando] = void 0
                    }
                    i[Ht.expando] && (i[Ht.expando] = void 0)
                }
        }
    }), mt.fn.extend({
        detach: function (t) {
            return j(this, t, !0)
        },
        remove: function (t) {
            return j(this, t)
        },
        text: function (t) {
            return Et(this, function (t) {
                return void 0 === t ? mt.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function () {
            return S(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    D(this, t).appendChild(t)
                }
            })
        },
        prepend: function () {
            return S(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = D(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function () {
            return S(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function () {
            return S(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (mt.cleanData(v(t, !1)), t.textContent = "");
            return this
        },
        clone: function (t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function () {
                return mt.clone(this, t, e)
            })
        },
        html: function (t) {
            return Et(this, function (t) {
                var e = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !ee.test(t) && !Vt[(Yt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = mt.htmlPrefilter(t);
                    try {
                        for (; i < n; i++) e = this[i] || {}, 1 === e.nodeType && (mt.cleanData(v(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function () {
            var t = [];
            return S(this, arguments, function (e) {
                var i = this.parentNode;
                mt.inArray(this, t) < 0 && (mt.cleanData(v(this)), i && i.replaceChild(e, this))
            }, t)
        }
    }), mt.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, e) {
        mt.fn[t] = function (t) {
            for (var i, n = [], s = mt(t), o = s.length - 1, a = 0; a <= o; a++) i = a === o ? this : this.clone(!0), mt(s[a])[e](i), at.apply(n, i.get());
            return this.pushStack(n)
        }
    });
    var oe = /^margin/,
        ae = new RegExp("^(" + zt + ")(?!px)[a-z%]+$", "i"),
        re = function (e) {
            var i = e.ownerDocument.defaultView;
            return i && i.opener || (i = t), i.getComputedStyle(e)
        };
    ! function () {
        function e() {
            if (r) {
                r.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", r.innerHTML = "", Gt.appendChild(a);
                var e = t.getComputedStyle(r);
                i = "1%" !== e.top, o = "2px" === e.marginLeft, n = "4px" === e.width, r.style.marginRight = "50%", s = "4px" === e.marginRight, Gt.removeChild(a), r = null
            }
        }
        var i, n, s, o, a = it.createElement("div"),
            r = it.createElement("div");
        r.style && (r.style.backgroundClip = "content-box", r.cloneNode(!0).style.backgroundClip = "", pt.clearCloneStyle = "content-box" === r.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(r), mt.extend(pt, {
            pixelPosition: function () {
                return e(), i
            },
            boxSizingReliable: function () {
                return e(), n
            },
            pixelMarginRight: function () {
                return e(), s
            },
            reliableMarginLeft: function () {
                return e(), o
            }
        }))
    }();
    var le = /^(none|table(?!-c[ea]).+)/,
        ce = /^--/,
        he = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ue = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        de = ["Webkit", "Moz", "ms"],
        pe = it.createElement("div").style;
    mt.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var i = A(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function (t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var s, o, a, r = mt.camelCase(e),
                    l = ce.test(e),
                    c = t.style;
                return l || (e = N(r)), a = mt.cssHooks[e] || mt.cssHooks[r], void 0 === i ? a && "get" in a && void 0 !== (s = a.get(t, !1, n)) ? s : c[e] : (o = typeof i, "string" === o && (s = Ft.exec(i)) && s[1] && (i = m(t, e, s), o = "number"), void(null != i && i === i && ("number" === o && (i += s && s[3] || (mt.cssNumber[r] ? "" : "px")), pt.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (c[e] = "inherit"), a && "set" in a && void 0 === (i = a.set(t, i, n)) || (l ? c.setProperty(e, i) : c[e] = i))))
            }
        },
        css: function (t, e, i, n) {
            var s, o, a, r = mt.camelCase(e);
            return ce.test(e) || (e = N(r)), a = mt.cssHooks[e] || mt.cssHooks[r], a && "get" in a && (s = a.get(t, !0, i)), void 0 === s && (s = A(t, e, n)), "normal" === s && e in ue && (s = ue[e]), "" === i || i ? (o = parseFloat(s), !0 === i || isFinite(o) ? o || 0 : s) : s
        }
    }), mt.each(["height", "width"], function (t, e) {
        mt.cssHooks[e] = {
            get: function (t, i, n) {
                if (i) return !le.test(mt.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? $(t, e, n) : qt(t, he, function () {
                    return $(t, e, n)
                })
            },
            set: function (t, i, n) {
                var s, o = n && re(t),
                    a = n && L(t, e, n, "border-box" === mt.css(t, "boxSizing", !1, o), o);
                return a && (s = Ft.exec(i)) && "px" !== (s[3] || "px") && (t.style[e] = i, i = mt.css(t, e)), H(t, i, a)
            }
        }
    }), mt.cssHooks.marginLeft = E(pt.reliableMarginLeft, function (t, e) {
        if (e) return (parseFloat(A(t, "marginLeft")) || t.getBoundingClientRect().left - qt(t, {
            marginLeft: 0
        }, function () {
            return t.getBoundingClientRect().left
        })) + "px"
    }), mt.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (t, e) {
        mt.cssHooks[t + e] = {
            expand: function (i) {
                for (var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) s[t + Wt[n] + e] = o[n] || o[n - 2] || o[0];
                return s
            }
        }, oe.test(t) || (mt.cssHooks[t + e].set = H)
    }), mt.fn.extend({
        css: function (t, e) {
            return Et(this, function (t, e, i) {
                var n, s, o = {},
                    a = 0;
                if (Array.isArray(e)) {
                    for (n = re(t), s = e.length; a < s; a++) o[e[a]] = mt.css(t, e[a], !1, n);
                    return o
                }
                return void 0 !== i ? mt.style(t, e, i) : mt.css(t, e)
            }, t, e, arguments.length > 1)
        }
    }), mt.Tween = z, z.prototype = {
        constructor: z,
        init: function (t, e, i, n, s, o) {
            this.elem = t, this.prop = i, this.easing = s || mt.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (mt.cssNumber[i] ? "" : "px")
        },
        cur: function () {
            var t = z.propHooks[this.prop];
            return t && t.get ? t.get(this) : z.propHooks._default.get(this)
        },
        run: function (t) {
            var e, i = z.propHooks[this.prop];
            return this.options.duration ? this.pos = e = mt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : z.propHooks._default.set(this), this
        }
    }, z.prototype.init.prototype = z.prototype, z.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = mt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
            },
            set: function (t) {
                mt.fx.step[t.prop] ? mt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[mt.cssProps[t.prop]] && !mt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : mt.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, z.propHooks.scrollTop = z.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, mt.easing = {
        linear: function (t) {
            return t
        },
        swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, mt.fx = z.prototype.init, mt.fx.step = {};
    var fe, me, ge = /^(?:toggle|show|hide)$/,
        be = /queueHooks$/;
    mt.Animation = mt.extend(Y, {
            tweeners: {
                "*": [function (t, e) {
                    var i = this.createTween(t, e);
                    return m(i.elem, t, Ft.exec(e), i), i
                }]
            },
            tweener: function (t, e) {
                mt.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(St);
                for (var i, n = 0, s = t.length; n < s; n++) i = t[n], Y.tweeners[i] = Y.tweeners[i] || [], Y.tweeners[i].unshift(e)
            },
            prefilters: [B],
            prefilter: function (t, e) {
                e ? Y.prefilters.unshift(t) : Y.prefilters.push(t)
            }
        }), mt.speed = function (t, e, i) {
            var n = t && "object" == typeof t ? mt.extend({}, t) : {
                complete: i || !i && e || mt.isFunction(t) && t,
                duration: t,
                easing: i && e || e && !mt.isFunction(e) && e
            };
            return mt.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in mt.fx.speeds ? n.duration = mt.fx.speeds[n.duration] : n.duration = mt.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function () {
                mt.isFunction(n.old) && n.old.call(this), n.queue && mt.dequeue(this, n.queue)
            }, n
        }, mt.fn.extend({
            fadeTo: function (t, e, i, n) {
                return this.filter(Rt).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, i, n)
            },
            animate: function (t, e, i, n) {
                var s = mt.isEmptyObject(t),
                    o = mt.speed(e, i, n),
                    a = function () {
                        var e = Y(this, mt.extend({}, t), o);
                        (s || Nt.get(this, "finish")) && e.stop(!0)
                    };
                return a.finish = a, s || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function (t, e, i) {
                var n = function (t) {
                    var e = t.stop;
                    delete t.stop, e(i)
                };
                return "string" != typeof t && (i = e, e = t, t = void 0),
                    e && !1 !== t && this.queue(t || "fx", []), this.each(function () {
                        var e = !0,
                            s = null != t && t + "queueHooks",
                            o = mt.timers,
                            a = Nt.get(this);
                        if (s) a[s] && a[s].stop && n(a[s]);
                        else
                            for (s in a) a[s] && a[s].stop && be.test(s) && n(a[s]);
                        for (s = o.length; s--;) o[s].elem !== this || null != t && o[s].queue !== t || (o[s].anim.stop(i), e = !1, o.splice(s, 1));
                        !e && i || mt.dequeue(this, t)
                    })
            },
            finish: function (t) {
                return !1 !== t && (t = t || "fx"), this.each(function () {
                    var e, i = Nt.get(this),
                        n = i[t + "queue"],
                        s = i[t + "queueHooks"],
                        o = mt.timers,
                        a = n ? n.length : 0;
                    for (i.finish = !0, mt.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; e < a; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete i.finish
                })
            }
        }), mt.each(["toggle", "show", "hide"], function (t, e) {
            var i = mt.fn[e];
            mt.fn[e] = function (t, n, s) {
                return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(R(e, !0), t, n, s)
            }
        }), mt.each({
            slideDown: R("show"),
            slideUp: R("hide"),
            slideToggle: R("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (t, e) {
            mt.fn[t] = function (t, i, n) {
                return this.animate(e, t, i, n)
            }
        }), mt.timers = [], mt.fx.tick = function () {
            var t, e = 0,
                i = mt.timers;
            for (fe = mt.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
            i.length || mt.fx.stop(), fe = void 0
        }, mt.fx.timer = function (t) {
            mt.timers.push(t), mt.fx.start()
        }, mt.fx.interval = 13, mt.fx.start = function () {
            me || (me = !0, F())
        }, mt.fx.stop = function () {
            me = null
        }, mt.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, mt.fn.delay = function (e, i) {
            return e = mt.fx ? mt.fx.speeds[e] || e : e, i = i || "fx", this.queue(i, function (i, n) {
                var s = t.setTimeout(i, e);
                n.stop = function () {
                    t.clearTimeout(s)
                }
            })
        },
        function () {
            var t = it.createElement("input"),
                e = it.createElement("select"),
                i = e.appendChild(it.createElement("option"));
            t.type = "checkbox", pt.checkOn = "" !== t.value, pt.optSelected = i.selected, t = it.createElement("input"), t.value = "t", t.type = "radio", pt.radioValue = "t" === t.value
        }();
    var ve, _e = mt.expr.attrHandle;
    mt.fn.extend({
        attr: function (t, e) {
            return Et(this, mt.attr, t, e, arguments.length > 1)
        },
        removeAttr: function (t) {
            return this.each(function () {
                mt.removeAttr(this, t)
            })
        }
    }), mt.extend({
        attr: function (t, e, i) {
            var n, s, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? mt.prop(t, e, i) : (1 === o && mt.isXMLDoc(t) || (s = mt.attrHooks[e.toLowerCase()] || (mt.expr.match.bool.test(e) ? ve : void 0)), void 0 !== i ? null === i ? void mt.removeAttr(t, e) : s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : s && "get" in s && null !== (n = s.get(t, e)) ? n : (n = mt.find.attr(t, e), null == n ? void 0 : n))
        },
        attrHooks: {
            type: {
                set: function (t, e) {
                    if (!pt.radioValue && "radio" === e && s(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        },
        removeAttr: function (t, e) {
            var i, n = 0,
                s = e && e.match(St);
            if (s && 1 === t.nodeType)
                for (; i = s[n++];) t.removeAttribute(i)
        }
    }), ve = {
        set: function (t, e, i) {
            return !1 === e ? mt.removeAttr(t, i) : t.setAttribute(i, i), i
        }
    }, mt.each(mt.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var i = _e[e] || mt.find.attr;
        _e[e] = function (t, e, n) {
            var s, o, a = e.toLowerCase();
            return n || (o = _e[a], _e[a] = s, s = null != i(t, e, n) ? a : null, _e[a] = o), s
        }
    });
    var ye = /^(?:input|select|textarea|button)$/i,
        we = /^(?:a|area)$/i;
    mt.fn.extend({
        prop: function (t, e) {
            return Et(this, mt.prop, t, e, arguments.length > 1)
        },
        removeProp: function (t) {
            return this.each(function () {
                delete this[mt.propFix[t] || t]
            })
        }
    }), mt.extend({
        prop: function (t, e, i) {
            var n, s, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && mt.isXMLDoc(t) || (e = mt.propFix[e] || e, s = mt.propHooks[e]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get" in s && null !== (n = s.get(t, e)) ? n : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = mt.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ye.test(t.nodeName) || we.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), pt.optSelected || (mt.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function (t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), mt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        mt.propFix[this.toLowerCase()] = this
    }), mt.fn.extend({
        addClass: function (t) {
            var e, i, n, s, o, a, r, l = 0;
            if (mt.isFunction(t)) return this.each(function (e) {
                mt(this).addClass(t.call(this, e, V(this)))
            });
            if ("string" == typeof t && t)
                for (e = t.match(St) || []; i = this[l++];)
                    if (s = V(i), n = 1 === i.nodeType && " " + K(s) + " ") {
                        for (a = 0; o = e[a++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                        r = K(n), s !== r && i.setAttribute("class", r)
                    } return this
        },
        removeClass: function (t) {
            var e, i, n, s, o, a, r, l = 0;
            if (mt.isFunction(t)) return this.each(function (e) {
                mt(this).removeClass(t.call(this, e, V(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(St) || []; i = this[l++];)
                    if (s = V(i), n = 1 === i.nodeType && " " + K(s) + " ") {
                        for (a = 0; o = e[a++];)
                            for (; n.indexOf(" " + o + " ") > -1;) n = n.replace(" " + o + " ", " ");
                        r = K(n), s !== r && i.setAttribute("class", r)
                    } return this
        },
        toggleClass: function (t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : mt.isFunction(t) ? this.each(function (i) {
                mt(this).toggleClass(t.call(this, i, V(this), e), e)
            }) : this.each(function () {
                var e, n, s, o;
                if ("string" === i)
                    for (n = 0, s = mt(this), o = t.match(St) || []; e = o[n++];) s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                else void 0 !== t && "boolean" !== i || (e = V(this), e && Nt.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Nt.get(this, "__className__") || ""))
            })
        },
        hasClass: function (t) {
            var e, i, n = 0;
            for (e = " " + t + " "; i = this[n++];)
                if (1 === i.nodeType && (" " + K(V(i)) + " ").indexOf(e) > -1) return !0;
            return !1
        }
    });
    var xe = /\r/g;
    mt.fn.extend({
        val: function (t) {
            var e, i, n, s = this[0];
            return arguments.length ? (n = mt.isFunction(t), this.each(function (i) {
                var s;
                1 === this.nodeType && (s = n ? t.call(this, i, mt(this).val()) : t, null == s ? s = "" : "number" == typeof s ? s += "" : Array.isArray(s) && (s = mt.map(s, function (t) {
                    return null == t ? "" : t + ""
                })), (e = mt.valHooks[this.type] || mt.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s))
            })) : s ? (e = mt.valHooks[s.type] || mt.valHooks[s.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(s, "value")) ? i : (i = s.value, "string" == typeof i ? i.replace(xe, "") : null == i ? "" : i)) : void 0
        }
    }), mt.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = mt.find.attr(t, "value");
                    return null != e ? e : K(mt.text(t))
                }
            },
            select: {
                get: function (t) {
                    var e, i, n, o = t.options,
                        a = t.selectedIndex,
                        r = "select-one" === t.type,
                        l = r ? null : [],
                        c = r ? a + 1 : o.length;
                    for (n = a < 0 ? c : r ? a : 0; n < c; n++)
                        if (i = o[n], (i.selected || n === a) && !i.disabled && (!i.parentNode.disabled || !s(i.parentNode, "optgroup"))) {
                            if (e = mt(i).val(), r) return e;
                            l.push(e)
                        } return l
                },
                set: function (t, e) {
                    for (var i, n, s = t.options, o = mt.makeArray(e), a = s.length; a--;) n = s[a], (n.selected = mt.inArray(mt.valHooks.option.get(n), o) > -1) && (i = !0);
                    return i || (t.selectedIndex = -1), o
                }
            }
        }
    }), mt.each(["radio", "checkbox"], function () {
        mt.valHooks[this] = {
            set: function (t, e) {
                if (Array.isArray(e)) return t.checked = mt.inArray(mt(t).val(), e) > -1
            }
        }, pt.checkOn || (mt.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var ke = /^(?:focusinfocus|focusoutblur)$/;
    mt.extend(mt.event, {
        trigger: function (e, i, n, s) {
            var o, a, r, l, c, h, u, d = [n || it],
                p = ht.call(e, "type") ? e.type : e,
                f = ht.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = r = n = n || it, 3 !== n.nodeType && 8 !== n.nodeType && !ke.test(p + mt.event.triggered) && (p.indexOf(".") > -1 && (f = p.split("."), p = f.shift(), f.sort()), c = p.indexOf(":") < 0 && "on" + p, e = e[mt.expando] ? e : new mt.Event(p, "object" == typeof e && e), e.isTrigger = s ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : mt.makeArray(i, [e]), u = mt.event.special[p] || {}, s || !u.trigger || !1 !== u.trigger.apply(n, i))) {
                if (!s && !u.noBubble && !mt.isWindow(n)) {
                    for (l = u.delegateType || p, ke.test(l + p) || (a = a.parentNode); a; a = a.parentNode) d.push(a), r = a;
                    r === (n.ownerDocument || it) && d.push(r.defaultView || r.parentWindow || t)
                }
                for (o = 0;
                    (a = d[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? l : u.bindType || p, h = (Nt.get(a, "events") || {})[e.type] && Nt.get(a, "handle"), h && h.apply(a, i), (h = c && a[c]) && h.apply && Ot(a) && (e.result = h.apply(a, i), !1 === e.result && e.preventDefault());
                return e.type = p, s || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(d.pop(), i) || !Ot(n) || c && mt.isFunction(n[p]) && !mt.isWindow(n) && (r = n[c], r && (n[c] = null), mt.event.triggered = p, n[p](), mt.event.triggered = void 0, r && (n[c] = r)), e.result
            }
        },
        simulate: function (t, e, i) {
            var n = mt.extend(new mt.Event, i, {
                type: t,
                isSimulated: !0
            });
            mt.event.trigger(n, null, e)
        }
    }), mt.fn.extend({
        trigger: function (t, e) {
            return this.each(function () {
                mt.event.trigger(t, e, this)
            })
        },
        triggerHandler: function (t, e) {
            var i = this[0];
            if (i) return mt.event.trigger(t, e, i, !0)
        }
    }), mt.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
        mt.fn[e] = function (t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }), mt.fn.extend({
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), pt.focusin = "onfocusin" in t, pt.focusin || mt.each({
        focus: "focusin",
        blur: "focusout"
    }, function (t, e) {
        var i = function (t) {
            mt.event.simulate(e, t.target, mt.event.fix(t))
        };
        mt.event.special[e] = {
            setup: function () {
                var n = this.ownerDocument || this,
                    s = Nt.access(n, e);
                s || n.addEventListener(t, i, !0), Nt.access(n, e, (s || 0) + 1)
            },
            teardown: function () {
                var n = this.ownerDocument || this,
                    s = Nt.access(n, e) - 1;
                s ? Nt.access(n, e, s) : (n.removeEventListener(t, i, !0), Nt.remove(n, e))
            }
        }
    });
    var Ce = t.location,
        De = mt.now(),
        Te = /\?/;
    mt.parseXML = function (e) {
        var i;
        if (!e || "string" != typeof e) return null;
        try {
            i = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (t) {
            i = void 0
        }
        return i && !i.getElementsByTagName("parsererror").length || mt.error("Invalid XML: " + e), i
    };
    var Me = /\[\]$/,
        Ie = /\r?\n/g,
        Pe = /^(?:submit|button|image|reset|file)$/i,
        Se = /^(?:input|select|textarea|keygen)/i;
    mt.param = function (t, e) {
        var i, n = [],
            s = function (t, e) {
                var i = mt.isFunction(e) ? e() : e;
                n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i)
            };
        if (Array.isArray(t) || t.jquery && !mt.isPlainObject(t)) mt.each(t, function () {
            s(this.name, this.value)
        });
        else
            for (i in t) X(i, t[i], e, s);
        return n.join("&")
    }, mt.fn.extend({
        serialize: function () {
            return mt.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var t = mt.prop(this, "elements");
                return t ? mt.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !mt(this).is(":disabled") && Se.test(this.nodeName) && !Pe.test(t) && (this.checked || !Ut.test(t))
            }).map(function (t, e) {
                var i = mt(this).val();
                return null == i ? null : Array.isArray(i) ? mt.map(i, function (t) {
                    return {
                        name: e.name,
                        value: t.replace(Ie, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: i.replace(Ie, "\r\n")
                }
            }).get()
        }
    });
    var je = /%20/g,
        Ae = /#.*$/,
        Ee = /([?&])_=[^&]*/,
        Oe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ne = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        He = /^(?:GET|HEAD)$/,
        Le = /^\/\//,
        $e = {},
        ze = {},
        Fe = "*/".concat("*"),
        We = it.createElement("a");
    We.href = Ce.href, mt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ce.href,
            type: "GET",
            isLocal: Ne.test(Ce.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Fe,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": mt.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (t, e) {
            return e ? Z(Z(t, mt.ajaxSettings), e) : Z(mt.ajaxSettings, t)
        },
        ajaxPrefilter: G($e),
        ajaxTransport: G(ze),
        ajax: function (e, i) {
            function n(e, i, n, r) {
                var c, d, p, y, w, x = i;
                h || (h = !0, l && t.clearTimeout(l), s = void 0, a = r || "", k.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, n && (y = J(f, k, n)), y = tt(f, y, k, c), c ? (f.ifModified && (w = k.getResponseHeader("Last-Modified"), w && (mt.lastModified[o] = w), (w = k.getResponseHeader("etag")) && (mt.etag[o] = w)), 204 === e || "HEAD" === f.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = y.state, d = y.data, p = y.error, c = !p)) : (p = x, !e && x || (x = "error", e < 0 && (e = 0))), k.status = e, k.statusText = (i || x) + "", c ? b.resolveWith(m, [d, x, k]) : b.rejectWith(m, [k, x, p]), k.statusCode(_), _ = void 0, u && g.trigger(c ? "ajaxSuccess" : "ajaxError", [k, f, c ? d : p]), v.fireWith(m, [k, x]), u && (g.trigger("ajaxComplete", [k, f]), --mt.active || mt.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (i = e, e = void 0), i = i || {};
            var s, o, a, r, l, c, h, u, d, p, f = mt.ajaxSetup({}, i),
                m = f.context || f,
                g = f.context && (m.nodeType || m.jquery) ? mt(m) : mt.event,
                b = mt.Deferred(),
                v = mt.Callbacks("once memory"),
                _ = f.statusCode || {},
                y = {},
                w = {},
                x = "canceled",
                k = {
                    readyState: 0,
                    getResponseHeader: function (t) {
                        var e;
                        if (h) {
                            if (!r)
                                for (r = {}; e = Oe.exec(a);) r[e[1].toLowerCase()] = e[2];
                            e = r[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function () {
                        return h ? a : null
                    },
                    setRequestHeader: function (t, e) {
                        return null == h && (t = w[t.toLowerCase()] = w[t.toLowerCase()] || t, y[t] = e), this
                    },
                    overrideMimeType: function (t) {
                        return null == h && (f.mimeType = t), this
                    },
                    statusCode: function (t) {
                        var e;
                        if (t)
                            if (h) k.always(t[k.status]);
                            else
                                for (e in t) _[e] = [_[e], t[e]];
                        return this
                    },
                    abort: function (t) {
                        var e = t || x;
                        return s && s.abort(e), n(0, e), this
                    }
                };
            if (b.promise(k), f.url = ((e || f.url || Ce.href) + "").replace(Le, Ce.protocol + "//"), f.type = i.method || i.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(St) || [""], null == f.crossDomain) {
                c = it.createElement("a");
                try {
                    c.href = f.url, c.href = c.href, f.crossDomain = We.protocol + "//" + We.host != c.protocol + "//" + c.host
                } catch (t) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = mt.param(f.data, f.traditional)), Q($e, f, i, k), h) return k;
            u = mt.event && f.global, u && 0 == mt.active++ && mt.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !He.test(f.type), o = f.url.replace(Ae, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(je, "+")) : (p = f.url.slice(o.length), f.data && (o += (Te.test(o) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (o = o.replace(Ee, "$1"), p = (Te.test(o) ? "&" : "?") + "_=" + De++ + p), f.url = o + p), f.ifModified && (mt.lastModified[o] && k.setRequestHeader("If-Modified-Since", mt.lastModified[o]), mt.etag[o] && k.setRequestHeader("If-None-Match", mt.etag[o])), (f.data && f.hasContent && !1 !== f.contentType || i.contentType) && k.setRequestHeader("Content-Type", f.contentType), k.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Fe + "; q=0.01" : "") : f.accepts["*"]);
            for (d in f.headers) k.setRequestHeader(d, f.headers[d]);
            if (f.beforeSend && (!1 === f.beforeSend.call(m, k, f) || h)) return k.abort();
            if (x = "abort", v.add(f.complete), k.done(f.success), k.fail(f.error), s = Q(ze, f, i, k)) {
                if (k.readyState = 1, u && g.trigger("ajaxSend", [k, f]), h) return k;
                f.async && f.timeout > 0 && (l = t.setTimeout(function () {
                    k.abort("timeout")
                }, f.timeout));
                try {
                    h = !1, s.send(y, n)
                } catch (t) {
                    if (h) throw t;
                    n(-1, t)
                }
            } else n(-1, "No Transport");
            return k
        },
        getJSON: function (t, e, i) {
            return mt.get(t, e, i, "json")
        },
        getScript: function (t, e) {
            return mt.get(t, void 0, e, "script")
        }
    }), mt.each(["get", "post"], function (t, e) {
        mt[e] = function (t, i, n, s) {
            return mt.isFunction(i) && (s = s || n, n = i, i = void 0), mt.ajax(mt.extend({
                url: t,
                type: e,
                dataType: s,
                data: i,
                success: n
            }, mt.isPlainObject(t) && t))
        }
    }), mt._evalUrl = function (t) {
        return mt.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, mt.fn.extend({
        wrapAll: function (t) {
            var e;
            return this[0] && (mt.isFunction(t) && (t = t.call(this[0])), e = mt(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this
        },
        wrapInner: function (t) {
            return mt.isFunction(t) ? this.each(function (e) {
                mt(this).wrapInner(t.call(this, e))
            }) : this.each(function () {
                var e = mt(this),
                    i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        },
        wrap: function (t) {
            var e = mt.isFunction(t);
            return this.each(function (i) {
                mt(this).wrapAll(e ? t.call(this, i) : t)
            })
        },
        unwrap: function (t) {
            return this.parent(t).not("body").each(function () {
                mt(this).replaceWith(this.childNodes)
            }), this
        }
    }), mt.expr.pseudos.hidden = function (t) {
        return !mt.expr.pseudos.visible(t)
    }, mt.expr.pseudos.visible = function (t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, mt.ajaxSettings.xhr = function () {
        try {
            return new t.XMLHttpRequest
        } catch (t) {}
    };
    var Re = {
            0: 200,
            1223: 204
        },
        qe = mt.ajaxSettings.xhr();
    pt.cors = !!qe && "withCredentials" in qe, pt.ajax = qe = !!qe, mt.ajaxTransport(function (e) {
        var i, n;
        if (pt.cors || qe && !e.crossDomain) return {
            send: function (s, o) {
                var a, r = e.xhr();
                if (r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (a in e.xhrFields) r[a] = e.xhrFields[a];
                e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType), e.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest");
                for (a in s) r.setRequestHeader(a, s[a]);
                i = function (t) {
                    return function () {
                        i && (i = n = r.onload = r.onerror = r.onabort = r.onreadystatechange = null, "abort" === t ? r.abort() : "error" === t ? "number" != typeof r.status ? o(0, "error") : o(r.status, r.statusText) : o(Re[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }, r.onload = i(), n = r.onerror = i("error"), void 0 !== r.onabort ? r.onabort = n : r.onreadystatechange = function () {
                    4 === r.readyState && t.setTimeout(function () {
                        i && n()
                    })
                }, i = i("abort");
                try {
                    r.send(e.hasContent && e.data || null)
                } catch (t) {
                    if (i) throw t
                }
            },
            abort: function () {
                i && i()
            }
        }
    }), mt.ajaxPrefilter(function (t) {
        t.crossDomain && (t.contents.script = !1)
    }), mt.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (t) {
                return mt.globalEval(t), t
            }
        }
    }), mt.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), mt.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
            var e, i;
            return {
                send: function (n, s) {
                    e = mt("<script>").prop({
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", i = function (t) {
                        e.remove(), i = null, t && s("error" === t.type ? 404 : 200, t.type)
                    }), it.head.appendChild(e[0])
                },
                abort: function () {
                    i && i()
                }
            }
        }
    });
    var Be = [],
        Ue = /(=)\?(?=&|$)|\?\?/;
    mt.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var t = Be.pop() || mt.expando + "_" + De++;
            return this[t] = !0, t
        }
    }), mt.ajaxPrefilter("json jsonp", function (e, i, n) {
        var s, o, a, r = !1 !== e.jsonp && (Ue.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ue.test(e.data) && "data");
        if (r || "jsonp" === e.dataTypes[0]) return s = e.jsonpCallback = mt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, r ? e[r] = e[r].replace(Ue, "$1" + s) : !1 !== e.jsonp && (e.url += (Te.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function () {
            return a || mt.error(s + " was not called"), a[0]
        }, e.dataTypes[0] = "json", o = t[s], t[s] = function () {
            a = arguments
        }, n.always(function () {
            void 0 === o ? mt(t).removeProp(s) : t[s] = o, e[s] && (e.jsonpCallback = i.jsonpCallback, Be.push(s)), a && mt.isFunction(o) && o(a[0]), a = o = void 0
        }), "script"
    }), pt.createHTMLDocument = function () {
        var t = it.implementation.createHTMLDocument("").body;
        return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
    }(), mt.parseHTML = function (t, e, i) {
        if ("string" != typeof t) return [];
        "boolean" == typeof e && (i = e, e = !1);
        var n, s, o;
        return e || (pt.createHTMLDocument ? (e = it.implementation.createHTMLDocument(""), n = e.createElement("base"), n.href = it.location.href, e.head.appendChild(n)) : e = it), s = Ct.exec(t), o = !i && [], s ? [e.createElement(s[1])] : (s = y([t], e, o), o && o.length && mt(o).remove(), mt.merge([], s.childNodes))
    }, mt.fn.load = function (t, e, i) {
        var n, s, o, a = this,
            r = t.indexOf(" ");
        return r > -1 && (n = K(t.slice(r)), t = t.slice(0, r)), mt.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (s = "POST"), a.length > 0 && mt.ajax({
            url: t,
            type: s || "GET",
            dataType: "html",
            data: e
        }).done(function (t) {
            o = arguments, a.html(n ? mt("<div>").append(mt.parseHTML(t)).find(n) : t)
        }).always(i && function (t, e) {
            a.each(function () {
                i.apply(this, o || [t.responseText, e, t])
            })
        }), this
    }, mt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        mt.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), mt.expr.pseudos.animated = function (t) {
        return mt.grep(mt.timers, function (e) {
            return t === e.elem
        }).length
    }, mt.offset = {
        setOffset: function (t, e, i) {
            var n, s, o, a, r, l, c, h = mt.css(t, "position"),
                u = mt(t),
                d = {};
            "static" === h && (t.style.position = "relative"), r = u.offset(), o = mt.css(t, "top"), l = mt.css(t, "left"), c = ("absolute" === h || "fixed" === h) && (o + l).indexOf("auto") > -1, c ? (n = u.position(), a = n.top, s = n.left) : (a = parseFloat(o) || 0, s = parseFloat(l) || 0), mt.isFunction(e) && (e = e.call(t, i, mt.extend({}, r))), null != e.top && (d.top = e.top - r.top + a), null != e.left && (d.left = e.left - r.left + s), "using" in e ? e.using.call(t, d) : u.css(d)
        }
    }, mt.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                mt.offset.setOffset(this, t, e)
            });
            var e, i, n, s, o = this[0];
            return o ? o.getClientRects().length ? (n = o.getBoundingClientRect(), e = o.ownerDocument, i = e.documentElement, s = e.defaultView, {
                top: n.top + s.pageYOffset - i.clientTop,
                left: n.left + s.pageXOffset - i.clientLeft
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function () {
            if (this[0]) {
                var t, e, i = this[0],
                    n = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === mt.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), s(t[0], "html") || (n = t.offset()), n = {
                    top: n.top + mt.css(t[0], "borderTopWidth", !0),
                    left: n.left + mt.css(t[0], "borderLeftWidth", !0)
                }), {
                    top: e.top - n.top - mt.css(i, "marginTop", !0),
                    left: e.left - n.left - mt.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent; t && "static" === mt.css(t, "position");) t = t.offsetParent;
                return t || Gt
            })
        }
    }), mt.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (t, e) {
        var i = "pageYOffset" === e;
        mt.fn[t] = function (n) {
            return Et(this, function (t, n, s) {
                var o;
                return mt.isWindow(t) ? o = t : 9 === t.nodeType && (o = t.defaultView), void 0 === s ? o ? o[e] : t[n] : void(o ? o.scrollTo(i ? o.pageXOffset : s, i ? s : o.pageYOffset) : t[n] = s)
            }, t, n, arguments.length)
        }
    }), mt.each(["top", "left"], function (t, e) {
        mt.cssHooks[e] = E(pt.pixelPosition, function (t, i) {
            if (i) return i = A(t, e), ae.test(i) ? mt(t).position()[e] + "px" : i
        })
    }), mt.each({
        Height: "height",
        Width: "width"
    }, function (t, e) {
        mt.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function (i, n) {
            mt.fn[n] = function (s, o) {
                var a = arguments.length && (i || "boolean" != typeof s),
                    r = i || (!0 === s || !0 === o ? "margin" : "border");
                return Et(this, function (e, i, s) {
                    var o;
                    return mt.isWindow(e) ? 0 === n.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === s ? mt.css(e, i, r) : mt.style(e, i, s, r)
                }, e, a ? s : void 0, a)
            }
        })
    }), mt.fn.extend({
        bind: function (t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function (t, e) {
            return this.off(t, null, e)
        },
        delegate: function (t, e, i, n) {
            return this.on(e, t, i, n)
        },
        undelegate: function (t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    }), mt.holdReady = function (t) {
        t ? mt.readyWait++ : mt.ready(!0)
    }, mt.isArray = Array.isArray, mt.parseJSON = JSON.parse, mt.nodeName = s, "function" == typeof define && define.amd && define("jquery", [], function () {
        return mt
    });
    var Ye = t.jQuery,
        Ke = t.$;
    return mt.noConflict = function (e) {
        return t.$ === mt && (t.$ = Ke), e && t.jQuery === mt && (t.jQuery = Ye), mt
    }, e || (t.jQuery = t.$ = mt), mt
}),
function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function (t) {
    function e(t) {
        for (var e = t.css("visibility");
            "inherit" === e;) t = t.parent(), e = t.css("visibility");
        return "hidden" !== e
    }

    function i(t) {
        for (var e, i; t.length && t[0] !== document;) {
            if (("absolute" === (e = t.css("position")) || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
            t = t.parent()
        }
        return 0
    }

    function n() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = s(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function s(e) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return e.on("mouseout", i, function () {
            t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
        }).on("mouseover", i, o)
    }

    function o() {
        t.datepicker._isDisabledDatepicker(m.inline ? m.dpDiv.parent()[0] : m.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
    }

    function a(e, i) {
        t.extend(e, i);
        for (var n in i) null == i[n] && (e[n] = i[n]);
        return e
    }

    function r(t) {
        return function () {
            var e = this.element.val();
            t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
        }
    }
    t.ui = t.ui || {}, t.ui.version = "1.12.1";
    var l = 0,
        c = Array.prototype.slice;
    t.cleanData = function (e) {
            return function (i) {
                var n, s, o;
                for (o = 0; null != (s = i[o]); o++) try {
                    (n = t._data(s, "events")) && n.remove && t(s).triggerHandler("remove")
                } catch (t) {}
                e(i)
            }
        }(t.cleanData), t.widget = function (e, i, n) {
            var s, o, a, r = {},
                l = e.split(".")[0];
            e = e.split(".")[1];
            var c = l + "-" + e;
            return n || (n = i, i = t.Widget), t.isArray(n) && (n = t.extend.apply(null, [{}].concat(n))), t.expr[":"][c.toLowerCase()] = function (e) {
                return !!t.data(e, c)
            }, t[l] = t[l] || {}, s = t[l][e], o = t[l][e] = function (t, e) {
                return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new o(t, e)
            }, t.extend(o, s, {
                version: n.version,
                _proto: t.extend({}, n),
                _childConstructors: []
            }), a = new i, a.options = t.widget.extend({}, a.options), t.each(n, function (e, n) {
                return t.isFunction(n) ? void(r[e] = function () {
                    function t() {
                        return i.prototype[e].apply(this, arguments)
                    }

                    function s(t) {
                        return i.prototype[e].apply(this, t)
                    }
                    return function () {
                        var e, i = this._super,
                            o = this._superApply;
                        return this._super = t, this._superApply = s, e = n.apply(this, arguments), this._super = i, this._superApply = o, e
                    }
                }()) : void(r[e] = n)
            }), o.prototype = t.widget.extend(a, {
                widgetEventPrefix: s ? a.widgetEventPrefix || e : e
            }, r, {
                constructor: o,
                namespace: l,
                widgetName: e,
                widgetFullName: c
            }), s ? (t.each(s._childConstructors, function (e, i) {
                var n = i.prototype;
                t.widget(n.namespace + "." + n.widgetName, o, i._proto)
            }), delete s._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o
        }, t.widget.extend = function (e) {
            for (var i, n, s = c.call(arguments, 1), o = 0, a = s.length; a > o; o++)
                for (i in s[o]) n = s[o][i], s[o].hasOwnProperty(i) && void 0 !== n && (e[i] = t.isPlainObject(n) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], n) : t.widget.extend({}, n) : n);
            return e
        }, t.widget.bridge = function (e, i) {
            var n = i.prototype.widgetFullName || e;
            t.fn[e] = function (s) {
                var o = "string" == typeof s,
                    a = c.call(arguments, 1),
                    r = this;
                return o ? this.length || "instance" !== s ? this.each(function () {
                    var i, o = t.data(this, n);
                    return "instance" === s ? (r = o, !1) : o ? t.isFunction(o[s]) && "_" !== s.charAt(0) ? (i = o[s].apply(o, a), i !== o && void 0 !== i ? (r = i && i.jquery ? r.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + s + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + s + "'")
                }) : r = void 0 : (a.length && (s = t.widget.extend.apply(null, [s].concat(a))), this.each(function () {
                    var e = t.data(this, n);
                    e ? (e.option(s || {}), e._init && e._init()) : t.data(this, n, new i(s, this))
                })), r
            }
        }, t.Widget = function () {}, t.Widget._childConstructors = [], t.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                classes: {},
                disabled: !1,
                create: null
            },
            _createWidget: function (e, i) {
                i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = l++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function (t) {
                        t.target === i && this.destroy()
                    }
                }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: function () {
                return {}
            },
            _getCreateEventData: t.noop,
            _create: t.noop,
            _init: t.noop,
            destroy: function () {
                var e = this;
                this._destroy(), t.each(this.classesElementLookup, function (t, i) {
                    e._removeClass(i, t)
                }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
            },
            _destroy: t.noop,
            widget: function () {
                return this.element
            },
            option: function (e, i) {
                var n, s, o, a = e;
                if (0 === arguments.length) return t.widget.extend({}, this.options);
                if ("string" == typeof e)
                    if (a = {}, n = e.split("."), e = n.shift(), n.length) {
                        for (s = a[e] = t.widget.extend({}, this.options[e]), o = 0; n.length - 1 > o; o++) s[n[o]] = s[n[o]] || {}, s = s[n[o]];
                        if (e = n.pop(), 1 === arguments.length) return void 0 === s[e] ? null : s[e];
                        s[e] = i
                    } else {
                        if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                        a[e] = i
                    } return this._setOptions(a), this
            },
            _setOptions: function (t) {
                var e;
                for (e in t) this._setOption(e, t[e]);
                return this
            },
            _setOption: function (t, e) {
                return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
            },
            _setOptionClasses: function (e) {
                var i, n, s;
                for (i in e) s = this.classesElementLookup[i], e[i] !== this.options.classes[i] && s && s.length && (n = t(s.get()), this._removeClass(s, i), n.addClass(this._classes({
                    element: n,
                    keys: i,
                    classes: e,
                    add: !0
                })))
            },
            _setOptionDisabled: function (t) {
                this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
            },
            enable: function () {
                return this._setOptions({
                    disabled: !1
                })
            },
            disable: function () {
                return this._setOptions({
                    disabled: !0
                })
            },
            _classes: function (e) {
                function i(i, o) {
                    var a, r;
                    for (r = 0; i.length > r; r++) a = s.classesElementLookup[i[r]] || t(), a = t(e.add ? t.unique(a.get().concat(e.element.get())) : a.not(e.element).get()), s.classesElementLookup[i[r]] = a, n.push(i[r]), o && e.classes[i[r]] && n.push(e.classes[i[r]])
                }
                var n = [],
                    s = this;
                return e = t.extend({
                    element: this.element,
                    classes: this.options.classes || {}
                }, e), this._on(e.element, {
                    remove: "_untrackClassesElement"
                }), e.keys && i(e.keys.match(/\S+/g) || [], !0), e.extra && i(e.extra.match(/\S+/g) || []), n.join(" ")
            },
            _untrackClassesElement: function (e) {
                var i = this;
                t.each(i.classesElementLookup, function (n, s) {
                    -1 !== t.inArray(e.target, s) && (i.classesElementLookup[n] = t(s.not(e.target).get()))
                })
            },
            _removeClass: function (t, e, i) {
                return this._toggleClass(t, e, i, !1)
            },
            _addClass: function (t, e, i) {
                return this._toggleClass(t, e, i, !0)
            },
            _toggleClass: function (t, e, i, n) {
                n = "boolean" == typeof n ? n : i;
                var s = "string" == typeof t || null === t,
                    o = {
                        extra: s ? e : i,
                        keys: s ? t : e,
                        element: s ? this.element : t,
                        add: n
                    };
                return o.element.toggleClass(this._classes(o), n), this
            },
            _on: function (e, i, n) {
                var s, o = this;
                "boolean" != typeof e && (n = i, i = e, e = !1), n ? (i = s = t(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, s = this.widget()), t.each(n, function (n, a) {
                    function r() {
                        return e || !0 !== o.options.disabled && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0
                    }
                    "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
                    var l = n.match(/^([\w:-]*)\s*(.*)$/),
                        c = l[1] + o.eventNamespace,
                        h = l[2];
                    h ? s.on(c, h, r) : i.on(c, r)
                })
            },
            _off: function (e, i) {
                i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
            },
            _delay: function (t, e) {
                function i() {
                    return ("string" == typeof t ? n[t] : t).apply(n, arguments)
                }
                var n = this;
                return setTimeout(i, e || 0)
            },
            _hoverable: function (e) {
                this.hoverable = this.hoverable.add(e), this._on(e, {
                    mouseenter: function (e) {
                        this._addClass(t(e.currentTarget), null, "ui-state-hover")
                    },
                    mouseleave: function (e) {
                        this._removeClass(t(e.currentTarget), null, "ui-state-hover")
                    }
                })
            },
            _focusable: function (e) {
                this.focusable = this.focusable.add(e), this._on(e, {
                    focusin: function (e) {
                        this._addClass(t(e.currentTarget), null, "ui-state-focus")
                    },
                    focusout: function (e) {
                        this._removeClass(t(e.currentTarget), null, "ui-state-focus")
                    }
                })
            },
            _trigger: function (e, i, n) {
                var s, o, a = this.options[e];
                if (n = n || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
                    for (s in o) s in i || (i[s] = o[s]);
                return this.element.trigger(i, n), !(t.isFunction(a) && !1 === a.apply(this.element[0], [i].concat(n)) || i.isDefaultPrevented())
            }
        }, t.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function (e, i) {
            t.Widget.prototype["_" + e] = function (n, s, o) {
                "string" == typeof s && (s = {
                    effect: s
                });
                var a, r = s ? !0 === s || "number" == typeof s ? i : s.effect || i : e;
                s = s || {}, "number" == typeof s && (s = {
                    duration: s
                }), a = !t.isEmptyObject(s), s.complete = o, s.delay && n.delay(s.delay), a && t.effects && t.effects.effect[r] ? n[e](s) : r !== e && n[r] ? n[r](s.duration, s.easing, o) : n.queue(function (i) {
                    t(this)[e](), o && o.call(n[0]), i()
                })
            }
        }), t.widget,
        function () {
            function e(t, e, i) {
                return [parseFloat(t[0]) * (u.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (u.test(t[1]) ? i / 100 : 1)]
            }

            function i(e, i) {
                return parseInt(t.css(e, i), 10) || 0
            }

            function n(e) {
                var i = e[0];
                return 9 === i.nodeType ? {
                    width: e.width(),
                    height: e.height(),
                    offset: {
                        top: 0,
                        left: 0
                    }
                } : t.isWindow(i) ? {
                    width: e.width(),
                    height: e.height(),
                    offset: {
                        top: e.scrollTop(),
                        left: e.scrollLeft()
                    }
                } : i.preventDefault ? {
                    width: 0,
                    height: 0,
                    offset: {
                        top: i.pageY,
                        left: i.pageX
                    }
                } : {
                    width: e.outerWidth(),
                    height: e.outerHeight(),
                    offset: e.offset()
                }
            }
            var s, o = Math.max,
                a = Math.abs,
                r = /left|center|right/,
                l = /top|center|bottom/,
                c = /[\+\-]\d+(\.[\d]+)?%?/,
                h = /^\w+/,
                u = /%$/,
                d = t.fn.position;
            t.position = {
                scrollbarWidth: function () {
                    if (void 0 !== s) return s;
                    var e, i, n = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                        o = n.children()[0];
                    return t("body").append(n), e = o.offsetWidth, n.css("overflow", "scroll"), i = o.offsetWidth, e === i && (i = n[0].clientWidth), n.remove(), s = e - i
                },
                getScrollInfo: function (e) {
                    var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                        n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                        s = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth;
                    return {
                        width: "scroll" === n || "auto" === n && e.height < e.element[0].scrollHeight ? t.position.scrollbarWidth() : 0,
                        height: s ? t.position.scrollbarWidth() : 0
                    }
                },
                getWithinInfo: function (e) {
                    var i = t(e || window),
                        n = t.isWindow(i[0]),
                        s = !!i[0] && 9 === i[0].nodeType;
                    return {
                        element: i,
                        isWindow: n,
                        isDocument: s,
                        offset: n || s ? {
                            left: 0,
                            top: 0
                        } : t(e).offset(),
                        scrollLeft: i.scrollLeft(),
                        scrollTop: i.scrollTop(),
                        width: i.outerWidth(),
                        height: i.outerHeight()
                    }
                }
            }, t.fn.position = function (s) {
                if (!s || !s.of) return d.apply(this, arguments);
                s = t.extend({}, s);
                var u, p, f, m, g, b, v = t(s.of),
                    _ = t.position.getWithinInfo(s.within),
                    y = t.position.getScrollInfo(_),
                    w = (s.collision || "flip").split(" "),
                    x = {};
                return b = n(v), v[0].preventDefault && (s.at = "left top"), p = b.width, f = b.height, m = b.offset, g = t.extend({}, m), t.each(["my", "at"], function () {
                    var t, e, i = (s[this] || "").split(" ");
                    1 === i.length && (i = r.test(i[0]) ? i.concat(["center"]) : l.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = r.test(i[0]) ? i[0] : "center", i[1] = l.test(i[1]) ? i[1] : "center", t = c.exec(i[0]), e = c.exec(i[1]), x[this] = [t ? t[0] : 0, e ? e[0] : 0], s[this] = [h.exec(i[0])[0], h.exec(i[1])[0]]
                }), 1 === w.length && (w[1] = w[0]), "right" === s.at[0] ? g.left += p : "center" === s.at[0] && (g.left += p / 2), "bottom" === s.at[1] ? g.top += f : "center" === s.at[1] && (g.top += f / 2), u = e(x.at, p, f), g.left += u[0], g.top += u[1], this.each(function () {
                    var n, r, l = t(this),
                        c = l.outerWidth(),
                        h = l.outerHeight(),
                        d = i(this, "marginLeft"),
                        b = i(this, "marginTop"),
                        k = c + d + i(this, "marginRight") + y.width,
                        C = h + b + i(this, "marginBottom") + y.height,
                        D = t.extend({}, g),
                        T = e(x.my, l.outerWidth(), l.outerHeight());
                    "right" === s.my[0] ? D.left -= c : "center" === s.my[0] && (D.left -= c / 2), "bottom" === s.my[1] ? D.top -= h : "center" === s.my[1] && (D.top -= h / 2), D.left += T[0], D.top += T[1], n = {
                        marginLeft: d,
                        marginTop: b
                    }, t.each(["left", "top"], function (e, i) {
                        t.ui.position[w[e]] && t.ui.position[w[e]][i](D, {
                            targetWidth: p,
                            targetHeight: f,
                            elemWidth: c,
                            elemHeight: h,
                            collisionPosition: n,
                            collisionWidth: k,
                            collisionHeight: C,
                            offset: [u[0] + T[0], u[1] + T[1]],
                            my: s.my,
                            at: s.at,
                            within: _,
                            elem: l
                        })
                    }), s.using && (r = function (t) {
                        var e = m.left - D.left,
                            i = e + p - c,
                            n = m.top - D.top,
                            r = n + f - h,
                            u = {
                                target: {
                                    element: v,
                                    left: m.left,
                                    top: m.top,
                                    width: p,
                                    height: f
                                },
                                element: {
                                    element: l,
                                    left: D.left,
                                    top: D.top,
                                    width: c,
                                    height: h
                                },
                                horizontal: 0 > i ? "left" : e > 0 ? "right" : "center",
                                vertical: 0 > r ? "top" : n > 0 ? "bottom" : "middle"
                            };
                        c > p && p > a(e + i) && (u.horizontal = "center"), h > f && f > a(n + r) && (u.vertical = "middle"), u.important = o(a(e), a(i)) > o(a(n), a(r)) ? "horizontal" : "vertical", s.using.call(this, t, u)
                    }), l.offset(t.extend(D, {
                        using: r
                    }))
                })
            }, t.ui.position = {
                fit: {
                    left: function (t, e) {
                        var i, n = e.within,
                            s = n.isWindow ? n.scrollLeft : n.offset.left,
                            a = n.width,
                            r = t.left - e.collisionPosition.marginLeft,
                            l = s - r,
                            c = r + e.collisionWidth - a - s;
                        e.collisionWidth > a ? l > 0 && 0 >= c ? (i = t.left + l + e.collisionWidth - a - s, t.left += l - i) : t.left = c > 0 && 0 >= l ? s : l > c ? s + a - e.collisionWidth : s : l > 0 ? t.left += l : c > 0 ? t.left -= c : t.left = o(t.left - r, t.left)
                    },
                    top: function (t, e) {
                        var i, n = e.within,
                            s = n.isWindow ? n.scrollTop : n.offset.top,
                            a = e.within.height,
                            r = t.top - e.collisionPosition.marginTop,
                            l = s - r,
                            c = r + e.collisionHeight - a - s;
                        e.collisionHeight > a ? l > 0 && 0 >= c ? (i = t.top + l + e.collisionHeight - a - s, t.top += l - i) : t.top = c > 0 && 0 >= l ? s : l > c ? s + a - e.collisionHeight : s : l > 0 ? t.top += l : c > 0 ? t.top -= c : t.top = o(t.top - r, t.top)
                    }
                },
                flip: {
                    left: function (t, e) {
                        var i, n, s = e.within,
                            o = s.offset.left + s.scrollLeft,
                            r = s.width,
                            l = s.isWindow ? s.scrollLeft : s.offset.left,
                            c = t.left - e.collisionPosition.marginLeft,
                            h = c - l,
                            u = c + e.collisionWidth - r - l,
                            d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                            p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                            f = -2 * e.offset[0];
                        0 > h ? (0 > (i = t.left + d + p + f + e.collisionWidth - r - o) || a(h) > i) && (t.left += d + p + f) : u > 0 && ((n = t.left - e.collisionPosition.marginLeft + d + p + f - l) > 0 || u > a(n)) && (t.left += d + p + f)
                    },
                    top: function (t, e) {
                        var i, n, s = e.within,
                            o = s.offset.top + s.scrollTop,
                            r = s.height,
                            l = s.isWindow ? s.scrollTop : s.offset.top,
                            c = t.top - e.collisionPosition.marginTop,
                            h = c - l,
                            u = c + e.collisionHeight - r - l,
                            d = "top" === e.my[1],
                            p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                            f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                            m = -2 * e.offset[1];
                        0 > h ? (0 > (n = t.top + p + f + m + e.collisionHeight - r - o) || a(h) > n) && (t.top += p + f + m) : u > 0 && ((i = t.top - e.collisionPosition.marginTop + p + f + m - l) > 0 || u > a(i)) && (t.top += p + f + m)
                    }
                },
                flipfit: {
                    left: function () {
                        t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
                    },
                    top: function () {
                        t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
                    }
                }
            }
        }(), t.ui.position, t.extend(t.expr[":"], {
            data: t.expr.createPseudo ? t.expr.createPseudo(function (e) {
                return function (i) {
                    return !!t.data(i, e)
                }
            }) : function (e, i, n) {
                return !!t.data(e, n[3])
            }
        }), t.fn.extend({
            disableSelection: function () {
                var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
                return function () {
                    return this.on(t + ".ui-disableSelection", function (t) {
                        t.preventDefault()
                    })
                }
            }(),
            enableSelection: function () {
                return this.off(".ui-disableSelection")
            }
        });
    var h = "ui-effects-",
        u = "ui-effects-style",
        d = "ui-effects-animated",
        p = t;
    t.effects = {
            effect: {}
        },
        function (t, e) {
            function i(t, e, i) {
                var n = h[e.type] || {};
                return null == t ? i || !e.def ? null : e.def : (t = n.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : n.mod ? (t + n.mod) % n.mod : 0 > t ? 0 : t > n.max ? n.max : t)
            }

            function n(i) {
                var n = l(),
                    s = n._rgba = [];
                return i = i.toLowerCase(), p(r, function (t, o) {
                    var a, r = o.re.exec(i),
                        l = r && o.parse(r),
                        h = o.space || "rgba";
                    return l ? (a = n[h](l), n[c[h].cache] = a[c[h].cache], s = n._rgba = a._rgba, !1) : e
                }), s.length ? ("0,0,0,0" === s.join() && t.extend(s, o.transparent), n) : o[i]
            }

            function s(t, e, i) {
                return i = (i + 1) % 1, 1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
            }
            var o, a = /^([\-+])=\s*(\d+\.?\d*)/,
                r = [{
                    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function (t) {
                        return [t[1], t[2], t[3], t[4]]
                    }
                }, {
                    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function (t) {
                        return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                    }
                }, {
                    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                    parse: function (t) {
                        return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                    }
                }, {
                    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                    parse: function (t) {
                        return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                    }
                }, {
                    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    space: "hsla",
                    parse: function (t) {
                        return [t[1], t[2] / 100, t[3] / 100, t[4]]
                    }
                }],
                l = t.Color = function (e, i, n, s) {
                    return new t.Color.fn.parse(e, i, n, s)
                },
                c = {
                    rgba: {
                        props: {
                            red: {
                                idx: 0,
                                type: "byte"
                            },
                            green: {
                                idx: 1,
                                type: "byte"
                            },
                            blue: {
                                idx: 2,
                                type: "byte"
                            }
                        }
                    },
                    hsla: {
                        props: {
                            hue: {
                                idx: 0,
                                type: "degrees"
                            },
                            saturation: {
                                idx: 1,
                                type: "percent"
                            },
                            lightness: {
                                idx: 2,
                                type: "percent"
                            }
                        }
                    }
                },
                h = {
                    byte: {
                        floor: !0,
                        max: 255
                    },
                    percent: {
                        max: 1
                    },
                    degrees: {
                        mod: 360,
                        floor: !0
                    }
                },
                u = l.support = {},
                d = t("<p>")[0],
                p = t.each;
            d.style.cssText = "background-color:rgba(1,1,1,.5)", u.rgba = d.style.backgroundColor.indexOf("rgba") > -1, p(c, function (t, e) {
                e.cache = "_" + t, e.props.alpha = {
                    idx: 3,
                    type: "percent",
                    def: 1
                }
            }), l.fn = t.extend(l.prototype, {
                parse: function (s, a, r, h) {
                    if (s === e) return this._rgba = [null, null, null, null], this;
                    (s.jquery || s.nodeType) && (s = t(s).css(a), a = e);
                    var u = this,
                        d = t.type(s),
                        f = this._rgba = [];
                    return a !== e && (s = [s, a, r, h], d = "array"), "string" === d ? this.parse(n(s) || o._default) : "array" === d ? (p(c.rgba.props, function (t, e) {
                        f[e.idx] = i(s[e.idx], e)
                    }), this) : "object" === d ? (s instanceof l ? p(c, function (t, e) {
                        s[e.cache] && (u[e.cache] = s[e.cache].slice())
                    }) : p(c, function (e, n) {
                        var o = n.cache;
                        p(n.props, function (t, e) {
                            if (!u[o] && n.to) {
                                if ("alpha" === t || null == s[t]) return;
                                u[o] = n.to(u._rgba)
                            }
                            u[o][e.idx] = i(s[t], e, !0)
                        }), u[o] && 0 > t.inArray(null, u[o].slice(0, 3)) && (u[o][3] = 1, n.from && (u._rgba = n.from(u[o])))
                    }), this) : e
                },
                is: function (t) {
                    var i = l(t),
                        n = !0,
                        s = this;
                    return p(c, function (t, o) {
                        var a, r = i[o.cache];
                        return r && (a = s[o.cache] || o.to && o.to(s._rgba) || [], p(o.props, function (t, i) {
                            return null != r[i.idx] ? n = r[i.idx] === a[i.idx] : e
                        })), n
                    }), n
                },
                _space: function () {
                    var t = [],
                        e = this;
                    return p(c, function (i, n) {
                        e[n.cache] && t.push(i)
                    }), t.pop()
                },
                transition: function (t, e) {
                    var n = l(t),
                        s = n._space(),
                        o = c[s],
                        a = 0 === this.alpha() ? l("transparent") : this,
                        r = a[o.cache] || o.to(a._rgba),
                        u = r.slice();
                    return n = n[o.cache], p(o.props, function (t, s) {
                        var o = s.idx,
                            a = r[o],
                            l = n[o],
                            c = h[s.type] || {};
                        null !== l && (null === a ? u[o] = l : (c.mod && (l - a > c.mod / 2 ? a += c.mod : a - l > c.mod / 2 && (a -= c.mod)), u[o] = i((l - a) * e + a, s)))
                    }), this[s](u)
                },
                blend: function (e) {
                    if (1 === this._rgba[3]) return this;
                    var i = this._rgba.slice(),
                        n = i.pop(),
                        s = l(e)._rgba;
                    return l(t.map(i, function (t, e) {
                        return (1 - n) * s[e] + n * t
                    }))
                },
                toRgbaString: function () {
                    var e = "rgba(",
                        i = t.map(this._rgba, function (t, e) {
                            return null == t ? e > 2 ? 1 : 0 : t
                        });
                    return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
                },
                toHslaString: function () {
                    var e = "hsla(",
                        i = t.map(this.hsla(), function (t, e) {
                            return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
                        });
                    return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
                },
                toHexString: function (e) {
                    var i = this._rgba.slice(),
                        n = i.pop();
                    return e && i.push(~~(255 * n)), "#" + t.map(i, function (t) {
                        return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
                    }).join("")
                },
                toString: function () {
                    return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                }
            }), l.fn.parse.prototype = l.fn, c.hsla.to = function (t) {
                if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                var e, i, n = t[0] / 255,
                    s = t[1] / 255,
                    o = t[2] / 255,
                    a = t[3],
                    r = Math.max(n, s, o),
                    l = Math.min(n, s, o),
                    c = r - l,
                    h = r + l,
                    u = .5 * h;
                return e = l === r ? 0 : n === r ? 60 * (s - o) / c + 360 : s === r ? 60 * (o - n) / c + 120 : 60 * (n - s) / c + 240, i = 0 === c ? 0 : .5 >= u ? c / h : c / (2 - h), [Math.round(e) % 360, i, u, null == a ? 1 : a]
            }, c.hsla.from = function (t) {
                if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                var e = t[0] / 360,
                    i = t[1],
                    n = t[2],
                    o = t[3],
                    a = .5 >= n ? n * (1 + i) : n + i - n * i,
                    r = 2 * n - a;
                return [Math.round(255 * s(r, a, e + 1 / 3)), Math.round(255 * s(r, a, e)), Math.round(255 * s(r, a, e - 1 / 3)), o]
            }, p(c, function (n, s) {
                var o = s.props,
                    r = s.cache,
                    c = s.to,
                    h = s.from;
                l.fn[n] = function (n) {
                    if (c && !this[r] && (this[r] = c(this._rgba)), n === e) return this[r].slice();
                    var s, a = t.type(n),
                        u = "array" === a || "object" === a ? n : arguments,
                        d = this[r].slice();
                    return p(o, function (t, e) {
                        var n = u["object" === a ? t : e.idx];
                        null == n && (n = d[e.idx]), d[e.idx] = i(n, e)
                    }), h ? (s = l(h(d)), s[r] = d, s) : l(d)
                }, p(o, function (e, i) {
                    l.fn[e] || (l.fn[e] = function (s) {
                        var o, r = t.type(s),
                            l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : n,
                            c = this[l](),
                            h = c[i.idx];
                        return "undefined" === r ? h : ("function" === r && (s = s.call(this, h), r = t.type(s)), null == s && i.empty ? this : ("string" === r && (o = a.exec(s)) && (s = h + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1)), c[i.idx] = s, this[l](c)))
                    })
                })
            }), l.hook = function (e) {
                var i = e.split(" ");
                p(i, function (e, i) {
                    t.cssHooks[i] = {
                        set: function (e, s) {
                            var o, a, r = "";
                            if ("transparent" !== s && ("string" !== t.type(s) || (o = n(s)))) {
                                if (s = l(o || s), !u.rgba && 1 !== s._rgba[3]) {
                                    for (a = "backgroundColor" === i ? e.parentNode : e;
                                        ("" === r || "transparent" === r) && a && a.style;) try {
                                        r = t.css(a, "backgroundColor"), a = a.parentNode
                                    } catch (t) {}
                                    s = s.blend(r && "transparent" !== r ? r : "_default")
                                }
                                s = s.toRgbaString()
                            }
                            try {
                                e.style[i] = s
                            } catch (t) {}
                        }
                    }, t.fx.step[i] = function (e) {
                        e.colorInit || (e.start = l(e.elem, i), e.end = l(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                    }
                })
            }, l.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"), t.cssHooks.borderColor = {
                expand: function (t) {
                    var e = {};
                    return p(["Top", "Right", "Bottom", "Left"], function (i, n) {
                        e["border" + n + "Color"] = t
                    }), e
                }
            }, o = t.Color.names = {
                aqua: "#00ffff",
                black: "#000000",
                blue: "#0000ff",
                fuchsia: "#ff00ff",
                gray: "#808080",
                green: "#008000",
                lime: "#00ff00",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                purple: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                teal: "#008080",
                white: "#ffffff",
                yellow: "#ffff00",
                transparent: [null, null, null, 0],
                _default: "#ffffff"
            }
        }(p),
        function () {
            function e(e) {
                var i, n, s = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
                    o = {};
                if (s && s.length && s[0] && s[s[0]])
                    for (n = s.length; n--;) i = s[n], "string" == typeof s[i] && (o[t.camelCase(i)] = s[i]);
                else
                    for (i in s) "string" == typeof s[i] && (o[i] = s[i]);
                return o
            }

            function i(e, i) {
                var n, o, a = {};
                for (n in i) o = i[n], e[n] !== o && (s[n] || (t.fx.step[n] || !isNaN(parseFloat(o))) && (a[n] = o));
                return a
            }
            var n = ["add", "remove", "toggle"],
                s = {
                    border: 1,
                    borderBottom: 1,
                    borderColor: 1,
                    borderLeft: 1,
                    borderRight: 1,
                    borderTop: 1,
                    borderWidth: 1,
                    margin: 1,
                    padding: 1
                };
            t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (e, i) {
                t.fx.step[i] = function (t) {
                    ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (p.style(t.elem, i, t.end), t.setAttr = !0)
                }
            }), t.fn.addBack || (t.fn.addBack = function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }), t.effects.animateClass = function (s, o, a, r) {
                var l = t.speed(o, a, r);
                return this.queue(function () {
                    var o, a = t(this),
                        r = a.attr("class") || "",
                        c = l.children ? a.find("*").addBack() : a;
                    c = c.map(function () {
                        return {
                            el: t(this),
                            start: e(this)
                        }
                    }), o = function () {
                        t.each(n, function (t, e) {
                            s[e] && a[e + "Class"](s[e])
                        })
                    }, o(), c = c.map(function () {
                        return this.end = e(this.el[0]), this.diff = i(this.start, this.end), this
                    }), a.attr("class", r), c = c.map(function () {
                        var e = this,
                            i = t.Deferred(),
                            n = t.extend({}, l, {
                                queue: !1,
                                complete: function () {
                                    i.resolve(e)
                                }
                            });
                        return this.el.animate(this.diff, n), i.promise()
                    }), t.when.apply(t, c.get()).done(function () {
                        o(), t.each(arguments, function () {
                            var e = this.el;
                            t.each(this.diff, function (t) {
                                e.css(t, "")
                            })
                        }), l.complete.call(a[0])
                    })
                })
            }, t.fn.extend({
                addClass: function (e) {
                    return function (i, n, s, o) {
                        return n ? t.effects.animateClass.call(this, {
                            add: i
                        }, n, s, o) : e.apply(this, arguments)
                    }
                }(t.fn.addClass),
                removeClass: function (e) {
                    return function (i, n, s, o) {
                        return arguments.length > 1 ? t.effects.animateClass.call(this, {
                            remove: i
                        }, n, s, o) : e.apply(this, arguments)
                    }
                }(t.fn.removeClass),
                toggleClass: function (e) {
                    return function (i, n, s, o, a) {
                        return "boolean" == typeof n || void 0 === n ? s ? t.effects.animateClass.call(this, n ? {
                            add: i
                        } : {
                            remove: i
                        }, s, o, a) : e.apply(this, arguments) : t.effects.animateClass.call(this, {
                            toggle: i
                        }, n, s, o)
                    }
                }(t.fn.toggleClass),
                switchClass: function (e, i, n, s, o) {
                    return t.effects.animateClass.call(this, {
                        add: i,
                        remove: e
                    }, n, s, o)
                }
            })
        }(),
        function () {
            function e(e, i, n, s) {
                return t.isPlainObject(e) && (i = e, e = e.effect), e = {
                    effect: e
                }, null == i && (i = {}), t.isFunction(i) && (s = i, n = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (s = n, n = i, i = {}), t.isFunction(n) && (s = n, n = null), i && t.extend(e, i), n = n || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof n ? n : n in t.fx.speeds ? t.fx.speeds[n] : t.fx.speeds._default, e.complete = s || i.complete, e
            }

            function i(e) {
                return !(e && "number" != typeof e && !t.fx.speeds[e]) || ("string" == typeof e && !t.effects.effect[e] || (!!t.isFunction(e) || "object" == typeof e && !e.effect))
            }

            function n(t, e) {
                var i = e.outerWidth(),
                    n = e.outerHeight(),
                    s = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
                    o = s.exec(t) || ["", 0, i, n, 0];
                return {
                    top: parseFloat(o[1]) || 0,
                    right: "auto" === o[2] ? i : parseFloat(o[2]),
                    bottom: "auto" === o[3] ? n : parseFloat(o[3]),
                    left: parseFloat(o[4]) || 0
                }
            }
            t.expr && t.expr.filters && t.expr.filters.animated && (t.expr.filters.animated = function (e) {
                return function (i) {
                    return !!t(i).data(d) || e(i)
                }
            }(t.expr.filters.animated)), !1 !== t.uiBackCompat && t.extend(t.effects, {
                save: function (t, e) {
                    for (var i = 0, n = e.length; n > i; i++) null !== e[i] && t.data(h + e[i], t[0].style[e[i]])
                },
                restore: function (t, e) {
                    for (var i, n = 0, s = e.length; s > n; n++) null !== e[n] && (i = t.data(h + e[n]), t.css(e[n], i))
                },
                setMode: function (t, e) {
                    return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
                },
                createWrapper: function (e) {
                    if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                    var i = {
                            width: e.outerWidth(!0),
                            height: e.outerHeight(!0),
                            float: e.css("float")
                        },
                        n = t("<div></div>").addClass("ui-effects-wrapper").css({
                            fontSize: "100%",
                            background: "transparent",
                            border: "none",
                            margin: 0,
                            padding: 0
                        }),
                        s = {
                            width: e.width(),
                            height: e.height()
                        },
                        o = document.activeElement;
                    try {
                        o.id
                    } catch (t) {
                        o = document.body
                    }
                    return e.wrap(n), (e[0] === o || t.contains(e[0], o)) && t(o).trigger("focus"), n = e.parent(), "static" === e.css("position") ? (n.css({
                        position: "relative"
                    }), e.css({
                        position: "relative"
                    })) : (t.extend(i, {
                        position: e.css("position"),
                        zIndex: e.css("z-index")
                    }), t.each(["top", "left", "bottom", "right"], function (t, n) {
                        i[n] = e.css(n), isNaN(parseInt(i[n], 10)) && (i[n] = "auto")
                    }), e.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    })), e.css(s), n.css(i).show()
                },
                removeWrapper: function (e) {
                    var i = document.activeElement;
                    return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).trigger("focus")), e
                }
            }), t.extend(t.effects, {
                version: "1.12.1",
                define: function (e, i, n) {
                    return n || (n = i, i = "effect"), t.effects.effect[e] = n, t.effects.effect[e].mode = i, n
                },
                scaledDimensions: function (t, e, i) {
                    if (0 === e) return {
                        height: 0,
                        width: 0,
                        outerHeight: 0,
                        outerWidth: 0
                    };
                    var n = "horizontal" !== i ? (e || 100) / 100 : 1,
                        s = "vertical" !== i ? (e || 100) / 100 : 1;
                    return {
                        height: t.height() * s,
                        width: t.width() * n,
                        outerHeight: t.outerHeight() * s,
                        outerWidth: t.outerWidth() * n
                    }
                },
                clipToBox: function (t) {
                    return {
                        width: t.clip.right - t.clip.left,
                        height: t.clip.bottom - t.clip.top,
                        left: t.clip.left,
                        top: t.clip.top
                    }
                },
                unshift: function (t, e, i) {
                    var n = t.queue();
                    e > 1 && n.splice.apply(n, [1, 0].concat(n.splice(e, i))), t.dequeue()
                },
                saveStyle: function (t) {
                    t.data(u, t[0].style.cssText)
                },
                restoreStyle: function (t) {
                    t[0].style.cssText = t.data(u) || "", t.removeData(u)
                },
                mode: function (t, e) {
                    var i = t.is(":hidden");
                    return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), e
                },
                getBaseline: function (t, e) {
                    var i, n;
                    switch (t[0]) {
                        case "top":
                            i = 0;
                            break;
                        case "middle":
                            i = .5;
                            break;
                        case "bottom":
                            i = 1;
                            break;
                        default:
                            i = t[0] / e.height
                    }
                    switch (t[1]) {
                        case "left":
                            n = 0;
                            break;
                        case "center":
                            n = .5;
                            break;
                        case "right":
                            n = 1;
                            break;
                        default:
                            n = t[1] / e.width
                    }
                    return {
                        x: n,
                        y: i
                    }
                },
                createPlaceholder: function (e) {
                    var i, n = e.css("position"),
                        s = e.position();
                    return e.css({
                        marginTop: e.css("marginTop"),
                        marginBottom: e.css("marginBottom"),
                        marginLeft: e.css("marginLeft"),
                        marginRight: e.css("marginRight")
                    }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()), /^(static|relative)/.test(n) && (n = "absolute", i = t("<" + e[0].nodeName + ">").insertAfter(e).css({
                        display: /^(inline|ruby)/.test(e.css("display")) ? "inline-block" : "block",
                        visibility: "hidden",
                        marginTop: e.css("marginTop"),
                        marginBottom: e.css("marginBottom"),
                        marginLeft: e.css("marginLeft"),
                        marginRight: e.css("marginRight"),
                        float: e.css("float")
                    }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"), e.data(h + "placeholder", i)), e.css({
                        position: n,
                        left: s.left,
                        top: s.top
                    }), i
                },
                removePlaceholder: function (t) {
                    var e = h + "placeholder",
                        i = t.data(e);
                    i && (i.remove(), t.removeData(e))
                },
                cleanUp: function (e) {
                    t.effects.restoreStyle(e), t.effects.removePlaceholder(e)
                },
                setTransition: function (e, i, n, s) {
                    return s = s || {}, t.each(i, function (t, i) {
                        var o = e.cssUnit(i);
                        o[0] > 0 && (s[i] = o[0] * n + o[1])
                    }), s
                }
            }), t.fn.extend({
                effect: function () {
                    function i(e) {
                        function i() {
                            r.removeData(d), t.effects.cleanUp(r), "hide" === n.mode && r.hide(), a()
                        }

                        function a() {
                            t.isFunction(l) && l.call(r[0]), t.isFunction(e) && e()
                        }
                        var r = t(this);
                        n.mode = h.shift(), !1 === t.uiBackCompat || o ? "none" === n.mode ? (r[c](), a()) : s.call(r[0], n, i) : (r.is(":hidden") ? "hide" === c : "show" === c) ? (r[c](), a()) : s.call(r[0], n, a)
                    }
                    var n = e.apply(this, arguments),
                        s = t.effects.effect[n.effect],
                        o = s.mode,
                        a = n.queue,
                        r = a || "fx",
                        l = n.complete,
                        c = n.mode,
                        h = [],
                        u = function (e) {
                            var i = t(this),
                                n = t.effects.mode(i, c) || o;
                            i.data(d, !0), h.push(n), o && ("show" === n || n === o && "hide" === n) && i.show(), o && "none" === n || t.effects.saveStyle(i), t.isFunction(e) && e()
                        };
                    return t.fx.off || !s ? c ? this[c](n.duration, l) : this.each(function () {
                        l && l.call(this)
                    }) : !1 === a ? this.each(u).each(i) : this.queue(r, u).queue(r, i)
                },
                show: function (t) {
                    return function (n) {
                        if (i(n)) return t.apply(this, arguments);
                        var s = e.apply(this, arguments);
                        return s.mode = "show", this.effect.call(this, s)
                    }
                }(t.fn.show),
                hide: function (t) {
                    return function (n) {
                        if (i(n)) return t.apply(this, arguments);
                        var s = e.apply(this, arguments);
                        return s.mode = "hide", this.effect.call(this, s)
                    }
                }(t.fn.hide),
                toggle: function (t) {
                    return function (n) {
                        if (i(n) || "boolean" == typeof n) return t.apply(this, arguments);
                        var s = e.apply(this, arguments);
                        return s.mode = "toggle", this.effect.call(this, s)
                    }
                }(t.fn.toggle),
                cssUnit: function (e) {
                    var i = this.css(e),
                        n = [];
                    return t.each(["em", "px", "%", "pt"], function (t, e) {
                        i.indexOf(e) > 0 && (n = [parseFloat(i), e])
                    }), n
                },
                cssClip: function (t) {
                    return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : n(this.css("clip"), this)
                },
                transfer: function (e, i) {
                    var n = t(this),
                        s = t(e.to),
                        o = "fixed" === s.css("position"),
                        a = t("body"),
                        r = o ? a.scrollTop() : 0,
                        l = o ? a.scrollLeft() : 0,
                        c = s.offset(),
                        h = {
                            top: c.top - r,
                            left: c.left - l,
                            height: s.innerHeight(),
                            width: s.innerWidth()
                        },
                        u = n.offset(),
                        d = t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({
                            top: u.top - r,
                            left: u.left - l,
                            height: n.innerHeight(),
                            width: n.innerWidth(),
                            position: o ? "fixed" : "absolute"
                        }).animate(h, e.duration, e.easing, function () {
                            d.remove(), t.isFunction(i) && i()
                        })
                }
            }), t.fx.step.clip = function (e) {
                e.clipInit || (e.start = t(e.elem).cssClip(), "string" == typeof e.end && (e.end = n(e.end, e.elem)), e.clipInit = !0), t(e.elem).cssClip({
                    top: e.pos * (e.end.top - e.start.top) + e.start.top,
                    right: e.pos * (e.end.right - e.start.right) + e.start.right,
                    bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom,
                    left: e.pos * (e.end.left - e.start.left) + e.start.left
                })
            }
        }(),
        function () {
            var e = {};
            t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, i) {
                e[i] = function (e) {
                    return Math.pow(e, t + 2)
                }
            }), t.extend(e, {
                Sine: function (t) {
                    return 1 - Math.cos(t * Math.PI / 2)
                },
                Circ: function (t) {
                    return 1 - Math.sqrt(1 - t * t)
                },
                Elastic: function (t) {
                    return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
                },
                Back: function (t) {
                    return t * t * (3 * t - 2)
                },
                Bounce: function (t) {
                    for (var e, i = 4;
                        ((e = Math.pow(2, --i)) - 1) / 11 > t;);
                    return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                }
            }), t.each(e, function (e, i) {
                t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function (t) {
                    return 1 - i(1 - t)
                }, t.easing["easeInOut" + e] = function (t) {
                    return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
                }
            })
        }();
    t.effects;
    t.effects.define("blind", "hide", function (e, i) {
            var n = {
                    up: ["bottom", "top"],
                    vertical: ["bottom", "top"],
                    down: ["top", "bottom"],
                    left: ["right", "left"],
                    horizontal: ["right", "left"],
                    right: ["left", "right"]
                },
                s = t(this),
                o = e.direction || "up",
                a = s.cssClip(),
                r = {
                    clip: t.extend({}, a)
                },
                l = t.effects.createPlaceholder(s);
            r.clip[n[o][0]] = r.clip[n[o][1]], "show" === e.mode && (s.cssClip(r.clip), l && l.css(t.effects.clipToBox(r)), r.clip = a), l && l.animate(t.effects.clipToBox(r), e.duration, e.easing), s.animate(r, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        }), t.effects.define("bounce", function (e, i) {
            var n, s, o, a = t(this),
                r = e.mode,
                l = "hide" === r,
                c = "show" === r,
                h = e.direction || "up",
                u = e.distance,
                d = e.times || 5,
                p = 2 * d + (c || l ? 1 : 0),
                f = e.duration / p,
                m = e.easing,
                g = "up" === h || "down" === h ? "top" : "left",
                b = "up" === h || "left" === h,
                v = 0,
                _ = a.queue().length;
            for (t.effects.createPlaceholder(a), o = a.css(g), u || (u = a["top" === g ? "outerHeight" : "outerWidth"]() / 3), c && (s = {
                    opacity: 1
                }, s[g] = o, a.css("opacity", 0).css(g, b ? 2 * -u : 2 * u).animate(s, f, m)), l && (u /= Math.pow(2, d - 1)), s = {}, s[g] = o; d > v; v++) n = {}, n[g] = (b ? "-=" : "+=") + u, a.animate(n, f, m).animate(s, f, m), u = l ? 2 * u : u / 2;
            l && (n = {
                opacity: 0
            }, n[g] = (b ? "-=" : "+=") + u, a.animate(n, f, m)), a.queue(i), t.effects.unshift(a, _, p + 1)
        }), t.effects.define("clip", "hide", function (e, i) {
            var n, s = {},
                o = t(this),
                a = e.direction || "vertical",
                r = "both" === a,
                l = r || "horizontal" === a,
                c = r || "vertical" === a;
            n = o.cssClip(), s.clip = {
                top: c ? (n.bottom - n.top) / 2 : n.top,
                right: l ? (n.right - n.left) / 2 : n.right,
                bottom: c ? (n.bottom - n.top) / 2 : n.bottom,
                left: l ? (n.right - n.left) / 2 : n.left
            }, t.effects.createPlaceholder(o), "show" === e.mode && (o.cssClip(s.clip), s.clip = n), o.animate(s, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        }), t.effects.define("drop", "hide", function (e, i) {
            var n, s = t(this),
                o = e.mode,
                a = "show" === o,
                r = e.direction || "left",
                l = "up" === r || "down" === r ? "top" : "left",
                c = "up" === r || "left" === r ? "-=" : "+=",
                h = "+=" === c ? "-=" : "+=",
                u = {
                    opacity: 0
                };
            t.effects.createPlaceholder(s), n = e.distance || s["top" === l ? "outerHeight" : "outerWidth"](!0) / 2, u[l] = c + n, a && (s.css(u), u[l] = h + n, u.opacity = 1), s.animate(u, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        }), t.effects.define("explode", "hide", function (e, i) {
            function n() {
                _.push(this), _.length === u * d && s()
            }

            function s() {
                p.css({
                    visibility: "visible"
                }), t(_).remove(), i()
            }
            var o, a, r, l, c, h, u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
                d = u,
                p = t(this),
                f = e.mode,
                m = "show" === f,
                g = p.show().css("visibility", "hidden").offset(),
                b = Math.ceil(p.outerWidth() / d),
                v = Math.ceil(p.outerHeight() / u),
                _ = [];
            for (o = 0; u > o; o++)
                for (l = g.top + o * v, h = o - (u - 1) / 2, a = 0; d > a; a++) r = g.left + a * b, c = a - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -a * b,
                    top: -o * v
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: b,
                    height: v,
                    left: r + (m ? c * b : 0),
                    top: l + (m ? h * v : 0),
                    opacity: m ? 0 : 1
                }).animate({
                    left: r + (m ? 0 : c * b),
                    top: l + (m ? 0 : h * v),
                    opacity: m ? 1 : 0
                }, e.duration || 500, e.easing, n)
        }), t.effects.define("fade", "toggle", function (e, i) {
            var n = "show" === e.mode;
            t(this).css("opacity", n ? 0 : 1).animate({
                opacity: n ? 1 : 0
            }, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        }), t.effects.define("fold", "hide", function (e, i) {
            var n = t(this),
                s = e.mode,
                o = "show" === s,
                a = "hide" === s,
                r = e.size || 15,
                l = /([0-9]+)%/.exec(r),
                c = !!e.horizFirst,
                h = c ? ["right", "bottom"] : ["bottom", "right"],
                u = e.duration / 2,
                d = t.effects.createPlaceholder(n),
                p = n.cssClip(),
                f = {
                    clip: t.extend({}, p)
                },
                m = {
                    clip: t.extend({}, p)
                },
                g = [p[h[0]], p[h[1]]],
                b = n.queue().length;
            l && (r = parseInt(l[1], 10) / 100 * g[a ? 0 : 1]), f.clip[h[0]] = r, m.clip[h[0]] = r, m.clip[h[1]] = 0, o && (n.cssClip(m.clip), d && d.css(t.effects.clipToBox(m)), m.clip = p), n.queue(function (i) {
                d && d.animate(t.effects.clipToBox(f), u, e.easing).animate(t.effects.clipToBox(m), u, e.easing), i()
            }).animate(f, u, e.easing).animate(m, u, e.easing).queue(i), t.effects.unshift(n, b, 4)
        }), t.effects.define("highlight", "show", function (e, i) {
            var n = t(this),
                s = {
                    backgroundColor: n.css("backgroundColor")
                };
            "hide" === e.mode && (s.opacity = 0), t.effects.saveStyle(n), n.css({
                backgroundImage: "none",
                backgroundColor: e.color || "#ffff99"
            }).animate(s, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        }), t.effects.define("size", function (e, i) {
            var n, s, o, a = t(this),
                r = ["fontSize"],
                l = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                c = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                h = e.mode,
                u = "effect" !== h,
                d = e.scale || "both",
                p = e.origin || ["middle", "center"],
                f = a.css("position"),
                m = a.position(),
                g = t.effects.scaledDimensions(a),
                b = e.from || g,
                v = e.to || t.effects.scaledDimensions(a, 0);
            t.effects.createPlaceholder(a), "show" === h && (o = b, b = v, v = o), s = {
                from: {
                    y: b.height / g.height,
                    x: b.width / g.width
                },
                to: {
                    y: v.height / g.height,
                    x: v.width / g.width
                }
            }, ("box" === d || "both" === d) && (s.from.y !== s.to.y && (b = t.effects.setTransition(a, l, s.from.y, b), v = t.effects.setTransition(a, l, s.to.y, v)), s.from.x !== s.to.x && (b = t.effects.setTransition(a, c, s.from.x, b), v = t.effects.setTransition(a, c, s.to.x, v))), ("content" === d || "both" === d) && s.from.y !== s.to.y && (b = t.effects.setTransition(a, r, s.from.y, b), v = t.effects.setTransition(a, r, s.to.y, v)), p && (n = t.effects.getBaseline(p, g), b.top = (g.outerHeight - b.outerHeight) * n.y + m.top, b.left = (g.outerWidth - b.outerWidth) * n.x + m.left, v.top = (g.outerHeight - v.outerHeight) * n.y + m.top, v.left = (g.outerWidth - v.outerWidth) * n.x + m.left), a.css(b), ("content" === d || "both" === d) && (l = l.concat(["marginTop", "marginBottom"]).concat(r), c = c.concat(["marginLeft", "marginRight"]), a.find("*[width]").each(function () {
                var i = t(this),
                    n = t.effects.scaledDimensions(i),
                    o = {
                        height: n.height * s.from.y,
                        width: n.width * s.from.x,
                        outerHeight: n.outerHeight * s.from.y,
                        outerWidth: n.outerWidth * s.from.x
                    },
                    a = {
                        height: n.height * s.to.y,
                        width: n.width * s.to.x,
                        outerHeight: n.height * s.to.y,
                        outerWidth: n.width * s.to.x
                    };
                s.from.y !== s.to.y && (o = t.effects.setTransition(i, l, s.from.y, o), a = t.effects.setTransition(i, l, s.to.y, a)), s.from.x !== s.to.x && (o = t.effects.setTransition(i, c, s.from.x, o), a = t.effects.setTransition(i, c, s.to.x, a)), u && t.effects.saveStyle(i), i.css(o), i.animate(a, e.duration, e.easing, function () {
                    u && t.effects.restoreStyle(i)
                })
            })), a.animate(v, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: function () {
                    var e = a.offset();
                    0 === v.opacity && a.css("opacity", b.opacity), u || (a.css("position", "static" === f ? "relative" : f).offset(e), t.effects.saveStyle(a)), i()
                }
            })
        }), t.effects.define("scale", function (e, i) {
            var n = t(this),
                s = e.mode,
                o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "effect" !== s ? 0 : 100),
                a = t.extend(!0, {
                    from: t.effects.scaledDimensions(n),
                    to: t.effects.scaledDimensions(n, o, e.direction || "both"),
                    origin: e.origin || ["middle", "center"]
                }, e);
            e.fade && (a.from.opacity = 1, a.to.opacity = 0), t.effects.effect.size.call(this, a, i)
        }), t.effects.define("puff", "hide", function (e, i) {
            var n = t.extend(!0, {}, e, {
                fade: !0,
                percent: parseInt(e.percent, 10) || 150
            });
            t.effects.effect.scale.call(this, n, i)
        }),
        t.effects.define("pulsate", "show", function (e, i) {
            var n = t(this),
                s = e.mode,
                o = "show" === s,
                a = "hide" === s,
                r = o || a,
                l = 2 * (e.times || 5) + (r ? 1 : 0),
                c = e.duration / l,
                h = 0,
                u = 1,
                d = n.queue().length;
            for ((o || !n.is(":visible")) && (n.css("opacity", 0).show(), h = 1); l > u; u++) n.animate({
                opacity: h
            }, c, e.easing), h = 1 - h;
            n.animate({
                opacity: h
            }, c, e.easing), n.queue(i), t.effects.unshift(n, d, l + 1)
        }), t.effects.define("shake", function (e, i) {
            var n = 1,
                s = t(this),
                o = e.direction || "left",
                a = e.distance || 20,
                r = e.times || 3,
                l = 2 * r + 1,
                c = Math.round(e.duration / l),
                h = "up" === o || "down" === o ? "top" : "left",
                u = "up" === o || "left" === o,
                d = {},
                p = {},
                f = {},
                m = s.queue().length;
            for (t.effects.createPlaceholder(s), d[h] = (u ? "-=" : "+=") + a, p[h] = (u ? "+=" : "-=") + 2 * a, f[h] = (u ? "-=" : "+=") + 2 * a, s.animate(d, c, e.easing); r > n; n++) s.animate(p, c, e.easing).animate(f, c, e.easing);
            s.animate(p, c, e.easing).animate(d, c / 2, e.easing).queue(i), t.effects.unshift(s, m, l + 1)
        }), t.effects.define("slide", "show", function (e, i) {
            var n, s, o = t(this),
                a = {
                    up: ["bottom", "top"],
                    down: ["top", "bottom"],
                    left: ["right", "left"],
                    right: ["left", "right"]
                },
                r = e.mode,
                l = e.direction || "left",
                c = "up" === l || "down" === l ? "top" : "left",
                h = "up" === l || "left" === l,
                u = e.distance || o["top" === c ? "outerHeight" : "outerWidth"](!0),
                d = {};
            t.effects.createPlaceholder(o), n = o.cssClip(), s = o.position()[c], d[c] = (h ? -1 : 1) * u + s, d.clip = o.cssClip(), d.clip[a[l][1]] = d.clip[a[l][0]], "show" === r && (o.cssClip(d.clip), o.css(c, d[c]), d.clip = n, d[c] = s), o.animate(d, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        });
    !1 !== t.uiBackCompat && t.effects.define("transfer", function (e, i) {
        t(this).transfer(e, i)
    }), t.ui.focusable = function (i, n) {
        var s, o, a, r, l, c = i.nodeName.toLowerCase();
        return "area" === c ? (s = i.parentNode, o = s.name, !(!i.href || !o || "map" !== s.nodeName.toLowerCase()) && (a = t("img[usemap='#" + o + "']"), a.length > 0 && a.is(":visible"))) : (/^(input|select|textarea|button|object)$/.test(c) ? (r = !i.disabled) && (l = t(i).closest("fieldset")[0]) && (r = !l.disabled) : r = "a" === c ? i.href || n : n, r && t(i).is(":visible") && e(t(i)))
    }, t.extend(t.expr[":"], {
        focusable: function (e) {
            return t.ui.focusable(e, null != t.attr(e, "tabindex"))
        }
    }), t.ui.focusable, t.fn.form = function () {
        return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form)
    }, t.ui.formResetMixin = {
        _formResetHandler: function () {
            var e = t(this);
            setTimeout(function () {
                var i = e.data("ui-form-reset-instances");
                t.each(i, function () {
                    this.refresh()
                })
            })
        },
        _bindFormResetHandler: function () {
            if (this.form = this.element.form(), this.form.length) {
                var t = this.form.data("ui-form-reset-instances") || [];
                t.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t)
            }
        },
        _unbindFormResetHandler: function () {
            if (this.form.length) {
                var e = this.form.data("ui-form-reset-instances");
                e.splice(t.inArray(this, e), 1), e.length ? this.form.data("ui-form-reset-instances", e) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
            }
        }
    }, "1.7" === t.fn.jquery.substring(0, 3) && (t.each(["Width", "Height"], function (e, i) {
        function n(e, i, n, o) {
            return t.each(s, function () {
                i -= parseFloat(t.css(e, "padding" + this)) || 0, n && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), o && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
            }), i
        }
        var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
            o = i.toLowerCase(),
            a = {
                innerWidth: t.fn.innerWidth,
                innerHeight: t.fn.innerHeight,
                outerWidth: t.fn.outerWidth,
                outerHeight: t.fn.outerHeight
            };
        t.fn["inner" + i] = function (e) {
            return void 0 === e ? a["inner" + i].call(this) : this.each(function () {
                t(this).css(o, n(this, e) + "px")
            })
        }, t.fn["outer" + i] = function (e, s) {
            return "number" != typeof e ? a["outer" + i].call(this, e) : this.each(function () {
                t(this).css(o, n(this, e, !0, s) + "px")
            })
        }
    }), t.fn.addBack = function (t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }), t.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    }, t.ui.escapeSelector = function () {
        var t = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g;
        return function (e) {
            return e.replace(t, "\\$1")
        }
    }(), t.fn.labels = function () {
        var e, i, n, s, o;
        return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (s = this.eq(0).parents("label"), n = this.attr("id"), n && (e = this.eq(0).parents().last(), o = e.add(e.length ? e.siblings() : this.siblings()), i = "label[for='" + t.ui.escapeSelector(n) + "']", s = s.add(o.find(i).addBack(i))), this.pushStack(s))
    }, t.fn.scrollParent = function (e) {
        var i = this.css("position"),
            n = "absolute" === i,
            s = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
            o = this.parents().filter(function () {
                var e = t(this);
                return (!n || "static" !== e.css("position")) && s.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
            }).eq(0);
        return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document)
    }, t.extend(t.expr[":"], {
        tabbable: function (e) {
            var i = t.attr(e, "tabindex"),
                n = null != i;
            return (!n || i >= 0) && t.ui.focusable(e, n)
        }
    }), t.fn.extend({
        uniqueId: function () {
            var t = 0;
            return function () {
                return this.each(function () {
                    this.id || (this.id = "ui-id-" + ++t)
                })
            }
        }(),
        removeUniqueId: function () {
            return this.each(function () {
                /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
            })
        }
    }), t.widget("ui.accordion", {
        version: "1.12.1",
        options: {
            active: 0,
            animate: {},
            classes: {
                "ui-accordion-header": "ui-corner-top",
                "ui-accordion-header-collapsed": "ui-corner-all",
                "ui-accordion-content": "ui-corner-bottom"
            },
            collapsible: !1,
            event: "click",
            header: "> li > :first-child, > :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        hideProps: {
            borderTopWidth: "hide",
            borderBottomWidth: "hide",
            paddingTop: "hide",
            paddingBottom: "hide",
            height: "hide"
        },
        showProps: {
            borderTopWidth: "show",
            borderBottomWidth: "show",
            paddingTop: "show",
            paddingBottom: "show",
            height: "show"
        },
        _create: function () {
            var e = this.options;
            this.prevShow = this.prevHide = t(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), e.collapsible || !1 !== e.active && null != e.active || (e.active = 0), this._processPanels(), 0 > e.active && (e.active += this.headers.length), this._refresh()
        },
        _getCreateEventData: function () {
            return {
                header: this.active,
                panel: this.active.length ? this.active.next() : t()
            }
        },
        _createIcons: function () {
            var e, i, n = this.options.icons;
            n && (e = t("<span>"), this._addClass(e, "ui-accordion-header-icon", "ui-icon " + n.header), e.prependTo(this.headers), i = this.active.children(".ui-accordion-header-icon"), this._removeClass(i, n.header)._addClass(i, null, n.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
        },
        _destroyIcons: function () {
            this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove()
        },
        _destroy: function () {
            var t;
            this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "")
        },
        _setOption: function (t, e) {
            return "active" === t ? void this._activate(e) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || !1 !== this.options.active || this._activate(0), void("icons" === t && (this._destroyIcons(), e && this._createIcons())))
        },
        _setOptionDisabled: function (t) {
            this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t)
        },
        _keydown: function (e) {
            if (!e.altKey && !e.ctrlKey) {
                var i = t.ui.keyCode,
                    n = this.headers.length,
                    s = this.headers.index(e.target),
                    o = !1;
                switch (e.keyCode) {
                    case i.RIGHT:
                    case i.DOWN:
                        o = this.headers[(s + 1) % n];
                        break;
                    case i.LEFT:
                    case i.UP:
                        o = this.headers[(s - 1 + n) % n];
                        break;
                    case i.SPACE:
                    case i.ENTER:
                        this._eventHandler(e);
                        break;
                    case i.HOME:
                        o = this.headers[0];
                        break;
                    case i.END:
                        o = this.headers[n - 1]
                }
                o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), t(o).trigger("focus"), e.preventDefault())
            }
        },
        _panelKeyDown: function (e) {
            e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().trigger("focus")
        },
        refresh: function () {
            var e = this.options;
            this._processPanels(), !1 === e.active && !0 === e.collapsible || !this.headers.length ? (e.active = !1, this.active = t()) : !1 === e.active ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
        },
        _processPanels: function () {
            var t = this.headers,
                e = this.panels;
            this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)))
        },
        _refresh: function () {
            var e, i = this.options,
                n = i.heightStyle,
                s = this.element.parent();
            this.active = this._findActive(i.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each(function () {
                var e = t(this),
                    i = e.uniqueId().attr("id"),
                    n = e.next(),
                    s = n.uniqueId().attr("id");
                e.attr("aria-controls", s), n.attr("aria-labelledby", i)
            }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }).next().attr({
                "aria-hidden": "true"
            }).hide(), this.active.length ? this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }).next().attr({
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === n ? (e = s.height(), this.element.siblings(":visible").each(function () {
                var i = t(this),
                    n = i.css("position");
                "absolute" !== n && "fixed" !== n && (e -= i.outerHeight(!0))
            }), this.headers.each(function () {
                e -= t(this).outerHeight(!0)
            }), this.headers.next().each(function () {
                t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()))
            }).css("overflow", "auto")) : "auto" === n && (e = 0, this.headers.next().each(function () {
                var i = t(this).is(":visible");
                i || t(this).show(), e = Math.max(e, t(this).css("height", "").height()), i || t(this).hide()
            }).height(e))
        },
        _activate: function (e) {
            var i = this._findActive(e)[0];
            i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }))
        },
        _findActive: function (e) {
            return "number" == typeof e ? this.headers.eq(e) : t()
        },
        _setupEvents: function (e) {
            var i = {
                keydown: "_keydown"
            };
            e && t.each(e.split(" "), function (t, e) {
                i[e] = "_eventHandler"
            }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            }), this._hoverable(this.headers), this._focusable(this.headers)
        },
        _eventHandler: function (e) {
            var i, n, s = this.options,
                o = this.active,
                a = t(e.currentTarget),
                r = a[0] === o[0],
                l = r && s.collapsible,
                c = l ? t() : a.next(),
                h = o.next(),
                u = {
                    oldHeader: o,
                    oldPanel: h,
                    newHeader: l ? t() : a,
                    newPanel: c
                };
            e.preventDefault(), r && !s.collapsible || !1 === this._trigger("beforeActivate", e, u) || (s.active = !l && this.headers.index(a), this.active = r ? t() : a, this._toggle(u), this._removeClass(o, "ui-accordion-header-active", "ui-state-active"), s.icons && (i = o.children(".ui-accordion-header-icon"), this._removeClass(i, null, s.icons.activeHeader)._addClass(i, null, s.icons.header)), r || (this._removeClass(a, "ui-accordion-header-collapsed")._addClass(a, "ui-accordion-header-active", "ui-state-active"), s.icons && (n = a.children(".ui-accordion-header-icon"), this._removeClass(n, null, s.icons.header)._addClass(n, null, s.icons.activeHeader)), this._addClass(a.next(), "ui-accordion-content-active")))
        },
        _toggle: function (e) {
            var i = e.newPanel,
                n = this.prevShow.length ? this.prevShow : e.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = n, this.options.animate ? this._animate(i, n, e) : (n.hide(), i.show(), this._toggleComplete(e)), n.attr({
                "aria-hidden": "true"
            }), n.prev().attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), i.length && n.length ? n.prev().attr({
                tabIndex: -1,
                "aria-expanded": "false"
            }) : i.length && this.headers.filter(function () {
                return 0 === parseInt(t(this).attr("tabIndex"), 10)
            }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _animate: function (t, e, i) {
            var n, s, o, a = this,
                r = 0,
                l = t.css("box-sizing"),
                c = t.length && (!e.length || t.index() < e.index()),
                h = this.options.animate || {},
                u = c && h.down || h,
                d = function () {
                    a._toggleComplete(i)
                };
            return "number" == typeof u && (o = u), "string" == typeof u && (s = u), s = s || u.easing || h.easing, o = o || u.duration || h.duration, e.length ? t.length ? (n = t.show().outerHeight(), e.animate(this.hideProps, {
                duration: o,
                easing: s,
                step: function (t, e) {
                    e.now = Math.round(t)
                }
            }), void t.hide().animate(this.showProps, {
                duration: o,
                easing: s,
                complete: d,
                step: function (t, i) {
                    i.now = Math.round(t), "height" !== i.prop ? "content-box" === l && (r += i.now) : "content" !== a.options.heightStyle && (i.now = Math.round(n - e.outerHeight() - r), r = 0)
                }
            })) : e.animate(this.hideProps, o, s, d) : t.animate(this.showProps, o, s, d)
        },
        _toggleComplete: function (t) {
            var e = t.oldPanel,
                i = e.prev();
            this._removeClass(e, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
        }
    }), t.ui.safeActiveElement = function (t) {
        var e;
        try {
            e = t.activeElement
        } catch (i) {
            e = t.body
        }
        return e || (e = t.body), e.nodeName || (e = t.body), e
    }, t.widget("ui.menu", {
        version: "1.12.1",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-caret-1-e"
            },
            items: "> *",
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function () {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({
                role: this.options.role,
                tabIndex: 0
            }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
                "mousedown .ui-menu-item": function (t) {
                    t.preventDefault()
                },
                "click .ui-menu-item": function (e) {
                    var i = t(e.target),
                        n = t(t.ui.safeActiveElement(this.document[0]));
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && n.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function (e) {
                    if (!this.previousFilter) {
                        var i = t(e.target).closest(".ui-menu-item"),
                            n = t(e.currentTarget);
                        i[0] === n[0] && (this._removeClass(n.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(e, n))
                    }
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function (t, e) {
                    var i = this.active || this.element.find(this.options.items).eq(0);
                    e || this.focus(t, i)
                },
                blur: function (e) {
                    this._delay(function () {
                        !t.contains(this.element[0], t.ui.safeActiveElement(this.document[0])) && this.collapseAll(e)
                    })
                },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function (t) {
                    this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1
                }
            })
        },
        _destroy: function () {
            var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),
                i = e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), i.children().each(function () {
                var e = t(this);
                e.data("ui-menu-submenu-caret") && e.remove()
            })
        },
        _keydown: function (e) {
            var i, n, s, o, a = !0;
            switch (e.keyCode) {
                case t.ui.keyCode.PAGE_UP:
                    this.previousPage(e);
                    break;
                case t.ui.keyCode.PAGE_DOWN:
                    this.nextPage(e);
                    break;
                case t.ui.keyCode.HOME:
                    this._move("first", "first", e);
                    break;
                case t.ui.keyCode.END:
                    this._move("last", "last", e);
                    break;
                case t.ui.keyCode.UP:
                    this.previous(e);
                    break;
                case t.ui.keyCode.DOWN:
                    this.next(e);
                    break;
                case t.ui.keyCode.LEFT:
                    this.collapse(e);
                    break;
                case t.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                    break;
                case t.ui.keyCode.ENTER:
                case t.ui.keyCode.SPACE:
                    this._activate(e);
                    break;
                case t.ui.keyCode.ESCAPE:
                    this.collapse(e);
                    break;
                default:
                    a = !1, n = this.previousFilter || "", o = !1, s = e.keyCode >= 96 && 105 >= e.keyCode ? "" + (e.keyCode - 96) : String.fromCharCode(e.keyCode), clearTimeout(this.filterTimer), s === n ? o = !0 : s = n + s, i = this._filterMenuItems(s), i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i, i.length || (s = String.fromCharCode(e.keyCode), i = this._filterMenuItems(s)), i.length ? (this.focus(e, i), this.previousFilter = s, this.filterTimer = this._delay(function () {
                        delete this.previousFilter
                    }, 1e3)) : delete this.previousFilter
            }
            a && e.preventDefault()
        },
        _activate: function (t) {
            this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
        },
        refresh: function () {
            var e, i, n, s, o, a = this,
                r = this.options.icons.submenu,
                l = this.element.find(this.options.menus);
            this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), n = l.filter(":not(.ui-menu)").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function () {
                var e = t(this),
                    i = e.prev(),
                    n = t("<span>").data("ui-menu-submenu-caret", !0);
                a._addClass(n, "ui-menu-icon", "ui-icon " + r), i.attr("aria-haspopup", "true").prepend(n), e.attr("aria-labelledby", i.attr("id"))
            }), this._addClass(n, "ui-menu", "ui-widget ui-widget-content ui-front"), e = l.add(this.element), i = e.find(this.options.items), i.not(".ui-menu-item").each(function () {
                var e = t(this);
                a._isDivider(e) && a._addClass(e, "ui-menu-divider", "ui-widget-content")
            }), s = i.not(".ui-menu-item, .ui-menu-divider"), o = s.children().not(".ui-menu").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            }), this._addClass(s, "ui-menu-item")._addClass(o, "ui-menu-item-wrapper"), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function () {
            return {
                menu: "menuitem",
                listbox: "option"
            } [this.options.role]
        },
        _setOption: function (t, e) {
            if ("icons" === t) {
                var i = this.element.find(".ui-menu-icon");
                this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu)
            }
            this._super(t, e)
        },
        _setOptionDisabled: function (t) {
            this._super(t), this.element.attr("aria-disabled", t + ""), this._toggleClass(null, "ui-state-disabled", !!t)
        },
        focus: function (t, e) {
            var i, n, s;
            this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), n = this.active.children(".ui-menu-item-wrapper"), this._addClass(n, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", n.attr("id")), s = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function () {
                this._close()
            }, this.delay), i = e.children(".ui-menu"), i.length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
                item: e
            })
        },
        _scrollIntoView: function (e) {
            var i, n, s, o, a, r;
            this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, n = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, s = e.offset().top - this.activeMenu.offset().top - i - n, o = this.activeMenu.scrollTop(), a = this.activeMenu.height(), r = e.outerHeight(), 0 > s ? this.activeMenu.scrollTop(o + s) : s + r > a && this.activeMenu.scrollTop(o + s - a + r))
        },
        blur: function (t, e) {
            e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t, {
                item: this.active
            }), this.active = null)
        },
        _startOpening: function (t) {
            clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function () {
                this._close(), this._open(t)
            }, this.delay))
        },
        _open: function (e) {
            var i = t.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        },
        collapseAll: function (e, i) {
            clearTimeout(this.timer), this.timer = this._delay(function () {
                var n = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                n.length || (n = this.element), this._close(n), this.blur(e), this._removeClass(n.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = n
            }, this.delay)
        },
        _close: function (t) {
            t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
        },
        _closeOnDocumentClick: function (e) {
            return !t(e.target).closest(".ui-menu").length
        },
        _isDivider: function (t) {
            return !/[^\-\u2014\u2013\s]/.test(t.text())
        },
        collapse: function (t) {
            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            e && e.length && (this._close(), this.focus(t, e))
        },
        expand: function (t) {
            var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            e && e.length && (this._open(e.parent()), this._delay(function () {
                this.focus(t, e)
            }))
        },
        next: function (t) {
            this._move("next", "first", t)
        },
        previous: function (t) {
            this._move("prev", "last", t)
        },
        isFirstItem: function () {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function () {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function (t, e, i) {
            var n;
            this.active && (n = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), n && n.length && this.active || (n = this.activeMenu.find(this.options.items)[e]()), this.focus(i, n)
        },
        nextPage: function (e) {
            var i, n, s;
            return this.active ? void(this.isLastItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
                return i = t(this), 0 > i.offset().top - n - s
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(e)
        },
        previousPage: function (e) {
            var i, n, s;
            return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
                return i = t(this), i.offset().top - n + s > 0
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first()))) : void this.next(e)
        },
        _hasScroll: function () {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function (e) {
            this.active = this.active || t(e.target).closest(".ui-menu-item");
            var i = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
        },
        _filterMenuItems: function (e) {
            var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                n = RegExp("^" + i, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function () {
                return n.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))
            })
        }
    }), t.widget("ui.autocomplete", {
        version: "1.12.1",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function () {
            var e, i, n, s = this.element[0].nodeName.toLowerCase(),
                o = "textarea" === s,
                a = "input" === s;
            this.isMultiLine = o || !a && this._isContentEditable(this.element), this.valueMethod = this.element[o || a ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
                keydown: function (s) {
                    if (this.element.prop("readOnly")) return e = !0, n = !0, void(i = !0);
                    e = !1, n = !1, i = !1;
                    var o = t.ui.keyCode;
                    switch (s.keyCode) {
                        case o.PAGE_UP:
                            e = !0, this._move("previousPage", s);
                            break;
                        case o.PAGE_DOWN:
                            e = !0, this._move("nextPage", s);
                            break;
                        case o.UP:
                            e = !0, this._keyEvent("previous", s);
                            break;
                        case o.DOWN:
                            e = !0, this._keyEvent("next", s);
                            break;
                        case o.ENTER:
                            this.menu.active && (e = !0, s.preventDefault(), this.menu.select(s));
                            break;
                        case o.TAB:
                            this.menu.active && this.menu.select(s);
                            break;
                        case o.ESCAPE:
                            this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(s), s.preventDefault());
                            break;
                        default:
                            i = !0, this._searchTimeout(s)
                    }
                },
                keypress: function (n) {
                    if (e) return e = !1, void((!this.isMultiLine || this.menu.element.is(":visible")) && n.preventDefault());
                    if (!i) {
                        var s = t.ui.keyCode;
                        switch (n.keyCode) {
                            case s.PAGE_UP:
                                this._move("previousPage", n);
                                break;
                            case s.PAGE_DOWN:
                                this._move("nextPage", n);
                                break;
                            case s.UP:
                                this._keyEvent("previous", n);
                                break;
                            case s.DOWN:
                                this._keyEvent("next", n)
                        }
                    }
                },
                input: function (t) {
                    return n ? (n = !1, void t.preventDefault()) : void this._searchTimeout(t)
                },
                focus: function () {
                    this.selectedItem = null, this.previous = this._value()
                },
                blur: function (t) {
                    return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), void this._change(t))
                }
            }), this._initSource(), this.menu = t("<ul>").appendTo(this._appendTo()).menu({
                role: null
            }).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
                mousedown: function (e) {
                    e.preventDefault(), this.cancelBlur = !0, this._delay(function () {
                        delete this.cancelBlur, this.element[0] !== t.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
                    })
                },
                menufocus: function (e, i) {
                    var n, s;
                    return this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(), void this.document.one("mousemove", function () {
                        t(e.target).trigger(e.originalEvent)
                    })) : (s = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, {
                        item: s
                    }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(s.value), void((n = i.item.attr("aria-label") || s.value) && t.trim(n).length && (this.liveRegion.children().hide(), t("<div>").text(n).appendTo(this.liveRegion))))
                },
                menuselect: function (e, i) {
                    var n = i.item.data("ui-autocomplete-item"),
                        s = this.previous;
                    this.element[0] !== t.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = s, this._delay(function () {
                        this.previous = s, this.selectedItem = n
                    })), !1 !== this._trigger("select", e, {
                        item: n
                    }) && this._value(n.value), this.term = this._value(), this.close(e), this.selectedItem = n
                }
            }), this.liveRegion = t("<div>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, {
                beforeunload: function () {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function () {
            clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
        },
        _setOption: function (t, e) {
            this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
        },
        _isEventTargetInWidget: function (e) {
            var i = this.menu.element[0];
            return e.target === this.element[0] || e.target === i || t.contains(i, e.target)
        },
        _closeOnClickOutside: function (t) {
            this._isEventTargetInWidget(t) || this.close()
        },
        _appendTo: function () {
            var e = this.options.appendTo;
            return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e
        },
        _initSource: function () {
            var e, i, n = this;
            t.isArray(this.options.source) ? (e = this.options.source, this.source = function (i, n) {
                n(t.ui.autocomplete.filter(e, i.term))
            }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (e, s) {
                n.xhr && n.xhr.abort(), n.xhr = t.ajax({
                    url: i,
                    data: e,
                    dataType: "json",
                    success: function (t) {
                        s(t)
                    },
                    error: function () {
                        s([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function (t) {
            clearTimeout(this.searching), this.searching = this._delay(function () {
                var e = this.term === this._value(),
                    i = this.menu.element.is(":visible"),
                    n = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                (!e || e && !i && !n) && (this.selectedItem = null, this.search(null, t))
            }, this.options.delay)
        },
        search: function (t, e) {
            return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : !1 !== this._trigger("search", e) ? this._search(t) : void 0
        },
        _search: function (t) {
            this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                term: t
            }, this._response())
        },
        _response: function () {
            var e = ++this.requestIndex;
            return t.proxy(function (t) {
                e === this.requestIndex && this.__response(t), --this.pending || this._removeClass("ui-autocomplete-loading")
            }, this)
        },
        __response: function (t) {
            t && (t = this._normalize(t)), this._trigger("response", null, {
                content: t
            }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
        },
        close: function (t) {
            this.cancelSearch = !0, this._close(t)
        },
        _close: function (t) {
            this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
        },
        _change: function (t) {
            this.previous !== this._value() && this._trigger("change", t, {
                item: this.selectedItem
            })
        },
        _normalize: function (e) {
            return e.length && e[0].label && e[0].value ? e : t.map(e, function (e) {
                return "string" == typeof e ? {
                    label: e,
                    value: e
                } : t.extend({}, e, {
                    label: e.label || e.value,
                    value: e.value || e.label
                })
            })
        },
        _suggest: function (e) {
            var i = this.menu.element.empty();
            this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({
                of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {
                mousedown: "_closeOnClickOutside"
            })
        },
        _resizeMenu: function () {
            var t = this.menu.element;
            t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function (e, i) {
            var n = this;
            t.each(i, function (t, i) {
                n._renderItemData(e, i)
            })
        },
        _renderItemData: function (t, e) {
            return this._renderItem(t, e).data("ui-autocomplete-item", e)
        },
        _renderItem: function (e, i) {
            return t("<li>").append(t("<div>").text(i.label)).appendTo(e)
        },
        _move: function (t, e) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e)
        },
        widget: function () {
            return this.menu.element
        },
        _value: function () {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function (t, e) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
        },
        _isContentEditable: function (t) {
            if (!t.length) return !1;
            var e = t.prop("contentEditable");
            return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e
        }
    }), t.extend(t.ui.autocomplete, {
        escapeRegex: function (t) {
            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function (e, i) {
            var n = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
            return t.grep(e, function (t) {
                return n.test(t.label || t.value || t)
            })
        }
    }), t.widget("ui.autocomplete", t.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function (t) {
                    return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function (e) {
            var i;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion))
        }
    }), t.ui.autocomplete;
    var f = /ui-corner-([a-z]){2,6}/g;
    t.widget("ui.controlgroup", {
        version: "1.12.1",
        defaultElement: "<div>",
        options: {
            direction: "horizontal",
            disabled: null,
            onlyVisible: !0,
            items: {
                button: "input[type=button], input[type=submit], input[type=reset], button, a",
                controlgroupLabel: ".ui-controlgroup-label",
                checkboxradio: "input[type='checkbox'], input[type='radio']",
                selectmenu: "select",
                spinner: ".ui-spinner-input"
            }
        },
        _create: function () {
            this._enhance()
        },
        _enhance: function () {
            this.element.attr("role", "toolbar"), this.refresh()
        },
        _destroy: function () {
            this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
        },
        _initWidgets: function () {
            var e = this,
                i = [];
            t.each(this.options.items, function (n, s) {
                var o, a = {};
                return s ? "controlgroupLabel" === n ? (o = e.element.find(s), o.each(function () {
                    var e = t(this);
                    e.children(".ui-controlgroup-label-contents").length || e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
                }), e._addClass(o, null, "ui-widget ui-widget-content ui-state-default"), void(i = i.concat(o.get()))) : void(t.fn[n] && (a = e["_" + n + "Options"] ? e["_" + n + "Options"]("middle") : {
                    classes: {}
                }, e.element.find(s).each(function () {
                    var s = t(this),
                        o = s[n]("instance"),
                        r = t.widget.extend({}, a);
                    if ("button" !== n || !s.parent(".ui-spinner").length) {
                        o || (o = s[n]()[n]("instance")), o && (r.classes = e._resolveClassesValues(r.classes, o)), s[n](r);
                        var l = s[n]("widget");
                        t.data(l[0], "ui-controlgroup-data", o || s[n]("instance")), i.push(l[0])
                    }
                }))) : void 0
            }), this.childWidgets = t(t.unique(i)), this._addClass(this.childWidgets, "ui-controlgroup-item")
        },
        _callChildMethod: function (e) {
            this.childWidgets.each(function () {
                var i = t(this),
                    n = i.data("ui-controlgroup-data");
                n && n[e] && n[e]()
            })
        },
        _updateCornerClass: function (t, e) {
            var i = this._buildSimpleOptions(e, "label").classes.label;
            this._removeClass(t, null, "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"), this._addClass(t, null, i)
        },
        _buildSimpleOptions: function (t, e) {
            var i = "vertical" === this.options.direction,
                n = {
                    classes: {}
                };
            return n.classes[e] = {
                middle: "",
                first: "ui-corner-" + (i ? "top" : "left"),
                last: "ui-corner-" + (i ? "bottom" : "right"),
                only: "ui-corner-all"
            } [t], n
        },
        _spinnerOptions: function (t) {
            var e = this._buildSimpleOptions(t, "ui-spinner");
            return e.classes["ui-spinner-up"] = "", e.classes["ui-spinner-down"] = "", e
        },
        _buttonOptions: function (t) {
            return this._buildSimpleOptions(t, "ui-button")
        },
        _checkboxradioOptions: function (t) {
            return this._buildSimpleOptions(t, "ui-checkboxradio-label")
        },
        _selectmenuOptions: function (t) {
            var e = "vertical" === this.options.direction;
            return {
                width: !!e && "auto",
                classes: {
                    middle: {
                        "ui-selectmenu-button-open": "",
                        "ui-selectmenu-button-closed": ""
                    },
                    first: {
                        "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
                        "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left")
                    },
                    last: {
                        "ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
                        "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right")
                    },
                    only: {
                        "ui-selectmenu-button-open": "ui-corner-top",
                        "ui-selectmenu-button-closed": "ui-corner-all"
                    }
                } [t]
            }
        },
        _resolveClassesValues: function (e, i) {
            var n = {};
            return t.each(e, function (s) {
                var o = i.options.classes[s] || "";
                o = t.trim(o.replace(f, "")), n[s] = (o + " " + e[s]).replace(/\s+/g, " ")
            }), n
        },
        _setOption: function (t, e) {
            return "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(t, e), "disabled" === t ? void this._callChildMethod(e ? "disable" : "enable") : void this.refresh()
        },
        refresh: function () {
            var e, i = this;
            this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), e = this.childWidgets, this.options.onlyVisible && (e = e.filter(":visible")), e.length && (t.each(["first", "last"], function (t, n) {
                var s = e[n]().data("ui-controlgroup-data");
                if (s && i["_" + s.widgetName + "Options"]) {
                    var o = i["_" + s.widgetName + "Options"](1 === e.length ? "only" : n);
                    o.classes = i._resolveClassesValues(o.classes, s), s.element[s.widgetName](o)
                } else i._updateCornerClass(e[n](), n)
            }), this._callChildMethod("refresh"))
        }
    }), t.widget("ui.checkboxradio", [t.ui.formResetMixin, {
        version: "1.12.1",
        options: {
            disabled: null,
            label: null,
            icon: !0,
            classes: {
                "ui-checkboxradio-label": "ui-corner-all",
                "ui-checkboxradio-icon": "ui-corner-all"
            }
        },
        _getCreateOptions: function () {
            var e, i, n = this,
                s = this._super() || {};
            return this._readType(), i = this.element.labels(), this.label = t(i[i.length - 1]), this.label.length || t.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element[0]).each(function () {
                n.originalLabel += 3 === this.nodeType ? t(this).text() : this.outerHTML
            }), this.originalLabel && (s.label = this.originalLabel), e = this.element[0].disabled, null != e && (s.disabled = e), s
        },
        _create: function () {
            var t = this.element[0].checked;
            this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({
                change: "_toggleClasses",
                focus: function () {
                    this._addClass(this.label, null, "ui-state-focus ui-visual-focus")
                },
                blur: function () {
                    this._removeClass(this.label, null, "ui-state-focus ui-visual-focus")
                }
            })
        },
        _readType: function () {
            var e = this.element[0].nodeName.toLowerCase();
            this.type = this.element[0].type, "input" === e && /radio|checkbox/.test(this.type) || t.error("Can't create checkboxradio on element.nodeName=" + e + " and element.type=" + this.type)
        },
        _enhance: function () {
            this._updateIcon(this.element[0].checked)
        },
        widget: function () {
            return this.label
        },
        _getRadioGroup: function () {
            var e, i = this.element[0].name,
                n = "input[name='" + t.ui.escapeSelector(i) + "']";
            return i ? (e = this.form.length ? t(this.form[0].elements).filter(n) : t(n).filter(function () {
                return 0 === t(this).form().length
            }), e.not(this.element)) : t([])
        },
        _toggleClasses: function () {
            var e = this.element[0].checked;
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", e)._toggleClass(this.icon, null, "ui-icon-blank", !e), "radio" === this.type && this._getRadioGroup().each(function () {
                var e = t(this).checkboxradio("instance");
                e && e._removeClass(e.label, "ui-checkboxradio-checked", "ui-state-active")
            })
        },
        _destroy: function () {
            this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove())
        },
        _setOption: function (t, e) {
            return "label" !== t || e ? (this._super(t, e), "disabled" === t ? (this._toggleClass(this.label, null, "ui-state-disabled", e), void(this.element[0].disabled = e)) : void this.refresh()) : void 0
        },
        _updateIcon: function (e) {
            var i = "ui-icon ui-icon-background ";
            this.options.icon ? (this.icon || (this.icon = t("<span>"), this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (i += e ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, e ? "ui-icon-blank" : "ui-icon-check")) : i += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", i), e || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon)
        },
        _updateLabel: function () {
            var t = this.label.contents().not(this.element[0]);
            this.icon && (t = t.not(this.icon[0])), this.iconSpace && (t = t.not(this.iconSpace[0])), t.remove(), this.label.append(this.options.label)
        },
        refresh: function () {
            var t = this.element[0].checked,
                e = this.element[0].disabled;
            this._updateIcon(t), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), null !== this.options.label && this._updateLabel(), e !== this.options.disabled && this._setOptions({
                disabled: e
            })
        }
    }]), t.ui.checkboxradio, t.widget("ui.button", {
        version: "1.12.1",
        defaultElement: "<button>",
        options: {
            classes: {
                "ui-button": "ui-corner-all"
            },
            disabled: null,
            icon: null,
            iconPosition: "beginning",
            label: null,
            showLabel: !0
        },
        _getCreateOptions: function () {
            var t, e = this._super() || {};
            return this.isInput = this.element.is("input"), t = this.element[0].disabled, null != t && (e.disabled = t), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (e.label = this.originalLabel), e
        },
        _create: function () {
            !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({
                keyup: function (e) {
                    e.keyCode === t.ui.keyCode.SPACE && (e.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"))
                }
            })
        },
        _enhance: function () {
            this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip())
        },
        _updateTooltip: function () {
            this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label)
        },
        _updateIcon: function (e, i) {
            var n = "iconPosition" !== e,
                s = n ? this.options.iconPosition : i,
                o = "top" === s || "bottom" === s;
            this.icon ? n && this._removeClass(this.icon, null, this.options.icon) : (this.icon = t("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), n && this._addClass(this.icon, null, i), this._attachIcon(s), o ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(s))
        },
        _destroy: function () {
            this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title")
        },
        _attachIconSpace: function (t) {
            this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace)
        },
        _attachIcon: function (t) {
            this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon)
        },
        _setOptions: function (t) {
            var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel,
                i = void 0 === t.icon ? this.options.icon : t.icon;
            e || i || (t.showLabel = !0), this._super(t)
        },
        _setOption: function (t, e) {
            "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === t && this._updateIcon(t, e), "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()), "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(t, e), "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), this.element[0].disabled = e, e && this.element.blur())
        },
        refresh: function () {
            var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOptions({
                disabled: t
            }), this._updateTooltip()
        }
    }), !1 !== t.uiBackCompat && (t.widget("ui.button", t.ui.button, {
        options: {
            text: !0,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function () {
            this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super()
        },
        _setOption: function (t, e) {
            return "text" === t ? void this._super("showLabel", e) : ("showLabel" === t && (this.options.text = e), "icon" === t && (this.options.icons.primary = e), "icons" === t && (e.primary ? (this._super("icon", e.primary), this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), this._super("iconPosition", "end"))), void this._superApply(arguments))
        }
    }), t.fn.button = function (e) {
        return function () {
            return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? e.apply(this, arguments) : (t.ui.checkboxradio || t.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({
                icon: !1
            }) : this.checkboxradio.apply(this, arguments))
        }
    }(t.fn.button), t.fn.buttonset = function () {
        return t.ui.controlgroup || t.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = {
            button: arguments[0].items
        }), this.controlgroup.apply(this, arguments))
    }), t.ui.button, t.extend(t.ui, {
        datepicker: {
            version: "1.12.1"
        }
    });
    var m;
    t.extend(n.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function () {
            return this.dpDiv
        },
        setDefaults: function (t) {
            return a(this._defaults, t || {}), this
        },
        _attachDatepicker: function (e, i) {
            var n, s, o;
            n = e.nodeName.toLowerCase(), s = "div" === n || "span" === n, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), o = this._newInst(t(e), s), o.settings = t.extend({}, i || {}), "input" === n ? this._connectDatepicker(e, o) : s && this._inlineDatepicker(e, o)
        },
        _newInst: function (e, i) {
            return {
                id: e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                input: e,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: i ? s(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function (e, i) {
            var n = t(e);
            i.append = t([]), i.trigger = t([]), n.hasClass(this.markerClassName) || (this._attachments(n, i), n.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e))
        },
        _attachments: function (e, i) {
            var n, s, o, a = this._get(i, "appendText"),
                r = this._get(i, "isRTL");
            i.append && i.append.remove(), a && (i.append = t("<span class='" + this._appendClass + "'>" + a + "</span>"), e[r ? "before" : "after"](i.append)), e.off("focus", this._showDatepicker), i.trigger && i.trigger.remove(), n = this._get(i, "showOn"), ("focus" === n || "both" === n) && e.on("focus", this._showDatepicker), ("button" === n || "both" === n) && (s = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
                src: o,
                alt: s,
                title: s
            }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({
                src: o,
                alt: s,
                title: s
            }) : s)), e[r ? "before" : "after"](i.trigger), i.trigger.on("click", function () {
                return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1
            }))
        },
        _autoSize: function (t) {
            if (this._get(t, "autoSize") && !t.inline) {
                var e, i, n, s, o = new Date(2009, 11, 20),
                    a = this._get(t, "dateFormat");
                a.match(/[DM]/) && (e = function (t) {
                    for (i = 0, n = 0, s = 0; t.length > s; s++) t[s].length > i && (i = t[s].length, n = s);
                    return n
                }, o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length)
            }
        },
        _inlineDatepicker: function (e, i) {
            var n = t(e);
            n.hasClass(this.markerClassName) || (n.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function (e, i, n, s, o) {
            var r, l, c, h, u, d = this._dialogInst;
            return d || (this.uuid += 1, r = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), t("body").append(this._dialogInput), d = this._dialogInst = this._newInst(this._dialogInput, !1), d.settings = {}, t.data(this._dialogInput[0], "datepicker", d)), a(d.settings, s || {}), i = i && i.constructor === Date ? this._formatDate(d, i) : i, this._dialogInput.val(i), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (l = document.documentElement.clientWidth, c = document.documentElement.clientHeight, h = document.documentElement.scrollLeft || document.body.scrollLeft, u = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + h, c / 2 - 150 + u]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), d.settings.onSelect = n, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], "datepicker", d), this
        },
        _destroyDatepicker: function (e) {
            var i, n = t(e),
                s = t.data(e, "datepicker");
            n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === i ? (s.append.remove(), s.trigger.remove(), n.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && n.removeClass(this.markerClassName).empty(), m === s && (m = null))
        },
        _enableDatepicker: function (e) {
            var i, n, s = t(e),
                o = t.data(e, "datepicker");
            s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, o.trigger.filter("button").each(function () {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === i || "span" === i) && (n = s.children("." + this._inlineClass), n.children().removeClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
                return t === e ? null : t
            }))
        },
        _disableDatepicker: function (e) {
            var i, n, s = t(e),
                o = t.data(e, "datepicker");
            s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, o.trigger.filter("button").each(function () {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === i || "span" === i) && (n = s.children("." + this._inlineClass), n.children().addClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
                return t === e ? null : t
            }), this._disabledInputs[this._disabledInputs.length] = e)
        },
        _isDisabledDatepicker: function (t) {
            if (!t) return !1;
            for (var e = 0; this._disabledInputs.length > e; e++)
                if (this._disabledInputs[e] === t) return !0;
            return !1
        },
        _getInst: function (e) {
            try {
                return t.data(e, "datepicker")
            } catch (t) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function (e, i, n) {
            var s, o, r, l, c = this._getInst(e);
            return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend({}, t.datepicker._defaults) : c ? "all" === i ? t.extend({}, c.settings) : this._get(c, i) : null : (s = i || {}, "string" == typeof i && (s = {}, s[i] = n), void(c && (this._curInst === c && this._hideDatepicker(), o = this._getDateDatepicker(e, !0), r = this._getMinMaxDate(c, "min"), l = this._getMinMaxDate(c, "max"), a(c.settings, s), null !== r && void 0 !== s.dateFormat && void 0 === s.minDate && (c.settings.minDate = this._formatDate(c, r)), null !== l && void 0 !== s.dateFormat && void 0 === s.maxDate && (c.settings.maxDate = this._formatDate(c, l)), "disabled" in s && (s.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), c), this._autoSize(c), this._setDate(c, o), this._updateAlternate(c), this._updateDatepicker(c))))
        },
        _changeDatepicker: function (t, e, i) {
            this._optionDatepicker(t, e, i)
        },
        _refreshDatepicker: function (t) {
            var e = this._getInst(t);
            e && this._updateDatepicker(e)
        },
        _setDateDatepicker: function (t, e) {
            var i = this._getInst(t);
            i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
        },
        _getDateDatepicker: function (t, e) {
            var i = this._getInst(t);
            return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
        },
        _doKeyDown: function (e) {
            var i, n, s, o = t.datepicker._getInst(e.target),
                a = !0,
                r = o.dpDiv.is(".ui-datepicker-rtl");
            if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
                case 9:
                    t.datepicker._hideDatepicker(), a = !1;
                    break;
                case 13:
                    return s = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv), s[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, s[0]), i = t.datepicker._get(o, "onSelect"), i ? (n = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [n, o])) : t.datepicker._hideDatepicker(), !1;
                case 27:
                    t.datepicker._hideDatepicker();
                    break;
                case 33:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 34:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 35:
                    (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), a = e.ctrlKey || e.metaKey;
                    break;
                case 36:
                    (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), a = e.ctrlKey || e.metaKey;
                    break;
                case 37:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 38:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), a = e.ctrlKey || e.metaKey;
                    break;
                case 39:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 40:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), a = e.ctrlKey || e.metaKey;
                    break;
                default:
                    a = !1
            } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : a = !1;
            a && (e.preventDefault(), e.stopPropagation())
        },
        _doKeyPress: function (e) {
            var i, n, s = t.datepicker._getInst(e.target);
            return t.datepicker._get(s, "constrainInput") ? (i = t.datepicker._possibleChars(t.datepicker._get(s, "dateFormat")), n = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || " " > n || !i || i.indexOf(n) > -1) : void 0
        },
        _doKeyUp: function (e) {
            var i = t.datepicker._getInst(e.target);
            if (i.input.val() !== i.lastVal) try {
                t.datepicker.parseDate(t.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, t.datepicker._getFormatConfig(i)) && (t.datepicker._setDateFromField(i), t.datepicker._updateAlternate(i), t.datepicker._updateDatepicker(i))
            } catch (t) {}
            return !0
        },
        _showDatepicker: function (e) {
            if (e = e.target || e, "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) {
                var n, s, o, r, l, c, h;
                n = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== n && (t.datepicker._curInst.dpDiv.stop(!0, !0), n && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), s = t.datepicker._get(n, "beforeShow"), !1 !== (o = s ? s.apply(e, [e, n]) : {}) && (a(n.settings, o), n.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(n), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), r = !1, t(e).parents().each(function () {
                    return !(r |= "fixed" === t(this).css("position"))
                }), l = {
                    left: t.datepicker._pos[0],
                    top: t.datepicker._pos[1]
                }, t.datepicker._pos = null, n.dpDiv.empty(), n.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), t.datepicker._updateDatepicker(n), l = t.datepicker._checkOffset(n, l, r), n.dpDiv.css({
                    position: t.datepicker._inDialog && t.blockUI ? "static" : r ? "fixed" : "absolute",
                    display: "none",
                    left: l.left + "px",
                    top: l.top + "px"
                }), n.inline || (c = t.datepicker._get(n, "showAnim"), h = t.datepicker._get(n, "duration"), n.dpDiv.css("z-index", i(t(e)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[c] ? n.dpDiv.show(c, t.datepicker._get(n, "showOptions"), h) : n.dpDiv[c || "show"](c ? h : null), t.datepicker._shouldFocusInput(n) && n.input.trigger("focus"), t.datepicker._curInst = n))
            }
        },
        _updateDatepicker: function (e) {
            this.maxRows = 4, m = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
            var i, n = this._getNumberOfMonths(e),
                s = n[1],
                a = e.dpDiv.find("." + this._dayOverClass + " a");
            a.length > 0 && o.apply(a.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), s > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", 17 * s + "em"), e.dpDiv[(1 !== n[0] || 1 !== n[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.trigger("focus"), e.yearshtml && (i = e.yearshtml, setTimeout(function () {
                i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function (t) {
            return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
        },
        _checkOffset: function (e, i, n) {
            var s = e.dpDiv.outerWidth(),
                o = e.dpDiv.outerHeight(),
                a = e.input ? e.input.outerWidth() : 0,
                r = e.input ? e.input.outerHeight() : 0,
                l = document.documentElement.clientWidth + (n ? 0 : t(document).scrollLeft()),
                c = document.documentElement.clientHeight + (n ? 0 : t(document).scrollTop());
            return i.left -= this._get(e, "isRTL") ? s - a : 0, i.left -= n && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= n && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + s > l && l > s ? Math.abs(i.left + s - l) : 0), i.top -= Math.min(i.top, i.top + o > c && c > o ? Math.abs(o + r) : 0), i
        },
        _findPos: function (e) {
            for (var i, n = this._getInst(e), s = this._get(n, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[s ? "previousSibling" : "nextSibling"];
            return i = t(e).offset(), [i.left, i.top]
        },
        _hideDatepicker: function (e) {
            var i, n, s, o, a = this._curInst;
            !a || e && a !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(a, "showAnim"), n = this._get(a, "duration"), s = function () {
                t.datepicker._tidyDialog(a)
            }, t.effects && (t.effects.effect[i] || t.effects[i]) ? a.dpDiv.hide(i, t.datepicker._get(a, "showOptions"), n, s) : a.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? n : null, s), i || s(), this._datepickerShowing = !1, o = this._get(a, "onClose"), o && o.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function (t) {
            t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
        },
        _checkExternalClick: function (e) {
            if (t.datepicker._curInst) {
                var i = t(e.target),
                    n = t.datepicker._getInst(i[0]);
                (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== n) && t.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function (e, i, n) {
            var s = t(e),
                o = this._getInst(s[0]);
            this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(o, i + ("M" === n ? this._get(o, "showCurrentAtPos") : 0), n), this._updateDatepicker(o))
        },
        _gotoToday: function (e) {
            var i, n = t(e),
                s = this._getInst(n[0]);
            this._get(s, "gotoCurrent") && s.currentDay ? (s.selectedDay = s.currentDay, s.drawMonth = s.selectedMonth = s.currentMonth, s.drawYear = s.selectedYear = s.currentYear) : (i = new Date, s.selectedDay = i.getDate(), s.drawMonth = s.selectedMonth = i.getMonth(), s.drawYear = s.selectedYear = i.getFullYear()), this._notifyChange(s), this._adjustDate(n)
        },
        _selectMonthYear: function (e, i, n) {
            var s = t(e),
                o = this._getInst(s[0]);
            o["selected" + ("M" === n ? "Month" : "Year")] = o["draw" + ("M" === n ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(s)
        },
        _selectDay: function (e, i, n, s) {
            var o, a = t(e);
            t(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0]) || (o = this._getInst(a[0]), o.selectedDay = o.currentDay = t("a", s).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = n, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)))
        },
        _clearDate: function (e) {
            var i = t(e);
            this._selectDate(i, "")
        },
        _selectDate: function (e, i) {
            var n, s = t(e),
                o = this._getInst(s[0]);
            i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), n = this._get(o, "onSelect"), n ? n.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != typeof o.input[0] && o.input.trigger("focus"), this._lastInput = null)
        },
        _updateAlternate: function (e) {
            var i, n, s, o = this._get(e, "altField");
            o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), n = this._getDate(e), s = this.formatDate(i, n, this._getFormatConfig(e)), t(o).val(s))
        },
        noWeekends: function (t) {
            var e = t.getDay();
            return [e > 0 && 6 > e, ""]
        },
        iso8601Week: function (t) {
            var e, i = new Date(t.getTime());
            return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
        },
        parseDate: function (e, i, n) {
            if (null == e || null == i) throw "Invalid arguments";
            if ("" === (i = "object" == typeof i ? "" + i : i + "")) return null;
            var s, o, a, r, l = 0,
                c = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                h = "string" != typeof c ? c : (new Date).getFullYear() % 100 + parseInt(c, 10),
                u = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                d = (n ? n.dayNames : null) || this._defaults.dayNames,
                p = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                f = (n ? n.monthNames : null) || this._defaults.monthNames,
                m = -1,
                g = -1,
                b = -1,
                v = -1,
                _ = !1,
                y = function (t) {
                    var i = e.length > s + 1 && e.charAt(s + 1) === t;
                    return i && s++, i
                },
                w = function (t) {
                    var e = y(t),
                        n = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
                        s = "y" === t ? n : 1,
                        o = RegExp("^\\d{" + s + "," + n + "}"),
                        a = i.substring(l).match(o);
                    if (!a) throw "Missing number at position " + l;
                    return l += a[0].length, parseInt(a[0], 10)
                },
                x = function (e, n, s) {
                    var o = -1,
                        a = t.map(y(e) ? s : n, function (t, e) {
                            return [
                                [e, t]
                            ]
                        }).sort(function (t, e) {
                            return -(t[1].length - e[1].length)
                        });
                    if (t.each(a, function (t, e) {
                            var n = e[1];
                            return i.substr(l, n.length).toLowerCase() === n.toLowerCase() ? (o = e[0], l += n.length, !1) : void 0
                        }), -1 !== o) return o + 1;
                    throw "Unknown name at position " + l
                },
                k = function () {
                    if (i.charAt(l) !== e.charAt(s)) throw "Unexpected literal at position " + l;
                    l++
                };
            for (s = 0; e.length > s; s++)
                if (_) "'" !== e.charAt(s) || y("'") ? k() : _ = !1;
                else switch (e.charAt(s)) {
                    case "d":
                        b = w("d");
                        break;
                    case "D":
                        x("D", u, d);
                        break;
                    case "o":
                        v = w("o");
                        break;
                    case "m":
                        g = w("m");
                        break;
                    case "M":
                        g = x("M", p, f);
                        break;
                    case "y":
                        m = w("y");
                        break;
                    case "@":
                        r = new Date(w("@")), m = r.getFullYear(), g = r.getMonth() + 1, b = r.getDate();
                        break;
                    case "!":
                        r = new Date((w("!") - this._ticksTo1970) / 1e4), m = r.getFullYear(), g = r.getMonth() + 1, b = r.getDate();
                        break;
                    case "'":
                        y("'") ? k() : _ = !0;
                        break;
                    default:
                        k()
                }
            if (i.length > l && (a = i.substr(l), !/^\s+/.test(a))) throw "Extra/unparsed characters found in date: " + a;
            if (-1 === m ? m = (new Date).getFullYear() : 100 > m && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (h >= m ? 0 : -100)), v > -1)
                for (g = 1, b = v; !((o = this._getDaysInMonth(m, g - 1)) >= b);) g++, b -= o;
            if (r = this._daylightSavingAdjust(new Date(m, g - 1, b)), r.getFullYear() !== m || r.getMonth() + 1 !== g || r.getDate() !== b) throw "Invalid date";
            return r
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function (t, e, i) {
            if (!e) return "";
            var n, s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                o = (i ? i.dayNames : null) || this._defaults.dayNames,
                a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                r = (i ? i.monthNames : null) || this._defaults.monthNames,
                l = function (e) {
                    var i = t.length > n + 1 && t.charAt(n + 1) === e;
                    return i && n++, i
                },
                c = function (t, e, i) {
                    var n = "" + e;
                    if (l(t))
                        for (; i > n.length;) n = "0" + n;
                    return n
                },
                h = function (t, e, i, n) {
                    return l(t) ? n[e] : i[e]
                },
                u = "",
                d = !1;
            if (e)
                for (n = 0; t.length > n; n++)
                    if (d) "'" !== t.charAt(n) || l("'") ? u += t.charAt(n) : d = !1;
                    else switch (t.charAt(n)) {
                        case "d":
                            u += c("d", e.getDate(), 2);
                            break;
                        case "D":
                            u += h("D", e.getDay(), s, o);
                            break;
                        case "o":
                            u += c("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            u += c("m", e.getMonth() + 1, 2);
                            break;
                        case "M":
                            u += h("M", e.getMonth(), a, r);
                            break;
                        case "y":
                            u += l("y") ? e.getFullYear() : (10 > e.getFullYear() % 100 ? "0" : "") + e.getFullYear() % 100;
                            break;
                        case "@":
                            u += e.getTime();
                            break;
                        case "!":
                            u += 1e4 * e.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            l("'") ? u += "'" : d = !0;
                            break;
                        default:
                            u += t.charAt(n)
                    }
            return u
        },
        _possibleChars: function (t) {
            var e, i = "",
                n = !1,
                s = function (i) {
                    var n = t.length > e + 1 && t.charAt(e + 1) === i;
                    return n && e++, n
                };
            for (e = 0; t.length > e; e++)
                if (n) "'" !== t.charAt(e) || s("'") ? i += t.charAt(e) : n = !1;
                else switch (t.charAt(e)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        s("'") ? i += "'" : n = !0;
                        break;
                    default:
                        i += t.charAt(e)
                }
            return i
        },
        _get: function (t, e) {
            return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
        },
        _setDateFromField: function (t, e) {
            if (t.input.val() !== t.lastVal) {
                var i = this._get(t, "dateFormat"),
                    n = t.lastVal = t.input ? t.input.val() : null,
                    s = this._getDefaultDate(t),
                    o = s,
                    a = this._getFormatConfig(t);
                try {
                    o = this.parseDate(i, n, a) || s
                } catch (t) {
                    n = e ? "" : n
                }
                t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = n ? o.getDate() : 0, t.currentMonth = n ? o.getMonth() : 0, t.currentYear = n ? o.getFullYear() : 0, this._adjustInstDate(t)
            }
        },
        _getDefaultDate: function (t) {
            return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
        },
        _determineDate: function (e, i, n) {
            var s = null == i || "" === i ? n : "string" == typeof i ? function (i) {
                try {
                    return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
                } catch (t) {}
                for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, s = n.getFullYear(), o = n.getMonth(), a = n.getDate(), r = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = r.exec(i); l;) {
                    switch (l[2] || "d") {
                        case "d":
                        case "D":
                            a += parseInt(l[1], 10);
                            break;
                        case "w":
                        case "W":
                            a += 7 * parseInt(l[1], 10);
                            break;
                        case "m":
                        case "M":
                            o += parseInt(l[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(s, o));
                            break;
                        case "y":
                        case "Y":
                            s += parseInt(l[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(s, o))
                    }
                    l = r.exec(i)
                }
                return new Date(s, o, a)
            }(i) : "number" == typeof i ? isNaN(i) ? n : function (t) {
                var e = new Date;
                return e.setDate(e.getDate() + t), e
            }(i) : new Date(i.getTime());
            return s = s && "Invalid Date" == "" + s ? n : s, s && (s.setHours(0), s.setMinutes(0), s.setSeconds(0), s.setMilliseconds(0)), this._daylightSavingAdjust(s)
        },
        _daylightSavingAdjust: function (t) {
            return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
        },
        _setDate: function (t, e, i) {
            var n = !e,
                s = t.selectedMonth,
                o = t.selectedYear,
                a = this._restrictMinMax(t, this._determineDate(t, e, new Date));
            t.selectedDay = t.currentDay = a.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(), t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(), s === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(n ? "" : this._formatDate(t))
        },
        _getDate: function (t) {
            return !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay))
        },
        _attachHandlers: function (e) {
            var i = this._get(e, "stepMonths"),
                n = "#" + e.id.replace(/\\\\/g, "\\");
            e.dpDiv.find("[data-handler]").map(function () {
                var e = {
                    prev: function () {
                        t.datepicker._adjustDate(n, -i, "M")
                    },
                    next: function () {
                        t.datepicker._adjustDate(n, +i, "M")
                    },
                    hide: function () {
                        t.datepicker._hideDatepicker()
                    },
                    today: function () {
                        t.datepicker._gotoToday(n)
                    },
                    selectDay: function () {
                        return t.datepicker._selectDay(n, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    },
                    selectMonth: function () {
                        return t.datepicker._selectMonthYear(n, this, "M"), !1
                    },
                    selectYear: function () {
                        return t.datepicker._selectMonthYear(n, this, "Y"), !1
                    }
                };
                t(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function (t) {
            var e, i, n, s, o, a, r, l, c, h, u, d, p, f, m, g, b, v, _, y, w, x, k, C, D, T, M, I, P, S, j, A, E, O, N, H, L, $, z, F = new Date,
                W = this._daylightSavingAdjust(new Date(F.getFullYear(), F.getMonth(), F.getDate())),
                R = this._get(t, "isRTL"),
                q = this._get(t, "showButtonPanel"),
                B = this._get(t, "hideIfNoPrevNext"),
                U = this._get(t, "navigationAsDateFormat"),
                Y = this._getNumberOfMonths(t),
                K = this._get(t, "showCurrentAtPos"),
                V = this._get(t, "stepMonths"),
                X = 1 !== Y[0] || 1 !== Y[1],
                G = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                Q = this._getMinMaxDate(t, "min"),
                Z = this._getMinMaxDate(t, "max"),
                J = t.drawMonth - K,
                tt = t.drawYear;
            if (0 > J && (J += 12, tt--), Z)
                for (e = this._daylightSavingAdjust(new Date(Z.getFullYear(), Z.getMonth() - Y[0] * Y[1] + 1, Z.getDate())), e = Q && Q > e ? Q : e; this._daylightSavingAdjust(new Date(tt, J, 1)) > e;) 0 > --J && (J = 11, tt--);
            for (t.drawMonth = J, t.drawYear = tt, i = this._get(t, "prevText"), i = U ? this.formatDate(i, this._daylightSavingAdjust(new Date(tt, J - V, 1)), this._getFormatConfig(t)) : i, n = this._canAdjustMonth(t, -1, tt, J) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (R ? "e" : "w") + "'>" + i + "</span></a>" : B ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (R ? "e" : "w") + "'>" + i + "</span></a>", s = this._get(t, "nextText"), s = U ? this.formatDate(s, this._daylightSavingAdjust(new Date(tt, J + V, 1)), this._getFormatConfig(t)) : s, o = this._canAdjustMonth(t, 1, tt, J) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (R ? "w" : "e") + "'>" + s + "</span></a>" : B ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (R ? "w" : "e") + "'>" + s + "</span></a>", a = this._get(t, "currentText"), r = this._get(t, "gotoCurrent") && t.currentDay ? G : W, a = U ? this.formatDate(a, r, this._getFormatConfig(t)) : a, l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", c = q ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (R ? l : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (R ? "" : l) + "</div>" : "", h = parseInt(this._get(t, "firstDay"), 10), h = isNaN(h) ? 0 : h, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), m = this._get(t, "monthNamesShort"), g = this._get(t, "beforeShowDay"), b = this._get(t, "showOtherMonths"), v = this._get(t, "selectOtherMonths"), _ = this._getDefaultDate(t), y = "", x = 0; Y[0] > x; x++) {
                for (k = "", this.maxRows = 4, C = 0; Y[1] > C; C++) {
                    if (D = this._daylightSavingAdjust(new Date(tt, J, t.selectedDay)), T = " ui-corner-all", M = "", X) {
                        if (M += "<div class='ui-datepicker-group", Y[1] > 1) switch (C) {
                            case 0:
                                M += " ui-datepicker-group-first", T = " ui-corner-" + (R ? "right" : "left");
                                break;
                            case Y[1] - 1:
                                M += " ui-datepicker-group-last", T = " ui-corner-" + (R ? "left" : "right");
                                break;
                            default:
                                M += " ui-datepicker-group-middle", T = ""
                        }
                        M += "'>"
                    }
                    for (M += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + T + "'>" + (/all|left/.test(T) && 0 === x ? R ? o : n : "") + (/all|right/.test(T) && 0 === x ? R ? n : o : "") + this._generateMonthYearHeader(t, J, tt, Q, Z, x > 0 || C > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead><tr>", I = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++) P = (w + h) % 7, I += "<th scope='col'" + ((w + h + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[P] + "'>" + p[P] + "</span></th>";
                    for (M += I + "</tr></thead><tbody>", S = this._getDaysInMonth(tt, J), tt === t.selectedYear && J === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, S)), j = (this._getFirstDayOfMonth(tt, J) - h + 7) % 7, A = Math.ceil((j + S) / 7), E = X && this.maxRows > A ? this.maxRows : A, this.maxRows = E, O = this._daylightSavingAdjust(new Date(tt, J, 1 - j)), N = 0; E > N; N++) {
                        for (M += "<tr>", H = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(O) + "</td>" : "", w = 0; 7 > w; w++) L = g ? g.apply(t.input ? t.input[0] : null, [O]) : [!0, ""], $ = O.getMonth() !== J, z = $ && !v || !L[0] || Q && Q > O || Z && O > Z, H += "<td class='" + ((w + h + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + ($ ? " ui-datepicker-other-month" : "") + (O.getTime() === D.getTime() && J === t.selectedMonth && t._keyEvent || _.getTime() === O.getTime() && _.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (z ? " " + this._unselectableClass + " ui-state-disabled" : "") + ($ && !b ? "" : " " + L[1] + (O.getTime() === G.getTime() ? " " + this._currentClass : "") + (O.getTime() === W.getTime() ? " ui-datepicker-today" : "")) + "'" + ($ && !b || !L[2] ? "" : " title='" + L[2].replace(/'/g, "&#39;") + "'") + (z ? "" : " data-handler='selectDay' data-event='click' data-month='" + O.getMonth() + "' data-year='" + O.getFullYear() + "'") + ">" + ($ && !b ? "&#xa0;" : z ? "<span class='ui-state-default'>" + O.getDate() + "</span>" : "<a class='ui-state-default" + (O.getTime() === W.getTime() ? " ui-state-highlight" : "") + (O.getTime() === G.getTime() ? " ui-state-active" : "") + ($ ? " ui-priority-secondary" : "") + "' href='#'>" + O.getDate() + "</a>") + "</td>", O.setDate(O.getDate() + 1), O = this._daylightSavingAdjust(O);
                        M += H + "</tr>"
                    }
                    J++, J > 11 && (J = 0, tt++), M += "</tbody></table>" + (X ? "</div>" + (Y[0] > 0 && C === Y[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), k += M
                }
                y += k
            }
            return y += c, t._keyEvent = !1, y
        },
        _generateMonthYearHeader: function (t, e, i, n, s, o, a, r) {
            var l, c, h, u, d, p, f, m, g = this._get(t, "changeMonth"),
                b = this._get(t, "changeYear"),
                v = this._get(t, "showMonthAfterYear"),
                _ = "<div class='ui-datepicker-title'>",
                y = "";
            if (o || !g) y += "<span class='ui-datepicker-month'>" + a[e] + "</span>";
            else {
                for (l = n && n.getFullYear() === i, c = s && s.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", h = 0; 12 > h; h++)(!l || h >= n.getMonth()) && (!c || s.getMonth() >= h) && (y += "<option value='" + h + "'" + (h === e ? " selected='selected'" : "") + ">" + r[h] + "</option>");
                y += "</select>"
            }
            if (v || (_ += y + (!o && g && b ? "" : "&#xa0;")), !t.yearshtml)
                if (t.yearshtml = "", o || !b) _ += "<span class='ui-datepicker-year'>" + i + "</span>";
                else {
                    for (u = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), p = function (t) {
                            var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
                            return isNaN(e) ? d : e
                        }, f = p(u[0]), m = Math.max(f, p(u[1] || "")), f = n ? Math.max(f, n.getFullYear()) : f, m = s ? Math.min(m, s.getFullYear()) : m, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= f; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                    t.yearshtml += "</select>", _ += t.yearshtml, t.yearshtml = null
                } return _ += this._get(t, "yearSuffix"), v && (_ += (!o && g && b ? "" : "&#xa0;") + y), _ += "</div>"
        },
        _adjustInstDate: function (t, e, i) {
            var n = t.selectedYear + ("Y" === i ? e : 0),
                s = t.selectedMonth + ("M" === i ? e : 0),
                o = Math.min(t.selectedDay, this._getDaysInMonth(n, s)) + ("D" === i ? e : 0),
                a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(n, s, o)));
            t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t)
        },
        _restrictMinMax: function (t, e) {
            var i = this._getMinMaxDate(t, "min"),
                n = this._getMinMaxDate(t, "max"),
                s = i && i > e ? i : e;
            return n && s > n ? n : s
        },
        _notifyChange: function (t) {
            var e = this._get(t, "onChangeMonthYear");
            e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
        },
        _getNumberOfMonths: function (t) {
            var e = this._get(t, "numberOfMonths");
            return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
        },
        _getMinMaxDate: function (t, e) {
            return this._determineDate(t, this._get(t, e + "Date"), null)
        },
        _getDaysInMonth: function (t, e) {
            return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
        },
        _getFirstDayOfMonth: function (t, e) {
            return new Date(t, e, 1).getDay()
        },
        _canAdjustMonth: function (t, e, i, n) {
            var s = this._getNumberOfMonths(t),
                o = this._daylightSavingAdjust(new Date(i, n + (0 > e ? e : s[0] * s[1]), 1));
            return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o)
        },
        _isInRange: function (t, e) {
            var i, n, s = this._getMinMaxDate(t, "min"),
                o = this._getMinMaxDate(t, "max"),
                a = null,
                r = null,
                l = this._get(t, "yearRange");
            return l && (i = l.split(":"), n = (new Date).getFullYear(), a = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (a += n), i[1].match(/[+\-].*/) && (r += n)), (!s || e.getTime() >= s.getTime()) && (!o || e.getTime() <= o.getTime()) && (!a || e.getFullYear() >= a) && (!r || r >= e.getFullYear())
        },
        _getFormatConfig: function (t) {
            var e = this._get(t, "shortYearCutoff");
            return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), {
                shortYearCutoff: e,
                dayNamesShort: this._get(t, "dayNamesShort"),
                dayNames: this._get(t, "dayNames"),
                monthNamesShort: this._get(t, "monthNamesShort"),
                monthNames: this._get(t, "monthNames")
            }
        },
        _formatDate: function (t, e, i, n) {
            e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
            var s = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(n, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
            return this.formatDate(this._get(t, "dateFormat"), s, this._getFormatConfig(t))
        }
    }), t.fn.datepicker = function (e) {
        if (!this.length) return this;
        t.datepicker.initialized || (t(document).on("mousedown", t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function () {
            "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
        }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
    }, t.datepicker = new n, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.12.1", t.datepicker, t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    var g = !1;
    t(document).on("mouseup", function () {
        g = !1
    }), t.widget("ui.mouse", {
        version: "1.12.1",
        options: {
            cancel: "input, textarea, button, select, option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function () {
            var e = this;
            this.element.on("mousedown." + this.widgetName, function (t) {
                return e._mouseDown(t)
            }).on("click." + this.widgetName, function (i) {
                return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        },
        _mouseDestroy: function () {
            this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function (e) {
            if (!g) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                var i = this,
                    n = 1 === e.which,
                    s = !("string" != typeof this.options.cancel || !e.target.nodeName) && t(e.target).closest(this.options.cancel).length;
                return !(n && !s && this._mouseCapture(e)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                    i.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e), !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t) {
                    return i._mouseMove(t)
                }, this._mouseUpDelegate = function (t) {
                    return i._mouseUp(t)
                }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), g = !0, !0))
            }
        },
        _mouseMove: function (e) {
            if (this._mouseMoved) {
                if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button) return this._mouseUp(e);
                if (!e.which)
                    if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
                    else if (!this.ignoreMissingWhich) return this._mouseUp(e)
            }
            return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
        },
        _mouseUp: function (e) {
            this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, g = !1, e.preventDefault()
        },
        _mouseDistanceMet: function (t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function () {
            return this.mouseDelayMet
        },
        _mouseStart: function () {},
        _mouseDrag: function () {},
        _mouseStop: function () {},
        _mouseCapture: function () {
            return !0
        }
    }), t.ui.plugin = {
        add: function (e, i, n) {
            var s, o = t.ui[e].prototype;
            for (s in n) o.plugins[s] = o.plugins[s] || [], o.plugins[s].push([i, n[s]])
        },
        call: function (t, e, i, n) {
            var s, o = t.plugins[e];
            if (o && (n || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                for (s = 0; o.length > s; s++) t.options[o[s][0]] && o[s][1].apply(t.element, i)
        }
    }, t.ui.safeBlur = function (e) {
        e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur")
    }, t.widget("ui.draggable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function () {
            "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit()
        },
        _setOption: function (t, e) {
            this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName())
        },
        _destroy: function () {
            return (this.helper || this.element).is(".ui-draggable-dragging") ? void(this.destroyOnClear = !0) : (this._removeHandleClassName(), void this._mouseDestroy())
        },
        _mouseCapture: function (e) {
            var i = this.options;
            return !(this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0) && (this.handle = this._getHandle(e), !!this.handle && (this._blurActiveElement(e), this._blockFrames(!0 === i.iframeFix ? "iframe" : i.iframeFix), !0))
        },
        _blockFrames: function (e) {
            this.iframeBlocks = this.document.find(e).map(function () {
                var e = t(this);
                return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]
            })
        },
        _unblockFrames: function () {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _blurActiveElement: function (e) {
            var i = t.ui.safeActiveElement(this.document[0]);
            t(e.target).closest(i).length || t.ui.safeBlur(i)
        },
        _mouseStart: function (e) {
            var i = this.options;
            return this.helper = this._createHelper(e), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function () {
                return "fixed" === t(this).css("position")
            }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(e), this.originalPosition = this.position = this._generatePosition(e, !1), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), !1 === this._trigger("start", e) ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
        },
        _refreshOffsets: function (t) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: !1,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }, this.offset.click = {
                left: t.pageX - this.offset.left,
                top: t.pageY - this.offset.top
            }
        },
        _mouseDrag: function (e, i) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var n = this._uiHash();
                if (!1 === this._trigger("drag", e, n)) return this._mouseUp(new t.Event("mouseup", e)), !1;
                this.position = n.position
            }
            return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
        },
        _mouseStop: function (e) {
            var i = this,
                n = !1;
            return t.ui.ddmanager && !this.options.dropBehaviour && (n = t.ui.ddmanager.drop(this, e)), this.dropped && (n = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !n || "valid" === this.options.revert && n || !0 === this.options.revert || t.isFunction(this.options.revert) && this.options.revert.call(this.element, n) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                !1 !== i._trigger("stop", e) && i._clear()
            }) : !1 !== this._trigger("stop", e) && this._clear(), !1
        },
        _mouseUp: function (e) {
            return this._unblockFrames(), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), this.handleElement.is(e.target) && this.element.trigger("focus"), t.ui.mouse.prototype._mouseUp.call(this, e)
        },
        cancel: function () {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new t.Event("mouseup", {
                target: this.element[0]
            })) : this._clear(), this
        },
        _getHandle: function (e) {
            return !this.options.handle || !!t(e.target).closest(this.element.find(this.options.handle)).length
        },
        _setHandleClassName: function () {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle")
        },
        _removeHandleClassName: function () {
            this._removeClass(this.handleElement, "ui-draggable-handle")
        },
        _createHelper: function (e) {
            var i = this.options,
                n = t.isFunction(i.helper),
                s = n ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), n && s[0] === this.element[0] && this._setPositionRelative(), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
        },
        _setPositionRelative: function () {
            /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
        },
        _adjustOffsetFromHelper: function (e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _isRootNode: function (t) {
            return /(html|body)/i.test(t.tagName) || t === this.document[0]
        },
        _getParentOffset: function () {
            var e = this.offsetParent.offset(),
                i = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if ("relative" !== this.cssPosition) return {
                top: 0,
                left: 0
            };
            var t = this.element.position(),
                e = this._isRootNode(this.scrollParent[0]);
            return {
                top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
                left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function () {
            var e, i, n, s = this.options,
                o = this.document[0];
            return this.relativeContainer = null, s.containment ? "window" === s.containment ? void(this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === s.containment ? void(this.containment = [0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : s.containment.constructor === Array ? void(this.containment = s.containment) : ("parent" === s.containment && (s.containment = this.helper[0].parentNode), i = t(s.containment), void((n = i[0]) && (e = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i))) : void(this.containment = null)
        },
        _convertPositionTo: function (t, e) {
            e || (e = this.position);
            var i = "absolute" === t ? 1 : -1,
                n = this._isRootNode(this.scrollParent[0]);
            return {
                top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : n ? 0 : this.offset.scroll.top) * i,
                left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : n ? 0 : this.offset.scroll.left) * i
            }
        },
        _generatePosition: function (t, e) {
            var i, n, s, o, a = this.options,
                r = this._isRootNode(this.scrollParent[0]),
                l = t.pageX,
                c = t.pageY;
            return r && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            }), e && (this.containment && (this.relativeContainer ? (n = this.relativeContainer.offset(), i = [this.containment[0] + n.left, this.containment[1] + n.top, this.containment[2] + n.left, this.containment[3] + n.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (c = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (c = i[3] + this.offset.click.top)), a.grid && (s = a.grid[1] ? this.originalPageY + Math.round((c - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY, c = i ? s - this.offset.click.top >= i[1] || s - this.offset.click.top > i[3] ? s : s - this.offset.click.top >= i[1] ? s - a.grid[1] : s + a.grid[1] : s, o = a.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX, l = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - a.grid[0] : o + a.grid[0] : o), "y" === a.axis && (l = this.originalPageX), "x" === a.axis && (c = this.originalPageY)), {
                top: c - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
                left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
            }
        },
        _clear: function () {
            this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
        },
        _trigger: function (e, i, n) {
            return n = n || this._uiHash(), t.ui.plugin.call(this, e, [i, n, this], !0), /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), n.offset = this.positionAbs), t.Widget.prototype._trigger.call(this, e, i, n)
        },
        plugins: {},
        _uiHash: function () {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), t.ui.plugin.add("draggable", "connectToSortable", {
        start: function (e, i, n) {
            var s = t.extend({}, i, {
                item: n.element
            });
            n.sortables = [], t(n.options.connectToSortable).each(function () {
                var i = t(this).sortable("instance");
                i && !i.options.disabled && (n.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, s))
            })
        },
        stop: function (e, i, n) {
            var s = t.extend({}, i, {
                item: n.element
            });
            n.cancelHelperRemoval = !1, t.each(n.sortables, function () {
                var t = this;
                t.isOver ? (t.isOver = 0, n.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = {
                    position: t.placeholder.css("position"),
                    top: t.placeholder.css("top"),
                    left: t.placeholder.css("left")
                }, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, s))
            })
        },
        drag: function (e, i, n) {
            t.each(n.sortables, function () {
                var s = !1,
                    o = this;
                o.positionAbs = n.positionAbs, o.helperProportions = n.helperProportions, o.offset.click = n.offset.click, o._intersectsWith(o.containerCache) && (s = !0, t.each(n.sortables, function () {
                    return this.positionAbs = n.positionAbs, this.helperProportions = n.helperProportions, this.offset.click = n.offset.click, this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (s = !1), s
                })), s ? (o.isOver || (o.isOver = 1, n._parent = i.helper.parent(), o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0), o.options._helper = o.options.helper, o.options.helper = function () {
                    return i.helper[0]
                }, e.target = o.currentItem[0], o._mouseCapture(e, !0), o._mouseStart(e, !0, !0), o.offset.click.top = n.offset.click.top, o.offset.click.left = n.offset.click.left, o.offset.parent.left -= n.offset.parent.left - o.offset.parent.left, o.offset.parent.top -= n.offset.parent.top - o.offset.parent.top, n._trigger("toSortable", e), n.dropped = o.element, t.each(n.sortables, function () {
                    this.refreshPositions()
                }), n.currentItem = n.element, o.fromOutside = n), o.currentItem && (o._mouseDrag(e), i.position = o.position)) : o.isOver && (o.isOver = 0, o.cancelHelperRemoval = !0, o.options._revert = o.options.revert, o.options.revert = !1, o._trigger("out", e, o._uiHash(o)), o._mouseStop(e, !0), o.options.revert = o.options._revert, o.options.helper = o.options._helper, o.placeholder && o.placeholder.remove(), i.helper.appendTo(n._parent), n._refreshOffsets(e), i.position = n._generatePosition(e, !0), n._trigger("fromSortable", e), n.dropped = !1, t.each(n.sortables, function () {
                    this.refreshPositions()
                }))
            })
        }
    }), t.ui.plugin.add("draggable", "cursor", {
        start: function (e, i, n) {
            var s = t("body"),
                o = n.options;
            s.css("cursor") && (o._cursor = s.css("cursor")), s.css("cursor", o.cursor)
        },
        stop: function (e, i, n) {
            var s = n.options;
            s._cursor && t("body").css("cursor", s._cursor)
        }
    }), t.ui.plugin.add("draggable", "opacity", {
        start: function (e, i, n) {
            var s = t(i.helper),
                o = n.options;
            s.css("opacity") && (o._opacity = s.css("opacity")), s.css("opacity", o.opacity)
        },
        stop: function (e, i, n) {
            var s = n.options;
            s._opacity && t(i.helper).css("opacity", s._opacity)
        }
    }), t.ui.plugin.add("draggable", "scroll", {
        start: function (t, e, i) {
            i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
        },
        drag: function (e, i, n) {
            var s = n.options,
                o = !1,
                a = n.scrollParentNotHidden[0],
                r = n.document[0];
            a !== r && "HTML" !== a.tagName ? (s.axis && "x" === s.axis || (n.overflowOffset.top + a.offsetHeight - e.pageY < s.scrollSensitivity ? a.scrollTop = o = a.scrollTop + s.scrollSpeed : e.pageY - n.overflowOffset.top < s.scrollSensitivity && (a.scrollTop = o = a.scrollTop - s.scrollSpeed)),
                s.axis && "y" === s.axis || (n.overflowOffset.left + a.offsetWidth - e.pageX < s.scrollSensitivity ? a.scrollLeft = o = a.scrollLeft + s.scrollSpeed : e.pageX - n.overflowOffset.left < s.scrollSensitivity && (a.scrollLeft = o = a.scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (e.pageY - t(r).scrollTop() < s.scrollSensitivity ? o = t(r).scrollTop(t(r).scrollTop() - s.scrollSpeed) : t(window).height() - (e.pageY - t(r).scrollTop()) < s.scrollSensitivity && (o = t(r).scrollTop(t(r).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (e.pageX - t(r).scrollLeft() < s.scrollSensitivity ? o = t(r).scrollLeft(t(r).scrollLeft() - s.scrollSpeed) : t(window).width() - (e.pageX - t(r).scrollLeft()) < s.scrollSensitivity && (o = t(r).scrollLeft(t(r).scrollLeft() + s.scrollSpeed)))), !1 !== o && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(n, e)
        }
    }), t.ui.plugin.add("draggable", "snap", {
        start: function (e, i, n) {
            var s = n.options;
            n.snapElements = [], t(s.snap.constructor !== String ? s.snap.items || ":data(ui-draggable)" : s.snap).each(function () {
                var e = t(this),
                    i = e.offset();
                this !== n.element[0] && n.snapElements.push({
                    item: this,
                    width: e.outerWidth(),
                    height: e.outerHeight(),
                    top: i.top,
                    left: i.left
                })
            })
        },
        drag: function (e, i, n) {
            var s, o, a, r, l, c, h, u, d, p, f = n.options,
                m = f.snapTolerance,
                g = i.offset.left,
                b = g + n.helperProportions.width,
                v = i.offset.top,
                _ = v + n.helperProportions.height;
            for (d = n.snapElements.length - 1; d >= 0; d--) l = n.snapElements[d].left - n.margins.left, c = l + n.snapElements[d].width, h = n.snapElements[d].top - n.margins.top, u = h + n.snapElements[d].height, l - m > b || g > c + m || h - m > _ || v > u + m || !t.contains(n.snapElements[d].item.ownerDocument, n.snapElements[d].item) ? (n.snapElements[d].snapping && n.options.snap.release && n.options.snap.release.call(n.element, e, t.extend(n._uiHash(), {
                snapItem: n.snapElements[d].item
            })), n.snapElements[d].snapping = !1) : ("inner" !== f.snapMode && (s = m >= Math.abs(h - _), o = m >= Math.abs(u - v), a = m >= Math.abs(l - b), r = m >= Math.abs(c - g), s && (i.position.top = n._convertPositionTo("relative", {
                top: h - n.helperProportions.height,
                left: 0
            }).top), o && (i.position.top = n._convertPositionTo("relative", {
                top: u,
                left: 0
            }).top), a && (i.position.left = n._convertPositionTo("relative", {
                top: 0,
                left: l - n.helperProportions.width
            }).left), r && (i.position.left = n._convertPositionTo("relative", {
                top: 0,
                left: c
            }).left)), p = s || o || a || r, "outer" !== f.snapMode && (s = m >= Math.abs(h - v), o = m >= Math.abs(u - _), a = m >= Math.abs(l - g), r = m >= Math.abs(c - b), s && (i.position.top = n._convertPositionTo("relative", {
                top: h,
                left: 0
            }).top), o && (i.position.top = n._convertPositionTo("relative", {
                top: u - n.helperProportions.height,
                left: 0
            }).top), a && (i.position.left = n._convertPositionTo("relative", {
                top: 0,
                left: l
            }).left), r && (i.position.left = n._convertPositionTo("relative", {
                top: 0,
                left: c - n.helperProportions.width
            }).left)), !n.snapElements[d].snapping && (s || o || a || r || p) && n.options.snap.snap && n.options.snap.snap.call(n.element, e, t.extend(n._uiHash(), {
                snapItem: n.snapElements[d].item
            })), n.snapElements[d].snapping = s || o || a || r || p)
        }
    }), t.ui.plugin.add("draggable", "stack", {
        start: function (e, i, n) {
            var s, o = n.options,
                a = t.makeArray(t(o.stack)).sort(function (e, i) {
                    return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
                });
            a.length && (s = parseInt(t(a[0]).css("zIndex"), 10) || 0, t(a).each(function (e) {
                t(this).css("zIndex", s + e)
            }), this.css("zIndex", s + a.length))
        }
    }), t.ui.plugin.add("draggable", "zIndex", {
        start: function (e, i, n) {
            var s = t(i.helper),
                o = n.options;
            s.css("zIndex") && (o._zIndex = s.css("zIndex")), s.css("zIndex", o.zIndex)
        },
        stop: function (e, i, n) {
            var s = n.options;
            s._zIndex && t(i.helper).css("zIndex", s._zIndex)
        }
    }), t.ui.draggable, t.widget("ui.resizable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            classes: {
                "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
            },
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function (t) {
            return parseFloat(t) || 0
        },
        _isNumber: function (t) {
            return !isNaN(parseFloat(t))
        },
        _hasScroll: function (e, i) {
            if ("hidden" === t(e).css("overflow")) return !1;
            var n = i && "left" === i ? "scrollLeft" : "scrollTop",
                s = !1;
            return e[n] > 0 || (e[n] = 1, s = e[n] > 0, e[n] = 0, s)
        },
        _create: function () {
            var e, i = this.options,
                n = this;
            this._addClass("ui-resizable"), t.extend(this, {
                _aspectRatio: !!i.aspectRatio,
                aspectRatio: i.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
            }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, e = {
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom"),
                marginLeft: this.originalElement.css("marginLeft")
            }, this.element.css(e), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css(e), this._proportionallyResize()), this._setupHandles(), i.autoHide && t(this.element).on("mouseenter", function () {
                i.disabled || (n._removeClass("ui-resizable-autohide"), n._handles.show())
            }).on("mouseleave", function () {
                i.disabled || n.resizing || (n._addClass("ui-resizable-autohide"), n._handles.hide())
            }), this._mouseInit()
        },
        _destroy: function () {
            this._mouseDestroy();
            var e, i = function (e) {
                t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
                position: e.css("position"),
                width: e.outerWidth(),
                height: e.outerHeight(),
                top: e.css("top"),
                left: e.css("left")
            }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
        },
        _setOption: function (t, e) {
            switch (this._super(t, e), t) {
                case "handles":
                    this._removeHandles(), this._setupHandles()
            }
        },
        _setupHandles: function () {
            var e, i, n, s, o, a = this.options,
                r = this;
            if (this.handles = a.handles || (t(".ui-resizable-handle", this.element).length ? {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                } : "e,s,se"), this._handles = t(), this.handles.constructor === String)
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), n = this.handles.split(","), this.handles = {}, i = 0; n.length > i; i++) e = t.trim(n[i]), s = "ui-resizable-" + e, o = t("<div>"), this._addClass(o, "ui-resizable-handle " + s), o.css({
                    zIndex: a.zIndex
                }), this.handles[e] = ".ui-resizable-" + e, this.element.append(o);
            this._renderAxis = function (e) {
                var i, n, s, o;
                e = e || this.element;
                for (i in this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = t(this.handles[i]), this._on(this.handles[i], {
                    mousedown: r._mouseDown
                })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (n = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? n.outerHeight() : n.outerWidth(), s = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(s, o), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i])
            }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", function () {
                r.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), r.axis = o && o[1] ? o[1] : "se")
            }), a.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"))
        },
        _removeHandles: function () {
            this._handles.remove()
        },
        _mouseCapture: function (e) {
            var i, n, s = !1;
            for (i in this.handles)((n = t(this.handles[i])[0]) === e.target || t.contains(n, e.target)) && (s = !0);
            return !this.options.disabled && s
        },
        _mouseStart: function (e) {
            var i, n, s, o = this.options,
                a = this.element;
            return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), n = this._num(this.helper.css("top")), o.containment && (i += t(o.containment).scrollLeft() || 0, n += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: i,
                top: n
            }, this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: a.width(),
                height: a.height()
            }, this.originalSize = this._helper ? {
                width: a.outerWidth(),
                height: a.outerHeight()
            } : {
                width: a.width(),
                height: a.height()
            }, this.sizeDiff = {
                width: a.outerWidth() - a.width(),
                height: a.outerHeight() - a.height()
            }, this.originalPosition = {
                left: i,
                top: n
            }, this.originalMousePosition = {
                left: e.pageX,
                top: e.pageY
            }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, s = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === s ? this.axis + "-resize" : s), this._addClass("ui-resizable-resizing"), this._propagate("start", e), !0
        },
        _mouseDrag: function (e) {
            var i, n, s = this.originalMousePosition,
                o = this.axis,
                a = e.pageX - s.left || 0,
                r = e.pageY - s.top || 0,
                l = this._change[o];
            return this._updatePrevProperties(), !!l && (i = l.apply(this, [e, a, r]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), n = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(n) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), this._applyChanges()), !1)
        },
        _mouseStop: function (e) {
            this.resizing = !1;
            var i, n, s, o, a, r, l, c = this.options,
                h = this;
            return this._helper && (i = this._proportionallyResizeElements, n = i.length && /textarea/i.test(i[0].nodeName), s = n && this._hasScroll(i[0], "left") ? 0 : h.sizeDiff.height, o = n ? 0 : h.sizeDiff.width, a = {
                width: h.helper.width() - o,
                height: h.helper.height() - s
            }, r = parseFloat(h.element.css("left")) + (h.position.left - h.originalPosition.left) || null, l = parseFloat(h.element.css("top")) + (h.position.top - h.originalPosition.top) || null, c.animate || this.element.css(t.extend(a, {
                top: l,
                left: r
            })), h.helper.height(h.size.height), h.helper.width(h.size.width), this._helper && !c.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
        },
        _updatePrevProperties: function () {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            }, this.prevSize = {
                width: this.size.width,
                height: this.size.height
            }
        },
        _applyChanges: function () {
            var t = {};
            return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t
        },
        _updateVirtualBoundaries: function (t) {
            var e, i, n, s, o, a = this.options;
            o = {
                minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0,
                maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0,
                minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0,
                maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0
            }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, n = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, s = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), n > o.minHeight && (o.minHeight = n), o.maxWidth > i && (o.maxWidth = i), o.maxHeight > s && (o.maxHeight = s)), this._vBoundaries = o
        },
        _updateCache: function (t) {
            this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width)
        },
        _updateRatio: function (t) {
            var e = this.position,
                i = this.size,
                n = this.axis;
            return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === n && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === n && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
        },
        _respectSize: function (t) {
            var e = this._vBoundaries,
                i = this.axis,
                n = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
                s = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
                o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
                a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
                r = this.originalPosition.left + this.originalSize.width,
                l = this.originalPosition.top + this.originalSize.height,
                c = /sw|nw|w/.test(i),
                h = /nw|ne|n/.test(i);
            return o && (t.width = e.minWidth), a && (t.height = e.minHeight), n && (t.width = e.maxWidth), s && (t.height = e.maxHeight), o && c && (t.left = r - e.minWidth), n && c && (t.left = r - e.maxWidth), a && h && (t.top = l - e.minHeight), s && h && (t.top = l - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
        },
        _getPaddingPlusBorderDimensions: function (t) {
            for (var e = 0, i = [], n = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], s = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; 4 > e; e++) i[e] = parseFloat(n[e]) || 0, i[e] += parseFloat(s[e]) || 0;
            return {
                height: i[0] + i[2],
                width: i[1] + i[3]
            }
        },
        _proportionallyResize: function () {
            if (this._proportionallyResizeElements.length)
                for (var t, e = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > e; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({
                    height: i.height() - this.outerDimensions.height || 0,
                    width: i.width() - this.outerDimensions.width || 0
                })
        },
        _renderProxy: function () {
            var e = this.element,
                i = this.options;
            this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++i.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function (t, e) {
                return {
                    width: this.originalSize.width + e
                }
            },
            w: function (t, e) {
                var i = this.originalSize;
                return {
                    left: this.originalPosition.left + e,
                    width: i.width - e
                }
            },
            n: function (t, e, i) {
                var n = this.originalSize;
                return {
                    top: this.originalPosition.top + i,
                    height: n.height - i
                }
            },
            s: function (t, e, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function (e, i, n) {
                return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
            },
            sw: function (e, i, n) {
                return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
            },
            ne: function (e, i, n) {
                return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
            },
            nw: function (e, i, n) {
                return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
            }
        },
        _propagate: function (e, i) {
            t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui())
        },
        plugins: {},
        ui: function () {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), t.ui.plugin.add("resizable", "animate", {
        stop: function (e) {
            var i = t(this).resizable("instance"),
                n = i.options,
                s = i._proportionallyResizeElements,
                o = s.length && /textarea/i.test(s[0].nodeName),
                a = o && i._hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
                r = o ? 0 : i.sizeDiff.width,
                l = {
                    width: i.size.width - r,
                    height: i.size.height - a
                },
                c = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
                h = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(t.extend(l, h && c ? {
                top: h,
                left: c
            } : {}), {
                duration: n.animateDuration,
                easing: n.animateEasing,
                step: function () {
                    var n = {
                        width: parseFloat(i.element.css("width")),
                        height: parseFloat(i.element.css("height")),
                        top: parseFloat(i.element.css("top")),
                        left: parseFloat(i.element.css("left"))
                    };
                    s && s.length && t(s[0]).css({
                        width: n.width,
                        height: n.height
                    }), i._updateCache(n), i._propagate("resize", e)
                }
            })
        }
    }), t.ui.plugin.add("resizable", "containment", {
        start: function () {
            var e, i, n, s, o, a, r, l = t(this).resizable("instance"),
                c = l.options,
                h = l.element,
                u = c.containment,
                d = u instanceof t ? u.get(0) : /parent/.test(u) ? h.parent().get(0) : u;
            d && (l.containerElement = t(d), /document/.test(u) || u === document ? (l.containerOffset = {
                left: 0,
                top: 0
            }, l.containerPosition = {
                left: 0,
                top: 0
            }, l.parentData = {
                element: t(document),
                left: 0,
                top: 0,
                width: t(document).width(),
                height: t(document).height() || document.body.parentNode.scrollHeight
            }) : (e = t(d), i = [], t(["Top", "Right", "Left", "Bottom"]).each(function (t, n) {
                i[t] = l._num(e.css("padding" + n))
            }), l.containerOffset = e.offset(), l.containerPosition = e.position(), l.containerSize = {
                height: e.innerHeight() - i[3],
                width: e.innerWidth() - i[1]
            }, n = l.containerOffset, s = l.containerSize.height, o = l.containerSize.width, a = l._hasScroll(d, "left") ? d.scrollWidth : o, r = l._hasScroll(d) ? d.scrollHeight : s, l.parentData = {
                element: d,
                left: n.left,
                top: n.top,
                width: a,
                height: r
            }))
        },
        resize: function (e) {
            var i, n, s, o, a = t(this).resizable("instance"),
                r = a.options,
                l = a.containerOffset,
                c = a.position,
                h = a._aspectRatio || e.shiftKey,
                u = {
                    top: 0,
                    left: 0
                },
                d = a.containerElement,
                p = !0;
            d[0] !== document && /static/.test(d.css("position")) && (u = l), c.left < (a._helper ? l.left : 0) && (a.size.width = a.size.width + (a._helper ? a.position.left - l.left : a.position.left - u.left), h && (a.size.height = a.size.width / a.aspectRatio, p = !1), a.position.left = r.helper ? l.left : 0), c.top < (a._helper ? l.top : 0) && (a.size.height = a.size.height + (a._helper ? a.position.top - l.top : a.position.top), h && (a.size.width = a.size.height * a.aspectRatio, p = !1), a.position.top = a._helper ? l.top : 0), s = a.containerElement.get(0) === a.element.parent().get(0), o = /relative|absolute/.test(a.containerElement.css("position")), s && o ? (a.offset.left = a.parentData.left + a.position.left, a.offset.top = a.parentData.top + a.position.top) : (a.offset.left = a.element.offset().left, a.offset.top = a.element.offset().top), i = Math.abs(a.sizeDiff.width + (a._helper ? a.offset.left - u.left : a.offset.left - l.left)), n = Math.abs(a.sizeDiff.height + (a._helper ? a.offset.top - u.top : a.offset.top - l.top)), i + a.size.width >= a.parentData.width && (a.size.width = a.parentData.width - i, h && (a.size.height = a.size.width / a.aspectRatio, p = !1)), n + a.size.height >= a.parentData.height && (a.size.height = a.parentData.height - n, h && (a.size.width = a.size.height * a.aspectRatio, p = !1)), p || (a.position.left = a.prevPosition.left, a.position.top = a.prevPosition.top, a.size.width = a.prevSize.width, a.size.height = a.prevSize.height)
        },
        stop: function () {
            var e = t(this).resizable("instance"),
                i = e.options,
                n = e.containerOffset,
                s = e.containerPosition,
                o = e.containerElement,
                a = t(e.helper),
                r = a.offset(),
                l = a.outerWidth() - e.sizeDiff.width,
                c = a.outerHeight() - e.sizeDiff.height;
            e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
                left: r.left - s.left - n.left,
                width: l,
                height: c
            }), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
                left: r.left - s.left - n.left,
                width: l,
                height: c
            })
        }
    }), t.ui.plugin.add("resizable", "alsoResize", {
        start: function () {
            var e = t(this).resizable("instance"),
                i = e.options;
            t(i.alsoResize).each(function () {
                var e = t(this)
                e.data("ui-resizable-alsoresize", {
                    width: parseFloat(e.width()),
                    height: parseFloat(e.height()),
                    left: parseFloat(e.css("left")),
                    top: parseFloat(e.css("top"))
                })
            })
        },
        resize: function (e, i) {
            var n = t(this).resizable("instance"),
                s = n.options,
                o = n.originalSize,
                a = n.originalPosition,
                r = {
                    height: n.size.height - o.height || 0,
                    width: n.size.width - o.width || 0,
                    top: n.position.top - a.top || 0,
                    left: n.position.left - a.left || 0
                };
            t(s.alsoResize).each(function () {
                var e = t(this),
                    n = t(this).data("ui-resizable-alsoresize"),
                    s = {},
                    o = e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                t.each(o, function (t, e) {
                    var i = (n[e] || 0) + (r[e] || 0)
                    i && i >= 0 && (s[e] = i || null)
                }), e.css(s)
            })
        },
        stop: function () {
            t(this).removeData("ui-resizable-alsoresize")
        }
    }), t.ui.plugin.add("resizable", "ghost", {
        start: function () {
            var e = t(this).resizable("instance"),
                i = e.size;
            e.ghost = e.originalElement.clone(), e.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: i.height,
                width: i.width,
                margin: 0,
                left: 0,
                top: 0
            }), e._addClass(e.ghost, "ui-resizable-ghost"), !1 !== t.uiBackCompat && "string" == typeof e.options.ghost && e.ghost.addClass(this.options.ghost), e.ghost.appendTo(e.helper)
        },
        resize: function () {
            var e = t(this).resizable("instance")
            e.ghost && e.ghost.css({
                position: "relative",
                height: e.size.height,
                width: e.size.width
            })
        },
        stop: function () {
            var e = t(this).resizable("instance")
            e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
        }
    }), t.ui.plugin.add("resizable", "grid", {
        resize: function () {
            var e, i = t(this).resizable("instance"),
                n = i.options,
                s = i.size,
                o = i.originalSize,
                a = i.originalPosition,
                r = i.axis,
                l = "number" == typeof n.grid ? [n.grid, n.grid] : n.grid,
                c = l[0] || 1,
                h = l[1] || 1,
                u = Math.round((s.width - o.width) / c) * c,
                d = Math.round((s.height - o.height) / h) * h,
                p = o.width + u,
                f = o.height + d,
                m = n.maxWidth && p > n.maxWidth,
                g = n.maxHeight && f > n.maxHeight,
                b = n.minWidth && n.minWidth > p,
                v = n.minHeight && n.minHeight > f;
            n.grid = l, b && (p += c), v && (f += h), m && (p -= c), g && (f -= h), /^(se|s|e)$/.test(r) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = a.top - d) : /^(sw)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.left = a.left - u) : ((0 >= f - h || 0 >= p - c) && (e = i._getPaddingPlusBorderDimensions(this)), f - h > 0 ? (i.size.height = f, i.position.top = a.top - d) : (f = h - e.height, i.size.height = f, i.position.top = a.top + o.height - f), p - c > 0 ? (i.size.width = p, i.position.left = a.left - u) : (p = c - e.width, i.size.width = p, i.position.left = a.left + o.width - p))
        }
    }), t.ui.resizable, t.widget("ui.dialog", {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            classes: {
                "ui-dialog": "ui-corner-all",
                "ui-dialog-titlebar": "ui-corner-all"
            },
            closeOnEscape: !0,
            closeText: "Close",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function (e) {
                    var i = t(this).css(e).offset().top;
                    0 > i && t(this).css("top", e.top - i)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        resizableRelatedOptions: {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        },
        _create: function () {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            }, this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            }, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
        },
        _init: function () {
            this.options.autoOpen && this.open()
        },
        _appendTo: function () {
            var e = this.options.appendTo;
            return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0)
        },
        _destroy: function () {
            var t, e = this.originalPosition;
            this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), t = e.parent.children().eq(e.index), t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
        },
        widget: function () {
            return this.uiDialog
        },
        disable: t.noop,
        enable: t.noop,
        close: function (e) {
            var i = this;
            this._isOpen && !1 !== this._trigger("beforeClose", e) && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function () {
                i._trigger("close", e)
            }))
        },
        isOpen: function () {
            return this._isOpen
        },
        moveToTop: function () {
            this._moveToTop()
        },
        _moveToTop: function (e, i) {
            var n = !1,
                s = this.uiDialog.siblings(".ui-front:visible").map(function () {
                    return +t(this).css("z-index")
                }).get(),
                o = Math.max.apply(null, s)
            return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1), n = !0), n && !i && this._trigger("focus", e), n
        },
        open: function () {
            var e = this;
            return this._isOpen ? void(this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = t(t.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function () {
                e._focusTabbable(), e._trigger("focus")
            }), this._makeFocusTarget(), void this._trigger("open"))
        },
        _focusTabbable: function () {
            var t = this._focusedElement;
            t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).trigger("focus")
        },
        _keepFocus: function (e) {
            function i() {
                var e = t.ui.safeActiveElement(this.document[0])
                this.uiDialog[0] === e || t.contains(this.uiDialog[0], e) || this._focusTabbable()
            }
            e.preventDefault(), i.call(this), this._delay(i)
        },
        _createWrapper: function () {
            this.uiDialog = t("<div>").hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), this._on(this.uiDialog, {
                keydown: function (e) {
                    if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), void this.close(e);
                    if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
                        var i = this.uiDialog.find(":tabbable"),
                            n = i.filter(":first"),
                            s = i.filter(":last");
                        e.target !== s[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== n[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay(function () {
                            s.trigger("focus")
                        }), e.preventDefault()) : (this._delay(function () {
                            n.trigger("focus")
                        }), e.preventDefault())
                    }
                },
                mousedown: function (t) {
                    this._moveToTop(t) && this._focusTabbable()
                }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            })
        },
        _createTitlebar: function () {
            var e;
            this.uiDialogTitlebar = t("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), this._on(this.uiDialogTitlebar, {
                mousedown: function (e) {
                    t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus")
                }
            }), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({
                label: t("<a>").text(this.options.closeText).html(),
                icon: "ui-icon-closethick",
                showLabel: !1
            }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), this._on(this.uiDialogTitlebarClose, {
                click: function (t) {
                    t.preventDefault(), this.close(t)
                }
            }), e = t("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(e, "ui-dialog-title"), this._title(e), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({
                "aria-labelledby": e.attr("id")
            })
        },
        _title: function (t) {
            this.options.title ? t.text(this.options.title) : t.html("&#160;")
        },
        _createButtonPane: function () {
            this.uiDialogButtonPane = t("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), this._createButtons()
        },
        _createButtons: function () {
            var e = this,
                i = this.options.buttons;
            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? void this._removeClass(this.uiDialog, "ui-dialog-buttons") : (t.each(i, function (i, n) {
                var s, o;
                n = t.isFunction(n) ? {
                    click: n,
                    text: i
                } : n, n = t.extend({
                    type: "button"
                }, n), s = n.click, o = {
                    icon: n.icon,
                    iconPosition: n.iconPosition,
                    showLabel: n.showLabel,
                    icons: n.icons,
                    text: n.text
                }, delete n.click, delete n.icon, delete n.iconPosition, delete n.showLabel, delete n.icons, "boolean" == typeof n.text && delete n.text, t("<button></button>", n).button(o).appendTo(e.uiButtonSet).on("click", function () {
                    s.apply(e.element[0], arguments)
                })
            }), this._addClass(this.uiDialog, "ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
        },
        _makeDraggable: function () {
            function e(t) {
                return {
                    position: t.position,
                    offset: t.offset
                }
            }
            var i = this,
                n = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function (n, s) {
                    i._addClass(t(this), "ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", n, e(s))
                },
                drag: function (t, n) {
                    i._trigger("drag", t, e(n))
                },
                stop: function (s, o) {
                    var a = o.offset.left - i.document.scrollLeft(),
                        r = o.offset.top - i.document.scrollTop();
                    n.position = {
                        my: "left top",
                        at: "left" + (a >= 0 ? "+" : "") + a + " top" + (r >= 0 ? "+" : "") + r,
                        of: i.window
                    }, i._removeClass(t(this), "ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", s, e(o))
                }
            })
        },
        _makeResizable: function () {
            function e(t) {
                return {
                    originalPosition: t.originalPosition,
                    originalSize: t.originalSize,
                    position: t.position,
                    size: t.size
                }
            }
            var i = this,
                n = this.options,
                s = n.resizable,
                o = this.uiDialog.css("position"),
                a = "string" == typeof s ? s : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: n.maxWidth,
                maxHeight: n.maxHeight,
                minWidth: n.minWidth,
                minHeight: this._minHeight(),
                handles: a,
                start: function (n, s) {
                    i._addClass(t(this), "ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", n, e(s))
                },
                resize: function (t, n) {
                    i._trigger("resize", t, e(n))
                },
                stop: function (s, o) {
                    var a = i.uiDialog.offset(),
                        r = a.left - i.document.scrollLeft(),
                        l = a.top - i.document.scrollTop();
                    n.height = i.uiDialog.height(), n.width = i.uiDialog.width(), n.position = {
                        my: "left top",
                        at: "left" + (r >= 0 ? "+" : "") + r + " top" + (l >= 0 ? "+" : "") + l,
                        of: i.window
                    }, i._removeClass(t(this), "ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", s, e(o))
                }
            }).css("position", o)
        },
        _trackFocus: function () {
            this._on(this.widget(), {
                focusin: function (e) {
                    this._makeFocusTarget(), this._focusedElement = t(e.target)
                }
            })
        },
        _makeFocusTarget: function () {
            this._untrackInstance(), this._trackingInstances().unshift(this)
        },
        _untrackInstance: function () {
            var e = this._trackingInstances(),
                i = t.inArray(this, e); - 1 !== i && e.splice(i, 1)
        },
        _trackingInstances: function () {
            var t = this.document.data("ui-dialog-instances");
            return t || (t = [], this.document.data("ui-dialog-instances", t)), t
        },
        _minHeight: function () {
            var t = this.options;
            return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
        },
        _position: function () {
            var t = this.uiDialog.is(":visible");
            t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
        },
        _setOptions: function (e) {
            var i = this,
                n = !1,
                s = {};
            t.each(e, function (t, e) {
                i._setOption(t, e), t in i.sizeRelatedOptions && (n = !0), t in i.resizableRelatedOptions && (s[t] = e)
            }), n && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", s)
        },
        _setOption: function (e, i) {
            var n, s, o = this.uiDialog;
            "disabled" !== e && (this._super(e, i), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({
                    label: t("<a>").text("" + this.options.closeText).html()
                }), "draggable" === e && (n = o.is(":data(ui-draggable)"), n && !i && o.draggable("destroy"), !n && i && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && (s = o.is(":data(ui-resizable)"), s && !i && o.resizable("destroy"), s && "string" == typeof i && o.resizable("option", "handles", i), s || !1 === i || this._makeResizable()),
                "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function () {
            var t, e, i, n = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }), n.minWidth > n.width && (n.width = n.minWidth), t = this.uiDialog.css({
                height: "auto",
                width: n.width
            }).outerHeight(), e = Math.max(0, n.minHeight - t), i = "number" == typeof n.maxHeight ? Math.max(0, n.maxHeight - t) : "none", "auto" === n.height ? this.element.css({
                minHeight: e,
                maxHeight: i,
                height: "auto"
            }) : this.element.height(Math.max(0, n.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function () {
            this.iframeBlocks = this.document.find("iframe").map(function () {
                var e = t(this);
                return t("<div>").css({
                    position: "absolute",
                    width: e.outerWidth(),
                    height: e.outerHeight()
                }).appendTo(e.parent()).offset(e.offset())[0]
            })
        },
        _unblockFrames: function () {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _allowInteraction: function (e) {
            return !!t(e.target).closest(".ui-dialog").length || !!t(e.target).closest(".ui-datepicker").length
        },
        _createOverlay: function () {
            if (this.options.modal) {
                var e = !0;
                this._delay(function () {
                    e = !1
                }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
                    focusin: function (t) {
                        e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable())
                    }
                }), this.overlay = t("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), this._on(this.overlay, {
                    mousedown: "_keepFocus"
                }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
            }
        },
        _destroyOverlay: function () {
            if (this.options.modal && this.overlay) {
                var t = this.document.data("ui-dialog-overlays") - 1;
                t ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null
            }
        }
    }), !1 !== t.uiBackCompat && t.widget("ui.dialog", t.ui.dialog, {
        options: {
            dialogClass: ""
        },
        _createWrapper: function () {
            this._super(), this.uiDialog.addClass(this.options.dialogClass)
        },
        _setOption: function (t, e) {
            "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e), this._superApply(arguments)
        }
    }), t.ui.dialog, t.widget("ui.droppable", {
        version: "1.12.1",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            addClasses: !0,
            greedy: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function () {
            var e, i = this.options,
                n = i.accept;
            this.isover = !1, this.isout = !0, this.accept = t.isFunction(n) ? n : function (t) {
                return t.is(n)
            }, this.proportions = function () {
                return arguments.length ? void(e = arguments[0]) : e || (e = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                })
            }, this._addToManager(i.scope), i.addClasses && this._addClass("ui-droppable")
        },
        _addToManager: function (e) {
            t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [], t.ui.ddmanager.droppables[e].push(this)
        },
        _splice: function (t) {
            for (var e = 0; t.length > e; e++) t[e] === this && t.splice(e, 1)
        },
        _destroy: function () {
            var e = t.ui.ddmanager.droppables[this.options.scope];
            this._splice(e)
        },
        _setOption: function (e, i) {
            if ("accept" === e) this.accept = t.isFunction(i) ? i : function (t) {
                return t.is(i)
            };
            else if ("scope" === e) {
                var n = t.ui.ddmanager.droppables[this.options.scope];
                this._splice(n), this._addToManager(i)
            }
            this._super(e, i)
        },
        _activate: function (e) {
            var i = t.ui.ddmanager.current;
            this._addActiveClass(), i && this._trigger("activate", e, this.ui(i))
        },
        _deactivate: function (e) {
            var i = t.ui.ddmanager.current;
            this._removeActiveClass(), i && this._trigger("deactivate", e, this.ui(i))
        },
        _over: function (e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(), this._trigger("over", e, this.ui(i)))
        },
        _out: function (e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(), this._trigger("out", e, this.ui(i)))
        },
        _drop: function (e, i) {
            var n = i || t.ui.ddmanager.current,
                s = !1;
            return !(!n || (n.currentItem || n.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
                var i = t(this).droppable("instance");
                return i.options.greedy && !i.options.disabled && i.options.scope === n.options.scope && i.accept.call(i.element[0], n.currentItem || n.element) && b(n, t.extend(i, {
                    offset: i.element.offset()
                }), i.options.tolerance, e) ? (s = !0, !1) : void 0
            }), !s && (!!this.accept.call(this.element[0], n.currentItem || n.element) && (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", e, this.ui(n)), this.element)))
        },
        ui: function (t) {
            return {
                draggable: t.currentItem || t.element,
                helper: t.helper,
                position: t.position,
                offset: t.positionAbs
            }
        },
        _addHoverClass: function () {
            this._addClass("ui-droppable-hover")
        },
        _removeHoverClass: function () {
            this._removeClass("ui-droppable-hover")
        },
        _addActiveClass: function () {
            this._addClass("ui-droppable-active")
        },
        _removeActiveClass: function () {
            this._removeClass("ui-droppable-active")
        }
    });
    var b = t.ui.intersect = function () {
        function t(t, e, i) {
            return t >= e && e + i > t
        }
        return function (e, i, n, s) {
            if (!i.offset) return !1;
            var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
                a = (e.positionAbs || e.position.absolute).top + e.margins.top,
                r = o + e.helperProportions.width,
                l = a + e.helperProportions.height,
                c = i.offset.left,
                h = i.offset.top,
                u = c + i.proportions().width,
                d = h + i.proportions().height;
            switch (n) {
                case "fit":
                    return o >= c && u >= r && a >= h && d >= l;
                case "intersect":
                    return o + e.helperProportions.width / 2 > c && u > r - e.helperProportions.width / 2 && a + e.helperProportions.height / 2 > h && d > l - e.helperProportions.height / 2;
                case "pointer":
                    return t(s.pageY, h, i.proportions().height) && t(s.pageX, c, i.proportions().width);
                case "touch":
                    return (a >= h && d >= a || l >= h && d >= l || h > a && l > d) && (o >= c && u >= o || r >= c && u >= r || c > o && r > u);
                default:
                    return !1
            }
        }
    }();
    t.ui.ddmanager = {
        current: null,
        droppables: {
            default: []
        },
        prepareOffsets: function (e, i) {
            var n, s, o = t.ui.ddmanager.droppables[e.options.scope] || [],
                a = i ? i.type : null,
                r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
            t: for (n = 0; o.length > n; n++)
                if (!(o[n].options.disabled || e && !o[n].accept.call(o[n].element[0], e.currentItem || e.element))) {
                    for (s = 0; r.length > s; s++)
                        if (r[s] === o[n].element[0]) {
                            o[n].proportions().height = 0;
                            continue t
                        } o[n].visible = "none" !== o[n].element.css("display"), o[n].visible && ("mousedown" === a && o[n]._activate.call(o[n], i), o[n].offset = o[n].element.offset(), o[n].proportions({
                        width: o[n].element[0].offsetWidth,
                        height: o[n].element[0].offsetHeight
                    }))
                }
        },
        drop: function (e, i) {
            var n = !1;
            return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function () {
                this.options && (!this.options.disabled && this.visible && b(e, this, this.options.tolerance, i) && (n = this._drop.call(this, i) || n), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
            }), n
        },
        dragStart: function (e, i) {
            e.element.parentsUntil("body").on("scroll.droppable", function () {
                e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
            })
        },
        drag: function (e, i) {
            e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function () {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var n, s, o, a = b(e, this, this.options.tolerance, i),
                        r = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;
                    r && (this.options.greedy && (s = this.options.scope, o = this.element.parents(":data(ui-droppable)").filter(function () {
                        return t(this).droppable("instance").options.scope === s
                    }), o.length && (n = t(o[0]).droppable("instance"), n.greedyChild = "isover" === r)), n && "isover" === r && (n.isover = !1, n.isout = !0, n._out.call(n, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), n && "isout" === r && (n.isout = !1, n.isover = !0, n._over.call(n, i)))
                }
            })
        },
        dragStop: function (e, i) {
            e.element.parentsUntil("body").off("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
        }
    }, !1 !== t.uiBackCompat && t.widget("ui.droppable", t.ui.droppable, {
        options: {
            hoverClass: !1,
            activeClass: !1
        },
        _addActiveClass: function () {
            this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass)
        },
        _removeActiveClass: function () {
            this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass)
        },
        _addHoverClass: function () {
            this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass)
        },
        _removeHoverClass: function () {
            this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass)
        }
    }), t.ui.droppable, t.widget("ui.progressbar", {
        version: "1.12.1",
        options: {
            classes: {
                "ui-progressbar": "ui-corner-all",
                "ui-progressbar-value": "ui-corner-left",
                "ui-progressbar-complete": "ui-corner-right"
            },
            max: 100,
            value: 0,
            change: null,
            complete: null
        },
        min: 0,
        _create: function () {
            this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({
                role: "progressbar",
                "aria-valuemin": this.min
            }), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = t("<div>").appendTo(this.element), this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue()
        },
        _destroy: function () {
            this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove()
        },
        value: function (t) {
            return void 0 === t ? this.options.value : (this.options.value = this._constrainedValue(t), void this._refreshValue())
        },
        _constrainedValue: function (t) {
            return void 0 === t && (t = this.options.value), this.indeterminate = !1 === t, "number" != typeof t && (t = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, t))
        },
        _setOptions: function (t) {
            var e = t.value;
            delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
        },
        _setOption: function (t, e) {
            "max" === t && (e = Math.max(this.min, e)), this._super(t, e)
        },
        _setOptionDisabled: function (t) {
            this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t)
        },
        _percentage: function () {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        },
        _refreshValue: function () {
            var e = this.options.value,
                i = this._percentage();
            this.valueDiv.toggle(this.indeterminate || e > this.min).width(i.toFixed(0) + "%"), this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, e === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": e
            }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete")
        }
    }), t.widget("ui.selectable", t.ui.mouse, {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function () {
            var e = this;
            this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function () {
                e.elementPos = t(e.element[0]).offset(), e.selectees = t(e.options.filter, e.element[0]), e._addClass(e.selectees, "ui-selectee"), e.selectees.each(function () {
                    var i = t(this),
                        n = i.offset(),
                        s = {
                            left: n.left - e.elementPos.left,
                            top: n.top - e.elementPos.top
                        };
                    t.data(this, "selectable-item", {
                        element: this,
                        $element: i,
                        left: s.left,
                        top: s.top,
                        right: s.left + i.outerWidth(),
                        bottom: s.top + i.outerHeight(),
                        startselected: !1,
                        selected: i.hasClass("ui-selected"),
                        selecting: i.hasClass("ui-selecting"),
                        unselecting: i.hasClass("ui-unselecting")
                    })
                })
            }, this.refresh(), this._mouseInit(), this.helper = t("<div>"), this._addClass(this.helper, "ui-selectable-helper")
        },
        _destroy: function () {
            this.selectees.removeData("selectable-item"), this._mouseDestroy()
        },
        _mouseStart: function (e) {
            var i = this,
                n = this.options;
            this.opos = [e.pageX, e.pageY], this.elementPos = t(this.element[0]).offset(), this.options.disabled || (this.selectees = t(n.filter, this.element[0]), this._trigger("start", e), t(n.appendTo).append(this.helper), this.helper.css({
                left: e.pageX,
                top: e.pageY,
                width: 0,
                height: 0
            }), n.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
                var n = t.data(this, "selectable-item");
                n.startselected = !0, e.metaKey || e.ctrlKey || (i._removeClass(n.$element, "ui-selected"), n.selected = !1, i._addClass(n.$element, "ui-unselecting"), n.unselecting = !0, i._trigger("unselecting", e, {
                    unselecting: n.element
                }))
            }), t(e.target).parents().addBack().each(function () {
                var n, s = t.data(this, "selectable-item");
                return s ? (n = !e.metaKey && !e.ctrlKey || !s.$element.hasClass("ui-selected"), i._removeClass(s.$element, n ? "ui-unselecting" : "ui-selected")._addClass(s.$element, n ? "ui-selecting" : "ui-unselecting"), s.unselecting = !n, s.selecting = n, s.selected = n, n ? i._trigger("selecting", e, {
                    selecting: s.element
                }) : i._trigger("unselecting", e, {
                    unselecting: s.element
                }), !1) : void 0
            }))
        },
        _mouseDrag: function (e) {
            if (this.dragged = !0, !this.options.disabled) {
                var i, n = this,
                    s = this.options,
                    o = this.opos[0],
                    a = this.opos[1],
                    r = e.pageX,
                    l = e.pageY;
                return o > r && (i = r, r = o, o = i), a > l && (i = l, l = a, a = i), this.helper.css({
                    left: o,
                    top: a,
                    width: r - o,
                    height: l - a
                }), this.selectees.each(function () {
                    var i = t.data(this, "selectable-item"),
                        c = !1,
                        h = {};
                    i && i.element !== n.element[0] && (h.left = i.left + n.elementPos.left, h.right = i.right + n.elementPos.left, h.top = i.top + n.elementPos.top, h.bottom = i.bottom + n.elementPos.top, "touch" === s.tolerance ? c = !(h.left > r || o > h.right || h.top > l || a > h.bottom) : "fit" === s.tolerance && (c = h.left > o && r > h.right && h.top > a && l > h.bottom), c ? (i.selected && (n._removeClass(i.$element, "ui-selected"), i.selected = !1), i.unselecting && (n._removeClass(i.$element, "ui-unselecting"), i.unselecting = !1), i.selecting || (n._addClass(i.$element, "ui-selecting"), i.selecting = !0, n._trigger("selecting", e, {
                        selecting: i.element
                    }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (n._removeClass(i.$element, "ui-selecting"), i.selecting = !1, n._addClass(i.$element, "ui-selected"), i.selected = !0) : (n._removeClass(i.$element, "ui-selecting"), i.selecting = !1, i.startselected && (n._addClass(i.$element, "ui-unselecting"), i.unselecting = !0), n._trigger("unselecting", e, {
                        unselecting: i.element
                    }))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (n._removeClass(i.$element, "ui-selected"), i.selected = !1, n._addClass(i.$element, "ui-unselecting"), i.unselecting = !0, n._trigger("unselecting", e, {
                        unselecting: i.element
                    })))))
                }), !1
            }
        },
        _mouseStop: function (e) {
            var i = this;
            return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function () {
                var n = t.data(this, "selectable-item");
                i._removeClass(n.$element, "ui-unselecting"), n.unselecting = !1, n.startselected = !1, i._trigger("unselected", e, {
                    unselected: n.element
                })
            }), t(".ui-selecting", this.element[0]).each(function () {
                var n = t.data(this, "selectable-item");
                i._removeClass(n.$element, "ui-selecting")._addClass(n.$element, "ui-selected"), n.selecting = !1, n.selected = !0, n.startselected = !0, i._trigger("selected", e, {
                    selected: n.element
                })
            }), this._trigger("stop", e), this.helper.remove(), !1
        }
    }), t.widget("ui.selectmenu", [t.ui.formResetMixin, {
        version: "1.12.1",
        defaultElement: "<select>",
        options: {
            appendTo: null,
            classes: {
                "ui-selectmenu-button-open": "ui-corner-top",
                "ui-selectmenu-button-closed": "ui-corner-all"
            },
            disabled: null,
            icons: {
                button: "ui-icon-triangle-1-s"
            },
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            width: !1,
            change: null,
            close: null,
            focus: null,
            open: null,
            select: null
        },
        _create: function () {
            var e = this.element.uniqueId().attr("id");
            this.ids = {
                element: e,
                button: e + "-button",
                menu: e + "-menu"
            }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, this.menuItems = t()
        },
        _drawButton: function () {
            var e, i = this,
                n = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
            this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, {
                click: function (t) {
                    this.button.focus(), t.preventDefault()
                }
            }), this.element.hide(), this.button = t("<span>", {
                tabindex: this.options.disabled ? -1 : 0,
                id: this.ids.button,
                role: "combobox",
                "aria-expanded": "false",
                "aria-autocomplete": "list",
                "aria-owns": this.ids.menu,
                "aria-haspopup": "true",
                title: this.element.attr("title")
            }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), e = t("<span>").appendTo(this.button), this._addClass(e, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), this.buttonItem = this._renderButtonItem(n).appendTo(this.button), !1 !== this.options.width && this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function () {
                i._rendered || i._refreshMenu()
            })
        },
        _drawMenu: function () {
            var e = this;
            this.menu = t("<ul>", {
                "aria-hidden": "true",
                "aria-labelledby": this.ids.button,
                id: this.ids.menu
            }), this.menuWrap = t("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                classes: {
                    "ui-menu": "ui-corner-bottom"
                },
                role: "listbox",
                select: function (t, i) {
                    t.preventDefault(), e._setSelection(), e._select(i.item.data("ui-selectmenu-item"), t)
                },
                focus: function (t, i) {
                    var n = i.item.data("ui-selectmenu-item");
                    null != e.focusIndex && n.index !== e.focusIndex && (e._trigger("focus", t, {
                        item: n
                    }), e.isOpen || e._select(n, t)), e.focusIndex = n.index, e.button.attr("aria-activedescendant", e.menuItems.eq(n.index).attr("id"))
                }
            }).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function () {
                return !1
            }, this.menuInstance._isDivider = function () {
                return !1
            }
        },
        refresh: function () {
            this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), null === this.options.width && this._resizeButton()
        },
        _refreshMenu: function () {
            var t, e = this.element.find("option");
            this.menu.empty(), this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), this._rendered = !0, e.length && (t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
        },
        open: function (t) {
            this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t)))
        },
        _position: function () {
            this.menuWrap.position(t.extend({
                of: this.button
            }, this.options.position))
        },
        close: function (t) {
            this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t))
        },
        widget: function () {
            return this.button
        },
        menuWidget: function () {
            return this.menu
        },
        _renderButtonItem: function (e) {
            var i = t("<span>");
            return this._setText(i, e.label), this._addClass(i, "ui-selectmenu-text"), i
        },
        _renderMenu: function (e, i) {
            var n = this,
                s = "";
            t.each(i, function (i, o) {
                var a;
                o.optgroup !== s && (a = t("<li>", {
                    text: o.optgroup
                }), n._addClass(a, "ui-selectmenu-optgroup", "ui-menu-divider" + (o.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), a.appendTo(e), s = o.optgroup), n._renderItemData(e, o)
            })
        },
        _renderItemData: function (t, e) {
            return this._renderItem(t, e).data("ui-selectmenu-item", e)
        },
        _renderItem: function (e, i) {
            var n = t("<li>"),
                s = t("<div>", {
                    title: i.element.attr("title")
                });
            return i.disabled && this._addClass(n, null, "ui-state-disabled"), this._setText(s, i.label), n.append(s).appendTo(e)
        },
        _setText: function (t, e) {
            e ? t.text(e) : t.html("&#160;")
        },
        _move: function (t, e) {
            var i, n, s = ".ui-menu-item";
            this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), s += ":not(.ui-state-disabled)"), n = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](s).eq(-1) : i[t + "All"](s).eq(0), n.length && this.menuInstance.focus(e, n)
        },
        _getSelectedItem: function () {
            return this.menuItems.eq(this.element[0].selectedIndex).parent("li")
        },
        _toggle: function (t) {
            this[this.isOpen ? "close" : "open"](t)
        },
        _setSelection: function () {
            var t;
            this.range && (window.getSelection ? (t = window.getSelection(), t.removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus())
        },
        _documentClick: {
            mousedown: function (e) {
                this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + t.ui.escapeSelector(this.ids.button)).length || this.close(e))
            }
        },
        _buttonEvents: {
            mousedown: function () {
                var t;
                window.getSelection ? (t = window.getSelection(), t.rangeCount && (this.range = t.getRangeAt(0))) : this.range = document.selection.createRange()
            },
            click: function (t) {
                this._setSelection(), this._toggle(t)
            },
            keydown: function (e) {
                var i = !0;
                switch (e.keyCode) {
                    case t.ui.keyCode.TAB:
                    case t.ui.keyCode.ESCAPE:
                        this.close(e), i = !1;
                        break;
                    case t.ui.keyCode.ENTER:
                        this.isOpen && this._selectFocusedItem(e);
                        break;
                    case t.ui.keyCode.UP:
                        e.altKey ? this._toggle(e) : this._move("prev", e);
                        break;
                    case t.ui.keyCode.DOWN:
                        e.altKey ? this._toggle(e) : this._move("next", e);
                        break;
                    case t.ui.keyCode.SPACE:
                        this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
                        break;
                    case t.ui.keyCode.LEFT:
                        this._move("prev", e);
                        break;
                    case t.ui.keyCode.RIGHT:
                        this._move("next", e);
                        break;
                    case t.ui.keyCode.HOME:
                    case t.ui.keyCode.PAGE_UP:
                        this._move("first", e);
                        break;
                    case t.ui.keyCode.END:
                    case t.ui.keyCode.PAGE_DOWN:
                        this._move("last", e);
                        break;
                    default:
                        this.menu.trigger(e), i = !1
                }
                i && e.preventDefault()
            }
        },
        _selectFocusedItem: function (t) {
            var e = this.menuItems.eq(this.focusIndex).parent("li");
            e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t)
        },
        _select: function (t, e) {
            var i = this.element[0].selectedIndex;
            this.element[0].selectedIndex = t.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)), this._setAria(t), this._trigger("select", e, {
                item: t
            }), t.index !== i && this._trigger("change", e, {
                item: t
            }), this.close(e)
        },
        _setAria: function (t) {
            var e = this.menuItems.eq(t.index).attr("id");
            this.button.attr({
                "aria-labelledby": e,
                "aria-activedescendant": e
            }), this.menu.attr("aria-activedescendant", e)
        },
        _setOption: function (t, e) {
            if ("icons" === t) {
                var i = this.button.find("span.ui-icon");
                this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button)
            }
            this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "width" === t && this._resizeButton()
        },
        _setOptionDisabled: function (t) {
            this._super(t), this.menuInstance.option("disabled", t), this.button.attr("aria-disabled", t), this._toggleClass(this.button, null, "ui-state-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)
        },
        _appendTo: function () {
            var e = this.options.appendTo;
            return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e
        },
        _toggleAttr: function () {
            this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), this.menu.attr("aria-hidden", !this.isOpen)
        },
        _resizeButton: function () {
            var t = this.options.width;
            return !1 === t ? void this.button.css("width", "") : (null === t && (t = this.element.show().outerWidth(), this.element.hide()), void this.button.outerWidth(t))
        },
        _resizeMenu: function () {
            this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
        },
        _getCreateOptions: function () {
            var t = this._super();
            return t.disabled = this.element.prop("disabled"), t
        },
        _parseOptions: function (e) {
            var i = this,
                n = [];
            e.each(function (e, s) {
                n.push(i._parseOption(t(s), e))
            }), this.items = n
        },
        _parseOption: function (t, e) {
            var i = t.parent("optgroup");
            return {
                element: t,
                index: e,
                value: t.val(),
                label: t.text(),
                optgroup: i.attr("label") || "",
                disabled: i.prop("disabled") || t.prop("disabled")
            }
        },
        _destroy: function () {
            this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr("for", this.ids.element)
        }
    }]), t.widget("ui.slider", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            classes: {
                "ui-slider": "ui-corner-all",
                "ui-slider-handle": "ui-corner-all",
                "ui-slider-range": "ui-corner-all ui-widget-header"
            },
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function () {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1
        },
        _refresh: function () {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
        },
        _createHandles: function () {
            var e, i, n = this.options,
                s = this.element.find(".ui-slider-handle"),
                o = [];
            for (i = n.values && n.values.length || 1, s.length > i && (s.slice(i).remove(), s = s.slice(0, i)), e = s.length; i > e; e++) o.push("<span tabindex='0'></span>");
            this.handles = s.add(t(o.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function (e) {
                t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0)
            })
        },
        _createRange: function () {
            var e = this.options;
            e.range ? (!0 === e.range && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
                left: "",
                bottom: ""
            })) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), ("min" === e.range || "max" === e.range) && this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function () {
            this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
        },
        _destroy: function () {
            this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy()
        },
        _mouseCapture: function (e) {
            var i, n, s, o, a, r, l, c = this,
                h = this.options;
            return !h.disabled && (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), i = {
                x: e.pageX,
                y: e.pageY
            }, n = this._normValueFromMouse(i), s = this._valueMax() - this._valueMin() + 1, this.handles.each(function (e) {
                var i = Math.abs(n - c.values(e));
                (s > i || s === i && (e === c._lastChangedValue || c.values(e) === h.min)) && (s = i, o = t(this), a = e)
            }), !1 !== this._start(e, a) && (this._mouseSliding = !0, this._handleIndex = a, this._addClass(o, null, "ui-state-active"), o.trigger("focus"), r = o.offset(), l = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
                left: 0,
                top: 0
            } : {
                left: e.pageX - r.left - o.width() / 2,
                top: e.pageY - r.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(e, a, n), this._animateOff = !0, !0))
        },
        _mouseStart: function () {
            return !0
        },
        _mouseDrag: function (t) {
            var e = {
                    x: t.pageX,
                    y: t.pageY
                },
                i = this._normValueFromMouse(e);
            return this._slide(t, this._handleIndex, i), !1
        },
        _mouseStop: function (t) {
            return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function () {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function (t) {
            var e, i, n, s, o;
            return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), n = i / e, n > 1 && (n = 1), 0 > n && (n = 0), "vertical" === this.orientation && (n = 1 - n), s = this._valueMax() - this._valueMin(), o = this._valueMin() + n * s, this._trimAlignValue(o)
        },
        _uiHash: function (t, e, i) {
            var n = {
                handle: this.handles[t],
                handleIndex: t,
                value: void 0 !== e ? e : this.value()
            };
            return this._hasMultipleValues() && (n.value = void 0 !== e ? e : this.values(t), n.values = i || this.values()), n
        },
        _hasMultipleValues: function () {
            return this.options.values && this.options.values.length
        },
        _start: function (t, e) {
            return this._trigger("start", t, this._uiHash(e))
        },
        _slide: function (t, e, i) {
            var n, s = this.value(),
                o = this.values();
            this._hasMultipleValues() && (n = this.values(e ? 0 : 1), s = this.values(e), 2 === this.options.values.length && !0 === this.options.range && (i = 0 === e ? Math.min(n, i) : Math.max(n, i)), o[e] = i), i !== s && !1 !== this._trigger("slide", t, this._uiHash(e, i, o)) && (this._hasMultipleValues() ? this.values(e, i) : this.value(i))
        },
        _stop: function (t, e) {
            this._trigger("stop", t, this._uiHash(e))
        },
        _change: function (t, e) {
            this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)))
        },
        value: function (t) {
            return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
        },
        values: function (e, i) {
            var n, s, o;
            if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, e);
            if (!arguments.length) return this._values();
            if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value();
            for (n = this.options.values, s = arguments[0], o = 0; n.length > o; o += 1) n[o] = this._trimAlignValue(s[o]), this._change(null, o);
            this._refreshValue()
        },
        _setOption: function (e, i) {
            var n, s = 0;
            switch ("range" === e && !0 === this.options.range && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (s = this.options.values.length), this._super(e, i), e) {
                case "orientation":
                    this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", "");
                    break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case "values":
                    for (this._animateOff = !0, this._refreshValue(), n = s - 1; n >= 0; n--) this._change(null, n);
                    this._animateOff = !1;
                    break;
                case "step":
                case "min":
                case "max":
                    this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _setOptionDisabled: function (t) {
            this._super(t), this._toggleClass(null, "ui-state-disabled", !!t)
        },
        _value: function () {
            var t = this.options.value;
            return t = this._trimAlignValue(t)
        },
        _values: function (t) {
            var e, i, n;
            if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
            if (this._hasMultipleValues()) {
                for (i = this.options.values.slice(), n = 0; i.length > n; n += 1) i[n] = this._trimAlignValue(i[n]);
                return i
            }
            return []
        },
        _trimAlignValue: function (t) {
            if (this._valueMin() >= t) return this._valueMin();
            if (t >= this._valueMax()) return this._valueMax();
            var e = this.options.step > 0 ? this.options.step : 1,
                i = (t - this._valueMin()) % e,
                n = t - i;
            return 2 * Math.abs(i) >= e && (n += i > 0 ? e : -e), parseFloat(n.toFixed(5))
        },
        _calculateNewMax: function () {
            var t = this.options.max,
                e = this._valueMin(),
                i = this.options.step;
            t = Math.round((t - e) / i) * i + e, t > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()))
        },
        _precision: function () {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
        },
        _precisionOf: function (t) {
            var e = "" + t,
                i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1
        },
        _valueMin: function () {
            return this.options.min
        },
        _valueMax: function () {
            return this.max
        },
        _refreshRange: function (t) {
            "vertical" === t && this.range.css({
                width: "",
                left: ""
            }), "horizontal" === t && this.range.css({
                height: "",
                bottom: ""
            })
        },
        _refreshValue: function () {
            var e, i, n, s, o, a = this.options.range,
                r = this.options,
                l = this,
                c = !this._animateOff && r.animate,
                h = {};
            this._hasMultipleValues() ? this.handles.each(function (n) {
                i = (l.values(n) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100,
                    h["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[c ? "animate" : "css"](h, r.animate), !0 === l.options.range && ("horizontal" === l.orientation ? (0 === n && l.range.stop(1, 1)[c ? "animate" : "css"]({
                        left: i + "%"
                    }, r.animate), 1 === n && l.range[c ? "animate" : "css"]({
                        width: i - e + "%"
                    }, {
                        queue: !1,
                        duration: r.animate
                    })) : (0 === n && l.range.stop(1, 1)[c ? "animate" : "css"]({
                        bottom: i + "%"
                    }, r.animate), 1 === n && l.range[c ? "animate" : "css"]({
                        height: i - e + "%"
                    }, {
                        queue: !1,
                        duration: r.animate
                    }))), e = i
            }) : (n = this.value(), s = this._valueMin(), o = this._valueMax(), i = o !== s ? (n - s) / (o - s) * 100 : 0, h["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[c ? "animate" : "css"](h, r.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                width: i + "%"
            }, r.animate), "max" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                width: 100 - i + "%"
            }, r.animate), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                height: i + "%"
            }, r.animate), "max" === a && "vertical" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                height: 100 - i + "%"
            }, r.animate))
        },
        _handleEvents: {
            keydown: function (e) {
                var i, n, s, o = t(e.target).data("ui-slider-handle-index");
                switch (e.keyCode) {
                    case t.ui.keyCode.HOME:
                    case t.ui.keyCode.END:
                    case t.ui.keyCode.PAGE_UP:
                    case t.ui.keyCode.PAGE_DOWN:
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), !1 === this._start(e, o))) return
                }
                switch (s = this.options.step, i = n = this._hasMultipleValues() ? this.values(o) : this.value(), e.keyCode) {
                    case t.ui.keyCode.HOME:
                        n = this._valueMin();
                        break;
                    case t.ui.keyCode.END:
                        n = this._valueMax();
                        break;
                    case t.ui.keyCode.PAGE_UP:
                        n = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case t.ui.keyCode.PAGE_DOWN:
                        n = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                        if (i === this._valueMax()) return;
                        n = this._trimAlignValue(i + s);
                        break;
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (i === this._valueMin()) return;
                        n = this._trimAlignValue(i - s)
                }
                this._slide(e, o, n)
            },
            keyup: function (e) {
                var i = t(e.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), this._removeClass(t(e.target), null, "ui-state-active"))
            }
        }
    }), t.widget("ui.sortable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function (t, e, i) {
            return t >= e && e + i > t
        },
        _isFloating: function (t) {
            return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
        },
        _create: function () {
            this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
        },
        _setOption: function (t, e) {
            this._super(t, e), "handle" === t && this._setHandleClassName()
        },
        _setHandleClassName: function () {
            var e = this;
            this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), t.each(this.items, function () {
                e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
            })
        },
        _destroy: function () {
            this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
            return this
        },
        _mouseCapture: function (e, i) {
            var n = null,
                s = !1,
                o = this;
            return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(e), t(e.target).parents().each(function () {
                return t.data(this, o.widgetName + "-item") === o ? (n = t(this), !1) : void 0
            }), t.data(e.target, o.widgetName + "-item") === o && (n = t(e.target)), !!n && (!(this.options.handle && !i && (t(this.options.handle, n).find("*").addBack().each(function () {
                this === e.target && (s = !0)
            }), !s)) && (this.currentItem = n, this._removeCurrentsFromItems(), !0))))
        },
        _mouseStart: function (e, i, n) {
            var s, o, a = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, t.extend(this.offset, {
                    click: {
                        left: e.pageX - this.offset.left,
                        top: e.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = {
                    prev: this.currentItem.prev()[0],
                    parent: this.currentItem.parent()[0]
                }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", a.cursor), this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)), a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !n)
                for (s = this.containers.length - 1; s >= 0; s--) this.containers[s]._trigger("activate", e, this._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(e), !0
        },
        _mouseDrag: function (e) {
            var i, n, s, o, a = this.options,
                r = !1;
            for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - this.document.scrollTop() < a.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - a.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < a.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + a.scrollSpeed)), e.pageX - this.document.scrollLeft() < a.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - a.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < a.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + a.scrollSpeed))), !1 !== r && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
                if (n = this.items[i], s = n.item[0], (o = this._intersectsWithPointer(n)) && n.instance === this.currentContainer && s !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== s && !t.contains(this.placeholder[0], s) && ("semi-dynamic" !== this.options.type || !t.contains(this.element[0], s))) {
                    if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(n)) break;
                    this._rearrange(e, n), this._trigger("change", e, this._uiHash());
                    break
                } return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function (e, i) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                    var n = this,
                        s = this.placeholder.offset(),
                        o = this.options.axis,
                        a = {};
                    o && "x" !== o || (a.left = s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (a.top = s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function () {
                        n._clear(e)
                    })
                } else this._clear(e, i);
                return !1
            }
        },
        cancel: function () {
            if (this.dragging) {
                this._mouseUp(new t.Event("mouseup", {
                    target: null
                })), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
                for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function (e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                n = [];
            return e = e || {}, t(i).each(function () {
                var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                i && n.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
            }), !n.length && e.key && n.push(e.key + "="), n.join("&")
        },
        toArray: function (e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                n = [];
            return e = e || {}, i.each(function () {
                n.push(t(e.item || this).attr(e.attribute || "id") || "")
            }), n
        },
        _intersectsWith: function (t) {
            var e = this.positionAbs.left,
                i = e + this.helperProportions.width,
                n = this.positionAbs.top,
                s = n + this.helperProportions.height,
                o = t.left,
                a = o + t.width,
                r = t.top,
                l = r + t.height,
                c = this.offset.click.top,
                h = this.offset.click.left,
                u = "x" === this.options.axis || n + c > r && l > n + c,
                d = "y" === this.options.axis || e + h > o && a > e + h,
                p = u && d;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > o && a > i - this.helperProportions.width / 2 && n + this.helperProportions.height / 2 > r && l > s - this.helperProportions.height / 2
        },
        _intersectsWithPointer: function (t) {
            var e, i, n = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                s = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width);
            return !(!n || !s) && (e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1))
        },
        _intersectsWithSides: function (t) {
            var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                n = this._getDragVerticalDirection(),
                s = this._getDragHorizontalDirection();
            return this.floating && s ? "right" === s && i || "left" === s && !i : n && ("down" === n && e || "up" === n && !e)
        },
        _getDragVerticalDirection: function () {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== t && (t > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function () {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== t && (t > 0 ? "right" : "left")
        },
        refresh: function (t) {
            return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this
        },
        _connectWith: function () {
            var t = this.options;
            return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
        },
        _getItemsAsjQuery: function (e) {
            function i() {
                r.push(this)
            }
            var n, s, o, a, r = [],
                l = [],
                c = this._connectWith();
            if (c && e)
                for (n = c.length - 1; n >= 0; n--)
                    for (o = t(c[n], this.document[0]), s = o.length - 1; s >= 0; s--)(a = t.data(o[s], this.widgetFullName)) && a !== this && !a.options.disabled && l.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
            for (l.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem
                }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), n = l.length - 1; n >= 0; n--) l[n][0].each(i);
            return t(r)
        },
        _removeCurrentsFromItems: function () {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items, function (t) {
                for (var i = 0; e.length > i; i++)
                    if (e[i] === t.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function (e) {
            this.items = [], this.containers = [this];
            var i, n, s, o, a, r, l, c, h = this.items,
                u = [
                    [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                        item: this.currentItem
                    }) : t(this.options.items, this.element), this]
                ],
                d = this._connectWith();
            if (d && this.ready)
                for (i = d.length - 1; i >= 0; i--)
                    for (s = t(d[i], this.document[0]), n = s.length - 1; n >= 0; n--)(o = t.data(s[n], this.widgetFullName)) && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
                        item: this.currentItem
                    }) : t(o.options.items, o.element), o]), this.containers.push(o));
            for (i = u.length - 1; i >= 0; i--)
                for (a = u[i][1], r = u[i][0], n = 0, c = r.length; c > n; n++) l = t(r[n]), l.data(this.widgetName + "-item", a), h.push({
                    item: l,
                    instance: a,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                })
        },
        refreshPositions: function (e) {
            this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var i, n, s, o;
            for (i = this.items.length - 1; i >= 0; i--) n = this.items[i], n.instance !== this.currentContainer && this.currentContainer && n.item[0] !== this.currentItem[0] || (s = this.options.toleranceElement ? t(this.options.toleranceElement, n.item) : n.item, e || (n.width = s.outerWidth(), n.height = s.outerHeight()), o = s.offset(), n.left = o.left, n.top = o.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function (e) {
            e = e || this;
            var i, n = e.options;
            n.placeholder && n.placeholder.constructor !== String || (i = n.placeholder, n.placeholder = {
                element: function () {
                    var n = e.currentItem[0].nodeName.toLowerCase(),
                        s = t("<" + n + ">", e.document[0]);
                    return e._addClass(s, "ui-sortable-placeholder", i || e.currentItem[0].className)._removeClass(s, "ui-sortable-helper"), "tbody" === n ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(s)) : "tr" === n ? e._createTrPlaceholder(e.currentItem, s) : "img" === n && s.attr("src", e.currentItem.attr("src")), i || s.css("visibility", "hidden"), s
                },
                update: function (t, s) {
                    (!i || n.forcePlaceholderSize) && (s.height() || s.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), s.width() || s.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                }
            }), e.placeholder = t(n.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), n.placeholder.update(e, e.placeholder)
        },
        _createTrPlaceholder: function (e, i) {
            var n = this;
            e.children().each(function () {
                t("<td>&#160;</td>", n.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i)
            })
        },
        _contactContainers: function (e) {
            var i, n, s, o, a, r, l, c, h, u, d = null,
                p = null;
            for (i = this.containers.length - 1; i >= 0; i--)
                if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
                    if (this._intersectsWith(this.containers[i].containerCache)) {
                        if (d && t.contains(this.containers[i].element[0], d.element[0])) continue;
                        d = this.containers[i], p = i
                    } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), this.containers[i].containerCache.over = 0);
            if (d)
                if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1);
                else {
                    for (s = 1e4, o = null, h = d.floating || this._isFloating(this.currentItem), a = h ? "left" : "top", r = h ? "width" : "height", u = h ? "pageX" : "pageY", n = this.items.length - 1; n >= 0; n--) t.contains(this.containers[p].element[0], this.items[n].item[0]) && this.items[n].item[0] !== this.currentItem[0] && (l = this.items[n].item.offset()[a], c = !1, e[u] - l > this.items[n][r] / 2 && (c = !0), s > Math.abs(e[u] - l) && (s = Math.abs(e[u] - l), o = this.items[n], this.direction = c ? "up" : "down"));
                    if (!o && !this.options.dropOnEmpty) return;
                    if (this.currentContainer === this.containers[p]) return void(this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1));
                    o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[p].element, !0), this._trigger("change", e, this._uiHash()), this.containers[p]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1
                }
        },
        _createHelper: function (e) {
            var i = this.options,
                n = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return n.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(n[0]), n[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!n[0].style.width || i.forceHelperSize) && n.width(this.currentItem.width()), (!n[0].style.height || i.forceHelperSize) && n.height(this.currentItem.height()), n
        },
        _adjustOffsetFromHelper: function (e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if ("relative" === this.cssPosition) {
                var t = this.currentItem.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function () {
            var e, i, n, s = this.options;
            "parent" === s.containment && (s.containment = this.helper[0].parentNode), ("document" === s.containment || "window" === s.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === s.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === s.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(s.containment) || (e = t(s.containment)[0], i = t(s.containment).offset(), n = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (n ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (n ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function (e, i) {
            i || (i = this.position);
            var n = "absolute" === e ? 1 : -1,
                s = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                o = /(html|body)/i.test(s[0].tagName);
            return {
                top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * n,
                left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * n
            }
        },
        _generatePosition: function (e) {
            var i, n, s = this.options,
                o = e.pageX,
                a = e.pageY,
                r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                l = /(html|body)/i.test(r[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), s.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / s.grid[1]) * s.grid[1], a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - s.grid[1] : i + s.grid[1] : i, n = this.originalPageX + Math.round((o - this.originalPageX) / s.grid[0]) * s.grid[0], o = this.containment ? n - this.offset.click.left >= this.containment[0] && n - this.offset.click.left <= this.containment[2] ? n : n - this.offset.click.left >= this.containment[0] ? n - s.grid[0] : n + s.grid[0] : n)), {
                top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : r.scrollTop()),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : r.scrollLeft())
            }
        },
        _rearrange: function (t, e, i, n) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var s = this.counter;
            this._delay(function () {
                s === this.counter && this.refreshPositions(!n)
            })
        },
        _clear: function (t, e) {
            function i(t, e, i) {
                return function (n) {
                    i._trigger(t, n, e._uiHash(e))
                }
            }
            this.reverting = !1;
            var n, s = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (n in this._storedCSS)("auto" === this._storedCSS[n] || "static" === this._storedCSS[n]) && (this._storedCSS[n] = "");
                this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")
            } else this.currentItem.show();
            for (this.fromOutside && !e && s.push(function (t) {
                    this._trigger("receive", t, this._uiHash(this.fromOutside))
                }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push(function (t) {
                    this._trigger("update", t, this._uiHash())
                }), this !== this.currentContainer && (e || (s.push(function (t) {
                    this._trigger("remove", t, this._uiHash())
                }), s.push(function (t) {
                    return function (e) {
                        t._trigger("receive", e, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)), s.push(function (t) {
                    return function (e) {
                        t._trigger("update", e, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)))), n = this.containers.length - 1; n >= 0; n--) e || s.push(i("deactivate", this, this.containers[n])), this.containers[n].containerCache.over && (s.push(i("out", this, this.containers[n])), this.containers[n].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
                for (n = 0; s.length > n; n++) s[n].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1, !this.cancelHelperRemoval
        },
        _trigger: function () {
            !1 === t.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
        },
        _uiHash: function (e) {
            var i = e || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || t([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: e ? e.element : null
            }
        }
    }), t.widget("ui.spinner", {
        version: "1.12.1",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            classes: {
                "ui-spinner": "ui-corner-all",
                "ui-spinner-down": "ui-corner-br",
                "ui-spinner-up": "ui-corner-tr"
            },
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function () {
            this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                beforeunload: function () {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function () {
            var e = this._super(),
                i = this.element;
            return t.each(["min", "max", "step"], function (t, n) {
                var s = i.attr(n);
                null != s && s.length && (e[n] = s)
            }), e
        },
        _events: {
            keydown: function (t) {
                this._start(t) && this._keydown(t) && t.preventDefault()
            },
            keyup: "_stop",
            focus: function () {
                this.previous = this.element.val()
            },
            blur: function (t) {
                return this.cancelBlur ? void delete this.cancelBlur : (this._stop(), this._refresh(), void(this.previous !== this.element.val() && this._trigger("change", t)))
            },
            mousewheel: function (t, e) {
                if (e) {
                    if (!this.spinning && !this._start(t)) return !1;
                    this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () {
                        this.spinning && this._stop(t)
                    }, 100), t.preventDefault()
                }
            },
            "mousedown .ui-spinner-button": function (e) {
                function i() {
                    this.element[0] === t.ui.safeActiveElement(this.document[0]) || (this.element.trigger("focus"), this.previous = n, this._delay(function () {
                        this.previous = n
                    }))
                }
                var n;
                n = this.element[0] === t.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function () {
                    delete this.cancelBlur, i.call(this)
                }), !1 !== this._start(e) && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function (e) {
                return t(e.currentTarget).hasClass("ui-state-active") ? !1 !== this._start(e) && void this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e) : void 0
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _enhance: function () {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>")
        },
        _draw: function () {
            this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({
                classes: {
                    "ui-button": ""
                }
            }), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({
                icon: this.options.icons.up,
                showLabel: !1
            }), this.buttons.last().button({
                icon: this.options.icons.down,
                showLabel: !1
            }), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height())
        },
        _keydown: function (e) {
            var i = this.options,
                n = t.ui.keyCode;
            switch (e.keyCode) {
                case n.UP:
                    return this._repeat(null, 1, e), !0;
                case n.DOWN:
                    return this._repeat(null, -1, e), !0;
                case n.PAGE_UP:
                    return this._repeat(null, i.page, e), !0;
                case n.PAGE_DOWN:
                    return this._repeat(null, -i.page, e), !0
            }
            return !1
        },
        _start: function (t) {
            return !(!this.spinning && !1 === this._trigger("start", t)) && (this.counter || (this.counter = 1), this.spinning = !0, !0)
        },
        _repeat: function (t, e, i) {
            t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function () {
                this._repeat(40, e, i)
            }, t), this._spin(e * this.options.step, i)
        },
        _spin: function (t, e) {
            var i = this.value() || 0;
            this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && !1 === this._trigger("spin", e, {
                value: i
            }) || (this._value(i), this.counter++)
        },
        _increment: function (e) {
            var i = this.options.incremental;
            return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
        },
        _precision: function () {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
        },
        _precisionOf: function (t) {
            var e = "" + t,
                i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1
        },
        _adjustValue: function (t) {
            var e, i, n = this.options;
            return e = null !== n.min ? n.min : 0, i = t - e, i = Math.round(i / n.step) * n.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== n.max && t > n.max ? n.max : null !== n.min && n.min > t ? n.min : t
        },
        _stop: function (t) {
            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
        },
        _setOption: function (t, e) {
            var i, n, s;
            return "culture" === t || "numberFormat" === t ? (i = this._parse(this.element.val()), this.options[t] = e, void this.element.val(this._format(i))) : (("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (n = this.buttons.first().find(".ui-icon"), this._removeClass(n, null, this.options.icons.up), this._addClass(n, null, e.up),
                s = this.buttons.last().find(".ui-icon"), this._removeClass(s, null, this.options.icons.down), this._addClass(s, null, e.down)), void this._super(t, e))
        },
        _setOptionDisabled: function (t) {
            this._super(t), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable")
        },
        _setOptions: r(function (t) {
            this._super(t)
        }),
        _parse: function (t) {
            return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
        },
        _format: function (t) {
            return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
        },
        _refresh: function () {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        isValid: function () {
            var t = this.value();
            return null !== t && t === this._adjustValue(t)
        },
        _value: function (t, e) {
            var i;
            "" !== t && null !== (i = this._parse(t)) && (e || (i = this._adjustValue(i)), t = this._format(i)), this.element.val(t), this._refresh()
        },
        _destroy: function () {
            this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), this.uiSpinner.replaceWith(this.element)
        },
        stepUp: r(function (t) {
            this._stepUp(t)
        }),
        _stepUp: function (t) {
            this._start() && (this._spin((t || 1) * this.options.step), this._stop())
        },
        stepDown: r(function (t) {
            this._stepDown(t)
        }),
        _stepDown: function (t) {
            this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
        },
        pageUp: r(function (t) {
            this._stepUp((t || 1) * this.options.page)
        }),
        pageDown: r(function (t) {
            this._stepDown((t || 1) * this.options.page)
        }),
        value: function (t) {
            return arguments.length ? void r(this._value).call(this, t) : this._parse(this.element.val())
        },
        widget: function () {
            return this.uiSpinner
        }
    }), !1 !== t.uiBackCompat && t.widget("ui.spinner", t.ui.spinner, {
        _enhance: function () {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
        },
        _uiSpinnerHtml: function () {
            return "<span>"
        },
        _buttonHtml: function () {
            return "<a></a><a></a>"
        }
    }), t.ui.spinner, t.widget("ui.tabs", {
        version: "1.12.1",
        delay: 300,
        options: {
            active: null,
            classes: {
                "ui-tabs": "ui-corner-all",
                "ui-tabs-nav": "ui-corner-all",
                "ui-tabs-panel": "ui-corner-bottom",
                "ui-tabs-tab": "ui-corner-top"
            },
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: function () {
            var t = /#.*$/;
            return function (e) {
                var i, n;
                i = e.href.replace(t, ""), n = location.href.replace(t, "");
                try {
                    i = decodeURIComponent(i)
                } catch (t) {}
                try {
                    n = decodeURIComponent(n)
                } catch (t) {}
                return e.hash.length > 1 && i === n
            }
        }(),
        _create: function () {
            var e = this,
                i = this.options;
            this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function (t) {
                return e.tabs.index(t)
            }))).sort()), this.active = !1 !== this.options.active && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active)
        },
        _initialActive: function () {
            var e = this.options.active,
                i = this.options.collapsible,
                n = location.hash.substring(1);
            return null === e && (n && this.tabs.each(function (i, s) {
                return t(s).attr("aria-controls") === n ? (e = i, !1) : void 0
            }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = !!this.tabs.length && 0)), !1 !== e && -1 === (e = this.tabs.index(this.tabs.eq(e))) && (e = !i && 0), !i && !1 === e && this.anchors.length && (e = 0), e
        },
        _getCreateEventData: function () {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : t()
            }
        },
        _tabKeydown: function (e) {
            var i = t(t.ui.safeActiveElement(this.document[0])).closest("li"),
                n = this.tabs.index(i),
                s = !0;
            if (!this._handlePageNav(e)) {
                switch (e.keyCode) {
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                        n++;
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.LEFT:
                        s = !1, n--;
                        break;
                    case t.ui.keyCode.END:
                        n = this.anchors.length - 1;
                        break;
                    case t.ui.keyCode.HOME:
                        n = 0;
                        break;
                    case t.ui.keyCode.SPACE:
                        return e.preventDefault(), clearTimeout(this.activating), void this._activate(n);
                    case t.ui.keyCode.ENTER:
                        return e.preventDefault(), clearTimeout(this.activating), void this._activate(n !== this.options.active && n);
                    default:
                        return
                }
                e.preventDefault(), clearTimeout(this.activating), n = this._focusNextTab(n, s), e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function () {
                    this.option("active", n)
                }, this.delay))
            }
        },
        _panelKeydown: function (e) {
            this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.trigger("focus"))
        },
        _handlePageNav: function (e) {
            return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
        },
        _findNextTab: function (e, i) {
            for (var n = this.tabs.length - 1; - 1 !== t.inArray(function () {
                    return e > n && (e = 0), 0 > e && (e = n), e
                }(), this.options.disabled);) e = i ? e + 1 : e - 1;
            return e
        },
        _focusNextTab: function (t, e) {
            return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t
        },
        _setOption: function (t, e) {
            return "active" === t ? void this._activate(e) : (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || !1 !== this.options.active || this._activate(0)), "event" === t && this._setupEvents(e), void("heightStyle" === t && this._setupHeightStyle(e)))
        },
        _sanitizeSelector: function (t) {
            return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function () {
            var e = this.options,
                i = this.tablist.children(":has(a[href])");
            e.disabled = t.map(i.filter(".ui-state-disabled"), function (t) {
                return i.index(t)
            }), this._processTabs(), !1 !== e.active && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
        },
        _refresh: function () {
            this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-hidden": "true"
            }), this.active.length ? (this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function () {
            var e = this,
                i = this.tabs,
                n = this.anchors,
                s = this.panels;
            this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function (e) {
                t(this).is(".ui-state-disabled") && e.preventDefault()
            }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function () {
                t(this).closest("li").is(".ui-state-disabled") && this.blur()
            }), this.tabs = this.tablist.find("> li:has(a[href])").attr({
                role: "tab",
                tabIndex: -1
            }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function () {
                return t("a", this)[0]
            }).attr({
                role: "presentation",
                tabIndex: -1
            }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = t(), this.anchors.each(function (i, n) {
                var s, o, a, r = t(n).uniqueId().attr("id"),
                    l = t(n).closest("li"),
                    c = l.attr("aria-controls");
                e._isLocal(n) ? (s = n.hash, a = s.substring(1), o = e.element.find(e._sanitizeSelector(s))) : (a = l.attr("aria-controls") || t({}).uniqueId()[0].id, s = "#" + a, o = e.element.find(s), o.length || (o = e._createPanel(a), o.insertAfter(e.panels[i - 1] || e.tablist)), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), c && l.data("ui-tabs-aria-controls", c), l.attr({
                    "aria-controls": a,
                    "aria-labelledby": r
                }), o.attr("aria-labelledby", r)
            }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), i && (this._off(i.not(this.tabs)), this._off(n.not(this.anchors)), this._off(s.not(this.panels)))
        },
        _getList: function () {
            return this.tablist || this.element.find("ol, ul").eq(0)
        },
        _createPanel: function (e) {
            return t("<div>").attr("id", e).data("ui-tabs-destroy", !0)
        },
        _setOptionDisabled: function (e) {
            var i, n, s;
            for (t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1), s = 0; n = this.tabs[s]; s++) i = t(n), !0 === e || -1 !== t.inArray(s, e) ? (i.attr("aria-disabled", "true"), this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), this._removeClass(i, null, "ui-state-disabled"));
            this.options.disabled = e, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !0 === e)
        },
        _setupEvents: function (e) {
            var i = {};
            e && t.each(e.split(" "), function (t, e) {
                i[e] = "_eventHandler"
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                click: function (t) {
                    t.preventDefault()
                }
            }), this._on(this.anchors, i), this._on(this.tabs, {
                keydown: "_tabKeydown"
            }), this._on(this.panels, {
                keydown: "_panelKeydown"
            }), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function (e) {
            var i, n = this.element.parent();
            "fill" === e ? (i = n.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
                var e = t(this),
                    n = e.css("position");
                "absolute" !== n && "fixed" !== n && (i -= e.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function () {
                i -= t(this).outerHeight(!0)
            }), this.panels.each(function () {
                t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
            }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function () {
                i = Math.max(i, t(this).height("").height())
            }).height(i))
        },
        _eventHandler: function (e) {
            var i = this.options,
                n = this.active,
                s = t(e.currentTarget),
                o = s.closest("li"),
                a = o[0] === n[0],
                r = a && i.collapsible,
                l = r ? t() : this._getPanelForTab(o),
                c = n.length ? this._getPanelForTab(n) : t(),
                h = {
                    oldTab: n,
                    oldPanel: c,
                    newTab: r ? t() : o,
                    newPanel: l
                };
            e.preventDefault(), o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || a && !i.collapsible || !1 === this._trigger("beforeActivate", e, h) || (i.active = !r && this.tabs.index(o), this.active = a ? t() : o, this.xhr && this.xhr.abort(), c.length || l.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), l.length && this.load(this.tabs.index(o), e), this._toggle(e, h))
        },
        _toggle: function (e, i) {
            function n() {
                o.running = !1, o._trigger("activate", e, i)
            }

            function s() {
                o._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), a.length && o.options.show ? o._show(a, o.options.show, n) : (a.show(), n())
            }
            var o = this,
                a = i.newPanel,
                r = i.oldPanel;
            this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function () {
                o._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), s()
            }) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), r.hide(), s()), r.attr("aria-hidden", "true"), i.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), a.length && r.length ? i.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function () {
                return 0 === t(this).attr("tabIndex")
            }).attr("tabIndex", -1), a.attr("aria-hidden", "false"), i.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _activate: function (e) {
            var i, n = this._findActive(e);
            n[0] !== this.active[0] && (n.length || (n = this.active), i = n.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }))
        },
        _findActive: function (e) {
            return !1 === e ? t() : this.tabs.eq(e)
        },
        _getIndex: function (e) {
            return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']"))), e
        },
        _destroy: function () {
            this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function () {
                t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
            }), this.tabs.each(function () {
                var e = t(this),
                    i = e.data("ui-tabs-aria-controls");
                i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function (e) {
            var i = this.options.disabled;
            !1 !== i && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, function (t) {
                return t !== e ? t : null
            }) : t.map(this.tabs, function (t, i) {
                return i !== e ? i : null
            })), this._setOptionDisabled(i))
        },
        disable: function (e) {
            var i = this.options.disabled;
            if (!0 !== i) {
                if (void 0 === e) i = !0;
                else {
                    if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;
                    i = t.isArray(i) ? t.merge([e], i).sort() : [e]
                }
                this._setOptionDisabled(i)
            }
        },
        load: function (e, i) {
            e = this._getIndex(e);
            var n = this,
                s = this.tabs.eq(e),
                o = s.find(".ui-tabs-anchor"),
                a = this._getPanelForTab(s),
                r = {
                    tab: s,
                    panel: a
                },
                l = function (t, e) {
                    "abort" === e && n.panels.stop(!1, !0), n._removeClass(s, "ui-tabs-loading"), a.removeAttr("aria-busy"), t === n.xhr && delete n.xhr
                };
            this._isLocal(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(s, "ui-tabs-loading"), a.attr("aria-busy", "true"), this.xhr.done(function (t, e, s) {
                setTimeout(function () {
                    a.html(t), n._trigger("load", i, r), l(s, e)
                }, 1)
            }).fail(function (t, e) {
                setTimeout(function () {
                    l(t, e)
                }, 1)
            })))
        },
        _ajaxSettings: function (e, i, n) {
            var s = this;
            return {
                url: e.attr("href").replace(/#.*$/, ""),
                beforeSend: function (e, o) {
                    return s._trigger("beforeLoad", i, t.extend({
                        jqXHR: e,
                        ajaxSettings: o
                    }, n))
                }
            }
        },
        _getPanelForTab: function (e) {
            var i = t(e).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + i))
        }
    }), !1 !== t.uiBackCompat && t.widget("ui.tabs", t.ui.tabs, {
        _processTabs: function () {
            this._superApply(arguments), this._addClass(this.tabs, "ui-tab")
        }
    }), t.ui.tabs, t.widget("ui.tooltip", {
        version: "1.12.1",
        options: {
            classes: {
                "ui-tooltip": "ui-corner-all ui-widget-shadow"
            },
            content: function () {
                var e = t(this).attr("title") || "";
                return t("<a>").text(e).html()
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: !0,
            track: !1,
            close: null,
            open: null
        },
        _addDescribedBy: function (e, i) {
            var n = (e.attr("aria-describedby") || "").split(/\s+/);
            n.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(n.join(" ")))
        },
        _removeDescribedBy: function (e) {
            var i = e.data("ui-tooltip-id"),
                n = (e.attr("aria-describedby") || "").split(/\s+/),
                s = t.inArray(i, n); - 1 !== s && n.splice(s, 1), e.removeData("ui-tooltip-id"), n = t.trim(n.join(" ")), n ? e.attr("aria-describedby", n) : e.removeAttr("aria-describedby")
        },
        _create: function () {
            this._on({
                mouseover: "open",
                focusin: "open"
            }), this.tooltips = {}, this.parents = {}, this.liveRegion = t("<div>").attr({
                role: "log",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this.disabledTitles = t([])
        },
        _setOption: function (e, i) {
            var n = this;
            this._super(e, i), "content" === e && t.each(this.tooltips, function (t, e) {
                n._updateContent(e.element)
            })
        },
        _setOptionDisabled: function (t) {
            this[t ? "_disable" : "_enable"]()
        },
        _disable: function () {
            var e = this;
            t.each(this.tooltips, function (i, n) {
                var s = t.Event("blur");
                s.target = s.currentTarget = n.element[0], e.close(s, !0)
            }), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function () {
                var e = t(this);
                return e.is("[title]") ? e.data("ui-tooltip-title", e.attr("title")).removeAttr("title") : void 0
            }))
        },
        _enable: function () {
            this.disabledTitles.each(function () {
                var e = t(this);
                e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
            }), this.disabledTitles = t([])
        },
        open: function (e) {
            var i = this,
                n = t(e ? e.target : this.element).closest(this.options.items);
            n.length && !n.data("ui-tooltip-id") && (n.attr("title") && n.data("ui-tooltip-title", n.attr("title")), n.data("ui-tooltip-open", !0), e && "mouseover" === e.type && n.parents().each(function () {
                var e, n = t(this);
                n.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, !0)), n.attr("title") && (n.uniqueId(), i.parents[this.id] = {
                    element: this,
                    title: n.attr("title")
                }, n.attr("title", ""))
            }), this._registerCloseHandlers(e, n), this._updateContent(n, e))
        },
        _updateContent: function (t, e) {
            var i, n = this.options.content,
                s = this,
                o = e ? e.type : null;
            return "string" == typeof n || n.nodeType || n.jquery ? this._open(e, t, n) : void((i = n.call(t[0], function (i) {
                s._delay(function () {
                    t.data("ui-tooltip-open") && (e && (e.type = o), this._open(e, t, i))
                })
            })) && this._open(e, t, i))
        },
        _open: function (e, i, n) {
            function s(t) {
                c.of = t, a.is(":hidden") || a.position(c)
            }
            var o, a, r, l, c = t.extend({}, this.options.position);
            if (n) {
                if (o = this._find(i)) return void o.tooltip.find(".ui-tooltip-content").html(n);
                i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")), o = this._tooltip(i), a = o.tooltip, this._addDescribedBy(i, a.attr("id")), a.find(".ui-tooltip-content").html(n), this.liveRegion.children().hide(), l = t("<div>").html(a.find(".ui-tooltip-content").html()), l.removeAttr("name").find("[name]").removeAttr("name"), l.removeAttr("id").find("[id]").removeAttr("id"), l.appendTo(this.liveRegion), this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, {
                    mousemove: s
                }), s(e)) : a.position(t.extend({
                    of: i
                }, this.options.position)), a.hide(), this._show(a, this.options.show), this.options.track && this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function () {
                    a.is(":visible") && (s(c.of), clearInterval(r))
                }, t.fx.interval)), this._trigger("open", e, {
                    tooltip: a
                })
            }
        },
        _registerCloseHandlers: function (e, i) {
            var n = {
                keyup: function (e) {
                    if (e.keyCode === t.ui.keyCode.ESCAPE) {
                        var n = t.Event(e);
                        n.currentTarget = i[0], this.close(n, !0)
                    }
                }
            };
            i[0] !== this.element[0] && (n.remove = function () {
                this._removeTooltip(this._find(i).tooltip)
            }), e && "mouseover" !== e.type || (n.mouseleave = "close"), e && "focusin" !== e.type || (n.focusout = "close"), this._on(!0, i, n)
        },
        close: function (e) {
            var i, n = this,
                s = t(e ? e.currentTarget : this.element),
                o = this._find(s);
            return o ? (i = o.tooltip, void(o.closing || (clearInterval(this.delayedShow), s.data("ui-tooltip-title") && !s.attr("title") && s.attr("title", s.data("ui-tooltip-title")), this._removeDescribedBy(s), o.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function () {
                n._removeTooltip(t(this))
            }), s.removeData("ui-tooltip-open"), this._off(s, "mouseleave focusout keyup"), s[0] !== this.element[0] && this._off(s, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function (e, i) {
                t(i.element).attr("title", i.title), delete n.parents[e]
            }), o.closing = !0, this._trigger("close", e, {
                tooltip: i
            }), o.hiding || (o.closing = !1)))) : void s.removeData("ui-tooltip-open")
        },
        _tooltip: function (e) {
            var i = t("<div>").attr("role", "tooltip"),
                n = t("<div>").appendTo(i),
                s = i.uniqueId().attr("id");
            return this._addClass(n, "ui-tooltip-content"), this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"), i.appendTo(this._appendTo(e)), this.tooltips[s] = {
                element: e,
                tooltip: i
            }
        },
        _find: function (t) {
            var e = t.data("ui-tooltip-id");
            return e ? this.tooltips[e] : null
        },
        _removeTooltip: function (t) {
            t.remove(), delete this.tooltips[t.attr("id")]
        },
        _appendTo: function (t) {
            var e = t.closest(".ui-front, dialog");
            return e.length || (e = this.document[0].body), e
        },
        _destroy: function () {
            var e = this;
            t.each(this.tooltips, function (i, n) {
                var s = t.Event("blur"),
                    o = n.element;
                s.target = s.currentTarget = o[0], e.close(s, !0), t("#" + i).remove(), o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")), o.removeData("ui-tooltip-title"))
            }), this.liveRegion.remove()
        }
    }), !1 !== t.uiBackCompat && t.widget("ui.tooltip", t.ui.tooltip, {
        options: {
            tooltipClass: null
        },
        _tooltip: function () {
            var t = this._superApply(arguments);
            return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), t
        }
    }), t.ui.tooltip
}),
function (t, e, i) {
    function n(t, e, i) {
        t.addEventListener ? t.addEventListener(e, i, !1) : t.attachEvent("on" + e, i)
    }

    function s(t) {
        if ("keypress" == t.type) {
            var e = String.fromCharCode(t.which);
            return t.shiftKey || (e = e.toLowerCase()), e
        }
        return u[t.which] ? u[t.which] : d[t.which] ? d[t.which] : String.fromCharCode(t.which).toLowerCase()
    }

    function o(t) {
        var e = [];
        return t.shiftKey && e.push("shift"), t.altKey && e.push("alt"), t.ctrlKey && e.push("ctrl"), t.metaKey && e.push("meta"), e
    }

    function a(t) {
        return "shift" == t || "ctrl" == t || "alt" == t || "meta" == t
    }

    function r(t, e) {
        var i, n, s, o = [];
        for (i = t, "+" === i ? i = ["+"] : (i = i.replace(/\+{2}/g, "+plus"), i = i.split("+")), s = 0; s < i.length; ++s) n = i[s], f[n] && (n = f[n]), e && "keypress" != e && p[n] && (n = p[n], o.push("shift")), a(n) && o.push(n);
        if (i = n, !(s = e)) {
            if (!h) {
                h = {};
                for (var r in u) 95 < r && 112 > r || u.hasOwnProperty(r) && (h[u[r]] = r)
            }
            s = h[i] ? "keydown" : "keypress"
        }
        return "keypress" == s && o.length && (s = "keydown"), {
            key: n,
            modifiers: o,
            action: s
        }
    }

    function l(t, i) {
        return null !== t && t !== e && (t === i || l(t.parentNode, i))
    }

    function c(t) {
        function i(t) {
            t = t || {};
            var e, i = !1;
            for (e in g) t[e] ? i = !0 : g[e] = 0;
            i || (_ = !1)
        }

        function l(t, e, i, n, s, o) {
            var r, l, c = [],
                h = i.type;
            if (!f._callbacks[t]) return [];
            for ("keyup" == h && a(t) && (e = [t]), r = 0; r < f._callbacks[t].length; ++r)
                if (l = f._callbacks[t][r], (n || !l.seq || g[l.seq] == l.level) && h == l.action) {
                    var u;
                    (u = "keypress" == h && !i.metaKey && !i.ctrlKey) || (u = l.modifiers, u = e.sort().join(",") === u.sort().join(",")), u && (u = n && l.seq == n && l.level == o, (!n && l.combo == s || u) && f._callbacks[t].splice(r, 1), c.push(l))
                } return c
        }

        function h(t, e, i, n) {
            f.stopCallback(e, e.target || e.srcElement, i, n) || !1 !== t(e, i) || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0)
        }

        function u(t) {
            "number" != typeof t.which && (t.which = t.keyCode);
            var e = s(t);
            e && ("keyup" == t.type && b === e ? b = !1 : f.handleKey(e, o(t), t))
        }

        function d(t, e, n, o) {
            function a(e) {
                h(n, e, t), "keyup" !== o && (b = s(e)), setTimeout(i, 10)
            }
            for (var l = g[t] = 0; l < e.length; ++l) {
                var c = l + 1 === e.length ? a : function (e) {
                    return function () {
                        _ = e, ++g[t], clearTimeout(m), m = setTimeout(i, 1e3)
                    }
                }(o || r(e[l + 1]).action);
                p(e[l], c, o, t, l)
            }
        }

        function p(t, e, i, n, s) {
            f._directMap[t + ":" + i] = e, t = t.replace(/\s+/g, " ");
            var o = t.split(" ");
            1 < o.length ? d(t, o, e, i) : (i = r(t, i), f._callbacks[i.key] = f._callbacks[i.key] || [], l(i.key, i.modifiers, {
                type: i.action
            }, n, t, s), f._callbacks[i.key][n ? "unshift" : "push"]({
                callback: e,
                modifiers: i.modifiers,
                action: i.action,
                seq: n,
                level: s,
                combo: t
            }))
        }
        var f = this;
        if (t = t || e, !(f instanceof c)) return new c(t);
        f.target = t, f._callbacks = {}, f._directMap = {};
        var m, g = {},
            b = !1,
            v = !1,
            _ = !1;
        f._handleKey = function (t, e, n) {
            var s, o = l(t, e, n);
            e = {};
            var r = 0,
                c = !1;
            for (s = 0; s < o.length; ++s) o[s].seq && (r = Math.max(r, o[s].level));
            for (s = 0; s < o.length; ++s) o[s].seq ? o[s].level == r && (c = !0, e[o[s].seq] = 1, h(o[s].callback, n, o[s].combo, o[s].seq)) : c || h(o[s].callback, n, o[s].combo);
            o = "keypress" == n.type && v, n.type != _ || a(t) || o || i(e), v = c && "keydown" == n.type
        }, f._bindMultiple = function (t, e, i) {
            for (var n = 0; n < t.length; ++n) p(t[n], e, i)
        }, n(t, "keypress", u), n(t, "keydown", u), n(t, "keyup", u)
    }
    if (t) {
        var h, u = {
                8: "backspace",
                9: "tab",
                13: "enter",
                16: "shift",
                17: "ctrl",
                18: "alt",
                20: "capslock",
                27: "esc",
                32: "space",
                33: "pageup",
                34: "pagedown",
                35: "end",
                36: "home",
                37: "left",
                38: "up",
                39: "right",
                40: "down",
                45: "ins",
                46: "del",
                91: "meta",
                93: "meta",
                224: "meta"
            },
            d = {
                106: "*",
                107: "+",
                109: "-",
                110: ".",
                111: "/",
                186: ";",
                187: "=",
                188: ",",
                189: "-",
                190: ".",
                191: "/",
                192: "`",
                219: "[",
                220: "\\",
                221: "]",
                222: "'"
            },
            p = {
                "~": "`",
                "!": "1",
                "@": "2",
                "#": "3",
                $: "4",
                "%": "5",
                "^": "6",
                "&": "7",
                "*": "8",
                "(": "9",
                ")": "0",
                _: "-",
                "+": "=",
                ":": ";",
                '"': "'",
                "<": ",",
                ">": ".",
                "?": "/",
                "|": "\\"
            },
            f = {
                option: "alt",
                command: "meta",
                return: "enter",
                escape: "esc",
                plus: "+",
                mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl"
            };
        for (i = 1; 20 > i; ++i) u[111 + i] = "f" + i;
        for (i = 0; 9 >= i; ++i) u[i + 96] = i.toString();
        c.prototype.bind = function (t, e, i) {
            return t = t instanceof Array ? t : [t], this._bindMultiple.call(this, t, e, i), this
        }, c.prototype.unbind = function (t, e) {
            return this.bind.call(this, t, function () {}, e)
        }, c.prototype.trigger = function (t, e) {
            return this._directMap[t + ":" + e] && this._directMap[t + ":" + e]({}, t), this
        }, c.prototype.reset = function () {
            return this._callbacks = {}, this._directMap = {}, this
        }, c.prototype.stopCallback = function (t, e) {
            return !(-1 < (" " + e.className + " ").indexOf(" mousetrap ") || l(e, this.target)) && ("INPUT" == e.tagName || "SELECT" == e.tagName || "TEXTAREA" == e.tagName || e.isContentEditable)
        }, c.prototype.handleKey = function () {
            return this._handleKey.apply(this, arguments)
        }, c.addKeycodes = function (t) {
            for (var e in t) t.hasOwnProperty(e) && (u[e] = t[e]);
            h = null
        }, c.init = function () {
            var t, i = c(e);
            for (t in i) "_" !== t.charAt(0) && (c[t] = function (t) {
                return function () {
                    return i[t].apply(i, arguments)
                }
            }(t))
        }, c.init(), t.Mousetrap = c, "undefined" != typeof module && module.exports && (module.exports = c), "function" == typeof define && define.amd && define(function () {
            return c
        })
    }
}("undefined" != typeof window ? window : null, "undefined" != typeof window ? document : null),
function (t) {
    var e = {},
        i = t.prototype.stopCallback;
    t.prototype.stopCallback = function (t, n, s, o) {
        return !!this.paused || !e[s] && !e[o] && i.call(this, t, n, s)
    }, t.prototype.bindGlobal = function (t, i, n) {
        if (this.bind(t, i, n), t instanceof Array)
            for (i = 0; i < t.length; i++) e[t[i]] = !0;
        else e[t] = !0
    }, t.init()
}(Mousetrap),
function (t, e) {
    "undefined" != typeof module && module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : window.basicContext = e()
}(0, function () {
    var t = null,
        e = "item",
        i = "separator",
        n = function () {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0];
            return document.querySelector(".basicContext " + t)
        },
        s = function () {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
            return !0 == (0 === Object.keys(t).length) && (t.type = i), null == t.type && (t.type = e), null == t.class && (t.class = ""), !1 !== t.visible && (t.visible = !0), null == t.icon && (t.icon = null), null == t.title && (t.title = "Undefined"), !0 !== t.disabled && (t.disabled = !1), !0 === t.disabled && (t.class += " basicContext__item--disabled"), null != t.fn || t.type === i || !1 !== t.disabled || (console.warn("Missing fn for item '" + t.title + "'"), !1)
        },
        o = function (t, n) {
            var o = "",
                a = "";
            return !1 === s(t) ? "" : !1 === t.visible ? "" : (t.num = n, null !== t.icon && (a = "<span class='basicContext__icon " + t.icon + "'></span>"), t.type === e ? o = "\n\t\t       <tr class='basicContext__item " + t.class + "'>\n\t\t           <td class='basicContext__data' data-num='" + t.num + "'>" + a + t.title + "</td>\n\t\t       </tr>\n\t\t       " : t.type === i && (o = "\n\t\t       <tr class='basicContext__item basicContext__item--separator'></tr>\n\t\t       "), o)
        },
        a = function (t) {
            var e = "";
            return e += "\n\t        <div class='basicContextContainer'>\n\t            <div class='basicContext'>\n\t                <table>\n\t                    <tbody>\n\t        ", t.forEach(function (t, i) {
                return e += o(t, i)
            }), e += "\n\t                    </tbody>\n\t                </table>\n\t            </div>\n\t        </div>\n\t        "
        },
        r = function () {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                e = {
                    x: t.clientX,
                    y: t.clientY
                };
            if ("touchend" === t.type && (null == e.x || null == e.y)) {
                var i = t.changedTouches;
                null != i && i.length > 0 && (e.x = i[0].clientX, e.y = i[0].clientY)
            }
            return (null == e.x || e.x < 0) && (e.x = 0), (null == e.y || e.y < 0) && (e.y = 0), e
        },
        l = function (t, e) {
            var i = r(t),
                n = i.x,
                s = i.y,
                o = {
                    width: window.innerWidth,
                    height: window.innerHeight
                },
                a = {
                    width: e.offsetWidth,
                    height: e.offsetHeight
                };
            return n + a.width > o.width && (n -= n + a.width - o.width), s + a.height > o.height && (s -= s + a.height - o.height), a.height > o.height && (s = 0, e.classList.add("basicContext--scrollable")), {
                x: n,
                y: s,
                rx: i.x - n,
                ry: i.y - s
            }
        },
        c = function () {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
            return null != t.fn && (!1 !== t.visible && (!0 !== t.disabled && (n("td[data-num='" + t.num + "']").onclick = t.fn, n("td[data-num='" + t.num + "']").oncontextmenu = t.fn, !0)))
        },
        h = function (e, i, s, o) {
            var r = a(e);
            document.body.insertAdjacentHTML("beforeend", r), null == t && (t = document.body.style.overflow, document.body.style.overflow = "hidden");
            var h = n(),
                u = l(i, h);
            return h.style.left = u.x + "px", h.style.top = u.y + "px", h.style.transformOrigin = u.rx + "px " + u.ry + "px", h.style.opacity = 1, null == s && (s = d), h.parentElement.onclick = s, h.parentElement.oncontextmenu = s, e.forEach(c), "function" == typeof i.preventDefault && i.preventDefault(), "function" == typeof i.stopPropagation && i.stopPropagation(), "function" == typeof o && o(), !0
        },
        u = function () {
            var t = n();
            return null != t && 0 !== t.length
        },
        d = function () {
            if (!1 === u()) return !1;
            var e = document.querySelector(".basicContextContainer");
            return e.parentElement.removeChild(e), null != t && (document.body.style.overflow = t, t = null), !0
        };
    return {
        ITEM: e,
        SEPARATOR: i,
        show: h,
        visible: u,
        close: d
    }
}),
function (t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var e;
        e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.basicModal = t()
    }
}(function () {
    return function t(e, i, n) {
        function s(a, r) {
            if (!i[a]) {
                if (!e[a]) {
                    var l = "function" == typeof require && require;
                    if (!r && l) return l(a, !0);
                    if (o) return o(a, !0);
                    var c = new Error("Cannot find module '" + a + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var h = i[a] = {
                    exports: {}
                };
                e[a][0].call(h.exports, function (t) {
                    return s(e[a][1][t] || t)
                }, h, h.exports, t, e, i, n)
            }
            return i[a].exports
        }
        for (var o = "function" == typeof require && require, a = 0; a < n.length; a++) s(n[a]);
        return s
    }({
        1: [function (t, e, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var n = null,
                s = (i.THEME = {
                    small: "basicModal__small",
                    xclose: "basicModal__xclose"
                }, function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return !0 === (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) ? document.querySelectorAll(".basicModal " + t) : document.querySelector(".basicModal " + t)
                }),
                o = function (t, e) {
                    return null != t && (t.constructor === Object ? Array.prototype.forEach.call(Object.keys(t), function (i) {
                        return e(t[i], i, t)
                    }) : Array.prototype.forEach.call(t, function (i, n) {
                        return e(i, n, t)
                    }))
                },
                a = function (t) {
                    return null == t || 0 === Object.keys(t).length ? (console.error("Missing or empty modal configuration object"), !1) : (null == t.body && (t.body = ""), null == t.class && (t.class = ""), !1 !== t.closable && (t.closable = !0), null == t.buttons ? (console.error("basicModal requires at least one button"), !1) : null != t.buttons.action && (null == t.buttons.action.class && (t.buttons.action.class = ""), null == t.buttons.action.title && (t.buttons.action.title = "OK"), null == t.buttons.action.fn) ? (console.error("Missing fn for action-button"), !1) : null == t.buttons.cancel || (null == t.buttons.cancel.class && (t.buttons.cancel.class = ""), null == t.buttons.cancel.title && (t.buttons.cancel.title = "Cancel"), null != t.buttons.cancel.fn) || (console.error("Missing fn for cancel-button"), !1))
                },
                r = function (t) {
                    var e = "";
                    return e += "\n\t        <div class='basicModalContainer basicModalContainer--fadeIn' data-closable='" + t.closable + "'>\n\t            <div class='basicModal basicModal--fadeIn " + t.class + "' role=\"dialog\">\n\t                <div class='basicModal__content'>\n\t                    " + t.body + "\n\t                </div>\n\t                <div class='basicModal__buttons'>\n\t        ", null != t.buttons.cancel && (-1 === t.buttons.cancel.class.indexOf("basicModal__xclose") ? e += "<a id='basicModal__cancel' class='basicModal__button " + t.buttons.cancel.class + "'>" + t.buttons.cancel.title + "</a>" : e += "<div id='basicModal__cancel' class='basicModal__button " + t.buttons.cancel.class + '\' aria-label=\'close\'><svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path d="M405 136.798l-29.798-29.798-119.202 119.202-119.202-119.202-29.798 29.798 119.202 119.202-119.202 119.202 29.798 29.798 119.202-119.202 119.202 119.202 29.798-29.798-119.202-119.202z"/></svg></div>'), null != t.buttons.action && (e += "<a id='basicModal__action' class='basicModal__button " + t.buttons.action.class + "'>" + t.buttons.action.title + "</a>"), e += "\n\t                </div>\n\t            </div>\n\t        </div>\n\t        "
                },
                l = i.getValues = function () {
                    var t = {},
                        e = s("input[name]", !0),
                        i = s("select[name]", !0);
                    return o(e, function (e) {
                        var i = e.getAttribute("name"),
                            n = e.value;
                        t[i] = n
                    }), o(i, function (e) {
                        var i = e.getAttribute("name"),
                            n = e.options[e.selectedIndex].value;
                        t[i] = n
                    }), 0 === Object.keys(t).length ? null : t
                },
                c = function (t) {
                    return null != t.buttons.cancel && (s("#basicModal__cancel").onclick = function () {
                        if (!0 === this.classList.contains("basicModal__button--active")) return !1;
                        this.classList.add("basicModal__button--active"), t.buttons.cancel.fn()
                    }), null != t.buttons.action && (s("#basicModal__action").onclick = function () {
                        if (!0 === this.classList.contains("basicModal__button--active")) return !1;
                        this.classList.add("basicModal__button--active"), t.buttons.action.fn(l())
                    }), o(s("input", !0), function (t) {
                        t.oninput = t.onblur = function () {
                            this.classList.remove("error")
                        }
                    }), o(s("select", !0), function (t) {
                        t.onchange = t.onblur = function () {
                            this.classList.remove("error")
                        }
                    }), !0
                },
                h = (i.show = function t(e) {
                    if (!1 === a(e)) return !1;
                    if (null != s()) return d(!0), setTimeout(function () {
                        return t(e)
                    }, 301), !1;
                    n = document.activeElement;
                    var i = r(e);
                    document.body.insertAdjacentHTML("beforeend", i), c(e);
                    var o = s("input");
                    null != o && o.select();
                    var l = s("select");
                    return null == o && null != l && l.focus(), null != e.callback && e.callback(e), !0
                }, i.error = function (t) {
                    u();
                    var e = s("input[name='" + t + "']") || s("select[name='" + t + "']");
                    if (null == e) return !1;
                    e.classList.add("error"), "function" == typeof e.select ? e.select() : e.focus(), s().classList.remove("basicModal--fadeIn", "basicModal--shake"), setTimeout(function () {
                        return s().classList.add("basicModal--shake")
                    }, 1)
                }, i.visible = function () {
                    return null != s()
                }),
                u = (i.action = function () {
                    var t = s("#basicModal__action");
                    return null != t && (t.click(), !0)
                }, i.cancel = function () {
                    var t = s("#basicModal__cancel");
                    return null != t && (t.click(), !0)
                }, i.reset = function () {
                    var t = s(".basicModal__button", !0);
                    o(t, function (t) {
                        return t.classList.remove("basicModal__button--active")
                    });
                    var e = s("input", !0);
                    o(e, function (t) {
                        return t.classList.remove("error")
                    });
                    var i = s("select", !0);
                    return o(i, function (t) {
                        return t.classList.remove("error")
                    }), !0
                }),
                d = i.close = function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (!1 === h()) return !1;
                    var e = s().parentElement;
                    return ("false" !== e.getAttribute("data-closable") || !1 !== t) && (e.classList.remove("basicModalContainer--fadeIn"), e.classList.add("basicModalContainer--fadeOut"), setTimeout(function () {
                        return null != e && null != e.parentElement && void e.parentElement.removeChild(e)
                    }, 300), null != n && (n.focus(), n = null), !0)
                }
        }, {}]
    }, {}, [1])(1)
});

! function (t) {
    var e = function (e) {
        var i = this;
        this.el = t(e), this.pos = {
            start: {
                x: 0,
                y: 0
            },
            end: {
                x: 0,
                y: 0
            }
        }, this.startTime, e.on("touchstart", function (t) {
            i.touchStart(t)
        }), e.on("touchmove", function (t) {
            i.touchMove(t)
        }), e.on("touchend", function (t) {
            i.swipeEnd()
        }), e.on("mousedown", function (t) {
            i.mouseDown(t)
        })
    };
    e.prototype = {
        touchStart: function (t) {
            var e = t.originalEvent.touches[0];
            this.swipeStart(t, e.pageX, e.pageY)
        },
        touchMove: function (t) {
            var e = t.originalEvent.touches[0];
            this.swipeMove(t, e.pageX, e.pageY)
        },
        mouseDown: function (t) {
            var e = this;
            this.swipeStart(t, t.pageX, t.pageY), this.el.on("mousemove", function (t) {
                e.mouseMove(t)
            }), this.el.on("mouseup", function () {
                e.mouseUp()
            })
        },
        mouseMove: function (t) {
            this.swipeMove(t, t.pageX, t.pageY)
        },
        mouseUp: function (t) {
            this.swipeEnd(t), this.el.off("mousemove"), this.el.off("mouseup")
        },
        swipeStart: function (t, e, i) {
            this.pos.start.x = e, this.pos.start.y = i, this.pos.end.x = e, this.pos.end.y = i, this.startTime = (new Date).getTime(), this.trigger("swipeStart", t)
        },
        swipeMove: function (t, e, i) {
            this.pos.end.x = e, this.pos.end.y = i, this.trigger("swipeMove", t)
        },
        swipeEnd: function (t) {
            this.trigger("swipeEnd", t)
        },
        trigger: function (e, i) {
            var n = this,
                s = t.Event(e),
                o = n.pos.start.x - n.pos.end.x,
                a = n.pos.end.y - n.pos.start.y,
                r = Math.atan2(a, o),
                l = "up",
                c = Math.round(Math.sqrt(Math.pow(o, 2) + Math.pow(a, 2))),
                h = Math.round(180 * r / Math.PI),
                u = Math.round(c / ((new Date).getTime() - n.startTime) * 1e3);
            h < 0 && (h = 360 - Math.abs(h)), h <= 45 && h >= 0 || h <= 360 && h >= 315 ? l = "left" : h >= 135 && h <= 225 ? l = "right" : h > 45 && h < 135 && (l = "down"), s.originalEvent = i, s.swipe = {
                x: o,
                y: a,
                direction: l,
                distance: c,
                angle: h,
                speed: u
            }, t(n.el).trigger(s)
        }
    }, t.fn.swipe = function () {
        new e(this);
        return this
    }
}(jQuery),


/**
 * @description Presentation slides folders in each album
 */
folder = {

        json: null,
        json_slides: null
    },

    folder.toggle = function (folder_id) {
        $('.folder[data-id="' + folder_id + '"]').toggleClass('active').children('.overlay').find('.folder_title > i.fa').toggleClass('fa-chevron-right fa-chevron-down')
    },

    folder.add = function (parent_folder_id, parent_folder_title) {

        const action = function (data) {

            let title = data.title

            basicModal.close()

            let params = {
                title: title,
                albumID: album.getID(),
                parent_folder: parent_folder_id
            }

            api.post('Album::addFolder', params, function (data) {
                console.log('addFolder done')
                console.log(data)

                if (data !== false) {
                    // albums.refresh()
                    // album.getSlides()
                    album.json_folders = data['folders']
                    album.json_slides = data['slides']
                    console.log(album.json_folders)
                    view.album.slides.init()
                    view.album.sidebar()
                } else {
                    web.error(null, params, data)
                }

            })

        }

        basicModal.show({
            body: `<p>Create new child folder inside <b>${parent_folder_title}</b>. Enter a title for the new folder: <input class='text' name='title' type='text' maxlength='50' placeholder='Title' value='Untitled'></p>`,
            buttons: {
                action: {
                    title: 'New folder',
                    fn: action
                },
                cancel: {
                    title: 'Cancel',
                    fn: basicModal.close
                }
            }
        })
    }


/**
 * @description Takes care of every action an album can handle and execute.
 */

album = {

        json: null,
        json_slides: null,
        json_folders: null

    },

    album.getID = function () {

        let id = null

        let isID = (id) => {
            if (id === '0' || id === 'f' || id === 's' || id === 'r') return true
            return $.isNumeric(id)
        }

        if (photo.json) id = photo.json.album
        else if (album.json) id = album.json.id

        // Search
        if (isID(id) === false) id = $('.album:hover, .album.active').attr('data-id')
        if (isID(id) === false) id = $('.photo:hover, .photo.active').attr('data-album-id')

        if (isID(id) === true) return id
        else return false

    },

    album.getPath = function () {

        if (album.json) return album.json.path
        else return false

    },

    album.getSlides = function (albumID, init_view_slides = true, init_view_album = true) {

        let params = {
            albumID: albumID
        }

        api.post("Slide::getSlides", params, function (data) {

            album.json_slides = data

            if (init_view_slides === true) view.album.slides.init()

            if (init_view_album === true) {
                view.album.init()
            }

            console.log('album.getSlides loaded. album.json_slides:')
            console.log(album.json_slides)
        })

    },

    album.load = function (albumID, init_view = true) {

        /* web.toc.sortable({
            revert: true,
            stop: function (t, e) {
                slide.sort(e.item.data("album-id"))
            }
        }) */

        $('.content').sortable({
            connectWith: '.photo',
            stop: function (event, ui) {
                let albumID = ui.item.data('album-id')
                let photoOrder = $('.content').children().map(function () {
                    return $(this).data('id')
                }).get()
                let params = {
                    albumID: albumID,
                    photoOrder: photoOrder
                }
                api.post('Album::setPosition', params, function (data) {
                    if (data !== true) web.error(null, params, data)
                })
            }
        })

        password.get(albumID, function () {
            album.callback(albumID, init_view)
        })
    },

    album.callback = function (albumID, init_view = true) {

        if (init_view === true) web.animate('.content', 'contentZoomOut')

        let startTime = new Date().getTime()

        let params = {
            albumID,
            password: password.value
        }

        api.post('Album::get', params, function (data) {

            let waitTime = 0

            if (data === 'Warning: Album private!') {

                if (document.location.hash.replace('#', '').split('/')[1] != undefined) {
                    // Display photo only
                    web.setMode('view')
                } else {
                    // Album not public
                    web.content.show()
                    web.goto()
                }
                return false
            }

            if (data === 'Warning: Input password!') {
                album.json = {
                    askpw: true
                }
                console.log(album.json.askpw)
                password.get(albumID, function () {
                    album.callback(albumID, init_view)
                })
            }

            if (data === 'Warning: Wrong password!') {
                album.load(albumID, init_view)
                return false
            }

            album.json = data
            // album.json.askpw = false

            // Calculate delay
            let durationTime = (new Date().getTime() - startTime)
            if (durationTime > 300) waitTime = 0
            else waitTime = 300 - durationTime

            // Skip delay when refresh is true
            // Skip delay when opening a blank PhotosManager
            if (init_view === true) waitTime = 0
            if (!visible.albums() && !visible.photo() && !visible.slide() && !visible.album()) waitTime = 0

            //setTimeout(() => {

            console.log('album loaded. getting slides to init view. init_view = ' + init_view)

            //view.album.init()

            //album.getSlides(albumID, true, init_view)

            album.json_slides = data.slides
            album.json_folders = data.folders

            if (init_view === true) {
                view.album.slides.init()
                view.album.init()
            }

            console.log('slides loaded. album.json_slides:')
            console.log(album.json_slides)
            console.log('album.json_folders:')
            console.log(album.json_folders)


            //}, waitTime)

        })

    },

    album.parse = function () {

        if (!album.json.title) album.json.title = 'Untitled'

    },

    album.add = function () {

        const action = function (data) {

            let title = data.title

            const isNumber = (n) => (!isNaN(parseFloat(n)) && isFinite(n))

            basicModal.close()

            let params = {
                title
            }

            api.post('Album::add', params, function (data) {

                if (data !== false && isNumber(data)) {
                    albums.refresh()
                    web.goto(data)
                } else {
                    web.error(null, params, data)
                }

            })

        }

        basicModal.show({
            body: `<p>Enter a title for the new album: <input class='text' name='title' type='text' maxlength='50' placeholder='Title' value='Untitled'></p>`,
            buttons: {
                action: {
                    title: 'Create Album',
                    fn: action
                },
                cancel: {
                    title: 'Cancel',
                    fn: basicModal.close
                }
            }
        })

    },

    album.delete = function (albumIDs) {

        let action = {}
        let cancel = {}
        let msg = ''

        if (!albumIDs) return false
        if (albumIDs instanceof Array === false) albumIDs = [albumIDs]

        action.fn = function () {

            basicModal.close()

            let params = {
                albumIDs: albumIDs.join()
            }

            api.post('Album::delete', params, function (data) {

                if (visible.albums()) {

                    albumIDs.forEach(function (id) {
                        albums.json.num--
                        view.albums.content.delete(id)
                        albums.deleteByID(id)
                    })

                } else {

                    albums.refresh()
                    web.goto()

                }

                if (data !== true) web.error(null, params, data)

            })

        }

        if (albumIDs.toString() === '0') {

            action.title = 'Clear Unsorted'
            cancel.title = 'Keep Unsorted'

            msg = `<p>Are you sure you want to delete all photos from 'Unsorted'?<br>This action can't be undone!</p>`

        } else if (albumIDs.length === 1) {

            let albumTitle = ''

            action.title = 'Delete Album and Photos'
            cancel.title = 'Keep Album'

            // Get title
            if (album.json) albumTitle = album.json.title
            else if (albums.json) albumTitle = albums.getByID(albumIDs).title

            // Fallback for album without a title
            if (albumTitle === '') albumTitle = 'Untitled'

            msg = web.html `<p>Are you sure you want to delete the album '$${ albumTitle }' and all of the photos it contains? This action can't be undone!</p>`

        } else {

            action.title = 'Delete Albums and Photos'
            cancel.title = 'Keep Albums'

            msg = web.html `<p>Are you sure you want to delete all $${ albumIDs.length } selected albums and all of the photos they contain? This action can't be undone!</p>`

        }

        basicModal.show({
            body: msg,
            buttons: {
                action: {
                    title: action.title,
                    fn: action.fn,
                    class: 'red'
                },
                cancel: {
                    title: cancel.title,
                    fn: basicModal.close
                }
            }
        })

    },

    album.setTitle = function (albumIDs) {

        let oldTitle = ''
        let msg = ''

        if (!albumIDs) return false
        if (albumIDs instanceof Array === false) albumIDs = [albumIDs]

        if (albumIDs.length === 1) {

            // Get old title if only one album is selected
            if (album.json) oldTitle = album.json.title
            else if (albums.json) oldTitle = albums.getByID(albumIDs).title

        }

        const action = function (data) {

            basicModal.close()

            let newTitle = data.title

            if (visible.album()) {

                // Rename only one album

                album.json.title = newTitle
                view.album.title()

                if (albums.json) albums.getByID(albumIDs[0]).title = newTitle

            } else if (visible.albums()) {

                // Rename all albums

                albumIDs.forEach(function (id) {
                    albums.getByID(id).title = newTitle
                    view.albums.content.title(id)
                })

            }

            let params = {
                albumIDs: albumIDs.join(),
                title: newTitle
            }

            api.post('Album::setTitle', params, function (data) {

                if (data !== true) web.error(null, params, data)

            })

        }

        let input = web.html `<input class='text' name='title' type='text' maxlength='50' placeholder='Title' value='$${ oldTitle }'>`

        if (albumIDs.length === 1) msg = web.html `<p>Enter a new title for this album: ${ input }</p>`
        else msg = web.html `<p>Enter a title for all $${ albumIDs.length } selected albums: ${ input }</p>`

        basicModal.show({
            body: msg,
            buttons: {
                action: {
                    title: 'Set Title',
                    fn: action
                },
                cancel: {
                    title: 'Cancel',
                    fn: basicModal.close
                }
            }
        })

    },

    album.setDescription = function (albumID) {

        let oldDescription = album.json.description

        const action = function (data) {

            let description = data.description

            basicModal.close()

            if (visible.album()) {
                album.json.description = description
                view.album.description()
            }

            let params = {
                albumID,
                description
            }

            api.post('Album::setDescription', params, function (data) {

                if (data !== true) web.error(null, params, data)

            })

        }

        basicModal.show({
            body: web.html `<p>Please enter a description for this album: <input class='text' name='description' type='text' maxlength='800' placeholder='Description' value='$${ oldDescription }'></p>`,
            buttons: {
                action: {
                    title: 'Set Description',
                    fn: action
                },
                cancel: {
                    title: 'Cancel',
                    fn: basicModal.close
                }
            }
        })

    },

    album.setPublic = function (albumID, modal, e) {

        let password = ''

        albums.refresh()

        if (modal === true) {

            let text = ''
            let action = {}

            action.fn = () => {

                // Call setPublic function without showing the modal
                album.setPublic(album.getID(), false, e)

            }

            // Album public = Editing a shared album
            if (album.json.public === '1') {

                action.title = 'Edit Sharing'
                text = 'The sharing-properties of this album will be changed to the following:'

            } else {

                action.title = 'Share Album'
                text = 'This album will be shared with the following properties:'

            }

            let msg = `
		          <p class='less'>${ text }</p>
		          <form>
		              <div class='choice'>
		                  <label>
		                      <input type='checkbox' name='hidden'>
		                      <span class='checkbox'>${ build.iconic('check') }</span>
		                      <span class='label'>Hidden</span>
		                  </label>
		                  <p>Only people with the direct link can view this album.</p>
		              </div>
		              <div class='choice'>
		                  <label>
		                      <input type='checkbox' name='downloadable'>
		                      <span class='checkbox'>${ build.iconic('check') }</span>
		                      <span class='label'>Downloadable</span>
		                  </label>
		                  <p>Visitors of your PhotosManager can download this album.</p>
		              </div>
		              <div class='choice'>
		                  <label>
		                      <input type='checkbox' name='password'>
		                      <span class='checkbox'>${ build.iconic('check') }</span>
		                      <span class='label'>Password protected</span>
		                  </label>
		                  <p>Album only accessible with a valid password.</p>
		                  <input class='text' name='passwordtext' type='password' placeholder='password' value=''>
		              </div>
		          </form>
		          `

            basicModal.show({
                body: msg,
                buttons: {
                    action: {
                        title: action.title,
                        fn: action.fn
                    },
                    cancel: {
                        title: 'Cancel',
                        fn: basicModal.close
                    }
                }
            })

            if (album.json.public === '1' && album.json.visible === '0') $('.basicModal .choice input[name="hidden"]').click()
            if (album.json.downloadable === '1') $('.basicModal .choice input[name="downloadable"]').click()

            $('.basicModal .choice input[name="password"]').on('change', function () {

                if ($(this).prop('checked') === true) $('.basicModal .choice input[name="passwordtext"]').show().focus()
                else $('.basicModal .choice input[name="passwordtext"]').hide()

            })

            return true

        }

        // Set data
        if (basicModal.visible()) {

            // Visible modal => Set album public
            album.json.public = '1'

            // Set visible
            if ($('.basicModal .choice input[name="hidden"]:checked').length === 1) album.json.visible = '0'
            else album.json.visible = '1'

            // Set downloadable
            if ($('.basicModal .choice input[name="downloadable"]:checked').length === 1) album.json.downloadable = '1'
            else album.json.downloadable = '0'

            // Set password
            if ($('.basicModal .choice input[name="password"]:checked').length === 1) {
                password = $('.basicModal .choice input[name="passwordtext"]').val()
                album.json.password = '1'
            } else {
                password = ''
                album.json.password = '0'
            }

            // Modal input has been processed, now it can be closed
            basicModal.close()

        } else {

            // Modal not visible => Set album private
            album.json.public = '0'

        }

        // Set data and refresh view
        if (visible.album()) {

            album.json.visible = (album.json.public === '0') ? '1' : album.json.visible
            album.json.downloadable = (album.json.public === '0') ? '0' : album.json.downloadable
            album.json.password = (album.json.public === '0') ? '0' : album.json.password

            view.album.public()
            view.album.hidden()
            view.album.downloadable()
            view.album.password()

            if (album.json.public === '1') contextMenu.shareAlbum(albumID, e)

        }

        let params = {
            albumID,
            public: album.json.public,
            password: password,
            visible: album.json.visible,
            downloadable: album.json.downloadable
        }

        api.post('Album::setPublic', params, function (data) {

            if (data !== true) web.error(null, params, data)

        })

    },

    album.share = function (service) {

        let url = location.href

        switch (service) {
            case 'twitter':
                window.open(`https://twitter.com/share?url=${ encodeURI(url) }`)
                break
            case 'facebook':
                window.open(`http://www.facebook.com/sharer.php?u=${ encodeURI(url) }&t=${ encodeURI(album.json.title) }`)
                break
            case 'mail':
                location.href = `mailto:?subject=${ encodeURI(album.json.title) }&body=${ encodeURI(url) }`
                break
        }

    },

    album.getArchive = function (albumID) {

        let link = ''
        let url = `${ api.path }?function=Album::getArchive&albumID=${ albumID }`

        if (location.href.indexOf('index.html') > 0) link = location.href.replace(location.hash, '').replace('index.html', url)
        else link = location.href.replace(location.hash, '') + url

        if (web.publicMode === true) link += `&password=${ encodeURIComponent(password.value) }`

        location.href = link

    },

    album.merge = function (albumIDs) {

        let title = ''
        let sTitle = ''
        let msg = ''

        if (!albumIDs) return false
        if (albumIDs instanceof Array === false) albumIDs = [albumIDs]

        // Get title of first album
        if (albums.json) title = albums.getByID(albumIDs[0]).title

        // Fallback for first album without a title
        if (title === '') title = 'Untitled'

        if (albumIDs.length === 2) {

            // Get title of second album
            if (albums.json) sTitle = albums.getByID(albumIDs[1]).title

            // Fallback for second album without a title
            if (sTitle === '') sTitle = 'Untitled'

            msg = web.html `<p>Are you sure you want to merge the album '$${ sTitle }' into the album '$${ title }'?</p>`

        } else {

            msg = web.html `<p>Are you sure you want to merge all selected albums into the album '$${ title }'?</p>`

        }

        const action = function () {

            basicModal.close()

            let params = {
                albumIDs: albumIDs.join()
            }

            api.post('Album::merge', params, function (data) {

                if (data !== true) {
                    web.error(null, params, data)
                } else {
                    albums.refresh()
                    web.goto()
                }

            })

        }

        basicModal.show({
            body: msg,
            buttons: {
                action: {
                    title: 'Merge Albums',
                    fn: action,
                    class: 'red'
                },
                cancel: {
                    title: "Don't Merge",
                    fn: basicModal.close
                }
            }
        })

    },


    /**
     * @description Takes care of every action albums can handle and execute.
     */

    albums = {

        json: null

    },

    albums.load = function () {

        let startTime = new Date().getTime()

        web.animate('.content', 'contentZoomOut')

        if (albums.json === null) {

            api.post('Albums::get', {}, function (data) {

                let waitTime = 0

                // Smart Albums
                if (web.publicMode === false) albums._createSmartAlbums(data.smartalbums)
                if (web.publicMode === true) albums._createSmartAlbumsPublic(data.smartalbums)

                albums.json = data

                // Calculate delay
                let durationTime = (new Date().getTime() - startTime)
                if (durationTime > 300) waitTime = 0
                else waitTime = 300 - durationTime

                // Skip delay when opening a blank PhotosManager
                if (!visible.albums() && !visible.photo() && !visible.slide() && !visible.album()) waitTime = 0
                if (visible.album() && web.content.html() === '') waitTime = 0

                setTimeout(() => {
                    header.setMode('albums')
                    view.albums.init()
                    web.animate(web.content, 'contentZoomIn')
                }, waitTime)

            })

        } else {

            setTimeout(() => {
                header.setMode('albums')
                view.albums.init()
                web.animate(web.content, 'contentZoomIn')
            }, 300)

        }
    },

    albums.parse = function (album) {

        if (album.password === '1' && web.publicMode === true) {
            album.thumbs[0] = 'src/images/password.svg'
            album.thumbs[1] = 'src/images/password.svg'
            album.thumbs[2] = 'src/images/password.svg'
        } else {
            if (!album.thumbs[0]) album.thumbs[0] = 'src/images/no_images.svg'
            if (!album.thumbs[1]) album.thumbs[1] = 'src/images/no_images.svg'
            if (!album.thumbs[2]) album.thumbs[2] = 'src/images/no_images.svg'
        }

    },

    albums._createSmartAlbums = function (data) {

        data.unsorted = {
            id: 0,
            title: 'Unsorted',
            sysdate: data.unsorted.num + ' photos',
            unsorted: '1',
            thumbs: data.unsorted.thumbs
        }

        data.starred = {
            id: 'f',
            title: 'Starred',
            sysdate: data.starred.num + ' photos',
            star: '1',
            thumbs: data.starred.thumbs
        }

        data.public = {
            id: 's',
            title: 'Public',
            sysdate: data.public.num + ' photos',
            public: '1',
            thumbs: data.public.thumbs
        }

        data.recent = {
            id: 'r',
            title: 'Recent',
            sysdate: data.recent.num + ' photos',
            recent: '1',
            thumbs: data.recent.thumbs
        }

    },

    albums._createSmartAlbumsPublic = function (data) {

        data.public = {
            id: 's',
            title: 'Public',
            sysdate: data.public.num + ' photos',
            public: '1',
            thumbs: data.public.thumbs
        }

    },

    albums.getByID = function (albumID) {

        // Function returns the JSON of an album

        if (albumID == null) return undefined
        if (!albums.json) return undefined
        if (!albums.json.albums) return undefined

        let json = undefined

        $.each(albums.json.albums, function (i) {

            let elem = albums.json.albums[i]

            if (elem.id == albumID) json = elem

        })

        return json

    },

    albums.deleteByID = function (albumID) {

        // Function returns the JSON of an album

        if (albumID == null) return false
        if (!albums.json) return false
        if (!albums.json.albums) return false

        let deleted = false

        $.each(albums.json.albums, function (i) {

            if (albums.json.albums[i].id == albumID) {
                albums.json.albums.splice(i, 1)
                deleted = true
                return false
            }

        })

        return deleted

    },

    albums.refresh = function () {

        albums.json = null

    },


    /**
     * @description This module communicates with PhotosManager's API
     */

    api = {

        path: 'php/index.php',
        onError: null

    },

    api.post = function (fn, params, callback) {

        loadingBar.show()

        params = $.extend({
            function: fn
        }, params)

        const success = (data) => {

            setTimeout(loadingBar.hide, 100)

            // Catch errors
            if (typeof data === 'string' && data.substring(0, 7) === 'Error: ') {
                api.onError(data.substring(7, data.length), params, data)
                return false
            }

            callback(data)

        }

        const error = (jqXHR, textStatus, errorThrown) => {

            api.onError('Server error or API not found.', params, errorThrown)

        }

        $.ajax({
            type: 'POST',
            url: api.path,
            data: params,
            dataType: 'json',
            success,
            error
        })

    },


    /**
     * @description This module is used to generate HTML-Code.
     */

    build = {},

    build.iconic = function (icon, classes = '') {

        let html = ''

        html += web.html `<svg class='iconic $${ classes }'><use xlink:href='#$${ icon }' /></svg>`

        return html

    },

    build.divider = function (title) {

        let html = ''

        html += web.html `<div class='divider'><h1>$${ title }</h1></div>`

        return html

    },

    build.editIcon = function (id) {

        let html = ''

        html += web.html `<div id='$${ id }' class='edit'>${ build.iconic('pencil') }</div>`

        return html

    },

    build.multiselect = function (top, left) {

        return web.html `<div id='multiselect' style='top: $${ top }px; left: $${ left }px;'></div>`

    },

    build.album = function (data) {

        let html = ''

        let {
            path: retinaThumbUrl,
            isPhoto
        } = web.retinize(data.thumbs[0])

        html += web.html `
	        <div class='album' data-id='$${ data.id }'>
	            <div class='overlay'>
	                <h1 title='$${ data.title }'>$${ data.title }</h1>
	                <a>$${ data.sysdate }</a>
	            </div>
	        `

        if (web.publicMode === false) {

            html += web.html `
		        <div class='badges'>
		            <a class='badge $${ (data.star==='1'     ? 'badge--visible' : '') } icn-star'>${ build.iconic('star') }</a>
		            <a class='badge $${ (data.public==='1'   ? 'badge--visible' : '') } icn-share'>${ build.iconic('eye') }</a>
		            <a class='badge $${ (data.unsorted==='1' ? 'badge--visible' : '') }'>${ build.iconic('list') }</a>
		            <a class='badge $${ (data.recent==='1'   ? 'badge--visible' : '') }'>${ build.iconic('clock') }</a>
		            <a class='badge $${ (data.password==='1' ? 'badge--visible' : '') }'>${ build.iconic('lock-locked') }</a>
		        </div>
                `

        }

        html += `
                <div class='thumbs'>
                    <img src='${ data.thumbs[2] }' width='200' height='200' alt='Photo thumbnail' data-overlay='false' draggable='false'>
                    <img src='${ data.thumbs[1] }' width='200' height='200' alt='Photo thumbnail' data-overlay='false' draggable='false'>
                    <img src='${ data.thumbs[0] }' srcset='${ retinaThumbUrl } 1x' width='200' height='200' alt='Photo thumbnail' data-overlay='${ isPhoto }' draggable='false'>
                </div>
            </div>
            `

        return html

    },

    build.folder_in_slides = function (data) {

        let html = ''

        html += web.html `
	        <div class='folder' data-album-id='$${ data.album }' data-id='$${ data.id }'>
                <div class='overlay' onclick="folder.toggle('$${data.id}')">
                    <div class="right btns">
                        <a class="button button_add_folder" onclick="folder.add('$${data.id}', '$${data.title}')" title="Add folder">
                            <svg class="iconic"><use xlink:href="#plus"></use></svg>
                        </a>
                    </div>
                    <h1 class='folder_title' title='$${ data.title }'><i class='fa fa-chevron-right'></i> $${ data.title }</h1>
                </div>
            </div>
            `

        return html

    },

    build.photo_in_slides = function (data) {

        let html = ''

        let {
            path: retinaThumbUrl
        } = web.retinize(data.thumbUrl)

        html += web.html `
	        <div class='slide' data-album-id='$${ data.album }' data-photo-id='$${ data.photo }' data-id='$${ data.id }'>
	            <img src='$${ data.thumbUrl }' srcset='$${ retinaThumbUrl } 1.5x' width='20' height='20' alt='Photo thumbnail' draggable='false'>
	            <div class='overlay'>
                    <h1 title='$${ data.title }'>$${ data.title }</h1>
                </div>
            </div>
            `

        return html

    },

    build.photo = function (data) {

        let html = ''

        let {
            path: retinaThumbUrl
        } = web.retinize(data.thumbUrl)

        html += web.html `
            <div class='photo' data-album-id='$${ data.album }' data-id='$${ data.id }'>
                <div class='move-photo'>
                    <i class='fa fa-arrows-alt'></i>
                </div>

                <img src='$${ data.thumbUrl }' srcset='$${ retinaThumbUrl } 1.5x' width='200' height='200' alt='Photo thumbnail' draggable='false'>
                <div class='photo-inner' data-album-id='$${ data.album }' data-id='$${ data.id }'>
                    <img src='$${ data.thumbUrl }' srcset='$${ retinaThumbUrl } 1x' width='20' height='20' alt='Photo thumbnail' draggable='false'>
                    
                    <div class='overlay'>
                        <h1 title='$${ data.title }'>$${ data.title }</h1>
	        `

        if (data.cameraDate === '1') html += web.html `<a><span title='Camera Date'>${ build.iconic('camera-slr') }</span>$${ data.sysdate }</a>`
        else html += web.html `<a>$${ data.sysdate }</a>`

        html += `</div></div>`

        if (web.publicMode === false) {

            html += web.html `
		        <div class='badges'>
		            <a class='badge $${ (data.star==='1'                                ? 'badge--visible' : '') } icn-star'>${ build.iconic('star') }</a>
		            <a class='badge $${ ((data.public==='1' && album.json.public!=='1') ? 'badge--visible' : '') } icn-share'>${ build.iconic('eye') }</a>
		        </div>
		        `

        }

        html += `</div>`

        return html

    },

    build.imageview = function (data, visibleControls) {

        let html = ''
        let hasMedium = data.medium !== ''

        if (hasMedium === false) {

            html += web.html `<img id='image' class='$${ visibleControls===true ? '' : 'full' }' src='$${ data.url }' draggable='false'>`

        } else {

            html += web.html `<img id='image' class='$${ visibleControls===true ? '' : 'full' }' src='$${ data.url }' srcset='$${ data.medium } 1920w, $${ data.url } $${ data.width }w' draggable='false'>`

        }

        html += `
	        <div class='arrow_wrapper arrow_wrapper--previous'><a id='previous' class='i_previous'>${ build.iconic('caret-left') }</a></div>
	        <div class='arrow_wrapper arrow_wrapper--next'><a id='next' class='i_next'>${ build.iconic('caret-right') }</a></div>
	        `

        return html

    },

    build.slideview = function (data, visibleControls) {
        console.log('slideview')
        console.log(data)

        let html = ''
        let hasMedium = data.medium !== ''

        if (hasMedium === false) {

            html += web.html `<img id='image' class='$${ visibleControls===true ? '' : 'full' }' src='$${ data.url }' draggable='false'>`

        } else {

            html += web.html `<img id='image' class='$${ visibleControls===true ? '' : 'full' }' src='$${ data.url }' srcset='$${ data.medium } 1920w, $${ data.url } $${ data.width }w' draggable='false'>`

        }

        html += `
	        <div class='arrow_wrapper arrow_wrapper--previous'><a id='s_previous' class='i_previous'>${ build.iconic('caret-left') }</a></div>
	        <div class='arrow_wrapper arrow_wrapper--next'><a id='s_next' class='i_next'>${ build.iconic('caret-right') }</a></div>
            `

        /*if (visible.presentation()) {
            html += `<div class='slide-note' id='s_note'>${data.note}</div>`
        } else {
            html += `<textarea class='slide-note' id='s_note'>${data.note}</textarea>`
        }*/

        html += `<div class='slide-note'><textarea class='slide-note-text' id='s_note'>${data.note}</textarea>`
        if (!web.publicMode) {
            html += `<div class='button button-save_note'>
                    <input type='submit' value='Save' id='save_note' disabled/>
                </div>
                `
        }
        html += `</div>`


        return html

    },

    build.no_content = function (typ) {

        let html = ''

        html += `
	        <div class='no_content fadeIn'>
	            ${ build.iconic(typ) }
	        `

        switch (typ) {
            case 'magnifying-glass':
                html += `<p>No results</p>`
                break
            case 'eye':
                html += `<p>No public albums</p>`
                break
            case 'cog':
                html += `<p>No configuration</p>`
                break
            case 'question-mark':
                html += `<p>Photo not found</p>`
                break
        }

        html += `</div>`

        return html

    },

    build.uploadModal = function (title, files) {

        let html = ''

        html += web.html `
	        <h1>$${ title }</h1>
	        <div class='rows'>
	        `

        let i = 0

        while (i < files.length) {

            let file = files[i]

            if (file.name.length > 40) file.name = file.name.substr(0, 17) + '...' + file.name.substr(file.name.length - 20, 20)

            html += web.html `
		        <div class='row'>
		            <a class='name'>$${ file.name }</a>
		            <a class='status'></a>
		            <p class='notice'></p>
		        </div>
		        `

            i++

        }

        html += `</div>`

        return html

    },

    build.tags = function (tags) {

        let html = ''

        if (tags !== '') {

            tags = tags.split(',')

            tags.forEach(function (tag, index, array) {
                html += web.html `<a class='tag'>$${ tag }<span data-index='$${ index }'>${ build.iconic('x') }</span></a>`
            })

        } else {

            html = `<div class='empty'>No Tags</div>`

        }

        return html

    },
    /**
     * @description This module is used for the context menu.
     */

    contextMenu = {},

    contextMenu.add = function (e) {

        let items = [{
                title: build.iconic('folder') + 'New Album',
                fn: album.add
            },
            {
                title: build.iconic('plus') + 'Import Album',
                fn: () => $('#import_album').click()
            },
            {},
            {
                title: build.iconic('image') + 'Upload Photo',
                fn: () => $('#upload_files').click()
            },
            {
                title: build.iconic('link-intact') + 'Import Photo from Link',
                fn: upload.start.url
            },
            {
                title: build.iconic('dropbox', 'ionicons') + 'Import Photo from Dropbox',
                fn: upload.start.dropbox
            },
            {
                title: build.iconic('terminal') + 'Import Photo from Server',
                fn: upload.start.server
            }
        ]

        basicContext.show(items, e.originalEvent)

        upload.notify()

    },

    contextMenu.settings = function (e) {

        let items = [
            /*{
                title: build.iconic('person') + 'Change Login',
                fn: settings.setLogin
            },
            {
                title: build.iconic('sort-ascending') + 'Change Sorting',
                fn: settings.setSorting
            },
            {
                title: build.iconic('dropbox', 'ionicons') + 'Set Dropbox',
                fn: settings.setDropboxKey
            },
            {},
            {
                title: build.iconic('info') + 'About PhotosManager',
                fn: () => window.open(web.website)
            },
            {
                title: build.iconic('wrench') + 'Diagnostics',
                fn: () => window.open('plugins/Diagnostics/')
            },
            {
                title: build.iconic('align-left') + 'Show Log',
                fn: () => window.open('plugins/Log/')
            },
            {},*/
            {
                title: build.iconic('account-logout') + 'Sign Out',
                fn: web.logout
            }
        ]

        basicContext.show(items, e.originalEvent)

    },

    contextMenu.album = function (albumID, e) {

        // Notice for 'Merge':
        // fn must call basicContext.close() first,
        // in order to keep the selection

        if (albumID === '0' || albumID === 'f' || albumID === 's' || albumID === 'r') return false

        // Show merge-item when there's more than one album
        let showMerge = (albums.json && albums.json.albums && Object.keys(albums.json.albums).length > 1)

        let items = [{
                title: build.iconic('pencil') + 'Rename',
                fn: () => album.setTitle([albumID])
            },
            {
                title: build.iconic('collapse-left') + 'Merge',
                visible: showMerge,
                fn: () => {
                    basicContext.close()
                    contextMenu.mergeAlbum(albumID, e)
                }
            },
            {
                title: build.iconic('trash') + 'Delete',
                fn: () => album.delete([albumID])
            }
        ]

        $('.album[data-id="' + albumID + '"]').addClass('active')

        basicContext.show(items, e.originalEvent, contextMenu.close)

    },

    contextMenu.albumMulti = function (albumIDs, e) {

        multiselect.stopResize()

        // Automatically merge selected albums when albumIDs contains more than one album
        // Show list of albums otherwise
        let autoMerge = (albumIDs.length > 1 ? true : false)

        // Show merge-item when there's more than one album
        let showMerge = (albums.json && albums.json.albums && Object.keys(albums.json.albums).length > 1)

        let items = [{
                title: build.iconic('pencil') + 'Rename All',
                fn: () => album.setTitle(albumIDs)
            },
            {
                title: build.iconic('collapse-left') + 'Merge All',
                visible: showMerge && autoMerge,
                fn: () => album.merge(albumIDs)
            },
            {
                title: build.iconic('collapse-left') + 'Merge',
                visible: showMerge && !autoMerge,
                fn: () => {
                    basicContext.close()
                    contextMenu.mergeAlbum(albumIDs[0], e)
                }
            },
            {
                title: build.iconic('trash') + 'Delete All',
                fn: () => album.delete(albumIDs)
            }
        ]

        items.push()

        basicContext.show(items, e.originalEvent, contextMenu.close)

    },

    contextMenu.albumTitle = function (albumID, e) {

        api.post('Albums::get', {}, function (data) {

            let items = []

            if (data.albums && data.num > 1) {

                // Generate list of albums
                $.each(data.albums, function () {

                    if (!this.thumbs[0]) this.thumbs[0] = 'src/images/no_cover.svg'
                    if (this.title === '') this.title = 'Untitled'

                    let html = web.html `<img class='cover' width='16' height='16' src='$${ this.thumbs[0] }'><div class='title'>$${ this.title }</div>`

                    if (this.id != albumID) items.push({
                        title: html,
                        fn: () => web.goto(this.id)
                    })

                })

                items.unshift({})

            }

            items.unshift({
                title: build.iconic('pencil') + 'Rename album',
                fn: () => album.setTitle([albumID])
            })

            basicContext.show(items, e.originalEvent, contextMenu.close)

        })

    },

    contextMenu.mergeAlbum = function (albumID, e) {

        api.post('Albums::get', {}, function (data) {

            let items = []

            if (data.albums && data.num > 1) {

                $.each(data.albums, function () {

                    if (!this.thumbs[0]) this.thumbs[0] = 'src/images/no_cover.svg'
                    if (this.title === '') this.title = 'Untitled'

                    let html = web.html `<img class='cover' width='16' height='16' src='$${ this.thumbs[0] }'><div class='title'>$${ this.title }</div>`

                    if (this.id != albumID) items.push({
                        title: html,
                        fn: () => album.merge([albumID, this.id])
                    })

                })

            }

            if (items.length === 0) return false

            basicContext.show(items, e.originalEvent, contextMenu.close)

        })

    },

    contextMenu.slide = function (slideID, e) {
        let items = [{
            title: build.iconic("trash") + "Remove slide",
            fn: function () {
                return slide.delete([slideID])
            }
        }]

        $('.slide[data-id="' + slideID + '"]').addClass("active")

        basicContext.show(items, e.originalEvent, contextMenu.close)

    },

    contextMenu.slideTitle = function (t, e, i) {

        let items = [{
            title: build.iconic("pencil") + "Rename photo",
            fn: function () {
                return photo.setTitle([e])
            }
        }]
        basicContext.show(items, i.originalEvent, contextMenu.close)

    },

    contextMenu.photo = function (photoID, e) {

        // Notice for 'Move':
        // fn must call basicContext.close() first,
        // in order to keep the selection

        let items = [{
                title: build.iconic('star') + 'Star',
                fn: () => photo.setStar([photoID])
            },
            {
                title: build.iconic('tag') + 'Tags',
                fn: () => photo.editTags([photoID])
            },
            {},
            {
                title: build.iconic('pencil') + 'Rename',
                fn: () => photo.setTitle([photoID])
            },
            {
                title: build.iconic('layers') + 'Duplicate',
                fn: () => photo.duplicate([photoID])
            },
            {
                title: build.iconic('folder') + 'Move',
                fn: () => {
                    basicContext.close()
                    contextMenu.move([photoID], e)
                }
            },
            {
                title: build.iconic('trash') + 'Delete',
                fn: () => photo.delete([photoID])
            }
        ]

        $('.photo[data-id="' + photoID + '"]').addClass('active')

        basicContext.show(items, e.originalEvent, contextMenu.close)

    },

    contextMenu.photoMulti = function (photoIDs, e) {

        // Notice for 'Move All':
        // fn must call basicContext.close() first,
        // in order to keep the selection and multiselect

        multiselect.stopResize()

        let items = [{
                title: build.iconic('star') + 'Star All',
                fn: () => photo.setStar(photoIDs)
            },
            {
                title: build.iconic('tag') + 'Tag All',
                fn: () => photo.editTags(photoIDs)
            },
            {},
            {
                title: build.iconic('pencil') + 'Rename All',
                fn: () => photo.setTitle(photoIDs)
            },
            {
                title: build.iconic('layers') + 'Duplicate All',
                fn: () => photo.duplicate(photoIDs)
            },
            {
                title: build.iconic('folder') + 'Move All',
                fn: () => {
                    basicContext.close()
                    contextMenu.move(photoIDs, e)
                }
            },
            {
                title: build.iconic('trash') + 'Delete All',
                fn: () => photo.delete(photoIDs)
            }
        ]

        basicContext.show(items, e.originalEvent, contextMenu.close)

    },

    contextMenu.photoTitle = function (albumID, photoID, e) {

        let items = [{
            title: build.iconic('pencil') + 'Rename photo',
            fn: () => photo.setTitle([photoID])
        }]

        let data = album.json

        if (data.content !== false && data.num > 1) {

            items.push({})

            // Generate list of albums
            $.each(data.content, function (index) {

                if (this.title === '') this.title = 'Untitled'

                let html = web.html `<img class='cover' width='16' height='16' src='$${ this.thumbUrl }'><div class='title'>$${ this.title }</div>`

                if (this.id != photoID) items.push({
                    title: html,
                    fn: () => web.goto(albumID + '/' + this.id)
                })

            })

        }

        basicContext.show(items, e.originalEvent, contextMenu.close)

    },

    contextMenu.photoMore = function (photoID, e) {

        // Show download-item when
        // a) Public mode is off
        // b) Downloadable is 1 and public mode is on
        let showDownload = web.publicMode === false || ((album.json && album.json.downloadable && album.json.downloadable === '1') && web.publicMode === true)

        let items = [{
                title: build.iconic('fullscreen-enter') + 'Full Photo',
                fn: () => window.open(photo.getDirectLink())
            },
            {
                title: build.iconic('cloud-download') + 'Download',
                visible: showDownload,
                fn: () => photo.getArchive(photoID)
            }
        ]

        basicContext.show(items, e.originalEvent)

    },

    contextMenu.move = function (photoIDs, e) {

        let items = []

        api.post('Albums::get', {}, function (data) {

            if (data.num === 0) {

                // Show only 'Add album' when no album available
                items = [{
                    title: 'New Album',
                    fn: album.add
                }]

            } else {

                // Generate list of albums
                $.each(data.albums, function () {

                    if (!this.thumbs[0]) this.thumbs[0] = 'src/images/no_cover.svg'
                    if (this.title === '') this.title = 'Untitled'

                    let html = web.html `<img class='cover' width='16' height='16' src='$${ this.thumbs[0] }'><div class='title'>$${ this.title }</div>`

                    if (this.id != album.getID()) items.push({
                        title: html,
                        fn: () => photo.setAlbum(photoIDs, this.id)
                    })

                })

                // Show Unsorted when unsorted is not the current album
                if (album.getID() !== '0') {

                    items.unshift({})
                    items.unshift({
                        title: 'Unsorted',
                        fn: () => photo.setAlbum(photoIDs, 0)
                    })

                }

            }

            basicContext.show(items, e.originalEvent, contextMenu.close)

        })

    },

    contextMenu.sharePhoto = function (photoID, e) {

        let link = photo.getViewLink(photoID)
        let iconClass = 'ionicons'

        let items = [{
                title: `<input readonly id="link" value="${ link }">`,
                fn: () => {},
                class: 'basicContext__item--noHover'
            },
            {},
            {
                title: build.iconic('twitter', iconClass) + 'Twitter',
                fn: () => photo.share(photoID, 'twitter')
            },
            {
                title: build.iconic('facebook', iconClass) + 'Facebook',
                fn: () => photo.share(photoID, 'facebook')
            },
            {
                title: build.iconic('envelope-closed') + 'Mail',
                fn: () => photo.share(photoID, 'mail')
            },
            {
                title: build.iconic('dropbox', iconClass) + 'Dropbox',
                visible: web.publicMode === false,
                fn: () => photo.share(photoID, 'dropbox')
            },
            {
                title: build.iconic('link-intact') + 'Direct Link',
                fn: () => window.open(photo.getDirectLink())
            },
            {},
            {
                title: build.iconic('ban') + 'Make Private',
                visible: web.publicMode === false,
                fn: () => photo.setPublic(photoID)
            }
        ]

        if (web.publicMode === true) items.splice(7, 1)

        basicContext.show(items, e.originalEvent)
        $('.basicContext input#link').focus().select()

    },

    contextMenu.shareAlbum = function (albumID, e) {

        let iconClass = 'ionicons'

        let items = [{
                title: `<input readonly id="link" value="${ location.href }">`,
                fn: () => {},
                class: 'basicContext__item--noHover'
            },
            {},
            {
                title: build.iconic('twitter', iconClass) + 'Twitter',
                fn: () => album.share('twitter')
            },
            {
                title: build.iconic('facebook', iconClass) + 'Facebook',
                fn: () => album.share('facebook')
            },
            {
                title: build.iconic('envelope-closed') + 'Mail',
                fn: () => album.share('mail')
            },
            {},
            {
                title: build.iconic('pencil') + 'Edit Sharing',
                visible: web.publicMode === false,
                fn: () => album.setPublic(albumID, true, e)
            },
            {
                title: build.iconic('ban') + 'Make Private',
                visible: web.publicMode === false,
                fn: () => album.setPublic(albumID, false)
            }
        ]

        if (web.publicMode === true) items.splice(5, 1)

        basicContext.show(items, e.originalEvent)
        $('.basicContext input#link').focus().select()

    },

    contextMenu.close = function () {

        if (!visible.contextMenu()) return false

        basicContext.close()

        $('.photo.active, .album.active').removeClass('active')
        if (visible.multiselect()) multiselect.close()

    },


    /**
     * @description This module takes care of the header.
     */

    header = {

        _dom: $('.header')

    },

    header.dom = function (selector) {

        if (selector == null || selector === '') return header._dom
        return header._dom.find(selector)

    },

    header.bind = function () {

        // Event Name
        let eventName = web.getEventName()

        header.dom('.header__title').on(eventName, function (e) {

            if ($(this).hasClass('header__title--editable') === false) return false

            if (visible.slide() || visible.photo())
                contextMenu.photoTitle(album.getID(), photo.getID(), e)
            else
                contextMenu.albumTitle(album.getID(), e)

        })

        header.dom('#button_share').on(eventName, function (e) {
            if (photo.json.public === '1' || photo.json.public === '2') contextMenu.sharePhoto(photo.getID(), e)
            else photo.setPublic(photo.getID(), e)
        })

        header.dom('#button_share_album').on(eventName, function (e) {
            if (album.json.public === '1') contextMenu.shareAlbum(album.getID(), e)
            else album.setPublic(album.getID(), true, e)
        })

        header.dom('#button_signin').on(eventName, web.loginDialog)
        header.dom('#button_settings').on(eventName, contextMenu.settings)
        header.dom('#button_info_album').on(eventName, sidebar.toggle)
        header.dom('#button_info').on(eventName, sidebar.toggle)
        header.dom('.button_add').on(eventName, contextMenu.add)
        header.dom('#button_more').on(eventName, function (e) {
            contextMenu.photoMore(photo.getID(), e)
        })
        header.dom('#button_move').on(eventName, function (e) {
            contextMenu.move([photo.getID()], e)
        })
        header.dom('.header__hostedwith').on(eventName, function () {
            window.open(web.website)
        })
        header.dom('#button_trash_album').on(eventName, function () {
            album.delete([album.getID()])
        })
        header.dom('#button_trash').on(eventName, function () {
            if (visible.slide()) slide.delete([slide.getID()])
            else if (visible.photo()) photo.delete([photo.getID()])
        })
        header.dom('#button_archive').on(eventName, function () {
            album.getArchive(album.getID())
        })
        header.dom('#button_star').on(eventName, function () {
            photo.setStar([photo.getID()])
        })
        header.dom('#button_back_home').on(eventName, function () {
            web.goto()
        })
        header.dom('#button_back').on(eventName, function () {
            web.goto(album.getID())
        })

        header.dom('.header__search').on('keyup click', function () {
            search.find($(this).val())
        })
        header.dom('.header__clear').on(eventName, function () {
            header.dom('.header__search').focus()
            search.reset()
        })

        return true

    },

    header.show = function () {

        web.imageview.removeClass('full')
        if (!visible.presentation()) web.slideview.removeClass('full')
        header.dom().removeClass('header--hidden')

        return true

    },

    header.hide = function (e) {

        if ((visible.photo() || visible.slide()) && !visible.sidebar() && !visible.contextMenu() && basicModal.visible() === false) {

            if (visible.slide()) web.slideview.addClass('full')
            else if (visible.photo()) web.imageview.addClass('full')

            header.dom().addClass('header--hidden')

            return true

        }

        return false

    },

    header.setTitle = function (title = 'Untitled') {

        let $title = header.dom('.header__title')
        let html = web.html `$${ title }${ build.iconic('caret-bottom') }`

        $title.html(html)

        return true

    },

    header.setMode = function (mode) {

        if (mode === 'albums' && web.publicMode === true) mode = 'public'
        console.log('header.setMode ' + mode)

        switch (mode) {

            case 'public':

                header.dom().removeClass('header--view')
                header.dom('.header__toolbar--albums, .header__toolbar--album, .header__toolbar--photo').removeClass('header__toolbar--visible')
                header.dom('.header__toolbar--public').addClass('header__toolbar--visible')

                sidebar_slideshow.hide()
                sidebar.hide()

                return true
                break

            case 'albums':

                header.dom().removeClass('header--view')
                header.dom('.header__toolbar--public, .header__toolbar--album, .header__toolbar--photo').removeClass('header__toolbar--visible')
                header.dom('.header__toolbar--albums').addClass('header__toolbar--visible')

                sidebar_slideshow.hide()
                sidebar.hide()

                return true
                break

            case 'album':

                let albumID = album.getID()

                header.dom().removeClass('header--view')
                header.dom('.header__toolbar--public, .header__toolbar--albums, .header__toolbar--photo').removeClass('header__toolbar--visible')
                header.dom('.header__toolbar--album').addClass('header__toolbar--visible')

                // Hide download button when album empty
                if (album.json.content === false) $('#button_archive').hide()
                else $('#button_archive').show()

                // Hide download button when not logged in and album not downloadable
                if (web.publicMode === true && album.json.downloadable === '0') $('#button_archive').hide()

                if (albumID === 's' || albumID === 'f' || albumID === 'r') {
                    $('#button_info_album, #button_trash_album, #button_share_album').hide()
                } else if (albumID === '0') {
                    $('#button_info_album, #button_share_album').hide()
                    $('#button_trash_album').show()
                } else {
                    $('#button_info_album, #button_trash_album, #button_share_album').show()
                }

                if (!(['s', 'f', 'r', '0']).includes(album.json.id))
                    sidebar_slideshow.show()
                else
                    sidebar_slideshow.hide()

                sidebar.hide()

                return true
                break

            case 'photo':

                header.dom().addClass('header--view')
                header.dom('.header__toolbar--public, .header__toolbar--albums, .header__toolbar--album').removeClass('header__toolbar--visible')
                header.dom('.header__toolbar--photo').addClass('header__toolbar--visible')

                if (album.json.id && !(['s', 'f', 'r', '0']).includes(album.json.id))
                    sidebar_slideshow.show()
                else
                    sidebar_slideshow.hide()


                return true
                break

            case 'presentation':

                header.dom('.header__toolbar').removeClass('header__toolbar--visible')

                return true
                break

        }

        return false

    },

    header.setEditable = function (editable) {

        let $title = header.dom('.header__title')

        // Hide editable icon when not logged in
        if (web.publicMode === true) editable = false

        if (editable) $title.addClass('header__title--editable')
        else $title.removeClass('header__title--editable')

        return true

    },


    /**
     * @description This module is used to show and hide the loading bar.
     */

    loadingBar = {

        status: null,
        _dom: $('#loading')

    },

    loadingBar.dom = function (selector) {

        if (selector == null || selector === '') return loadingBar._dom
        return loadingBar._dom.find(selector)

    },

    loadingBar.show = function (status, errorText) {

        if (status === 'error') {

            // Set status
            loadingBar.status = 'error'

            // Parse text
            if (errorText) errorText = errorText.replace('<br>', '')
            if (!errorText) errorText = 'Whoops, it looks like something went wrong. Please reload the site and try again!'

            // Move header down
            if (visible.header()) header.dom().addClass('header--error')
            if (visible.sidebar_slideshow()) sidebar_slideshow.dom().addClass('sidebar_slideshow--error')

            // Modify loading
            loadingBar.dom()
                .removeClass('loading uploading error')
                .html(`<h1>Error: <span>${ errorText }</span></h1>`)
                .addClass(status)
                .show()

            // Set timeout
            clearTimeout(loadingBar._timeout)
            loadingBar._timeout = setTimeout(() => loadingBar.hide(true), 3000)

            return true

        }

        if (loadingBar.status === null) {

            // Set status
            loadingBar.status = 'loading'

            // Set timeout
            clearTimeout(loadingBar._timeout)
            loadingBar._timeout = setTimeout(() => {

                // Move header down
                if (visible.header()) header.dom().addClass('header--loading')
                if (visible.sidebar_slideshow()) sidebar_slideshow.dom().addClass('sidebar_slideshow--loading')

                // Modify loading
                loadingBar.dom()
                    .removeClass('loading uploading error')
                    .html('')
                    .addClass('loading')
                    .show()

            }, 1000)

            return true

        }

    },

    loadingBar.hide = function (force) {

        if ((loadingBar.status !== 'error' && loadingBar.status != null) || force) {

            // Remove status
            loadingBar.status = null

            // Move header up
            header.dom().removeClass('header--error header--loading')
            sidebar_slideshow.dom().removeClass('sidebar_slideshow--error sidebar_slideshow--loading')

            // Set timeout
            clearTimeout(loadingBar._timeout)
            setTimeout(() => loadingBar.dom().hide(), 300)

        }

    },


    /**
     * @description This module provides the basic functions of PhotosManager.
     */

    web = {

        title: document.title,
        version: '3.1.7',
        versionCode: '030107',

        updatePath: '',
        updateURL: '',
        website: '',

        publicMode: false,
        viewMode: false,
        //presentMode     : false,

        checkForUpdates: '1',
        sortingPhotos: '',
        sortingAlbums: '',
        location: '',

        dropbox: false,
        dropboxKey: '',

        content: $('.content'),
        imageview: $('#imageview'),
        slideview: $("#slideview"),
        toc: $("#mucluc")

    },

    web.init = function () {

        api.post('Session::init', {}, function (data) {
            console.log('Session::init')
            console.log(data)

            // Check status
            // 0 = No configuration
            // 1 = Logged out
            // 2 = Logged in

            if (data.status === 2) {

                // Logged in

                web.sortingPhotos = data.config.sortingPhotos || ''
                web.sortingAlbums = data.config.sortingAlbums || ''
                web.dropboxKey = data.config.dropboxKey || ''
                web.location = data.config.location || ''
                web.checkForUpdates = data.config.checkForUpdates || '1'

                // Show dialog when there is no username and password
                if (data.config.login === false) settings.createLogin()

            } else if (data.status === 1) {

                // Logged out

                web.checkForUpdates = data.config.checkForUpdates || '1'

                web.setMode('public')

            } else if (data.status === 0) {

                // No configuration

                web.setMode('public')

                header.dom().hide()
                web.content.hide()
                $('body').append(build.no_content('cog'))
                settings.createConfig()

                return true

            }

            $(window).bind('popstate', web.load)
            web.load()

        })

    },

    web.login = function (data) {

        let user = data.username
        let password = data.password

        let params = {
            user,
            password
        }

        api.post('Session::login', params, function (data) {

            console.log('Session::login ')
            console.log(data)

            if (data === false) {

                // Show error and reactive button
                basicModal.error('password')

            } else {

                localStorage.setItem('user', data)
                window.location.reload()

            }

        })

    },

    web.loginDialog = function () {

        let msg = web.html `
	          <p class='signIn'>
	              <input class='text' name='username' autocomplete='username' type='text' placeholder='username' autocapitalize='off' autocorrect='off'>
	              <input class='text' name='password' autocomplete='current-password' type='password' placeholder='password'>
	          </p>
	          <p class='version'>PhotosManager $${ web.version }<span> &#8211; <a target='_blank' href='$${ web.updateURL }'>Update available!</a><span></p>
	          `

        basicModal.show({
            body: msg,
            buttons: {
                action: {
                    title: 'Sign In',
                    fn: web.login
                },
                cancel: {
                    title: 'Cancel',
                    fn: basicModal.close
                }
            }
        })

    },

    web.logout = function () {

        api.post('Session::logout', {}, function () {
            window.location.reload()
        })

    },

    web.goto = function (url = '') {

        url = '#' + url

        history.pushState(null, null, url)
        web.load()

    },

    web.load = function () {

        let albumID = ''
        let photoID = ''
        let slideID = ''
        let mode = ''
        let hash = document.location.hash.replace('#', '').split('/')

        $('.no_content').remove()
        contextMenu.close()
        multiselect.close()

        if (hash[0] != null) albumID = hash[0]
        if (hash[1] != null) {
            if (hash[1] === 'p') mode = 'presentation'
            if (hash[1] === 's') mode = 'photo'

            if (hash[1] === 'p' || hash[1] === 's') slideID = hash[2]
            else photoID = hash[1]
        }

        if (albumID && slideID) {

            // Trash data
            //photo.json = null
            //slide.json = null
            let reload = true
            if (slide.json && photo.json && slide.json.id === slideID) reload = false

            // Show Photo
            if (web.content.html() === '' || (header.dom('.header__search').length && header.dom('.header__search').val().length !== 0)) {
                web.content.hide()
                album.load(albumID)
            }
            slide.load(slideID, albumID, mode, reload)
            sidebar.dom('h1').text('About photo')

        } else if (albumID && photoID) {

            // Trash data
            photo.json = null
            slide.json = null

            // Show Photo
            if (web.content.html() === '' || (header.dom('.header__search').length && header.dom('.header__search').val().length !== 0)) {
                web.content.hide()
                album.load(albumID)
            }
            photo.load(photoID, albumID)
            sidebar.dom('h1').text('About photo')

        } else if (albumID) {

            // Trash data
            photo.json = null
            slide.json = null

            // Show Album
            if (visible.photo()) view.photo.hide()
            if (visible.slide()) view.slide.hide()
            if (visible.sidebar() && (albumID === '0' || albumID === 'f' || albumID === 's' || albumID === 'r')) sidebar.toggle()

            if (album.json && albumID === album.json.id) {
                //view.album.title()
                view.album.init()
            } else {
                album.load(albumID)
            }

            sidebar.dom('h1').text('About album')
            web.toc.find('.slide').removeClass('current').parents('.folder').removeClass('current_slide')

        } else {

            // Trash albums.json when filled with search results
            if (search.hash != null) {
                albums.json = null
                search.hash = null
            }

            // Trash data
            album.json = null
            album.json_slides = null
            photo.json = null
            slide.json = null

            // Hide sidebar
            if (visible.sidebar()) sidebar.toggle()

            // Show Albums
            if (visible.photo()) view.photo.hide()
            if (visible.slide()) view.slide.hide()
            web.content.show()
            albums.load()

        }

    },

    web.setTitle = function (title, editable) {

        document.title = web.title + ' - ' + title

        header.setEditable(editable)
        header.setTitle(title)

    },

    web.setMode = function (mode) {

        $('#button_settings, #button_trash_album, .button_add, .header__divider').remove()
        $('#button_trash, #button_move, #button_star').remove()

        $('#button_share, #button_share_album')
            .removeClass('button--eye')
            .addClass('button--share')
            .find('use')
            .attr('xlink:href', '#share')

        $(document)
            .off('click', '.header__title--editable')
            .off('touchend', '.header__title--editable')
            .off('contextmenu', '.photo')
            .off('contextmenu', '.album')
            .off('drop')

        Mousetrap
            .unbind(['u'])
            .unbind(['s'])
            .unbind(['f'])
            .unbind(['r'])
            .unbind(['d'])
            .unbind(['t'])
            .unbind(['command+backspace', 'ctrl+backspace'])
            .unbind(['command+a', 'ctrl+a'])

        if (mode === 'public') {

            web.publicMode = true

        } else if (mode === 'view') {

            Mousetrap.unbind(['esc', 'command+up'])

            $('#button_back, a#next, a#previous, a#s_next, a#s_previous').remove()
            $('.no_content').remove()

            web.publicMode = true
            web.viewMode = true

        }

    },

    web.animate = function (obj, animation) {

        let animations = [
            ['fadeIn', 'fadeOut'],
            ['contentZoomIn', 'contentZoomOut']
        ]

        if (!obj.jQuery) obj = $(obj)

        for (let i = 0; i < animations.length; i++) {
            for (let x = 0; x < animations[i].length; x++) {
                if (animations[i][x] == animation) {
                    obj.removeClass(animations[i][0] + ' ' + animations[i][1]).addClass(animation)
                    return true
                }
            }
        }

        return false

    },

    web.retinize = function (path = '') {

        let extention = path.split('.').pop()
        let isPhoto = extention !== 'svg'

        if (isPhoto === true) {

            path = path.replace(/\.[^/.]+$/, '')
            path = path + '@2x' + '.' + extention

        }

        return {
            path,
            isPhoto
        }

    },

    web.loadDropbox = function (callback) {

        if (web.dropbox === false && web.dropboxKey != null && web.dropboxKey !== '') {

            loadingBar.show()

            let g = document.createElement('script')
            let s = document.getElementsByTagName('script')[0]

            g.src = 'https://www.dropbox.com/static/api/1/dropins.js'
            g.id = 'dropboxjs'
            g.type = 'text/javascript'
            g.async = 'true'
            g.setAttribute('data-app-key', web.dropboxKey)
            g.onload = g.onreadystatechange = function () {
                let rs = this.readyState
                if (rs && rs !== 'complete' && rs !== 'loaded') return
                web.dropbox = true
                loadingBar.hide()
                callback()
            }
            s.parentNode.insertBefore(g, s)

        } else if (web.dropbox === true && web.dropboxKey != null && web.dropboxKey !== '') {

            callback()

        } else {

            settings.setDropboxKey(callback)

        }

    },

    web.getEventName = function () {

        let touchendSupport = (/Android|iPhone|iPad|iPod/i).test(navigator.userAgent || navigator.vendor || window.opera) && ('ontouchend' in document.documentElement)
        let eventName = (touchendSupport === true ? 'touchend' : 'click')

        return eventName

    },

    web.escapeHTML = function (html = '') {

        // Ensure that html is a string
        html += ''

        // Escape all critical characters
        html = html.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;')
            .replace(/`/g, '&#96;')

        return html

    },

    web.html = function (literalSections, ...substs) {

        // Use raw literal sections: we don’t want
        // backslashes (\n etc.) to be interpreted
        let raw = literalSections.raw
        let result = ''

        substs.forEach((subst, i) => {

            // Retrieve the literal section preceding
            // the current substitution
            let lit = raw[i]

            // If the substitution is preceded by a dollar sign,
            // we escape special characters in it
            if (lit.slice(-1) === '$') {
                subst = web.escapeHTML(subst)
                lit = lit.slice(0, -1)
            }

            result += lit
            result += subst

        })

        // Take care of last literal section
        // (Never fails, because an empty template string
        // produces one literal section, an empty string)
        result += raw[raw.length - 1]

        return result

    },

    web.error = function (errorThrown, params, data) {

        console.error({
            description: errorThrown,
            params: params,
            response: data
        })

        loadingBar.show('error', errorThrown)

    },


    /**
     * @description Select multiple albums or photos.
     */

    multiselect = {},

    multiselect.position = {

        top: null,
        right: null,
        bottom: null,
        left: null

    },

    multiselect.bind = function () {

        $('.content').on('mousedown', (e) => {
            if (e.which === 1) multiselect.show(e)
        })

        return true

    },

    multiselect.show = function (e) {

        if (web.publicMode) return false
        if (!visible.albums() && !visible.album()) return false
        if ($('.album:hover, .photo:hover').length !== 0) return false
        if (visible.search()) return false
        if (visible.multiselect()) $('#multiselect').remove()

        sidebar.setSelectable(false)

        multiselect.position.top = e.pageY
        multiselect.position.right = -1 * (e.pageX - $(document).width())
        multiselect.position.bottom = -1 * (multiselect.position.top - $(window).height())
        multiselect.position.left = e.pageX

        $('body').append(build.multiselect(multiselect.position.top, multiselect.position.left))

        $(document)
            .on('mousemove', multiselect.resize)
            .on('mouseup', (e) => {
                if (e.which === 1) multiselect.getSelection(e)
            })

    },

    multiselect.selectAll = function () {

        if (web.publicMode) return false
        if (visible.search()) return false
        if (!visible.albums() && !visible.album) return false
        if (visible.multiselect()) $('#multiselect').remove()

        sidebar.setSelectable(false)

        multiselect.position.top = 70
        multiselect.position.right = 40
        multiselect.position.bottom = 90
        multiselect.position.left = 20

        $('body').append(build.multiselect(multiselect.position.top, multiselect.position.left))

        let documentSize = {
            width: $(document).width(),
            height: $(document).height()
        }

        let newSize = {
            width: documentSize.width - multiselect.position.right + 2,
            height: documentSize.height - multiselect.position.bottom
        }

        let e = {
            pageX: documentSize.width - (multiselect.position.right / 2),
            pageY: documentSize.height - multiselect.position.bottom
        }

        $('#multiselect').css(newSize)

        multiselect.getSelection(e)

    },

    multiselect.resize = function (e) {

        if (multiselect.position.top === null ||
            multiselect.position.right === null ||
            multiselect.position.bottom === null ||
            multiselect.position.left === null) return false

        let newSize = {}
        let documentSize = {}

        // Get the position of the mouse
        let mousePos = {
            x: e.pageX,
            y: e.pageY
        }

        // Default CSS
        let newCSS = {
            top: null,
            bottom: null,
            height: null,
            left: null,
            right: null,
            width: null
        }

        if (mousePos.y >= multiselect.position.top) {

            documentSize.height = $(document).height()

            // Do not leave the screen
            newSize.height = mousePos.y - multiselect.position.top
            if ((multiselect.position.top + newSize.height) >= documentSize.height) {
                newSize.height -= (multiselect.position.top + newSize.height) - documentSize.height + 2
            }

            newCSS.top = multiselect.position.top
            newCSS.bottom = 'inherit'
            newCSS.height = newSize.height

        } else {

            newCSS.top = 'inherit'
            newCSS.bottom = multiselect.position.bottom
            newCSS.height = multiselect.position.top - e.pageY

        }

        if (mousePos.x >= multiselect.position.left) {

            documentSize.width = $(document).width()

            // Do not leave the screen
            newSize.width = mousePos.x - multiselect.position.left
            if ((multiselect.position.left + newSize.width) >= documentSize.width) {
                newSize.width -= (multiselect.position.left + newSize.width) - documentSize.width + 2
            }

            newCSS.right = 'inherit'
            newCSS.left = multiselect.position.left
            newCSS.width = newSize.width

        } else {

            newCSS.right = multiselect.position.right
            newCSS.left = 'inherit'
            newCSS.width = multiselect.position.left - e.pageX

        }

        // Updated all CSS properties at once
        $('#multiselect').css(newCSS)

    },

    multiselect.stopResize = function () {

        if (multiselect.position.top !== null) $(document).off('mousemove mouseup')

    },

    multiselect.getSize = function () {

        if (!visible.multiselect()) return false

        let $elem = $('#multiselect')
        let offset = $elem.offset()

        return {
            top: offset.top,
            left: offset.left,
            width: parseInt($elem.css('width').replace('px', '')),
            height: parseInt($elem.css('height').replace('px', ''))
        }

    },

    multiselect.getSelection = function (e) {

        let tolerance = 150
        let ids = []
        let size = multiselect.getSize()

        if (visible.contextMenu()) return false
        if (!visible.multiselect()) return false

        $('.photo, .album').each(function () {

            let offset = $(this).offset()

            if (offset.top >= (size.top - tolerance) &&
                offset.left >= (size.left - tolerance) &&
                (offset.top + 206) <= (size.top + size.height + tolerance) &&
                (offset.left + 206) <= (size.left + size.width + tolerance)) {

                let id = $(this).data('id')

                if (id !== '0' && id !== 0 && id !== 'f' && id !== 's' && id !== 'r' && id != null) {

                    ids.push(id)
                    $(this).addClass('active')

                }

            }

        })

        if (ids.length !== 0 && visible.album()) contextMenu.photoMulti(ids, e)
        else if (ids.length !== 0 && visible.albums()) contextMenu.albumMulti(ids, e)
        else multiselect.close()

    },

    multiselect.close = function () {

        sidebar.setSelectable(true)

        multiselect.stopResize()

        multiselect.position.top = null
        multiselect.position.right = null
        multiselect.position.bottom = null
        multiselect.position.left = null

        web.animate('#multiselect', 'fadeOut')
        setTimeout(() => $('#multiselect').remove(), 300)

    },

    /**
     * @description Controls the access to password-protected albums and photos.
     */

    password = {

        value: ''

    },

    password.get = function (albumID, callback) {

        // console.log(album.json.askpw)

        if (web.publicMode === false && (!album.json || !album.json.askpw || album.json.askpw === false)) callback()
        else if (album.json && album.json.password === '0') callback()
        else if (!(['s', 'f', 'r', '0']).includes(albumID) && albums.json && albums.getByID(albumID).password === '0') callback()
        else if (web.publicMode === true && albumID === 's') callback()
        else if (!albums.json && !album.json) {

            // Continue without password

            album.json = {
                password: true
            }
            callback('')

        } else {

            // Request password

            password.getDialog(albumID, callback)

        }

    },

    password.getDialog = function (albumID, callback) {

        const action = (data) => {

            let passwd = data.password

            let params = {
                albumID,
                password: passwd
            }

            api.post('Album::getPublic', params, function (data) {

                if (data === true) {
                    basicModal.close()
                    password.value = passwd
                    callback()
                } else {
                    basicModal.error('password')
                }

            })

        }

        const cancel = () => {

            basicModal.close()
            if (!visible.albums()) web.goto()

        }

        let msg = `
	          <p>
	              This album is protected by a password. Enter the password below to view the photos of this album:
	              <input name='password' class='text' type='password' placeholder='password' value=''>
	          </p>
	          `

        basicModal.show({
            body: msg,
            buttons: {
                action: {
                    title: 'Enter',
                    fn: action
                },
                cancel: {
                    title: 'Cancel',
                    fn: cancel
                }
            }
        })

    },


    /**
     * @description Takes care of every action a slide can handle and execute.
     */

    slide = {

        json: null,
        cache: null

    },

    slide.getID = function () {

        let id = null

        if (slide.json) id = slide.json.id
        else id = $('.slide:hover, .slide.active').attr('data-id')

        if ($.isNumeric(id) === true) return id
        else return false

    },

    slide.saveStage = function (slideID) {

        console.log('startSlide = ' + slideID)

        let currentIndex = Object.keys(album.json_slides.content).indexOf(slideID)

        localStorage.setItem('currentStage', JSON.stringify({
            slideID: slideID,
            index: currentIndex
        }))

    },

    slide.load = function (slideID, albumID, mode, reload = true) {

        console.log(mode)

        if (reload === true) {

            const checkContent = function () {
                if (album.json != null) slide.load(slideID, albumID, mode, reload)
                else setTimeout(checkContent, 100)
            }

            const checkPasswd = function () {
                if (password.value !== '') slide.load(slideID, albumID, mode, reload)
                else setTimeout(checkPasswd, 200)
            }

            if (album.json == null) {
                checkContent()
                return false
            }

            let params = {
                slideID: slideID,
                albumID: albumID,
                password: password.value
            }

            api.post('Slide::getSlide', params, function (data) {

                if (data === 'Warning: Photo private!') {
                    web.content.show()
                    web.goto()
                    return false
                }

                if (data === 'Warning: Wrong password!') {
                    checkPasswd()
                    return false
                }

                slide.json = data
                photo.json = {}
                $.each(slide.json, function (i, v) {
                    if (!(['slide_id', 'photo_id', 'note', 'id']).includes(i)) {
                        photo.json[i] = v
                    } else if (i == 'photo_id') {
                        photo.json['id'] = v
                    }
                })

                if (!visible.slide()) view.slide.show()
                view.slide.init(mode)
                web.slideview.show()

                if (mode === 'presentation') {
                    view.presentation.show()
                } else {
                    view.presentation.hide()
                }

                setTimeout(() => {
                    web.content.show()

                    slide.preloadNext(slideID)

                }, 300)

            })

        } else {

            if (mode === 'presentation') {
                view.presentation.show()
            } else {
                view.presentation.hide()
                //slide.preloadNext(slideID)

            }
        }

    },

    slide.parse = function () {

        if (!photo.json.title) photo.json.title = 'Untitled'
        if (!slide.json.title) slide.json.title = 'Untitled'

    },

    // Preload the next photo for better response time
    slide.preloadNext = function (slideID) {

        if (album.json_slides &&
            album.json_slides.content &&
            album.json_slides.content[slideID] &&
            album.json_slides.content[slideID].nextPhoto != '') {

            let nextPhoto = album.json_slides.content[slideID].nextPhoto
            let url = album.json_slides.content[nextPhoto].url
            let medium = album.json_slides.content[nextPhoto].medium
            let href = (medium != null && medium !== '' ? medium : url)

            $('head [data-prefetch]').remove()
            $('head').append(`<link data-prefetch rel="prefetch" href="${ href }">`)

        }

    },

    slide.previous = function (animate) {

        if (slide.getID() !== false &&
            album.json_slides &&
            album.json_slides.content[slide.getID()] &&
            album.json_slides.content[slide.getID()].previousPhoto !== '') {

            let delay = 0

            if (animate === true) {

                delay = 200

                web.slideview.find('#image').css({
                    WebkitTransform: 'translateX(100%)',
                    MozTransform: 'translateX(100%)',
                    transform: 'translateX(100%)',
                    opacity: 0
                })

            }

            setTimeout(() => {
                if (slide.getID() === false) return false
                if (visible.presentation()) {
                    web.goto(album.getID() + '/p/' + album.json_slides.content[slide.getID()].previousPhoto)

                    // save state
                    slide.saveStage(album.json_slides.content[slide.getID()].previousPhoto)

                } else web.goto(album.getID() + '/s/' + album.json_slides.content[slide.getID()].previousPhoto)
            }, delay)

        }

    },

    slide.next = function (animate) {

        if (slide.getID() !== false &&
            album.json_slides &&
            album.json_slides.content[slide.getID()] &&
            album.json_slides.content[slide.getID()].nextPhoto !== '') {

            let delay = 0

            if (animate === true) {

                delay = 200

                web.slideview.find('#image').css({
                    WebkitTransform: 'translateX(-100%)',
                    MozTransform: 'translateX(-100%)',
                    transform: 'translateX(-100%)',
                    opacity: 0
                })

            }

            setTimeout(() => {
                if (slide.getID() === false) return false
                if (visible.presentation()) {

                    web.goto(album.getID() + '/p/' + album.json_slides.content[slide.getID()].nextPhoto)

                    // save state
                    console.log(album.json_slides.content[slide.getID()].nextPhoto)
                    slide.saveStage(album.json_slides.content[slide.getID()].nextPhoto)

                } else web.goto(album.getID() + '/s/' + album.json_slides.content[slide.getID()].nextPhoto)
            }, delay)

        }

    },

    slide.delete = function (slideIDs) {

        let action = {}
        let cancel = {}
        let msg = ''

        if (!slideIDs) return false
        if (slideIDs instanceof Array === false) slideIDs = [slideIDs]

        action.fn = function () {

            let nextPhoto = null
            let previousPhoto = null

            basicModal.close()

            slideIDs.forEach(function (id, index, array) {

                // Change reference for the next and previous slide
                if (album.json_slides.content[id].nextPhoto !== '' || album.json_slides.content[id].previousPhoto !== '') {

                    nextPhoto = album.json_slides.content[id].nextPhoto
                    previousPhoto = album.json_slides.content[id].previousPhoto

                    album.json_slides.content[previousPhoto].nextPhoto = nextPhoto
                    album.json_slides.content[nextPhoto].previousPhoto = previousPhoto

                }

                delete album.json_slides.content[id]
                view.album.content.delete(id)

            })

            albums.refresh()

            // Go to next slide if there is a next slide and
            // next slide is not the current one. Show album otherwise.
            if (visible.slide() && nextPhoto != null && nextPhoto !== slide.getID()) web.goto(album.getID() + '/s/' + nextPhoto)
            else if (!visible.albums()) web.goto(album.getID())

            let params = {
                slideIDs: slideIDs.join()
            }

            api.post('Slide::delete', params, function (data) {

                if (data !== true) web.error(null, params, data)
                else {
                    $.each(slideIDs, function (i, slideID) {
                        web.toc.find('.slide[data-id="' + slideID + '"]').remove()
                    })
                }

            })

        }

        if (slideIDs.length === 1) {

            action.title = 'Delete Slide'
            cancel.title = 'Keep Slide'

            msg = web.html `<p>Are you sure you want to delete this slide? This action can't be undone!</p>`

        } else {

            action.title = 'Delete Slides'
            cancel.title = 'Keep Slides'

            msg = web.html `<p>Are you sure you want to delete all $${ slideIDs.length } selected slides? This action can't be undone!</p>`

        }

        basicModal.show({
            body: msg,
            buttons: {
                action: {
                    title: action.title,
                    fn: action.fn,
                    class: 'red'
                },
                cancel: {
                    title: cancel.title,
                    fn: basicModal.close
                }
            }
        })

    },

    slide.sort = function (albumID) {

        let slideOrder = web.toc.children().map(function () {
            return $(this).data("id")
        }).get()

        var params = {
            albumID: albumID,
            photoOrder: slideOrder
        }

        api.post("Slide::setPosition", params, function (data) {
            if (data !== true) web.error(null, params, data)
        })

    },

    slide.setNote = function () {

        let note_content = $('#s_note').val()

        let params = {
            slideID: slide.json.id,
            note: note_content
        }

        api.post("Slide::setNote", params, function (data) {
            if (data !== true) web.error(null, params, data)
            else $('#save_note').attr('disabled', true)
        })

    }



/**
 * @description Takes care of every action a photo can handle and execute.
 */

photo = {

        json: null,
        cache: null

    },

    photo.getID = function () {

        let id = null

        if (photo.json) id = photo.json.id
        else id = $('.photo:hover, .photo.active').attr('data-id')

        if ($.isNumeric(id) === true) return id
        else return false

    },

    photo.load = function (photoID, albumID) {

        const checkContent = function () {
            if (album.json != null) photo.load(photoID, albumID)
            else setTimeout(checkContent, 100)
        }

        const checkPasswd = function () {
            if (password.value !== '') photo.load(photoID, albumID)
            else setTimeout(checkPasswd, 200)
        }

        if (album.json == null) {
            checkContent()
            return false
        }

        let params = {
            photoID: photoID,
            albumID: albumID,
            password: password.value
        }

        api.post('Photo::get', params, function (data) {

            if (data === 'Warning: Photo private!') {
                web.content.show()
                web.goto()
                return false
            }

            if (data === 'Warning: Wrong password!') {
                checkPasswd()
                return false
            }

            photo.json = data

            if (!visible.photo()) view.photo.show()
            view.photo.init()
            web.imageview.show()

            setTimeout(() => {
                web.content.show()
                photo.preloadNext(photoID)
            }, 300)

        })

    },

    // Preload the next photo for better response time
    photo.preloadNext = function (photoID) {

        if (album.json &&
            album.json.content &&
            album.json.content[photoID] &&
            album.json.content[photoID].nextPhoto != '') {

            let nextPhoto = album.json.content[photoID].nextPhoto
            let url = album.json.content[nextPhoto].url
            let medium = album.json.content[nextPhoto].medium
            let href = (medium != null && medium !== '' ? medium : url)

            $('head [data-prefetch]').remove()
            $('head').append(`<link data-prefetch rel="prefetch" href="${ href }">`)

        }

    },

    photo.parse = function () {

        if (!photo.json.title) photo.json.title = 'Untitled'

    },

    photo.previous = function (animate) {

        if (photo.getID() !== false &&
            album.json &&
            album.json.content[photo.getID()] &&
            album.json.content[photo.getID()].previousPhoto !== '') {

            let delay = 0

            if (animate === true) {

                delay = 200

                web.imageview.find('#image').css({
                    WebkitTransform: 'translateX(100%)',
                    MozTransform: 'translateX(100%)',
                    transform: 'translateX(100%)',
                    opacity: 0
                })

            }

            setTimeout(() => {
                if (photo.getID() === false) return false
                web.goto(album.getID() + '/' + album.json.content[photo.getID()].previousPhoto)
            }, delay)

        }

    },

    photo.next = function (animate) {

        if (photo.getID() !== false &&
            album.json &&
            album.json.content[photo.getID()] &&
            album.json.content[photo.getID()].nextPhoto !== '') {

            let delay = 0

            if (animate === true) {

                delay = 200

                web.imageview.find('#image').css({
                    WebkitTransform: 'translateX(-100%)',
                    MozTransform: 'translateX(-100%)',
                    transform: 'translateX(-100%)',
                    opacity: 0
                })

            }

            setTimeout(() => {
                if (photo.getID() === false) return false
                web.goto(album.getID() + '/' + album.json.content[photo.getID()].nextPhoto)
            }, delay)

        }

    },

    photo.duplicate = function (photoIDs) {

        if (!photoIDs) return false
        if (photoIDs instanceof Array === false) photoIDs = [photoIDs]

        albums.refresh()

        let params = {
            photoIDs: photoIDs.join()
        }

        api.post('Photo::duplicate', params, function (data) {

            if (data !== true) web.error(null, params, data)
            else album.load(album.getID())

        })

    },

    photo.delete = function (photoIDs) {

        let action = {}
        let cancel = {}
        let msg = ''
        let photoTitle = ''

        if (!photoIDs) return false
        if (photoIDs instanceof Array === false) photoIDs = [photoIDs]

        if (photoIDs.length === 1) {

            // Get title if only one photo is selected
            if (visible.photo()) photoTitle = photo.json.title
            else photoTitle = album.json.content[photoIDs].title

            // Fallback for photos without a title
            if (photoTitle === '') photoTitle = 'Untitled'

        }

        action.fn = function () {

            let nextPhoto = null
            let previousPhoto = null

            basicModal.close()

            photoIDs.forEach(function (id, index, array) {

                // Change reference for the next and previous photo
                if (album.json.content[id].nextPhoto !== '' || album.json.content[id].previousPhoto !== '') {

                    nextPhoto = album.json.content[id].nextPhoto
                    previousPhoto = album.json.content[id].previousPhoto

                    album.json.content[previousPhoto].nextPhoto = nextPhoto
                    album.json.content[nextPhoto].previousPhoto = previousPhoto

                }

                delete album.json.content[id]
                view.album.content.delete(id)

            })

            albums.refresh()

            // Go to next photo if there is a next photo and
            // next photo is not the current one. Show album otherwise.
            if (visible.photo() && nextPhoto != null && nextPhoto !== photo.getID()) web.goto(album.getID() + '/' + nextPhoto)
            else if (!visible.albums()) web.goto(album.getID())

            let params = {
                photoIDs: photoIDs.join()
            }

            api.post('Photo::delete', params, function (data) {

                if (data !== true) web.error(null, params, data)

            })

        }

        if (photoIDs.length === 1) {

            action.title = 'Delete Photo'
            cancel.title = 'Keep Photo'

            msg = web.html `<p>Are you sure you want to delete the photo '$${ photoTitle }'? This action can't be undone!</p>`

        } else {

            action.title = 'Delete Photo'
            cancel.title = 'Keep Photo'

            msg = web.html `<p>Are you sure you want to delete all $${ photoIDs.length } selected photo? This action can't be undone!</p>`

        }

        basicModal.show({
            body: msg,
            buttons: {
                action: {
                    title: action.title,
                    fn: action.fn,
                    class: 'red'
                },
                cancel: {
                    title: cancel.title,
                    fn: basicModal.close
                }
            }
        })

    },

    photo.setTitle = function (photoIDs) {

        let oldTitle = ''
        let msg = ''

        if (!photoIDs) return false
        if (photoIDs instanceof Array === false) photoIDs = [photoIDs]

        if (photoIDs.length === 1) {

            // Get old title if only one photo is selected
            if (photo.json) oldTitle = photo.json.title
            else if (album.json) oldTitle = album.json.content[photoIDs].title

        }

        const action = function (data) {

            basicModal.close()

            let newTitle = data.title

            if (visible.photo() || visible.slide()) {
                photo.json.title = (newTitle === '' ? 'Untitled' : newTitle)
                view.photo.title()
            }

            photoIDs.forEach(function (id, index, array) {
                album.json.content[id].title = newTitle
                view.album.content.title(id)
            })

            let params = {
                photoIDs: photoIDs.join(),
                title: newTitle
            }

            api.post('Photo::setTitle', params, function (data) {

                if (data !== true) web.error(null, params, data)

            })

        }

        let input = web.html `<input class='text' name='title' type='text' maxlength='50' placeholder='Title' value='$${ oldTitle }'>`

        if (photoIDs.length === 1) msg = web.html `<p>Enter a new title for this photo: ${ input }</p>`
        else msg = web.html `<p>Enter a title for all $${ photoIDs.length } selected photos: ${ input }</p>`

        basicModal.show({
            body: msg,
            buttons: {
                action: {
                    title: 'Set title',
                    fn: action
                },
                cancel: {
                    title: 'Cancel',
                    fn: basicModal.close
                }
            }
        })

    },

    photo.setAlbum = function (photoIDs, albumID) {

        let nextPhoto = null
        let previousPhoto = null

        if (!photoIDs) return false
        if (photoIDs instanceof Array === false) photoIDs = [photoIDs]

        photoIDs.forEach(function (id, index, array) {

            // Change reference for the next and previous photo
            if (album.json.content[id].nextPhoto !== '' || album.json.content[id].previousPhoto !== '') {

                nextPhoto = album.json.content[id].nextPhoto
                previousPhoto = album.json.content[id].previousPhoto

                album.json.content[previousPhoto].nextPhoto = nextPhoto
                album.json.content[nextPhoto].previousPhoto = previousPhoto

            }

            delete album.json.content[id]
            view.album.content.delete(id)

        })

        albums.refresh()

        // Go to next photo if there is a next photo and
        // next photo is not the current one. Show album otherwise.
        if (visible.photo() && nextPhoto != null && nextPhoto !== photo.getID()) web.goto(album.getID() + '/' + nextPhoto)
        else if (!visible.albums()) web.goto(album.getID())

        let params = {
            photoIDs: photoIDs.join(),
            albumID
        }

        api.post('Photo::setAlbum', params, function (data) {

            if (data !== true) web.error(null, params, data)

        })

    },

    photo.setStar = function (photoIDs) {

        if (!photoIDs) return false

        if (visible.photo()) {
            photo.json.star = (photo.json.star === '0' ? '1' : '0')
            view.photo.star()
        }

        photoIDs.forEach(function (id, index, array) {
            album.json.content[id].star = (album.json.content[id].star === '0' ? '1' : '0')
            view.album.content.star(id)
        })

        albums.refresh()

        let params = {
            photoIDs: photoIDs.join()
        }

        api.post('Photo::setStar', params, function (data) {

            if (data !== true) web.error(null, params, data)

        })

    },

    photo.setPublic = function (photoID, e) {

        if (photo.json.public === '2') {

            const action = function () {

                basicModal.close()
                web.goto(photo.json.original_album)

            }

            basicModal.show({
                body: '<p>This photo is located in a public album. To make this photo private or public, edit the visibility of the associated album.</p>',
                buttons: {
                    action: {
                        title: 'Show Album',
                        fn: action
                    },
                    cancel: {
                        title: 'Cancel',
                        fn: basicModal.close
                    }
                }
            })

            return false

        }

        if (visible.photo()) {

            photo.json.public = (photo.json.public === '0' ? '1' : '0')
            view.photo.public()
            if (photo.json.public === '1') contextMenu.sharePhoto(photoID, e)

        }

        album.json.content[photoID].public = (album.json.content[photoID].public === '0' ? '1' : '0')
        view.album.content.public(photoID)

        albums.refresh()

        api.post('Photo::setPublic', {
            photoID
        }, function (data) {

            if (data !== true) web.error(null, params, data)

        })

    },

    photo.setDescription = function (photoID) {

        let oldDescription = photo.json.description

        const action = function (data) {

            basicModal.close()

            let description = data.description

            if (visible.photo() || visible.slide()) {
                photo.json.description = description
                view.photo.description()
            }

            let params = {
                photoID,
                description
            }

            api.post('Photo::setDescription', params, function (data) {

                if (data !== true) web.error(null, params, data)

            })

        }

        basicModal.show({
            body: web.html `<p>Enter a description for this photo: <input class='text' name='description' type='text' maxlength='800' placeholder='Description' value='$${ oldDescription }'></p>`,
            buttons: {
                action: {
                    title: 'Set Description',
                    fn: action
                },
                cancel: {
                    title: 'Cancel',
                    fn: basicModal.close
                }
            }
        })

    },

    photo.editTags = function (photoIDs) {

        let oldTags = ''
        let msg = ''

        if (!photoIDs) return false
        if (photoIDs instanceof Array === false) photoIDs = [photoIDs]

        // Get tags
        if (visible.photo() || visible.slide()) oldTags = photo.json.tags
        else if (visible.album() && photoIDs.length === 1) oldTags = album.json.content[photoIDs].tags
        else if (visible.search() && photoIDs.length === 1) oldTags = album.json.content[photoIDs].tags
        else if (visible.album() && photoIDs.length > 1) {
            let same = true
            photoIDs.forEach(function (id, index, array) {
                if (album.json.content[id].tags === album.json.content[photoIDs[0]].tags && same === true) same = true
                else same = false
            })
            if (same === true) oldTags = album.json.content[photoIDs[0]].tags
        }

        // Improve tags
        oldTags = oldTags.replace(/,/g, ', ')

        const action = function (data) {

            basicModal.close()
            photo.setTags(photoIDs, data.tags)

        }

        let input = web.html `<input class='text' name='tags' type='text' maxlength='800' placeholder='Tags' value='$${ oldTags }'>`

        if (photoIDs.length === 1) msg = web.html `<p>Enter your tags for this photo. You can add multiple tags by separating them with a comma: ${ input }</p>`
        else msg = web.html `<p>Enter your tags for all $${ photoIDs.length } selected photos. Existing tags will be overwritten. You can add multiple tags by separating them with a comma: ${ input }</p>`

        basicModal.show({
            body: msg,
            buttons: {
                action: {
                    title: 'Set Tags',
                    fn: action
                },
                cancel: {
                    title: 'Cancel',
                    fn: basicModal.close
                }
            }
        })

    },

    photo.setTags = function (photoIDs, tags) {

        if (!photoIDs) return false
        if (photoIDs instanceof Array === false) photoIDs = [photoIDs]

        // Parse tags
        tags = tags.replace(/(\ ,\ )|(\ ,)|(,\ )|(,{1,}\ {0,})|(,$|^,)/g, ',')
        tags = tags.replace(/,$|^,|(\ ){0,}$/g, '')

        if (visible.photo() || visible.slide()) {
            photo.json.tags = tags
            view.photo.tags()
        }

        photoIDs.forEach(function (id, index, array) {
            album.json.content[id].tags = tags
        })

        let params = {
            photoIDs: photoIDs.join(),
            tags
        }

        api.post('Photo::setTags', params, function (data) {

            if (data !== true) web.error(null, params, data)

        })

    },

    photo.deleteTag = function (photoID, index) {

        let tags

        // Remove
        tags = photo.json.tags.split(',')
        tags.splice(index, 1)

        // Save
        photo.json.tags = tags.toString()
        photo.setTags([photoID], photo.json.tags)

    },

    photo.share = function (photoID, service) {

        let url = photo.getViewLink(photoID)

        switch (service) {
            case 'twitter':
                window.open(`https://twitter.com/share?url=${ encodeURI(url) }`)
                break
            case 'facebook':
                window.open(`http://www.facebook.com/sharer.php?u=${ encodeURI(url) }&t=${ encodeURI(photo.json.title) }`)
                break
            case 'mail':
                location.href = `mailto:?subject=${ encodeURI(photo.json.title) }&body=${ encodeURI(url) }`
                break
            case 'dropbox':
                web.loadDropbox(function () {
                    let filename = photo.json.title + '.' + photo.getDirectLink().split('.').pop()
                    Dropbox.save(photo.getDirectLink(), filename)
                })
                break
        }

    },

    photo.getArchive = function (photoID) {

        let link
        let url = `${ api.path }?function=Photo::getArchive&photoID=${ photoID }`

        if (location.href.indexOf('index.html') > 0) link = location.href.replace(location.hash, '').replace('index.html', url)
        else link = location.href.replace(location.hash, '') + url

        if (web.publicMode === true) link += `&password=${ encodeURIComponent(password.value) }`

        location.href = link

    },

    photo.getDirectLink = function () {

        let url = ''

        if (photo.json && photo.json.url && photo.json.url !== '') url = photo.json.url

        return url

    },

    photo.getViewLink = function (photoID) {

        let url = 'view.php?p=' + photoID

        if (location.href.indexOf('index.html') > 0) return location.href.replace('index.html' + location.hash, url)
        else return location.href.replace(location.hash, url)

    },


    /**
     * @description Searches through your photos and albums.
     */

    search = {

        hash: null

    },

    search.find = function (term) {

        clearTimeout($(window).data('timeout'))

        $(window).data('timeout', setTimeout(function () {

            if (header.dom('.header__search').val().length !== 0) {

                api.post('search', {
                    term
                }, function (data) {

                    let html = ''
                    let albumsData = ''
                    let photosData = ''

                    // Build albums
                    if (data && data.albums) {
                        albums.json = {
                            albums: data.albums
                        }
                        $.each(albums.json.albums, function () {
                            albums.parse(this)
                            albumsData += build.album(this)
                        })
                    }

                    // Build photos
                    if (data && data.photos) {
                        album.json = {
                            content: data.photos
                        }
                        $.each(album.json.content, function () {
                            photosData += build.photo(this)
                        })
                    }

                    // 1. No albums and photos
                    // 2. Only photos
                    // 3. Only albums
                    // 4. Albums and photos
                    if (albumsData === '' && photosData === '') html = 'error'
                    else if (albumsData === '') html = build.divider('Photos') + photosData
                    else if (photosData === '') html = build.divider('Albums') + albumsData
                    else html = build.divider('Albums') + albumsData + build.divider('Photos') + photosData

                    // Only refresh view when search results are different
                    if (search.hash !== data.hash) {

                        $('.no_content').remove()

                        web.animate('.content', 'contentZoomOut')

                        search.hash = data.hash

                        setTimeout(() => {

                            if (html === 'error') {
                                web.content.html('')
                                $('body').append(build.no_content('magnifying-glass'))
                            } else {
                                web.content.html(html)
                                web.animate(web.content, 'contentZoomIn')
                            }

                        }, 300)

                    }

                })

            } else search.reset()

        }, 250))

    },

    search.reset = function () {

        header.dom('.header__search').val('')
        $('.no_content').remove()

        if (search.hash != null) {

            // Trash data
            albums.json = null
            album.json = null
            photo.json = null
            search.hash = null

            web.animate('.divider', 'fadeOut')
            web.goto()

        }

    },


    /**
     * @description Lets you change settings.
     */

    settings = {},

    settings.createConfig = function () {

        const action = function (data) {

            let dbName = data.dbName || ''
            let dbUser = data.dbUser || ''
            let dbPassword = data.dbPassword || ''
            let dbHost = data.dbHost || ''
            let dbTablePrefix = data.dbTablePrefix || ''

            if (dbUser.length < 1) {
                basicModal.error('dbUser')
                return false
            }

            if (dbHost.length < 1) dbHost = 'localhost'
            if (dbName.length < 1) dbName = 'web'

            let params = {
                dbName,
                dbUser,
                dbPassword,
                dbHost,
                dbTablePrefix
            }

            api.post('Config::create', params, function (data) {

                if (data !== true) {

                    // Connection failed
                    if (data === 'Warning: Connection failed!') {

                        basicModal.show({
                            body: '<p>Unable to connect to host database because access was denied. Double-check your host, username and password and ensure that access from your current location is permitted.</p>',
                            buttons: {
                                action: {
                                    title: 'Retry',
                                    fn: settings.createConfig
                                }
                            }
                        })

                        return false

                    }

                    // Creation failed
                    if (data === 'Warning: Creation failed!') {

                        basicModal.show({
                            body: '<p>Unable to create the database. Double-check your host, username and password and ensure that the specified user has the rights to modify and add content to the database.</p>',
                            buttons: {
                                action: {
                                    title: 'Retry',
                                    fn: settings.createConfig
                                }
                            }
                        })

                        return false

                    }

                    // Could not create file
                    if (data === 'Warning: Could not create file!') {

                        basicModal.show({
                            body: "<p>Unable to save this configuration. Permission denied in <b>'data/'</b>. Please set the read, write and execute rights for others in <b>'data/'</b> and <b>'uploads/'</b>. Take a look at the readme for more information.</p>",
                            buttons: {
                                action: {
                                    title: 'Retry',
                                    fn: settings.createConfig
                                }
                            }
                        })

                        return false

                    }

                    // Something went wrong
                    basicModal.show({
                        body: '<p>Something unexpected happened. Please try again and check your installation and server. Take a look at the readme for more information.</p>',
                        buttons: {
                            action: {
                                title: 'Retry',
                                fn: settings.createConfig
                            }
                        }
                    })

                    return false

                } else {

                    // Configuration successful
                    window.location.reload()

                }

            })

        }

        let msg = `
	          <p>
	              Enter your database connection details below:
	              <input name='dbHost' class='text' type='text' placeholder='Database Host (optional)' value=''>
	              <input name='dbUser' class='text' type='text' placeholder='Database Username' value=''>
	              <input name='dbPassword' class='text' type='password' placeholder='Database Password' value=''>
	          </p>
	          <p>
	              PhotosManager will create its own database. If required, you can enter the name of an existing database instead:
	              <input name='dbName' class='text' type='text' placeholder='Database Name (optional)' value=''>
	              <input name='dbTablePrefix' class='text' type='text' placeholder='Table prefix (optional)' value=''>
	          </p>
	          `

        basicModal.show({
            body: msg,
            buttons: {
                action: {
                    title: 'Connect',
                    fn: action
                }
            }
        })

    },

    settings.createLogin = function () {

        const action = function (data) {

            let username = data.username
            let password = data.password

            if (username.length < 1) {
                basicModal.error('username')
                return false
            }

            if (password.length < 1) {
                basicModal.error('password')
                return false
            }

            basicModal.close()

            let params = {
                username,
                password
            }

            api.post('Settings::setLogin', params, function (data) {

                if (data !== true) {

                    basicModal.show({
                        body: '<p>Unable to save login. Please try again with another username and password!</p>',
                        buttons: {
                            action: {
                                title: 'Retry',
                                fn: settings.createLogin
                            }
                        }
                    })

                }

            })

        }

        let msg = `
	          <p>
	              Enter a username and password for your installation:
	              <input name='username' class='text' type='text' placeholder='New Username' value=''>
	              <input name='password' class='text' type='password' placeholder='New Password' value=''>
	          </p>
	          `

        basicModal.show({
            body: msg,
            buttons: {
                action: {
                    title: 'Create Login',
                    fn: action
                }
            }
        })

    },

    settings.setLogin = function () {

        const action = function (data) {

            let oldPassword = data.oldPassword || ''
            let username = data.username || ''
            let password = data.password || ''

            if (oldPassword.length < 1) {
                basicModal.error('oldPassword')
                return false
            }

            if (username.length < 1) {
                basicModal.error('username')
                return false
            }

            if (password.length < 1) {
                basicModal.error('password')
                return false
            }

            basicModal.close()

            let params = {
                oldPassword,
                username,
                password
            }

            api.post('Settings::setLogin', params, function (data) {

                if (data !== true) web.error(null, params, data)

            })

        }

        let msg = `
	          <p>
	              Enter your current password:
	              <input name='oldPassword' class='text' type='password' placeholder='Current Password' value=''>
	          </p>
	          <p>
	              Your username and password will be changed to the following:
	              <input name='username' class='text' type='text' placeholder='New Username' value=''>
	              <input name='password' class='text' type='password' placeholder='New Password' value=''>
	          </p>
	          `

        basicModal.show({
            body: msg,
            buttons: {
                action: {
                    title: 'Change Login',
                    fn: action
                },
                cancel: {
                    title: 'Cancel',
                    fn: basicModal.close
                }
            }
        })

    },

    settings.setSorting = function () {

        let sortingPhotos = []
        let sortingAlbums = []

        const action = function () {

            sortingAlbums[0] = $('.basicModal select#settings_albums_type').val()
            sortingAlbums[1] = $('.basicModal select#settings_albums_order').val()

            sortingPhotos[0] = $('.basicModal select#settings_photos_type').val()
            sortingPhotos[1] = $('.basicModal select#settings_photos_order').val()

            basicModal.close()
            albums.refresh()

            let params = {
                typeAlbums: sortingAlbums[0],
                orderAlbums: sortingAlbums[1],
                typePhotos: sortingPhotos[0],
                orderPhotos: sortingPhotos[1]
            }

            api.post('Settings::setSorting', params, function (data) {

                if (data === true) {
                    web.sortingAlbums = 'ORDER BY ' + sortingAlbums[0] + ' ' + sortingAlbums[1]
                    web.sortingPhotos = 'ORDER BY ' + sortingPhotos[0] + ' ' + sortingPhotos[1]
                    web.load()
                } else web.error(null, params, data)

            })

        }

        let msg = `
	          <p>
	              Sort albums by
	              <span class="select">
	                  <select id='settings_albums_type'>
	                      <option value='id'>Creation Time</option>
	                      <option value='title'>Title</option>
	                      <option value='description'>Description</option>
	                      <option value='public'>Public</option>
	                  </select>
	              </span>
	              in an
	              <span class="select">
	                  <select id='settings_albums_order'>
	                      <option value='ASC'>Ascending</option>
	                      <option value='DESC'>Descending</option>
	                  </select>
	              </span>
	              order.
	          </p>
	          <p>
	              Sort photos by
	              <span class="select">
	                  <select id='settings_photos_type'>
	                      <option value='id'>Upload Time</option>
	                      <option value='takestamp'>Take Date</option>
	                      <option value='title'>Title</option>
	                      <option value='description'>Description</option>
	                      <option value='public'>Public</option>
	                      <option value='star'>Star</option>
	                      <option value='type'>Photo Format</option>
	                  </select>
	              </span>
	              in an
	              <span class="select">
	                  <select id='settings_photos_order'>
	                      <option value='ASC'>Ascending</option>
	                      <option value='DESC'>Descending</option>
	                  </select>
	              </span>
	              order.
	          </p>
	          `

        basicModal.show({
            body: msg,
            buttons: {
                action: {
                    title: 'Change Sorting',
                    fn: action
                },
                cancel: {
                    title: 'Cancel',
                    fn: basicModal.close
                }
            }
        })

        if (web.sortingAlbums !== '') {

            sortingAlbums = web.sortingAlbums.replace('ORDER BY ', '').split(' ')

            $('.basicModal select#settings_albums_type').val(sortingAlbums[0])
            $('.basicModal select#settings_albums_order').val(sortingAlbums[1])

        }

        if (web.sortingPhotos !== '') {

            sortingPhotos = web.sortingPhotos.replace('ORDER BY ', '').split(' ')

            $('.basicModal select#settings_photos_type').val(sortingPhotos[0])
            $('.basicModal select#settings_photos_order').val(sortingPhotos[1])

        }

    },

    settings.setDropboxKey = function (callback) {

        const action = function (data) {

            let key = data.key

            if (data.key.length < 1) {
                basicModal.error('key')
                return false
            }

            basicModal.close()

            api.post('Settings::setDropboxKey', {
                key
            }, function (data) {

                if (data === true) {
                    web.dropboxKey = key
                    if (callback) web.loadDropbox(callback)
                } else web.error(null, params, data)

            })

        }

        let msg = web.html `
	          <p>
	              In order to import photos from your Dropbox, you need a valid drop-ins app key from <a href='https://www.dropbox.com/developers/apps/create'>their website</a>. Generate yourself a personal key and enter it below:
	              <input class='text' name='key' type='text' placeholder='Dropbox API Key' value='$${ web.dropboxKey }'>
	          </p>
	          `

        basicModal.show({
            body: msg,
            buttons: {
                action: {
                    title: 'Set Dropbox Key',
                    fn: action
                },
                cancel: {
                    title: 'Cancel',
                    fn: basicModal.close
                }
            }
        })

    },


    sidebar_slideshow = {
        _dom: $(".sidebar_slideshow"),
        types: {
            DEFAULT: 0,
            TAGS: 1
        },
        //createStructure: {}
    }, sidebar_slideshow.dom = function (t) {
        return null == t || "" === t ? sidebar_slideshow._dom : sidebar_slideshow._dom.find(t)
    }, sidebar_slideshow.show = function () {
        return (web.content.addClass("content--sidebar_left"), sidebar_slideshow.dom().addClass("active"), header.dom().addClass('header--sidebar_left'), !0)
    }, sidebar_slideshow.hide = function () {
        return (web.content.removeClass("content--sidebar_left"), sidebar_slideshow.dom().removeClass("active"), header.dom().removeClass('header--sidebar_left'), !0)
    }, sidebar_slideshow.toggle = function () {
        return (web.content.toggleClass("content--sidebar_left"), sidebar_slideshow.dom().toggleClass("active"), header.dom().toggleClass('header--sidebar_left'), !0)
    },


    /**
     * @description This module takes care of the left sidebar (for slideshows).
     */

    sidebar_slideshow = {

        _dom: $('.sidebar_slideshow'),
        types: {
            DEFAULT: 0,
            TAGS: 1
        },
        createStructure: {}

    },

    sidebar_slideshow.dom = function (selector) {

        if (selector == null || selector === '') return sidebar_slideshow._dom

        return sidebar_slideshow._dom.find(selector)

    },

    sidebar_slideshow.toggle = function () {

        web.content.toggleClass('content--sidebar_left')
        sidebar_slideshow.dom().toggleClass('active')
        header.dom().toggleClass('header--sidebar_left')

        return true

    },

    sidebar_slideshow.show = function () {

        web.content.addClass('content--sidebar_left')
        sidebar_slideshow.dom().addClass('active')
        header.dom().addClass('header--sidebar_left')

        return true

    },

    sidebar_slideshow.hide = function () {

        web.content.removeClass('content--sidebar_left')
        sidebar_slideshow.dom().removeClass('active')
        header.dom().removeClass('header--sidebar_left')

        return true

    },


    /**
     * @description This module takes care of the sidebar.
     */

    sidebar = {

        _dom: $('.sidebar'),
        types: {
            DEFAULT: 0,
            TAGS: 1
        },
        createStructure: {}

    },

    sidebar.dom = function (selector) {

        if (selector == null || selector === '') return sidebar._dom

        return sidebar._dom.find(selector)

    },

    sidebar.bind = function () {

        // This function should be called after building and appending
        // the sidebars content to the DOM.
        // This function can be called multiple times, therefore
        // event handlers should be removed before binding a new one.

        // Event Name
        let eventName = web.getEventName()

        sidebar
            .dom('#edit_title')
            .off(eventName)
            .on(eventName, function () {
                if (visible.photo() || visible.slide()) photo.setTitle([photo.getID()])
                else if (visible.album()) album.setTitle([album.getID()])
            })

        sidebar
            .dom('#edit_description')
            .off(eventName)
            .on(eventName, function () {
                if (visible.photo() || visible.slide()) photo.setDescription(photo.getID())
                else if (visible.album()) album.setDescription(album.getID())
            })

        sidebar
            .dom('#edit_tags')
            .off(eventName)
            .on(eventName, function () {
                photo.editTags([photo.getID()])
            })

        sidebar
            .dom('#tags .tag span')
            .off(eventName)
            .on(eventName, function () {
                photo.deleteTag(photo.getID(), $(this).data('index'))
            })

        return true

    },

    sidebar.toggle = function () {

        if (visible.sidebar() || visible.sidebarbutton()) {

            header.dom('.button--info').toggleClass('active')
            web.content.toggleClass('content--sidebar')
            sidebar.dom().toggleClass('active')

            return true

        }

        return false

    },

    sidebar.show = function () {

        if (visible.sidebar() || visible.sidebarbutton()) {

            header.dom('.button--info').addClass('active')
            web.content.addClass('content--sidebar')
            sidebar.dom().addClass('active')

            return true

        }

        return false

    },

    sidebar.hide = function () {

        if (visible.sidebar() || visible.sidebarbutton()) {

            header.dom('.button--info').removeClass('active')
            web.content.removeClass('content--sidebar')
            sidebar.dom().removeClass('active')

            return true

        }

        return false

    },

    sidebar.setSelectable = function (selectable = true) {

        // Attributes/Values inside the sidebar are selectable by default.
        // Selection needs to be deactivated to prevent an unwanted selection
        // while using multiselect.

        if (selectable === true) sidebar.dom().removeClass('notSelectable')
        else sidebar.dom().addClass('notSelectable')

    },

    sidebar.changeAttr = function (attr, value = '-', dangerouslySetInnerHTML = false) {

        if (attr == null || attr === '') return false

        // Set a default for the value
        if (value == null || value === '') value = '-'

        // Escape value
        if (dangerouslySetInnerHTML === false) value = web.escapeHTML(value)

        // Set new value
        sidebar.dom('.attr_' + attr).html(value)

        return true

    },

    sidebar.createStructure.photo = function (data) {

        if (data == null || data === '') return false

        let editable = false
        let exifHash = data.takestamp + data.make + data.model + data.shutter + data.aperture + data.focal + data.iso
        let structure = {}
        let _public = ''

        // Enable editable when user logged in
        if (web.publicMode === false) editable = true

        // Set value for public
        switch (data.public) {

            case '0':
                _public = 'No'
                break
            case '1':
                _public = 'Yes'
                break
            case '2':
                _public = 'Yes (Album)'
                break
            default:
                _public = '-'
                break

        }

        structure.basics = {
            title: 'Basics',
            type: sidebar.types.DEFAULT,
            rows: [{
                    title: 'Title',
                    value: data.title,
                    editable
                },
                {
                    title: 'Uploaded',
                    value: data.sysdate
                },
                {
                    title: 'Description',
                    value: data.description,
                    editable
                }
            ]
        }

        structure.image = {
            title: 'Image',
            type: sidebar.types.DEFAULT,
            rows: [{
                    title: 'Size',
                    value: data.size
                },
                {
                    title: 'Format',
                    value: data.type
                },
                {
                    title: 'Resolution',
                    value: data.width + ' x ' + data.height
                }
            ]
        }

        // Only create tags section when user logged in
        if (web.publicMode === false) {

            structure.tags = {
                title: 'Tags',
                type: sidebar.types.TAGS,
                value: build.tags(data.tags),
                editable
            }

        } else {

            structure.tags = {}

        }

        // Only create EXIF section when EXIF data available
        if (exifHash !== '0') {

            structure.exif = {
                title: 'Camera',
                type: sidebar.types.DEFAULT,
                rows: [{
                        title: 'Captured',
                        value: data.takedate
                    },
                    {
                        title: 'Make',
                        value: data.make
                    },
                    {
                        title: 'Type/Model',
                        value: data.model
                    },
                    {
                        title: 'Shutter Speed',
                        value: data.shutter
                    },
                    {
                        title: 'Aperture',
                        value: data.aperture
                    },
                    {
                        title: 'Focal Length',
                        value: data.focal
                    },
                    {
                        title: 'ISO',
                        value: data.iso
                    }
                ]
            }

        } else {

            structure.exif = {}

        }

        structure.sharing = {
            title: 'Sharing',
            type: sidebar.types.DEFAULT,
            rows: [{
                title: 'Public',
                value: _public
            }]
        }

        // Construct all parts of the structure
        structure = [
            structure.basics,
            structure.image,
            structure.tags,
            structure.exif,
            structure.sharing
        ]

        return structure

    },

    sidebar.createStructure.album = function (data) {

        if (data == null || data === '') return false

        let editable = false
        let structure = {}
        let _public = ''
        let hidden = ''
        let downloadable = ''
        let password = ''

        // Enable editable when user logged in
        if (web.publicMode === false) editable = true

        // Set value for public
        switch (data.public) {

            case '0':
                _public = 'No'
                break
            case '1':
                _public = 'Yes'
                break
            default:
                _public = '-'
                break

        }

        // Set value for hidden
        switch (data.visible) {

            case '0':
                hidden = 'Yes'
                break
            case '1':
                hidden = 'No'
                break
            default:
                hidden = '-'
                break

        }

        // Set value for downloadable
        switch (data.downloadable) {

            case '0':
                downloadable = 'No'
                break
            case '1':
                downloadable = 'Yes'
                break
            default:
                downloadable = '-'
                break

        }

        // Set value for password
        switch (data.password) {

            case '0':
                password = 'No'
                break
            case '1':
                password = 'Yes'
                break
            default:
                password = '-'
                break

        }

        structure.basics = {
            title: 'Basics',
            type: sidebar.types.DEFAULT,
            rows: [{
                    title: 'Title',
                    value: data.title,
                    editable
                },
                {
                    title: 'Description',
                    value: data.description,
                    editable
                }
            ]
        }

        structure.album = {
            title: 'Album',
            type: sidebar.types.DEFAULT,
            rows: [{
                    title: 'Created',
                    value: data.sysdate
                },
                {
                    title: 'Images',
                    value: data.num
                }
            ]
        }

        structure.share = {
            title: 'Share',
            type: sidebar.types.DEFAULT,
            rows: [{
                    title: 'Public',
                    value: _public
                },
                {
                    title: 'Hidden',
                    value: hidden
                },
                {
                    title: 'Downloadable',
                    value: downloadable
                },
                {
                    title: 'Password',
                    value: password
                }
            ]
        }

        // Construct all parts of the structure
        structure = [
            structure.basics,
            structure.album,
            structure.share
        ]

        return structure

    },

    sidebar.render = function (structure) {

        if (structure == null || structure === '' || structure === false) return false

        let html = ''

        let renderDefault = function (section) {

            let _html = ''

            _html += `
		         <div class='sidebar__divider'>
		             <h1>${ section.title }</h1>
		         </div>
		         <table>
		         `

            section.rows.forEach(function (row) {

                let value = row.value

                // Set a default for the value
                if (value === '' || value == null) value = '-'

                // Wrap span-element around value for easier selecting on change
                value = web.html `<span class='attr_$${ row.title.toLowerCase() }'>$${ value }</span>`

                // Add edit-icon to the value when editable
                if (row.editable === true) value += ' ' + build.editIcon('edit_' + row.title.toLowerCase())

                _html += web.html `
			         <tr>
			             <td>$${ row.title }</td>
			             <td>${ value }</td>
			         </tr>
			         `

            })

            _html += `
		         </table>
		         `

            return _html

        }

        let renderTags = function (section) {

            let _html = ''
            let editable = ''

            // Add edit-icon to the value when editable
            if (section.editable === true) editable = build.editIcon('edit_tags')

            _html += web.html `
		         <div class='sidebar__divider'>
		             <h1>$${ section.title }</h1>
		         </div>
		         <div id='tags'>
		             <div class='attr_$${ section.title.toLowerCase() }'>${ section.value }</div>
		             ${ editable }
		         </div>
		         `

            return _html

        }

        structure.forEach(function (section) {

            if (section.type === sidebar.types.DEFAULT) html += renderDefault(section)
            else if (section.type === sidebar.types.TAGS) html += renderTags(section)

        })

        return html

    },


    /**
     * @description Swipes and moves an object.
     */

    swipe = {

        obj: null,
        tolerance: 150,
        offset: 0

    },

    swipe.start = function (obj, tolerance) {

        if (obj) swipe.obj = obj
        if (tolerance) swipe.tolerance = tolerance

        return true

    },

    swipe.move = function (e) {

        if (swipe.obj === null) return false

        swipe.offset = -1 * e.x

        swipe.obj.css({
            WebkitTransform: 'translateX(' + swipe.offset + 'px)',
            MozTransform: 'translateX(' + swipe.offset + 'px)',
            transform: 'translateX(' + swipe.offset + 'px)'
        })

    },

    swipe.stop = function (e, left, right) {

        // Only execute once
        if (swipe.obj == null) return false

        if (e.x <= -swipe.tolerance) {

            left(true)

        } else if (e.x >= swipe.tolerance) {

            right(true)

        } else {

            swipe.obj.css({
                WebkitTransform: 'translateX(0px)',
                MozTransform: 'translateX(0px)',
                transform: 'translateX(0px)'
            })

        }

        swipe.obj = null
        swipe.offset = 0

    },


    /**
     * @description Takes care of every action an album can handle and execute.
     */

    upload = {},

    upload.show = function (title, files, callback) {

        basicModal.show({
            body: build.uploadModal(title, files),
            buttons: {
                action: {
                    title: 'Close',
                    class: 'hidden',
                    fn: basicModal.close
                }
            },
            callback
        })

    },

    upload.notify = function (title, text) {

        if (text == null || text === '') text = 'You can now manage your new photo(s).'

        if (!window.webkitNotifications) return false

        if (window.webkitNotifications.checkPermission() !== 0) window.webkitNotifications.requestPermission()

        if (window.webkitNotifications.checkPermission() === 0 && title) {
            let popup = window.webkitNotifications.createNotification('', title, text)
            popup.show()
        }

    },

    upload.start = {

        importAlbum: function (files) {
            console.log(files)
            // let albumID = album.getID()
            let error = false
            let warning = false

            const process = function (files, file) {

                let formData = new FormData()
                let xhr = new XMLHttpRequest()
                let pre_progress = 0
                let progress = 0
                let next_file_started = false

                const finish_import = function () {

                    window.onbeforeunload = null

                    $('#import_album').val('')

                    if (error === false && warning === false) {

                        // Success
                        basicModal.close()
                        upload.notify('Import complete')

                    } else if (error === false && warning === true) {

                        // Warning
                        $('.basicModal #basicModal__action.hidden').show()
                        upload.notify('Import complete')

                    } else {

                        // Error
                        $('.basicModal #basicModal__action.hidden').show()
                        upload.notify('Upload complete', 'Failed to import album.')

                    }

                    albums.refresh()
                    web.goto('0')

                    // if (album.getID() === false) web.goto('0')
                    // else album.load(albumID)

                }

                formData.append('function', 'Album::import')
                // formData.append('albumID', albumID)
                formData.append(0, file)

                xhr.open('POST', api.path)

                xhr.onload = function () {

                    let data = null
                    let wait = false
                    let errorText = ''

                    const isNumber = (n) => (!isNaN(parseFloat(n)) && isFinite(n))

                    try {
                        data = JSON.parse(xhr.responseText)
                    } catch (e) {
                        data = ''
                    }

                    file.ready = true

                    // Set status
                    if (xhr.status === 200 && isNumber(data)) {

                        // Success
                        $('.basicModal .rows .row:nth-child(' + (file.num + 1) + ') .status')
                            .html('Finished')
                            .addClass('success')

                    } else {

                        if (data.substr(0, 6) === 'Error:') {

                            errorText = data.substr(6) + ' Please take a look at the console of your browser for further details.'
                            error = true

                            // Error Status
                            $('.basicModal .rows .row:nth-child(' + (file.num + 1) + ') .status')
                                .html('Failed')
                                .addClass('error')

                            // Throw error
                            if (error === true) web.error('Upload failed. Server returned an error!', xhr, data)

                        } else if (data.substr(0, 8) === 'Warning:') {

                            errorText = data.substr(8)
                            warning = true

                            // Warning Status
                            $('.basicModal .rows .row:nth-child(' + (file.num + 1) + ') .status')
                                .html('Skipped')
                                .addClass('warning')

                            // Throw error
                            if (error === true) web.error('Upload failed. Server returned a warning!', xhr, data)

                        } else {

                            errorText = 'Server returned an unknown response. Please take a look at the console of your browser for further details.'
                            error = true

                            // Error Status
                            $('.basicModal .rows .row:nth-child(' + (file.num + 1) + ') .status')
                                .html('Failed')
                                .addClass('error')

                            // Throw error
                            if (error === true) web.error('Upload failed. Server returned an unkown error!', xhr, data)

                        }

                        $('.basicModal .rows .row:nth-child(' + (file.num + 1) + ') p.notice')
                            .html(errorText)
                            .show()

                    }

                    // Check if there are file which are not finished
                    for (let i = 0; i < files.length; i++) {

                        if (files[i].ready === false) {
                            wait = true
                            break
                        }

                    }

                    // Finish upload when all files are finished
                    if (wait === false) finish_import()

                }

                xhr.upload.onprogress = function (e) {

                    if (e.lengthComputable !== true) return false

                    // Calculate progress
                    progress = (e.loaded / e.total * 100 | 0)

                    // Set progress when progress has changed
                    if (progress > pre_progress) {
                        $('.basicModal .rows .row:nth-child(' + (file.num + 1) + ') .status').html(progress + '%')
                        pre_progress = progress
                    }

                    if (progress >= 100 && next_file_started === false) {

                        // Scroll to the uploading file
                        let scrollPos = 0
                        if ((file.num + 1) > 4) scrollPos = (file.num + 1 - 4) * 40
                        $('.basicModal .rows').scrollTop(scrollPos)

                        // Set status to processing
                        $('.basicModal .rows .row:nth-child(' + (file.num + 1) + ') .status').html('Processing')

                        // Upload next file
                        if (file.next != null) {
                            process(files, file.next)
                            next_file_started = true
                        }

                    }

                }

                console.log(formData)
                xhr.send(formData)

            }

            if (files.length <= 0) return false
            // if (albumID === false || visible.albums() === true) albumID = 0

            for (let i = 0; i < files.length; i++) {

                files[i].num = i
                files[i].ready = false

                if (i < files.length - 1) files[i].next = files[i + 1]
                else files[i].next = null

            }

            window.onbeforeunload = function () {
                return 'PhotosManager is currently uploading!'
            }

            upload.show('Uploading', files, function () {

                // Upload first file
                process(files, files[0])

            })

        },

        local: function (files) {

            let albumID = album.getID()
            let error = false
            let warning = false

            const process = function (files, file) {

                let formData = new FormData()
                let xhr = new XMLHttpRequest()
                let pre_progress = 0
                let progress = 0
                let next_file_started = false

                const finish = function () {

                    window.onbeforeunload = null

                    $('#upload_files').val('')

                    if (error === false && warning === false) {

                        // Success
                        basicModal.close()
                        upload.notify('Upload complete')

                    } else if (error === false && warning === true) {

                        // Warning
                        $('.basicModal #basicModal__action.hidden').show()
                        upload.notify('Upload complete')

                    } else {

                        // Error
                        $('.basicModal #basicModal__action.hidden').show()
                        upload.notify('Upload complete', 'Failed to upload one or more photos.')

                    }

                    albums.refresh()

                    if (album.getID() === false) web.goto('0')
                    else album.load(albumID)

                }

                formData.append('function', 'Photo::add')
                formData.append('albumID', albumID)
                formData.append(0, file)

                xhr.open('POST', api.path)

                xhr.onload = function () {

                    let data = null
                    let wait = false
                    let errorText = ''

                    const isNumber = (n) => (!isNaN(parseFloat(n)) && isFinite(n))

                    try {
                        data = JSON.parse(xhr.responseText)
                    } catch (e) {
                        data = ''
                    }

                    file.ready = true

                    // Set status
                    if (xhr.status === 200 && isNumber(data)) {

                        // Success
                        $('.basicModal .rows .row:nth-child(' + (file.num + 1) + ') .status')
                            .html('Finished')
                            .addClass('success')

                    } else {

                        if (data.substr(0, 6) === 'Error:') {

                            errorText = data.substr(6) + ' Please take a look at the console of your browser for further details.'
                            error = true

                            // Error Status
                            $('.basicModal .rows .row:nth-child(' + (file.num + 1) + ') .status')
                                .html('Failed')
                                .addClass('error')

                            // Throw error
                            if (error === true) web.error('Upload failed. Server returned an error!', xhr, data)

                        } else if (data.substr(0, 8) === 'Warning:') {

                            errorText = data.substr(8)
                            warning = true

                            // Warning Status
                            $('.basicModal .rows .row:nth-child(' + (file.num + 1) + ') .status')
                                .html('Skipped')
                                .addClass('warning')

                            // Throw error
                            if (error === true) web.error('Upload failed. Server returned a warning!', xhr, data)

                        } else {

                            errorText = 'Server returned an unknown response. Please take a look at the console of your browser for further details.'
                            error = true

                            // Error Status
                            $('.basicModal .rows .row:nth-child(' + (file.num + 1) + ') .status')
                                .html('Failed')
                                .addClass('error')

                            // Throw error
                            if (error === true) web.error('Upload failed. Server returned an unkown error!', xhr, data)

                        }

                        $('.basicModal .rows .row:nth-child(' + (file.num + 1) + ') p.notice')
                            .html(errorText)
                            .show()

                    }

                    // Check if there are file which are not finished
                    for (let i = 0; i < files.length; i++) {

                        if (files[i].ready === false) {
                            wait = true
                            break
                        }

                    }

                    // Finish upload when all files are finished
                    if (wait === false) finish()

                }

                xhr.upload.onprogress = function (e) {

                    if (e.lengthComputable !== true) return false

                    // Calculate progress
                    progress = (e.loaded / e.total * 100 | 0)

                    // Set progress when progress has changed
                    if (progress > pre_progress) {
                        $('.basicModal .rows .row:nth-child(' + (file.num + 1) + ') .status').html(progress + '%')
                        pre_progress = progress
                    }

                    if (progress >= 100 && next_file_started === false) {

                        // Scroll to the uploading file
                        let scrollPos = 0
                        if ((file.num + 1) > 4) scrollPos = (file.num + 1 - 4) * 40
                        $('.basicModal .rows').scrollTop(scrollPos)

                        // Set status to processing
                        $('.basicModal .rows .row:nth-child(' + (file.num + 1) + ') .status').html('Processing')

                        // Upload next file
                        if (file.next != null) {
                            process(files, file.next)
                            next_file_started = true
                        }

                    }

                }

                xhr.send(formData)

            }

            if (files.length <= 0) return false
            if (albumID === false || visible.albums() === true) albumID = 0

            for (let i = 0; i < files.length; i++) {

                files[i].num = i
                files[i].ready = false

                if (i < files.length - 1) files[i].next = files[i + 1]
                else files[i].next = null

            }

            window.onbeforeunload = function () {
                return 'PhotosManager is currently uploading!'
            }

            upload.show('Uploading', files, function () {

                // Upload first file
                process(files, files[0])

            })

        },

        url: function (url = '') {

            let albumID = album.getID()

            url = (typeof url === 'string' ? url : '')

            if (albumID === false) albumID = 0

            const action = function (data) {

                let files = []

                if (data.link && data.link.length > 3) {

                    basicModal.close()

                    files[0] = {
                        name: data.link
                    }

                    upload.show('Importing URL', files, function () {

                        $('.basicModal .rows .row .status').html('Importing')

                        let params = {
                            url: data.link,
                            albumID
                        }

                        api.post('Import::url', params, function (data) {

                            // Same code as in import.dropbox()

                            if (data !== true) {

                                $('.basicModal .rows .row p.notice')
                                    .html('The import has been finished, but returned warnings or errors. Please take a look at the log (Settings -> Show Log) for further details.')
                                    .show()

                                $('.basicModal .rows .row .status')
                                    .html('Finished')
                                    .addClass('warning')

                                // Show close button
                                $('.basicModal #basicModal__action.hidden').show()

                                // Log error
                                web.error(null, params, data)

                            } else {

                                basicModal.close()

                            }

                            upload.notify('Import complete')

                            albums.refresh()

                            if (album.getID() === false) web.goto('0')
                            else album.load(albumID)

                        })

                    })

                } else basicModal.error('link')

            }

            basicModal.show({
                body: web.html `<p>Please enter the direct link to a photo to import it: <input class='text' name='link' type='text' placeholder='http://' value='$${ url }'></p>`,
                buttons: {
                    action: {
                        title: 'Import',
                        fn: action
                    },
                    cancel: {
                        title: 'Cancel',
                        fn: basicModal.close
                    }
                }
            })

        },

        server: function () {

            let albumID = album.getID()
            if (albumID === false) albumID = 0

            const action = function (data) {

                let files = []

                files[0] = {
                    name: data.path
                }

                upload.show('Importing from server', files, function () {

                    $('.basicModal .rows .row .status').html('Importing')

                    let params = {
                        albumID,
                        path: data.path
                    }

                    api.post('Import::server', params, function (data) {

                        albums.refresh()
                        upload.notify('Import complete')

                        if (data === 'Notice: Import only contained albums!') {

                            // No error, but the folder only contained albums

                            // Go back to the album overview to show the imported albums
                            if (visible.albums()) web.load()
                            else web.goto()

                            basicModal.close()

                            return true

                        } else if (data === 'Warning: Folder empty or no readable files to process!') {

                            // Error because the import could not start

                            $('.basicModal .rows .row p.notice')
                                .html('Folder empty or no readable files to process. Please take a look at the log (Settings -> Show Log) for further details.')
                                .show()

                            $('.basicModal .rows .row .status')
                                .html('Failed')
                                .addClass('error')

                            // Log error
                            web.error('Could not start import because the folder was empty!', params, data)

                        } else if (data !== true) {

                            // Maybe an error, maybe just some skipped photos

                            $('.basicModal .rows .row p.notice')
                                .html('The import has been finished, but returned warnings or errors. Please take a look at the log (Settings -> Show Log) for further details.')
                                .show()

                            $('.basicModal .rows .row .status')
                                .html('Finished')
                                .addClass('warning')

                            // Log error
                            web.error(null, params, data)

                        } else {

                            // No error, everything worked fine

                            basicModal.close()

                        }

                        if (album.getID() === false) web.goto('0')
                        else album.load(albumID)

                        // Show close button
                        $('.basicModal #basicModal__action.hidden').show()

                    })

                })

            }

            basicModal.show({
                body: web.html `<p>This action will import all photos, folders and sub-folders which are located in the following directory. The <b>original files will be deleted</b> after the import when possible. <input class='text' name='path' type='text' maxlength='100' placeholder='Absolute path to directory' value='$${ web.location }uploads/import/'></p>`,
                buttons: {
                    action: {
                        title: 'Import',
                        fn: action
                    },
                    cancel: {
                        title: 'Cancel',
                        fn: basicModal.close
                    }
                }
            })

        },

        dropbox: function () {

            let albumID = album.getID()
            if (albumID === false) albumID = 0

            const success = function (files) {

                let links = ''

                for (let i = 0; i < files.length; i++) {

                    links += files[i].link + ','

                    files[i] = {
                        name: files[i].link
                    }

                }

                // Remove last comma
                links = links.substr(0, links.length - 1)

                upload.show('Importing from Dropbox', files, function () {

                    $('.basicModal .rows .row .status').html('Importing')

                    let params = {
                        url: links,
                        albumID
                    }

                    api.post('Import::url', params, function (data) {

                        // Same code as in import.url()

                        if (data !== true) {

                            $('.basicModal .rows .row p.notice')
                                .html('The import has been finished, but returned warnings or errors. Please take a look at the log (Settings -> Show Log) for further details.')
                                .show()

                            $('.basicModal .rows .row .status')
                                .html('Finished')
                                .addClass('warning')

                            // Show close button
                            $('.basicModal #basicModal__action.hidden').show()

                            // Log error
                            web.error(null, params, data)

                        } else {

                            basicModal.close()

                        }

                        upload.notify('Import complete')

                        albums.refresh()

                        if (album.getID() === false) web.goto('0')
                        else album.load(albumID)

                    })

                })

            }

            web.loadDropbox(function () {
                Dropbox.choose({
                    linkType: 'direct',
                    multiselect: true,
                    success
                })
            })

        }

    },


    /**
     * @description Responsible to reflect data changes to the UI.
     */

    view = {},

    view.albums = {

        init: function () {

            view.albums.title()
            view.albums.content.init()

        },

        title: function () {

            web.setTitle('Albums', false)

        },

        content: {

            scrollPosition: 0,

            init: function () {

                let smartData = ''
                let albumsData = ''

                // Smart Albums
                if (web.publicMode === false) {

                    albums.parse(albums.json.smartalbums.unsorted)
                    albums.parse(albums.json.smartalbums.public)
                    albums.parse(albums.json.smartalbums.starred)
                    albums.parse(albums.json.smartalbums.recent)

                    smartData = build.divider('Smart Albums') + build.album(albums.json.smartalbums.unsorted) + build.album(albums.json.smartalbums.public) + build.album(albums.json.smartalbums.starred) + build.album(albums.json.smartalbums.recent)

                } else if (web.publicMode === true) {

                    albums.parse(albums.json.smartalbums.public)

                    smartData = build.divider('Public Photos') + build.album(albums.json.smartalbums.public)

                }

                // Albums
                if (albums.json.albums && albums.json.num !== 0) {

                    $.each(albums.json.albums, function () {
                        albums.parse(this)
                        albumsData += build.album(this)
                    })

                    // Add divider
                    albumsData = build.divider('Albums') + albumsData

                }

                if (smartData === '' && albumsData === '') {
                    web.content.html('')
                    $('body').append(build.no_content('eye'))
                } else {
                    web.content.html(smartData + albumsData)
                }

                // Restore scroll position
                if (view.albums.content.scrollPosition != null && view.albums.content.scrollPosition !== 0) {
                    $(document).scrollTop(view.albums.content.scrollPosition)
                }

            },

            title: function (albumID) {

                let title = albums.getByID(albumID).title

                title = web.escapeHTML(title)

                $('.album[data-id="' + albumID + '"] .overlay h1')
                    .html(title)
                    .attr('title', title)

            },

            delete: function (albumID) {

                $('.album[data-id="' + albumID + '"]').css('opacity', 0).animate({
                    width: 0,
                    marginLeft: 0
                }, 300, function () {
                    $(this).remove()
                    if (albums.json.num <= 0) web.content.find('.divider:last-child').remove()
                })

            }

        }

    },

    view.album = {

        init: function () {

            album.parse()

            view.album.sidebar()
            view.album.title()
            view.album.public()
            view.album.content.init()

            album.json.init = 1

            sidebar.hide()
            sidebar_slideshow.show()

            web.animate(web.content, "contentZoomIn")
            header.setMode("album")

        },

        title: function () {

            if ((visible.album() || !album.json.init) && !visible.photo() && !visible.slide()) {

                switch (album.getID()) {
                    case 'f':
                        web.setTitle('Starred', false)
                        break
                    case 's':
                        web.setTitle('Public', false)
                        break
                    case 'r':
                        web.setTitle('Recent', false)
                        break
                    case '0':
                        web.setTitle('Unsorted', false)
                        break
                    default:
                        if (album.json.init) sidebar.changeAttr('title', album.json.title)
                        web.setTitle(album.json.title, true)
                        break
                }

            }

        },

        folders: {

            init: function () {

                web.toc.html('')

                let slidesFoldersData = ""

                console.log(album.json_folders)

                if (album.json_folders) {

                    $.each(album.json_folders, function (i, v) {

                        slideFolderData = build.folder_in_slides(this)

                        if (!v.parent_folder) web.toc.append(slideFolderData)
                        else web.toc.find('.folder[data-id="' + v.parent_folder + '"]').append(slideFolderData)

                    })

                    // web.toc.append(`<div class='folder'></div>`)

                }

                console.log('slidesFoldersData')

                // web.toc.html(slidesFoldersData)

            }

        },

        slides: {

            init: function () {

                view.album.folders.init()

                let slidesData = {}

                if (album.json_slides.content) {

                    $.each(album.json_slides.content, function (i, v) {
                        if (!slidesData[v.folder_id]) {
                            slidesData[v.folder_id] = build.photo_in_slides(this)
                        } else {
                            slidesData[v.folder_id] += build.photo_in_slides(this)
                        }
                    })

                }

                console.log('slidesData')
                // console.log(slidesData)

                $.each(slidesData, function (i, v) {
                    web.toc.find('.folder[data-id="' + i + '"]').append(v)
                })
                // web.toc.html(slidesData)

            }

        },

        content: {

            init: function () {

                let photosData = ''

                if (album.json.content && album.json.content !== false) {

                    // Build photos
                    $.each(album.json.content, function () {
                        photosData += build.photo(this)
                    })

                }

                // Save and reset scroll position
                view.albums.content.scrollPosition = $(document).scrollTop()
                requestAnimationFrame(() => $(document).scrollTop(0))

                // Add photos to view
                web.content.html(photosData)


                /* web.toc.sortable({
                    revert: true,
                    stop: function (t, e) {
                        console.log('toc sortable')
                        // slide.sort(e.item.data("album-id"))
                    }
                }); */

                web.toc.find('.folder').sortable({
                    revert: true,
                    stop: function (t, e) {
                        console.log('folder sortable')
                        // slide.sort(e.item.data("album-id"))
                    },
                    dragover: function (e, ui) {
                        ui.item.removeClass('photo photo-inner').addClass('slide')

                        // $(this).css('background', 'red')
                    },
                    update: function (e, ui) {
                        // ui.item.css("background", "red") // For example.

                        console.log(ui.item)

                        let albumID = ui.item.data('album-id'),
                            photoID = ui.item.data('photo-id'),
                            folderID = parseInt($(this).closest('.folder').attr('data-id'))

                        let params = {
                            albumID: albumID,
                            photoID: photoID,
                            folderID: folderID
                        }
                        console.log(params)

                        if (albumID && photoID && ui.item.hasClass('addSlide')) {
                            console.log('update this folder ' + folderID)
                            console.log(ui.item)

                            ui.item.removeClass('addSlide')

                            ui.item.removeClass('photo photo-inner').addClass('slide').attr('data-photo-id', photoID).attr('data-id', '').attr('style', '')

                            api.post("Slide::add", params, function (data) {

                                console.log('Slide::add returned ' + data)

                                ui.item.attr('data-id', data)

                                slide.sort(albumID)

                                album.getSlides(albumID, false, false)

                            })
                        } else {
                            slide.sort(albumID)
                        }

                    }
                });


                web.content.find('.photo-inner').draggable({

                    connectToSortable: ".folder",
                    // helper: "clone",
                    // revert: "invalid",

                    cursor: "move",
                    cursorAt: {
                        top: 10,
                        left: 10
                    },
                    helper: function (event) {
                        console.log($(this))
                        let albumID = parseInt($(this).attr('data-album-id')),
                            photoID = parseInt($(this).attr('data-id')),
                            title = $(this).find('.overlay h1').attr('title'),
                            thumbUrl = $(this).find('img').attr('src')
                        let {
                            path: retinaThumbUrl
                        } = web.retinize(thumbUrl)

                        $(this).closest('.folder').css('background', 'red')

                        return $(`<div class='slide addSlide' data-album-id='${ albumID }' data-photo-id='${ photoID }' style='visibility: visible!important'>
                            <img src='${ thumbUrl }' srcset='${ retinaThumbUrl } 1x' width='20' height='20' alt='Photo thumbnail' draggable='false'>
                            <div class='overlay'>
                                <h1 title='${ title }'>${ title }</h1>
                            </div>
                        </div>`)
                    },

                    snap: true,
                    // containment: ".folder", 
                    scroll: false,

                    /*stop: function (e, ui) {
                        let albumID = ui.helper.data('album-id'),
                            photoID = ui.helper.data('photo-id'),
                            folderID = parseInt($(this).closest('.folder').attr('data-id'))

                        let params = {
                            albumID: albumID,
                            photoID: photoID,
                            folderID: folderID
                        }
                        console.log(params)

                        if (albumID && photoID) {
                            console.log('update this folder ' + folderID)
                            console.log(ui.helper)

                            ui.helper.removeClass('photo photo-inner').addClass('slide').attr('data-photo-id', photoID).attr('data-id', '').attr('style', '')

                            api.post("Slide::add", params, function (data) {

                                console.log('Slide::add returned ' + data)

                                ui.helper.attr('data-id', data)

                                slide.sort(albumID)

                                album.getSlides(albumID, false, false)

                            })
                        }

                    }*/

                })

            },

            title: function (photoID) {

                let title = album.json.content[photoID].title

                title = web.escapeHTML(title)

                $('.photo[data-id="' + photoID + '"] .overlay h1')
                    .html(title)
                    .attr('title', title)

            },

            star: function (photoID) {

                let $badge = $('.photo[data-id="' + photoID + '"] .icn-star')

                if (album.json.content[photoID].star === '1') $badge.addClass('badge--visible')
                else $badge.removeClass('badge--visible')

            },

            public: function (photoID) {

                let $badge = $('.photo[data-id="' + photoID + '"] .icn-share')

                if (album.json.content[photoID].public === '1') $badge.addClass('badge--visible')
                else $badge.removeClass('badge--visible')

            },

            delete: function (photoID) {

                $('.photo[data-id="' + photoID + '"]').css('opacity', 0).animate({
                    width: 0,
                    marginLeft: 0
                }, 300, function () {
                    $(this).remove()
                    // Only when search is not active
                    if (!visible.albums()) {
                        album.json.num--
                        view.album.num()
                    }
                })

            }

        },

        description: function () {

            sidebar.changeAttr('description', album.json.description)

        },

        num: function () {

            sidebar.changeAttr('images', album.json.num)

        },

        public: function () {

            if (album.json.public === '1') {

                $('#button_share_album')
                    .addClass('active')
                    .attr('title', 'Share Album')

                $('.photo .iconic-share').remove()

                if (album.json.init) sidebar.changeAttr('public', 'Yes')

            } else {

                $('#button_share_album')
                    .removeClass('active')
                    .attr('title', 'Make Public')

                if (album.json.init) sidebar.changeAttr('public', 'No')

            }

        },

        hidden: function () {

            if (album.json.visible === '1') sidebar.changeAttr('hidden', 'No')
            else sidebar.changeAttr('hidden', 'Yes')

        },

        downloadable: function () {

            if (album.json.downloadable === '1') sidebar.changeAttr('downloadable', 'Yes')
            else sidebar.changeAttr('downloadable', 'No')

        },

        password: function () {

            if (album.json.password === '1') sidebar.changeAttr('password', 'Yes')
            else sidebar.changeAttr('password', 'No')

        },

        sidebar: function () {

            if ((visible.album() || !album.json.init) && !visible.photo()) {

                let structure = sidebar.createStructure.album(album.json)
                let html = sidebar.render(structure)

                sidebar.dom('.sidebar__wrapper').html(html)
                sidebar.bind()

            }

        }

    },

    view.presentation = {

        init: function () {

            slide.parse()

            view.slide.photo()

            slide.json.init = 1

        },

        show: function () {

            // Change header
            web.slideview.addClass('presentation')
            header.setMode('presentation')
            header.hide()
            sidebar_slideshow.hide()
            sidebar.hide()
            $('#s_note').attr('disabled', true)
            $('#save_note').hide()

        },

        hide: function () {

            // Change header
            web.slideview.removeClass('presentation')
            console.log(album.json)
            console.log('hiu')
            header.setMode('photo')
            sidebar_slideshow.show()

            if (!web.publicMode) {
                $('#save_note').show()
                $('#s_note').attr('disabled', false)
            } else {
                $('#s_note').attr('disabled', true)
                $('#save_note').hide()
            }

        },

    },

    view.photo = {

        init: function () {

            photo.parse()

            view.photo.sidebar()
            view.photo.title()
            view.photo.star()
            view.photo.public()
            view.photo.photo()

            photo.json.init = 1

        },

        show: function () {

            // Change header
            web.content.addClass('view')
            header.setMode('photo')

            // Make body not scrollable
            $('body').css('overflow', 'hidden')

            // Fullscreen
            let timeout = null
            $(document).bind('mousemove', function () {
                clearTimeout(timeout)
                header.show()
                timeout = setTimeout(header.hide, 2500)
            })

            web.animate(web.imageview, 'fadeIn')

        },

        hide: function () {

            header.show()

            web.content.removeClass('view')
            header.setMode('album')

            // Make body scrollable
            $('body').css('overflow', 'auto')

            // Disable Fullscreen
            $(document).unbind('mousemove')

            // Hide Photo
            web.animate(web.imageview, 'fadeOut')
            setTimeout(() => {
                web.imageview.hide()
                view.album.sidebar()
            }, 300)

        },

        title: function () {

            if (photo.json.init) sidebar.changeAttr('title', photo.json.title)
            web.setTitle(photo.json.title, true)

        },

        description: function () {

            if (photo.json.init) sidebar.changeAttr('description', photo.json.description)

        },

        star: function () {

            if (photo.json.star === '1') {

                // Starred
                $('#button_star')
                    .addClass('active')
                    .attr('title', 'Unstar Photo')

            } else {

                // Unstarred
                $('#button_star').removeClass('active')
                $('#button_star').attr('title', 'Star Photo')

            }

        },

        public: function () {

            if (photo.json.public === '1' || photo.json.public === '2') {

                // Photo public
                $('#button_share')
                    .addClass('active')
                    .attr('title', 'Share Photo')

                if (photo.json.init) sidebar.changeAttr('public', 'Yes')

            } else {

                // Photo private
                $('#button_share')
                    .removeClass('active')
                    .attr('title', 'Make Public')

                if (photo.json.init) sidebar.changeAttr('public', 'No')

            }

        },

        tags: function () {

            sidebar.changeAttr('tags', build.tags(photo.json.tags), true)
            sidebar.bind()

        },

        photo: function () {

            web.imageview.html(build.imageview(photo.json, visible.header()))

            let $nextArrow = web.imageview.find('a#next')
            let $previousArrow = web.imageview.find('a#previous')
            let photoID = photo.getID()
            let hasNext = album.json && album.json.content && album.json.content[photoID] && album.json.content[photoID].nextPhoto != null && album.json.content[photoID].nextPhoto !== ''
            let hasPrevious = album.json && album.json.content && album.json.content[photoID] && album.json.content[photoID].previousPhoto != null && album.json.content[photoID].previousPhoto !== ''

            if (hasNext === false || web.viewMode === true) {

                $nextArrow.hide()

            } else {

                let nextPhotoID = album.json.content[photoID].nextPhoto
                let nextPhoto = album.json.content[nextPhotoID]

                $nextArrow.css('background-image', web.html `linear-gradient(to bottom, rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url("$${ nextPhoto.thumbUrl }")`)

            }

            if (hasPrevious === false || web.viewMode === true) {

                $previousArrow.hide()

            } else {

                let previousPhotoID = album.json.content[photoID].previousPhoto
                let previousPhoto = album.json.content[previousPhotoID]

                $previousArrow.css('background-image', web.html `linear-gradient(to bottom, rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url("$${ previousPhoto.thumbUrl }")`)

            }

        },

        sidebar: function () {

            let structure = sidebar.createStructure.photo(photo.json)
            let html = sidebar.render(structure)

            sidebar.dom('.sidebar__wrapper').html(html)
            sidebar.bind()

        }

    },

    view.slide = {

        init: function (mode) {

            console.log('init view slide')

            slide.parse()

            view.slide.sidebar()
            view.photo.title()
            view.slide.photo()

            slide.json.init = 1
            photo.json.init = 1

            if (visible.sidebar()) sidebar.show()
            else sidebar.hide()

            web.toc.find('.slide').removeClass('current').parents('.folder').removeClass('current_slide')
            web.toc.find('.slide[data-id="' + slide.json.id + '"]').addClass('current').parents('.folder').addClass('current_slide')

            sidebar.dom('h1').text('About photo')

        },

        show: function () {

            // Make body not scrollable
            $("body").css("overflow", "hidden")
            web.animate(web.slideview, "fadeIn")

            // Change header
            web.content.addClass("view")
            header.setMode("photo")

            // Fullscreen
            let timeout = null
            $(document).bind("mousemove", function () {
                clearTimeout(timeout)
                header.show()
                timeout = setTimeout(header.hide, 2500)
            })

        },

        hide: function () {

            // Make body scrollable
            $('body').css('overflow', 'auto')
            web.animate(web.slideview, 'fadeOut')

            header.show()

            web.content.removeClass('view')
            header.setMode('album')

            // Disable Fullscreen
            $(document).unbind('mousemove')

            // Hide Photo
            setTimeout(() => {
                web.slideview.hide()
                view.album.sidebar()
            }, 300)

        },

        note: function () {
            //slide.json.init && sidebar.changeAttr("title", slide.json.note), web.setTitle(slide.json.note, !0)
        },

        photo: function () {

            web.slideview.html(build.slideview(slide.json, visible.presentation() ? false : visible.header()))

            let $nextArrow = web.slideview.find('a#s_next')
            let $previousArrow = web.slideview.find('a#s_previous')
            let slideID = slide.getID()
            let hasNext = album.json_slides && album.json_slides.content && album.json_slides.content[slideID] && album.json_slides.content[slideID].nextPhoto != null && album.json_slides.content[slideID].nextPhoto !== ''
            let hasPrevious = album.json_slides && album.json_slides.content && album.json_slides.content[slideID] && album.json_slides.content[slideID].previousPhoto != null && album.json_slides.content[slideID].previousPhoto !== ''

            if (hasNext === false || web.viewMode === true) {

                $nextArrow.hide()

            } else {

                let nextPhotoID = album.json_slides.content[slideID].nextPhoto
                let nextPhoto = album.json_slides.content[nextPhotoID]

                $nextArrow.css('background-image', web.html `linear-gradient(to bottom, rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url("$${ nextPhoto.thumbUrl }")`)

            }

            if (hasPrevious === false || web.viewMode === true) {

                $previousArrow.hide()

            } else {

                let previousPhotoID = album.json_slides.content[slideID].previousPhoto
                let previousPhoto = album.json_slides.content[previousPhotoID]

                $previousArrow.css('background-image', web.html `linear-gradient(to bottom, rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url("$${ previousPhoto.thumbUrl }")`)

            }

        },

        sidebar: function () {
            view.photo.sidebar()
        }
    },


    /**
     * @description This module is used to check if elements are visible or not.
     */

    visible = {},

    visible.albums = function () {
        if (header.dom('.header__toolbar--public').hasClass('header__toolbar--visible')) return true
        if (header.dom('.header__toolbar--albums').hasClass('header__toolbar--visible')) return true
        return false
    },

    visible.album = function () {
        if (header.dom('.header__toolbar--album').hasClass('header__toolbar--visible')) return true
        return false
    },

    visible.photo = function () {
        if ($('#imageview.fadeIn').length > 0) return true
        return false
    },

    visible.slide = function () {
        if ($('#slideview.fadeIn').length > 0) return true
        return false
    },

    visible.search = function () {
        if (search.hash != null) return true
        return false
    },

    visible.sidebar = function () {
        if (sidebar.dom().hasClass('active') === true) return true
        return false
    },

    visible.sidebar_slideshow = function () {
        if (sidebar_slideshow.dom().hasClass('active') === true) return true
        return false
    },

    visible.presentation = function () {
        if (web.slideview.hasClass('presentation') === true) return true
        return false
    },

    visible.sidebarbutton = function () {
        if (visible.photo() || visible.slide()) return true
        if (visible.album() && $('#button_info_album:visible').length > 0) return true
        return false
    },

    visible.header = function () {
        if (header.dom().hasClass('header--hidden') === true) return false
        return true
    },

    visible.contextMenu = function () {
        return basicContext.visible()
    },

    visible.multiselect = function () {
        if ($('#multiselect').length > 0) return true
        return false
    },


    /**
     * @description This module is used for bindings.
     */

    $(document).ready(function () {

        // Event Name
        let eventName = web.getEventName()

        // Set API error handler
        api.onError = web.error

        // Multiselect
        multiselect.bind()

        // Header
        header.bind()

        // Left sidebar
        sidebar_slideshow.dom('#button_present').on(eventName, function () {
            localStorage.setItem('albumID', album.getID())
            //web.setMode('presentation')

            let startSlide = null

            if (visible.slide()) startSlide = slide.json.id
            else {
                let firstKey = Object.keys(album.json_slides.content)[0]

                startSlide = album.json_slides.content[firstKey].id
            }

            // save state
            slide.saveStage(startSlide)


            web.goto(album.getID() + '/p/' + startSlide)
            window.open('./presentation', '_blank')
        })

        // new folder
        sidebar_slideshow.dom('.button_add_folder').on(eventName, function (e) {
            folder.add()
        })



        // Image View
        web.imageview
            .on(eventName, '.arrow_wrapper--previous', photo.previous)
            .on(eventName, '.arrow_wrapper--next', photo.next)

        // Slide View
        web.slideview
            .on(eventName, '.arrow_wrapper--previous', slide.previous)
            .on(eventName, '.arrow_wrapper--next', slide.next)

        // Keyboard
        Mousetrap
            .bind(['left'], function () {
                if (visible.slide()) {
                    $('#slideview a#s_previous').click()
                    return false
                }
                if (visible.photo()) {
                    $('#imageview a#previous').click()
                    return false
                }
            })
            .bind(['right'], function () {
                if (visible.slide()) {
                    $('#slideview a#s_next').click()
                    return false
                }
                if (visible.photo()) {
                    $('#imageview a#next').click()
                    return false
                }
            })
            .bind(['u'], function () {
                if (!visible.photo() && !visible.slide()) {
                    $('#upload_files').click()
                    return false
                }
            })
            .bind(['s', 'f'], function () {
                if (visible.photo()) {
                    header.dom('#button_star').click()
                    return false
                } else if (visible.albums()) {
                    header.dom('.header__search').focus()
                    return false
                }
            })
            .bind(['r'], function () {
                if (visible.album()) {
                    album.setTitle(album.getID())
                    return false
                } else if (visible.photo() || visible.slide()) {
                    photo.setTitle([photo.getID()])
                    return false
                }
            })
            .bind(['d'], function () {
                if (visible.photo() || visible.slide()) {
                    photo.setDescription(photo.getID())
                    return false
                } else if (visible.album()) {
                    album.setDescription(album.getID())
                    return false
                }
            })
            .bind(['t'], function () {
                if (visible.photo() || visible.slide()) {
                    photo.editTags([photo.getID()])
                    return false
                }
            })
            .bind(['i'], function () {
                if (!visible.multiselect()) {
                    sidebar.toggle()
                    return false
                }
            })
            .bind(['command+backspace', 'ctrl+backspace'], function () {
                if (visible.slide() && basicModal.visible() === false) {
                    slide.delete([slide.getID()])
                    return false
                } else if (visible.photo() && basicModal.visible() === false) {
                    photo.delete([photo.getID()])
                    return false
                } else if (visible.album() && basicModal.visible() === false) {
                    album.delete([album.getID()])
                    return false
                }
            })
            .bind(['command+a', 'ctrl+a'], function () {
                if (visible.album() && basicModal.visible() === false) {
                    multiselect.selectAll()
                    return false
                } else if (visible.albums() && basicModal.visible() === false) {
                    multiselect.selectAll()
                    return false
                }
            })

        Mousetrap.bindGlobal('enter', function () {
            if (basicModal.visible() === true) basicModal.action()
        })

        Mousetrap.bindGlobal(['esc', 'command+up'], function () {
            console.log('bind esc ' + visible.presentation())

            if (basicModal.visible() === true)
                basicModal.cancel()
            else if (visible.contextMenu())
                contextMenu.close()
            else if (visible.photo() || visible.slide()) {
                console.log('jump here ok')
                if (visible.presentation()) {
                    web.goto(album.getID() + '/s/' + slide.getID())
                    //web.setMode('view')
                } else
                    web.goto(album.getID())
            } else if (visible.album())
                web.goto()
            else if (visible.albums() && header.dom('.header__search').val().length !== 0)
                search.reset()

            return false
        })

        if (eventName === 'touchend') {

            $(document)

                // Fullscreen on mobile
                .on('touchend', '#imageview #image', function (e) {
                    if (swipe.obj == null || (swipe.offset >= -5 && swipe.offset <= 5)) {
                        if (visible.header()) header.hide(e)
                        else header.show()
                    }
                })

                .on('touchend', '#slideview #image', function (e) {
                    if (swipe.obj == null || (swipe.offset >= -5 && swipe.offset <= 5)) {
                        if (visible.header()) header.hide(e)
                        else header.show()
                    }
                })

                // Swipe on mobile
                .swipe().on('swipeStart', function () {
                    if (visible.slide()) swipe.start($('#slideview #image'))
                    if (visible.photo()) swipe.start($('#imageview #image'))
                })
                .swipe().on('swipeMove', function (e) {
                    if (visible.slide()) swipe.move(e.swipe)
                    if (visible.photo()) swipe.move(e.swipe)
                })
                .swipe().on('swipeEnd', function (e) {
                    if (visible.slide()) swipe.stop(e.swipe, slide.previous, slide.next)
                    if (visible.photo()) swipe.stop(e.swipe, photo.previous, photo.next)
                })

        }

        // Document
        $(document)

            // Save note
            .on('keyup', '#s_note', function () {
                $('#save_note').attr('disabled', false)
            })
            .on('click', '#save_note', function () {
                slide.setNote()
            })

            // Navigation
            .on('click', '.album', function () {
                web.goto($(this).attr('data-id'))
            })
            .on('click', '.photo', function () {
                web.goto(album.getID() + '/' + $(this).attr('data-id'))
            })
            .on('click', '.slide', function () {
                web.goto(album.getID() + '/s/' + $(this).attr('data-id'))
            })

            // Context Menu
            .on('contextmenu', '.album', function (e) {
                contextMenu.album(album.getID(), e)
            })
            .on('contextmenu', '.photo', function (e) {
                contextMenu.photo(photo.getID(), e)
            })
            .on('contextmenu', '.slide', function (e) {
                contextMenu.slide($(".slide:hover, .slide.active").attr("data-id"), e)
            })

            // Upload
            .on('change', '#upload_files', function () {
                basicModal.close()
                upload.start.local(this.files)
            })

            // Import album
            .on('change', '#import_album', function () {
                basicModal.close()
                upload.start.importAlbum(this.files)
            })

            // Drag and Drop upload
            .on('dragover', function () {
                return false
            }, false)
            .on('drop', function (e) {

                // Close open overlays or views which are correlating with the upload
                if (visible.photo() || visible.slide()) web.goto(album.getID())
                if (visible.contextMenu()) contextMenu.close()

                // Detect if dropped item is a file or a link
                if (e.originalEvent.dataTransfer.files.length > 0) upload.start.local(e.originalEvent.dataTransfer.files)
                else if (e.originalEvent.dataTransfer.getData('Text').length > 3) upload.start.url(e.originalEvent.dataTransfer.getData('Text'))

                return false

            })

        // Init
        web.init()

    })