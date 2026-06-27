/**
 * Quiz Page — Olodo Uprising
 * Design: Dark Intelligence Lab
 * One question at a time, interrogation feel, no going back
 */

import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { QUESTIONS } from "@/lib/data";
import LogoIcon from "@/components/LogoIcon";

export default function Quiz() {
  const [, setLocation] = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const question = QUESTIONS[currentIndex];
  const progress = (currentIndex / QUESTIONS.length) * 100;
  const isLast = currentIndex === QUESTIONS.length - 1;

  // Reset selected option when question changes
  useEffect(() => {
    setSelectedOption(null);
  }, [currentIndex]);

  function handleSelect(optionId: string) {
    if (isTransitioning) return;
    setSelectedOption(optionId);

    // Auto-advance after brief pause
    setTimeout(() => {
      const newAnswers = { ...answers, [question.id]: optionId };
      setAnswers(newAnswers);

      if (isLast) {
        // Store answers and go to results
        sessionStorage.setItem("olodo_answers", JSON.stringify(newAnswers));
        setLocation("/results");
      } else {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentIndex((i) => i + 1);
          setIsTransitioning(false);
        }, 200);
      }
    }, 350);
  }

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "oklch(0.12 0.008 260)" }}
    >
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="progress-track">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Header */}
      <header className="flex items-center justify-between px-6 py-5 md:px-12 pt-8">
        <div className="flex items-center gap-3">
          <LogoIcon size={28} />
          <span
            className="text-xs font-mono tracking-widest uppercase hidden sm:block"
            style={{ color: "oklch(0.40 0.01 260)", fontFamily: "'JetBrains Mono', monospace" }}
          >
            Olodo Uprising
          </span>
        </div>

        <div
          className="text-xs font-mono"
          style={{ color: "oklch(0.40 0.01 260)", fontFamily: "'JetBrains Mono', monospace" }}
        >
          <span style={{ color: "oklch(0.78 0.16 75)" }}>{currentIndex + 1}</span>
          <span> / {QUESTIONS.length}</span>
        </div>
      </header>

      {/* Question area */}
      <main className="flex-1 flex flex-col justify-center px-6 md:px-12 py-8 max-w-2xl mx-auto w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* Question number label */}
            <div
              className="text-xs font-mono tracking-widest uppercase mb-6"
              style={{ color: "oklch(0.78 0.16 75)", fontFamily: "'JetBrains Mono', monospace" }}
            >
              Question {currentIndex + 1}
            </div>

            {/* Question text */}
            <h2
              className="text-2xl md:text-3xl font-semibold leading-snug mb-10"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "oklch(0.92 0.005 65)",
              }}
            >
              {question.text}
            </h2>

            {/* Answer options */}
            <div className="flex flex-col gap-3">
              {question.options.map((option, idx) => (
                <motion.button
                  key={option.id}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: idx * 0.06,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  className={`answer-option ${selectedOption === option.id ? "selected" : ""}`}
                  onClick={() => handleSelect(option.id)}
                  disabled={isTransitioning || selectedOption !== null}
                >
                  <span
                    className="font-mono text-xs mr-3"
                    style={{
                      color: selectedOption === option.id
                        ? "oklch(0.78 0.16 75)"
                        : "oklch(0.35 0.01 260)",
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {option.id.toUpperCase()}
                  </span>
                  {option.text}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom hint */}
      <footer className="px-6 md:px-12 pb-8 text-center">
        <p
          className="text-xs font-mono"
          style={{ color: "oklch(0.28 0.01 260)", fontFamily: "'JetBrains Mono', monospace" }}
        >
          Select an answer to continue — no going back
        </p>
      </footer>
    </div>
  );
}
