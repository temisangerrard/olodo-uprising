import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ background: "oklch(0.12 0.008 260)" }}
    >
      <div
        className="text-xs font-mono tracking-widest uppercase mb-4"
        style={{ color: "oklch(0.78 0.16 75)", fontFamily: "'JetBrains Mono', monospace" }}
      >
        404 — Not Found
      </div>
      <h1
        className="text-4xl font-bold mb-6"
        style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.92 0.005 65)" }}
      >
        Page does not exist.
      </h1>
      <button
        onClick={() => setLocation("/")}
        className="text-sm font-mono px-4 py-2 border transition-colors duration-150"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          borderColor: "oklch(1 0 0 / 0.15)",
          color: "oklch(0.55 0.01 260)",
          borderRadius: "2px",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.78 0.16 75 / 0.5)";
          (e.currentTarget as HTMLElement).style.color = "oklch(0.78 0.16 75)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.borderColor = "oklch(1 0 0 / 0.15)";
          (e.currentTarget as HTMLElement).style.color = "oklch(0.55 0.01 260)";
        }}
      >
        ← Return to Home
      </button>
    </div>
  );
}
