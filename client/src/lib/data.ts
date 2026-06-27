// ============================================================
// OLODO UPRISING — Core Data
// Design: Dark Intelligence Lab aesthetic
// All scoring, archetypes, and simulation data lives here.
// This file is intentionally self-contained for open-source forkability.
// ============================================================

export interface AnswerOption {
  id: string;
  text: string;
  scores: Partial<Record<ScoreAxis, number>>;
}

export interface Question {
  id: number;
  text: string;
  options: AnswerOption[];
}

export type ScoreAxis = "K" | "S" | "A" | "Ac" | "T";

export interface AxisScores {
  K: number;  // Knowledge Orientation (0–80)
  S: number;  // Social Orientation (0–80)
  A: number;  // Agency (0–80)
  Ac: number; // Accountability (0–80)
  T: number;  // Truth Orientation (0–80)
}

export type ArchetypeId =
  | "builder"
  | "sage"
  | "critic"
  | "hustler"
  | "follower"
  | "performer"
  | "skeptic"
  | "olodo";

export interface SocietyProfile {
  education: number;
  economy: number;
  governance: number;
  cohesion: number;
  resilience: number;
  verdict: string;
  verdictDetail: string;
}

export interface Archetype {
  id: ArchetypeId;
  name: string;
  tagline: string;
  description: string;
  traits: string[];
  society: SocietyProfile;
  color: string; // tailwind color class for accent
  accentHex: string;
}

