/**
 * TwitterVerify — Paste tweets to verify your archetype
 * Dark Intelligence Lab aesthetic
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ARCHETYPES, type ArchetypeId } from "@/lib/data";
import { getTwitterArchetype, analyzeTweets } from "@/lib/twitterAnalysis";
import type { AxisScores } from "@/lib/data";

interface TwitterVerifyProps {
  quizArchetypeId: ArchetypeId;
  accentHex: string;
}

export default function TwitterVerify({ quizArchetypeId, accentHex }: TwitterVerifyProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [tweetText, setTweetText] = useState("");
  const [twitterArchetypeId, setTwitterArchetypeId] = useState<ArchetypeId | null>(null);
  const [twitterScores, setTwitterScores] = useState<AxisScores | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const quizArchetype = ARCHETYPES[quizArchetypeId];
  const isMatch = twitterArchetypeId === quizArchetypeId;
  const twitterArchetype = twitterArchetypeId ? ARCHETYPES[twitterArchetypeId] : null;

  const handleAnalyze = () => {
    if (tweetText.trim().length < 20) return;
    setIsAnalyzing(true);
    // Small delay for UX feel
    setTimeout(() => {
      const scores = analyzeTweets(tweetText);
      const archetypeId = getTwitterArchetype(tweetText);
      setTwitterScores(scores);
      setTwitterArchetypeId(archetypeId);
      setIsAnalyzing(false);
    }, 800);
  };

  const handleReset = () => {
    setTweetText("");
    setTwitterArchetypeId(null);
    setTwitterScores(null);
  };

  return (
    <div
      className="border"
      style={{
        background: "oklch(0.17 0.008 260)",
        borderColor: "oklch(1 0 0 / 0.08)",
        borderRadius: "2px",
      }}
    >
      {/* Header — always visible */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left transition-colors duration-150"
        style={{ borderBottom: isOpen ? "1px solid oklch(1 0 0 / 0.06)" : "none" }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.background = "oklch(0.19 0.01 260)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.background = "transparent";
        }}
      >
        <div className="flex items-center gap-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill={accentHex}/>
          </svg>
          <div>
            <div
              className="text-xs font-mono tracking-widest uppercase"
              style={{ color: "oklch(0.55 0.01 260)", fontFamily: "'JetBrains Mono', monospace" }}
            >
              Verify With Twitter
            </div>
            <div
              className="text-xs mt-0.5"
              style={{ color: "oklch(0.35 0.01 260)", fontFamily: "'Inter', sans-serif" }}
            >
              Paste your recent tweets — see if your timeline matches your archetype
            </div>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ color: "oklch(0.40 0.01 260)" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <div className="p-6">
              {!twitterArchetypeId ? (
                <>
                  <textarea
                    value={tweetText}
                    onChange={e => setTweetText(e.target.value)}
                    placeholder="Paste your recent tweets here... (copy 5-10 tweets from your timeline for best results)"
                    className="w-full h-40 p-4 text-sm resize-none focus:outline-none transition-colors duration-150"
                    style={{
                      background: "oklch(0.12 0.008 260)",
                      border: "1px solid oklch(1 0 0 / 0.1)",
                      borderRadius: "2px",
                      color: "oklch(0.75 0.005 65)",
                      fontFamily: "'Inter', sans-serif",
                      lineHeight: "1.6",
                    }}
                    onFocus={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = `${accentHex}50`;
                    }}
                    onBlur={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = "oklch(1 0 0 / 0.1)";
                    }}
                  />
                  <div className="flex items-center justify-between mt-4">
                    <div
                      className="text-xs font-mono"
                      style={{ color: "oklch(0.35 0.01 260)", fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {tweetText.length < 20
                        ? "Paste at least 20 characters"
                        : `${tweetText.split(/\s+/).filter(Boolean).length} words`}
                    </div>
                    <button
                      onClick={handleAnalyze}
                      disabled={tweetText.trim().length < 20 || isAnalyzing}
                      className="px-5 py-2.5 text-xs font-semibold tracking-wide transition-all duration-150 active:scale-[0.97] disabled:opacity-30 disabled:cursor-not-allowed"
                      style={{
                        background: accentHex,
                        color: "oklch(0.12 0.008 260)",
                        fontFamily: "'Space Grotesk', sans-serif",
                        borderRadius: "2px",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {isAnalyzing ? "ANALYSING..." : "ANALYSE TIMELINE"}
                    </button>
                  </div>
                </>
              ) : (
                /* Results */
                <div>
                  {/* Match/Mismatch banner */}
                  <div
                    className="p-5 mb-5 border-l-3"
                    style={{
                      background: isMatch
                        ? `${accentHex}10`
                        : `${twitterArchetype!.accentHex}10`,
                      borderLeftColor: isMatch ? accentHex : twitterArchetype!.accentHex,
                      borderLeftWidth: "3px",
                      borderRadius: "2px",
                    }}
                  >
                    <div
                      className="text-xs font-mono tracking-widest uppercase mb-2"
                      style={{
                        color: isMatch ? accentHex : twitterArchetype!.accentHex,
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {isMatch ? "✓ Timeline Confirmed" : "⚡ Interesting Dissonance"}
                    </div>
                    <p
                      className="text-base font-semibold mb-1"
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        color: "oklch(0.92 0.005 65)",
                      }}
                    >
                      {isMatch
                        ? `Your tweets match — Twitter says you're ${twitterArchetype!.name} too.`
                        : `Your tweets suggest ${twitterArchetype!.name}, but the quiz says ${quizArchetype.name}.`}
                    </p>
                    <p
                      className="text-sm"
                      style={{
                        color: "oklch(0.55 0.01 260)",
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {isMatch
                        ? "Your public voice aligns with your private answers. Consistent."
                        : "The gap between how you answer and how you post tells its own story."}
                    </p>
                  </div>

                  {/* Twitter archetype card */}
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className="w-12 h-12 flex items-center justify-center border"
                      style={{
                        borderColor: `${twitterArchetype!.accentHex}40`,
                        background: `${twitterArchetype!.accentHex}10`,
                        borderRadius: "2px",
                      }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill={twitterArchetype!.accentHex}/>
                      </svg>
                    </div>
                    <div>
                      <div
                        className="text-lg font-bold"
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          color: twitterArchetype!.accentHex,
                        }}
                      >
                        {twitterArchetype!.name}
                      </div>
                      <div
                        className="text-xs"
                        style={{
                          color: "oklch(0.55 0.01 260)",
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        "{twitterArchetype!.tagline}"
                      </div>
                    </div>
                  </div>

                  {/* Axis comparison */}
                  {twitterScores && (
                    <div className="grid grid-cols-5 gap-3 mb-5">
                      {[
                        { key: "K", label: "K" },
                        { key: "S", label: "S" },
                        { key: "A", label: "A" },
                        { key: "Ac", label: "Ac" },
                        { key: "T", label: "T" },
                      ].map(axis => {
                        const val = twitterScores[axis.key as keyof AxisScores];
                        const pct = Math.round((val / 80) * 100);
                        return (
                          <div key={axis.key} className="text-center">
                            <div
                              className="text-lg font-mono font-bold"
                              style={{
                                color: twitterArchetype!.accentHex,
                                fontFamily: "'JetBrains Mono', monospace",
                              }}
                            >
                              {pct}%
                            </div>
                            <div
                              className="text-xs"
                              style={{
                                color: "oklch(0.40 0.01 260)",
                                fontFamily: "'JetBrains Mono', monospace",
                              }}
                            >
                              {axis.label}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex gap-3">
                    <button
                      onClick={handleReset}
                      className="px-4 py-2 text-xs font-mono tracking-wider border transition-colors duration-150"
                      style={{
                        borderColor: "oklch(1 0 0 / 0.12)",
                        color: "oklch(0.55 0.01 260)",
                        fontFamily: "'JetBrains Mono', monospace",
                        borderRadius: "2px",
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = `${accentHex}50`;
                        (e.currentTarget as HTMLElement).style.color = accentHex;
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = "oklch(1 0 0 / 0.12)";
                        (e.currentTarget as HTMLElement).style.color = "oklch(0.55 0.01 260)";
                      }}
                    >
                      Try Again
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
