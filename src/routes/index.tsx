import { createFileRoute, Link } from "@tanstack/react-router";
import { CATEGORIES } from "@/lib/vocab";
import { AGE_GROUPS } from "@/lib/ageGroups";
import { BobHeader } from "@/components/BobHeader";
import bobMascot from "@/assets/bob-mascot.png";

export const Route = createFileRoute("/")({
  component: Home,
});

const COLOR_MAP: Record<string, { bg: string; border: string }> = {
  blue: { bg: "bg-bob-blue/15", border: "group-hover:border-bob-blue" },
  green: { bg: "bg-bob-green/20", border: "group-hover:border-bob-green" },
  orange: { bg: "bg-bob-orange/20", border: "group-hover:border-bob-orange" },
  yellow: { bg: "bg-bob-yellow", border: "group-hover:border-bob-orange" },
  pink: { bg: "bg-bob-pink/30", border: "group-hover:border-bob-pink" },
  purple: { bg: "bg-parent-purple/15", border: "group-hover:border-parent-purple" },
};

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <BobHeader />

      <main className="max-w-6xl mx-auto p-6 md:p-12">
        {/* Bob greeting */}
        <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="relative shrink-0">
            <div className="w-48 h-48 md:w-64 md:h-64 bg-bob-yellow rounded-[40px] border-4 border-white shadow-xl grid place-items-center transform -rotate-3 hover:rotate-0 transition-transform overflow-hidden">
              <img
                src={bobMascot}
                alt="Bob the friendly mascot"
                width={512}
                height={512}
                className="w-full h-full object-contain p-2"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-white px-5 py-2.5 rounded-2xl shadow-lg border-2 border-border text-lg font-bold">
              Hi! I'm Bob! 👋
            </div>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
              What should we learn today?
            </h1>
            <p
              className="text-xl text-muted-foreground font-medium"
              dir="rtl"
              style={{ fontFamily: "var(--font-arabic)" }}
            >
              اختر فئة لتبدأ مغامرتك مع بوب
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="mb-20">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-3xl font-bold">Categories</h2>
            <span className="text-muted-foreground font-medium text-sm">
              {CATEGORIES.length} worlds to explore
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {CATEGORIES.map((cat) => {
              const color = COLOR_MAP[cat.color];
              return (
                <Link
                  key={cat.id}
                  to="/category/$categoryId"
                  params={{ categoryId: cat.id }}
                  className="group cursor-pointer"
                >
                  <div
                    className={`aspect-square ${color.bg} rounded-[32px] border-4 border-transparent ${color.border} transition-all flex flex-col items-center justify-center gap-4 hover:scale-[1.02] hover:shadow-lg`}
                  >
                    <div className="w-20 h-20 bg-white/70 rounded-2xl grid place-items-center text-5xl shadow-sm">
                      {cat.emoji}
                    </div>
                    <span className="text-xl font-bold">{cat.name.en}</span>
                    <span className="text-xs text-muted-foreground -mt-2">
                      {cat.items.length} words
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Stories */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-bob-pink rounded-lg grid place-items-center text-xl">📖</div>
            <h2 className="text-3xl font-bold">Story Time</h2>
          </div>
          <Link
            to="/stories"
            className="block bg-bob-pink/30 p-8 rounded-[40px] border-4 border-transparent hover:border-bob-pink transition-all hover:-translate-y-1 shadow-md"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="text-7xl">📚</div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Bedtime stories in 3 languages</h3>
                <p className="text-muted-foreground mb-3">
                  Short tales for kids in English, Français and{" "}
                  <span style={{ fontFamily: "var(--font-arabic)" }}>العربية</span>. Tap any line and Bob reads it aloud.
                </p>
                <span className="inline-block px-4 py-2 bg-white rounded-2xl font-bold border-2 border-border">
                  Open story library →
                </span>
              </div>
            </div>
          </Link>
        </section>

        {/* Mini games */}
        <section>

          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-bob-yellow rounded-lg grid place-items-center text-xl">
              🎮
            </div>
            <h2 className="text-3xl font-bold">Mini Games</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/play/flashcards"
              className="bg-bob-blue p-8 rounded-[40px] text-white group cursor-pointer hover:-translate-y-1 transition-transform shadow-md"
            >
              <h5 className="text-2xl font-bold mb-2">Flashcards</h5>
              <p className="text-white/90 mb-6">
                Master new words one card at a time.
              </p>
              <div className="w-full h-32 bg-white/20 rounded-2xl flex items-center justify-center text-5xl">
                🃏
              </div>
            </Link>
            <Link
              to="/play/matching"
              className="bg-bob-orange p-8 rounded-[40px] text-white group cursor-pointer hover:-translate-y-1 transition-transform shadow-md"
            >
              <h5 className="text-2xl font-bold mb-2">Matching</h5>
              <p className="text-white/90 mb-6">
                Match the picture with the right word!
              </p>
              <div className="w-full h-32 bg-white/20 rounded-2xl flex items-center justify-center text-5xl">
                🖼️
              </div>
            </Link>
            <Link
              to="/play/quiz"
              className="bg-bob-green p-8 rounded-[40px] text-white group cursor-pointer hover:-translate-y-1 transition-transform shadow-md"
            >
              <h5 className="text-2xl font-bold mb-2">Quiz</h5>
              <p className="text-white/90 mb-6">
                Test what you learned and earn stars!
              </p>
              <div className="w-full h-32 bg-white/20 rounded-2xl flex items-center justify-center text-5xl">
                ⭐
              </div>
            </Link>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t-2 border-border bg-muted/40 text-center mt-16">
        <p
          className="text-muted-foreground font-medium"
          dir="rtl"
          style={{ fontFamily: "var(--font-arabic)" }}
        >
          من أجل مستقبل أطفالنا — Learn with Bob © 2026
        </p>
      </footer>
    </div>
  );
}
