import { createFileRoute, Link } from "@tanstack/react-router";
import { BobHeader } from "@/components/BobHeader";
import bobMascot from "@/assets/bob-mascot.png";

// TIP: change the developer name below whenever you want.
const DEVELOPER_NAME = "Bob Team";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Learn with Chama" },
      { name: "description", content: "About Learn with Chama — a joyful language app for kids in English, French and Arabic." },
    ],
  }),
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <BobHeader />
      <main className="max-w-3xl mx-auto p-6 md:p-12">
        <Link to="/" className="text-sm text-muted-foreground hover:underline">← Home</Link>

        <section className="mt-4 bg-card rounded-[40px] p-8 md:p-12 border border-border shadow-sm text-center">
          <div className="w-32 h-32 mx-auto mb-6 bg-bob-yellow rounded-[32px] border-4 border-white shadow-lg grid place-items-center overflow-hidden">
            <img src={bobMascot} alt="Bob mascot" className="w-full h-full object-contain p-2" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-3">Learn with Chama</h1>
          <p className="text-lg text-muted-foreground mb-2">
            English · Français · <span style={{ fontFamily: "var(--font-arabic)" }}>العربية</span>
          </p>
          <p className="text-lg text-foreground/80 max-w-xl mx-auto mt-4">
            A joyful playground where kids from 3 to 15 discover vocabulary and short stories in three languages.
            Bob reads every word out loud, and mini-games make learning stick.
          </p>
          <p
            className="text-lg text-foreground/80 max-w-xl mx-auto mt-3"
            dir="rtl"
            style={{ fontFamily: "var(--font-arabic)" }}
          >
            تطبيق تعليمي ممتع للأطفال من 3 إلى 15 سنة لتعلّم المفردات وقراءة القصص القصيرة بثلاث لغات.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
          <div className="bg-bob-blue/10 rounded-3xl p-6 border-2 border-transparent hover:border-bob-blue transition">
            <div className="text-4xl mb-2">🎯</div>
            <h3 className="text-xl font-bold mb-1">3 age tracks</h3>
            <p className="text-sm text-muted-foreground">Little (3–5), Kids (5–9) and Young learners (9–15) with their own lessons.</p>
          </div>
          <div className="bg-bob-green/20 rounded-3xl p-6 border-2 border-transparent hover:border-bob-green transition">
            <div className="text-4xl mb-2">📖</div>
            <h3 className="text-xl font-bold mb-1">Stories & voice</h3>
            <p className="text-sm text-muted-foreground">Short tales read aloud in EN / FR / AR. Choose the language before reading.</p>
          </div>
          <div className="bg-bob-orange/20 rounded-3xl p-6 border-2 border-transparent hover:border-bob-orange transition">
            <div className="text-4xl mb-2">🎮</div>
            <h3 className="text-xl font-bold mb-1">Mini-games</h3>
            <p className="text-sm text-muted-foreground">Flashcards, Matching, Quiz and Spelling to practice every word.</p>
          </div>
          <div className="bg-parent-purple/15 rounded-3xl p-6 border-2 border-transparent hover:border-parent-purple transition">
            <div className="text-4xl mb-2">📱</div>
            <h3 className="text-xl font-bold mb-1">Works offline</h3>
            <p className="text-sm text-muted-foreground">Install on your phone home screen and keep learning without internet.</p>
          </div>
        </section>

        <section className="mt-8 bg-bob-yellow rounded-[32px] p-8 text-center border-4 border-white shadow-md">
          <p className="text-sm font-bold uppercase tracking-widest text-foreground/70">Developer</p>
          <p
            className="text-3xl md:text-4xl font-bold mt-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {DEVELOPER_NAME}
          </p>
          <p className="text-sm text-foreground/70 mt-3" dir="rtl" style={{ fontFamily: "var(--font-arabic)" }}>
            صُنع بحب من أجل الأطفال
          </p>
        </section>

        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-block px-6 py-3 rounded-2xl bg-bob-blue text-white font-bold hover:-translate-y-0.5 transition shadow-md"
          >
            ← Back home
          </Link>
        </div>
      </main>
    </div>
  );
}
