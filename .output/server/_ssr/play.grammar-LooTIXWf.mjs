import { n as __toESM } from "../_runtime.mjs";
import { t as BobHeader } from "./BobHeader-C4Vf1Aa9.mjs";
import { i as speakExtra, r as GRAMMAR, t as AGE_LABEL } from "./lessonsExtra-CK1HSDK1.mjs";
import { r as Route$5 } from "./router-CIBvjZgR.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
// node_modules/.nitro/vite/services/ssr/assets/play.grammar-LooTIXWf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LANGS = [
	"en",
	"fr",
	"ar"
];
var AGES = [
	"little",
	"kids",
	"tweens"
];
function GrammarPage() {
	const { age: initialAge, lang: initialLang } = Route$5.useSearch();
	const [age, setAge] = (0, import_react.useState)(initialAge);
	const [lang, setLang] = (0, import_react.useState)(initialLang);
	const rules = GRAMMAR[age];
	const isRtl = lang === "ar";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BobHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "max-w-4xl mx-auto p-6 md:p-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "text-sm text-muted-foreground hover:underline",
				children: "← Home"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-parent-purple/10 rounded-[40px] border-4 border-white shadow-xl p-6 md:p-10 mt-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center mb-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-6xl mb-2",
								children: "📘"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-3xl md:text-4xl font-bold",
								children: "Grammar · قواعد"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground mt-1",
								children: "Simple rules with real examples."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-center gap-2 mb-3 flex-wrap",
						children: AGES.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setAge(a),
							className: `px-3 py-1.5 text-sm rounded-2xl font-bold border-2 transition ${age === a ? "bg-parent-purple text-white border-parent-purple" : "bg-white border-border hover:border-parent-purple"}`,
							children: AGE_LABEL[a]
						}, a))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-center gap-2 mb-6 flex-wrap",
						children: LANGS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setLang(l),
							className: `px-4 py-2 rounded-2xl font-bold border-2 transition ${lang === l ? "bg-foreground text-background border-foreground" : "bg-white/70 border-border hover:border-foreground"}`,
							children: l === "en" ? "English" : l === "fr" ? "Français" : "العربية"
						}, l))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid md:grid-cols-2 gap-5",
						children: rules.map((rule) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "bg-white/90 rounded-3xl p-5 md:p-6 shadow-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 mb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-4xl",
										children: rule.emoji
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-xl font-bold",
										dir: isRtl ? "rtl" : "ltr",
										style: isRtl ? { fontFamily: "var(--font-arabic)" } : void 0,
										children: rule.title[lang]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-foreground/80 mb-3",
									dir: isRtl ? "rtl" : "ltr",
									style: isRtl ? { fontFamily: "var(--font-arabic)" } : void 0,
									children: rule.explanation[lang]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-2",
									children: rule.examples.map((ex, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										onClick: () => speakExtra(ex[lang], lang),
										className: "cursor-pointer px-3 py-2 rounded-xl bg-bob-yellow/40 hover:bg-bob-yellow/70 transition",
										dir: isRtl ? "rtl" : "ltr",
										style: isRtl ? { fontFamily: "var(--font-arabic)" } : void 0,
										title: "Tap to listen",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mr-2",
											children: "🔊"
										}), ex[lang]]
									}, i))
								})
							]
						}, rule.id))
					})
				]
			})]
		})]
	});
}
export { GrammarPage as component };
