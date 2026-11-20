import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
// node_modules/.nitro/vite/services/ssr/assets/BobHeader-C4Vf1Aa9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BobHeader() {
	const [isBob, setIsBob] = (0, import_react.useState)(true);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
		className: "w-full py-4 px-6 flex justify-between items-center bg-white border-b-4 border-border sticky top-0 z-40",
		dir: "rtl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setIsBob((v) => !v),
				className: "relative w-10 h-10 cursor-pointer focus:outline-none",
				"aria-label": "Toggle mascot",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full h-full rounded-full flex items-center justify-center text-white font-bold text-xl shadow-sm transition-transform duration-500",
					style: {
						transformStyle: "preserve-3d",
						transform: isBob ? "rotateY(180deg)" : "rotateY(0deg)",
						backgroundColor: isBob ? "#3B82F6" : "#F97316"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: {
							backfaceVisibility: "hidden",
							position: "absolute",
							inset: 0,
							display: "flex",
							alignItems: "center",
							justifyContent: "center"
						},
						children: "C"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: {
							backfaceVisibility: "hidden",
							transform: "rotateY(180deg)",
							position: "absolute",
							inset: 0,
							display: "flex",
							alignItems: "center",
							justifyContent: "center"
						},
						children: "B"
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-2xl font-semibold tracking-tight text-bob-blue transition-opacity duration-300",
				style: { fontFamily: "var(--font-display)" },
				dir: "ltr",
				children: isBob ? "Learn with Bob" : "Learn with Chama"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/about",
				className: "text-bob-blue font-bold px-3 py-2 rounded-xl bg-bob-blue/10 hover:bg-bob-blue/20 transition-colors text-sm",
				children: "ℹ️ عن التطبيق"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "text-parent-purple font-bold px-3 py-2 rounded-xl bg-parent-purple/10 hover:bg-parent-purple/20 transition-colors text-sm",
				children: "الرئيسية"
			})]
		})]
	});
}
export { BobHeader as t };
