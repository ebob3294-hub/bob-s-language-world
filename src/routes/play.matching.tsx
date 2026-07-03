import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { BobHeader } from "@/components/BobHeader";
import { CATEGORIES, speak, stripArticle, type VocabItem } from "@/lib/vocab";

export const Route = createFileRoute("/play/matching")({
  component: Matching,
});

const ALL = CATEGORIES.flatMap((c) => c.items);

function pick<T>(arr: T[], n: number): T[] {
  const copy = [...arr];
  const out: T[] = [];
  for (let i = 0; i < n && copy.length; i++) {
    out.push(copy.splice(Math.floor(Math.random() * copy.length), 1)[0]);
  }
  return out;
}

type Card = {
  key: string; // unique per card instance
  itemId: string;
  face: "emoji" | "word";
  item: VocabItem;
};

function buildBoard(): Card[] {
  const items = pick(ALL, 6);
  const cards: Card[] = [];
  items.forEach((item) => {
    cards.push({ key: `${item.id}-e`, itemId: item.id, face: "emoji", item });
    cards.push({ key: `${item.id}-w`, itemId: item.id, face: "word", item });
  });
  // shuffle
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}

function Matching() {
  const [board, setBoard] = useState<Card[]>(() => buildBoard());
  const [flipped, setFlipped] = useState<string[]>([]);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [moves, setMoves] = useState(0);

  const won = useMemo(
    () => matched.size === board.length,
    [matched.size, board.length],
  );

  useEffect(() => {
    if (flipped.length !== 2) return;
    const [a, b] = flipped.map((k) => board.find((c) => c.key === k)!);
    setMoves((m) => m + 1);
    if (a.itemId === b.itemId) {
      const next = new Set(matched);
      next.add(a.key);
      next.add(b.key);
      setMatched(next);
      speak(stripArticle(a.item.en), "en");
      setTimeout(() => setFlipped([]), 500);
    } else {
      setTimeout(() => setFlipped([]), 900);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flipped]);

  const flip = (key: string) => {
    if (flipped.length >= 2) return;
    if (flipped.includes(key) || matched.has(key)) return;
    setFlipped((f) => [...f, key]);
  };

  const restart = () => {
    setBoard(buildBoard());
    setFlipped([]);
    setMatched(new Set());
    setMoves(0);
  };

  return (
    <div className="min-h-screen bg-background">
      <BobHeader />
      <main className="max-w-3xl mx-auto p-6 md:p-12">
        <div className="flex items-center justify-between mb-6">
          <Link to="/" className="text-muted-foreground hover:text-bob-blue font-semibold">
            ← Home
          </Link>
          <span className="text-sm font-bold text-muted-foreground">
            Moves: {moves}
          </span>
        </div>

        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-1">Memory Match</h1>
          <p className="text-muted-foreground">
            Match each picture with its English word
          </p>
        </div>

        {won && (
          <div className="bg-bob-green/20 border-2 border-bob-green rounded-2xl p-4 text-center mb-6">
            <p className="text-lg font-bold">
              🎉 You matched all pairs in {moves} moves!
            </p>
            <button
              onClick={restart}
              className="mt-3 px-5 py-2 rounded-full bg-bob-green text-white font-bold shadow-sm hover:brightness-110"
            >
              Play again
            </button>
          </div>
        )}

        <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {board.map((c) => {
            const isOpen = flipped.includes(c.key) || matched.has(c.key);
            const isMatched = matched.has(c.key);
            return (
              <button
                key={c.key}
                onClick={() => flip(c.key)}
                className={`aspect-square rounded-2xl border-4 transition-all grid place-items-center p-2 text-center ${
                  isOpen
                    ? isMatched
                      ? "bg-bob-green/20 border-bob-green"
                      : "bg-card border-bob-blue"
                    : "bg-bob-blue border-bob-blue hover:brightness-110"
                }`}
              >
                {isOpen ? (
                  c.face === "emoji" ? (
                    <span className="text-4xl md:text-5xl">{c.item.emoji}</span>
                  ) : (
                    <span className="text-sm md:text-lg font-bold leading-tight">
                      {c.item.en}
                    </span>
                  )
                ) : (
                  <span className="text-3xl md:text-4xl text-white">?</span>
                )}
              </button>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={restart}
            className="text-sm text-parent-purple font-bold hover:underline"
          >
            🔀 New board
          </button>
        </div>
      </main>
    </div>
  );
}
