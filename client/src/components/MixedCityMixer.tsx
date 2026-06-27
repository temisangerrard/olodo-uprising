/**
 * MixedCityMixer — "What if the city had a mix of archetypes?"
 * Users can adjust sliders for each archetype and see the blended societal outcome.
 */

import { useState, useMemo } from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { ARCHETYPES, SOCIETY_DIMENSIONS, type ArchetypeId } from "@/lib/data";

const ARCHETYPE_LIST: { id: ArchetypeId; name: string; color: string }[] = [
  { id: "builder", name: "The Builder", color: "#60a5fa" },
  { id: "sage", name: "The Sage", color: "#34d399" },
  { id: "critic", name: "The Critic", color: "#a78bfa" },
  { id: "hustler", name: "The Hustler", color: "#fb923c" },
  { id: "follower", name: "The Follower", color: "#38bdf8" },
  { id: "performer", name: "The Performer", color: "#f472b6" },
  { id: "skeptic", name: "The Skeptic", color: "#facc15" },
  { id: "olodo", name: "The Olodo", color: "#f87171" },
];

export default function MixedCityMixer() {
  const [expanded, setExpanded] = useState(false);
  const [mix, setMix] = useState<Record<ArchetypeId, number>>({
    builder: 25,
    sage: 15,
    critic: 10,
    hustler: 15,
    follower: 10,
    performer: 10,
    skeptic: 5,
    olodo: 10,
  });

  const total = Object.values(mix).reduce((a, b) => a + b, 0);

  // Compute blended society scores
  const blendedScores = useMemo(() => {
    const scores: Record<string, number> = {};
    SOCIETY_DIMENSIONS.forEach(dim => {
      scores[dim.key] = 0;
    });

    ARCHETYPE_LIST.forEach(({ id }) => {
      const archetype = ARCHETYPES[id];
      const weight = mix[id] / total;
      SOCIETY_DIMENSIONS.forEach(dim => {
        scores[dim.key] += (archetype.societalProfile[dim.key as keyof typeof archetype.societalProfile] || 0) * weight;
      });
    });

    return scores;
  }, [mix, total]);

  const radarData = SOCIETY_DIMENSIONS.map(dim => ({
    dimension: dim.label,
    value: Math.round(blendedScores[dim.key]),
    fullMark: 100,
  }));

  // Generate verdict based on dominant archetype
  const dominant = ARCHETYPE_LIST.reduce((a, b) => (mix[a.id] >= mix[b.id] ? a : b));
  const dominantArchetype = ARCHETYPES[dominant.id];

  const handleSliderChange = (id: ArchetypeId, value: number) => {
    setMix(prev => ({ ...prev, [id]: value }));
  };

  if (!expanded) {
    return (
      <div
        className="border p-6 cursor-pointer transition-all duration-150"
        style={{
          background: "oklch(0.17 0.008 260)",
          borderColor: "oklch(1 0 0 / 0.08)",
          borderRadius: "2px",
        }}
        onClick={() => setExpanded(true)}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.78 0.16 75 / 0.3)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.borderColor = "oklch(1 0 0 / 0.08)";
        }}
      >
        <div className="flex items-center justify-between">
          <div>
            <p
              className="text-xs font-mono tracking-widest uppercase mb-2"
              style={{ color: "oklch(0.55 0.01 260)", fontFamily: "'JetBrains Mono', monospace" }}
            >
              Advanced Simulation
            </p>
            <p
              className="text-lg font-semibold"
              style={{ color: "oklch(0.92 0.005 65)", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Mix the City
            </p>
            <p
              className="text-sm mt-1"
              style={{ color: "oklch(0.55 0.01 260)", fontFamily: "'Inter', sans-serif" }}
            >
              What if the city had a blend of archetypes? Adjust the mix.
            </p>
          </div>
          <div
            className="text-2xl"
            style={{ color: "oklch(0.78 0.16 75)" }}
          >
            →
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="border p-6"
      style={{
        background: "oklch(0.17 0.008 260)",
        borderColor: "oklch(1 0 0 / 0.08)",
        borderRadius: "2px",
      }}
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <p
            className="text-xs font-mono tracking-widest uppercase mb-1"
            style={{ color: "oklch(0.55 0.01 260)", fontFamily: "'JetBrains Mono', monospace" }}
          >
            Mixed City Simulation
          </p>
          <p
            className="text-lg font-semibold"
            style={{ color: "oklch(0.92 0.005 65)", fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Blend the Archetypes
          </p>
        </div>
        <button
          onClick={() => setExpanded(false)}
          className="text-xs font-mono px-2 py-1 border transition-colors duration-150"
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
          Collapse
        </button>
      </div>

      {/* Sliders */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {ARCHETYPE_LIST.map(({ id, name, color }) => (
          <div key={id}>
            <div className="flex items-center justify-between mb-1">
              <span
                className="text-xs font-semibold"
                style={{ color, fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {name.replace("The ", "")}
              </span>
              <span
                className="text-xs font-mono"
                style={{ color: "oklch(0.55 0.01 260)", fontFamily: "'JetBrains Mono', monospace" }}
              >
                {mix[id]}%
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={mix[id]}
              onChange={e => handleSliderChange(id, parseInt(e.target.value))}
              className="w-full h-1 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, ${color} 0%, ${color} ${mix[id]}%, oklch(0.25 0.01 260) ${mix[id]}%, oklch(0.25 0.01 260) 100%)`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Radar chart */}
      <div className="h-64 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={radarData}>
            <PolarGrid stroke="oklch(1 0 0 / 0.08)" />
            <PolarAngleAxis
              dataKey="dimension"
              tick={{ fill: "oklch(0.55 0.01 260)", fontSize: 11, fontFamily: "'JetBrains Mono', monospace" }}
            />
            <Radar
              name="Mixed City"
              dataKey="value"
              stroke={dominant.color}
              fill={dominant.color}
              fillOpacity={0.2}
              strokeWidth={2}
            />
            <Tooltip
              contentStyle={{
                background: "oklch(0.17 0.008 260)",
                border: "1px solid oklch(1 0 0 / 0.12)",
                borderRadius: "2px",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "12px",
              }}
              labelStyle={{ color: "oklch(0.75 0.005 65)" }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Verdict */}
      <div
        className="border-t pt-4"
        style={{ borderColor: "oklch(1 0 0 / 0.06)" }}
      >
        <p
          className="text-xs font-mono mb-2"
          style={{ color: "oklch(0.45 0.01 260)", fontFamily: "'JetBrains Mono', monospace" }}
        >
          Dominant archetype: {dominant.name}
        </p>
        <p
          className="text-sm"
          style={{ color: "oklch(0.75 0.005 65)", fontFamily: "'Inter', sans-serif" }}
        >
          {dominantArchetype.societyVerdict}
        </p>
      </div>
    </div>
  );
}
