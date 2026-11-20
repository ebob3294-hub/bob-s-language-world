import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { fallback, zodValidator } from "@tanstack/zod-adapter";
import { getStory, speakStory, type StoryLang, STORY_LANG_LABEL } from "@/lib/stories";
import { BobHeader } from "@/components/BobHeader";

const searchSchema = z.object({
  lang: fallback(z.enum(["en", "fr", "ar"]), "en").default("en"),
});

export const Route = createFileRoute("/stories/$storyId")({
  validateSearch: zodValidator(searchSchema),
  loader: ({ params }) => {
    const story = getStory(params.storyId);
    if (!story) throw notFound();
    return { story };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.story.title.en} — Learn with Chama` },
          { name: "description", content: loaderData.story.moral.en },
        ]
      : [{ title: "Story not found" }],
  }),
  component: StoryPage,
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center p-6 text-center">
      <div>
        <p className="text-2xl font-bold mb-4">Story not found</p>
        <Link to="/stories" className="underline">Back to stories</Link>
      </div>
    </div>
  ),
});

const COLOR_MAP: Record<string, string> = {
  blue: "bg-bob-blue/15",
  green: "bg-bob-green/20",
  orange: "bg-bob-orange/20",
  yellow: "bg-bob-yellow/70",
  pink: "bg-bob-pink/30",
  purple: "bg-parent-purple/15",
};

const LANGS: StoryLang[] = ["en", "fr", "ar"];

function StoryPage() {
  const { story } = Route.useLoaderData();
  const { lang: initialLang } = Route.useSearch();
  const [lang, setLang] = useState<StoryLang>(initialLang);
  const isRtl = lang === "ar";

  return (
    <div className="min-h-screen bg-background">
      <BobHeader />
      <main className="max-w-3xl mx-auto p-6 md:p-10">
        <Link to="/stories" className="text-sm text-muted-foreground hover:underline">
          ← All stories
        </Link>

        <div className={`${COLOR_MAP[story.color]} rounded-[40px] border-4 border-white shadow-xl p-6 md:p-10 mt-4`}>
          <div className="text-center mb-6">
            <div className="text-7xl mb-3">{story.emoji}</div>
            <h1
              className="text-3xl md:text-4xl font-bold"
              dir={isRtl ? "rtl" : "ltr"}
              style={isRtl ? { fontFamily: "var(--font-arabic)" } : undefined}
            >
              {story.title[lang]}
            </h1>
          </div>

          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            {LANGS.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-4 py-2 rounded-2xl font-bold border-2 transition ${
                  lang === l
                    ? "bg-foreground text-background border-foreground"
                    : "bg-white/70 border-border hover:border-foreground"
                }`}
              >
                {STORY_LANG_LABEL[l]}
              </button>
            ))}
          </div>

          <article
            className="space-y-5 bg-white/80 rounded-3xl p-5 md:p-8"
            dir={isRtl ? "rtl" : "ltr"}
            style={isRtl ? { fontFamily: "var(--font-arabic)" } : undefined}
          >
            {story.paragraphs[lang].map((p: string, i: number) => (
              <p
                key={i}
                className="text-lg md:text-xl leading-relaxed cursor-pointer hover:bg-bob-yellow/40 rounded-xl px-3 py-2 transition"
                onClick={() => speakStory(p, lang)}
                title="Tap to hear Chama read"
              >
                {p}
              </p>
            ))}
            <div className="pt-4 border-t-2 border-dashed border-border">
              <p className="font-bold text-lg">
                {lang === "en" ? "✨ Moral: " : lang === "fr" ? "✨ Morale : " : "✨ العبرة: "}
                <span className="font-medium">{story.moral[lang]}</span>
              </p>
            </div>
          </article>

          <div className="mt-6 flex justify-center">
            <button
              onClick={() =>
                speakStory(
                  [story.title[lang], ...story.paragraphs[lang], story.moral[lang]].join(". "),
                  lang,
                )
              }
              className="px-6 py-3 rounded-2xl bg-bob-blue text-white font-bold shadow hover:-translate-y-0.5 transition"
            >
              🔊 {lang === "ar" ? "استمع للقصة" : lang === "fr" ? "Écouter" : "Read to me"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
