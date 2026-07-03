import { createFileRoute, Link } from "@tanstack/react-router";
import { STORIES } from "@/lib/stories";
import { BobHeader } from "@/components/BobHeader";

export const Route = createFileRoute("/stories/")({
  component: StoriesIndex,
  head: () => ({
    meta: [
      { title: "Stories — Learn with Bob" },
      { name: "description", content: "Short kids stories in English, French, and Arabic." },
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

function StoriesIndex() {
  return (
    <div className="min-h-screen bg-background">
      <BobHeader />
      <main className="max-w-6xl mx-auto p-6 md:p-12">
        <section className="mb-10 text-center">
          <div className="inline-block bg-bob-yellow rounded-3xl px-6 py-3 border-4 border-white shadow-lg mb-4 -rotate-1">
            <span className="text-2xl">📖</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Story Time with Bob</h1>
          <p className="text-lg text-muted-foreground">
            English · Français · <span style={{ fontFamily: "var(--font-arabic)" }}>العربية</span>
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STORIES.map((s) => (
            <Link
              key={s.id}
              to="/stories/$storyId"
              params={{ storyId: s.id }}
              className="group"
            >
              <div
                className={`${COLOR_MAP[s.color]} rounded-[32px] border-4 border-transparent hover:border-foreground/20 transition-all p-6 hover:-translate-y-1 hover:shadow-lg cursor-pointer h-full`}
              >
                <div className="w-24 h-24 bg-white/70 rounded-3xl grid place-items-center text-6xl shadow-sm mb-4 mx-auto">
                  {s.emoji}
                </div>
                <h3 className="text-xl font-bold text-center mb-2">{s.title.en}</h3>
                <p className="text-sm text-muted-foreground text-center">{s.title.fr}</p>
                <p
                  className="text-sm text-muted-foreground text-center mt-1"
                  dir="rtl"
                  style={{ fontFamily: "var(--font-arabic)" }}
                >
                  {s.title.ar}
                </p>
              </div>
            </Link>
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
    </div>
  );
}
