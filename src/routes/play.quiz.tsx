import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { BobHeader } from "@/components/BobHeader";
import { CATEGORIES, speak, stripArticle, type Lang, type VocabItem } from "@/lib/vocab";

export const Route = createFileRoute("/play/quiz")({
  component: Quiz,
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

interface Question {
  answer: VocabItem;
  choices: VocabItem[];
}

function buildQuestion(): Question {
  const [answer, ...distractors] = pick(ALL, 4);
  const choices = pick([answer, ...distractors], 4);
  return { answer, choices };
}

function Quiz() {
  const [lang, setLang] = useState<Lang>("en");
  const [q, setQ] = useState<Question>(() => buildQuestion());
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);
  const TOTAL = 10;

  const finished = round > TOTAL;
  const word = useMemo(
    () => (lang === "en" ? q.answer.en : q.answer.fr),
    [lang, q],
  );

  useEffect(() => {
    if (!finished) speak(stripArticle(word), lang);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, lang]);

  const answer = (id: string) => {
    if (selected) return;
    setSelected(id);
    if (id === q.answer.id) setScore((s) => s + 1);
    setTimeout(() => {
      if (round >= TOTAL) {
        setRound(TOTAL + 1);
      } else {
        setRound((r) => r + 1);
        setQ(buildQuestion());
        setSelected(null);
      }
    }, 900);
  };

  const restart = () => {
    setQ(buildQuestion());
    setSelected(null);
    setScore(0);
    setRound(1);
  };

  if (finished) {
    const stars = score >= 8 ? "🌟🌟🌟" : score >= 5 ? "⭐⭐" : "⭐";
    return (
      <div className="min-h-screen bg-background">
        <BobHeader />
        <main className="max-w-2xl mx-auto p-6 md:p-12 text-center">
          <div className="bg-card rounded-[40px] p-10 border-4 border-border shadow-xl">
            <div className="text-8xl mb-4">🎉</div>
            <h1 className="text-4xl font-bold mb-2">Great job!</h1>
            <p className="text-muted-foreground mb-6">You finished the quiz.</p>
            <div className="text-6xl mb-4">{stars}</div>
            <p className="text-2xl font-bold mb-8">
              Score: <span className="text-bob-blue">{score}</span> / {TOTAL}
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={restart}
                className="px-6 py-3 rounded-full bg-bob-blue text-white font-bold shadow-md hover:brightness-110"
              >
                Play again
              </button>
              <Link
                to="/"
                className="px-6 py-3 rounded-full bg-muted font-bold hover:bg-muted/70"
              >
                Home
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <BobHeader />
      <main className="max-w-3xl mx-auto p-6 md:p-12">
        <div className="flex items-center justify-between mb-6">
          <Link to="/" className="text-muted-foreground hover:text-bob-blue font-semibold">
            ← Home
          </Link>
          <span className="text-sm font-bold text-muted-foreground">
            Question {round} / {TOTAL} · Score {score}
          </span>
        </div>

        <div className="flex gap-2 mb-6 justify-center">
          <button
            onClick={() => setLang("en")}
            className={`px-5 py-2 rounded-full font-bold text-sm ${
              lang === "en" ? "bg-bob-blue text-white" : "bg-muted"
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLang("fr")}
            className={`px-5 py-2 rounded-full font-bold text-sm ${
              lang === "fr" ? "bg-bob-orange text-white" : "bg-muted"
            }`}
          >
            Français
          </button>
        </div>

        <div className="bg-card rounded-[32px] p-8 border-4 border-border shadow-lg text-center mb-8">
          <p className="text-muted-foreground text-sm mb-3 font-semibold uppercase tracking-widest">
            Which one is
          </p>
          <div className="flex items-center justify-center gap-3">
            <h2 className="text-5xl font-bold text-bob-blue">{word}</h2>
            <button
              onClick={() => speak(stripArticle(word), lang)}
              className="w-12 h-12 rounded-full bg-bob-green text-white text-xl shadow-md hover:scale-110 transition-transform"
              aria-label="Play sound"
            >
              🔊
            </button>
          </div>
          <p className="text-muted-foreground mt-2">?</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {q.choices.map((c) => {
            const isSelected = selected === c.id;
            const isCorrect = c.id === q.answer.id;
            const showResult = selected !== null;
            let state = "bg-card hover:border-bob-blue hover:shadow-lg";
            if (showResult && isCorrect) state = "bg-bob-green/30 border-bob-green";
            else if (showResult && isSelected && !isCorrect)
              state = "bg-destructive/20 border-destructive";
            else if (showResult) state = "bg-card opacity-60";
            return (
              <button
                key={c.id}
                onClick={() => answer(c.id)}
                className={`aspect-square rounded-3xl border-4 border-border transition-all grid place-items-center text-7xl md:text-8xl ${state}`}
              >
                {c.emoji}
              </button>
            );
          })}
        </div>
      </main>
    </div>
  );
}