// ============================================================
// QUESTION BANK (20 questions)
// ============================================================

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "You hear something confidently stated by someone with millions of followers. What do you do?",
    options: [
      { id: "a", text: "Share it immediately — if that many people believe it, it's probably true.", scores: { K: 0, T: 0 } },
      { id: "b", text: "Look it up before forming an opinion.", scores: { K: 3, T: 4 } },
      { id: "c", text: "Ignore it — social media is mostly noise.", scores: { K: 2, T: 2 } },
      { id: "d", text: "Argue against it just to be different.", scores: { K: 1, T: 1 } },
    ],
  },
  {
    id: 2,
    text: "A problem appears in your community — bad roads, dirty streets, broken infrastructure. Your first instinct is:",
    options: [
      { id: "a", text: "Post about it online and tag the government.", scores: { A: 1, Ac: 2 } },
      { id: "b", text: "Organise neighbours to fix it ourselves.", scores: { A: 4, Ac: 4, S: 4 } },
      { id: "c", text: "Complain to friends and move on.", scores: { A: 0, Ac: 1 } },
      { id: "d", text: "Wait — someone will handle it eventually.", scores: { A: 0, Ac: 0 } },
    ],
  },
  {
    id: 3,
    text: "You are wrong about something important. How do you respond?",
    options: [
      { id: "a", text: "Admit it openly and update my view.", scores: { T: 4, Ac: 4 } },
      { id: "b", text: "Quietly change my position without acknowledging it.", scores: { T: 2, Ac: 2 } },
      { id: "c", text: "Double down — changing your mind looks weak.", scores: { T: 0, Ac: 0 } },
      { id: "d", text: "Blame whoever gave me the wrong information.", scores: { T: 1, Ac: 0 } },
    ],
  },
  {
    id: 4,
    text: "Someone more qualified than you disagrees with your opinion. You:",
    options: [
      { id: "a", text: "Listen carefully — they might know something I don't.", scores: { K: 4, T: 4 } },
      { id: "b", text: "Defend my position — qualifications don't mean everything.", scores: { K: 1, T: 1 } },
      { id: "c", text: "Pretend to agree but privately dismiss them.", scores: { T: 0, Ac: 1 } },
      { id: "d", text: "Ask them to explain their reasoning.", scores: { K: 3, T: 3 } },
    ],
  },
  {
    id: 5,
    text: "You have a chance to earn money quickly through a shortcut that isn't quite legal. You:",
    options: [
      { id: "a", text: "Take it — everyone does it and the system is rigged anyway.", scores: { Ac: 0, S: 1 } },
      { id: "b", text: "Decline — the risk isn't worth it.", scores: { Ac: 3 } },
      { id: "c", text: "Think carefully and only proceed if the harm is minimal.", scores: { T: 3, Ac: 3 } },
      { id: "d", text: "Report it — shortcuts like this hurt everyone.", scores: { S: 4, Ac: 4 } },
    ],
  },
  {
    id: 6,
    text: "A young person asks you for career advice. You say:",
    options: [
      { id: "a", text: "\"Follow the money — skills don't matter as much as hustle.\"", scores: { K: 0, S: 2 } },
      { id: "b", text: "\"Build real skills first, then monetise them.\"", scores: { K: 4, S: 4 } },
      { id: "c", text: "\"Do what makes you happy.\"", scores: { K: 1, S: 3 } },
      { id: "d", text: "\"Watch what successful people do and copy it.\"", scores: { K: 1, A: 2 } },
    ],
  },
  {
    id: 7,
    text: "You disagree with a widely held belief in your community. You:",
    options: [
      { id: "a", text: "Keep quiet — it's not worth the conflict.", scores: { A: 0, T: 1 } },
      { id: "b", text: "Speak up respectfully with evidence.", scores: { A: 3, T: 4 } },
      { id: "c", text: "Loudly oppose it — people need to hear the truth.", scores: { A: 4, T: 2 } },
      { id: "d", text: "Find others who agree with you first.", scores: { A: 2, S: 2 } },
    ],
  },
  {
    id: 8,
    text: "How do you feel about people who are more educated than you?",
    options: [
      { id: "a", text: "Respect — they put in the work.", scores: { K: 4, S: 3 } },
      { id: "b", text: "Suspicious — education can make people arrogant.", scores: { K: 1, T: 1 } },
      { id: "c", text: "Indifferent — education doesn't equal wisdom.", scores: { K: 2 } },
      { id: "d", text: "Competitive — I want to learn more than them.", scores: { K: 3, A: 3 } },
    ],
  },
  {
    id: 9,
    text: "Your city has a major public health crisis. You:",
    options: [
      { id: "a", text: "Follow official guidance and encourage others to do the same.", scores: { K: 3, S: 4, T: 3 } },
      { id: "b", text: "Research it yourself and form your own conclusions.", scores: { K: 4, T: 4 } },
      { id: "c", text: "Trust that it'll work itself out.", scores: { A: 0, K: 0 } },
      { id: "d", text: "Share everything you've heard — people deserve to know.", scores: { T: 1, S: 2 } },
    ],
  },
  {
    id: 10,
    text: "You build something — a business, a project, a skill. It fails. You:",
    options: [
      { id: "a", text: "Analyse what went wrong and try again.", scores: { Ac: 4, K: 3 } },
      { id: "b", text: "Blame external factors — the environment wasn't right.", scores: { Ac: 0 } },
      { id: "c", text: "Give up — maybe it wasn't meant to be.", scores: { A: 0, Ac: 1 } },
      { id: "d", text: "Pivot immediately to something else without reflection.", scores: { A: 3, Ac: 1 } },
    ],
  },
  {
    id: 11,
    text: "When you consume content online, you mostly look for:",
    options: [
      { id: "a", text: "Entertainment — I need to decompress.", scores: { K: 1 } },
      { id: "b", text: "Information that challenges my thinking.", scores: { K: 4, T: 4 } },
      { id: "c", text: "Validation that my views are correct.", scores: { T: 0, K: 0 } },
      { id: "d", text: "Practical knowledge I can use immediately.", scores: { K: 3, A: 3 } },
    ],
  },
  {
    id: 12,
    text: "Someone in your circle is spreading misinformation. You:",
    options: [
      { id: "a", text: "Correct them privately with facts.", scores: { T: 4, S: 3 } },
      { id: "b", text: "Call them out publicly.", scores: { T: 3, A: 3 } },
      { id: "c", text: "Say nothing — it's not my business.", scores: { S: 1, A: 0 } },
      { id: "d", text: "Agree with them to avoid conflict.", scores: { T: 0, Ac: 0 } },
    ],
  },
  {
    id: 13,
    text: "How do you define success?",
    options: [
      { id: "a", text: "Wealth and status.", scores: { K: 1, S: 1 } },
      { id: "b", text: "Impact — changing something for the better.", scores: { S: 4, K: 3 } },
      { id: "c", text: "Freedom to do what I want.", scores: { A: 3 } },
      { id: "d", text: "Respect from people I genuinely admire.", scores: { S: 3, T: 2 } },
    ],
  },
  {
    id: 14,
    text: "A new technology could solve a major problem but requires everyone to change their habits. You:",
    options: [
      { id: "a", text: "Adopt it early and encourage others.", scores: { A: 4, S: 4, K: 3 } },
      { id: "b", text: "Wait to see if it actually works.", scores: { K: 2, T: 3 } },
      { id: "c", text: "Resist — change usually causes more problems.", scores: { A: 0, K: 1 } },
      { id: "d", text: "Ignore it — someone else will figure it out.", scores: { A: 0, S: 1 } },
    ],
  },
  {
    id: 15,
    text: "You are given power over a community for one year. Your first priority is:",
    options: [
      { id: "a", text: "Fix the most visible problems quickly.", scores: { A: 4, K: 2 } },
      { id: "b", text: "Understand the root causes before acting.", scores: { K: 4, T: 4 } },
      { id: "c", text: "Build systems that outlast my tenure.", scores: { K: 4, S: 4, Ac: 4 } },
      { id: "d", text: "Reward the people who supported me.", scores: { S: 1, Ac: 0 } },
    ],
  },
  {
    id: 16,
    text: "How do you handle criticism of your work?",
    options: [
      { id: "a", text: "Take it seriously and improve.", scores: { Ac: 4, K: 3 } },
      { id: "b", text: "Defend my work — critics don't understand my vision.", scores: { Ac: 0, T: 1 } },
      { id: "c", text: "Ignore it unless it comes from someone I respect.", scores: { T: 2, Ac: 2 } },
      { id: "d", text: "Feel hurt but eventually reflect on it.", scores: { Ac: 3, T: 3 } },
    ],
  },
  {
    id: 17,
    text: "You see someone being publicly humiliated online for being wrong. You:",
    options: [
      { id: "a", text: "Join in — they should have known better.", scores: { S: 0, T: 1 } },
      { id: "b", text: "Defend them — public humiliation solves nothing.", scores: { S: 4, T: 3 } },
      { id: "c", text: "Stay out of it.", scores: { S: 2, A: 0 } },
      { id: "d", text: "Privately message them with correct information.", scores: { S: 4, T: 4 } },
    ],
  },
  {
    id: 18,
    text: "What is your honest view of formal education?",
    options: [
      { id: "a", text: "Mostly useless — real learning happens in the streets.", scores: { K: 0 } },
      { id: "b", text: "Valuable but not the only path to knowledge.", scores: { K: 3, T: 3 } },
      { id: "c", text: "Essential — you can't build without foundations.", scores: { K: 4 } },
      { id: "d", text: "A credential game — I play it but don't believe in it.", scores: { K: 1, T: 2 } },
    ],
  },
  {
    id: 19,
    text: "When making a major decision, you:",
    options: [
      { id: "a", text: "Go with your gut — overthinking kills momentum.", scores: { K: 1, T: 1 } },
      { id: "b", text: "Gather information, consult experts, then decide.", scores: { K: 4, T: 4, A: 3 } },
      { id: "c", text: "Ask people around you what they think.", scores: { S: 3, A: 2 } },
      { id: "d", text: "Do what worked before.", scores: { K: 2, A: 2 } },
    ],
  },
  {
    id: 20,
    text: "What does your community owe you?",
    options: [
      { id: "a", text: "Nothing — I build my own path.", scores: { A: 4, Ac: 4 } },
      { id: "b", text: "Opportunity — I'll do the rest.", scores: { A: 3, S: 3 } },
      { id: "c", text: "Support — we rise together.", scores: { S: 4, Ac: 3 } },
      { id: "d", text: "Everything — I was born into this, they owe me.", scores: { Ac: 0, S: 0 } },
    ],
  },
];

