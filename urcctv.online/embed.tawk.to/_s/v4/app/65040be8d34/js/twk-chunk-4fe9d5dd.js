(window.tawkJsonp = window.tawkJsonp || []).push([
    ["chunk-4fe9d5dd"], {
        "9f3e": function(a, t, s) {
            "use strict";
            var e = {
                    name: "base-frame"
                },
                n = s("2877"),
                l = Object(n.a)(e, (function(a, t) {
                    return a("div", {
                        ref: "tawk-main-panel",
                        staticClass: "tawk-main-panel tawk-custom-flex-1",
                        class: [t.data.class, t.data.staticClass]
                    }, [a("div", t._g({
                        directives: [{
                            name: "tawk-scroll",
                            rawName: "v-tawk-scroll"
                        }],
                        ref: "tawk-chat-panel",
                        staticClass: "tawk-chat-panel tawk-custom-flex-1 ps--active-y"
                    }, t.listeners), [a("div", {
                        ref: "tawk-inner-panel",
                        staticClass: "tawk-chat-panel-inner tawk-flex tawk-flex-column"
                    }, [t._t("default")], 2)]), t._t("unseen-message-count")], 2)
                }), [], !0, null, null, null);
            t.a = l.exports
        },
        dbd1: function(a, t, s) {
            "use strict";
            var e = {
                    name: "base-body"
                },
                n = s("2877"),
                l = Object(n.a)(e, (function() {
                    return (0, this._self._c)("div", {
                        staticClass: "tawk-body",
                        attrs: {
                            id: "tawk-body"
                        }
                    }, [this._t("default")], 2)
                }), [], !1, null, null, null);
            t.a = l.exports
        }
    }
]);