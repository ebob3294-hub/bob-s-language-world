import { Link } from "@tanstack/react-router";

export function BobHeader() {
  return (
    <nav
      className="w-full py-4 px-6 flex justify-between items-center bg-white border-b-4 border-border sticky top-0 z-40"
      dir="rtl"
    >
      <Link to="/" className="flex items-center gap-3">
        <div className="w-10 h-10 bg-bob-orange rounded-full flex items-center justify-center text-white font-bold text-xl shadow-sm">
          C
        </div>
        <span
          className="text-2xl font-semibold tracking-tight text-bob-blue"
          style={{ fontFamily: "var(--font-display)" }}
          dir="ltr"
        >
          Learn with Chama
        </span>
      </Link>
      <div className="flex items-center gap-2">
        <Link
          to="/about"
          className="text-bob-blue font-bold px-3 py-2 rounded-xl bg-bob-blue/10 hover:bg-bob-blue/20 transition-colors text-sm"
        >
          ℹ️ عن التطبيق
        </Link>
        <Link
          to="/"
          className="text-parent-purple font-bold px-3 py-2 rounded-xl bg-parent-purple/10 hover:bg-parent-purple/20 transition-colors text-sm"
        >
          الرئيسية
        </Link>
      </div>
    </nav>
  );
}
