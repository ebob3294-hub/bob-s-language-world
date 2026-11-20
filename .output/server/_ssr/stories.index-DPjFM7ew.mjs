import { n as __toESM } from "../_runtime.mjs";
import { c as STORIES, d as storiesForLevel, l as STORY_LANG_LABEL, s as AGE_LEVEL_LABEL } from "./router-CIBvjZgR.mjs";
import { t as BobHeader } from "./BobHeader-C4Vf1Aa9.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { b as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
// node_modules/.nitro/vite/services/ssr/assets/stories.index-DPjFM7ew.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var COLOR_MAP = {
	blue: "bg-bob-blue/15",
	green: "bg-bob-green/20",
	orange: "bg-bob-orange/20",
	yellow: "bg-bob-yellow",
	pink: "bg-bob-pink/30",
	purple: "bg-parent-purple/15"
};
var LEVELS = [
	"all",
	"little",
	"kids",
	"tweens"
];
var LANG_ORDER = [
	"en",
	"fr",
	"ar"
];
function StoriesIndex() {
	const [level, setLevel] = (0, import_react.useState)("all");
	const [picking, setPicking] = (0, import_react.useState)(null);
	const navigate = useNavigate();
	const shown = level === "all" ? STORIES : storiesForLevel(level);
	const openStory = (story, lang) => {
		navigate({
			to: "/stories/$storyId",
			params: { storyId: story.id },
			search: { lang }
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BobHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "max-w-6xl mx-auto p-6 md:p-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mb-8 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "inline-block bg-bob-yellow rounded-3xl px-6 py-3 border-4 border-white shadow-lg mb-4 -rotate-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-2xl",
									children: "📖"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-4xl md:text-5xl font-bold mb-3",
								children: "Story Time with Chama"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-lg text-muted-foreground",
								children: ["English · Français · ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: { fontFamily: "var(--font-arabic)" },
									children: "العربية"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap justify-center gap-2 mb-10",
						children: LEVELS.map((l) => {
							const active = level === l;
							const label = l === "all" ? "All ages" : AGE_LEVEL_LABEL[l].en;
							const emoji = l === "all" ? "🌟" : AGE_LEVEL_LABEL[l].emoji;
							const count = l === "all" ? STORIES.length : storiesForLevel(l).length;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setLevel(l),
								className: `px-5 py-2.5 rounded-2xl font-bold border-2 transition ${active ? "bg-foreground text-background border-foreground shadow-md" : "bg-white border-border hover:border-foreground"}`,
								children: [
									emoji,
									" ",
									label,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "opacity-60 text-sm",
										children: [
											"(",
											count,
											")"
										]
									})
								]
							}, l);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
						children: shown.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setPicking(s),
							className: "group text-left",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `${COLOR_MAP[s.color]} rounded-[32px] border-4 border-transparent hover:border-foreground/20 transition-all p-6 hover:-translate-y-1 hover:shadow-lg cursor-pointer h-full`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-24 h-24 bg-white/70 rounded-3xl grid place-items-center text-6xl shadow-sm mb-4 mx-auto",
										children: s.emoji
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex justify-center mb-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-xs font-bold px-2 py-1 rounded-full bg-white/80 border border-border",
											children: [
												AGE_LEVEL_LABEL[s.ageLevel].emoji,
												" ",
												AGE_LEVEL_LABEL[s.ageLevel].range
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl font-bold text-center mb-1",
										children: s.title.en
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground text-center",
										children: s.title.fr
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground text-center mt-1",
										dir: "rtl",
										style: { fontFamily: "var(--font-arabic)" },
										children: s.title.ar
									})
								]
							})
						}, s.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "inline-block px-6 py-3 rounded-2xl bg-white border-2 border-border font-bold hover:bg-muted transition",
							children: "← Back home"
						})
					})
				]
			}),
			picking && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 bg-black/50 grid place-items-center p-4",
				onClick: () => setPicking(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-card rounded-[32px] p-8 max-w-md w-full shadow-2xl border-4 border-white",
					onClick: (e) => e.stopPropagation(),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center mb-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-6xl mb-3",
									children: picking.emoji
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-2xl font-bold mb-1",
									children: picking.title.en
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: "Choose a language to read"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									dir: "rtl",
									style: { fontFamily: "var(--font-arabic)" },
									children: "اختر لغة القراءة"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3",
							children: LANG_ORDER.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => openStory(picking, l),
								className: "w-full py-4 rounded-2xl bg-bob-blue text-white font-bold text-lg hover:-translate-y-0.5 transition flex items-center justify-between px-6",
								style: l === "ar" ? { fontFamily: "var(--font-arabic)" } : void 0,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: STORY_LANG_LABEL[l] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [l === "en" ? "🇬🇧" : l === "fr" ? "🇫🇷" : "🇸🇦", " →"] })]
							}, l))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setPicking(null),
							className: "w-full mt-4 py-3 rounded-2xl bg-muted font-bold hover:bg-muted/70 transition",
							children: "Cancel"
						})
					]
				})
			})
		]
	});
}
export { StoriesIndex as component };
