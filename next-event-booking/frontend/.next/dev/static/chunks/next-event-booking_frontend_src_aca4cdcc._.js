(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/next-event-booking/frontend/src/components/EventForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-event-booking/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-event-booking/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const EventForm = ({ onSubmit, initialData })=>{
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: initialData?.title || "",
        description: initialData?.description || "",
        date: initialData?.date || new Date().toISOString().split("T")[0],
        venue: initialData?.venue || "",
        price: initialData?.price || 0,
        capacity: initialData?.capacity || 1
    });
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === "price" || name === "capacity" ? Number(value) : value
        });
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        onSubmit(formData);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "space-y-4 max-w-md mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                name: "title",
                placeholder: "Event Title",
                value: formData.title,
                onChange: handleChange,
                className: "w-full border p-2 rounded",
                required: true
            }, void 0, false, {
                fileName: "[project]/next-event-booking/frontend/src/components/EventForm.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                name: "description",
                placeholder: "Description",
                value: formData.description,
                onChange: handleChange,
                className: "w-full border p-2 rounded"
            }, void 0, false, {
                fileName: "[project]/next-event-booking/frontend/src/components/EventForm.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "date",
                name: "date",
                value: formData.date,
                onChange: handleChange,
                className: "w-full border p-2 rounded",
                required: true
            }, void 0, false, {
                fileName: "[project]/next-event-booking/frontend/src/components/EventForm.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                name: "venue",
                placeholder: "Venue",
                value: formData.venue,
                onChange: handleChange,
                className: "w-full border p-2 rounded",
                required: true
            }, void 0, false, {
                fileName: "[project]/next-event-booking/frontend/src/components/EventForm.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "number",
                name: "price",
                placeholder: "Price",
                value: formData.price,
                onChange: handleChange,
                className: "w-full border p-2 rounded",
                min: 0,
                required: true
            }, void 0, false, {
                fileName: "[project]/next-event-booking/frontend/src/components/EventForm.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "number",
                name: "capacity",
                placeholder: "Capacity",
                value: formData.capacity,
                onChange: handleChange,
                className: "w-full border p-2 rounded",
                min: 1,
                required: true
            }, void 0, false, {
                fileName: "[project]/next-event-booking/frontend/src/components/EventForm.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                className: "bg-blue-600 text-white px-4 py-2 rounded",
                children: "Submit"
            }, void 0, false, {
                fileName: "[project]/next-event-booking/frontend/src/components/EventForm.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/next-event-booking/frontend/src/components/EventForm.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(EventForm, "lV8G4m104OFPO+rtFfFRUlnzK7Q=");
_c = EventForm;
const __TURBOPACK__default__export__ = EventForm;
var _c;
__turbopack_context__.k.register(_c, "EventForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/next-event-booking/frontend/src/app/events/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EventsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next-event-booking/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-event-booking/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-event-booking/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-event-booking/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$src$2f$components$2f$EventForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-event-booking/frontend/src/components/EventForm.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const RECORDS_PER_PAGE = 9;
function EventsPage() {
    _s();
    const [events, setEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EventsPage.useEffect": ()=>{
            const storedToken = localStorage.getItem("token");
            setToken(storedToken || null);
        }
    }["EventsPage.useEffect"], []);
    const fetchEvents = async ()=>{
        try {
            const res = await fetch(`${("TURBOPACK compile-time value", "http://localhost:5000")}/api/events`);
            const data = await res.json();
            const sorted = data.sort((a, b)=>new Date(b.date).getTime() - new Date(a.date).getTime());
            setEvents(sorted);
        } catch (err) {
            console.error("Failed to fetch events:", err);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EventsPage.useEffect": ()=>{
            fetchEvents();
        }
    }["EventsPage.useEffect"], []);
    const handleAddEvent = async (data)=>{
        if (!token) {
            alert("You must be logged in to add events.");
            return;
        }
        try {
            const res = await fetch(`${("TURBOPACK compile-time value", "http://localhost:5000")}/api/events`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(data)
            });
            const newEvent = await res.json();
            if (res.ok) {
                alert("Event added successfully!");
                setEvents((prev)=>[
                        ...prev,
                        newEvent
                    ].sort((a, b)=>new Date(b.date).getTime() - new Date(a.date).getTime()));
                setShowForm(false);
                setCurrentPage(1); // newest event is first
            } else {
                alert(newEvent?.title || "Failed to add event.");
            }
        } catch (err) {
            console.error(err);
            alert("Something went wrong.");
        }
    };
    // Pagination
    const totalPages = Math.ceil(events.length / RECORDS_PER_PAGE);
    const startIndex = (currentPage - 1) * RECORDS_PER_PAGE;
    const paginatedEvents = events.slice(startIndex, startIndex + RECORDS_PER_PAGE);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 max-w-4xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold mb-6 text-center",
                children: "All Events"
            }, void 0, false, {
                fileName: "[project]/next-event-booking/frontend/src/app/events/page.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            token ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "mb-6 bg-green-600 text-white px-4 py-2 rounded",
                        onClick: ()=>setShowForm(!showForm),
                        children: showForm ? "Cancel" : "Add Event"
                    }, void 0, false, {
                        fileName: "[project]/next-event-booking/frontend/src/app/events/page.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this),
                    showForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$src$2f$components$2f$EventForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onSubmit: handleAddEvent
                    }, void 0, false, {
                        fileName: "[project]/next-event-booking/frontend/src/app/events/page.tsx",
                        lineNumber: 94,
                        columnNumber: 24
                    }, this)
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-red-600 mb-6",
                children: "You must be logged in to add events."
            }, void 0, false, {
                fileName: "[project]/next-event-booking/frontend/src/app/events/page.tsx",
                lineNumber: 97,
                columnNumber: 9
            }, this),
            paginatedEvents.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6",
                children: paginatedEvents.map((event)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/events/${event.id}`,
                        className: "block p-4 bg-white rounded-2xl shadow hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transform",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold mb-2",
                                children: event.title
                            }, void 0, false, {
                                fileName: "[project]/next-event-booking/frontend/src/app/events/page.tsx",
                                lineNumber: 110,
                                columnNumber: 15
                            }, this),
                            event.date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500 text-sm mb-1",
                                children: new Date(event.date).toLocaleDateString()
                            }, void 0, false, {
                                fileName: "[project]/next-event-booking/frontend/src/app/events/page.tsx",
                                lineNumber: 112,
                                columnNumber: 17
                            }, this),
                            event.venue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 text-sm",
                                children: event.venue
                            }, void 0, false, {
                                fileName: "[project]/next-event-booking/frontend/src/app/events/page.tsx",
                                lineNumber: 117,
                                columnNumber: 17
                            }, this)
                        ]
                    }, event.id, true, {
                        fileName: "[project]/next-event-booking/frontend/src/app/events/page.tsx",
                        lineNumber: 105,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/next-event-booking/frontend/src/app/events/page.tsx",
                lineNumber: 103,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-gray-500 mt-10",
                children: "No events found."
            }, void 0, false, {
                fileName: "[project]/next-event-booking/frontend/src/app/events/page.tsx",
                lineNumber: 123,
                columnNumber: 9
            }, this),
            totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center gap-4 mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCurrentPage((prev)=>Math.max(prev - 1, 1)),
                        disabled: currentPage === 1,
                        className: "px-4 py-2 bg-gray-200 rounded disabled:opacity-50",
                        children: "Previous"
                    }, void 0, false, {
                        fileName: "[project]/next-event-booking/frontend/src/app/events/page.tsx",
                        lineNumber: 128,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "Page ",
                            currentPage,
                            " of ",
                            totalPages
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-event-booking/frontend/src/app/events/page.tsx",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$event$2d$booking$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCurrentPage((prev)=>Math.min(prev + 1, totalPages)),
                        disabled: currentPage === totalPages,
                        className: "px-4 py-2 bg-gray-200 rounded disabled:opacity-50",
                        children: "Next"
                    }, void 0, false, {
                        fileName: "[project]/next-event-booking/frontend/src/app/events/page.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/next-event-booking/frontend/src/app/events/page.tsx",
                lineNumber: 127,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/next-event-booking/frontend/src/app/events/page.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_s(EventsPage, "bf+wP89r8FdlbeOA7M5sLWBouwk=");
_c = EventsPage;
var _c;
__turbopack_context__.k.register(_c, "EventsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=next-event-booking_frontend_src_aca4cdcc._.js.map