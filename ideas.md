# Olodo Uprising — Design Brainstorm

## Three Stylistic Approaches

### Approach 1: "Brutalist Tribunal"
A raw, confrontational design that feels like a courtroom or public hearing. Heavy black borders, stark typography, red accents, and a deliberate sense of being judged. Probability: 0.04

### Approach 2: "Lagos Street Newspaper"
Inspired by Nigerian tabloid print culture — bold headlines, ink textures, torn-paper edges, high contrast black-and-yellow. Feels urgent and street-level. Probability: 0.07

### Approach 3: "Dark Intelligence Lab"
A sleek, dark-mode interface that feels like a cognitive profiling system — think intelligence agency meets social science research tool. Deep charcoal backgrounds, electric amber accents, monospaced data readouts, and a sense of clinical precision. Probability: 0.03

---

## Selected Approach: "Dark Intelligence Lab" (Probability: 0.03)

This is a tool that asks you hard questions about how you think and then tells you what your society would look like. It should feel serious, a little unsettling, and intellectually rigorous — not playful. The "Dark Intelligence Lab" aesthetic earns that gravity.

### Design Movement
Post-digital brutalism meets intelligence-agency UI — think OSINT tools, cognitive research dashboards, and classified briefing documents. Clinical but not cold. Purposeful but not sterile.

### Core Principles
1. **Every element earns its place.** No decorative chrome. If it's on screen, it serves a function or creates atmosphere.
2. **Tension through contrast.** Dark backgrounds with sharp amber/gold accents. The contrast is not aesthetic — it signals importance.
3. **The interface judges you.** Subtle visual feedback makes the user feel observed and assessed, not entertained.
4. **Data as drama.** The simulation results should feel like a revelation, not a report card.

### Color Philosophy
- **Background**: Near-black charcoal `oklch(0.12 0.008 260)` — deep and serious
- **Surface**: Slightly lighter `oklch(0.17 0.008 260)` — card backgrounds
- **Signature Amber**: `oklch(0.78 0.16 75)` — the one ownable color; used for active states, key data, and CTAs
- **Muted text**: `oklch(0.55 0.01 260)` — secondary information
- **Danger red**: `oklch(0.62 0.22 25)` — used sparingly for the Olodo archetype results
- **Reasoning**: Amber against near-black creates the feeling of a warning light — something important is being revealed.

### Layout Paradigm
Asymmetric vertical flow with strong left-anchored typography. The quiz flows as a single-column focused experience (no distractions). Results page breaks into a two-column layout: archetype profile on the left, simulation data on the right. No centered hero layouts.

### Signature Elements
1. **Progress bar as EKG line** — a pulsing horizontal line that fills as questions are answered
2. **Monospaced data labels** — all numerical outputs use a monospaced font (JetBrains Mono) to feel like readouts
3. **Archetype reveal animation** — the archetype name types itself out character by character when revealed

### Interaction Philosophy
The quiz feels like an interrogation, not a game. One question at a time, full screen. No going back. Answer options are plain text buttons that highlight on hover with a sharp amber border — no rounded pills, no icons.

### Animation
- Question transitions: slide up + fade in (200ms ease-out)
- Answer selection: immediate amber border flash, then next question slides in after 400ms
- Results reveal: staggered entrance — archetype name types in, then radar chart draws itself, then verdict fades in
- All animations respect `prefers-reduced-motion`

### Typography System
- **Display / Archetype names**: Space Grotesk Bold — geometric, confident, slightly unusual
- **Body / Questions**: Inter Regular — neutral and readable, lets the content speak
- **Data / Numbers**: JetBrains Mono — monospaced for all scores and percentages
- **Hierarchy**: Large (48px) for archetype reveal, Medium (20px) for questions, Small (14px) for answer options

### Brand Essence
A mirror held up to society — for anyone brave enough to look. Provocative. Precise. Uncomfortable.
Personality: **Unflinching. Rigorous. Subversive.**

### Brand Voice
Headlines are declarative and slightly ominous. CTAs are commands, not invitations. No filler copy.
- Example headline: *"10,000 of you. One city. What happens next?"*
- Example CTA: *"Begin Assessment"* (not "Get Started" or "Take the Quiz")

### Wordmark & Logo
A stylised eye icon — an iris made of concentric data rings — rendered in amber on dark. Represents observation, assessment, and the act of seeing yourself clearly.

### Signature Brand Color
**Amber `oklch(0.78 0.16 75)`** — the color of a warning light, a streetlamp at night, and a burning question.
