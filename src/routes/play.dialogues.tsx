import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { fallback, zodValidator } from "@tanstack/zod-adapter";
import { BobHeader } from "@/components/BobHeader";
import { DIALOGUES, speakExtra, AGE_LABEL, type ExtraLang } from "@/lib/lessonsExtra";
import type { AgeId } from "@/lib/ageGroups";

const searchSchema = z.object({
  age: fallback(z.enum(["little", "kids", "tweens"]), "kids").default("kids"),
  lang: fallback(z.enum(["en", "fr", "ar"]), "en").default("en"),
});

export const Route = createFileRoute("/play/dialogues")({
  validateSearch: zodValidator(searchSchema),
  head: () => ({
    meta: [
      { title: "Dialogues — Learn with Chama" },
      { name: "description", content: "Everyday conversations in English, French and Arabic." },
    ],
  }),
  component: DialoguesPage,
});

const LANGS: ExtraLang[] = ["en", "fr", "ar"];
const AGES: AgeId[] = ["little", "kids", "tweens"];

function DialoguesPage() {
  const { age: initialAge, lang: initialLang } = Route.useSearch();
  const [age, setAge] = useState<AgeId>(initialAge);
  const [lang, setLang] = useState<ExtraLang>(initialLang);
  const [index, setIndex] = useState(0);

  const list = DIALOGUES[age];
  const dialogue = list[index % list.length];
  const isRtl = lang === "ar";

  return (
    <div className="min-h-screen bg-background">
      <BobHeader />
      <main className="max-w-3xl mx-auto p-6 md:p-10">
        <Link to="/" className="text-sm text-muted-foreground hover:underline">← Home</Link>

        <div className="bg-bob-blue/10 rounded-[40px] border-4 border-white shadow-xl p-6 md:p-10 mt-4">
          <div className="text-center mb-6">
            <div className="text-6xl mb-2">💬</div>
            <h1 className="text-3xl md:text-4xl font-bold">Dialogues · محاورات</h1>
            <p className="text-muted-foreground mt-1">Everyday conversations for real life.</p>
          </div>

          {/* Age selector */}
          <div className="flex justify-center gap-2 mb-3 flex-wrap">
            {AGES.map((a) => (
              <button
                key={a}
                onClick={() => { setAge(a); setIndex(0); }}
                className={`px-3 py-1.5 text-sm rounded-2xl font-bold border-2 transition ${
                  age === a ? "bg-bob-blue text-white border-bob-blue" : "bg-white border-border hover:border-bob-blue"
                }`}
              >
                {AGE_LABEL[a]}
              </button>
            ))}
          </div>

          {/* Lang selector */}
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

          <div className="bg-white/90 rounded-3xl p-5 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">{dialogue.emoji}</span>
              <h2 className="text-2xl font-bold" dir={isRtl ? "rtl" : "ltr"} style={isRtl ? { fontFamily: "var(--font-arabic)" } : undefined}>
                {dialogue.title[lang]}
              </h2>
            </div>

            <ul className="space-y-3" dir={isRtl ? "rtl" : "ltr"} style={isRtl ? { fontFamily: "var(--font-arabic)" } : undefined}>
              {dialogue.lines.map((line, i) => {
                const isA = line.speaker === "A";
                return (
                  <li key={i} className={`flex ${isA ? "justify-start" : "justify-end"}`}>
                    <button
                      onClick={() => speakExtra(line[lang], lang)}
                      className={`max-w-[85%] px-4 py-3 rounded-2xl text-lg text-left hover:shadow-md transition ${
                        isA ? "bg-bob-blue text-white" : "bg-bob-yellow text-foreground"
                      }`}
                      title="Tap to listen"
                    >
                      <span className="block text-xs font-bold opacity-75 mb-0.5">
                        {isA ? "👦 A" : "👧 B"}
                      </span>
                      {line[lang]}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap justify-between gap-3">
            <button
              onClick={() =>
                speakExtra(dialogue.lines.map((l) => l[lang]).join(". "), lang)
              }
              className="px-5 py-2.5 rounded-2xl bg-bob-green text-white font-bold shadow hover:-translate-y-0.5 transition"
            >
              🔊 Play whole dialogue
            </button>
            <div className="flex gap-2">
              <button
                onClick={() => setIndex((i) => (i - 1 + list.length) % list.length)}
                className="px-4 py-2 rounded-2xl bg-white border-2 border-border font-bold"
              >
                ← Prev
              </button>
              <button
                onClick={() => setIndex((i) => (i + 1) % list.length)}
                className="px-4 py-2 rounded-2xl bg-bob-orange text-white font-bold"
              >
                Next →
              </button>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-4">
            {(index % list.length) + 1} / {list.length}
          </p>
        </div>
      </main>
    </div>
  );
}
