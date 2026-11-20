import { t as CATEGORIES } from "./vocab-B-XLTnh4.mjs";
import { f as AGE_GROUPS } from "./router-CIBvjZgR.mjs";
import { t as BobHeader } from "./BobHeader-C4Vf1Aa9.mjs";
import { t as chama_mascot_default } from "./chama-mascot-BwdiDLoM.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
// node_modules/.nitro/vite/services/ssr/assets/routes-Dp_6yjyc.js
var import_jsx_runtime = require_jsx_runtime();
var COLOR_MAP = {
	blue: {
		bg: "bg-bob-blue/15",
		border: "group-hover:border-bob-blue"
	},
	green: {
		bg: "bg-bob-green/20",
		border: "group-hover:border-bob-green"
	},
	orange: {
		bg: "bg-bob-orange/20",
		border: "group-hover:border-bob-orange"
	},
	yellow: {
		bg: "bg-bob-yellow",
		border: "group-hover:border-bob-orange"
	},
	pink: {
		bg: "bg-bob-pink/30",
		border: "group-hover:border-bob-pink"
	},
	purple: {
		bg: "bg-parent-purple/15",
		border: "group-hover:border-parent-purple"
	}
};
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BobHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "max-w-6xl mx-auto p-6 md:p-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "flex flex-col md:flex-row items-center gap-8 mb-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-48 h-48 md:w-64 md:h-64 bg-bob-yellow rounded-[40px] border-4 border-white shadow-xl grid place-items-center transform -rotate-3 hover:rotate-0 transition-transform overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: chama_mascot_default,
									alt: "Chama the friendly mascot",
									width: 512,
									height: 512,
									className: "w-full h-full object-contain p-2"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -top-4 -right-4 bg-white px-5 py-2.5 rounded-2xl shadow-lg border-2 border-border text-lg font-bold",
								children: "Hi! I'm Chama! 👋"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center md:text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-5xl md:text-6xl font-bold text-foreground mb-4 leading-tight",
								children: "What should we learn today?"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xl text-muted-foreground font-medium",
								dir: "rtl",
								style: { fontFamily: "var(--font-arabic)" },
								children: "اختر فئة لتبدأ مغامرتك مع شامة"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mb-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 mb-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-10 h-10 bg-parent-purple/20 rounded-lg grid place-items-center text-xl",
								children: "🎯"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl font-bold",
								children: "Learn by age"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								dir: "rtl",
								style: { fontFamily: "var(--font-arabic)" },
								children: "اختر الفئة العمرية المناسبة لطفلك"
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 md:grid-cols-3 gap-6",
							children: AGE_GROUPS.map((g) => {
								const bg = g.color === "yellow" ? "bg-bob-yellow" : g.color === "green" ? "bg-bob-green/20" : "bg-parent-purple/15";
								const border = g.color === "yellow" ? "hover:border-bob-orange" : g.color === "green" ? "hover:border-bob-green" : "hover:border-parent-purple";
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/ages/$ageId",
									params: { ageId: g.id },
									className: `${bg} rounded-[32px] p-6 border-4 border-transparent ${border} transition-all hover:-translate-y-1 shadow-sm`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-4 mb-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "w-16 h-16 bg-white rounded-2xl grid place-items-center text-4xl shadow-sm",
												children: g.emoji
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-xs font-bold text-muted-foreground uppercase tracking-widest",
												children: ["Ages ", g.range]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-xl font-bold",
												children: g.name.en
											})] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-foreground/80",
											children: g.tagline.en
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 flex items-center justify-between text-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-semibold text-foreground/70",
												children: [
													g.lessons.length,
													" lessons · ",
													g.categoryIds.length,
													" categories"
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-bold",
												children: "→"
											})]
										})
									]
								}, g.id);
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mb-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between items-end mb-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl font-bold",
								children: "Categories"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted-foreground font-medium text-sm",
								children: [CATEGORIES.length, " worlds to explore"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 md:grid-cols-4 gap-6",
							children: CATEGORIES.map((cat) => {
								const color = COLOR_MAP[cat.color];
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/category/$categoryId",
									params: { categoryId: cat.id },
									className: "group cursor-pointer",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `aspect-square ${color.bg} rounded-[32px] border-4 border-transparent ${color.border} transition-all flex flex-col items-center justify-center gap-4 hover:scale-[1.02] hover:shadow-lg`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "w-20 h-20 bg-white/70 rounded-2xl grid place-items-center text-5xl shadow-sm",
												children: cat.emoji
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xl font-bold",
												children: cat.name.en
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-xs text-muted-foreground -mt-2",
												children: [cat.items.length, " words"]
											})
										]
									})
								}, cat.id);
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mb-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 mb-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-10 h-10 bg-bob-pink rounded-lg grid place-items-center text-xl",
								children: "📖"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl font-bold",
								children: "Story Time"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/stories",
							className: "block bg-bob-pink/30 p-8 rounded-[40px] border-4 border-transparent hover:border-bob-pink transition-all hover:-translate-y-1 shadow-md",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col md:flex-row items-center gap-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-7xl",
									children: "📚"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1 text-center md:text-left",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-2xl font-bold mb-2",
											children: "Bedtime stories in 3 languages"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-muted-foreground mb-3",
											children: [
												"Short tales for kids in English, Français and",
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													style: { fontFamily: "var(--font-arabic)" },
													children: "العربية"
												}),
												". Tap any line and Chama reads it aloud."
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "inline-block px-4 py-2 bg-white rounded-2xl font-bold border-2 border-border",
											children: "Open story library →"
										})
									]
								})]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 mb-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-10 h-10 bg-bob-yellow rounded-lg grid place-items-center text-xl",
							children: "🎮"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-bold",
							children: "Mini Games"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/play/flashcards",
								className: "bg-bob-blue p-8 rounded-[40px] text-white group cursor-pointer hover:-translate-y-1 transition-transform shadow-md",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
										className: "text-2xl font-bold mb-2",
										children: "Flashcards"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-white/90 mb-6",
										children: "Master new words one card at a time."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-full h-32 bg-white/20 rounded-2xl flex items-center justify-center text-5xl",
										children: "🃏"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/play/matching",
								className: "bg-bob-orange p-8 rounded-[40px] text-white group cursor-pointer hover:-translate-y-1 transition-transform shadow-md",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
										className: "text-2xl font-bold mb-2",
										children: "Matching"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-white/90 mb-6",
										children: "Match the picture with the right word!"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-full h-32 bg-white/20 rounded-2xl flex items-center justify-center text-5xl",
										children: "🖼️"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/play/quiz",
								className: "bg-bob-green p-8 rounded-[40px] text-white group cursor-pointer hover:-translate-y-1 transition-transform shadow-md",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
										className: "text-2xl font-bold mb-2",
										children: "Quiz"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-white/90 mb-6",
										children: "Test what you learned and earn stars!"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-full h-32 bg-white/20 rounded-2xl flex items-center justify-center text-5xl",
										children: "⭐"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/play/spelling",
								className: "bg-parent-purple p-8 rounded-[40px] text-white group cursor-pointer hover:-translate-y-1 transition-transform shadow-md",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
										className: "text-2xl font-bold mb-2",
										children: "Spelling"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-white/90 mb-6",
										children: "Hear the word, then type it correctly."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-full h-32 bg-white/20 rounded-2xl flex items-center justify-center text-5xl",
										children: "🔤"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/play/dialogues",
								className: "bg-bob-pink p-8 rounded-[40px] text-white group cursor-pointer hover:-translate-y-1 transition-transform shadow-md",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
										className: "text-2xl font-bold mb-2",
										children: "Dialogues"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-white/90 mb-6",
										children: "Everyday conversations · محاورات · dialogues."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-full h-32 bg-white/20 rounded-2xl flex items-center justify-center text-5xl",
										children: "💬"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/play/grammar",
								className: "bg-bob-blue p-8 rounded-[40px] text-white group cursor-pointer hover:-translate-y-1 transition-transform shadow-md",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
										className: "text-2xl font-bold mb-2",
										children: "Grammar"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-white/90 mb-6",
										children: "Simple rules · قواعد · règles claires."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-full h-32 bg-white/20 rounded-2xl flex items-center justify-center text-5xl",
										children: "📘"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/stories",
								className: "bg-bob-yellow p-8 rounded-[40px] text-foreground group cursor-pointer hover:-translate-y-1 transition-transform shadow-md",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
										className: "text-2xl font-bold mb-2",
										children: "Stories"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-foreground/80 mb-6",
										children: "Short tales read aloud in 3 languages."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-full h-32 bg-white/40 rounded-2xl flex items-center justify-center text-5xl",
										children: "📚"
									})
								]
							})
						]
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "py-12 px-6 border-t-2 border-border bg-muted/40 text-center mt-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground font-medium",
					dir: "rtl",
					style: { fontFamily: "var(--font-arabic)" },
					children: "من أجل مستقبل أطفالنا — Learn with Chama © 2026"
				})
			})
		]
	});
}
export { Home as component };
