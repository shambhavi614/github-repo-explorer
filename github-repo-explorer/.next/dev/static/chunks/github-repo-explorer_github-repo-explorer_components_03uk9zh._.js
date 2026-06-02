(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/github-repo-explorer/github-repo-explorer/components/UserCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UserCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$repo$2d$explorer$2f$github$2d$repo$2d$explorer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/github-repo-explorer/github-repo-explorer/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function UserCard({ user }) {
    if (!user) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$repo$2d$explorer$2f$github$2d$repo$2d$explorer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white shadow rounded-lg p-6 mt-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$repo$2d$explorer$2f$github$2d$repo$2d$explorer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$repo$2d$explorer$2f$github$2d$repo$2d$explorer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: user.avatar_url,
                    alt: user.login,
                    className: "w-24 h-24 rounded-full"
                }, void 0, false, {
                    fileName: "[project]/github-repo-explorer/github-repo-explorer/components/UserCard.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$repo$2d$explorer$2f$github$2d$repo$2d$explorer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$repo$2d$explorer$2f$github$2d$repo$2d$explorer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold",
                            children: user.name || user.login
                        }, void 0, false, {
                            fileName: "[project]/github-repo-explorer/github-repo-explorer/components/UserCard.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$repo$2d$explorer$2f$github$2d$repo$2d$explorer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600",
                            children: user.bio
                        }, void 0, false, {
                            fileName: "[project]/github-repo-explorer/github-repo-explorer/components/UserCard.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$repo$2d$explorer$2f$github$2d$repo$2d$explorer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4 mt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$repo$2d$explorer$2f$github$2d$repo$2d$explorer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "Followers: ",
                                        user.followers
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/github-repo-explorer/github-repo-explorer/components/UserCard.tsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$repo$2d$explorer$2f$github$2d$repo$2d$explorer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "Following: ",
                                        user.following
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/github-repo-explorer/github-repo-explorer/components/UserCard.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$repo$2d$explorer$2f$github$2d$repo$2d$explorer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "Repos: ",
                                        user.public_repos
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/github-repo-explorer/github-repo-explorer/components/UserCard.tsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/github-repo-explorer/github-repo-explorer/components/UserCard.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/github-repo-explorer/github-repo-explorer/components/UserCard.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/github-repo-explorer/github-repo-explorer/components/UserCard.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/github-repo-explorer/github-repo-explorer/components/UserCard.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = UserCard;
var _c;
__turbopack_context__.k.register(_c, "UserCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/github-repo-explorer/github-repo-explorer/components/SearchBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$repo$2d$explorer$2f$github$2d$repo$2d$explorer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/github-repo-explorer/github-repo-explorer/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$repo$2d$explorer$2f$github$2d$repo$2d$explorer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/github-repo-explorer/github-repo-explorer/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$repo$2d$explorer$2f$github$2d$repo$2d$explorer$2f$components$2f$UserCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/github-repo-explorer/github-repo-explorer/components/UserCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function SearchBar() {
    _s();
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$repo$2d$explorer$2f$github$2d$repo$2d$explorer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$repo$2d$explorer$2f$github$2d$repo$2d$explorer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [repos, setRepos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$repo$2d$explorer$2f$github$2d$repo$2d$explorer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const handleSearch = async ()=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/api/github/${username}`);
            setUser(response.data.user);
            setRepos(response.data.repos);
        } catch (error) {
            alert("User not found");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$repo$2d$explorer$2f$github$2d$repo$2d$explorer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$github$2d$repo$2d$explorer$2f$github$2d$repo$2d$explorer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$repo$2d$explorer$2f$github$2d$repo$2d$explorer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$repo$2d$explorer$2f$github$2d$repo$2d$explorer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: username,
                        onChange: (e)=>setUsername(e.target.value),
                        placeholder: "Enter GitHub username...",
                        className: "flex-1 border rounded-lg p-3"
                    }, void 0, false, {
                        fileName: "[project]/github-repo-explorer/github-repo-explorer/components/SearchBar.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$repo$2d$explorer$2f$github$2d$repo$2d$explorer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSearch,
                        className: "bg-black text-white px-6 rounded-lg",
                        children: "Search"
                    }, void 0, false, {
                        fileName: "[project]/github-repo-explorer/github-repo-explorer/components/SearchBar.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/github-repo-explorer/github-repo-explorer/components/SearchBar.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$github$2d$repo$2d$explorer$2f$github$2d$repo$2d$explorer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$github$2d$repo$2d$explorer$2f$github$2d$repo$2d$explorer$2f$components$2f$UserCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                user: user
            }, void 0, false, {
                fileName: "[project]/github-repo-explorer/github-repo-explorer/components/SearchBar.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(SearchBar, "NTzsqvCQA74XxCMz1qa999PwXIs=");
_c = SearchBar;
var _c;
__turbopack_context__.k.register(_c, "SearchBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=github-repo-explorer_github-repo-explorer_components_03uk9zh._.js.map