// ============================================================
// ARCHETYPE DEFINITIONS
// ============================================================

export const ARCHETYPES: Record<ArchetypeId, Archetype> = {
  builder: {
    id: "builder",
    name: "The Builder",
    tagline: "I fix things.",
    description:
      "You see problems as puzzles to solve. You have high standards, take ownership, and prefer action over analysis paralysis. You can be impatient with those who only talk.",
    traits: ["High initiative", "Accountable", "Practical", "Results-driven"],
    color: "text-blue-400",
    accentHex: "#60a5fa",
    society: {
      education: 78,
      economy: 85,
      governance: 70,
      cohesion: 65,
      resilience: 82,
      verdict: "A society that gets things done.",
      verdictDetail:
        "Infrastructure improves. Problems get solved. Innovation compounds. The risk: builders sometimes treat people like projects. Efficiency is prioritised over empathy, and those who can't keep up get left behind.",
    },
  },
  sage: {
    id: "sage",
    name: "The Sage",
    tagline: "I know, and I teach.",
    description:
      "You combine deep knowledge with a genuine desire to share it. You are patient, deliberate, and deeply committed to truth. You believe that understanding precedes action.",
    traits: ["Deep knowledge", "Collaborative", "Truth-seeking", "Patient"],
    color: "text-emerald-400",
    accentHex: "#34d399",
    society: {
      education: 95,
      economy: 72,
      governance: 80,
      cohesion: 78,
      resilience: 88,
      verdict: "A society of extraordinary depth.",
      verdictDetail:
        "Schools flourish. Institutions are trusted. Decisions are made with care. The risk: too much deliberation, not enough urgency. A society of sages can debate a burning building while it burns.",
    },
  },
  critic: {
    id: "critic",
    name: "The Critic",
    tagline: "I see what's wrong.",
    description:
      "You have a sharp eye for flaws, inconsistencies, and failures. Your analysis is often brilliant. But knowledge without action is a library no one visits.",
    traits: ["Analytical", "High standards", "Passive", "Articulate"],
    color: "text-purple-400",
    accentHex: "#a78bfa",
    society: {
      education: 70,
      economy: 48,
      governance: 55,
      cohesion: 40,
      resilience: 50,
      verdict: "A society that knows exactly what's wrong.",
      verdictDetail:
        "Brilliant essays are written. Diagnoses are impeccable. Nothing gets fixed. The critics are always right and always watching — but the building still crumbles because no one picks up a hammer.",
    },
  },
  hustler: {
    id: "hustler",
    name: "The Hustler",
    tagline: "I move, I don't wait.",
    description:
      "You are relentlessly action-oriented and opportunistic. You move fast and adapt quickly. But without knowledge as a compass, motion becomes noise.",
    traits: ["High energy", "Opportunistic", "Short-term focused", "Adaptable"],
    color: "text-orange-400",
    accentHex: "#fb923c",
    society: {
      education: 28,
      economy: 55,
      governance: 20,
      cohesion: 30,
      resilience: 40,
      verdict: "A society of motion without direction.",
      verdictDetail:
        "Lots of activity. Lots of noise. Some people get very rich, very fast. Most get left behind. Institutions are weak because no one has time to build them. The economy booms and crashes in cycles no one can predict.",
    },
  },
  follower: {
    id: "follower",
    name: "The Follower",
    tagline: "Tell me what to do.",
    description:
      "You are reliable, cooperative, and conflict-averse. You trust the group. The danger is that the group is not always right — and you rarely push back.",
    traits: ["Conformist", "Cooperative", "Validation-seeking", "Risk-averse"],
    color: "text-sky-400",
    accentHex: "#38bdf8",
    society: {
      education: 40,
      economy: 45,
      governance: 25,
      cohesion: 55,
      resilience: 20,
      verdict: "A society that is easy to lead — and easy to exploit.",
      verdictDetail:
        "Whoever controls the narrative controls everything. The community is harmonious on the surface. But it is deeply vulnerable to demagogues, misinformation, and authoritarian leadership. Compliance is mistaken for consensus.",
    },
  },
  performer: {
    id: "performer",
    name: "The Performer",
    tagline: "Watch me.",
    description:
      "You are charismatic, energetic, and highly attuned to your audience. You understand attention. But attention is not the same as impact.",
    traits: ["Charismatic", "Attention-driven", "Self-promotional", "Adaptable"],
    color: "text-pink-400",
    accentHex: "#f472b6",
    society: {
      education: 35,
      economy: 60,
      governance: 30,
      cohesion: 45,
      resilience: 35,
      verdict: "A society of spectacle.",
      verdictDetail:
        "Incredibly entertaining. Deeply shallow. The attention economy thrives. The loudest voice wins, not the wisest one. Leaders are chosen for charisma. Institutions are theatre. The show must go on — even when the house is on fire.",
    },
  },
  skeptic: {
    id: "skeptic",
    name: "The Skeptic",
    tagline: "I don't trust any of it.",
    description:
      "You question everything, trust almost nothing, and are hard to manipulate. This makes you valuable — and exhausting. A society of skeptics is resistant to propaganda but allergic to cooperation.",
    traits: ["Distrustful", "Contrarian", "Independent", "Hard to deceive"],
    color: "text-yellow-400",
    accentHex: "#facc15",
    society: {
      education: 55,
      economy: 50,
      governance: 45,
      cohesion: 35,
      resilience: 60,
      verdict: "A society that trusts nothing and no one.",
      verdictDetail:
        "Hard to manipulate, but also hard to organise. Progress is slow because consensus is impossible. Every institution is questioned. Every leader is suspected. The society is resilient against external threats but paralysed by internal distrust.",
    },
  },
  olodo: {
    id: "olodo",
    name: "The Olodo",
    tagline: "I already know.",
    description:
      "You have high confidence and low knowledge — a dangerous combination. You dismiss expertise, resist correction, and mistake volume for authority. The Olodo Uprising is not about being uneducated. It is about being proudly, defiantly uninformed.",
    traits: ["Overconfident", "Dismissive of expertise", "Validation-seeking", "Loud"],
    color: "text-red-400",
    accentHex: "#f87171",
    society: {
      education: 15,
      economy: 22,
      governance: 10,
      cohesion: 35,
      resilience: 12,
      verdict: "A society that burns bright and fast.",
      verdictDetail:
        "Entertaining to watch from outside. Devastating to live in. Schools collapse from disinterest. Expertise is mocked. Leaders are elected on charisma and confidence alone. Accountability is near zero. The society cannot handle any serious crisis — it has no tools to do so.",
    },
  },
};

