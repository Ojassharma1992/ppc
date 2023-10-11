(window.tawkJsonp = window.tawkJsonp || []).push([
    ["chunk-07cad36d"], {
        3519: function(t, e, a) {
            "use strict";
            var s = a("f25b").a,
                i = a("2877"),
                r = Object(i.a)(s, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.isLoading,
                            expression: "!isLoading"
                        }],
                        ref: "tawk-chat-message-container",
                        staticClass: "tawk-chat-message-container tawk-margin-small-top"
                    }, [e("transition-group", {
                        attrs: {
                            name: "list"
                        }
                    }, t._l(t.messageBlocks, (function(a) {
                        return e("div", {
                            key: a.blockId,
                            ref: a.blockId,
                            refInFor: !0,
                            class: t.getMessageBlockClasses(a),
                            attrs: {
                                id: "blockId-".concat(a.blockId)
                            }
                        }, ["call" === a.messageType ? [a.callData && !a.callData.hasError ? e("tawk-alert", {
                            staticStyle: {
                                width: "100%"
                            },
                            attrs: {
                                status: t.callStatus(a.callData),
                                title: t.callTitle(a.callData),
                                description: t.callDescription(a.callData),
                                icon: t.callIcon(a.callData)
                            }
                        }) : e("tawk-alert", {
                            staticStyle: {
                                width: "100%"
                            },
                            attrs: {
                                status: "danger",
                                title: t.$i18n("chat", "error_title"),
                                description: t.$i18n("chat", "call_error_load"),
                                icon: "call"
                            }
                        })] : ["c" !== a.messageType || "v" === a.senderType || 1 === a.messages.length && a.messages[0].surveyObj && !a.messages[0].surveyObj.question.length ? t._e() : e("tawk-avatar", {
                            staticClass: "tawk-message-profile tawk-flex-none",
                            class: Object.keys(t.agents).length > 1 ? "tawk-margin-bottom" : "",
                            attrs: {
                                size: "small",
                                src: a.profileImage,
                                alt: "".concat(t.$i18n("chat", "agent_profile_image"))
                            }
                        }), e("div", {
                            staticClass: "tawk-message-group tawk-flex-1",
                            class: ["v" == a.senderType ? "tawk-margin-auto-left" : ""]
                        }, [t._l(a.messages, (function(a) {
                            return e("div", {
                                key: a.messageId
                            }, [a.surveyObj && "v" !== a.senderType ? [a.surveyObj.question.length ? e("chat-message-bubble", {
                                attrs: {
                                    msg: a,
                                    emojiEnabled: t.emojiEnabled,
                                    barMessageRerence: t.barMessageRerence
                                },
                                on: {
                                    onMouseEnter: t.onMouseEnter
                                }
                            }) : t._e()] : e("chat-message-bubble", {
                                attrs: {
                                    msg: a,
                                    emojiEnabled: t.emojiEnabled,
                                    barMessageRerence: t.barMessageRerence
                                },
                                on: {
                                    onMouseEnter: t.onMouseEnter
                                }
                            })], 2)
                        })), "v" != a.senderType ? e("p", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: Object.keys(t.agents).length > 1,
                                expression: "Object.keys(agents).length > 1"
                            }],
                            staticClass: "tawk-margin-xsmall-left tawk-text-regular-2 tawk-text-truncate"
                        }, [t._v(" " + t._s(a.messages[0].name) + " ")]) : t._e()], 2)]], 2)
                    })), 0), Object.keys(t.getSurveyOptions).length && "v" !== t.getSurveyOptions.senderType ? e("div", {
                        staticClass: "tawk-margin-top tawk-margin-small-bottom tawk-flex tawk-flex-bottom tawk-message-block"
                    }, [e("div", {
                        staticClass: "tawk-message-group tawk-flex-1 tawk-margin-auto-left"
                    }, [e("div", {
                        staticClass: "tawk-message-bubble"
                    }, [e("survey-options", {
                        attrs: {
                            options: t.getSurveyOptions.options
                        },
                        on: {
                            selectSurvey: t.submitSurvey
                        }
                    })], 1), e("div", {
                        staticClass: "clearfix"
                    })])]) : t._e()], 1)
                }), [], !1, null, null, null);
            e.a = r.exports
        },
        3558: function(t, e, a) {
            "use strict";
            var s = a("bfec").a,
                i = a("2877"),
                r = Object(i.a)(s, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("base-frame", {
                        staticClass: "tawk-chat-view",
                        on: {
                            "&scroll": function(e) {
                                return t.handleScrollProcess.apply(null, arguments)
                            }
                        }
                    }, [e("base-header", {
                        ref: "tawk-base-header",
                        staticClass: "tawk-padding-remove-bottom"
                    }, [e("chat-header", {
                        ref: "tawk-home-header",
                        staticClass: "tawk-flex-none"
                    })], 1), e("base-body", {
                        ref: "tawk-base-body"
                    }, [e("chat-body", {
                        ref: "chat-body",
                        attrs: {
                            isLoading: t.isLoading,
                            messageBlocks: t.messageBlocks,
                            barMessageRerence: t.barMessageId,
                            emojiEnabled: t.emojiEnabled
                        },
                        on: {
                            imageLoaded: t.imageLoaded
                        }
                    }), e("transition-group", {
                        attrs: {
                            name: "list"
                        }
                    }, t._l(t.agentTyping, (function(a, s) {
                        return e("div", {
                            key: s
                        }, [e("div", {
                            staticClass: "tawk-flex tawk-flex-middle tawk-margin-small-bottom"
                        }, [e("tawk-avatar", {
                            staticClass: "tawk-message-profile",
                            attrs: {
                                size: "small",
                                src: a,
                                alt: "".concat(t.$i18n("chat", "agent_profile_image"))
                            }
                        }), e("div", {
                            staticClass: "agentTypingIndicator tawk-margin-xsmall-left"
                        }, [e("div", {
                            staticClass: "dot tawk-agent-chat-bubble"
                        }), e("div", {
                            staticClass: "dot tawk-agent-chat-bubble"
                        }), e("div", {
                            staticClass: "dot tawk-agent-chat-bubble"
                        })]), e("div", {
                            staticClass: "clearfix"
                        })], 1)])
                    })), 0), e("transition-group", {
                        attrs: {
                            name: "list"
                        }
                    }, t._l(t.uploadFiles, (function(a, s) {
                        return e("div", {
                            key: "key-".concat(s),
                            staticClass: "tawk-margin-xsmall-top tawk-margin-xsmall-bottom"
                        }, [a.hasError ? e("div", [e("tawk-alert", {
                            attrs: {
                                status: "danger",
                                icon: "error",
                                title: t.$i18n("chat", "generalUploadErrorLabel"),
                                description: t.$i18n("chat", "generalUploadError", {
                                    fileName: a.fileName
                                })
                            }
                        }), e("tawk-button", {
                            staticClass: "tawk-text-red-1 tawk-margin-auto-left tawk-button tawk-button-text tawk-text-regular-2 tawk-margin-xsmall-top",
                            staticStyle: {
                                display: "block"
                            },
                            attrs: {
                                isText: !0
                            },
                            on: {
                                click: function(e) {
                                    return t.retryUpload(a)
                                }
                            }
                        }, [t._v(" " + t._s(t.$i18n("chat", "tryAgain")) + " ")])], 1) : e("progress-bar", {
                            attrs: {
                                handle: a.handle,
                                fileName: a.fileName,
                                percentage: a.percentage,
                                "aria-busy": "true",
                                "aria-valuemin": "0",
                                "aria-valuemax": "100",
                                "aria-valuenow": a.percentage
                            }
                        })], 1)
                    })), 0), t.tooBigFileList ? e("div", [e("tawk-alert", {
                        staticClass: "tawk-margin-xsmall-top tawk-margin-xsmall-bottom",
                        attrs: {
                            status: "danger",
                            icon: "error",
                            title: t.$i18n("notifications", "maximum_size_upload_warning", {
                                limitFileSize: "50MB"
                            }),
                            description: t.tooBigFileList
                        }
                    })], 1) : t._e()], 1), e("div", {
                        attrs: {
                            slot: "unseen-message-count"
                        },
                        slot: "unseen-message-count"
                    }, [e("transition", {
                        attrs: {
                            name: "slide-fade"
                        }
                    }, [t.showNotification && t.unreadMessageCount ? e("tawk-button", {
                        staticClass: "tawk-new-messages-notification",
                        attrs: {
                            size: "small"
                        },
                        on: {
                            click: function(e) {
                                return t.scrollToEl(t.barMessageId)
                            }
                        }
                    }, [t._v(" " + t._s(t.$i18n("chat", "newMessage", {
                        num: t.unreadMessageCount
                    })) + " "), e("tawk-icon", {
                        attrs: {
                            type: "down-arrow-2",
                            size: "xsmall"
                        }
                    })], 1) : t._e()], 1)], 1), e("div", {
                        attrs: {
                            slot: "unseen-message-count"
                        },
                        slot: "unseen-message-count"
                    }, [e("transition", {
                        attrs: {
                            name: "slide-fade"
                        }
                    }, [t.showLatest ? e("tawk-button", {
                        staticClass: "tawk-new-messages-notification",
                        attrs: {
                            size: "small"
                        },
                        on: {
                            click: function(e) {
                                return t.scrollToBottom()
                            }
                        }
                    }, [t._v(" " + t._s(t.$i18n("chat", "goToLatest")) + " "), e("tawk-icon", {
                        attrs: {
                            type: "down-arrow-2",
                            size: "xsmall"
                        }
                    })], 1) : t._e()], 1)], 1)], 1)
                }), [], !1, null, null, null);
            e.a = r.exports
        },
        "38d6": function(t, e, a) {
            "use strict";
            a.r(e);
            var s = a("2f62"),
                i = a("7f46"),
                r = a("f0b0");

            function n(t) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function o(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(t);
                    e && (s = s.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), a.push.apply(a, s)
                }
                return a
            }

            function c(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? o(Object(a), !0).forEach((function(e) {
                        l(t, e, a[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : o(Object(a)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                    }))
                }
                return t
            }

            function l(t, e, a) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" !== n(t) || null === t) return t;
                        var a = t[Symbol.toPrimitive];
                        if (void 0 !== a) {
                            var s = a.call(t, e || "default");
                            if ("object" !== n(s)) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" === n(e) ? e : String(e)
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = a, t
            }
            var u = {
                    name: "home-header",
                    components: {
                        TawkImage: r.TawkImage,
                        TawkVideo: r.TawkVideo,
                        KnowledgeBaseSearch: function() {
                            return a.e("chunk-2d0e5f34").then(a.bind(null, "9755"))
                        },
                        AgentCard: function() {
                            return a.e("chunk-2d0c8894").then(a.bind(null, "54fe"))
                        },
                        TawkEmoji: r.TawkEmoji
                    },
                    props: {
                        state: {
                            type: String,
                            default: "online"
                        }
                    },
                    data: function() {
                        return {
                            header: {},
                            refreshHeader: !0
                        }
                    },
                    mounted: function() {
                        this.state && this.states[this.state] && (this.header = this.states[this.state].header)
                    },
                    computed: c(c({}, Object(s.c)({
                        states: "widget/states",
                        pageStatus: "session/pageStatus",
                        chatVersion: "chat/chatVersion",
                        mobileBrowserName: "browserData/mobileBrowserName",
                        emojiEnabled: "widget/emojiEnabled"
                    })), {}, {
                        logoUrl: function() {
                            return "https://tawk.link"
                        }
                    }),
                    watch: {
                        state: function() {
                            var t = this;
                            this.refreshHeader = !1, this.header = {}, this.$nextTick((function() {
                                t.refreshHeader = !0, t.state && t.states[t.state] && (t.header = t.states[t.state].header)
                            }))
                        }
                    },
                    methods: {
                        convertToHTML: function(t) {
                            return i.a.markdownToHtml(t)
                        }
                    }
                },
                d = a("2877"),
                h = Object(d.a)(u, (function() {
                    var t = this,
                        e = t._self._c;
                    return t.refreshHeader ? e("div", t._l(t.header, (function(a, s) {
                        return e("div", {
                            key: s
                        }, ["logo" === a.type ? e("div", {
                            class: ["header-card card--" + a.type, a.content.alignment && "card--alignment-".concat(a.content.alignment)]
                        }, [e("tawk-image", {
                            attrs: {
                                src: "".concat(t.logoUrl, "/").concat(a.content.image.content),
                                alt: "".concat(t.$i18n("home", "logo_image")),
                                role: "logo"
                            }
                        })], 1) : t._e(), "heading" === a.type ? e("div", {
                            class: "header-card card--" + a.type
                        }, [e("p", {
                            staticClass: "tawk-text-bold-4 tawk-header-text tawk-custom-color",
                            class: [a.content.alignment && "card--alignment-".concat(a.content.alignment)],
                            attrs: {
                                role: "heading"
                            }
                        }, [e("tawk-emoji", {
                            attrs: {
                                emoji: t.convertToHTML(a.content.value),
                                enabled: t.emojiEnabled
                            }
                        })], 1)]) : t._e(), "text" === a.type ? e("div", {
                            class: "header-card card--" + a.type
                        }, [e("p", {
                            staticClass: "tawk-text-regular-4 tawk-header-text tawk-custom-color",
                            class: [a.content.alignment && "card--alignment-".concat(a.content.alignment)]
                        }, [e("tawk-emoji", {
                            attrs: {
                                emoji: t.convertToHTML(a.content.value),
                                enabled: t.emojiEnabled
                            }
                        })], 1)]) : t._e(), "agents" === a.type ? e("div", {
                            class: ["tawk-flex card--" + a.type, a.content.alignment && "card--flex-".concat(a.content.alignment)]
                        }, [e("agent-card", {
                            attrs: {
                                agentIds: a.content.agentIds
                            }
                        })], 1) : t._e(), "image" === a.type ? e("div", {
                            class: "header-card card--" + a.type
                        }, [e(a.content.link ? "a" : "div", {
                            tag: "component",
                            attrs: {
                                href: a.content.link ? a.content.link.ref : null,
                                target: a.content.link && "blank" === a.content.link.target ? "_blank" : "_top"
                            }
                        }, [e("tawk-image", {
                            staticClass: "tawk-custom-image",
                            attrs: {
                                position: a.content.alignment,
                                src: a.content.image.content,
                                alt: a.content.image.content
                            }
                        })], 1)], 1) : t._e(), "video" === a.type ? e("div", {
                            class: "header-card card--" + a.type
                        }, [e("tawk-video", {
                            attrs: {
                                content: {
                                    source: a.content.source,
                                    url: a.content.url,
                                    options: a.content.config
                                },
                                isMobile: !!t.mobileBrowserName
                            }
                        })], 1) : t._e(), "kb-search" === a.type ? e("knowledge-base-search", {
                            attrs: {
                                content: a.content
                            }
                        }) : t._e()], 1)
                    })), 0) : t._e()
                }), [], !1, null, null, null);
            e.default = h.exports
        },
        "3d78": function(t, e, a) {
            "use strict";
            var s = a("2f62"),
                i = a("7f46"),
                r = a("4b3e"),
                n = a("f0b0");

            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function c(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(t);
                    e && (s = s.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), a.push.apply(a, s)
                }
                return a
            }

            function l(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? c(Object(a), !0).forEach((function(e) {
                        u(t, e, a[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : c(Object(a)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                    }))
                }
                return t
            }

            function u(t, e, a) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" !== o(t) || null === t) return t;
                        var a = t[Symbol.toPrimitive];
                        if (void 0 !== a) {
                            var s = a.call(t, e || "default");
                            if ("object" !== o(s)) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" === o(e) ? e : String(e)
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = a, t
            }
            var d = {
                    name: "Item",
                    mixins: [r.a],
                    data: function() {
                        return {
                            isConversationCard: !1,
                            totalHistoryItems: 0,
                            isLoadingHistory: !0,
                            offVideo: !0
                        }
                    },
                    props: {
                        card: {
                            type: Object,
                            required: !0
                        },
                        isSubmitting: {
                            type: Boolean,
                            required: !0
                        },
                        submissionError: {
                            type: Boolean,
                            required: !1
                        },
                        body: {
                            type: Array,
                            required: !0
                        },
                        state: {
                            type: String,
                            required: !0
                        },
                        hasConversationCard: {
                            type: Boolean,
                            required: !0
                        }
                    },
                    components: {
                        TawkCard: n.TawkCard,
                        TawkIcon: n.TawkIcon,
                        TawkImage: n.TawkImage,
                        TawkVideo: n.TawkVideo,
                        TawkButton: n.TawkButton,
                        KnowledgeBase: function() {
                            return Promise.all([a.e("chunk-2d221830"), a.e("chunk-2d0c02e2")]).then(a.bind(null, "414c"))
                        },
                        TawkAlert: n.TawkAlert,
                        KnowledgeBaseSearch: function() {
                            return a.e("chunk-2d0e5f34").then(a.bind(null, "9755"))
                        },
                        Conversations: function() {
                            return a.e("chunk-5aa3ab47").then(a.bind(null, "30be"))
                        },
                        KbFeaturedArticle: function() {
                            return a.e("chunk-2d207f48").then(a.bind(null, "a377"))
                        },
                        TawkEmoji: n.TawkEmoji,
                        TawkForm: function() {
                            return a.e("chunk-2d0b345a").then(a.bind(null, "2853"))
                        }
                    },
                    mounted: function() {
                        this.hasLiveChat && "previous-conversations" === this.card.type && (this.$emit("update:hasConversationCard", !0), this.isConversationCard = !0), this.$emit("contentCardLoaded")
                    },
                    computed: l(l({}, Object(s.c)({
                        hasLiveChat: "widget/hasLiveChat",
                        mobileBrowserName: "browserData/mobileBrowserName",
                        hasChatStarted: "chat/hasChatStarted",
                        isPrechatEnabled: "widget/isPrechatEnabled",
                        prechatFormSubmitted: "session/prechatFormSubmitted",
                        historyItems: "history/items",
                        hasChatEnded: "chat/hasChatEnded",
                        emojiEnabled: "widget/emojiEnabled",
                        chatOrder: "chat/chatOrder",
                        isNotValidEmail: "session/isNotValidEmail"
                    })), {}, {
                        isChatInputBottom: function() {
                            var t = !1;
                            return this.body && this.body.length && (t = "chat" === this.body[this.body.length - 1].type), t
                        },
                        showStartChatButton: function() {
                            return !this.hasChatStarted && !this.hasChatEnded && (!this.isChatInputBottom || this.isPrechatEnabled && !this.prechatFormSubmitted)
                        },
                        showConversationCard: function() {
                            return this.isLoadingHistory || this.totalHistoryItems || this.chatOrder
                        }
                    }),
                    methods: l(l({}, Object(s.b)({
                        routerPush: "router/routerPush",
                        showOverlay: "overlay/showOverlay"
                    })), {}, {
                        startChat: function() {
                            this.isPrechatEnabled && !this.prechatFormSubmitted ? this.routerPush("prechat") : (this.routerPush("chat"), this.showOverlay(!1))
                        },
                        submitForm: function(t) {
                            this.$emit("submitForm", t)
                        },
                        convertToHTML: function(t) {
                            return i.a.markdownToHtml(t)
                        },
                        historyItemsLoaded: function(t) {
                            this.totalHistoryItems = t, this.isLoadingHistory = !1
                        }
                    }),
                    watch: {
                        isNotValidEmail: function(t) {
                            t && this.$emit("update:isSubmitting", !1)
                        }
                    }
                },
                h = a("2877"),
                m = Object(h.a)(d, (function() {
                    var t = this,
                        e = t._self._c;
                    return !t.isConversationCard || t.isConversationCard && t.showConversationCard ? e("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.isConversationCard || t.isConversationCard && !t.isLoadingHistory,
                            expression: "!isConversationCard || (isConversationCard && !isLoadingHistory)"
                        }],
                        staticClass: "card-container",
                        class: t.isConversationCard && t.chatOrder ? "tawk-flex-first" : ""
                    }, ["heading" === t.card.type ? e("tawk-card", {
                        staticClass: "tawk-box-shadow-xsmall",
                        class: "card--" + t.card.type,
                        attrs: {
                            color: "inverse",
                            size: "small"
                        }
                    }, [e("p", {
                        staticClass: "tawk-text-bold-4",
                        class: [t.card.content.alignment && "card--alignment-".concat(t.card.content.alignment)],
                        attrs: {
                            role: "heading"
                        }
                    }, [e("tawk-emoji", {
                        attrs: {
                            emoji: t.convertToHTML(t.card.content.value),
                            enabled: t.emojiEnabled
                        }
                    })], 1)]) : "text" === t.card.type ? e("tawk-card", {
                        staticClass: "tawk-box-shadow-xsmall",
                        class: "card--" + t.card.type,
                        attrs: {
                            color: "inverse",
                            size: "small"
                        }
                    }, [e("p", {
                        staticClass: "tawk-text-regular-4",
                        class: [t.card.content.alignment && "card--alignment-".concat(t.card.content.alignment)]
                    }, [e("tawk-emoji", {
                        attrs: {
                            emoji: t.convertToHTML(t.card.content.value),
                            enabled: t.emojiEnabled
                        }
                    })], 1)]) : "image" === t.card.type ? e("tawk-card", {
                        staticClass: "tawk-box-shadow-xsmall",
                        class: "card--" + t.card.type,
                        attrs: {
                            color: "inverse",
                            size: "small"
                        }
                    }, [e(t.card.content.link ? "a" : "div", {
                        tag: "component",
                        attrs: {
                            href: t.card.content.link ? t.card.content.link.ref : null,
                            target: t.card.content.link && "blank" === t.card.content.link.target ? "_blank" : "_top"
                        }
                    }, [e("tawk-image", {
                        staticClass: "tawk-custom-image",
                        attrs: {
                            position: t.card.content.alignment,
                            src: t.card.content.image.content,
                            alt: "".concat(t.$i18n("home", "banner_image")),
                            role: "banner"
                        }
                    })], 1)], 1) : "video" === t.card.type ? e("tawk-card", {
                        staticClass: "tawk-box-shadow-xsmall",
                        class: "card--" + t.card.type,
                        attrs: {
                            color: "inverse",
                            size: "small"
                        }
                    }, [t.offVideo ? e("tawk-video", {
                        attrs: {
                            content: {
                                source: t.card.content.source,
                                url: t.card.content.url,
                                options: t.card.content.config
                            },
                            isMobile: !!t.mobileBrowserName
                        }
                    }) : t._e()], 1) : "chat" === t.card.type ? [t.showStartChatButton && t.hasLiveChat ? e("tawk-card", {
                        staticClass: "tawk-box-shadow-xsmall",
                        class: "card--" + t.card.type,
                        attrs: {
                            id: t.card.id,
                            color: "inverse",
                            size: "small"
                        }
                    }, [e("tawk-button", {
                        staticClass: "tawk-button-hover tawk-custom-color tawk-custom-border-color",
                        on: {
                            click: t.startChat
                        }
                    }, [e("tawk-icon", {
                        attrs: {
                            type: "mobile-send"
                        }
                    }), t._v(" " + t._s(t.card.content.buttonText) + " ")], 1)], 1) : t._e()] : "kb-featured-articles" === t.card.type ? e("tawk-card", {
                        staticClass: "tawk-home-kb-card",
                        attrs: {
                            id: t.card.id,
                            color: "inverse",
                            size: "xsmall"
                        }
                    }, [e("knowledge-base", {
                        attrs: {
                            state: t.state,
                            content: t.card.content
                        }
                    })], 1) : "kb-search" === t.card.type ? e("knowledge-base-search", {
                        staticClass: "tawk-box-shadow-xsmall",
                        attrs: {
                            content: t.card.content
                        }
                    }) : "kb-featured-article" == t.card.type ? e("kb-featured-article", {
                        class: "card--" + t.card.type,
                        attrs: {
                            content: t.card.content
                        }
                    }) : "form" === t.card.type ? e("div", {
                        staticClass: "card--form",
                        class: t.isSubmitting && "submitting"
                    }, [e("tawk-form", {
                        attrs: {
                            state: t.state,
                            submissionError: t.submissionError,
                            isSubmitting: t.isSubmitting
                        },
                        on: {
                            "update:isSubmitting": [function(e) {
                                t.isSubmitting = e
                            }, t.isSubmitting],
                            "update:is-submitting": function(e) {
                                t.isSubmitting = e
                            },
                            onFormSubmit: t.submitForm
                        }
                    }), e("transition", {
                        attrs: {
                            name: "slide-fade"
                        }
                    }, [t.submissionError ? e("tawk-alert", {
                        staticClass: "tawk-form-error-alert",
                        attrs: {
                            status: "danger",
                            icon: "error",
                            title: t.$i18n("form", "errorSaving"),
                            description: "",
                            isDismissable: !0,
                            isAutoDismissable: !0
                        }
                    }) : t._e()], 1)], 1) : t.isConversationCard ? e("tawk-card", {
                        staticClass: "tawk-home-kb-card",
                        attrs: {
                            id: t.card.id,
                            color: "inverse",
                            size: "xsmall"
                        }
                    }, [e("conversations", {
                        on: {
                            historyItemsLoaded: t.historyItemsLoaded
                        }
                    })], 1) : t._e()], 2) : t._e()
                }), [], !1, null, null, null);
            e.a = m.exports
        },
        "3f09": function(t, e, a) {
            "use strict";
            (function(t) {
                a.d(e, "a", (function() {
                    return i
                }));
                var s = a("f0b0"),
                    i = {
                        data: function() {
                            return {
                                headerClass: ""
                            }
                        },
                        methods: {
                            displayMessages: function(e) {
                                var a, i = e.message,
                                    r = void 0 === i ? {} : i,
                                    n = e.isIncoming,
                                    o = void 0 !== n && n,
                                    c = e.isLive,
                                    l = void 0 === c || c,
                                    u = this.isScrollBarBottom(),
                                    d = l ? this.$store.getters["chat/messageBlocks"] : this.$store.getters["history/messageBlocks"];
                                if (!r.profileImage && r.data && r.data.rsc) {
                                    var h = this.agentProfile(r.data.rsc);
                                    if (!h) return;
                                    r.profileImage = h.profileImage
                                }
                                if (d.length > 0 && "c" === r.type && ((a = d[d.length - 1]).ownerId === r.ownerId ? (r.blockId = a.blockId, a.messages.push(r)) : a = null), r.timeStamp > this.lastMessageTimestamp && ("v" === r.senderType ? this.$store.dispatch("session/updateVisitorChatSeen", r.timeStamp) : (this.unseenMessages.push(r), "chat" === this.currentRoute && u && !this.isLoading || this.barMessageId || (r.showBar = !0, this.barMessageId = r.messageId, this.barMessageRerence = r))), o && "a" === r.senderType && r.data && r.data.rsc && this.removeAgentIsTyping(r.data.rsc), r.isCallView) {
                                    t.Tawk_Window.chatManager.callStatusUpdate({
                                        clid: r.callId,
                                        f: {}
                                    });
                                    var m = {
                                        ownerId: r.callId,
                                        callData: r.callData,
                                        messageType: "call",
                                        blockId: s.Helper.generateUUID(),
                                        callId: r.callId
                                    };
                                    l ? this.$store.dispatch("chat/addMessageBlock", m) : this.$store.dispatch("history/addMessageBlock", m)
                                } else if (!a) {
                                    if (void 0 === r.ownerId && "n" === r.type) return;
                                    var f = {
                                        ownerId: r.ownerId,
                                        messages: [r],
                                        senderType: r.senderType,
                                        messageType: r.type,
                                        blockId: s.Helper.generateUUID(),
                                        profileImage: r.profileImage
                                    };
                                    r.blockId = f.blockId, l ? this.$store.dispatch("chat/addMessageBlock", f) : this.$store.dispatch("history/addMessageBlock", f)
                                }
                                o && ("v" === r.senderType || u ? this.scrollToBottom() : this.checkBarPosition())
                            },
                            isScrollBarBottom: function() {
                                var t = this.$refs["tawk-chat-panel"];
                                if (t) {
                                    var e = t.offsetHeight + 10;
                                    return t.scrollHeight - (t.scrollTop + e) < 30
                                }
                            }
                        }
                    }
            }).call(this, a("c8ba"))
        },
        "411f": function(t, e, a) {
            "use strict";
            var s = a("9534").a,
                i = a("2877"),
                r = Object(i.a)(s, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("base-frame", {
                        ref: "tawk-frame",
                        staticClass: "tawk-prechat-view"
                    }, [e("base-header", {
                        ref: "tawk-base-header",
                        class: t.headerClass
                    }, [e("home-header", {
                        ref: "tawk-prechat-header",
                        attrs: {
                            state: "prechat"
                        }
                    })], 1), e("base-body", [e("div", {
                        staticStyle: {
                            width: "100%"
                        }
                    }, [e("home-body", {
                        ref: "tawk-prechat-body",
                        attrs: {
                            state: "prechat",
                            overwriteSubmit: !0
                        },
                        on: {
                            submitForm: t.submitForm,
                            homeLoaded: t.homeLoaded
                        }
                    })], 1)])], 1)
                }), [], !1, null, null, null);
            e.a = r.exports
        },
        "4b3e": function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return o
            }));
            var s = a("2f62");

            function i(t) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function r(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(t);
                    e && (s = s.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), a.push.apply(a, s)
                }
                return a
            }

            function n(t, e, a) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" !== i(t) || null === t) return t;
                        var a = t[Symbol.toPrimitive];
                        if (void 0 !== a) {
                            var s = a.call(t, e || "default");
                            if ("object" !== i(s)) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" === i(e) ? e : String(e)
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = a, t
            }
            var o = {
                data: function() {
                    return {
                        offVideo: !0
                    }
                },
                computed: function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var a = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? r(Object(a), !0).forEach((function(e) {
                            n(t, e, a[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : r(Object(a)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                        }))
                    }
                    return t
                }({}, Object(s.c)({
                    chatWindowState: "session/chatWindowState",
                    currentRoute: "router/current"
                })),
                watch: {
                    chatWindowState: function(t) {
                        "min" === t || "/" !== this.currentRoute && "kb-article" !== this.currentRoute ? this.offVideo = !1 : this.offVideo = !0
                    },
                    currentRoute: function(t) {
                        this.offVideo = "/" === t || "kb-article" === t
                    }
                }
            }
        },
        "4cd0": function(t, e, a) {
            "use strict";
            var s = a("2f62"),
                i = a("7f46");

            function r(t) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function n(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(t);
                    e && (s = s.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), a.push.apply(a, s)
                }
                return a
            }

            function o(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? n(Object(a), !0).forEach((function(e) {
                        c(t, e, a[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : n(Object(a)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                    }))
                }
                return t
            }

            function c(t, e, a) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" !== r(t) || null === t) return t;
                        var a = t[Symbol.toPrimitive];
                        if (void 0 !== a) {
                            var s = a.call(t, e || "default");
                            if ("object" !== r(s)) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" === r(e) ? e : String(e)
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = a, t
            }
            var l = {
                    name: "chat-header",
                    components: {
                        ChatAgents: function() {
                            return a.e("chunk-2d0a4ee2").then(a.bind(null, "0914"))
                        },
                        HomeHeader: function() {
                            return Promise.resolve().then(a.bind(null, "38d6"))
                        }
                    },
                    mounted: function() {
                        this.addWaitTime()
                    },
                    computed: o(o({}, Object(s.c)({
                        states: "widget/states",
                        pageStatus: "session/pageStatus",
                        agents: "chat/agents",
                        agentsCount: "chat/agentsCount",
                        activeProfiles: "chat/activeProfiles",
                        hasChatStarted: "chat/hasChatStarted",
                        agentHasMessaged: "chat/agentHasMessaged",
                        showEstimatedWaitTime: "widget/showEstimatedWaitTime",
                        waitTime: "session/waitTime"
                    })), {}, {
                        header: function() {
                            return this.states[this.pageStatus] ? this.states[this.pageStatus].header : null
                        },
                        logoUrl: function() {
                            return "https://tawk.link"
                        },
                        hasHomeView: function() {
                            var t = this.states[this.pageStatus];
                            return !t || !t.body || 1 !== t.body.length || "chat" !== t.body[0].type
                        }
                    }),
                    methods: o(o({}, Object(s.b)({
                        routerPush: "router/routerPush",
                        addWaitTime: "session/addWaitTime",
                        showOverlay: "overlay/showOverlay"
                    })), {}, {
                        convertToHTML: function(t) {
                            return i.a.markdownToHtml(t)
                        },
                        changeView: function() {
                            this.routerPush("agents"), this.showOverlay(!0)
                        }
                    })
                },
                u = a("2877"),
                d = Object(u.a)(l, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", [0 === t.activeProfiles.length ? [!t.hasHomeView && t.header.length > 0 ? e("home-header", {
                        staticClass: "tawk-margin-bottom",
                        attrs: {
                            state: t.pageStatus
                        }
                    }) : t._e(), t.hasChatStarted && !t.agentHasMessaged && t.showEstimatedWaitTime && t.waitTime ? e("p", {
                        staticClass: "tawk-margin-xsmall-bottom",
                        domProps: {
                            innerHTML: t._s(t.$i18n("chat", "messageQueuedText", {
                                t: Math.ceil(t.waitTime / 6e4),
                                strongStart: "<b>",
                                strongEnd: "</b>"
                            }))
                        }
                    }) : t._e()] : e("chat-agents", {
                        attrs: {
                            profiles: t.activeProfiles,
                            role: "button",
                            tabindex: "0"
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.changeView.apply(null, arguments)
                            }
                        }
                    })], 2)
                }), [], !1, null, null, null);
            e.a = d.exports
        },
        5688: function(t, e, a) {
            "use strict";
            var s = a("e906").a,
                i = a("2877"),
                r = Object(i.a)(s, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        ref: "adqe",
                        class: t.wrapperClasses,
                        style: {
                            borderRadius: t.borderRadiusTop
                        }
                    }, [e("div", {
                        staticClass: "tawk-toolbar-nav",
                        attrs: {
                            role: "navigation",
                            "aria-label": "primary"
                        }
                    }, [t.showBackButton ? e("div", {
                        staticClass: "tawk-route-back tawk-flex tawk-flex-middle"
                    }, [e("tawk-button", {
                        directives: [{
                            name: "tawk-tooltip",
                            rawName: "v-tawk-tooltip"
                        }],
                        staticClass: "tawk-header-text tawk-button-hover",
                        attrs: {
                            isText: !0,
                            inverse: !0,
                            "data-text": t.$i18n("rollover", "back"),
                            "aria-label": t.$i18n("rollover", "back")
                        },
                        on: {
                            click: t.routerBack
                        }
                    }, [e("tawk-icon", {
                        attrs: {
                            type: "left-arrow",
                            size: "small"
                        }
                    })], 1), t.currentView.title && "agents" !== t.currentRoute ? e("span", {
                        staticClass: "tawk-toolbar-title tawk-text-regular-3 tawk-header-text tawk-margin-xsmall-left tawk-custom-text-color-inverse"
                    }, [t._v(" " + t._s(t.currentView.title()) + " ")]) : t._e()], 1) : t._e(), e("transition", {
                        attrs: {
                            name: "fade",
                            mode: "out-in"
                        }
                    }, [t.isAgentAvatarsVisible ? e("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.toolbarOptions.showAgentAvatars,
                            expression: "toolbarOptions.showAgentAvatars"
                        }],
                        staticClass: "tawk-toolbar-agent-avatars",
                        on: {
                            click: t.toggleAgentsList
                        }
                    }, [t._l(t.getActiveAgents, (function(a, s) {
                        return e("tawk-avatar", {
                            key: s,
                            attrs: {
                                src: t.convertToAvatarLink(a.profileImage),
                                alt: "".concat(t.$i18n("chat", "agent_profile_image"))
                            }
                        })
                    })), e("transition", {
                        attrs: {
                            name: "fade",
                            mode: "out-in"
                        }
                    }, [1 === t.activeProfiles.length ? e("div", {
                        staticClass: "tawk-toolbar-agent-details"
                    }, [e("p", {
                        staticClass: "tawk-toolbar-agent-name tawk-text-truncate"
                    }, [t._v(" " + t._s(t.getActiveAgents[0].displayName) + " ")]), e("p", {
                        staticClass: "tawk-toolbar-agent-title tawk-text-truncate"
                    }, [t._v(" " + t._s(t.getActiveAgents[0].profileTitle) + " ")])]) : e("tawk-avatar", {
                        attrs: {
                            count: t.activeProfiles.length - 1
                        }
                    })], 1)], 2) : t._e()])], 1), e("div", {
                        staticClass: "tawk-margin-auto-left tawk-flex-none tawk-flex tawk-flex-middle",
                        attrs: {
                            role: "navigation",
                            "aria-label": "secondary"
                        }
                    }, [t.showWebrtcOptions && !t.needConsent ? e("div", [e("tawk-button", {
                        directives: [{
                            name: "tawk-tooltip",
                            rawName: "v-tawk-tooltip"
                        }],
                        staticClass: "tawk-header-text tawk-button-hover",
                        attrs: {
                            isText: !0,
                            inverse: !0,
                            disabled: t.ongoingCall,
                            "aria-label": t.$i18n("rollover", "voiceCall"),
                            "data-text": t.$i18n("rollover", "voiceCall")
                        },
                        on: {
                            click: t.initiateCall
                        }
                    }, [e("tawk-icon", {
                        attrs: {
                            type: "call"
                        }
                    })], 1), t.webrtcOptions.video ? e("tawk-button", {
                        directives: [{
                            name: "tawk-tooltip",
                            rawName: "v-tawk-tooltip"
                        }],
                        staticClass: "tawk-header-text tawk-button-hover",
                        attrs: {
                            isText: !0,
                            inverse: !0,
                            disabled: t.ongoingCall,
                            "aria-label": t.$i18n("rollover", "videoCall"),
                            "data-text": t.$i18n("rollover", "videoCall")
                        },
                        on: {
                            click: function(e) {
                                return t.initiateCall(!0, !1)
                            }
                        }
                    }, [e("tawk-icon", {
                        attrs: {
                            type: "video-chat"
                        }
                    })], 1) : t._e(), t.webrtcOptions.screen ? e("tawk-button", {
                        directives: [{
                            name: "tawk-tooltip",
                            rawName: "v-tawk-tooltip"
                        }],
                        staticClass: "tawk-header-text tawk-button-hover",
                        attrs: {
                            isText: !0,
                            inverse: !0,
                            disabled: t.ongoingCall,
                            "aria-label": t.$i18n("rollover", "screenShare"),
                            "data-text": t.$i18n("rollover", "screenShare")
                        },
                        on: {
                            click: function(e) {
                                return t.initiateCall(!1, !0)
                            }
                        }
                    }, [e("tawk-icon", {
                        attrs: {
                            type: "screenshare"
                        }
                    })], 1) : t._e()], 1) : t._e(), t.isHamburgerMenuVisible && !t.needConsent ? e("tawk-dropdown", {
                        ref: "toolbar-menu",
                        staticClass: "tawk-toolbar-menu",
                        attrs: {
                            isOpen: t.isOpen,
                            position: t.isRTL ? "left" : "right",
                            role: "menu"
                        }
                    }, [e("tawk-button", {
                        directives: [{
                            name: "tawk-tooltip",
                            rawName: "v-tawk-tooltip"
                        }],
                        ref: "toolbar-button",
                        staticClass: "tawk-header-text tawk-margin-auto-left tawk-flex-none tawk-button-hover",
                        attrs: {
                            isText: !0,
                            inverse: !0,
                            "aria-label": t.$i18n("rollover", "chatMenu"),
                            "data-text": t.$i18n("rollover", "chatMenu")
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.toggleDropdown.apply(null, arguments)
                            }
                        }
                    }, [e("tawk-icon", {
                        attrs: {
                            type: "hamburger-menu"
                        }
                    })], 1), e("div", {
                        attrs: {
                            slot: "menu"
                        },
                        slot: "menu"
                    }, [e("tawk-button", {
                        staticClass: "tawk-text-left tawk-flex tawk-flex-middle",
                        attrs: {
                            isText: !0,
                            size: "small"
                        },
                        on: {
                            click: t.nameForm
                        }
                    }, [e("span", {
                        staticStyle: {
                            width: "25px"
                        }
                    }, [e("tawk-icon", {
                        staticStyle: {
                            width: "20px"
                        },
                        attrs: {
                            type: "change-name",
                            size: "small"
                        }
                    })], 1), t._v(" " + t._s(t.$i18n("menu", "change_name")) + " ")]), t.emailTranscriptEnabled ? e("tawk-button", {
                        staticClass: "tawk-text-left tawk-flex tawk-flex-middle",
                        attrs: {
                            isText: !0,
                            size: "small"
                        },
                        on: {
                            click: t.emailTranscriptForm
                        }
                    }, [e("span", {
                        staticStyle: {
                            width: "25px"
                        }
                    }, [e("tawk-icon", {
                        attrs: {
                            type: "email-transcript",
                            size: "small"
                        }
                    })], 1), t._v(" " + t._s(t.$i18n("menu", "email_transcript")) + " ")]) : t._e(), e("tawk-button", {
                        staticClass: "tawk-text-left tawk-flex tawk-flex-middle",
                        attrs: {
                            isText: !0,
                            size: "small"
                        },
                        on: {
                            click: t.toggleLocalSound
                        }
                    }, [t.isSoundEnabled && t.localSoundEnabled ? e("div", [e("span", {
                        staticStyle: {
                            width: "1.6rem"
                        }
                    }, [e("tawk-icon", {
                        attrs: {
                            type: "sound-on",
                            size: "medium"
                        }
                    })], 1), t._v(" " + t._s(t.$i18n("menu", "sound_on")) + " ")]) : e("div", [e("span", {
                        staticStyle: {
                            width: "1.6rem"
                        }
                    }, [e("tawk-icon", {
                        attrs: {
                            type: "sound-off",
                            size: "medium"
                        }
                    })], 1), t._v(" " + t._s(t.$i18n("menu", "sound_off")) + " ")])]), t.isWindowed ? t._e() : e("tawk-button", {
                        staticClass: "tawk-text-left tawk-flex tawk-flex-middle",
                        attrs: {
                            isText: !0,
                            size: "small"
                        },
                        on: {
                            click: t.popoutWidget
                        }
                    }, [e("span", {
                        staticStyle: {
                            width: "1.6rem"
                        }
                    }, [e("tawk-icon", {
                        attrs: {
                            type: "pop-out",
                            size: "medium"
                        }
                    })], 1), t._v(t._s(t.$i18n("menu", "popout_widget")) + " ")]), t.hasChatStarted ? e("tawk-button", {
                        staticClass: "tawk-text-left tawk-flex tawk-flex-middle",
                        attrs: {
                            isText: !0,
                            size: "small"
                        },
                        on: {
                            click: function(e) {
                                return t.$emit("showEndChat")
                            }
                        }
                    }, [e("span", {
                        staticStyle: {
                            width: "1.6rem"
                        }
                    }, [e("tawk-icon", {
                        attrs: {
                            type: "end-chat",
                            size: "small"
                        }
                    })], 1), t._v(" " + t._s(t.$i18n("menu", "end_chat_session")) + " ")]) : t._e(), t.branding && !t.branding.whitelabeled ? e("tawk-button", {
                        staticClass: "tawk-text-left tawk-flex tawk-flex-middle",
                        attrs: {
                            href: t.branding.url,
                            target: "blank",
                            isText: !0,
                            size: "small"
                        }
                    }, [e("span", {
                        staticStyle: {
                            width: "1.6rem"
                        }
                    }, [e("tawk-icon", {
                        attrs: {
                            type: "message",
                            size: "small"
                        }
                    })], 1), t._v(" " + t._s(t.$i18n("menu", "add_chat_to_your_website")) + " ")]) : t._e()], 1)], 1) : t._e(), t.isWindowed || t.isRoundWidget && !t.mobileBrowserName ? t._e() : e("tawk-button", {
                        directives: [{
                            name: "tawk-tooltip",
                            rawName: "v-tawk-tooltip"
                        }],
                        staticClass: "tawk-header-text tawk-flex-none tawk-button-hover tawk-custom-color",
                        attrs: {
                            isText: !0,
                            "data-text": t.$i18n("rollover", "minimize"),
                            "aria-label": t.$i18n("rollover", "minimize")
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.toggleWidget.apply(null, arguments)
                            }
                        }
                    }, [e("tawk-icon", {
                        attrs: {
                            type: "close",
                            size: "small"
                        }
                    })], 1)], 1)])
                }), [], !1, null, null, null);
            e.a = r.exports
        },
        "6bf7": function(t, e, a) {
            "use strict";
            (function(t) {
                var s = a("2f62"),
                    i = a("f0b0"),
                    r = a("5a60"),
                    n = a("5688"),
                    o = a("7ea7"),
                    c = a("f2ef"),
                    l = a("3558"),
                    u = a("411f"),
                    d = a("87dd");

                function h(t) {
                    return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    })(t)
                }

                function m(t, e) {
                    var a = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), a.push.apply(a, s)
                    }
                    return a
                }

                function f(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var a = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? m(Object(a), !0).forEach((function(e) {
                            p(t, e, a[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : m(Object(a)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                        }))
                    }
                    return t
                }

                function p(t, e, a) {
                    return (e = function(t) {
                        var e = function(t, e) {
                            if ("object" !== h(t) || null === t) return t;
                            var a = t[Symbol.toPrimitive];
                            if (void 0 !== a) {
                                var s = a.call(t, e || "default");
                                if ("object" !== h(s)) return s;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === e ? String : Number)(t)
                        }(t, "string");
                        return "symbol" === h(e) ? e : String(e)
                    }(e)) in t ? Object.defineProperty(t, e, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = a, t
                }
                e.a = {
                    name: "MaximizeWidget",
                    components: {
                        IFrame: r.a,
                        CallWidget: function() {
                            return a.e("chunk-495e3f59").then(a.bind(null, "bcae"))
                        },
                        EndChat: function() {
                            return a.e("chunk-2d0e982e").then(a.bind(null, "8e9d"))
                        },
                        InactiveOverlay: function() {
                            return a.e("chunk-2d0af2da").then(a.bind(null, "0ce6"))
                        },
                        Toolbar: n.a,
                        TawkAlert: i.TawkAlert,
                        TawkOverlay: i.TawkOverlay,
                        HomeView: c.a,
                        ChatView: l.a,
                        MaximizeFooter: o.a,
                        PrechatView: u.a
                    },
                    mixins: [d.a],
                    data: function() {
                        return {
                            cssLink: "".concat("https://embed.tawk.to/_s/v4/app/65040be8d34", "/css/max-widget.css"),
                            classString: "",
                            showEndChat: !1,
                            noZoomMetaTag: null,
                            resizeHeightTo: null,
                            formIsOpen: !1,
                            isDraggedOver: !1,
                            originalBodyStyle: null,
                            isLoaded: !1,
                            isChatStatus: {},
                            routeLoadedTimeout: null,
                            powerImageUrl: "".concat("https://embed.tawk.to/_s/v4/assets", "/images/power.svg"),
                            initialized: !1,
                            iframe: {
                                height: "",
                                width: ""
                            }
                        }
                    },
                    computed: f(f({}, Object(s.c)({
                        maxDimension: "widget/maxDesktop",
                        minDesktop: "widget/minDesktop",
                        chatWindowState: "session/chatWindowState",
                        states: "widget/states",
                        pageStatus: "session/pageStatus",
                        isRoundWidget: "widget/isRoundWidget",
                        branding: "widget/branding",
                        features: "widget/features",
                        currentView: "router/getCurrentView",
                        activeProfiles: "chat/activeProfiles",
                        hasChatStarted: "chat/hasChatStarted",
                        prechatFormSubmitted: "session/prechatFormSubmitted",
                        isPrechatEnabled: "widget/isPrechatEnabled",
                        isWindowed: "widget/isWindowed",
                        mobileBrowserName: "browserData/mobileBrowserName",
                        isEmbedded: "widget/isEmbedded",
                        hasChatEnded: "chat/hasChatEnded",
                        needConsent: "session/needConsent",
                        isInactive: "session/isInactive",
                        isRight: "widget/isRight",
                        isBottom: "widget/isBottom",
                        isCenter: "widget/isCenter",
                        isOverlayOpen: "overlay/isOpen",
                        getHistory: "router/getHistory",
                        hasLiveChat: "widget/hasLiveChat",
                        webrtcOptions: "widget/webrtcOptions",
                        agentsCount: "chat/agentsCount",
                        currentRoute: "router/current",
                        isReconnecting: "session/isReconnecting",
                        chatOrder: "chat/chatOrder",
                        unreadMessageCount: "chat/unreadMessageCount",
                        desktopVisibility: "widget/desktopVisibility",
                        showMessagePreview: "widget/showMessagePreview",
                        firstIncoming: "chat/firstIncoming",
                        isReady: "socket/isReady",
                        isIE: "browserData/isIE",
                        components: "widget/components"
                    })), {}, {
                        xOffset: function() {
                            return t.Tawk_Window.widgetSettings.xOffset()
                        },
                        yOffset: function() {
                            return t.Tawk_Window.widgetSettings.yOffset()
                        },
                        styleObject: function() {
                            var e, a = null === (e = t.Tawk_Window.jsApi) || void 0 === e || null === (e = e.local_API) || void 0 === e || null === (e = e.customStyle) || void 0 === e ? void 0 : e.visibility,
                                s = {
                                    "border-radius:": "".concat(this.borderRadius, " !important;"),
                                    "height:": "".concat(this.iframe.height, " !important;"),
                                    "width:": "".concat(this.iframe.width, " !important;"),
                                    "min-height:": "".concat(this.iframe.height, " !important;"),
                                    "min-width:": "".concat(this.iframe.width, " !important;"),
                                    "max-height:": "".concat(this.iframe.height, " !important;"),
                                    "max-width:": "".concat(this.iframe.width, " !important;")
                                };
                            if (this.isWindowed || this.isEmbedded ? s["position:"] = "absolute !important;" : s["position:"] = "fixed !important;", this.isWindowed || this.mobileBrowserName || this.isEmbedded) {
                                var i = 0,
                                    r = 0,
                                    n = 0,
                                    o = 0;
                                this.mobileBrowserName && a && a.mobile && a.mobile.maximized && (a.mobile.maximized.bottomOffset && (i = a.mobile.maximized.bottomOffset), a.mobile.maximized.topOffset && (o = a.mobile.maximized.topOffset), a.mobile.maximized.leftOffset && (n = a.mobile.maximized.leftOffset), a.mobile.maximized.rightOffset && (r = a.mobile.maximized.rightOffset), s["height:"] = "calc(100% - ".concat(i + o, "px) !important;"), s["min-height:"] = "calc(100% - ".concat(i + o, "px) !important;"), s["max-height:"] = "calc(100% - ".concat(i + o, "px) !important;"), s["width:"] = "calc(100% - ".concat(n + r, "px) !important;"), s["min-width:"] = "calc(100% - ".concat(n + r, "px) !important;"), s["max-width:"] = "calc(100% - ".concat(n + r, "px) !important;")), s["bottom:"] = "".concat(i, "px !important;"), s["right:"] = "".concat(r, "px !important;"), s["left:"] = "".concat(n, "px !important;"), s["top:"] = "".concat(o, "px !important;")
                            } else {
                                var c;
                                c = this.isCenter && this.isRoundWidget ? this.minDesktop.width + this.xOffset + 10 : this.xOffset - 10, this.isRight ? s["right:"] = "".concat(c, "px !important;") : s["left:"] = "".concat(c, "px !important;"), this.isRoundWidget ? this.isBottom ? s["bottom:"] = "".concat(this.minDesktop.height + this.yOffset + 10, "px !important;") : (s["top:"] = "".concat(this.minDesktop.height + this.yOffset + 10, "px !important;"), s["bottom:"] = "auto !important;") : s["bottom:"] = "0px !important;"
                            }
                            return "max" === this.chatWindowState || this.isWindowed || this.isEmbedded ? s["display:"] = "block !important;" : s["display:"] = "none !important;", f(f({}, this.genericStyles), s)
                        },
                        borderRadius: function() {
                            return this.isWindowed || this.mobileBrowserName || this.isEmbedded ? "0px" : this.isRoundWidget ? "5px" : "5px 5px  0 0"
                        },
                        borderRadiusTop: function() {
                            return this.isWindowed || this.mobileBrowserName || this.isEmbedded ? "0px" : "5px 5px 0 0"
                        },
                        hasHomeView: function() {
                            if (this.hasChatEnded) return !0;
                            var t = this.states[this.pageStatus];
                            return !t || !t.body || 1 !== t.body.length || "chat" !== t.body[0].type
                        },
                        showBackButton: function() {
                            return this.currentView && ("chat" === this.currentView.path || "agents" === this.currentView.path || "prechat" === this.currentView.path) && this.hasHomeView && ("agents" === this.currentView.path || !this.isOverlayOpen)
                        },
                        isToolbarElementsVisible: function() {
                            return !(!this.mobileBrowserName && this.isRoundWidget && "/" === this.currentRoute && (void 0 === this.webrtcOptions || !this.webrtcOptions.enabled || this.isPrechatEnabled && !this.prechatFormSubmitted))
                        },
                        isChatInputBottom: function() {
                            var t = !1,
                                e = this.states[this.pageStatus];
                            return e && e.body.length && (t = "chat" === e.body[e.body.length - 1].type), t
                        },
                        showChatInput: function() {
                            return this.currentView && ("/" === this.currentView.path && (this.hasChatStarted || this.isChatInputBottom) || "chat" === this.currentView.path)
                        },
                        hasPrechatHistory: function() {
                            if (0 === this.getHistory.length) return !1;
                            var t = !1;
                            return this.getHistory.filter((function(e) {
                                "prechat" === e && (t = !0)
                            })), t
                        },
                        isHomeViewVisible: function() {
                            return this.needConsent || "chat" !== this.currentRoute && "agents" !== this.currentRoute && "prechat" !== this.currentRoute && this.hasHomeView && (!this.hasPrechatHistory || this.prechatFormSubmitted)
                        },
                        isWebrtcEnabled: function() {
                            return this.components && this.components.webrtc
                        }
                    }),
                    watch: {
                        chatWindowState: function(t) {
                            var e = this;
                            "max" === t ? (this.classString = "open", this.openView(), this.formIsOpen && this.resizeFrame(), this.isChatStatus["display:"] = "block !important;") : (this.classString = "closed", this.noZoomMetaTag.content = "", this.noZoomMetaTag.parentNode && this.noZoomMetaTag.parentNode.removeChild(this.noZoomMetaTag), null !== this.originalBodyStyle && (document.body.style.cssText = this.originalBodyStyle), this.mobileBrowserName ? this.isChatStatus["display:"] = "none !important;" : setTimeout((function() {
                                e.isChatStatus["display:"] = "none !important;"
                            }), 250))
                        },
                        pageStatus: function() {
                            "max" === this.chatWindowState && this.openView(), "offline" === this.pageStatus && (this.showOverlay(!1), this.routerPush("/"), this.clearHistory())
                        },
                        unreadMessageCount: function(t) {
                            this.isWindowed || this.isEmbedded || (!this.mobileBrowserName && !this.desktopVisibility.show && t > 0 && "max" !== this.chatWindowState && this.updateChatWindowState("max"), !this.firstIncoming || this.mobileBrowserName || this.showMessagePreview || "max" === this.chatWindowState || this.updateChatWindowState("max"))
                        }
                    },
                    methods: f(f({}, Object(s.b)({
                        routerPush: "router/routerPush",
                        updateRoute: "router/updateRoute",
                        toggleWidget: "session/toggleWidget",
                        toggleLocalSound: "widget/toggleLocalSound",
                        showOverlay: "overlay/showOverlay",
                        routerBack: "router/routerBack",
                        clearHistory: "router/clearHistory",
                        updateChatWindowState: "session/updateChatWindowState",
                        toggleFocus: "widget/toggleFocus"
                    })), {}, {
                        triggerClick: function() {
                            this.$store.dispatch("session/toggleWidget")
                        },
                        openView: function() {
                            if (this.initialized = !0, this.mobileBrowserName) {
                                var e = document.querySelector("meta[name=viewport]") || document.querySelector("meta[name=VIEWPORT]");
                                t.Tawk_Window.isMobileOptimizedWebsite || null === this.noZoomMetaTag || (t.Tawk_Window.metaContent || "" !== this.noZoomMetaTag.content ? t.Tawk_Window.metaContent && !t.Tawk_Window.hasNoScale && e && e.setAttribute("content", t.Tawk_Window.metaContent + ", user-scalable=no") : (this.noZoomMetaTag.content = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no", this.noZoomMetaTag.parentNode || document.getElementsByTagName("head")[0].appendChild(this.noZoomMetaTag)));
                                var a = document.body;
                                this.originalBodyStyle = a.style.cssText;
                                for (var s = ["height", "min-height", "max-height", "width", "min-width", "max-width"], i = 0; i < s.length; i++) a.style.setProperty(s[i], "100%", "important");
                                a.style.setProperty("overflow", "hidden", "important"), a.style.setProperty("position", "fixed", "important")
                            }
                            if (!this.currentView && this.hasHomeView && this.routerPush("/"), "offline" !== this.pageStatus) return this.hasHomeView || this.prechatFormSubmitted || !this.isPrechatEnabled ? void(this.currentView && ("/" !== this.currentRoute || this.hasHomeView) || (this.hasLiveChat && this.hasChatStarted || !this.hasHomeView ? (this.routerPush("chat"), this.showOverlay(!1)) : this.showOverlay(!1))) : this.routerPush("prechat");
                            this.showOverlay(!1)
                        },
                        loaded: function() {
                            var e = this;
                            if (this.hasHomeView || (this.updateRoute({
                                    path: "chat",
                                    hasBack: !1
                                }), this.updateRoute({
                                    path: "prechat",
                                    hasBack: !1
                                })), (this.isWindowed || this.isEmbedded || "max" === this.chatWindowState) && this.openView(), t.Tawk_Window.eventBus.$on("formOpened", (function() {
                                    "max" === e.chatWindowState ? e.resizeFrame() : e.formIsOpen = !0
                                })), t.Tawk_Window.eventBus.$on("formClosed", (function() {
                                    e.resizeHeightTo = null, e.formIsOpen = !1
                                })), t.Tawk_Window.eventBus.$on("resetState", (function() {
                                    e.$store.commit("router/changeCurrentView", "/"), t.Tawk_Window.activityMonitor.setupMaxWidgetListeners()
                                })), !this.isWindowed && !this.isEmbedded) {
                                var a, s, i = "",
                                    r = "tawkMaxOpen",
                                    n = "tawkMaxClose",
                                    o = this.$el.id;
                                this.isBottom ? (a = "transform:translate(0, 30px);", s = "transform:translate(0, 0px);") : this.isCenter ? this.isRight ? (a = "transform:translate(30px,0);", s = "transform:translate(0px,0);") : (a = "transform:translate(-30px,0);", s = "transform:translate(0px,0);") : (a = "transform:translate(0, -30px);", s = "transform:translate(0, 0px);");
                                var c, l = "{0%{opacity:0;" + a + ";}to{opacity:1;" + s + "}}";
                                i += "@keyframes " + r + l, i += "@-moz-keyframes " + r + l, i += "@-webkit-keyframes " + r + l, i += "#" + o + ".open{animation : " + r + " .25s ease!important;}", this.mobileBrowserName || (this.isRoundWidget, i += "@keyframes " + n + (c = "{from{opacity: 1;" + s + ";}to{opacity: 0;" + a + ";}}"), i += "@-moz-keyframes " + n + c, i += "@-webkit-keyframes " + n + c, i += "#" + o + ".closed{animation: " + n + " .25s ease!important}");
                                var u = document.head,
                                    d = document.createDocumentFragment(),
                                    h = document.createElement("style"),
                                    m = document.createTextNode(i);
                                h.type = "text/css", d.appendChild(h), u.appendChild(d), h.styleSheet ? h.styleSheet.cssText = m.nodeValue : h.appendChild(m)
                            }
                            t.Tawk_Window.activityMonitor.setupMaxWidgetListeners()
                        },
                        widgetFocus: function(e) {
                            t.Tawk_Window.eventBus.$emit("widgetOnFocus", e)
                        },
                        resizeFrame: function() {
                            var t = this,
                                e = 0,
                                a = 0,
                                s = 0;
                            this.isWindowed || this.mobileBrowserName || this.isEmbedded || setTimeout((function() {
                                if (!t.isOverlayOpen && t.$refs["main-toolbar"] && t.$refs["main-toolbar"].$el && (e = t.$refs["main-toolbar"].$el.offsetHeight), t.isOverlayOpen && t.$refs["view-overlay"] && t.$refs["view-overlay"].$el.children[0] && (e = t.$refs["view-overlay"].$el.children[0].offsetHeight), !t.isOverlayOpen && t.$refs["main-footer"] && (a = t.$refs["main-footer"].$el.offsetHeight), t.isOverlayOpen && t.$refs["overlay-footer"] && (a = t.$refs["overlay-footer"].$el.offsetHeight), t.$refs["router-view"] && t.$refs["router-view"].$children.length) {
                                    var i = t.$refs["router-view"].$children.length ? t.$refs["router-view"].$children[0] : null;
                                    i && i.$refs && i.$refs["tawk-inner-panel"] && (s = i.$refs["tawk-inner-panel"].offsetHeight)
                                }
                                if (!t.$refs["router-view"].$children.length) {
                                    var r;
                                    "chat" === t.currentRoute && t.$refs["chat-view"] ? r = t.$refs["chat-view"].$refs["tawk-inner-panel"] : "prechat" === t.currentRoute && t.$refs["prechat-view"] ? r = t.$refs["prechat-view"].$refs["tawk-inner-panel"] : t.$refs["home-view"] && (r = t.$refs["home-view"].$refs["tawk-inner-panel"]);
                                    var n = r ? r.lastChild : null;
                                    if (n && 0 === n.offsetHeight) return t.resizeHeightTo = null;
                                    s = r ? r.offsetHeight : 0
                                }
                                return 0 === s ? t.resizeHeightTo = null : (s < 250 && (s = 250), 0 === s ? t.resizeHeightTo = null : void((s += e + a) && t.maxDimension.height > s + 10 && (t.resizeHeightTo = s + 10)))
                            }), 300)
                        },
                        handleOverlayBack: function() {
                            this.routerBack(), this.isDraggedOver = !1
                        },
                        checkRouteLoaded: function() {
                            var t = this;
                            clearTimeout(this.routeLoadedTimeout), void 0 !== this.$refs["router-view"] ? this.isLoaded = !0 : this.routeLoadedTimeout = setTimeout((function() {
                                t.checkRouteLoaded()
                            }), 1e3)
                        },
                        handleFocus: function() {
                            this.toggleFocus(!0)
                        },
                        handleBlur: function() {
                            this.toggleFocus(!1)
                        },
                        calculateHeight: function() {
                            if (this.isWindowed || this.mobileBrowserName || this.isEmbedded) this.iframe.height = "100%";
                            else if (this.resizeHeightTo) this.iframe.height = this.resizeHeightTo + "px";
                            else {
                                if (this.isRoundWidget) {
                                    var t = this.minDesktop.height + this.yOffset + 10;
                                    if (this.maxDimension.height + t > window.innerHeight) return void(this.iframe.height = "".concat(window.innerHeight - t - 10, "px"))
                                }
                                this.maxDimension.height >= window.innerHeight ? this.iframe.height = "".concat(window.innerHeight - 10, "px") : this.iframe.height = "".concat(this.maxDimension.height, "px")
                            }
                        },
                        calculateWidth: function() {
                            if (this.isWindowed || this.mobileBrowserName || this.isEmbedded) this.iframe.width = "100%";
                            else {
                                if (this.isRoundWidget) {
                                    var t = this.minDesktop.width + this.xOffset + 10;
                                    if (this.maxDimension.width + t > window.innerWidth) return void(this.iframe.width = "".concat(window.innerWidth - t - 10, "px"))
                                }
                                this.maxDimension.width >= window.innerWidth ? this.iframe.width = "".concat(window.innerWidth - 10, "px") : this.iframe.width = this.maxDimension.width + "px"
                            }
                        },
                        calculateIframeSize: function() {
                            this.calculateHeight(), this.calculateWidth()
                        }
                    }),
                    mounted: function() {
                        var e = this;
                        this.calculateIframeSize(), this.noZoomMetaTag = document.createElement("meta"), this.noZoomMetaTag.name = "viewport", this.checkRouteLoaded(), this.$el.contentWindow.addEventListener("focus", this.handleFocus), this.$el.contentWindow.addEventListener("blur", this.handleBlur), window.addEventListener("resize", this.calculateIframeSize), t.Tawk_Window.eventBus.$on("forceUpdate", (function() {
                            e.initialized = !1, e.$nextTick((function() {
                                e.initialized = !0
                            }))
                        }))
                    },
                    beforeDestroy: function() {
                        this.$el.contentWindow.removeEventListener("focus", this.handleFocus), this.$el.contentWindow.removeEventListener("blur", this.handleBlur), window.removeEventListener("resize", this.calculateIframeSize)
                    }
                }
            }).call(this, a("c8ba"))
        },
        "702b": function(t, e, a) {
            "use strict";
            (function(t) {
                var s = a("2f62"),
                    i = a("38d6"),
                    r = a("f0b4"),
                    n = a("9f3e"),
                    o = a("31dd"),
                    c = a("dbd1");

                function l(t) {
                    return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    })(t)
                }

                function u(t, e) {
                    var a = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), a.push.apply(a, s)
                    }
                    return a
                }

                function d(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var a = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? u(Object(a), !0).forEach((function(e) {
                            h(t, e, a[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : u(Object(a)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                        }))
                    }
                    return t
                }

                function h(t, e, a) {
                    return (e = function(t) {
                        var e = function(t, e) {
                            if ("object" !== l(t) || null === t) return t;
                            var a = t[Symbol.toPrimitive];
                            if (void 0 !== a) {
                                var s = a.call(t, e || "default");
                                if ("object" !== l(s)) return s;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === e ? String : Number)(t)
                        }(t, "string");
                        return "symbol" === l(e) ? e : String(e)
                    }(e)) in t ? Object.defineProperty(t, e, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = a, t
                }
                e.a = {
                    name: "Home",
                    components: {
                        BaseFrame: n.a,
                        BaseHeader: o.a,
                        BaseBody: c.a,
                        HomeHeader: i.default,
                        HomeBody: r.a,
                        ConsentForm: function() {
                            return a.e("chunk-01913470").then(a.bind(null, "9114"))
                        }
                    },
                    props: {
                        isVisible: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    computed: d({}, Object(s.c)({
                        states: "widget/states",
                        pageStatus: "session/pageStatus",
                        hasChatStarted: "chat/hasChatStarted",
                        prechatFormSubmitted: "session/prechatFormSubmitted",
                        needConsent: "session/needConsent"
                    })),
                    watch: {
                        pageStatus: function(e) {
                            this.homeLoaded(), "offline" === e ? t.Tawk_Window.eventBus.$emit("formOpened") : t.Tawk_Window.eventBus.$emit("formClosed"), this.$refs["tawk-chat-panel"].scrollTop = 0
                        },
                        isVisible: function() {
                            for (var t = this.$refs["tawk-main-panel"].querySelectorAll(".tawk-video-el"), e = 0; e < t.length; e++) {
                                var a = t[e];
                                "about:blank" !== a.src ? a.src = "about:blank" : a.getAttribute("data-src") && (a.src = a.getAttribute("data-src"))
                            }
                        }
                    },
                    data: function() {
                        return {
                            headerClass: ""
                        }
                    },
                    methods: d(d({}, Object(s.b)({
                        routerPush: "router/routerPush"
                    })), {}, {
                        homeLoaded: function() {
                            var t = this;
                            setTimeout((function() {
                                t.$refs["tawk-chat-panel"] && t.$refs["tawk-chat-panel"].$scrollbar && t.$refs["tawk-chat-panel"].$scrollbar.update()
                            }), 500)
                        }
                    }),
                    mounted: function() {
                        "offline" === this.pageStatus && t.Tawk_Window.eventBus.$emit("formOpened")
                    },
                    destroyed: function() {
                        t.Tawk_Window.eventBus.$emit("formClosed")
                    }
                }
            }).call(this, a("c8ba"))
        },
        "7ea7": function(t, e, a) {
            "use strict";
            var s = a("f3c3").a,
                i = a("2877"),
                r = Object(i.a)(s, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        ref: "main-footer",
                        class: t.mainFooterClasses,
                        style: {
                            borderRadius: t.borderRadiusBottom
                        },
                        on: {
                            dragover: t.dragover,
                            dragleave: t.dragleave,
                            drop: t.drop,
                            paste: t.paste
                        }
                    }, [t.showStartChatButton ? e("div", {
                        staticClass: "tawk-max-footer-actions"
                    }, [e("tawk-button", {
                        staticClass: "tawk-max-footer-actions-button",
                        attrs: {
                            isOutline: !0
                        },
                        on: {
                            click: t.startChat
                        }
                    }, [e("tawk-icon", {
                        attrs: {
                            type: "mobile-send"
                        }
                    }), t._v(" " + t._s(t.$i18n("home", "chat_button")) + " ")], 1)], 1) : t._e(), t.showReturnToLiveChatBtton ? e("div", {
                        staticClass: "tawk-max-footer-actions"
                    }, [e("tawk-button", {
                        staticClass: "tawk-max-footer-actions-button",
                        attrs: {
                            isOutline: !0
                        },
                        on: {
                            click: t.returnToLiveChat
                        }
                    }, [e("tawk-icon", {
                        attrs: {
                            type: "message"
                        }
                    }), t._v(" " + t._s(t.$i18n("chat", "return_to_live_chat")) + " ")], 1)], 1) : t._e(), e("tawk-branding", {
                        staticClass: "tawk-text-center tawk-padding-small",
                        attrs: {
                            whitelabel: t.whitelabel,
                            imageUrl: t.imageUrl,
                            tawkToUrl: t.branding.url
                        }
                    }), t.isDraggedOver ? e("div", {
                        staticClass: "tawk-flex tawk-flex-column tawk-flex-center tawk-flex-middle",
                        attrs: {
                            id: "tawk-dragover-container"
                        }
                    }, [e("tawk-icon", {
                        attrs: {
                            type: "attach-file",
                            size: "xlarge"
                        }
                    }), e("p", [t._v(t._s(t.$i18n("rollover", "uploadFile")))])], 1) : t._e(), t.needConsent || "offline" === t.pageStatus || t.isPrechatEnabled && !t.prechatFormSubmitted || !t.isLiveChatFeatureEnabled ? t._e() : e("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.showChatInput,
                            expression: "showChatInput"
                        }],
                        ref: "tawk-chatinput-container",
                        attrs: {
                            id: "tawk-chatinput-container"
                        }
                    }, [e("tawk-chat-input", {
                        ref: "tawk-chatinput",
                        attrs: {
                            placeholder: t.inputPlaceholder,
                            features: t.features
                        },
                        on: {
                            messageTyping: t.messageTyping,
                            sendMessage: t.sendMessage,
                            ratingClicked: t.ratingClicked,
                            sendFiles: t.sendFiles,
                            focus: t.chatFocus,
                            blur: t.chatBlur
                        }
                    })], 1)], 1)
                }), [], !1, null, null, null);
            e.a = r.exports
        },
        9534: function(t, e, a) {
            "use strict";
            (function(t) {
                var s = a("2f62"),
                    i = a("9f3e"),
                    r = a("31dd"),
                    n = a("dbd1"),
                    o = a("f0b4"),
                    c = a("38d6");

                function l(t) {
                    return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    })(t)
                }

                function u(t, e) {
                    var a = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), a.push.apply(a, s)
                    }
                    return a
                }

                function d(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var a = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? u(Object(a), !0).forEach((function(e) {
                            h(t, e, a[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : u(Object(a)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                        }))
                    }
                    return t
                }

                function h(t, e, a) {
                    return (e = function(t) {
                        var e = function(t, e) {
                            if ("object" !== l(t) || null === t) return t;
                            var a = t[Symbol.toPrimitive];
                            if (void 0 !== a) {
                                var s = a.call(t, e || "default");
                                if ("object" !== l(s)) return s;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === e ? String : Number)(t)
                        }(t, "string");
                        return "symbol" === l(e) ? e : String(e)
                    }(e)) in t ? Object.defineProperty(t, e, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = a, t
                }
                e.a = {
                    name: "prechat-form",
                    components: {
                        BaseFrame: i.a,
                        BaseHeader: r.a,
                        BaseBody: n.a,
                        HomeHeader: c.default,
                        HomeBody: o.a
                    },
                    data: function() {
                        return {
                            isDropdownOpen: !1,
                            isSubmitting: !1,
                            submissionError: !1,
                            submissionSuccess: !1,
                            headerClass: ""
                        }
                    },
                    computed: d({}, Object(s.c)({
                        states: "widget/states",
                        departments: "session/departments",
                        name: "visitor/name",
                        email: "visitor/getEmailValue",
                        pageStatus: "session/pageStatus"
                    })),
                    watch: {
                        pageStatus: function(t) {
                            "offline" === t && this.showOverlay(!1)
                        }
                    },
                    methods: d(d({}, Object(s.b)({
                        routerPush: "router/routerPush",
                        showOverlay: "overlay/showOverlay",
                        removeRoute: "router/removeRoute"
                    })), {}, {
                        submitForm: function(e) {
                            var a = this;
                            e.hasError || (this.isSubmitting = !0, this.submissionError = !1, this.submissionSuccess = !1, this.$store.commit("session/setIsNotValidEmail", null), t.Tawk_Window.app.$socket.publish("notifyPrechat", e.formData, (function(s) {
                                var i = "";
                                if (a.isSubmitting = !1, s) return "InvalidArgument" === s.code && "email" === s.message ? (a.$store.commit("session/setIsNotValidEmail", "email"), void a.$emit("update:isSubmitting", !1)) : void(a.submissionError = !0);
                                a.$store.commit("session/setPrechatSubmitted", !0), t.Tawk_Window.jsApi.triggerApiHandlers("onPrechatSubmit", e.formData.questions), a.$nextTick((function() {
                                    if (e.formData.questions && e.formData.questions.length > 0)
                                        for (var s = 0, r = e.formData.questions.length; s < r; s++) i += "".concat(e.formData.questions[s].label, " : ").concat(e.formData.questions[s].answer), s !== r - 1 && (i += "\r\n");
                                    i && t.Tawk_Window.chatManager.sendMessageToServer(i), a.routerPush("chat"), a.removeRoute("prechat"), a.showOverlay(!1)
                                }))
                            })))
                        },
                        homeLoaded: function() {
                            var t = this;
                            setTimeout((function() {
                                t.$refs["tawk-chat-panel"] && t.$refs["tawk-chat-panel"].$scrollbar && t.$refs["tawk-chat-panel"].$scrollbar.update()
                            }), 500)
                        }
                    }),
                    mounted: function() {
                        setTimeout((function() {
                            t.Tawk_Window.eventBus.$emit("formOpened")
                        }), 50)
                    },
                    destroyed: function() {
                        t.Tawk_Window.eventBus.$emit("formClosed"), this.$emit("homeLoaded")
                    }
                }
            }).call(this, a("c8ba"))
        },
        aacb: function(t, e, a) {
            "use strict";
            (function(t) {
                var s = a("2f62"),
                    i = a("f0b0"),
                    r = a("3d78"),
                    n = a("e49c");

                function o(t) {
                    return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    })(t)
                }

                function c(t, e) {
                    var a = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), a.push.apply(a, s)
                    }
                    return a
                }

                function l(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var a = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? c(Object(a), !0).forEach((function(e) {
                            u(t, e, a[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : c(Object(a)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                        }))
                    }
                    return t
                }

                function u(t, e, a) {
                    return (e = function(t) {
                        var e = function(t, e) {
                            if ("object" !== o(t) || null === t) return t;
                            var a = t[Symbol.toPrimitive];
                            if (void 0 !== a) {
                                var s = a.call(t, e || "default");
                                if ("object" !== o(s)) return s;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === e ? String : Number)(t)
                        }(t, "string");
                        return "symbol" === o(e) ? e : String(e)
                    }(e)) in t ? Object.defineProperty(t, e, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = a, t
                }
                e.a = {
                    name: "HomeBody",
                    mixins: [n.a],
                    props: {
                        state: {
                            type: String,
                            default: "online"
                        },
                        overwriteSubmit: {
                            type: Boolean,
                            default: !1
                        },
                        isSubmitting: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    components: {
                        TawkCard: i.TawkCard,
                        TawkIcon: i.TawkIcon,
                        TawkButton: i.TawkButton,
                        ContentCard: r.a,
                        Conversations: function() {
                            return a.e("chunk-5aa3ab47").then(a.bind(null, "30be"))
                        },
                        RestartChat: function() {
                            return a.e("chunk-3c7eb82e").then(a.bind(null, "a3af"))
                        }
                    },
                    data: function() {
                        return {
                            submissionError: !1,
                            submissionSuccess: !1,
                            hasConversationCard: !1,
                            submittingValue: !1
                        }
                    },
                    computed: l(l({}, Object(s.c)({
                        states: "widget/states",
                        chatOrder: "chat/chatOrder",
                        hasLiveChat: "widget/hasLiveChat",
                        hasChatEnded: "chat/hasChatEnded",
                        chatEndVersion: "chat/chatEndVersion",
                        pageStatus: "session/pageStatus"
                    })), {}, {
                        body: function() {
                            return this.state && this.states[this.state] ? this.states[this.state].body : []
                        },
                        noPrechatForm: function() {
                            var t = !0;
                            if ("prechat" === this.state) {
                                for (var e = 0; e < this.body.length; e++)
                                    if ("form" === this.body[e].type) {
                                        t = !1;
                                        break
                                    }
                            } else t = !1;
                            return t
                        },
                        isHistoryCardEnabled: function() {
                            for (var t = !1, e = 0; e < this.body.length; e++) {
                                if ("previous-conversations" === this.body[e].type) {
                                    t = !0;
                                    break
                                }
                            }
                            return t
                        }
                    }),
                    methods: l(l({}, Object(s.b)({
                        routerPush: "router/routerPush",
                        showOverlay: "overlay/showOverlay",
                        loadHistory: "history/load",
                        updateShowChat: "chat/updateShowChat"
                    })), {}, {
                        submitForm: function(e) {
                            var a = this;
                            if (!e.hasError) {
                                if (this.submittingValue = !0, this.$emit("update:isSubmitting", this.submittingValue), this.submissionError = !1, this.submissionSuccess = !1, this.$store.commit("session/setIsNotValidEmail", null), this.overwriteSubmit) return this.$emit("submitForm", e);
                                e.formData.questions.unshift({
                                    label: this.$i18n("form", "SubmittedFrom"),
                                    answer: window.location.href
                                }), t.Tawk_Window.app.$socket.publish("notifyOfflineMessage", e.formData, (function(s) {
                                    if (a.submittingValue = !1, a.$emit("update:isSubmitting", a.submittingValue), s) return "InvalidArgument" === s.code && "email" === s.message ? void a.$store.commit("session/setIsNotValidEmail", "email") : void(a.submissionError = !0);
                                    a.routerPush("offline-success"), a.showOverlay(!0), a.$store.dispatch("visitor/updateVisitorInformation", {
                                        n: e.formData.name,
                                        e: e.formData.email
                                    }), t.Tawk_Window.jsApi.triggerApiHandlers("onOfflineSubmit", e.formData)
                                }))
                            }
                        }
                    })
                }
            }).call(this, a("c8ba"))
        },
        bfec: function(t, e, a) {
            "use strict";
            (function(t) {
                var s = a("2f62"),
                    i = a("f0b0"),
                    r = a("4cd0"),
                    n = a("3519"),
                    o = a("9f3e"),
                    c = a("31dd"),
                    l = a("dbd1"),
                    u = a("3f09"),
                    d = a("e375");

                function h(t) {
                    return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    })(t)
                }

                function m(t, e) {
                    var a = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), a.push.apply(a, s)
                    }
                    return a
                }

                function f(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var a = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? m(Object(a), !0).forEach((function(e) {
                            p(t, e, a[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : m(Object(a)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                        }))
                    }
                    return t
                }

                function p(t, e, a) {
                    return (e = function(t) {
                        var e = function(t, e) {
                            if ("object" !== h(t) || null === t) return t;
                            var a = t[Symbol.toPrimitive];
                            if (void 0 !== a) {
                                var s = a.call(t, e || "default");
                                if ("object" !== h(s)) return s;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === e ? String : Number)(t)
                        }(t, "string");
                        return "symbol" === h(e) ? e : String(e)
                    }(e)) in t ? Object.defineProperty(t, e, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = a, t
                }
                e.a = {
                    name: "chat-main",
                    mixins: [u.a],
                    components: {
                        BaseFrame: o.a,
                        BaseHeader: c.a,
                        BaseBody: l.a,
                        ChatHeader: r.a,
                        ChatBody: n.a,
                        TawkIcon: i.TawkIcon,
                        TawkButton: i.TawkButton,
                        TawkAvatar: i.TawkAvatar,
                        ProgressBar: d.a,
                        TawkAlert: i.TawkAlert
                    },
                    computed: f({}, Object(s.c)({
                        chatVersion: "chat/chatVersion",
                        incomingMessage: "chat/incomingMessage",
                        agentProfile: "chat/agentProfile",
                        chatMessages: "chat/chatMessages",
                        unreadMessageCount: "chat/unreadMessageCount",
                        lastMessageTimestamp: "session/lastMessageTimestamp",
                        showAgentTyping: "widget/showAgentTyping",
                        hasChatEnded: "chat/hasChatEnded",
                        uploadFiles: "chat/uploadFiles",
                        lastScrollPositon: "chat/lastScrollPositon",
                        outgoingMessage: "chat/outgoingMessage",
                        historyProcessed: "chat/historyProcessed",
                        messageBlocks: "chat/messageBlocks",
                        emojiEnabled: "widget/emojiEnabled",
                        currentRoute: "router/current",
                        chatWindowState: "session/chatWindowState",
                        isFocus: "widget/isFocus"
                    })),
                    data: function() {
                        return {
                            barMessageId: null,
                            isLoading: !1,
                            barMessageRerence: null,
                            unseenMessages: [],
                            showNotification: !1,
                            agentTyping: {},
                            clearBarTimeout: 0,
                            tooBigFileList: null,
                            showLatest: !1
                        }
                    },
                    watch: {
                        incomingMessage: function(t) {
                            this.displayMessages({
                                message: t,
                                isIncoming: !0
                            })
                        },
                        unreadMessageCount: function(t) {
                            0 === t && this.clearBarMessageId()
                        },
                        hasChatEnded: function(t) {
                            t && this.clearData()
                        },
                        uploadFiles: function() {
                            this.scrollToBottom()
                        },
                        outgoingMessage: function(t) {
                            this.isLoading || t && (this.displayMessages({
                                message: t,
                                isIncoming: !0
                            }), this.$store.commit("chat/setOutgoingMessage", null))
                        },
                        historyProcessed: function(t) {
                            t && this.processChatMessages()
                        },
                        currentRoute: function(t, e) {
                            "chat" === t && (this.$refs["tawk-chat-panel"] && this.$refs["tawk-chat-panel"].$scrollbar && this.$refs["tawk-chat-panel"].$scrollbar.update(), this.checkSeenMessageViewport(), this.checkBarPosition()), "chat" === e && this.saveScrollPosition()
                        },
                        chatWindowState: function(t) {
                            "max" === t && "chat" === this.currentRoute && (this.toggleFocus(!0), this.checkSeenMessageViewport())
                        },
                        isFocus: function(t) {
                            t && "chat" === this.currentRoute && this.checkSeenMessageViewport()
                        }
                    },
                    created: function() {
                        var e = this;
                        t.Tawk_Window.eventBus.$on("tooBigFileList", (function(t) {
                            e.tooBigFileList = t.join(", ")
                        }))
                    },
                    mounted: function() {
                        var e = this;
                        this.processChatMessages(), this.showAgentTyping && (t.Tawk_Window.eventBus.$on("agentIsTyping", (function(t) {
                            var a = e.agentProfile(t.rsc),
                                s = e.isScrollBarBottom();
                            a && (e.updateAgentTyping(t, a), s && e.scrollToBottom())
                        })), t.Tawk_Window.eventBus.$on("agentStopedTyping", (function(t) {
                            e.removeAgentIsTyping(t.rsc)
                        }))), t.Tawk_Window.eventBus.$on("callDataUpdated", (function(t) {
                            for (var a = e.isScrollBarBottom(), s = 0; s < e.messageBlocks.length; s++) {
                                var i = e.messageBlocks[s];
                                if ("call" === i.messageType && i.ownerId === t.callId) {
                                    i.callData = t;
                                    break
                                }
                            }
                            a && e.scrollToBottom()
                        }))
                    },
                    beforeDestroy: function() {
                        this.saveScrollPosition(), this.clearData()
                    },
                    methods: f(f({}, Object(s.b)({
                        clearMessageBlock: "chat/clearMessageBlock",
                        toggleAgentAvatarToolbar: "widget/toggleAgentAvatarToolbar",
                        toggleFocus: "widget/toggleFocus"
                    })), {}, {
                        updateAgentTyping: function(t, e) {
                            this.$set(this.agentTyping, t.rsc, e.profileImage)
                        },
                        scrollToBottom: function(t) {
                            var e = this.$refs["tawk-chat-panel"];
                            e && setTimeout((function() {
                                e.scrollTop = t || e.scrollHeight
                            }), 300)
                        },
                        handleScrollProcess: function() {
                            this.checkBarPosition(), this.checkSeenMessageViewport(), this.handleAgentsAvatarToolbar()
                        },
                        scrollToEl: function(t) {
                            if (t) {
                                var e = this.$refs["chat-body"],
                                    a = e ? e.$refs[t] : null,
                                    s = this.$refs["tawk-chat-panel"];
                                a && a.length && s && (void 0 !== a[0].offsetTop ? s.scrollTop = a[0].offsetTop - 40 : s.scrollTop = a[0].offsetTop, this.$refs["tawk-chat-panel"] && this.$refs["tawk-chat-panel"].$scrollbar && this.$refs["tawk-chat-panel"].$scrollbar.update())
                            }
                        },
                        clearBarMessageId: function() {
                            var t = this;
                            clearTimeout(this.clearBarTimeout), this.clearBarTimeout = setTimeout((function() {
                                t.barMessageId = null, t.barMessageRerence && (t.barMessageRerence.showBar = !1), t.showNotification = !1, t.barMessageRerence = null
                            }), 1e3)
                        },
                        checkSeenMessageViewport: function() {
                            var t, e = -1,
                                a = this.$refs["chat-body"];
                            if (0 !== this.unseenMessages.length && a && this.isFocus) {
                                for (var s = 0; s < this.unseenMessages.length; s++) {
                                    t = this.unseenMessages[s];
                                    var i = a.$refs[t.messageId];
                                    if (i && this.chatElementInView(i) && t.timeStamp > this.lastMessageTimestamp) {
                                        e = s;
                                        break
                                    }
                                } - 1 !== e && ((t = this.unseenMessages[this.unseenMessages.length - 1]) && (this.unseenMessages = [], this.$store.dispatch("session/updateVisitorChatSeen", t.timeStamp)))
                            }
                        },
                        chatElementInView: function(t) {
                            var e = this.$refs["tawk-chat-panel"];
                            return !!e && !!(t[0].offsetTop >= e.scrollTop && t[0].offsetTop <= e.scrollTop + e.offsetHeight && 0 !== t[0].clientWidth && 0 !== t[0].clientHeight)
                        },
                        removeAgentIsTyping: function(t) {
                            this.$delete(this.agentTyping, t)
                        },
                        checkBarPosition: function() {
                            var t = this;
                            this.$nextTick((function() {
                                if (t.showNotification = !1, t.barMessageRerence && t.barMessageId) {
                                    var e = t.$refs[t.barMessageId],
                                        a = t.$refs["chat-body"];
                                    if (a && a.$refs[t.barMessageId] && (e = a.$refs[t.barMessageId]), e)
                                        if (t.chatElementInView(e)) t.clearBarMessageId();
                                        else {
                                            var s = t.$refs["tawk-chat-panel"];
                                            s && s.scrollTop < e[0].offsetTop && (t.showNotification = !0)
                                        }
                                }
                                t.isScrollBarBottom() || t.showNotification || t.unreadMessageCount ? t.showLatest = !1 : t.showLatest = !0
                            }))
                        },
                        clearData: function() {
                            clearTimeout(this.clearBarTimeout), this.barMessageId = null, this.isLoading = !1, this.barMessageRerence = null, this.unseenMessages = [], this.showNotification = !1, this.agentTyping = [], this.clearBarTimeout = 0
                        },
                        retryUpload: function(e) {
                            for (var a = 0; a < this.uploadFiles.length; a++)
                                if (this.uploadFiles[a].handle === e.handle) {
                                    this.uploadFiles.splice(a, 1);
                                    break
                                }
                            t.Tawk_Window.chatManager.uploadFiles([e.fileData])
                        },
                        processChatMessages: function() {
                            var t = this;
                            this.isLoading = !0;
                            var e = !1;
                            for (var a in this.clearMessageBlock(), this.chatMessages) {
                                var s = this.chatMessages[a];
                                this.outgoingMessage && !e && s.messageId === this.outgoingMessage.messageId ? (e = !0, this.displayMessages({
                                    message: s,
                                    isIncoming: !0
                                })) : this.displayMessages({
                                    message: s
                                })
                            }
                            this.outgoingMessage && !e && this.displayMessages({
                                message: this.outgoingMessage,
                                isIncoming: !0
                            }), this.isLoading = !1, setTimeout((function() {
                                t.barMessageId ? (t.scrollToEl(t.barMessageId), t.checkBarPosition()) : t.scrollToBottom(t.lastScrollPositon), t.checkSeenMessageViewport()
                            }), 1e3 / 66)
                        },
                        imageLoaded: function() {
                            this.isScrollBarBottom() && this.scrollToBottom(), this.$refs["tawk-chat-panel"] && this.$refs["tawk-chat-panel"].$scrollbar && this.$refs["tawk-chat-panel"].$scrollbar.update()
                        },
                        handleAgentsAvatarToolbar: function() {
                            if (this.$refs["tawk-home-header"]) {
                                var t = this.$refs["tawk-home-header"].$el.offsetHeight;
                                this.$refs["tawk-chat-panel"].scrollTop > t ? this.toggleAgentAvatarToolbar(!0) : this.toggleAgentAvatarToolbar(!1)
                            }
                        },
                        saveScrollPosition: function() {
                            var t = this.$refs["tawk-chat-panel"];
                            t && this.$store.commit("chat/setLastScrollPosition", this.isScrollBarBottom() ? 9999999999 : t.scrollTop)
                        }
                    })
                }
            }).call(this, a("c8ba"))
        },
        d6a3: function(t, e, a) {
            "use strict";
            a.r(e);
            var s = a("6bf7").a,
                i = a("2877"),
                r = Object(i.a)(s, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("i-frame", {
                        attrs: {
                            width: t.iframe.width,
                            height: t.iframe.height,
                            cssLink: t.cssLink,
                            styleObject: t.styleObject,
                            classString: t.classString
                        }
                    }, [e("div", [t.initialized ? e("div", {
                        staticClass: "tawk-max-container tawk-flex tawk-flex-column",
                        class: [!t.isToolbarElementsVisible && "tawk-no-toolbar-elements"],
                        style: {
                            borderRadius: t.borderRadius
                        },
                        on: {
                            click: t.widgetFocus,
                            keyup: function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.widgetFocus.apply(null, arguments)
                            }
                        }
                    }, [e("toolbar", {
                        ref: "main-toolbar",
                        attrs: {
                            borderRadiusTop: t.borderRadiusTop,
                            showBackButton: t.showBackButton,
                            currentView: t.currentView,
                            showWebRtcButtons: !0,
                            showAgentAvatars: !0
                        },
                        on: {
                            showEndChat: function(e) {
                                t.showEndChat = !0
                            }
                        }
                    }), t.isWebrtcEnabled ? e("call-widget") : t._e(), e("tawk-overlay", {
                        ref: "view-overlay",
                        style: {
                            borderRadius: t.borderRadius
                        },
                        attrs: {
                            isOpen: t.isOverlayOpen,
                            title: t.currentView && t.currentView.title ? t.currentView.title() : "",
                            backTooltipText: t.$i18n("rollover", "back"),
                            headerClass: "tawk-custom-color"
                        },
                        on: {
                            goBack: t.handleOverlayBack
                        }
                    }, [e("div", {
                        attrs: {
                            slot: "options"
                        },
                        slot: "options"
                    }, [e("toolbar", {
                        attrs: {
                            borderRadiusTop: t.borderRadiusTop,
                            currentView: t.currentView
                        },
                        on: {
                            showEndChat: function(e) {
                                t.showEndChat = !0
                            }
                        }
                    })], 1), e("div", {
                        staticClass: "tawk-flex tawk-flex-column",
                        staticStyle: {
                            height: "100%",
                            overflow: "hidden"
                        }
                    }, [e("div", {
                        staticClass: "tawk-flex tawk-flex-column tawk-flex-1 tawk-custom-flex-1"
                    }, [e("div", {
                        staticClass: "tawk-router-view tawk-flex tawk-flex-1 tawk-custom-flex-1"
                    }, [e("tawk-router-view", {
                        ref: "router-view"
                    })], 1), e("maximize-footer", {
                        ref: "overlay-footer"
                    })], 1)])]), t.isInactive ? e("inactive-overlay") : t._e(), t.showEndChat && !t.hasChatEnded ? e("end-chat", {
                        on: {
                            cancelEnd: function(e) {
                                t.showEndChat = !1
                            }
                        }
                    }) : t._e(), e("div", {
                        staticClass: "tawk-flex tawk-flex-column tawk-flex-1"
                    }, [e("div", {
                        staticClass: "tawk-router-view tawk-flex tawk-flex-1"
                    }, [t.isLoaded ? t._e() : e("div", {
                        staticClass: "tawk-flex tawk-flex-middle tawk-flex-center",
                        style: {
                            width: "100%",
                            height: "100%",
                            left: 0,
                            top: 0,
                            position: "absolute"
                        }
                    }, [e("div", {
                        staticClass: "tawk-spinner-loader",
                        style: {
                            margin: "1px"
                        }
                    })]), e("transition", {
                        attrs: {
                            name: "slide-fade",
                            mode: "out-in"
                        }
                    }, [!t.hasLiveChat || t.needConsent || !t.chatOrder && !t.hasChatStarted && t.hasHomeView ? t._e() : e("chat-view", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "chat" === t.currentRoute || "agents" === t.currentRoute,
                            expression: "currentRoute === 'chat' || currentRoute === 'agents'"
                        }],
                        ref: "chat-view"
                    })], 1), e("transition", {
                        attrs: {
                            name: "slide-fade",
                            mode: "out-in"
                        }
                    }, [t.hasLiveChat && !t.needConsent && t.isPrechatEnabled && t.isReady && !t.prechatFormSubmitted && ("prechat" === t.currentRoute || !t.hasHomeView || t.hasPrechatHistory && !t.prechatFormSubmitted) ? e("prechat-view", {
                        ref: "prechat-view"
                    }) : t._e()], 1), e("transition", {
                        attrs: {
                            name: "slide-fade",
                            mode: "out-in"
                        }
                    }, [t.hasHomeView || t.needConsent ? e("home-view", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isHomeViewVisible,
                            expression: "isHomeViewVisible"
                        }],
                        ref: "home-view",
                        attrs: {
                            isVisible: t.isHomeViewVisible && !t.isOverlayOpen
                        }
                    }) : t._e()], 1)], 1), e("maximize-footer", {
                        ref: "main-footer"
                    })], 1), e("transition", {
                        attrs: {
                            name: "slide-fade"
                        }
                    }, [t.isReconnecting ? e("tawk-alert", {
                        staticStyle: {
                            position: "absolute",
                            bottom: "16px",
                            left: "16px",
                            right: "16px",
                            width: "auto",
                            "z-index": "10"
                        },
                        attrs: {
                            title: t.$i18n("notifications", "reconnecting"),
                            status: "danger",
                            description: "",
                            icon: "error"
                        }
                    }) : t._e()], 1)], 1) : t._e()])])
                }), [], !1, null, null, null);
            e.default = r.exports
        },
        e375: function(t, e, a) {
            "use strict";
            var s = {
                    name: "progress-bar",
                    props: {
                        handle: {
                            type: String,
                            default: ""
                        },
                        fileName: {
                            type: String,
                            default: ""
                        },
                        percentage: {
                            type: Number,
                            default: 0
                        }
                    },
                    computed: {
                        progressWidth: function() {
                            return "width : ".concat(this.percentage, "%")
                        }
                    }
                },
                i = a("2877"),
                r = Object(i.a)(s, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "file-upload-progress"
                    }, [e("div", [t._v(t._s(t.fileName))]), e("div", {
                        staticClass: "progress active tawk-margin-small-top"
                    }, [e("div", {
                        staticClass: "progress-bar",
                        style: t.progressWidth,
                        attrs: {
                            role: "progressbar"
                        }
                    })])])
                }), [], !1, null, null, null);
            e.a = r.exports
        },
        e49c: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return r
            }));
            var s = a("f0b0"),
                i = a("7f46"),
                r = {
                    methods: {
                        setError: function(t, e) {
                            e.isError = t
                        },
                        setValue: function(t, e) {
                            e.value = t;
                            var a = e.value || "";
                            "string" == typeof t && (a = t.trim()), ("text" === e.type || "phone" === e.type || "textarea" === e.type) && e.isRequired && a.length > 0 && (e.invalidType = "")
                        },
                        setInvalidType: function(t, e) {
                            e.invalidTypeValue = t
                        },
                        formatFields: function(t) {
                            for (var e = [], a = 0; a < t.length; a++) {
                                var i = t[a],
                                    r = {},
                                    n = "";
                                if (i.required && (r.required = this.$i18n("form", "RequiredErrorMessage")), i.context && "email" === i.context && (r.email = this.$i18n("form", "EmailErrorMessage"), n = this.email), i.context && "name" === i.context && (n = this.name), i.context && "phone" === i.context && (r.phone = this.$i18n("form", "PhoneErrorMessage")), "department" === i.context && this.departments.length) {
                                    for (var o = [], c = 0; c < this.departments.length; c++) {
                                        var l = this.departments[c];
                                        o.push({
                                            text: "".concat(l.n, " (").concat(this.$i18n("status", l.st), ")"),
                                            rawText: l.n,
                                            value: l.did
                                        })
                                    }
                                    e.push({
                                        label: i.label,
                                        type: i.context,
                                        isRequired: i.required,
                                        selections: o || [],
                                        id: s.Helper.generateUUID(),
                                        errorMessage: r,
                                        isError: !1,
                                        invalidTypeValue: ""
                                    })
                                } else e.push({
                                    label: i.label,
                                    type: i.context || i.type,
                                    isRequired: i.required,
                                    selections: i.options ? this.formatOptions(i.options, i.type) : null,
                                    value: "checkbox" === i.type ? [] : n,
                                    id: s.Helper.generateUUID(),
                                    errorMessage: r,
                                    invalidTypeValue: ""
                                })
                            }
                            return e
                        },
                        formatOptions: function(t, e) {
                            var a, i = [];
                            "radio" === e && (a = s.Helper.generateUUID());
                            for (var r = 0; r < t.length; r++) {
                                var n = {
                                    value: t[r],
                                    label: t[r],
                                    id: s.Helper.generateUUID(),
                                    name: a
                                };
                                i.push(n)
                            }
                            return i
                        },
                        formatFormData: function() {
                            var t = {},
                                e = !1;
                            t.questions = [];
                            for (var a = 0; a < this.formFields.length; a++) {
                                var s = this.formFields[a],
                                    r = s.value || "";
                                if ("string" == typeof r && (r = r.trim()), "name" === s.type) t.name = r;
                                else if ("email" === s.type) t.email = r;
                                else if ("phone" === s.type && r.length > 0) r = r.replace(/[- )(]/g, ""), t.phone = r;
                                else if ("department" === s.type) {
                                    if (s.isRequired && !this.selectedDepartment) {
                                        if (!s.selections || !s.selections.length) continue;
                                        s.isError = !0, e = !0;
                                        continue
                                    }
                                    if (s.isError = !1, !this.selectedDepartment) continue;
                                    t.department = this.selectedDepartment.value, t.questions.push({
                                        label: i.a.rawDecode(s.label),
                                        answer: i.a.rawDecode(this.selectedDepartment.rawText)
                                    })
                                }
                                s.isRequired && 0 === r.length && "department" !== s.type && (this.$refs[s.id] && this.$refs[s.id].length && this.$refs[s.id][0] && this.$refs[s.id][0].validate && this.$refs[s.id][0].validate(), e = !0), s.isError ? e = !0 : r && r.length && ("string" == typeof r ? t.questions.push({
                                    label: i.a.rawDecode(s.label),
                                    answer: r
                                }) : t.questions.push({
                                    label: i.a.rawDecode(s.label),
                                    answer: r.join(", ")
                                }))
                            }
                            return {
                                formData: t,
                                hasError: e
                            }
                        }
                    }
                }
        },
        e906: function(t, e, a) {
            "use strict";
            (function(t) {
                var s = a("2f62"),
                    i = a("f0b0");

                function r(t) {
                    return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    })(t)
                }

                function n(t, e) {
                    var a = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), a.push.apply(a, s)
                    }
                    return a
                }

                function o(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var a = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? n(Object(a), !0).forEach((function(e) {
                            c(t, e, a[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : n(Object(a)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                        }))
                    }
                    return t
                }

                function c(t, e, a) {
                    return (e = function(t) {
                        var e = function(t, e) {
                            if ("object" !== r(t) || null === t) return t;
                            var a = t[Symbol.toPrimitive];
                            if (void 0 !== a) {
                                var s = a.call(t, e || "default");
                                if ("object" !== r(s)) return s;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === e ? String : Number)(t)
                        }(t, "string");
                        return "symbol" === r(e) ? e : String(e)
                    }(e)) in t ? Object.defineProperty(t, e, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = a, t
                }
                e.a = {
                    name: "toolbar",
                    components: {
                        TawkIcon: i.TawkIcon,
                        TawkButton: i.TawkButton,
                        TawkDropdown: i.TawkDropdown,
                        TawkAvatar: i.TawkAvatar
                    },
                    directives: {
                        TawkTooltip: i.TawkTooltip
                    },
                    data: function() {
                        return {
                            isOpen: !1
                        }
                    },
                    props: {
                        currentView: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        },
                        borderRadiusTop: {
                            type: String,
                            default: "0px"
                        },
                        hasBackground: {
                            type: Boolean,
                            default: !0
                        },
                        showBackButton: {
                            default: !1
                        },
                        showWebRtcButtons: {
                            type: Boolean,
                            default: !1
                        },
                        showAgentAvatars: {
                            default: !1
                        }
                    },
                    computed: o(o({}, Object(s.c)({
                        isSoundEnabled: "widget/isSoundEnabled",
                        localSoundEnabled: "widget/localSoundEnabled",
                        isRoundWidget: "widget/isRoundWidget",
                        mobileBrowserName: "browserData/mobileBrowserName",
                        hasChatStarted: "chat/hasChatStarted",
                        isWindowed: "widget/isWindowed",
                        prechatFormSubmitted: "session/prechatFormSubmitted",
                        isPrechatEnabled: "widget/isPrechatEnabled",
                        pageStatus: "session/pageStatus",
                        isRTL: "widget/isRTL",
                        webrtcOptions: "widget/webrtcOptions",
                        hasLiveChat: "widget/hasLiveChat",
                        agentsCount: "chat/agentsCount",
                        needConsent: "session/needConsent",
                        currentRoute: "router/current",
                        components: "widget/components",
                        emailTranscriptEnabled: "widget/emailTranscriptEnabled",
                        activeProfiles: "chat/activeProfiles",
                        toolbarOptions: "widget/toolbarOptions",
                        branding: "widget/branding",
                        calls: "chat/calls",
                        messageBlocks: "chat/messageBlocks",
                        ongoingCall: "chat/ongoingCall"
                    })), {}, {
                        showWebrtcOptions: function() {
                            return this.components.webrtc && "offline" !== this.pageStatus && this.webrtcOptions && this.webrtcOptions.enabled && (!this.isPrechatEnabled || this.isPrechatEnabled && this.prechatFormSubmitted) && this.showWebRtcButtons && !this.isBotOnly
                        },
                        isBotOnly: function() {
                            if (0 === this.activeProfiles.length) return !1;
                            var t = !1;
                            return this.activeProfiles[0].isBot && (t = !0), t
                        },
                        wrapperClasses: function() {
                            return this.hasBackground ? ["tawk-toolbar", "tawk-card-primary", "tawk-flex", "tawk-card-small", "tawk-flex-none", "tawk-flex-middle", "tawk-custom-color"] : ["tawk-toolbar"]
                        },
                        isLiveChatFeatureEnabled: function() {
                            return !!(this.hasLiveChat || this.hasChatStarted && this.agentsCount > 0)
                        },
                        isHamburgerMenuVisible: function() {
                            return "offline" !== this.pageStatus && ("chat" === this.currentRoute || "agents" === this.currentRoute)
                        },
                        isAgentAvatarsVisible: function() {
                            return !(!this.showAgentAvatars || "chat" !== this.currentRoute && "agents" !== this.currentRoute || !(this.activeProfiles.length > 0))
                        },
                        getActiveAgents: function() {
                            var t = this.activeProfiles;
                            return t < 2 ? t : t.slice(0, 1)
                        }
                    }),
                    methods: o(o({}, Object(s.b)({
                        routerPush: "router/routerPush",
                        routerBack: "router/routerBack",
                        toggleLocalSound: "widget/toggleLocalSound",
                        toggleWidget: "session/toggleWidget",
                        showOverlay: "overlay/showOverlay"
                    })), {}, {
                        initiateCall: function(e, a) {
                            t.Tawk_Window.chatManager.initiateCall(e, a)
                        },
                        popoutWidget: function() {
                            t.Tawk_Window.popoutWidget()
                        },
                        toggleDropdown: function() {
                            this.isOpen = !this.isOpen
                        },
                        nameForm: function() {
                            this.isOpen = !1, this.routerPush("name-form"), this.showOverlay(!0)
                        },
                        emailTranscriptForm: function() {
                            this.isOpen = !1, this.routerPush("email-transcript-form"), this.showOverlay(!0)
                        },
                        convertToAvatarLink: function(t) {
                            return t ? 0 === t.indexOf("https://s3.amazonaws.com/tawk-to-pi") || 0 === t.indexOf("https://embed.tawk.to/_s/v4/assets") ? t : "".concat("https://s3.amazonaws.com/tawk-to-pi", "/").concat(t) : "".concat("https://embed.tawk.to/_s/v4/assets", "/images/default-profile.svg")
                        },
                        toggleAgentsList: function() {
                            this.routerPush("agents"), this.showOverlay(!0)
                        }
                    }),
                    mounted: function() {
                        var e = this;
                        t.Tawk_Window.eventBus.$on("widgetOnFocus", (function(t) {
                            e.$refs["toolbar-button"] && !e.$refs["toolbar-button"].$el.contains(t.target) && (e.isOpen = !1)
                        }))
                    }
                }
            }).call(this, a("c8ba"))
        },
        f0b4: function(t, e, a) {
            "use strict";
            var s = a("aacb").a,
                i = a("2877"),
                r = Object(i.a)(s, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "tawk-form-width-100 tawk-flex tawk-flex-column"
                    }, [t.hasChatEnded && "prechat" !== t.state && "offline" !== t.state && t.chatEndVersion ? e("div", {
                        staticClass: "card-container"
                    }, [e("restart-chat")], 1) : t._e(), !t.isHistoryCardEnabled && t.chatOrder && t.hasLiveChat && "offline" !== t.pageStatus && "prechat" !== t.state ? e("div", {
                        staticClass: "card-container tawk-flex-first"
                    }, [e("tawk-card", {
                        staticClass: "tawk-home-kb-card",
                        attrs: {
                            color: "inverse",
                            size: "xsmall"
                        }
                    }, [e("conversations", {
                        attrs: {
                            historyEnabled: t.isHistoryCardEnabled
                        }
                    })], 1)], 1) : t._e(), t._l(t.body, (function(a, s) {
                        return e("content-card", {
                            key: s,
                            attrs: {
                                card: a,
                                isSubmitting: t.submittingValue,
                                submissionError: t.submissionError,
                                body: t.body,
                                state: t.state,
                                hasConversationCard: t.hasConversationCard
                            },
                            on: {
                                "update:isSubmitting": function(e) {
                                    t.submittingValue = e
                                },
                                "update:is-submitting": function(e) {
                                    t.submittingValue = e
                                },
                                "update:hasConversationCard": function(e) {
                                    t.hasConversationCard = e
                                },
                                "update:has-conversation-card": function(e) {
                                    t.hasConversationCard = e
                                },
                                submitForm: t.submitForm,
                                contentCardLoaded: function(e) {
                                    return t.$emit("homeLoaded")
                                }
                            }
                        })
                    })), t.noPrechatForm ? e("div", {
                        staticClass: "card-container"
                    }, [e("tawk-card", {
                        staticClass: "tawk-box-shadow-xsmall",
                        attrs: {
                            color: "inverse",
                            size: "small"
                        }
                    }, [e("tawk-button", {
                        staticClass: "tawk-form-width-100 tawk-button-hover tawk-custom-color tawk-custom-border-color",
                        on: {
                            click: function(e) {
                                return t.submitForm({
                                    formData: {}
                                })
                            }
                        }
                    }, [e("tawk-icon", {
                        attrs: {
                            type: "mobile-send"
                        }
                    }), t._v(" " + t._s(t.$i18n("form", "StartChatButton")) + " ")], 1)], 1)], 1) : t._e()], 2)
                }), [], !1, null, null, null);
            e.a = r.exports
        },
        f25b: function(t, e, a) {
            "use strict";
            (function(t) {
                var s = a("2f62"),
                    i = a("f0b0"),
                    r = a("fa12"),
                    n = a("2966");

                function o(t) {
                    return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    })(t)
                }

                function c(t, e) {
                    var a = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), a.push.apply(a, s)
                    }
                    return a
                }

                function l(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var a = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? c(Object(a), !0).forEach((function(e) {
                            u(t, e, a[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : c(Object(a)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                        }))
                    }
                    return t
                }

                function u(t, e, a) {
                    return (e = function(t) {
                        var e = function(t, e) {
                            if ("object" !== o(t) || null === t) return t;
                            var a = t[Symbol.toPrimitive];
                            if (void 0 !== a) {
                                var s = a.call(t, e || "default");
                                if ("object" !== o(s)) return s;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === e ? String : Number)(t)
                        }(t, "string");
                        return "symbol" === o(e) ? e : String(e)
                    }(e)) in t ? Object.defineProperty(t, e, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = a, t
                }
                e.a = {
                    name: "chat-body",
                    props: {
                        isLoading: {
                            type: Boolean,
                            default: !0
                        },
                        messageBlocks: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        barMessageRerence: {
                            type: String,
                            default: null
                        },
                        isHistory: {
                            type: Boolean,
                            default: !1
                        },
                        emojiEnabled: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    data: function() {
                        return {
                            showTime: !1,
                            showSurveryOptions: !0
                        }
                    },
                    components: {
                        TawkAvatar: i.TawkAvatar,
                        TawkAlert: i.TawkAlert,
                        SurveyOptions: n.a,
                        ChatMessageBubble: r.a
                    },
                    methods: {
                        onMouseEnter: function() {
                            this.showTime = !0
                        },
                        callStatus: function(t) {
                            return t.isMissed || t.isRejected ? "danger" : "success"
                        },
                        callTitle: function(t) {
                            return t.isDone ? t.isRejected ? this.$i18n("chat", "rejected_call") : t.isMissed ? this.$i18n("chat", "missed_" + ("v" === t.caller.t ? "agent" : "visitor")) : this.$i18n("chat", "completed_call") : this.$i18n("chat", "ongoing_call")
                        },
                        callDescription: function(t) {
                            var e = new Date(t.startedAt),
                                a = e.getHours(),
                                s = e.getMinutes();
                            if (t.isDone) {
                                if (a < 10 && (a = "0" + a), s < 10 && (s = "0" + s), t.isRejected || t.isMissed) return this.$i18n("chat", "call_started_on", {
                                    startedOn: "".concat(a, ":").concat(s)
                                });
                                var i, r, n, o = 6e4,
                                    c = 60 * o,
                                    l = new Date(t.endedAt).getTime() - new Date(t.startedAt).getTime();
                                return l >= c ? (i = Math.round(l / c), n = "hours") : l >= o ? (i = Math.round(l / o), n = "minutes") : (i = Math.round(l / 1e3), n = "seconds"), r = this.$i18n("chat", n, {
                                    num: i
                                }), this.$i18n("chat", "call_end_details", {
                                    startedOn: "".concat(a, ":").concat(s),
                                    duration: r
                                })
                            }
                            return ""
                        },
                        callIcon: function(t) {
                            return t.isVideo ? "video-chat" : t.isScreenshare ? "screenshare" : "call"
                        },
                        submitSurvey: function(e) {
                            this.isHistory || (t.Tawk_Window.chatManager.sendMessage(e), this.showSurveryOptions = !1)
                        },
                        imageLoaded: function() {
                            this.$emit("imageLoaded", !0)
                        },
                        resendMessage: function(e) {
                            for (var a = 0; a < this.messageBlocks.length; a++) {
                                var s = this.messageBlocks[a];
                                if (s.blockId === e.blockId) {
                                    for (var i = 0; i < s.messages.length; i++)
                                        if (s.messages[i].messageId === e.messageId) {
                                            s.messages.splice(i, 1);
                                            break
                                        }
                                    break
                                }
                            }
                            t.Tawk_Window.chatManager.sendMessage(e.rawMessage.m)
                        },
                        getMessageBlockClasses: function(t) {
                            var e = this.messageBlocks.findIndex((function(e) {
                                return e.blockId === t.blockId
                            }));
                            if (e + 1 < this.messageBlocks.length) {
                                var a = this.messageBlocks[e + 1];
                                if ("v" === t.senderType && "a" === a.senderType && 1 === a.messages.length && a.messages[0].surveyObj && 0 === a.messages[0].surveyObj.question.length) return "tawk-flex tawk-flex-bottom tawk-message-block";
                                if ("a" === t.senderType && 1 === t.messages.length && t.messages[0].surveyObj && 0 === t.messages[0].surveyObj.question.length) return "tawk-flex tawk-flex-bottom tawk-message-block"
                            }
                            return "tawk-margin-small-bottom tawk-flex tawk-flex-bottom tawk-message-block"
                        }
                    },
                    computed: l(l({}, Object(s.c)({
                        agents: "chat/agents"
                    })), {}, {
                        getSurveyOptions: function() {
                            var t = {};
                            if (this.messageBlocks.length) {
                                var e = this.messageBlocks.length - 1,
                                    a = this.messageBlocks[e];
                                if ("call" !== a.messageType && a.messages.length) {
                                    var s = a.messages.length - 1,
                                        i = a.messages[s];
                                    i.surveyObj && ((t = i.surveyObj).senderType = i.senderType)
                                }
                            }
                            return t
                        }
                    })
                }
            }).call(this, a("c8ba"))
        },
        f2ef: function(t, e, a) {
            "use strict";
            var s = a("702b").a,
                i = a("2877"),
                r = Object(i.a)(s, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("base-frame", {
                        staticClass: "tawk-home-view tawk-custom-flex-1"
                    }, [e("base-header", {
                        ref: "tawk-base-header",
                        class: t.headerClass
                    }, [t.needConsent ? t._e() : e("home-header", {
                        ref: "tawk-home-header",
                        attrs: {
                            state: t.pageStatus
                        }
                    })], 1), e("base-body", {
                        ref: "tawk-home-body"
                    }, [t.needConsent ? e("consent-form") : e("home-body", {
                        attrs: {
                            state: t.pageStatus
                        },
                        on: {
                            homeLoaded: t.homeLoaded
                        }
                    })], 1)], 1)
                }), [], !1, null, null, null);
            e.a = r.exports
        },
        f3c3: function(t, e, a) {
            "use strict";
            (function(t) {
                var s = a("2f62"),
                    i = a("f0b0"),
                    r = a("7f46");

                function n(t) {
                    return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    })(t)
                }

                function o(t, e) {
                    var a = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), a.push.apply(a, s)
                    }
                    return a
                }

                function c(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var a = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? o(Object(a), !0).forEach((function(e) {
                            l(t, e, a[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : o(Object(a)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                        }))
                    }
                    return t
                }

                function l(t, e, a) {
                    return (e = function(t) {
                        var e = function(t, e) {
                            if ("object" !== n(t) || null === t) return t;
                            var a = t[Symbol.toPrimitive];
                            if (void 0 !== a) {
                                var s = a.call(t, e || "default");
                                if ("object" !== n(s)) return s;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === e ? String : Number)(t)
                        }(t, "string");
                        return "symbol" === n(e) ? e : String(e)
                    }(e)) in t ? Object.defineProperty(t, e, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = a, t
                }
                e.a = {
                    name: "TawkMaximizeFooter",
                    components: {
                        TawkChatInput: i.TawkChatInput,
                        TawkBranding: i.TawkBranding,
                        TawkIcon: i.TawkIcon,
                        TawkButton: i.TawkButton
                    },
                    data: function() {
                        return {
                            isDraggedOver: !1,
                            imageUrl: "".concat("https://embed.tawk.to/_s/v4/assets", "/images/Tawky_16x16.svg"),
                            powerImageURL: "".concat("https://embed.tawk.to/_s/v4/assets", "/images/power.svg")
                        }
                    },
                    computed: c(c({}, Object(s.c)({
                        isWindowed: "widget/isWindowed",
                        mobileBrowserName: "browserData/mobileBrowserName",
                        isEmbedded: "widget/isEmbedded",
                        hasLiveChat: "widget/hasLiveChat",
                        branding: "widget/branding",
                        needConsent: "session/needConsent",
                        pageStatus: "session/pageStatus",
                        prechatFormSubmitted: "session/prechatFormSubmitted",
                        isPrechatEnabled: "widget/isPrechatEnabled",
                        getHistory: "router/getHistory",
                        currentView: "router/getCurrentView",
                        features: "widget/features",
                        states: "widget/states",
                        hasChatStarted: "chat/hasChatStarted",
                        hasChatEnded: "chat/hasChatEnded"
                    })), {}, {
                        borderRadiusBottom: function() {
                            return this.isWindowed || this.mobileBrowserName || this.isEmbedded ? "0px" : this.isRoundWidget ? "0 0 5px 5px" : "0px"
                        },
                        whitelabel: function() {
                            if (this.branding.whitelabeled) {
                                var t = r.a.markdownToHtml(this.branding.text);
                                return t && "Chat U+26A1 by <b>tawk.to</b>" === t && (t = t.replace("U+26A1", '<img src="'.concat(this.powerImageURL, '" style="max-width: 8px;" />'))), t && ":tawky: Add free <b>live chat</b> to your site" === t && (t = t.replace(":tawky:", '<img src="'.concat(this.imageUrl, '" />'))), {
                                    label: t,
                                    url: this.branding.url,
                                    textColor: this.branding.textColor
                                }
                            }
                        },
                        isChatInputBottom: function() {
                            var t = !1,
                                e = this.states[this.pageStatus];
                            return e && e.body.length && (t = "chat" === e.body[e.body.length - 1].type), t
                        },
                        isLiveChatFeatureEnabled: function() {
                            return !!(this.hasLiveChat || this.hasChatStarted && this.agentsCount > 0)
                        },
                        inputPlaceholder: function() {
                            var t, e = this.states[this.pageStatus];
                            if (e && e.body && e.body.length)
                                for (var a = 0; a < e.body.length; a++) {
                                    var s = e.body[a];
                                    if ("chat" === s.type) {
                                        t = s.content.inputPlaceholder;
                                        break
                                    }
                                }
                            return t
                        },
                        mainFooterClasses: function() {
                            return ["tawk-card", "tawk-card-inverse", "tawk-card-xsmall", "tawk-footer", "tawk-flex-none", this.isDraggedOver ? "has-dragover" : ""]
                        },
                        showChatInput: function() {
                            return this.currentView && ("/" === this.currentView.path && (this.hasChatStarted || this.isChatInputBottom) || "chat" === this.currentView.path)
                        },
                        showStartChatButton: function() {
                            return this.hasLiveChat && "history-chat" === this.currentView.path && (!this.hasChatStarted || this.hasChatEnded)
                        },
                        showReturnToLiveChatBtton: function() {
                            return this.hasLiveChat && "history-chat" === this.currentView.path && this.hasChatStarted && !this.hasChatEnded
                        }
                    }),
                    methods: c(c({}, Object(s.b)({
                        routerPush: "router/routerPush",
                        showOverlay: "overlay/showOverlay",
                        clearHistory: "router/clearHistory"
                    })), {}, {
                        dragover: function(t) {
                            t.preventDefault(), this.features.upload && (this.isDraggedOver = !0)
                        },
                        dragleave: function(t) {
                            t.preventDefault(), this.features.upload && (t.currentTarget.contains(t.relatedTarget) || (this.isDraggedOver = !1))
                        },
                        drop: function(t) {
                            this.hasLiveChat && this.features.upload && (t.preventDefault(), this.isDraggedOver = !1, this.$refs["tawk-chatinput"] && this.$refs["tawk-chatinput"].$refs && this.$refs["tawk-chatinput"].$refs.fileupload && (this.$refs["tawk-chatinput"].$refs.fileupload.files = t.dataTransfer.files, this.$refs["tawk-chatinput"].onFileUpload()))
                        },
                        messageTyping: function(e) {
                            t.Tawk_Window.chatManager.sendMessagePreview(e)
                        },
                        sendMessage: function(e) {
                            t.Tawk_Window.chatManager.sendMessage(e), this.routerPush("chat"), this.showOverlay(!1)
                        },
                        ratingClicked: function(e) {
                            t.Tawk_Window.chatManager.changeRating(e), this.routerPush("chat"), this.showOverlay(!1)
                        },
                        sendFiles: function(e) {
                            t.Tawk_Window.chatManager.uploadFiles(e), this.routerPush("chat"), this.showOverlay(!1)
                        },
                        chatFocus: function() {
                            this.$refs["main-footer"].style.boxShadow = "0px -2px 8px rgba(0,0,0,.1)"
                        },
                        chatBlur: function() {
                            this.$refs["main-footer"].style.boxShadow = "0 0 0 transparent"
                        },
                        paste: function(t) {
                            var e, a = (t.originalEvent || t).clipboardData;
                            a && ((e = a.files).length && !this.features.uploads || e && e.length && (this.$refs["tawk-chatinput"].$refs.fileupload.files = e, this.$refs["tawk-chatinput"].onFileUpload()))
                        },
                        startChat: function() {
                            this.showOverlay(!1), this.clearHistory(), this.isPrechatEnabled && !this.prechatFormSubmitted ? this.routerPush("prechat") : this.routerPush("chat")
                        },
                        returnToLiveChat: function() {
                            this.showOverlay(!1), this.clearHistory(), this.routerPush("chat")
                        },
                        autoFocusChatInput: function() {
                            this.$refs["tawk-chatinput"].$refs.chatinput.focus()
                        }
                    }),
                    watch: {
                        currentView: function(t) {
                            "chat" == t.path && this.autoFocusChatInput()
                        },
                        hasChatStarted: function() {
                            var t = this;
                            setTimeout((function() {
                                t.autoFocusChatInput()
                            }), 500)
                        }
                    }
                }
            }).call(this, a("c8ba"))
        },
        fa12: function(t, e, a) {
            "use strict";
            var s = a("f0b0"),
                i = {
                    name: "TawkSpinner"
                },
                r = a("2877"),
                n = Object(r.a)(i, (function() {
                    return this._self._c, this._m(0)
                }), [function() {
                    var t = this._self._c;
                    return t("div", {
                        staticClass: "lds-spinner loader",
                        attrs: {
                            role: "status"
                        }
                    }, [t("div", {
                        staticClass: "spin spin-1"
                    }), t("div", {
                        staticClass: "spin spin-2"
                    }), t("div", {
                        staticClass: "spin spin-3"
                    }), t("div", {
                        staticClass: "spin spin-4"
                    }), t("div", {
                        staticClass: "spin spin-5"
                    }), t("div", {
                        staticClass: "spin spin-6"
                    }), t("div", {
                        staticClass: "spin spin-7"
                    }), t("div", {
                        staticClass: "spin spin-8"
                    }), t("div", {
                        staticClass: "spin spin-9"
                    }), t("div", {
                        staticClass: "spin spin-10"
                    }), t("div", {
                        staticClass: "spin spin-11"
                    }), t("div", {
                        staticClass: "spin spin-12"
                    })])
                }], !1, null, null, null).exports,
                o = {
                    name: "chat-body-messsage-bubble",
                    components: {
                        TawkCard: s.TawkCard,
                        TawkImage: s.TawkImage,
                        TawkVideo: s.TawkVideo,
                        TawkSpinner: n,
                        TawkAlert: s.TawkAlert,
                        TawkEmoji: s.TawkEmoji,
                        TawkIcon: s.TawkIcon,
                        TawkButton: s.TawkButton
                    },
                    props: {
                        msg: {
                            type: Object,
                            required: !0
                        },
                        barMessageRerence: {
                            type: String,
                            default: null
                        },
                        emojiEnabled: {
                            type: Boolean,
                            default: !0
                        }
                    }
                },
                c = Object(r.a)(o, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        ref: t.msg.messageId,
                        staticClass: "tawk-message-bubble",
                        attrs: {
                            id: "messageId-".concat(t.msg.messageId)
                        }
                    }, [t.msg.showBar && t.barMessageRerence ? e("div", {
                        staticStyle: {
                            position: "relative"
                        }
                    }, [e("div", [e("span", {
                        staticStyle: {
                            position: "absolute",
                            right: "0",
                            background: "#fff",
                            transform: "translate(0, -50%)",
                            padding: "0 10px"
                        }
                    }, [t._v(t._s(t.$i18n("chat", "newMessages")))]), e("hr")])]) : t._e(), "c" === t.msg.type ? [e("div", {
                        staticClass: "tawk-flex tawk-flex-bottom",
                        class: ["v" == t.msg.senderType ? "tawk-visitor-chat" : "tawk-agent-chat"],
                        on: {
                            mouseenter: function(e) {
                                return t.$emit("onMouseEnter")
                            }
                        }
                    }, ["v" === t.msg.senderType ? e("div", {
                        staticClass: "tawk-flex-none",
                        staticStyle: {
                            "min-width": "40px"
                        }
                    }, [t.msg.time ? e("tawk-timeago", {
                        staticClass: "tawk-time-display",
                        attrs: {
                            datetime: t.msg.time,
                            isLive: !1,
                            timeOnly: !0
                        }
                    }) : t._e()], 1) : t._e(), e("div", {
                        staticClass: "tawk-message-body tawk-margin-xsmall-left",
                        class: ["v" !== t.msg.senderType ? "tawk-margin-xsmall-right" : ""]
                    }, [t.msg.isUpload ? e("tawk-card", {
                        class: ["v" == t.msg.senderType ? "tawk-visitor-chat-bubble" : "tawk-agent-chat-bubble"],
                        attrs: {
                            color: "inverse",
                            size: "small"
                        }
                    }, [t.msg.fileType ? ["image" === t.msg.fileType ? e("tawk-image", {
                        attrs: {
                            src: t.msg.fileLink,
                            name: t.msg.fileName,
                            position: "center"
                        },
                        on: {
                            imageLoaded: t.imageLoaded
                        }
                    }) : t._e(), "video" === t.msg.fileType ? e("tawk-video", {
                        attrs: {
                            content: {
                                source: "selfhosted",
                                url: t.msg.fileLink,
                                options: {
                                    controls: "",
                                    mute: !0,
                                    loop: !1,
                                    startTime: "0"
                                }
                            }
                        }
                    }) : t._e(), "audio" === t.msg.fileType ? e("audio", {
                        staticStyle: {
                            width: "100%",
                            height: "30px"
                        },
                        attrs: {
                            controls: ""
                        }
                    }, [e("source", {
                        attrs: {
                            src: t.msg.fileLink,
                            type: t.msg.data.file.mimetype
                        }
                    })]) : t._e(), e("div", {
                        staticClass: "tawk-flex",
                        staticStyle: {
                            "margin-top": "10px"
                        }
                    }, [e("span", {
                        staticClass: "tawk-flex-1"
                    }, [t._v(" " + t._s(t.msg.fileName) + " ")]), e("span", {
                        staticClass: "tawk-flex-none",
                        staticStyle: {
                            padding: "0 5px"
                        }
                    }, [t._v(" " + t._s(t.msg.humanizeFileSize) + " ")])]), e("a", {
                        staticStyle: {
                            color: "inherit",
                            "text-decoration": "underline",
                            "text-align": "right",
                            display: "block"
                        },
                        attrs: {
                            href: t.msg.fileLink,
                            target: "_blank"
                        }
                    }, [t._v(" " + t._s(t.$i18n("chat", "download")) + " "), e("tawk-icon", {
                        attrs: {
                            type: "download",
                            size: "small"
                        }
                    })], 1)] : t._e()], 2) : e("div", [t.msg.isPending ? e("tawk-spinner", {
                        class: ["v" !== t.msg.senderType ? "lds-spinner-left" : ""]
                    }) : t._e(), [t.msg.rawMessage.md && t.msg.rawMessage.md.rt ? e("div", {
                        staticClass: "tawk-chat-rating"
                    }, [e("tawk-icon", {
                        attrs: {
                            type: t.msg.message,
                            size: "xxlarge"
                        }
                    })], 1) : e("tawk-card", {
                        class: ["v" == t.msg.senderType ? "tawk-visitor-chat-bubble" : "tawk-agent-chat-bubble", "tawk-text-regular-3"],
                        attrs: {
                            color: "primary",
                            size: "small"
                        }
                    }, [e("tawk-emoji", {
                        attrs: {
                            emoji: t.msg.surveyObj && "v" !== t.msg.senderType ? t.msg.surveyObj.question : t.msg.message,
                            enabled: t.emojiEnabled
                        }
                    })], 1)]], 2)], 1), "v" !== t.msg.senderType ? e("div", {
                        staticClass: "tawk-flex-none",
                        staticStyle: {
                            "min-width": "40px"
                        }
                    }, [t.msg.time ? e("tawk-timeago", {
                        staticClass: "tawk-time-display",
                        attrs: {
                            datetime: t.msg.time,
                            isLive: !1,
                            timeOnly: !0
                        }
                    }) : t._e()], 1) : t._e()]), t.msg.sendFailed ? e("div", {
                        staticClass: "tawk-chat-resend"
                    }, [e("p", [e("tawk-icon", {
                        attrs: {
                            type: "error",
                            size: "small"
                        }
                    }), e("span", [t._v("Failed")])], 1), e("tawk-button", {
                        attrs: {
                            isText: !0
                        },
                        on: {
                            click: function(e) {
                                return t.resendMessage(t.msg)
                            }
                        }
                    }, [t._v(" Resend ")])], 1) : t._e()] : t._e(), "v" === t.msg.senderType && "n" === t.msg.type ? e("div", [e("tawk-card", {
                        attrs: {
                            color: "inverse",
                            size: "xsmall"
                        }
                    }, [e("tawk-alert", {
                        attrs: {
                            title: t.msg.message,
                            description: "",
                            icon: "alert"
                        }
                    }, [e("tawk-timeago", {
                        staticClass: "tawk-time-display",
                        attrs: {
                            slot: "alert-description",
                            datetime: t.msg.time,
                            isLive: !1,
                            timeOnly: !0
                        },
                        slot: "alert-description"
                    })], 1)], 1)], 1) : t._e(), e("div", {
                        staticClass: "clearfix"
                    })], 2)
                }), [], !1, null, null, null);
            e.a = c.exports
        }
    }
]);