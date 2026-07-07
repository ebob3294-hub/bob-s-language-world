import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { BobHeader } from "@/components/BobHeader";
import { getAgeGroup, categoriesForAge } from "@/lib/ageGroups";
import { getCategory } from "@/lib/vocab";

export const Route = createFileRoute("/ages/$ageId")({
  component: AgePage,
  loader: ({ params }) => {
    const group = getAgeGroup(params.ageId);
    if (!group) throw notFound();
    return { group };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <BobHeader />
      <div className="max-w-2xl mx-auto p-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Age group not found</h1>
        <Link to="/" className="text-bob-blue font-bold hover:underline">← Back</Link>
      </div>
    </div>
  ),
});

const COLOR: Record<string, { bg: string; ring: string; chip: string }> = {
  yellow: { bg: "bg-bob-yellow", ring: "border-bob-orange", chip: "bg-bob-orange text-white" },
  green: { bg: "bg-bob-green/20", ring: "border-bob-green", chip: "bg-bob-green text-white" },
  purple: { bg: "bg-parent-purple/15", ring: "border-parent-purple", chip: "bg-parent-purple text-white" },
};

const ACTIVITY_LABEL: Record<string, string> = {
  flashcards: "🃏 Flashcards",
  matching: "🖼️ Matching",
  quiz: "⭐ Quiz",
  spelling: "🔤 Spelling",
  explore: "🔍 Explore",
  dialogue: "💬 Dialogue",
  grammar: "📘 Grammar",
};

function AgePage() {
  const { group } = Route.useLoaderData();
  const color = COLOR[group.color];
  const categories = categoriesForAge(group.id);

  return (
    <div className="min-h-screen bg-background">
      <BobHeader />
      <main className="max-w-6xl mx-auto p-6 md:p-12">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-bob-blue font-semibold mb-6">← All ages</Link>

        <section className={`${color.bg} rounded-[40px] p-8 md:p-10 border-4 border-transparent ${color.ring.replace("border-", "hover:border-")} mb-10 shadow-sm`}>
          <div className="flex items-center gap-5 mb-4">
            <div className="w-20 h-20 bg-white rounded-3xl grid place-items-center text-5xl shadow">{group.emoji}</div>
            <div>
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Ages {group.range}</p>
              <h1 className="text-4xl md:text-5xl font-bold">{group.name.en}</h1>
            </div>
          </div>
          <p className="text-lg text-foreground/80 max-w-2xl">{group.tagline.en}</p>
          <p className="text-base text-foreground/70 mt-2" dir="rtl" style={{ fontFamily: "var(--font-arabic)" }}>{group.tagline.ar}</p>
        </section>

        {/* Lesson plan */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">📚 Lesson plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {group.lessons.map((lesson: typeof group.lessons[number], i: number) => {
              const cat = getCategory(lesson.categoryId);
              const target =
                lesson.activity === "flashcards" ? "/play/flashcards"
                : lesson.activity === "matching" ? "/play/matching"
                : lesson.activity === "quiz" ? "/play/quiz"
                : lesson.activity === "spelling" ? "/play/spelling"
                : `/category/${lesson.categoryId}`;

              return (
                <Link
                  key={lesson.id}
                  to={target}
                  className="p-5 rounded-3xl bg-card border-2 border-border hover:border-bob-blue hover:shadow-lg transition-all flex items-start gap-4"
                >
                  <div className="w-14 h-14 bg-muted rounded-2xl grid place-items-center text-3xl shrink-0">{cat?.emoji ?? "📖"}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-muted-foreground">Lesson {i + 1}</span>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${color.chip}`}>{ACTIVITY_LABEL[lesson.activity]}</span>
                    </div>
                    <h3 className="text-lg font-bold">{lesson.title.en}</h3>
                    <p className="text-sm text-muted-foreground">{lesson.goal.en}</p>
                    <p className="text-sm text-foreground/70 mt-1" dir="rtl" style={{ fontFamily: "var(--font-arabic)" }}>{lesson.title.ar}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Categories for this age */}
        <section>
          <h2 className="text-2xl font-bold mb-6">🗂️ Categories for this age</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to="/category/$categoryId"
                params={{ categoryId: cat.id }}
                className="aspect-square bg-card rounded-3xl border-2 border-border hover:border-bob-blue hover:shadow-md transition-all flex flex-col items-center justify-center gap-2 p-4"
              >
                <div className="text-5xl">{cat.emoji}</div>
                <span className="font-bold text-center">{cat.name.en}</span>
                <span className="text-xs text-muted-foreground">{cat.items.length} words</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
