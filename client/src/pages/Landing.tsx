/**
 * Landing Page — Olodo Uprising
 * Design: Dark Intelligence Lab
 * Asymmetric layout, amber accents, ominous tone
 */

import { useLocation } from "wouter";
import { motion } from "framer-motion";

export default function Landing() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: "oklch(0.12 0.008 260)" }}>
      {/* Hero background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/manus-storage/hero-bg_9b456c9e.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.35,
        }}
      />

      {/* Gradient overlay — left side darker for text legibility */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(105deg, oklch(0.12 0.008 260 / 0.97) 40%, oklch(0.12 0.008 260 / 0.6) 100%)",
        }}
      />

      {/* Scanline texture */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, oklch(0 0 0 / 0.04) 2px, oklch(0 0 0 / 0.04) 4px)",
        }}
      />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-5 md:px-12">
        <div className="flex items-center gap-3">
          <img
            src="/manus-storage/logo-icon_bec4eb3b.png"
            alt="Olodo Uprising"
            className="w-8 h-8 object-contain"
          />
          <span
            className="text-sm font-mono tracking-widest uppercase"
            style={{ color: "oklch(0.78 0.16 75)", fontFamily: "'JetBrains Mono', monospace" }}
          >
            Olodo Uprising
          </span>
        </div>
        <a
          href="https://github.com/temisangerrard/olodo-uprising"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono tracking-wider px-3 py-1.5 border transition-colors duration-150"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            borderColor: "oklch(1 0 0 / 0.15)",
            color: "oklch(0.55 0.01 260)",
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
          Open Source ↗
        </a>
      </header>

      {/* Main content */}
      <main className="relative z-10 px-6 md:px-12 pt-16 pb-24 max-w-3xl">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="flex items-center gap-3 mb-8"
        >
          <div
            className="h-px w-8"
            style={{ background: "oklch(0.78 0.16 75)" }}
          />
          <span
            className="text-xs font-mono tracking-widest uppercase"
            style={{ color: "oklch(0.78 0.16 75)", fontFamily: "'JetBrains Mono', monospace" }}
          >
            Behavioral Profiling Tool
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6"
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.95 0.005 65)" }}
        >
          10,000 of you.<br />
          <span style={{ color: "oklch(0.78 0.16 75)" }}>One city.</span><br />
          What happens?
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="text-lg md:text-xl leading-relaxed mb-4"
          style={{ color: "oklch(0.65 0.01 260)", fontFamily: "'Inter', sans-serif", maxWidth: "540px" }}
        >
          Answer 20 questions about how you think, decide, and behave. We will classify your cognitive archetype — then simulate what society looks like if 10,000 people exactly like you lived in a radius.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}
          className="text-sm leading-relaxed mb-10"
          style={{ color: "oklch(0.45 0.01 260)", fontFamily: "'Inter', sans-serif", maxWidth: "480px" }}
        >
          Inspired by the Nigerian "Olodo Uprising" debate — the national conversation about what happens when a society stops rewarding knowledge and starts rewarding noise.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col sm:flex-row gap-4 items-start"
        >
          <button
            onClick={() => setLocation("/quiz")}
            className="px-8 py-4 font-semibold text-sm tracking-wide transition-all duration-150 active:scale-[0.97]"
            style={{
              background: "oklch(0.78 0.16 75)",
              color: "oklch(0.12 0.008 260)",
              fontFamily: "'Space Grotesk', sans-serif",
              borderRadius: "2px",
              boxShadow: "0 0 24px oklch(0.78 0.16 75 / 0.3)",
              letterSpacing: "0.05em",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = "oklch(0.85 0.18 75)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 32px oklch(0.78 0.16 75 / 0.5)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = "oklch(0.78 0.16 75)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px oklch(0.78 0.16 75 / 0.3)";
            }}
          >
            BEGIN ASSESSMENT
          </button>

          <div
            className="flex items-center gap-2 text-xs font-mono"
            style={{ color: "oklch(0.40 0.01 260)", fontFamily: "'JetBrains Mono', monospace", paddingTop: "14px" }}
          >
            <span>~5 minutes</span>
            <span style={{ color: "oklch(0.25 0.01 260)" }}>·</span>
            <span>20 questions</span>
            <span style={{ color: "oklch(0.25 0.01 260)" }}>·</span>
            <span>8 archetypes</span>
          </div>
        </motion.div>
      </main>

      {/* Bottom city illustration */}
      <div
        className="absolute bottom-0 right-0 w-full md:w-2/3 h-64 z-0 pointer-events-none"
        style={{
          backgroundImage: "url(/manus-storage/society-illustration_2755073a.png)",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          opacity: 0.25,
          maskImage: "linear-gradient(to top, oklch(0 0 0) 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to top, oklch(0 0 0) 0%, transparent 100%)",
        }}
      />

      {/* Archetype preview strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="relative z-10 px-6 md:px-12 pb-12"
      >
        <div
          className="border-t pt-8"
          style={{ borderColor: "oklch(1 0 0 / 0.06)" }}
        >
          <p
            className="text-xs font-mono tracking-widest uppercase mb-5"
            style={{ color: "oklch(0.35 0.01 260)", fontFamily: "'JetBrains Mono', monospace" }}
          >
            8 Archetypes Identified
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              { name: "The Builder", color: "#60a5fa" },
              { name: "The Sage", color: "#34d399" },
              { name: "The Critic", color: "#a78bfa" },
              { name: "The Hustler", color: "#fb923c" },
              { name: "The Follower", color: "#38bdf8" },
              { name: "The Performer", color: "#f472b6" },
              { name: "The Skeptic", color: "#facc15" },
              { name: "The Olodo", color: "#f87171" },
            ].map((a) => (
              <span
                key={a.name}
                className="text-xs px-3 py-1 font-mono"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: a.color,
                  background: `${a.color}14`,
                  border: `1px solid ${a.color}30`,
                  borderRadius: "2px",
                }}
              >
                {a.name}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
