/**
 * MixedSociety — Olodo Uprising
 * Blend archetype ratios with sliders and watch societal scores update live.
 * Design: Dark Intelligence Lab
 */

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { ARCHETYPES, SOCIETY_DIMENSIONS, type ArchetypeId } from "@/lib/data";

const ARCHETYPE_LIST: { id: ArchetypeId; label: string; color: string }[] = [
  { id: "builder",   label: "Builder",   color: "#60a5fa" },
  { id: "sage",      label: "Sage",      color: "#34d399" },
  { id: "critic",    label: "Critic",    color: "#a78bfa" },
  { id: "hustler",   label: "Hustler",   color: "#fb923c" },
  { id: "follower",  label: "Follower",  color: "#38bdf8" },
  { id: "performer", label: "Performer", color: "#f472b6" },
  { id: "skeptic",   label: "Skeptic",   color: "#facc15" },
  { id: "olodo",     label: "Olodo",     color: "#f87171" },
];

type Weights = Record<ArchetypeId, number>;

function computeMixedScores(weights: Weights) {
  const total = Object.values(weights).reduce((s, v) => s + v, 0);
  if (total === 0) return { education: 0, economy: 0, governance: 0, cohesion: 0, resilience: 0 };

  return SOCIETY_DIMENSIONS.reduce((acc, dim) => {
    const score = ARCHETYPE_LIST.reduce((s, a) => {
      return s + (weights[a.id] / total) * ARCHETYPES[a.id].society[dim.key];
    }, 0);
    return { ...acc, [dim.key]: Math.round(score) };
  }, {} as Record<string, number>);
}

function getMixedVerdict(scores: Record<string, number>): { label: string; color: string } {
  const avg = Object.values(scores).reduce((s, v) => s + v, 0) / 5;
  if (avg >= 70) return { label: "A society worth living in.", color: "#34d399" };
  if (avg >= 55) return { label: "Functional, but fragile.", color: "#facc15" };
  if (avg >= 40) return { label: "Struggling to hold together.", color: "#fb923c" };
  return { label: "On the edge of collapse.", color: "#f87171" };
}

export default function MixedSociety() {
  const [weights, setWeights] = useState<Weights>({
    builder: 12, sage: 12, critic: 12, hustler: 12,
    follower: 12, performer: 12, skeptic: 12, olodo: 16,
  });

  const scores = useMemo(() => computeMixedScores(weights), [weights]);
  const total = Object.values(weights).reduce((s, v) => s + v, 0);
  const verdict = getMixedVerdict(scores);

  const radarData = SOCIETY_DIMENSIONS.map((d) => ({
    dimension: d.label.split(" & ")[0].split(" ")[0],
    value: scores[d.key] ?? 0,
    fullMark: 100,
  }));

  function handleSlider(id: ArchetypeId, value: number) {
    setWeights((prev) => ({ ...prev, [id]: value }));
  }

  function reset() {
    setWeights({
      builder: 12, sage: 12, critic: 12, hustler: 12,
      follower: 12, performer: 12, skeptic: 12, olodo: 16,
    });
  }

  return (
    <div
      className="p-6 border"
      style={{
        background: "oklch(0.15 0.008 260)",
        borderColor: "oklch(1 0 0 / 0.08)",
        borderRadius: "2px",
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <div
            className="text-xs font-mono tracking-widest uppercase mb-1"
            style={{ color: "oklch(0.78 0.16 75)", fontFamily: "'JetBrains Mono', monospace" }}
          >
            Mixed Society Simulator
          </div>
          <p
            className="text-sm"
            style={{ color: "oklch(0.55 0.01 260)", fontFamily: "'Inter', sans-serif" }}
          >
            Blend archetype ratios. Watch what society becomes.
          </p>
        </div>
        <button
          onClick={reset}
          className="text-xs font-mono px-3 py-1.5 border transition-colors duration-150"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            borderColor: "oklch(1 0 0 / 0.12)",
            color: "oklch(0.45 0.01 260)",
            borderRadius: "2px",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.color = "oklch(0.78 0.16 75)";
            (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.78 0.16 75 / 0.4)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.color = "oklch(0.45 0.01 260)";
            (e.currentTarget as HTMLElement).style.borderColor = "oklch(1 0 0 / 0.12)";
          }}
        >
          Reset
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Sliders */}
        <div className="flex flex-col gap-4">
          {ARCHETYPE_LIST.map((a) => {
            const pct = total > 0 ? Math.round((weights[a.id] / total) * 100) : 0;
            return (
              <div key={a.id}>
                <div className="flex justify-between items-center mb-1.5">
                  <span
                    className="text-xs font-semibold"
                    style={{ color: a.color, fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {a.label}
                  </span>
                  <span
                    className="text-xs font-mono"
                    style={{ color: "oklch(0.55 0.01 260)", fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {pct}%
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={weights[a.id]}
                    onChange={(e) => handleSlider(a.id, parseInt(e.target.value))}
                    className="w-full h-1 appearance-none rounded-none outline-none"
                    style={{
                      background: `linear-gradient(to right, ${a.color} 0%, ${a.color} ${pct}%, oklch(1 0 0 / 0.08) ${pct}%, oklch(1 0 0 / 0.08) 100%)`,
                      accentColor: a.color,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Radar + verdict */}
        <div className="flex flex-col gap-4">
          <ResponsiveContainer width="100%" height={240}>
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
                name="Mixed Society"
                dataKey="value"
                stroke="oklch(0.78 0.16 75)"
                fill="oklch(0.78 0.16 75)"
                fillOpacity={0.12}
                strokeWidth={2}
              />
              <Tooltip
                contentStyle={{
                  background: "oklch(0.17 0.008 260)",
                  border: "1px solid oklch(0.78 0.16 75 / 0.3)",
                  borderRadius: "2px",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "12px",
                  color: "oklch(0.92 0.005 65)",
                }}
                formatter={(value: number) => [`${value}/100`, "Score"]}
              />
            </RadarChart>
          </ResponsiveContainer>

          {/* Dimension scores */}
          <div className="flex flex-col gap-2">
            {SOCIETY_DIMENSIONS.map((dim) => {
              const score = scores[dim.key] ?? 0;
              const barColor =
                score >= 70 ? "#34d399" :
                score >= 45 ? "oklch(0.78 0.16 75)" :
                "#f87171";
              return (
                <div key={dim.key}>
                  <div className="flex justify-between mb-1">
                    <span
                      className="text-xs"
                      style={{ color: "oklch(0.55 0.01 260)", fontFamily: "'Inter', sans-serif" }}
                    >
                      {dim.label}
                    </span>
                    <span
                      className="text-xs font-mono"
                      style={{ color: barColor, fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {score}/100
                    </span>
                  </div>
                  <div className="score-bar-track">
                    <motion.div
                      className="score-bar-fill"
                      animate={{ width: `${score}%` }}
                      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                      style={{ background: barColor }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Verdict */}
          <div
            className="p-4 border-l-2 mt-2"
            style={{
              background: "oklch(0.17 0.008 260)",
              borderColor: verdict.color,
              borderRadius: "0 2px 2px 0",
            }}
          >
            <p
              className="text-sm font-semibold"
              style={{ color: verdict.color, fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {verdict.label}
            </p>
            <p
              className="text-xs mt-1"
              style={{ color: "oklch(0.45 0.01 260)", fontFamily: "'Inter', sans-serif" }}
            >
              Weighted average across all 5 dimensions: <span style={{ color: verdict.color }}>{Math.round(Object.values(scores).reduce((s, v) => s + v, 0) / 5)}/100</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
