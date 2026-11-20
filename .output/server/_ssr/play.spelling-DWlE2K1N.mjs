import { n as __toESM } from "../_runtime.mjs";
import { t as BobHeader } from "./BobHeader-C4Vf1Aa9.mjs";
import { i as stripArticle, r as speak, t as CATEGORIES } from "./vocab-B-XLTnh4.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
// node_modules/.nitro/vite/services/ssr/assets/play.spelling-DWlE2K1N.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ALL = CATEGORIES.flatMap((c) => c.items).filter((it) => /^[a-zA-Z '-]+$/.test(it.en) && it.en.length <= 10);
function pickRandom() {
	return ALL[Math.floor(Math.random() * ALL.length)];
}
function Spelling() {
	const [lang, setLang] = (0, import_react.useState)("en");
	const [word, setWord] = (0, import_react.useState)(() => pickRandom());
	const [guess, setGuess] = (0, import_react.useState)("");
	const [score, setScore] = (0, import_react.useState)(0);
	const [tries, setTries] = (0, import_react.useState)(0);
	const [reveal, setReveal] = (0, import_react.useState)(false);
	const target = (0, import_react.useMemo)(() => lang === "en" ? word.en : stripArticle(word.fr), [word, lang]);
	const check = () => {
		setTries((t) => t + 1);
		if (guess.trim().toLowerCase() === target.toLowerCase()) setScore((s) => s + 1);
		setReveal(true);
	};
	const next = () => {
		setWord(pickRandom());
		setGuess("");
		setReveal(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BobHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "max-w-2xl mx-auto p-6 md:p-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "inline-flex items-center gap-2 text-muted-foreground hover:text-bob-blue font-semibold mb-6",
				children: "← Home"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-card rounded-[40px] p-8 border border-border shadow-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between items-center mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-3xl font-bold",
							children: "🔤 Spelling"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									setLang("en");
									next();
								},
								className: `px-4 py-2 rounded-full font-bold text-sm ${lang === "en" ? "bg-bob-blue text-white" : "bg-muted"}`,
								children: "EN"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									setLang("fr");
									next();
								},
								className: `px-4 py-2 rounded-full font-bold text-sm ${lang === "fr" ? "bg-bob-orange text-white" : "bg-muted"}`,
								children: "FR"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted-foreground mb-4",
						children: [
							"Score: ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								className: "text-foreground",
								children: score
							}),
							" / ",
							tries
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-muted/50 rounded-3xl p-8 text-center mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-8xl mb-4",
							children: word.emoji
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => speak(target, lang),
							className: "px-5 py-2.5 rounded-full bg-bob-green text-white font-bold hover:scale-105 transition",
							children: "🔊 Hear the word"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: guess,
						onChange: (e) => setGuess(e.target.value),
						onKeyDown: (e) => e.key === "Enter" && !reveal && check(),
						disabled: reveal,
						placeholder: "Type the word...",
						className: "w-full px-5 py-4 text-2xl rounded-2xl border-2 border-border focus:border-bob-blue outline-none mb-4",
						autoFocus: true
					}),
					reveal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `p-4 rounded-2xl mb-4 text-center font-bold text-lg ${guess.trim().toLowerCase() === target.toLowerCase() ? "bg-bob-green/20 text-bob-green" : "bg-bob-pink/30 text-parent-purple"}`,
						children: guess.trim().toLowerCase() === target.toLowerCase() ? "🎉 Correct!" : `The word was: ${target}`
					}),
					!reveal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: check,
						disabled: !guess.trim(),
						className: "w-full py-4 rounded-2xl bg-bob-blue text-white font-bold text-lg disabled:opacity-40",
						children: "Check"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: next,
						className: "w-full py-4 rounded-2xl bg-bob-orange text-white font-bold text-lg",
						children: "Next word →"
					})
				]
			})]
		})]
	});
}
export { Spelling as component };
