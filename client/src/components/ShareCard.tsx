/**
 * ShareCard — Olodo Uprising
 * Renders a styled results card and lets the user download it as a PNG.
 * Uses html2canvas to capture the card DOM node.
 * Design: Dark Intelligence Lab
 */

import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import { motion } from "framer-motion";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";
import { ARCHETYPES, SOCIETY_DIMENSIONS, type ArchetypeId } from "@/lib/data";

interface ShareCardProps {
  archetypeId: ArchetypeId;
}

export default function ShareCard({ archetypeId }: ShareCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);
  const [copied, setCopied] = useState(false);

  const archetype = ARCHETYPES[archetypeId];

  const radarData = SOCIETY_DIMENSIONS.map((d) => ({
    dimension: d.label.split(" & ")[0].split(" ")[0],
    value: archetype.society[d.key],
    fullMark: 100,
  }));

  async function downloadCard() {
    if (!cardRef.current) return;
    setDownloading(true);
    try {
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: "#1a1a2e",
        scale: 2,
        useCORS: true,
        logging: false,
      });
      const link = document.createElement("a");
      link.download = `olodo-uprising-${archetypeId}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (e) {
      console.error("Share card generation failed:", e);
    } finally {
      setDownloading(false);
    }
  }

  async function copyShareText() {
    const text = `I took the Olodo Uprising assessment.\n\nI am: ${archetype.name}\n"${archetype.tagline}"\n\n10,000 of me in a city: ${archetype.society.verdict}\n\n#OlodoUprising — oloudrise-vo2fppsm.manus.space`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback: do nothing
    }
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Card preview */}
      <div
        ref={cardRef}
        style={{
          background: "linear-gradient(135deg, oklch(0.14 0.010 260) 0%, oklch(0.10 0.008 260) 100%)",
          border: `1px solid ${archetype.accentHex}30`,
          borderRadius: "4px",
          padding: "28px",
          width: "100%",
          maxWidth: "480px",
          position: "relative",
          overflow: "hidden",
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        {/* Background accent */}
        <div
          style={{
            position: "absolute",
            top: "-40px",
            right: "-40px",
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${archetype.accentHex}18 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />

        {/* Top row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
          <div>
            <div
              style={{
                fontSize: "9px",
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "oklch(0.45 0.01 260)",
                marginBottom: "6px",
              }}
            >
              Olodo Uprising · Behavioral Profile
            </div>
            <div
              style={{
                fontSize: "26px",
                fontWeight: "700",
                color: archetype.accentHex,
                lineHeight: "1.1",
              }}
            >
              {archetype.name}
            </div>
            <div
              style={{
                fontSize: "12px",
                color: "oklch(0.55 0.01 260)",
                marginTop: "4px",
                fontStyle: "italic",
              }}
            >
              "{archetype.tagline}"
            </div>
          </div>

          {/* Mini radar */}
          <div style={{ width: "100px", height: "80px", flexShrink: 0 }}>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                <PolarGrid stroke="oklch(1 0 0 / 0.08)" />
                <PolarAngleAxis dataKey="dimension" tick={false} />
                <Radar
                  dataKey="value"
                  stroke={archetype.accentHex}
                  fill={archetype.accentHex}
                  fillOpacity={0.2}
                  strokeWidth={1.5}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Verdict */}
        <div
          style={{
            borderLeft: `2px solid ${archetype.accentHex}`,
            paddingLeft: "12px",
            marginBottom: "16px",
          }}
        >
          <div
            style={{
              fontSize: "11px",
              fontFamily: "'JetBrains Mono', monospace",
              color: "oklch(0.40 0.01 260)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "4px",
            }}
          >
            10,000 of me in a city:
          </div>
          <div
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: archetype.accentHex,
            }}
          >
            {archetype.society.verdict}
          </div>
        </div>

        {/* Score bars */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "18px" }}>
          {SOCIETY_DIMENSIONS.map((dim) => {
            const score = archetype.society[dim.key];
            const barColor = score >= 70 ? "#34d399" : score >= 45 ? archetype.accentHex : "#f87171";
            return (
              <div key={dim.key} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div
                  style={{
                    width: "70px",
                    fontSize: "9px",
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "oklch(0.45 0.01 260)",
                    flexShrink: 0,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                  }}
                >
                  {dim.label.split(" ")[0]}
                </div>
                <div
                  style={{
                    flex: 1,
                    height: "3px",
                    background: "oklch(1 0 0 / 0.06)",
                    borderRadius: "2px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${score}%`,
                      height: "100%",
                      background: barColor,
                      borderRadius: "2px",
                    }}
                  />
                </div>
                <div
                  style={{
                    width: "28px",
                    fontSize: "9px",
                    fontFamily: "'JetBrains Mono', monospace",
                    color: barColor,
                    textAlign: "right",
                    flexShrink: 0,
                  }}
                >
                  {score}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid oklch(1 0 0 / 0.06)",
            paddingTop: "12px",
          }}
        >
          <div
            style={{
              fontSize: "9px",
              fontFamily: "'JetBrains Mono', monospace",
              color: "oklch(0.30 0.01 260)",
              letterSpacing: "0.06em",
            }}
          >
            #OlodoUprising
          </div>
          <div
            style={{
              fontSize: "9px",
              fontFamily: "'JetBrains Mono', monospace",
              color: "oklch(0.30 0.01 260)",
            }}
          >
            oloudrise-vo2fppsm.manus.space
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 flex-wrap">
        <button
          onClick={downloadCard}
          disabled={downloading}
          className="px-5 py-2.5 text-xs font-semibold tracking-wide transition-all duration-150 active:scale-[0.97] disabled:opacity-60"
          style={{
            background: "oklch(0.78 0.16 75)",
            color: "oklch(0.12 0.008 260)",
            fontFamily: "'Space Grotesk', sans-serif",
            borderRadius: "2px",
            letterSpacing: "0.05em",
          }}
          onMouseEnter={e => !downloading && ((e.currentTarget as HTMLElement).style.background = "oklch(0.85 0.18 75)")}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "oklch(0.78 0.16 75)"}
        >
          {downloading ? "Generating..." : "Download Card"}
        </button>

        <button
          onClick={copyShareText}
          className="px-5 py-2.5 text-xs font-semibold tracking-wide border transition-all duration-150 active:scale-[0.97]"
          style={{
            background: "transparent",
            color: copied ? "oklch(0.78 0.16 75)" : "oklch(0.55 0.01 260)",
            fontFamily: "'Space Grotesk', sans-serif",
            borderRadius: "2px",
            borderColor: copied ? "oklch(0.78 0.16 75 / 0.5)" : "oklch(1 0 0 / 0.12)",
            letterSpacing: "0.05em",
          }}
          onMouseEnter={e => {
            if (!copied) {
              (e.currentTarget as HTMLElement).style.color = "oklch(0.78 0.16 75)";
              (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.78 0.16 75 / 0.4)";
            }
          }}
          onMouseLeave={e => {
            if (!copied) {
              (e.currentTarget as HTMLElement).style.color = "oklch(0.55 0.01 260)";
              (e.currentTarget as HTMLElement).style.borderColor = "oklch(1 0 0 / 0.12)";
            }
          }}
        >
          {copied ? "Copied!" : "Copy Share Text"}
        </button>
      </div>

      <p
        className="text-xs"
        style={{ color: "oklch(0.35 0.01 260)", fontFamily: "'JetBrains Mono', monospace" }}
      >
        Share on X/Twitter, Instagram, or WhatsApp → #OlodoUprising
      </p>
    </div>
  );
}
