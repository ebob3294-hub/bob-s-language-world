import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { BobHeader } from "@/components/BobHeader";
import { CATEGORIES, speak, stripArticle, type Lang, type VocabItem } from "@/lib/vocab";

export const Route = createFileRoute("/play/spelling")({
  component: Spelling,
});

const ALL: VocabItem[] = CATEGORIES.flatMap((c) => c.items).filter(
  (it) => /^[a-zA-Z '-]+$/.test(it.en) && it.en.length <= 10,
);

function pickRandom(): VocabItem {
  return ALL[Math.floor(Math.random() * ALL.length)];
}

function Spelling() {
  const [lang, setLang] = useState<Lang>("en");
  const [word, setWord] = useState<VocabItem>(() => pickRandom());
  const [guess, setGuess] = useState("");
  const [score, setScore] = useState(0);
  const [tries, setTries] = useState(0);
  const [reveal, setReveal] = useState(false);

  const target = useMemo(() => (lang === "en" ? word.en : stripArticle(word.fr)), [word, lang]);

  const check = () => {
    setTries((t) => t + 1);
    const ok = guess.trim().toLowerCase() === target.toLowerCase();
    if (ok) setScore((s) => s + 1);
    setReveal(true);
  };

  const next = () => {
    setWord(pickRandom());
    setGuess("");
    setReveal(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <BobHeader />
      <main className="max-w-2xl mx-auto p-6 md:p-12">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-bob-blue font-semibold mb-6">← Home</Link>

        <div className="bg-card rounded-[40px] p-8 border border-border shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">🔤 Spelling</h1>
            <div className="flex gap-2">
              <button onClick={() => { setLang("en"); next(); }} className={`px-4 py-2 rounded-full font-bold text-sm ${lang === "en" ? "bg-bob-blue text-white" : "bg-muted"}`}>EN</button>
              <button onClick={() => { setLang("fr"); next(); }} className={`px-4 py-2 rounded-full font-bold text-sm ${lang === "fr" ? "bg-bob-orange text-white" : "bg-muted"}`}>FR</button>
            </div>
          </div>

          <p className="text-muted-foreground mb-4">Score: <b className="text-foreground">{score}</b> / {tries}</p>

          <div className="bg-muted/50 rounded-3xl p-8 text-center mb-6">
            <div className="text-8xl mb-4">{word.emoji}</div>
            <button
              onClick={() => speak(target, lang)}
              className="px-5 py-2.5 rounded-full bg-bob-green text-white font-bold hover:scale-105 transition"
            >
              🔊 Hear the word
            </button>
          </div>

          <input
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !reveal && check()}
            disabled={reveal}
            placeholder="Type the word..."
            className="w-full px-5 py-4 text-2xl rounded-2xl border-2 border-border focus:border-bob-blue outline-none mb-4"
            autoFocus
          />

          {reveal && (
            <div className={`p-4 rounded-2xl mb-4 text-center font-bold text-lg ${guess.trim().toLowerCase() === target.toLowerCase() ? "bg-bob-green/20 text-bob-green" : "bg-bob-pink/30 text-parent-purple"}`}>
              {guess.trim().toLowerCase() === target.toLowerCase() ? "🎉 Correct!" : `The word was: ${target}`}
            </div>
          )}

          {!reveal ? (
            <button onClick={check} disabled={!guess.trim()} className="w-full py-4 rounded-2xl bg-bob-blue text-white font-bold text-lg disabled:opacity-40">Check</button>
          ) : (
            <button onClick={next} className="w-full py-4 rounded-2xl bg-bob-orange text-white font-bold text-lg">Next word →</button>
          )}
        </div>
      </main>
    </div>
  );
}
