import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import {
  STORIES,
  storiesForLevel,
  AGE_LEVEL_LABEL,
  STORY_LANG_LABEL,
  type StoryAgeLevel,
  type StoryLang,
  type Story,
} from "@/lib/stories";
import { BobHeader } from "@/components/BobHeader";

export const Route = createFileRoute("/stories/")({
  component: StoriesIndex,
  head: () => ({
    meta: [
      { title: "Stories — Learn with Chama" },
      { name: "description", content: "Short kids stories in English, French, and Arabic — by age group." },
    ],
  }),
});

const COLOR_MAP: Record<string, string> = {
  blue: "bg-bob-blue/15",
  green: "bg-bob-green/20",
  orange: "bg-bob-orange/20",
  yellow: "bg-bob-yellow",
  pink: "bg-bob-pink/30",
  purple: "bg-parent-purple/15",
};

const LEVELS: (StoryAgeLevel | "all")[] = ["all", "little", "kids", "tweens"];
const LANG_ORDER: StoryLang[] = ["en", "fr", "ar"];

function StoriesIndex() {
  const [level, setLevel] = useState<StoryAgeLevel | "all">("all");
  const [picking, setPicking] = useState<Story | null>(null);
  const navigate = useNavigate();

  const shown = level === "all" ? STORIES : storiesForLevel(level);

  const openStory = (story: Story, lang: StoryLang) => {
    navigate({ to: "/stories/$storyId", params: { storyId: story.id }, search: { lang } });
  };

  return (
    <div className="min-h-screen bg-background">
      <BobHeader />
      <main className="max-w-6xl mx-auto p-6 md:p-12">
        <section className="mb-8 text-center">
          <div className="inline-block bg-bob-yellow rounded-3xl px-6 py-3 border-4 border-white shadow-lg mb-4 -rotate-1">
            <span className="text-2xl">📖</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Story Time with Chama</h1>
          <p className="text-lg text-muted-foreground">
            English · Français · <span style={{ fontFamily: "var(--font-arabic)" }}>العربية</span>
          </p>
        </section>

        {/* Age-level filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {LEVELS.map((l) => {
            const active = level === l;
            const label = l === "all" ? "All ages" : AGE_LEVEL_LABEL[l].en;
            const emoji = l === "all" ? "🌟" : AGE_LEVEL_LABEL[l].emoji;
            const count = l === "all" ? STORIES.length : storiesForLevel(l).length;
            return (
              <button
                key={l}
                onClick={() => setLevel(l)}
                className={`px-5 py-2.5 rounded-2xl font-bold border-2 transition ${
                  active
                    ? "bg-foreground text-background border-foreground shadow-md"
                    : "bg-white border-border hover:border-foreground"
                }`}
              >
                {emoji} {label} <span className="opacity-60 text-sm">({count})</span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shown.map((s) => (
            <button
              key={s.id}
              onClick={() => setPicking(s)}
              className="group text-left"
            >
              <div
                className={`${COLOR_MAP[s.color]} rounded-[32px] border-4 border-transparent hover:border-foreground/20 transition-all p-6 hover:-translate-y-1 hover:shadow-lg cursor-pointer h-full`}
              >
                <div className="w-24 h-24 bg-white/70 rounded-3xl grid place-items-center text-6xl shadow-sm mb-4 mx-auto">
                  {s.emoji}
                </div>
                <div className="flex justify-center mb-2">
                  <span className="text-xs font-bold px-2 py-1 rounded-full bg-white/80 border border-border">
                    {AGE_LEVEL_LABEL[s.ageLevel].emoji} {AGE_LEVEL_LABEL[s.ageLevel].range}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-center mb-1">{s.title.en}</h3>
                <p className="text-sm text-muted-foreground text-center">{s.title.fr}</p>
                <p
                  className="text-sm text-muted-foreground text-center mt-1"
                  dir="rtl"
                  style={{ fontFamily: "var(--font-arabic)" }}
                >
                  {s.title.ar}
                </p>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/"
            className="inline-block px-6 py-3 rounded-2xl bg-white border-2 border-border font-bold hover:bg-muted transition"
          >
            ← Back home
          </Link>
        </div>
      </main>

      {/* Language chooser modal */}
      {picking && (
        <div
          className="fixed inset-0 z-50 bg-black/50 grid place-items-center p-4"
          onClick={() => setPicking(null)}
        >
          <div
            className="bg-card rounded-[32px] p-8 max-w-md w-full shadow-2xl border-4 border-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-6">
              <div className="text-6xl mb-3">{picking.emoji}</div>
              <h2 className="text-2xl font-bold mb-1">{picking.title.en}</h2>
              <p className="text-sm text-muted-foreground">Choose a language to read</p>
              <p className="text-sm text-muted-foreground" dir="rtl" style={{ fontFamily: "var(--font-arabic)" }}>
                اختر لغة القراءة
              </p>
            </div>
            <div className="space-y-3">
              {LANG_ORDER.map((l) => (
                <button
                  key={l}
                  onClick={() => openStory(picking, l)}
                  className="w-full py-4 rounded-2xl bg-bob-blue text-white font-bold text-lg hover:-translate-y-0.5 transition flex items-center justify-between px-6"
                  style={l === "ar" ? { fontFamily: "var(--font-arabic)" } : undefined}
                >
                  <span>{STORY_LANG_LABEL[l]}</span>
                  <span>{l === "en" ? "🇬🇧" : l === "fr" ? "🇫🇷" : "🇸🇦"} →</span>
                </button>
              ))}
            </div>
            <button
              onClick={() => setPicking(null)}
              className="w-full mt-4 py-3 rounded-2xl bg-muted font-bold hover:bg-muted/70 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
