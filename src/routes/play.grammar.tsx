import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { fallback, zodValidator } from "@tanstack/zod-adapter";
import { BobHeader } from "@/components/BobHeader";
import { GRAMMAR, speakExtra, AGE_LABEL, type ExtraLang } from "@/lib/lessonsExtra";
import type { AgeId } from "@/lib/ageGroups";

const searchSchema = z.object({
  age: fallback(z.enum(["little", "kids", "tweens"]), "kids").default("kids"),
  lang: fallback(z.enum(["en", "fr", "ar"]), "en").default("en"),
});

export const Route = createFileRoute("/play/grammar")({
  validateSearch: zodValidator(searchSchema),
  head: () => ({
    meta: [
      { title: "Grammar rules — Learn with Chama" },
      { name: "description", content: "Simple grammar rules with examples in three languages." },
    ],
  }),
  component: GrammarPage,
});

const LANGS: ExtraLang[] = ["en", "fr", "ar"];
const AGES: AgeId[] = ["little", "kids", "tweens"];

function GrammarPage() {
  const { age: initialAge, lang: initialLang } = Route.useSearch();
  const [age, setAge] = useState<AgeId>(initialAge);
  const [lang, setLang] = useState<ExtraLang>(initialLang);
  const rules = GRAMMAR[age];
  const isRtl = lang === "ar";

  return (
    <div className="min-h-screen bg-background">
      <BobHeader />
      <main className="max-w-4xl mx-auto p-6 md:p-10">
        <Link to="/" className="text-sm text-muted-foreground hover:underline">← Home</Link>

        <div className="bg-parent-purple/10 rounded-[40px] border-4 border-white shadow-xl p-6 md:p-10 mt-4">
          <div className="text-center mb-6">
            <div className="text-6xl mb-2">📘</div>
            <h1 className="text-3xl md:text-4xl font-bold">Grammar · قواعد</h1>
            <p className="text-muted-foreground mt-1">Simple rules with real examples.</p>
          </div>

          <div className="flex justify-center gap-2 mb-3 flex-wrap">
            {AGES.map((a) => (
              <button
                key={a}
                onClick={() => setAge(a)}
                className={`px-3 py-1.5 text-sm rounded-2xl font-bold border-2 transition ${
                  age === a ? "bg-parent-purple text-white border-parent-purple" : "bg-white border-border hover:border-parent-purple"
                }`}
              >
                {AGE_LABEL[a]}
              </button>
            ))}
          </div>
          <div className="flex justify-center gap-2 mb-6 flex-wrap">
            {LANGS.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-4 py-2 rounded-2xl font-bold border-2 transition ${
                  lang === l ? "bg-foreground text-background border-foreground" : "bg-white/70 border-border hover:border-foreground"
                }`}
              >
                {l === "en" ? "English" : l === "fr" ? "Français" : "العربية"}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {rules.map((rule) => (
              <article key={rule.id} className="bg-white/90 rounded-3xl p-5 md:p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl">{rule.emoji}</span>
                  <h2 className="text-xl font-bold" dir={isRtl ? "rtl" : "ltr"} style={isRtl ? { fontFamily: "var(--font-arabic)" } : undefined}>
                    {rule.title[lang]}
                  </h2>
                </div>
                <p
                  className="text-foreground/80 mb-3"
                  dir={isRtl ? "rtl" : "ltr"}
                  style={isRtl ? { fontFamily: "var(--font-arabic)" } : undefined}
                >
                  {rule.explanation[lang]}
                </p>
                <ul className="space-y-2">
                  {rule.examples.map((ex, i) => (
                    <li
                      key={i}
                      onClick={() => speakExtra(ex[lang], lang)}
                      className="cursor-pointer px-3 py-2 rounded-xl bg-bob-yellow/40 hover:bg-bob-yellow/70 transition"
                      dir={isRtl ? "rtl" : "ltr"}
                      style={isRtl ? { fontFamily: "var(--font-arabic)" } : undefined}
                      title="Tap to listen"
                    >
                      <span className="mr-2">🔊</span>
                      {ex[lang]}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
