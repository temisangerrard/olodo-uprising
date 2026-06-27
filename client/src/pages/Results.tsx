/**
 * Results Page — Olodo Uprising
 * Design: Dark Intelligence Lab
 * Archetype reveal + societal simulation radar chart + verdict
 */

import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import LogoIcon from "@/components/LogoIcon";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import {
  computeScores,
  classifyArchetype,
  ARCHETYPES,
  SOCIETY_DIMENSIONS,
  type ArchetypeId,
  type AxisScores,
} from "@/lib/data";
import MixedSociety from "@/components/MixedSociety";
import ShareCard from "@/components/ShareCard";

// Typewriter hook
function useTypewriter(text: string, speed = 60, startDelay = 0) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
        } else {
          setDone(true);
          clearInterval(interval);
        }
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(timeout);
  }, [text, speed, startDelay]);

  return { displayed, done };
}

// Animated counter
function AnimatedNumber({ value, delay = 0 }: { value: number; delay?: number }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let start = 0;
      const step = value / 40;
      const interval = setInterval(() => {
        start += step;
        if (start >= value) {
          setCurrent(value);
          clearInterval(interval);
        } else {
          setCurrent(Math.floor(start));
        }
      }, 20);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return <>{current}</>;
}

export default function Results() {
  const [, setLocation] = useLocation();
  const [archetypeId, setArchetypeId] = useState<ArchetypeId | null>(null);
  const [scores, setScores] = useState<AxisScores | null>(null);
  const [phase, setPhase] = useState<"loading" | "reveal" | "details">("loading");

  useEffect(() => {
    const stored = sessionStorage.getItem("olodo_answers");
    if (!stored) {
      setLocation("/quiz");
      return;
    }
    const answers = JSON.parse(stored);
    const computed = computeScores(answers);
    const id = classifyArchetype(computed);
    setScores(computed);
    setArchetypeId(id);

    // Sequence: loading → reveal → details
    const t1 = setTimeout(() => setPhase("reveal"), 800);
    const t2 = setTimeout(() => setPhase("details"), 3200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [setLocation]);

  if (!archetypeId || !scores) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: "oklch(0.12 0.008 260)" }}
      >
        <div
          className="text-xs font-mono tracking-widest"
          style={{ color: "oklch(0.78 0.16 75)", fontFamily: "'JetBrains Mono', monospace" }}
        >
          PROCESSING...
        </div>
      </div>
    );
  }

  const archetype = ARCHETYPES[archetypeId];

  const radarData = SOCIETY_DIMENSIONS.map((d) => ({
    dimension: d.label.split(" & ")[0].split(" ")[0],
    value: archetype.society[d.key],
    fullMark: 100,
  }));

  return (
    <div
      className="min-h-screen relative"
      style={{ background: "oklch(0.12 0.008 260)" }}
    >
      {/* Results background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 100% 60% at 50% 30%, oklch(0.78 0.16 75 / 0.06) 0%, transparent 70%)",
        }}
      />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-5 md:px-12">
        <div className="flex items-center gap-3">
          <LogoIcon size={28} />
          <span
            className="text-xs font-mono tracking-widest uppercase hidden sm:block"
            style={{ color: "oklch(0.40 0.01 260)", fontFamily: "'JetBrains Mono', monospace" }}
          >
            Olodo Uprising
          </span>
        </div>
        <button
          onClick={() => {
            sessionStorage.removeItem("olodo_answers");
            setLocation("/quiz");
          }}
          className="text-xs font-mono tracking-wider px-3 py-1.5 border transition-colors duration-150"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            borderColor: "oklch(1 0 0 / 0.12)",
            color: "oklch(0.45 0.01 260)",
            borderRadius: "2px",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.78 0.16 75 / 0.4)";
            (e.currentTarget as HTMLElement).style.color = "oklch(0.78 0.16 75)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.borderColor = "oklch(1 0 0 / 0.12)";
            (e.currentTarget as HTMLElement).style.color = "oklch(0.45 0.01 260)";
          }}
        >
          Retake
        </button>
      </header>

      {/* Loading phase */}
      <AnimatePresence>
        {phase === "loading" && (
          <motion.div
            key="loading"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] gap-4"
          >
            <div
              className="text-xs font-mono tracking-widest uppercase"
              style={{ color: "oklch(0.78 0.16 75)", fontFamily: "'JetBrains Mono', monospace" }}
            >
              Analysing responses...
            </div>
            <div className="flex gap-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  className="w-1 h-4"
                  style={{ background: "oklch(0.78 0.16 75 / 0.4)", borderRadius: "1px" }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 0.8, delay: i * 0.12, repeat: Infinity }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reveal phase — archetype name types in */}
      <AnimatePresence>
        {phase === "reveal" && (
          <motion.div
            key="reveal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] text-center px-6"
          >
            <div
              className="text-xs font-mono tracking-widest uppercase mb-6"
              style={{ color: "oklch(0.55 0.01 260)", fontFamily: "'JetBrains Mono', monospace" }}
            >
              Assessment Complete — Archetype Identified
            </div>
            <RevealName name={archetype.name} accentHex={archetype.accentHex} />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="text-lg mt-4"
              style={{ color: "oklch(0.65 0.01 260)", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              "{archetype.tagline}"
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Details phase — full results */}
      <AnimatePresence>
        {phase === "details" && (
          <motion.div
            key="details"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 px-6 md:px-12 pb-16"
          >
            {/* Archetype header */}
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="mb-12"
              >
                <div
                  className="text-xs font-mono tracking-widest uppercase mb-3"
                  style={{ color: "oklch(0.55 0.01 260)", fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Your Archetype
                </div>
                <h1
                  className="text-4xl md:text-5xl font-bold mb-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: archetype.accentHex }}
                >
                  {archetype.name}
                </h1>
                <p
                  className="text-base leading-relaxed max-w-xl"
                  style={{ color: "oklch(0.65 0.01 260)", fontFamily: "'Inter', sans-serif" }}
                >
                  {archetype.description}
                </p>

                {/* Traits */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {archetype.traits.map((trait) => (
                    <span
                      key={trait}
                      className="text-xs px-3 py-1 font-mono"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        color: archetype.accentHex,
                        background: `${archetype.accentHex}14`,
                        border: `1px solid ${archetype.accentHex}30`,
                        borderRadius: "2px",
                      }}
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Two-column layout: radar + scores */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Radar chart */}
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
                  className="p-6 border"
                  style={{
                    background: "oklch(0.17 0.008 260)",
                    borderColor: "oklch(1 0 0 / 0.08)",
                    borderRadius: "2px",
                  }}
                >
                  <div
                    className="text-xs font-mono tracking-widest uppercase mb-4"
                    style={{ color: "oklch(0.55 0.01 260)", fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Society Simulation — 10,000 of You
                  </div>
                  <ResponsiveContainer width="100%" height={280}>
                    <RadarChart data={radarData}>
                      <PolarGrid stroke="oklch(1 0 0 / 0.08)" />
                      <PolarAngleAxis
                        dataKey="dimension"
                        tick={{
                          fill: "oklch(0.55 0.01 260)",
                          fontSize: 11,
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      />
                      <Radar
                        name="Society"
                        dataKey="value"
                        stroke={archetype.accentHex}
                        fill={archetype.accentHex}
                        fillOpacity={0.15}
                        strokeWidth={2}
                      />
                      <Tooltip
                        contentStyle={{
                          background: "oklch(0.17 0.008 260)",
                          border: `1px solid ${archetype.accentHex}40`,
                          borderRadius: "2px",
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: "12px",
                          color: "oklch(0.92 0.005 65)",
                        }}
                        formatter={(value: number) => [`${value}/100`, "Score"]}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </motion.div>

                {/* Score bars */}
                <motion.div
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
                  className="p-6 border"
                  style={{
                    background: "oklch(0.17 0.008 260)",
                    borderColor: "oklch(1 0 0 / 0.08)",
                    borderRadius: "2px",
                  }}
                >
                  <div
                    className="text-xs font-mono tracking-widest uppercase mb-6"
                    style={{ color: "oklch(0.55 0.01 260)", fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Societal Dimensions
                  </div>
                  <div className="flex flex-col gap-5">
                    {SOCIETY_DIMENSIONS.map((dim, idx) => {
                      const score = archetype.society[dim.key];
                      const barColor =
                        score >= 70 ? "#34d399" :
                        score >= 45 ? archetype.accentHex :
                        "#f87171";
                      return (
                        <motion.div
                          key={dim.key}
                          initial={{ opacity: 0, x: 8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + idx * 0.08, duration: 0.3 }}
                        >
                          <div className="flex justify-between items-center mb-1.5">
                            <span
                              className="text-xs"
                              style={{ color: "oklch(0.65 0.01 260)", fontFamily: "'Inter', sans-serif" }}
                            >
                              {dim.label}
                            </span>
                            <span
                              className="text-xs font-mono"
                              style={{ color: barColor, fontFamily: "'JetBrains Mono', monospace" }}
                            >
                              <AnimatedNumber value={score} delay={400 + idx * 80} />
                              /100
                            </span>
                          </div>
                          <div className="score-bar-track">
                            <motion.div
                              className="score-bar-fill"
                              initial={{ width: 0 }}
                              animate={{ width: `${score}%` }}
                              transition={{ duration: 0.8, delay: 0.4 + idx * 0.1, ease: [0.23, 1, 0.32, 1] }}
                              style={{ background: barColor }}
                            />
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </div>

              {/* Verdict */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="p-8 border mb-8"
                style={{
                  background: "oklch(0.17 0.008 260)",
                  borderColor: `${archetype.accentHex}30`,
                  borderRadius: "2px",
                  borderLeft: `3px solid ${archetype.accentHex}`,
                }}
              >
                <div
                  className="text-xs font-mono tracking-widest uppercase mb-3"
                  style={{ color: "oklch(0.55 0.01 260)", fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Simulation Verdict — 10,000 {archetype.name}s in a City
                </div>
                <p
                  className="text-xl font-semibold mb-3"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: archetype.accentHex }}
                >
                  {archetype.society.verdict}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(0.65 0.01 260)", fontFamily: "'Inter', sans-serif" }}
                >
                  {archetype.society.verdictDetail}
                </p>
              </motion.div>

              {/* Your axis scores */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className="p-6 border mb-8"
                style={{
                  background: "oklch(0.17 0.008 260)",
                  borderColor: "oklch(1 0 0 / 0.08)",
                  borderRadius: "2px",
                }}
              >
                <div
                  className="text-xs font-mono tracking-widest uppercase mb-5"
                  style={{ color: "oklch(0.55 0.01 260)", fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Your Cognitive Profile
                </div>
                <div className="grid grid-cols-5 gap-4">
                  {[
                    { key: "K", label: "Knowledge", desc: "How much you value expertise" },
                    { key: "S", label: "Social", desc: "Collaborative vs extractive" },
                    { key: "A", label: "Agency", desc: "Initiative and action" },
                    { key: "Ac", label: "Accountability", desc: "Ownership of outcomes" },
                    { key: "T", label: "Truth", desc: "Seeking truth vs validation" },
                  ].map((axis, idx) => {
                    const raw = scores[axis.key as keyof AxisScores];
                    const pct = Math.round((raw / 80) * 100);
                    return (
                      <motion.div
                        key={axis.key}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + idx * 0.07, duration: 0.3 }}
                        className="text-center"
                      >
                        <div
                          className="text-2xl font-mono font-bold mb-1"
                          style={{ color: "oklch(0.78 0.16 75)", fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          <AnimatedNumber value={pct} delay={700 + idx * 70} />
                          <span className="text-sm">%</span>
                        </div>
                        <div
                          className="text-xs font-semibold mb-1"
                          style={{ color: "oklch(0.75 0.005 65)", fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {axis.label}
                        </div>
                        <div
                          className="text-xs leading-tight hidden md:block"
                          style={{ color: "oklch(0.40 0.01 260)", fontFamily: "'Inter', sans-serif" }}
                        >
                          {axis.desc}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Share Card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.55, ease: [0.23, 1, 0.32, 1] }}
                className="mb-8"
              >
                <div
                  className="text-xs font-mono tracking-widest uppercase mb-4"
                  style={{ color: "oklch(0.55 0.01 260)", fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Share Your Result
                </div>
                <ShareCard archetypeId={archetypeId} />
              </motion.div>

              {/* Mixed Society Simulator */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.65, ease: [0.23, 1, 0.32, 1] }}
                className="mb-8"
              >
                <MixedSociety />
              </motion.div>

              {/* Actions */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button
                  onClick={() => {
                    sessionStorage.removeItem("olodo_answers");
                    setLocation("/quiz");
                  }}
                  className="px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-150 active:scale-[0.97]"
                  style={{
                    background: "oklch(0.78 0.16 75)",
                    color: "oklch(0.12 0.008 260)",
                    fontFamily: "'Space Grotesk', sans-serif",
                    borderRadius: "2px",
                    letterSpacing: "0.04em",
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "oklch(0.85 0.18 75)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "oklch(0.78 0.16 75)"}
                >
                  Retake Assessment
                </button>
                <button
                  onClick={() => setLocation("/")}
                  className="px-6 py-3 text-sm font-semibold tracking-wide border transition-all duration-150 active:scale-[0.97]"
                  style={{
                    background: "transparent",
                    color: "oklch(0.65 0.01 260)",
                    fontFamily: "'Space Grotesk', sans-serif",
                    borderRadius: "2px",
                    borderColor: "oklch(1 0 0 / 0.12)",
                    letterSpacing: "0.04em",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.78 0.16 75 / 0.4)";
                    (e.currentTarget as HTMLElement).style.color = "oklch(0.78 0.16 75)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "oklch(1 0 0 / 0.12)";
                    (e.currentTarget as HTMLElement).style.color = "oklch(0.65 0.01 260)";
                  }}
                >
                  ← Back to Home
                </button>
              </motion.div>

              {/* Share nudge */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                className="mt-8 pt-8 border-t"
                style={{ borderColor: "oklch(1 0 0 / 0.06)" }}
              >
                <p
                  className="text-xs font-mono"
                  style={{ color: "oklch(0.35 0.01 260)", fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Share your result → #OlodoUprising
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Typewriter reveal for archetype name
function RevealName({ name, accentHex }: { name: string; accentHex: string }) {
  const { displayed, done } = useTypewriter(name, 70, 300);

  return (
    <h1
      className="text-5xl md:text-7xl font-bold"
      style={{ fontFamily: "'Space Grotesk', sans-serif", color: accentHex }}
    >
      {displayed}
      {!done && <span className="typewriter-cursor" />}
    </h1>
  );
}
