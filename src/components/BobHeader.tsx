import { Link } from "@tanstack/react-router";
import { useState } from "react";

export function BobHeader() {
  const [isBob, setIsBob] = useState(false);

  return (
    <nav
      className="w-full py-4 px-6 flex justify-between items-center bg-white border-b-4 border-border sticky top-0 z-40"
      dir="rtl"
    >
      <div className="flex items-center gap-3">
        <button
          onClick={() => setIsBob((v) => !v)}
          className="relative w-10 h-10 cursor-pointer focus:outline-none"
          aria-label="Toggle mascot"
        >
          <div
            className="w-full h-full rounded-full flex items-center justify-center text-white font-bold text-xl shadow-sm transition-transform duration-500"
            style={{
              transformStyle: "preserve-3d",
              transform: isBob ? "rotateY(180deg)" : "rotateY(0deg)",
              backgroundColor: isBob ? "#3B82F6" : "#F97316",
            }}
          >
            <span
              style={{
                backfaceVisibility: "hidden",
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              C
            </span>
            <span
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              B
            </span>
          </div>
        </button>
        <span
          className="text-2xl font-semibold tracking-tight text-bob-blue transition-opacity duration-300"
          style={{ fontFamily: "var(--font-display)" }}
          dir="ltr"
        >
          {isBob ? "Learn with Bob" : "Learn with Chama"}
        </span>
      </div>
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
