import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { BobHeader } from "@/components/BobHeader";
import { CATEGORIES, speak, stripArticle, type Lang } from "@/lib/vocab";

export const Route = createFileRoute("/play/flashcards")({
  component: Flashcards,
});

const ALL_ITEMS = CATEGORIES.flatMap((c) =>
  c.items.map((i) => ({ ...i, categoryName: c.name.en })),
);

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function Flashcards() {
  const [deck, setDeck] = useState(() => shuffle(ALL_ITEMS));
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [lang, setLang] = useState<Lang>("en");

  const card = deck[index];
  const progress = useMemo(
    () => `${index + 1} / ${deck.length}`,
    [index, deck.length],
  );

  const next = () => {
    setFlipped(false);
    setIndex((i) => (i + 1) % deck.length);
  };
  const prev = () => {
    setFlipped(false);
    setIndex((i) => (i - 1 + deck.length) % deck.length);
  };
  const reshuffle = () => {
    setDeck(shuffle(ALL_ITEMS));
    setIndex(0);
    setFlipped(false);
  };

  const primary = lang === "en" ? card.en : card.fr;
  const secondary = lang === "en" ? card.fr : card.en;

  return (
    <div className="min-h-screen bg-background">
      <BobHeader />
      <main className="max-w-3xl mx-auto p-6 md:p-12">
        <div className="flex items-center justify-between mb-6">
          <Link
            to="/"
            className="text-muted-foreground hover:text-bob-blue font-semibold"
          >
            ← Home
          </Link>
          <span className="text-sm font-bold text-muted-foreground">
            Card {progress}
          </span>
        </div>

        <div className="flex gap-2 mb-6 justify-center">
          <button
            onClick={() => setLang("en")}
            className={`px-5 py-2 rounded-full font-bold text-sm transition-colors ${
              lang === "en" ? "bg-bob-blue text-white" : "bg-muted"
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLang("fr")}
            className={`px-5 py-2 rounded-full font-bold text-sm transition-colors ${
              lang === "fr" ? "bg-bob-orange text-white" : "bg-muted"
            }`}
          >
            Français
          </button>
        </div>

        <button
          onClick={() => setFlipped((f) => !f)}
          className="w-full aspect-[4/5] md:aspect-[3/2] bg-card rounded-[40px] border-4 border-border shadow-xl flex flex-col items-center justify-center gap-6 p-8 hover:border-bob-blue transition-colors"
        >
          <div className="text-[8rem] md:text-[10rem] leading-none">
            {card.emoji}
          </div>
          {flipped ? (
            <div className="text-center">
              <p className="text-bob-blue font-bold text-xs uppercase tracking-widest mb-2">
                {lang === "en" ? "English" : "Français"}
              </p>
              <h2 className="text-5xl md:text-6xl font-bold">{primary}</h2>
              <p className="mt-4 text-xl md:text-2xl text-muted-foreground italic">
                {secondary}
              </p>
            </div>
          ) : (
            <p className="text-muted-foreground font-semibold text-lg">
              Tap to reveal
            </p>
          )}
        </button>

        <div className="flex items-center justify-between mt-8 gap-4">
          <button
            onClick={prev}
            className="flex-1 py-4 rounded-2xl bg-muted font-bold text-lg hover:bg-muted/70 transition-colors"
          >
            ← Prev
          </button>
          <button
            onClick={() => speak(stripArticle(primary), lang)}
            className="w-16 h-16 rounded-full bg-bob-green text-white text-2xl shadow-lg hover:scale-105 transition-transform shrink-0"
            aria-label="Play sound"
          >
            🔊
          </button>
          <button
            onClick={next}
            className="flex-1 py-4 rounded-2xl bg-bob-blue text-white font-bold text-lg hover:brightness-110 transition-all shadow-md"
          >
            Next →
          </button>
        </div>

        <div className="text-center mt-6">
          <button
            onClick={reshuffle}
            className="text-sm text-parent-purple font-bold hover:underline"
          >
            🔀 Shuffle deck
          </button>
        </div>
      </main>
    </div>
  );
}
