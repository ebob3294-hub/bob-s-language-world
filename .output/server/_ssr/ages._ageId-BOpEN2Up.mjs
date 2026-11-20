import { t as BobHeader } from "./BobHeader-C4Vf1Aa9.mjs";
import { o as Route$9, p as categoriesForAge } from "./router-CIBvjZgR.mjs";
import { n as getCategory } from "./vocab-B-XLTnh4.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
// node_modules/.nitro/vite/services/ssr/assets/ages._ageId-BOpEN2Up.js
var import_jsx_runtime = require_jsx_runtime();
var COLOR = {
	yellow: {
		bg: "bg-bob-yellow",
		ring: "border-bob-orange",
		chip: "bg-bob-orange text-white"
	},
	green: {
		bg: "bg-bob-green/20",
		ring: "border-bob-green",
		chip: "bg-bob-green text-white"
	},
	purple: {
		bg: "bg-parent-purple/15",
		ring: "border-parent-purple",
		chip: "bg-parent-purple text-white"
	}
};
var ACTIVITY_LABEL = {
	flashcards: "🃏 Flashcards",
	matching: "🖼️ Matching",
	quiz: "⭐ Quiz",
	spelling: "🔤 Spelling",
	explore: "🔍 Explore",
	dialogue: "💬 Dialogue",
	grammar: "📘 Grammar"
};
function AgePage() {
	const { group } = Route$9.useLoaderData();
	const color = COLOR[group.color];
	const categories = categoriesForAge(group.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BobHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "max-w-6xl mx-auto p-6 md:p-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "inline-flex items-center gap-2 text-muted-foreground hover:text-bob-blue font-semibold mb-6",
					children: "← All ages"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: `${color.bg} rounded-[40px] p-8 md:p-10 border-4 border-transparent ${color.ring.replace("border-", "hover:border-")} mb-10 shadow-sm`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-5 mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-20 h-20 bg-white rounded-3xl grid place-items-center text-5xl shadow",
								children: group.emoji
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm font-bold text-muted-foreground uppercase tracking-widest",
								children: ["Ages ", group.range]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-4xl md:text-5xl font-bold",
								children: group.name.en
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg text-foreground/80 max-w-2xl",
							children: group.tagline.en
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base text-foreground/70 mt-2",
							dir: "rtl",
							style: { fontFamily: "var(--font-arabic)" },
							children: group.tagline.ar
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mb-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold mb-6",
						children: "📚 Lesson plan"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 gap-5",
						children: group.lessons.map((lesson, i) => {
							const cat = getCategory(lesson.categoryId);
							const target = lesson.activity === "flashcards" ? "/play/flashcards" : lesson.activity === "matching" ? "/play/matching" : lesson.activity === "quiz" ? "/play/quiz" : lesson.activity === "spelling" ? "/play/spelling" : lesson.activity === "dialogue" ? `/play/dialogues?age=${group.id}` : lesson.activity === "grammar" ? `/play/grammar?age=${group.id}` : `/category/${lesson.categoryId}`;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: target,
								className: "p-5 rounded-3xl bg-card border-2 border-border hover:border-bob-blue hover:shadow-lg transition-all flex items-start gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-14 h-14 bg-muted rounded-2xl grid place-items-center text-3xl shrink-0",
									children: cat?.emoji ?? "📖"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1 min-w-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 mb-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-xs font-bold text-muted-foreground",
												children: ["Lesson ", i + 1]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `text-xs font-bold px-2 py-0.5 rounded-full ${color.chip}`,
												children: ACTIVITY_LABEL[lesson.activity]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-lg font-bold",
											children: lesson.title.en
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-muted-foreground",
											children: lesson.goal.en
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-foreground/70 mt-1",
											dir: "rtl",
											style: { fontFamily: "var(--font-arabic)" },
											children: lesson.title.ar
										})
									]
								})]
							}, lesson.id);
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-bold mb-6",
					children: "🗂️ Categories for this age"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 md:grid-cols-4 gap-5",
					children: categories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/category/$categoryId",
						params: { categoryId: cat.id },
						className: "aspect-square bg-card rounded-3xl border-2 border-border hover:border-bob-blue hover:shadow-md transition-all flex flex-col items-center justify-center gap-2 p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-5xl",
								children: cat.emoji
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold text-center",
								children: cat.name.en
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-muted-foreground",
								children: [cat.items.length, " words"]
							})
						]
					}, cat.id))
				})] })
			]
		})]
	});
}
export { AgePage as component };
