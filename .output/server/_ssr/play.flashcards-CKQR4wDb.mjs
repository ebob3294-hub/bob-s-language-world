import { n as __toESM } from "../_runtime.mjs";
import { t as BobHeader } from "./BobHeader-C4Vf1Aa9.mjs";
import { i as stripArticle, r as speak, t as CATEGORIES } from "./vocab-B-XLTnh4.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
// node_modules/.nitro/vite/services/ssr/assets/play.flashcards-CKQR4wDb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ALL_ITEMS = CATEGORIES.flatMap((c) => c.items.map((i) => ({
	...i,
	categoryName: c.name.en
})));
function shuffle(arr) {
	const a = [...arr];
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}
function Flashcards() {
	const [deck, setDeck] = (0, import_react.useState)(() => shuffle(ALL_ITEMS));
	const [index, setIndex] = (0, import_react.useState)(0);
	const [flipped, setFlipped] = (0, import_react.useState)(false);
	const [lang, setLang] = (0, import_react.useState)("en");
	const card = deck[index];
	const progress = (0, import_react.useMemo)(() => `${index + 1} / ${deck.length}`, [index, deck.length]);
	const next = () => {
		setFlipped(false);
		setIndex((i) => (i + 1) % deck.length);
	};
	const prev = () => {
		setFlipped(false);
		setIndex((i) => (i - 1 + deck.length) % deck.length);
	};
	const reshuffle = () => {
		setDeck(shuffle(ALL_ITEMS));
		setIndex(0);
		setFlipped(false);
	};
	const primary = lang === "en" ? card.en : card.fr;
	const secondary = lang === "en" ? card.fr : card.en;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BobHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "max-w-3xl mx-auto p-6 md:p-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "text-muted-foreground hover:text-bob-blue font-semibold",
						children: "← Home"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-sm font-bold text-muted-foreground",
						children: ["Card ", progress]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2 mb-6 justify-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setLang("en"),
						className: `px-5 py-2 rounded-full font-bold text-sm transition-colors ${lang === "en" ? "bg-bob-blue text-white" : "bg-muted"}`,
						children: "English"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setLang("fr"),
						className: `px-5 py-2 rounded-full font-bold text-sm transition-colors ${lang === "fr" ? "bg-bob-orange text-white" : "bg-muted"}`,
						children: "Français"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setFlipped((f) => !f),
					className: "w-full aspect-[4/5] md:aspect-[3/2] bg-card rounded-[40px] border-4 border-border shadow-xl flex flex-col items-center justify-center gap-6 p-8 hover:border-bob-blue transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[8rem] md:text-[10rem] leading-none",
						children: card.emoji
					}), flipped ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-bob-blue font-bold text-xs uppercase tracking-widest mb-2",
								children: lang === "en" ? "English" : "Français"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-5xl md:text-6xl font-bold",
								children: primary
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-xl md:text-2xl text-muted-foreground italic",
								children: secondary
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground font-semibold text-lg",
						children: "Tap to reveal"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between mt-8 gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: prev,
							className: "flex-1 py-4 rounded-2xl bg-muted font-bold text-lg hover:bg-muted/70 transition-colors",
							children: "← Prev"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => speak(stripArticle(primary), lang),
							className: "w-16 h-16 rounded-full bg-bob-green text-white text-2xl shadow-lg hover:scale-105 transition-transform shrink-0",
							"aria-label": "Play sound",
							children: "🔊"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: next,
							className: "flex-1 py-4 rounded-2xl bg-bob-blue text-white font-bold text-lg hover:brightness-110 transition-all shadow-md",
							children: "Next →"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-center mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: reshuffle,
						className: "text-sm text-parent-purple font-bold hover:underline",
						children: "🔀 Shuffle deck"
					})
				})
			]
		})]
	});
}
export { Flashcards as component };
