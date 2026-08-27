import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { BobHeader } from "@/components/BobHeader";
import { getCategory, speak, stripArticle, type Lang } from "@/lib/vocab";

export const Route = createFileRoute("/category/$categoryId")({
  component: CategoryPage,
  loader: ({ params }) => {
    const category = getCategory(params.categoryId);
    if (!category) throw notFound();
    return { category };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <BobHeader />
      <div className="max-w-2xl mx-auto p-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Category not found</h1>
        <Link to="/" className="text-bob-blue font-bold hover:underline">
          ← Back to home
        </Link>
      </div>
    </div>
  ),
});

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const [lang, setLang] = useState<Lang>("en");

  return (
    <div className="min-h-screen bg-background">
      <BobHeader />

      <main className="max-w-6xl mx-auto p-6 md:p-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-bob-blue font-semibold mb-6 transition-colors"
        >
          ← All categories
        </Link>

        <div className="bg-card rounded-[40px] p-6 md:p-10 shadow-sm border border-border">
          <div className="flex flex-col md:flex-row justify-between gap-6 mb-10">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-bob-yellow rounded-2xl grid place-items-center text-4xl shrink-0">
                {category.emoji}
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  Let's learn {category.name.en}!
                </h1>
                <p className="text-muted-foreground mt-1">
                  Tap a card to hear the word
                </p>
              </div>
            </div>
            <div className="flex gap-2 self-start flex-wrap">
              <button
                onClick={() => setLang("en")}
                className={`px-5 py-3 rounded-full font-bold transition-colors ${
                  lang === "en" ? "bg-bob-blue text-white shadow-md" : "bg-muted hover:bg-muted/70"
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLang("fr")}
                className={`px-5 py-3 rounded-full font-bold transition-colors ${
                  lang === "fr" ? "bg-bob-orange text-white shadow-md" : "bg-muted hover:bg-muted/70"
                }`}
              >
                Français
              </button>
              <button
                onClick={() => setLang("ar")}
                className={`px-5 py-3 rounded-full font-bold transition-colors ${
                  lang === "ar" ? "bg-bob-green text-white shadow-md" : "bg-muted hover:bg-muted/70"
                }`}
                style={{ fontFamily: "var(--font-arabic)" }}
              >
                العربية
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.items.map((item: (typeof category.items)[number]) => {
              const en = item.en;
              const fr = item.fr;
              const ar = item.ar ?? item.en;
              const primary = lang === "en" ? en : lang === "fr" ? fr : ar;
              const isRtl = lang === "ar";

              const handleSpeak = () => {
                speak(stripArticle(primary), lang);
              };

              return (
                <button
                  key={item.id}
                  onClick={handleSpeak}
                  className="p-6 rounded-3xl bg-muted/50 hover:shadow-xl transition-all border-2 border-border hover:border-bob-blue text-left group"
                >
                  <div className="w-full aspect-square bg-card rounded-2xl mb-5 grid place-items-center text-8xl group-hover:scale-105 transition-transform">
                    {item.emoji}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="min-w-0">
                      <p className="text-bob-blue font-bold text-xs uppercase tracking-widest mb-1">
                        {lang === "en" ? "English" : lang === "fr" ? "Français" : "العربية"}
                      </p>
                      <h4
                        className="text-2xl font-bold text-foreground truncate"
                        dir={isRtl ? "rtl" : "ltr"}
                        style={isRtl ? { fontFamily: "var(--font-arabic)" } : undefined}
                      >
                        {primary}
                      </h4>
                    </div>
                    <span
                      role="img"
                      aria-label="Play sound"
                      className="w-12 h-12 rounded-full bg-bob-green flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform shrink-0 text-xl"
                    >
                      🔊
                    </span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border space-y-1">
                    {lang !== "en" && (
                      <p className="text-sm text-muted-foreground italic truncate">
                        <span className="text-parent-purple font-bold text-xs uppercase mr-2">EN</span>
                        {en}
                      </p>
                    )}
                    {lang !== "fr" && (
                      <p className="text-sm text-muted-foreground italic truncate">
                        <span className="text-bob-orange font-bold text-xs uppercase mr-2">FR</span>
                        {fr}
                      </p>
                    )}
                    {lang !== "ar" && item.ar && (
                      <p
                        className="text-sm text-muted-foreground italic truncate"
                        dir="rtl"
                        style={{ fontFamily: "var(--font-arabic)" }}
                      >
                        <span className="text-bob-green font-bold text-xs uppercase ml-2">AR</span>
                        {item.ar}
                      </p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

