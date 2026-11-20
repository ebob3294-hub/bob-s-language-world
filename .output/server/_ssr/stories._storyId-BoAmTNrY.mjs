import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
// node_modules/.nitro/vite/services/ssr/assets/stories._storyId-BoAmTNrY.js
var import_jsx_runtime = require_jsx_runtime();
var SplitNotFoundComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: "min-h-screen grid place-items-center p-6 text-center",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-2xl font-bold mb-4",
		children: "Story not found"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/stories",
		className: "underline",
		children: "Back to stories"
	})] })
});
export { SplitNotFoundComponent as notFoundComponent };
