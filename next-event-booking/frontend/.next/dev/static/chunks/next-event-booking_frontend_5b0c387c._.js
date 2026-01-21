(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/next-event-booking/frontend/src/app/events/[id]/book/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookEventPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next-event-booking/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-event-booking/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-event-booking/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-event-booking/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-event-booking/frontend/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function BookEventPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const id = params?.id;
    const [tickets, setTickets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!id) return;
        const token = localStorage.getItem("token");
        if (!token) {
            __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("User not logged in");
            return;
        }
        try {
            const res = await fetch(`${("TURBOPACK compile-time value", "http://localhost:5000")}/api/bookings`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    event_id: id,
                    tickets_booked: tickets
                })
            });
            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || "Booking failed");
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success("Booking successful! 🎉");
            router.push("/");
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(err.message || "Failed to book event. Please try again.");
            console.error(err);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-md mx-auto p-6 bg-white rounded-xl shadow mt-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-4",
                children: "Book Event"
            }, void 0, false, {
                fileName: "[project]/next-event-booking/frontend/src/app/events/[id]/book/page.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "number",
                        placeholder: "Number of tickets",
                        value: tickets,
                        onChange: (e)=>setTickets(Number(e.target.value)),
                        min: 1,
                        className: "w-full p-2 border rounded",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/next-event-booking/frontend/src/app/events/[id]/book/page.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "btn-primary w-full",
                        children: "Book Now"
                    }, void 0, false, {
                        fileName: "[project]/next-event-booking/frontend/src/app/events/[id]/book/page.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/next-event-booking/frontend/src/app/events/[id]/book/page.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/next-event-booking/frontend/src/app/events/[id]/book/page.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s(BookEventPage, "iEswyyLPAkHaUPZQ0KHA722jUA8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = BookEventPage;
var _c;
__turbopack_context__.k.register(_c, "BookEventPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/next-event-booking/frontend/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/next-event-booking/frontend/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=next-event-booking_frontend_5b0c387c._.js.map