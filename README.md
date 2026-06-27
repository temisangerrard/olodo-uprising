# Olodo Uprising

> **10,000 of you. One city. What happens?**

A behavioral profiling tool that asks you 20 scenario-based questions about how you think, decide, and behave — then classifies your cognitive archetype and simulates what society would look like if 10,000 people exactly like you lived in a radius.

Inspired by the Nigerian "Olodo Uprising" debate: the national conversation sparked by rapper Ycee in June 2026 about what happens when a society stops rewarding knowledge and starts rewarding noise.

---

## What It Does

1. **Behavioral Assessment** — 20 scenario-based questions across 5 cognitive axes: Knowledge Orientation, Social Orientation, Agency, Accountability, and Truth Orientation.
2. **Archetype Classification** — Scores are mapped to one of 8 archetypes: The Builder, The Sage, The Critic, The Hustler, The Follower, The Performer, The Skeptic, or The Olodo.
3. **Societal Simulation** — Each archetype generates a simulation of 5 societal dimensions (Education, Economy, Governance, Social Cohesion, Resilience) with a radar chart and a written verdict.

---

## The 8 Archetypes

| Archetype | Tagline | Society Verdict |
|-----------|---------|-----------------|
| **The Builder** | I fix things. | A society that gets things done. |
| **The Sage** | I know, and I teach. | A society of extraordinary depth. |
| **The Critic** | I see what's wrong. | A society that knows exactly what's wrong. |
| **The Hustler** | I move, I don't wait. | A society of motion without direction. |
| **The Follower** | Tell me what to do. | A society that is easy to lead — and easy to exploit. |
| **The Performer** | Watch me. | A society of spectacle. |
| **The Skeptic** | I don't trust any of it. | A society that trusts nothing and no one. |
| **The Olodo** | I already know. | A society that burns bright and fast. |

---

## Tech Stack

- **React 19** + TypeScript
- **Tailwind CSS 4** with custom OKLCH color tokens
- **Framer Motion** for animations
- **Recharts** for the radar chart
- **Vite** for bundling
- **No backend** — fully client-side, zero dependencies on external APIs

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/temisangerrard/olodo-uprising.git
cd olodo-uprising

# Install dependencies
pnpm install

# Run dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Customising the Tool

All question data, archetype definitions, scoring logic, and simulation profiles live in a single file:

```
client/src/lib/data.ts
```

This is intentionally self-contained. To fork and localise:

1. Edit `QUESTIONS` to change or translate the questions.
2. Edit `ARCHETYPES` to modify archetype names, descriptions, and societal profiles.
3. Edit `classifyArchetype()` to change the scoring thresholds.
4. The scoring engine (`computeScores`) is a pure function with no side effects.

---

## The "Olodo" Context

**Olodo** (Yoruba/Nigerian Pidgin) — originally meaning "dunce" or "someone who scores zero." In 2026, the term evolved to describe something more specific: a person who is not merely uneducated, but *proudly, defiantly uninformed* — who dismisses expertise while demanding to be treated as equally authoritative.

The "Olodo Uprising" refers to the cultural pattern where anti-intellectual behaviour is algorithmically rewarded, financially incentivised, and socially celebrated — creating a feedback loop that erodes the value of knowledge across society.

This tool is not a judgment of individuals. It is a mirror held up to incentive structures.

---

## Contributing

This is an open-source project. Contributions welcome:

- New question sets for different cultural contexts
- Additional archetypes
- Translations (the data file is designed to be easily localised)
- Improved scoring algorithms
- Accessibility improvements

---

## License

MIT — fork freely, localise, and use for education, research, or public discourse.

---

*"Every society gets the culture it consistently rewards."*
