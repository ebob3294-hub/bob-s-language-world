import { n as __toESM } from "../_runtime.mjs";
import { t as BobHeader } from "./BobHeader-C4Vf1Aa9.mjs";
import { i as stripArticle, r as speak, t as CATEGORIES } from "./vocab-B-XLTnh4.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
// node_modules/.nitro/vite/services/ssr/assets/play.quiz-CWxxQTQx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ALL = CATEGORIES.flatMap((c) => c.items);
function pick(arr, n) {
	const copy = [...arr];
	const out = [];
	for (let i = 0; i < n && copy.length; i++) out.push(copy.splice(Math.floor(Math.random() * copy.length), 1)[0]);
	return out;
}
function buildQuestion() {
	const [answer, ...distractors] = pick(ALL, 4);
	return {
		answer,
		choices: pick([answer, ...distractors], 4)
	};
}
function Quiz() {
	const [lang, setLang] = (0, import_react.useState)("en");
	const [q, setQ] = (0, import_react.useState)(() => buildQuestion());
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [score, setScore] = (0, import_react.useState)(0);
	const [round, setRound] = (0, import_react.useState)(1);
	const TOTAL = 10;
	const finished = round > TOTAL;
	const word = (0, import_react.useMemo)(() => lang === "en" ? q.answer.en : q.answer.fr, [lang, q]);
	(0, import_react.useEffect)(() => {
		if (!finished) speak(stripArticle(word), lang);
	}, [q, lang]);
	const answer = (id) => {
		if (selected) return;
		setSelected(id);
		if (id === q.answer.id) setScore((s) => s + 1);
		setTimeout(() => {
			if (round >= TOTAL) setRound(11);
			else {
				setRound((r) => r + 1);
				setQ(buildQuestion());
				setSelected(null);
			}
		}, 900);
	};
	const restart = () => {
		setQ(buildQuestion());
		setSelected(null);
		setScore(0);
		setRound(1);
	};
	if (finished) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BobHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "max-w-2xl mx-auto p-6 md:p-12 text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-card rounded-[40px] p-10 border-4 border-border shadow-xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-8xl mb-4",
						children: "🎉"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-4xl font-bold mb-2",
						children: "Great job!"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mb-6",
						children: "You finished the quiz."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-6xl mb-4",
						children: score >= 8 ? "🌟🌟🌟" : score >= 5 ? "⭐⭐" : "⭐"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-2xl font-bold mb-8",
						children: [
							"Score: ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-bob-blue",
								children: score
							}),
							" / ",
							TOTAL
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3 justify-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: restart,
							className: "px-6 py-3 rounded-full bg-bob-blue text-white font-bold shadow-md hover:brightness-110",
							children: "Play again"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "px-6 py-3 rounded-full bg-muted font-bold hover:bg-muted/70",
							children: "Home"
						})]
					})
				]
			})
		})]
	});
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
						children: [
							"Question ",
							round,
							" / ",
							TOTAL,
							" · Score ",
							score
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2 mb-6 justify-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setLang("en"),
						className: `px-5 py-2 rounded-full font-bold text-sm ${lang === "en" ? "bg-bob-blue text-white" : "bg-muted"}`,
						children: "English"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setLang("fr"),
						className: `px-5 py-2 rounded-full font-bold text-sm ${lang === "fr" ? "bg-bob-orange text-white" : "bg-muted"}`,
						children: "Français"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-card rounded-[32px] p-8 border-4 border-border shadow-lg text-center mb-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-sm mb-3 font-semibold uppercase tracking-widest",
							children: "Which one is"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-5xl font-bold text-bob-blue",
								children: word
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => speak(stripArticle(word), lang),
								className: "w-12 h-12 rounded-full bg-bob-green text-white text-xl shadow-md hover:scale-110 transition-transform",
								"aria-label": "Play sound",
								children: "🔊"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground mt-2",
							children: "?"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-4",
					children: q.choices.map((c) => {
						const isSelected = selected === c.id;
						const isCorrect = c.id === q.answer.id;
						const showResult = selected !== null;
						let state = "bg-card hover:border-bob-blue hover:shadow-lg";
						if (showResult && isCorrect) state = "bg-bob-green/30 border-bob-green";
						else if (showResult && isSelected && !isCorrect) state = "bg-destructive/20 border-destructive";
						else if (showResult) state = "bg-card opacity-60";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => answer(c.id),
							className: `aspect-square rounded-3xl border-4 border-border transition-all grid place-items-center text-7xl md:text-8xl ${state}`,
							children: c.emoji
						}, c.id);
					})
				})
			]
		})]
	});
}
export { Quiz as component };
