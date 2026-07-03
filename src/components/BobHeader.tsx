import { Link } from "@tanstack/react-router";

export function BobHeader() {
  return (
    <nav
      className="w-full py-4 px-6 flex justify-between items-center bg-white border-b-4 border-border sticky top-0 z-40"
      dir="rtl"
    >
      <Link to="/" className="flex items-center gap-3">
        <div className="w-10 h-10 bg-bob-orange rounded-full flex items-center justify-center text-white font-bold text-xl shadow-sm">
          B
        </div>
        <span
          className="text-2xl font-semibold tracking-tight text-bob-blue"
          style={{ fontFamily: "var(--font-display)" }}
          dir="ltr"
        >
          Learn with Bob
        </span>
      </Link>
      <div className="flex items-center gap-3">
        <Link
          to="/"
          className="text-parent-purple font-bold px-4 py-2 rounded-xl bg-parent-purple/10 hover:bg-parent-purple/20 transition-colors text-sm"
        >
          الرئيسية
        </Link>
      </div>
    </nav>
  );
}
