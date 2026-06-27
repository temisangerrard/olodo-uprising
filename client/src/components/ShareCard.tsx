import { useRef } from "react";
import type { Archetype } from "@/lib/data";

interface ShareCardProps {
  archetype: Archetype;
  scores: Record<string, number>;
}

export default function ShareCard({ archetype, scores }: ShareCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    // Simple canvas-based screenshot
    const card = cardRef.current;
    if (!card) return;

    // Create canvas
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 1200;
    canvas.height = 630;

    // Background
    ctx.fillStyle = "#1a1a1f";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Gradient overlay
    const gradient = ctx.createRadialGradient(840, 252, 0, 840, 252, 500);
    gradient.addColorStop(0, "rgba(251, 191, 36, 0.08)");
    gradient.addColorStop(1, "transparent");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Title
    ctx.fillStyle = "#f5f5f5";
    ctx.font = "bold 48px 'Space Grotesk', sans-serif";
    ctx.fillText("Olodo Uprising", 60, 80);

    // Archetype name
    ctx.fillStyle = archetype.color;
    ctx.font = "bold 72px 'Space Grotesk', sans-serif";
    ctx.fillText(archetype.name, 60, 200);

    // Tagline
    ctx.fillStyle = "#a1a1aa";
    ctx.font = "32px 'Inter', sans-serif";
    ctx.fillText(`"${archetype.tagline}"`, 60, 260);

    // Verdict
    ctx.fillStyle = "#d4d4d8";
    ctx.font = "24px 'Inter', sans-serif";
    ctx.fillText("Society verdict:", 60, 340);
    ctx.fillStyle = "#f5f5f5";
    ctx.font = "bold 28px 'Inter', sans-serif";
    ctx.fillText(archetype.societyVerdict, 60, 380);

    // Footer
    ctx.fillStyle = "#71717a";
    ctx.font = "18px 'JetBrains Mono', monospace";
    ctx.fillText("olodo-uprising.pages.dev", 60, 580);
    ctx.fillText("#OlodoUprising", canvas.width - 200, 580);

    // Download
    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `olodo-${archetype.name.toLowerCase().replace(/\s+/g, "-")}.png`;
      a.click();
      URL.revokeObjectURL(url);
    });
  };

  return (
    <div className="space-y-4">
      {/* Preview card */}
      <div
        ref={cardRef}
        className="relative overflow-hidden border"
        style={{
          background: "oklch(0.17 0.008 260)",
          borderColor: "oklch(1 0 0 / 0.08)",
          borderRadius: "2px",
          padding: "2rem",
        }}
      >
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 70% 40%, ${archetype.color}14 0%, transparent 60%)`,
          }}
        />

        <div className="relative z-10">
          <p
            className="text-xs font-mono tracking-widest uppercase mb-4"
            style={{ color: "oklch(0.55 0.01 260)", fontFamily: "'JetBrains Mono', monospace" }}
          >
            My Archetype
          </p>

          <h2
            className="text-4xl md:text-5xl font-bold mb-3"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: archetype.color }}
          >
            {archetype.name}
          </h2>

          <p
            className="text-lg mb-6"
            style={{ color: "oklch(0.75 0.005 65)", fontFamily: "'Inter', sans-serif" }}
          >
            "{archetype.tagline}"
          </p>

          <div
            className="border-t pt-4"
            style={{ borderColor: "oklch(1 0 0 / 0.06)" }}
          >
            <p
              className="text-xs font-mono mb-2"
              style={{ color: "oklch(0.45 0.01 260)", fontFamily: "'JetBrains Mono', monospace" }}
            >
              Society verdict
            </p>
            <p
              className="text-base"
              style={{ color: "oklch(0.85 0.005 65)", fontFamily: "'Inter', sans-serif" }}
            >
              {archetype.societyVerdict}
            </p>
          </div>

          <div
            className="mt-6 pt-4 border-t flex items-center justify-between"
            style={{ borderColor: "oklch(1 0 0 / 0.06)" }}
          >
            <p
              className="text-xs font-mono"
              style={{ color: "oklch(0.40 0.01 260)", fontFamily: "'JetBrains Mono', monospace" }}
            >
              olodo-uprising.pages.dev
            </p>
            <p
              className="text-xs font-mono"
              style={{ color: "oklch(0.40 0.01 260)", fontFamily: "'JetBrains Mono', monospace" }}
            >
              #OlodoUprising
            </p>
          </div>
        </div>
      </div>

      {/* Download button */}
      <button
        onClick={handleDownload}
        className="w-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-150 active:scale-[0.97]"
        style={{
          background: "oklch(0.22 0.008 260)",
          color: "oklch(0.92 0.005 65)",
          fontFamily: "'Space Grotesk', sans-serif",
          borderRadius: "2px",
          border: "1px solid oklch(1 0 0 / 0.12)",
          letterSpacing: "0.04em",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.background = "oklch(0.25 0.010 260)";
          (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.78 0.16 75 / 0.4)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.background = "oklch(0.22 0.008 260)";
          (e.currentTarget as HTMLElement).style.borderColor = "oklch(1 0 0 / 0.12)";
        }}
      >
        ↓ Download Share Card
      </button>
    </div>
  );
}
