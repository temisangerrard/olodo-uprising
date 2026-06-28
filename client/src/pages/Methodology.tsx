import { Link } from "wouter";

const Methodology = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(180deg, oklch(0.08 0.02 260) 0%, oklch(0.12 0.03 260) 100%)",
        color: "oklch(0.90 0.01 260)",
      }}
    >
      {/* Navbar */}
      <nav
        className="border-b"
        style={{
          borderColor: "oklch(0.20 0.02 260)",
          background: "oklch(0.10 0.02 260 / 0.8)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <span
              className="text-lg font-bold tracking-tight cursor-pointer"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "oklch(0.95 0.01 260)",
              }}
            >
              OLODO UPRISING
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/">
              <span
                className="text-sm cursor-pointer hover:opacity-70 transition-opacity"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "oklch(0.70 0.02 260)",
                }}
              >
                Quiz
              </span>
            </Link>
            <Link href="/methodology">
              <span
                className="text-sm cursor-pointer"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "oklch(0.90 0.01 260)",
                }}
              >
                Methodology
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Title */}
        <div className="mb-16">
          <h1
            className="text-5xl font-bold mb-6 tracking-tight"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "oklch(0.95 0.01 260)",
            }}
          >
            Methodology & Theoretical Framework
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{
              color: "oklch(0.70 0.02 260)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            How Olodo Uprising measures behavioral archetypes and what the science says.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="/paper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all hover:scale-105"
              style={{
                background: "oklch(0.95 0.01 260)",
                color: "oklch(0.10 0.02 260)",
                fontFamily: "'JetBrains Mono', monospace",
                borderRadius: "2px",
              }}
            >
              Download PDF
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 1v10M8 11l-4-4M8 11l4-4M2 14h12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                />
              </svg>
            </a>
            <a
              href="https://github.com/temisangerrard/olodo-uprising"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all hover:opacity-70"
              style={{
                border: "1px solid oklch(0.30 0.02 260)",
                color: "oklch(0.90 0.01 260)",
                fontFamily: "'JetBrains Mono', monospace",
                borderRadius: "2px",
              }}
            >
              View Source
            </a>
          </div>
        </div>

        {/* Abstract */}
        <section className="mb-16">
          <h2
            className="text-2xl font-bold mb-4 tracking-tight"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "oklch(0.95 0.01 260)",
            }}
          >
            Abstract
          </h2>
          <div
            className="p-6 border-l-2"
            style={{
              borderColor: "oklch(0.50 0.15 260)",
              background: "oklch(0.12 0.02 260 / 0.5)",
            }}
          >
            <p
              className="text-base leading-relaxed"
              style={{
                color: "oklch(0.85 0.01 260)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Olodo Uprising is a behavioral archetype assessment tool designed to reveal how individuals would behave if replicated 10,000 times in a shared society. The core question: <em>Does your presence make society better or worse?</em> This paper outlines the theoretical foundations, design principles, and methodology behind the assessment. Drawing on five decades of research in personality psychology, moral foundations theory, behavioral economics, and social identity theory, we present a framework for measuring behavioral tendencies that determine societal outcomes.
            </p>
          </div>
        </section>

        {/* Core Concept */}
        <section className="mb-16">
          <h2
            className="text-2xl font-bold mb-6 tracking-tight"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "oklch(0.95 0.01 260)",
            }}
          >
            The Simulation Hypothesis
          </h2>
          <p
            className="text-base leading-relaxed mb-6"
            style={{
              color: "oklch(0.80 0.01 260)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            If we placed 10,000 copies of you in a radius, what kind of society would emerge? The tool doesn't ask "what do you believe?" It asks "what would you <strong>do</strong>?" — because behavior, not belief, determines societal outcomes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: "Builder", outcome: "Industrialized, functioning infrastructure, merit-based systems", color: "#60a5fa" },
              { name: "Sage", outcome: "Educated, thoughtful discourse, but potential paralysis by analysis", color: "#a78bfa" },
              { name: "Skeptic", outcome: "Critical thinking culture, but potential cynicism and inaction", color: "#f472b6" },
              { name: "Opportunist", outcome: "Extractive society, corruption, zero-sum competition", color: "#fb923c" },
              { name: "Intellectual", outcome: "Sophisticated rationalizations for dishonesty, educated corruption", color: "#fbbf24" },
            ].map((archetype) => (
              <div
                key={archetype.name}
                className="p-4 border-l-2"
                style={{
                  borderColor: archetype.color,
                  background: "oklch(0.12 0.02 260 / 0.3)",
                }}
              >
                <div
                  className="text-sm font-bold mb-2"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: archetype.color,
                  }}
                >
                  10,000 {archetype.name}s
                </div>
                <div
                  className="text-sm"
                  style={{
                    color: "oklch(0.75 0.01 260)",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {archetype.outcome}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Theoretical Foundations */}
        <section className="mb-16">
          <h2
            className="text-2xl font-bold mb-6 tracking-tight"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "oklch(0.95 0.01 260)",
            }}
          >
            Theoretical Foundations
          </h2>

          {/* Foundation 1 */}
          <div className="mb-8">
            <h3
              className="text-lg font-bold mb-3"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "oklch(0.90 0.01 260)",
              }}
            >
              1. Intelligence as a Tool, Not a Moral Compass
            </h3>
            <p
              className="text-base leading-relaxed mb-4"
              style={{
                color: "oklch(0.80 0.01 260)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <strong>Kahan's Motivated Numeracy Experiment (2017)</strong>: When data were presented neutrally, high-numeracy subjects performed better. When the <em>same data</em> were framed as gun-control results, high-numeracy subjects became <strong>more polarized</strong> — not less. Cognitive ability is not a corrective to motivated reasoning — it is a resource for it.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{
                color: "oklch(0.80 0.01 260)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <strong>Implication</strong>: The "Intellectual" archetype is not defined by low intelligence. It's defined by <strong>high intelligence + low truthfulness + low accountability</strong>. These individuals use their education to construct sophisticated justifications for dishonest behavior.
            </p>
          </div>

          {/* Foundation 2 */}
          <div className="mb-8">
            <h3
              className="text-lg font-bold mb-3"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "oklch(0.90 0.01 260)",
              }}
            >
              2. Dark Triad Traits & Education
            </h3>
            <p
              className="text-base leading-relaxed mb-4"
              style={{
                color: "oklch(0.80 0.01 260)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Dark Triad traits (narcissism, Machiavellianism, psychopathy) predict dishonesty <strong>independently of education level</strong>. Educated people with Dark Triad traits are <em>more</em> dangerous because they can construct convincing rationalizations and evade detection.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{
                color: "oklch(0.80 0.01 260)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <strong>Nigerian Context</strong>: Nigerian academics have been incorporated into the "corruption enterprise" (Omotola, CODESRIA). The academy's crisis mirrors the state's crisis — intellectuals offer "insincere advice and policy options to government so as to advance selfish interests."
            </p>
          </div>

          {/* Foundation 3 */}
          <div className="mb-8">
            <h3
              className="text-lg font-bold mb-3"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "oklch(0.90 0.01 260)",
              }}
            >
              3. Moral Foundations Theory (Haidt)
            </h3>
            <p
              className="text-base leading-relaxed mb-4"
              style={{
                color: "oklch(0.80 0.01 260)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Six innate moral intuitions form the basis of ethical reasoning across cultures: Care/Harm, Fairness/Cheating, Loyalty/Betrayal, Authority/Subversion, Sanctity/Degradation, Liberty/Oppression.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{
                color: "oklch(0.80 0.01 260)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <strong>Key Insight</strong>: Moral intuitions come first, strategic reasoning second. People have automatic affective flashes when encountering moral patterns; post-hoc reasoning serves to justify these intuitions.
            </p>
          </div>

          {/* Foundation 4 */}
          <div className="mb-8">
            <h3
              className="text-lg font-bold mb-3"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "oklch(0.90 0.01 260)",
              }}
            >
              4. Cognitive Dissonance & Motivated Reasoning
            </h3>
            <p
              className="text-base leading-relaxed mb-4"
              style={{
                color: "oklch(0.80 0.01 260)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              When beliefs conflict with behavior or new evidence, people experience psychological tension. Resolution typically involves <strong>rationalization</strong> — adjusting attitudes to restore consistency. People with greater cognitive ability can be <em>more</em> susceptible to rationalizing mistakes because they're confident in their reasoning prowess.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{
                color: "oklch(0.80 0.01 260)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <strong>Moral Disengagement</strong>: People decouple internal moral standards from behavior to perform unethical acts without guilt. Intelligence positively predicts moral justification — smarter people are better at constructing moral-sounding excuses.
            </p>
          </div>

          {/* Foundation 5 */}
          <div className="mb-8">
            <h3
              className="text-lg font-bold mb-3"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "oklch(0.90 0.01 260)",
              }}
            >
              5. Social Identity Theory & Tribal Behavior
            </h3>
            <p
              className="text-base leading-relaxed mb-4"
              style={{
                color: "oklch(0.80 0.01 260)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              People derive self-concept from group memberships through three processes: categorization, identification, and comparison (favoring in-group). When social identity is threatened, people strive to make their group "more positively distinct."
            </p>
            <p
              className="text-base leading-relaxed"
              style={{
                color: "oklch(0.80 0.01 260)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <strong>Key Insight</strong>: Social identity doesn't disappear with education. Educated people simply find more sophisticated ways to defend their tribe.
            </p>
          </div>

          {/* Foundation 6 */}
          <div className="mb-8">
            <h3
              className="text-lg font-bold mb-3"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "oklch(0.90 0.01 260)",
              }}
            >
              6. Behavioral Economics: Self-Concept Maintenance
            </h3>
            <p
              className="text-base leading-relaxed mb-4"
              style={{
                color: "oklch(0.80 0.01 260)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Most people are <strong>dishonest enough to profit but honest enough to maintain a positive self-view</strong>. Magnitude of dishonesty is small (~16-20% of maximum possible) and insensitive to external costs/benefits but sensitive to psychological/contextual factors.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{
                color: "oklch(0.80 0.01 260)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <strong>Moral Wiggle Room</strong>: People exploit uncertainty to behave selfishly while maintaining plausible deniability. Strategic ignorance — people actively avoid information that would make selfishness clearly immoral.
            </p>
          </div>
        </section>

        {/* Design Principles */}
        <section className="mb-16">
          <h2
            className="text-2xl font-bold mb-6 tracking-tight"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "oklch(0.95 0.01 260)",
            }}
          >
            Design Principles
          </h2>

          <div className="space-y-6">
            {[
              {
                title: '"Would Do" Not "Should Do"',
                description:
                  '"Should do" questions capture normative knowledge — what people think they ought to do. This reveals social desirability bias, not actual behavior. We frame questions as "What would you actually do?" — behavioral tendency questions reveal character better than normative knowledge.',
              },
              {
                title: "Force Genuine Trade-offs",
                description:
                  "Questions with obviously 'right' answers don't reveal character. We create scenarios with conflicting values — loyalty vs. honesty, fairness vs. compassion, truth vs. social harmony.",
              },
              {
                title: "Create Moral Wiggle Room",
                description:
                  "People answer based on aspirational self-image, not actual behavior. We design scenarios where selfish choices can be rationalized. Introduce ambiguity, intermediary steps, or 'benefiting others' justifications.",
              },
              {
                title: "Bypass Impression Management",
                description:
                  "People try to present their best self. We use covert items (don't make obvious what trait is being assessed), forgiving language (normalize undesirable behaviors), time pressure (quick responses bypass impression management), and consistency checks (same construct, different ways).",
              },
              {
                title: "Multiple Measurement Strategies",
                description:
                  "Single questions are unreliable. We measure the same construct across multiple contexts: different ambiguity levels, different stakes, different social contexts, different moral foundations.",
              },
              {
                title: "Detect Faking in Real-Time",
                description:
                  "People can game the system. We include overt and covert versions of the same construct, measure response consistency, use within-person standardization, and include 'ideal worker' detection items.",
              },
            ].map((principle, idx) => (
              <div
                key={idx}
                className="p-6 border-l-2"
                style={{
                  borderColor: "oklch(0.40 0.10 260)",
                  background: "oklch(0.12 0.02 260 / 0.3)",
                }}
              >
                <h3
                  className="text-base font-bold mb-2"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "oklch(0.90 0.01 260)",
                  }}
                >
                  {idx + 1}. {principle.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "oklch(0.75 0.01 260)",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Archetypes */}
        <section className="mb-16">
          <h2
            className="text-2xl font-bold mb-6 tracking-tight"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "oklch(0.95 0.01 260)",
            }}
          >
            Archetype Definitions
          </h2>

          <div className="space-y-6">
            {[
              {
                name: "The Builder",
                color: "#60a5fa",
                traits: "High initiative, accountable, practical, results-driven",
                signature: [
                  "Takes action when others complain",
                  "Owns mistakes publicly",
                  "Builds systems, not just opinions",
                  "Values outcomes over process",
                ],
                society: "10,000 Builders = Industrialized Nigeria in a decade. Infrastructure gets built, problems get solved, merit-based systems emerge.",
              },
              {
                name: "The Sage",
                color: "#a78bfa",
                traits: "High knowledge, thoughtful, analytical, principled",
                signature: [
                  "Seeks evidence before forming opinions",
                  "Changes mind when presented with new evidence",
                  "Values truth over tribal loyalty",
                  "Educates others without condescension",
                ],
                society: "10,000 Sages = Educated, thoughtful discourse. But potential paralysis by analysis — too much deliberation, not enough action.",
              },
              {
                name: "The Skeptic",
                color: "#f472b6",
                traits: "Critical thinking, questioning, independent, but potentially cynical",
                signature: [
                  "Questions authority and conventional wisdom",
                  "Identifies flaws in arguments",
                  "Resists tribal pressure",
                  "But may lack constructive alternatives",
                ],
                society: "10,000 Skeptics = Critical thinking culture, but potential cynicism and inaction. Good at identifying problems, less good at building solutions.",
              },
              {
                name: "The Opportunist",
                color: "#fb923c",
                traits: "Self-serving, extractive, zero-sum thinking",
                signature: [
                  "Prioritizes personal gain over collective good",
                  "Exploits ambiguity for personal benefit",
                  "Justifies selfishness through rationalization",
                  "Views others as means to ends",
                ],
                society: "10,000 Opportunists = Extractive society. Corruption, exploitation, zero-sum competition. No trust, high transaction costs.",
              },
              {
                name: "The Intellectual",
                color: "#fbbf24",
                traits: "High knowledge, low truthfulness, low accountability",
                signature: [
                  "Uses education to construct sophisticated rationalizations",
                  "Defends wrong positions with 'nuance' and 'context'",
                  "Criticizes successful people while being unsuccessful",
                  "Values appearing smart over being honest",
                ],
                society: "10,000 Intellectuals = Educated corruption. Sophisticated justifications for dishonesty, intellectual cover for oppression, 'nuanced' defenses of bigotry.",
              },
            ].map((archetype) => (
              <div
                key={archetype.name}
                className="p-6 border-l-2"
                style={{
                  borderColor: archetype.color,
                  background: "oklch(0.12 0.02 260 / 0.3)",
                }}
              >
                <h3
                  className="text-lg font-bold mb-2"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: archetype.color,
                  }}
                >
                  {archetype.name}
                </h3>
                <p
                  className="text-sm mb-4"
                  style={{
                    color: "oklch(0.70 0.02 260)",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  <strong>Core Traits:</strong> {archetype.traits}
                </p>
                <div className="mb-4">
                  <div
                    className="text-xs font-bold mb-2"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: "oklch(0.60 0.02 260)",
                    }}
                  >
                    BEHAVIORAL SIGNATURE
                  </div>
                  <ul className="space-y-1">
                    {archetype.signature.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-sm"
                        style={{
                          color: "oklch(0.75 0.01 260)",
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="text-sm italic"
                  style={{
                    color: "oklch(0.70 0.02 260)",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {archetype.society}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* References */}
        <section className="mb-16">
          <h2
            className="text-2xl font-bold mb-6 tracking-tight"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "oklch(0.95 0.01 260)",
            }}
          >
            References
          </h2>
          <div
            className="space-y-3 text-sm"
            style={{
              color: "oklch(0.70 0.02 260)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            <p>Ariely, D. (2012). <em>The (Honest) Truth About Dishonesty</em>. Harper.</p>
            <p>Bandura, A. (1999). Moral disengagement in the perpetration of inhumanities. <em>Personality and Social Psychology Review</em>, 3(3), 193-209.</p>
            <p>Festinger, L. (1957). <em>A Theory of Cognitive Dissonance</em>. Stanford University Press.</p>
            <p>Gino, F., & Pierce, L. (2013). Robin Hood under normal circumstances. <em>Journal of Experimental Social Psychology</em>, 49(6), 1082-1092.</p>
            <p>Haidt, J. (2012). <em>The Righteous Mind: Why Good People Are Divided by Politics and Religion</em>. Pantheon.</p>
            <p>Kahan, D. M. (2017). The anatomy of motivated numeracy. <em>Journal of Experimental Psychology: General</em>, 146(1), 74-90.</p>
            <p>Kunda, Z. (1990). The case for motivated reasoning. <em>Psychological Bulletin</em>, 108(3), 480-498.</p>
            <p>Mazar, N., Amir, O., & Ariely, D. (2008). The dishonesty of honest people: A theory of self-concept maintenance. <em>Journal of Marketing Research</em>, 45(6), 633-644.</p>
            <p>Tajfel, H., & Turner, J. C. (1979). An integrative theory of intergroup conflict. In W. G. Austin & S. Worchel (Eds.), <em>The social psychology of intergroup relations</em> (pp. 33-47). Brooks/Cole.</p>
          </div>
        </section>

        {/* Footer */}
        <div
          className="border-t pt-8 mt-16"
          style={{ borderColor: "oklch(0.20 0.02 260)" }}
        >
          <p
            className="text-sm"
            style={{
              color: "oklch(0.50 0.02 260)",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            Olodo Uprising is open source. Challenge our methodology, suggest improvements, or fork the project.
          </p>
          <div className="mt-4 flex gap-4">
            <a
              href="https://github.com/temisangerrard/olodo-uprising"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:opacity-70 transition-opacity"
              style={{
                color: "oklch(0.70 0.02 260)",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              GitHub →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Methodology;
