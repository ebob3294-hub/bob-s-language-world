import { n as __toESM } from "../_runtime.mjs";
import { t as BobHeader } from "./BobHeader-C4Vf1Aa9.mjs";
import { i as stripArticle, r as speak } from "./vocab-B-XLTnh4.mjs";
import { a as Route$8 } from "./router-CIBvjZgR.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
// node_modules/.nitro/vite/services/ssr/assets/category._categoryId-Dun0_Izx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CategoryPage() {
	const { category } = Route$8.useLoaderData();
	const [lang, setLang] = (0, import_react.useState)("en");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BobHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "max-w-6xl mx-auto p-6 md:p-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "inline-flex items-center gap-2 text-muted-foreground hover:text-bob-blue font-semibold mb-6 transition-colors",
				children: "← All categories"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-card rounded-[40px] p-6 md:p-10 shadow-sm border border-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row justify-between gap-6 mb-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-16 h-16 bg-bob-yellow rounded-2xl grid place-items-center text-4xl shrink-0",
							children: category.emoji
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "text-3xl md:text-4xl font-bold",
							children: [
								"Let's learn ",
								category.name.en,
								"!"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground mt-1",
							children: "Tap a card to hear the word"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2 self-start flex-wrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setLang("en"),
								className: `px-5 py-3 rounded-full font-bold transition-colors ${lang === "en" ? "bg-bob-blue text-white shadow-md" : "bg-muted hover:bg-muted/70"}`,
								children: "English"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setLang("fr"),
								className: `px-5 py-3 rounded-full font-bold transition-colors ${lang === "fr" ? "bg-bob-orange text-white shadow-md" : "bg-muted hover:bg-muted/70"}`,
								children: "Français"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setLang("ar"),
								className: `px-5 py-3 rounded-full font-bold transition-colors ${lang === "ar" ? "bg-bob-green text-white shadow-md" : "bg-muted hover:bg-muted/70"}`,
								style: { fontFamily: "var(--font-arabic)" },
								children: "العربية"
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
					children: category.items.map((item) => {
						const en = item.en;
						const fr = item.fr;
						const ar = item.ar ?? item.en;
						const primary = lang === "en" ? en : lang === "fr" ? fr : ar;
						const isRtl = lang === "ar";
						const handleSpeak = () => {
							speak(stripArticle(primary), lang);
						};
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: handleSpeak,
							className: "p-6 rounded-3xl bg-muted/50 hover:shadow-xl transition-all border-2 border-border hover:border-bob-blue text-left group",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-full aspect-square bg-card rounded-2xl mb-5 grid place-items-center text-8xl group-hover:scale-105 transition-transform",
									children: item.emoji
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-bob-blue font-bold text-xs uppercase tracking-widest mb-1",
											children: lang === "en" ? "English" : lang === "fr" ? "Français" : "العربية"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-2xl font-bold text-foreground truncate",
											dir: isRtl ? "rtl" : "ltr",
											style: isRtl ? { fontFamily: "var(--font-arabic)" } : void 0,
											children: primary
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										role: "img",
										"aria-label": "Play sound",
										className: "w-12 h-12 rounded-full bg-bob-green flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform shrink-0 text-xl",
										children: "🔊"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 pt-4 border-t border-border space-y-1",
									children: [
										lang !== "en" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-sm text-muted-foreground italic truncate",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-parent-purple font-bold text-xs uppercase mr-2",
												children: "EN"
											}), en]
										}),
										lang !== "fr" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-sm text-muted-foreground italic truncate",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-bob-orange font-bold text-xs uppercase mr-2",
												children: "FR"
											}), fr]
										}),
										lang !== "ar" && item.ar && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-sm text-muted-foreground italic truncate",
											dir: "rtl",
											style: { fontFamily: "var(--font-arabic)" },
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-bob-green font-bold text-xs uppercase ml-2",
												children: "AR"
											}), item.ar]
										})
									]
								})
							]
						}, item.id);
					})
				})]
			})]
		})]
	});
}
export { CategoryPage as component };