// ============================================================
// SCORING ENGINE
// ============================================================

export function computeScores(answers: Record<number, string>): AxisScores {
  const totals: AxisScores = { K: 0, S: 0, A: 0, Ac: 0, T: 0 };

  for (const [qIdStr, answerId] of Object.entries(answers)) {
    const qId = parseInt(qIdStr);
    const question = QUESTIONS.find((q) => q.id === qId);
    if (!question) continue;
    const option = question.options.find((o) => o.id === answerId);
    if (!option) continue;
    for (const [axis, value] of Object.entries(option.scores)) {
      totals[axis as ScoreAxis] += value;
    }
  }

  return totals;
}

export function classifyArchetype(scores: AxisScores): ArchetypeId {
  const { K, S, A, Ac, T } = scores;

  if (K < 30 && T < 25 && Ac < 25) return "olodo";
  if (K < 30 && A > 50) return "hustler";
  if (K < 30 && A < 30) return "follower";
  if (K > 50 && A > 50 && S > 50) return "sage";
  if (K > 50 && A > 50 && S < 40) return "builder";
  if (K > 50 && A < 35) return "critic";
  if (A > 50 && S < 30) return "performer";
  return "skeptic";
}

export const SOCIETY_DIMENSIONS = [
  { key: "education" as const, label: "Education & Knowledge" },
  { key: "economy" as const, label: "Economy & Productivity" },
  { key: "governance" as const, label: "Governance" },
  { key: "cohesion" as const, label: "Social Cohesion" },
  { key: "resilience" as const, label: "Resilience" },
];
