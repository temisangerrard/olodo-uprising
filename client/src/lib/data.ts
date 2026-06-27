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
  | "intellectual"
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
// Nigerian cultural context, moral ambiguity, dramatic tension
// ============================================================

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Your uncle asks you to help him 'sort' a government contract. He says it's how things work here. You:",
    options: [
      { id: "a", text: "Help him — family comes first, and this is how Nigeria works.", scores: { Ac: 0, S: 3, T: 1 } },
      { id: "b", text: "Refuse — corruption starts with small compromises.", scores: { Ac: 4, T: 4 } },
      { id: "c", text: "Find a legal way to help him without breaking rules.", scores: { K: 3, T: 3, S: 2 } },
      { id: "d", text: "Help him but negotiate a cut for yourself.", scores: { Ac: 0, T: 0, A: 3 } },
    ],
  },
  {
    id: 2,
    text: "An elder in your community says something factually wrong at a gathering. Everyone nods respectfully. You:",
    options: [
      { id: "a", text: "Stay quiet — respect for elders is non-negotiable.", scores: { S: 2, T: 0, A: 0 } },
      { id: "b", text: "Correct them publicly — truth matters more than hierarchy.", scores: { T: 4, A: 4, S: 0 } },
      { id: "c", text: "Speak to them privately after the gathering.", scores: { T: 3, S: 3, A: 2 } },
      { id: "d", text: "Use their mistake to make yourself look smarter.", scores: { T: 0, Ac: 0, A: 3 } },
    ],
  },
  {
    id: 3,
    text: "You discover a way to make quick money through a scheme that technically isn't illegal but hurts others. You:",
    options: [
      { id: "a", text: "Take it — if it's not illegal, it's not wrong. Everyone is doing something similar.", scores: { Ac: 0, T: 0, A: 3 } },
      { id: "b", text: "Decline — the harm to others outweighs the gain.", scores: { Ac: 4, T: 4, S: 3 } },
      { id: "c", text: "Find a way to benefit while minimising harm.", scores: { K: 2, T: 2, Ac: 2 } },
      { id: "d", text: "Expose the scheme publicly to prevent others from doing it.", scores: { T: 4, S: 4, A: 3 } },
    ],
  },
  {
    id: 4,
    text: "Your friend posts misinformation on social media. It's getting thousands of shares. You:",
    options: [
      { id: "a", text: "Call them out publicly — they need to face consequences.", scores: { T: 3, A: 4, S: 1 } },
      { id: "b", text: "Message them privately with the correct information.", scores: { T: 4, S: 3, Ac: 3 } },
      { id: "c", text: "Say nothing — it's not your fight.", scores: { S: 1, A: 0, T: 0 } },
      { id: "d", text: "Use the moment to post your own 'correct' take and gain followers.", scores: { T: 1, Ac: 0, A: 4 } },
    ],
  },
  {
    id: 5,
    text: "You're in a debate and you realise you're wrong. But your argument is winning the crowd. You:",
    options: [
      { id: "a", text: "Admit you're wrong immediately — truth over ego.", scores: { T: 4, Ac: 4 } },
      { id: "b", text: "Keep going — the crowd doesn't know the difference and you're making a point.", scores: { T: 0, Ac: 0, A: 3 } },
      { id: "c", text: "Pivot subtly — acknowledge a minor flaw but maintain your position.", scores: { T: 1, Ac: 1, K: 2 } },
      { id: "d", text: "Double down with more sophisticated arguments — they'll never know.", scores: { T: 0, Ac: 0, K: 3 } },
    ],
  },
  {
    id: 6,
    text: "A qualified person loses a job to someone less qualified but better connected. You:",
    options: [
      { id: "a", text: "Speak up — merit should matter more than connections.", scores: { T: 4, A: 4, S: 2 } },
      { id: "b", text: "Accept it — this is how Nigeria works. Connections are part of the game.", scores: { T: 1, A: 1, S: 2 } },
      { id: "c", text: "Use your own connections to help the qualified person elsewhere.", scores: { K: 2, S: 3, A: 3 } },
      { id: "d", text: "Build better connections so you can benefit from the same system.", scores: { Ac: 1, A: 4, T: 0 } },
    ],
  },
  {
    id: 7,
    text: "You have the skills to build something valuable but it requires years of slow, unglamorous work. You:",
    options: [
      { id: "a", text: "Commit to the long path — real value takes time.", scores: { K: 4, Ac: 4, A: 3 } },
      { id: "b", text: "Find a faster way to monetise your skills first, then build slowly.", scores: { A: 4, K: 2, Ac: 2 } },
      { id: "c", text: "Look for shortcuts — if others are cutting corners, you can't afford to be slow.", scores: { Ac: 0, A: 3, K: 1 } },
      { id: "d", text: "Talk about building it instead — the vision is valuable even if you don't execute.", scores: { K: 1, A: 2, Ac: 0 } },
    ],
  },
  {
    id: 8,
    text: "Your community is divided along ethnic lines. Your ethnic group is being favoured. You:",
    options: [
      { id: "a", text: "Speak against the favouritism — fairness matters more than tribe.", scores: { T: 4, S: 4, Ac: 4 } },
      { id: "b", text: "Accept the advantage — this is how politics works here.", scores: { T: 0, S: 2, Ac: 0 } },
      { id: "c", text: "Use the advantage quietly while advocating for fairness in principle.", scores: { T: 1, Ac: 1, A: 3 } },
      { id: "d", text: "Leverage it to build power so you can help your people later.", scores: { T: 0, Ac: 1, A: 4 } },
    ],
  },
  {
    id: 9,
    text: "You're offered a lucrative contract that requires you to publicly support a policy you know is harmful. You:",
    options: [
      { id: "a", text: "Decline — your integrity isn't for sale.", scores: { T: 4, Ac: 4 } },
      { id: "b", text: "Take it — you can do more good with the money than without it.", scores: { T: 1, Ac: 1, A: 3 } },
      { id: "c", text: "Negotiate — support it publicly but work to minimise the harm privately.", scores: { T: 2, Ac: 2, K: 3 } },
      { id: "d", text: "Take it and use the platform to subtly undermine the policy.", scores: { T: 2, Ac: 2, A: 4 } },
    ],
  },
  {
    id: 10,
    text: "A young person asks you for advice. You know the honest answer is 'work hard for years' but they want a shortcut. You:",
    options: [
      { id: "a", text: "Tell them the truth — there are no shortcuts to real success.", scores: { T: 4, K: 4, S: 2 } },
      { id: "b", text: "Give them the shortcut — they'll learn from experience.", scores: { T: 1, S: 3, Ac: 1 } },
      { id: "c", text: "Tell them what they want to hear — they'll figure it out eventually.", scores: { T: 0, Ac: 0, S: 2 } },
      { id: "d", text: "Sell them a course on the shortcut — if they're not going to listen, at least profit from it.", scores: { T: 0, Ac: 0, A: 4 } },
    ],
  },
  {
    id: 11,
    text: "You witness corruption in your workplace. Reporting it could cost you your job. You:",
    options: [
      { id: "a", text: "Report it — some things matter more than a paycheck.", scores: { T: 4, Ac: 4, A: 3 } },
      { id: "b", text: "Document it quietly and use it as leverage if needed.", scores: { T: 1, Ac: 1, A: 4 } },
      { id: "c", text: "Look for another job — you can't fight the system alone.", scores: { T: 2, A: 2, S: 1 } },
      { id: "d", text: "Join in — if everyone is doing it, you might as well benefit.", scores: { T: 0, Ac: 0, S: 2 } },
    ],
  },
  {
    id: 12,
    text: "Someone with less education than you is making a valid point in a discussion. You:",
    options: [
      { id: "a", text: "Acknowledge their point — wisdom isn't limited to the educated.", scores: { T: 4, S: 4, K: 3 } },
      { id: "b", text: "Listen but respond with more sophisticated arguments to show your expertise.", scores: { T: 2, K: 3, Ac: 1 } },
      { id: "c", text: "Dismiss them subtly — they don't understand the complexity.", scores: { T: 1, K: 2, S: 0 } },
      { id: "d", text: "Use their lack of education to undermine their entire argument.", scores: { T: 0, Ac: 0, K: 2 } },
    ],
  },
  {
    id: 13,
    text: "You can make a lot of money by selling a product you know is mediocre. You:",
    options: [
      { id: "a", text: "Don't sell it — your reputation matters more than quick money.", scores: { Ac: 4, T: 4, K: 3 } },
      { id: "b", text: "Sell it but be transparent about its limitations.", scores: { T: 3, Ac: 3, A: 3 } },
      { id: "c", text: "Sell it and emphasise the positives — everyone does this.", scores: { T: 1, Ac: 1, A: 4 } },
      { id: "d", text: "Overpromise and deliver the minimum — they'll blame themselves for expecting more.", scores: { T: 0, Ac: 0, A: 4 } },
    ],
  },
  {
    id: 14,
    text: "Your family expects you to follow a traditional path. You want something different. You:",
    options: [
      { id: "a", text: "Follow your own path — your life is yours to live.", scores: { A: 4, T: 3, Ac: 3 } },
      { id: "b", text: "Compromise — find a way to honour them while pursuing your goal.", scores: { S: 3, A: 3, T: 2 } },
      { id: "c", text: "Follow their path — family respect is non-negotiable.", scores: { S: 4, A: 0, T: 1 } },
      { id: "d", text: "Tell them you're following your path but secretly rely on their support.", scores: { A: 2, Ac: 0, T: 1 } },
    ],
  },
  {
    id: 15,
    text: "You're in a position of power. Someone offers you a gift in exchange for a favour. It's a small favour. You:",
    options: [
      { id: "a", text: "Refuse — even small favours corrupt the system.", scores: { Ac: 4, T: 4 } },
      { id: "b", text: "Accept the gift but don't do the favour — you're not corrupt.", scores: { Ac: 1, T: 2, A: 2 } },
      { id: "c", text: "Accept both — the favour is small and everyone does it.", scores: { Ac: 0, T: 0, S: 2 } },
      { id: "d", text: "Accept the gift and do the favour, but justify it as 'helping someone'.", scores: { Ac: 0, T: 0, A: 3 } },
    ],
  },
  {
    id: 16,
    text: "You see someone being praised for something they didn't actually do. You:",
    options: [
      { id: "a", text: "Speak up — false praise harms everyone.", scores: { T: 4, Ac: 4, A: 3 } },
      { id: "b", text: "Stay quiet — it's not your problem.", scores: { T: 1, A: 0, S: 1 } },
      { id: "c", text: "Use the moment to position yourself as the real contributor.", scores: { T: 1, Ac: 0, A: 4 } },
      { id: "d", text: "Congratulate them publicly, then correct the record privately.", scores: { T: 2, S: 3, Ac: 2 } },
    ],
  },
  {
    id: 17,
    text: "A policy you strongly oppose is popular with most people. You:",
    options: [
      { id: "a", text: "Speak against it with evidence — popularity doesn't make something right.", scores: { T: 4, A: 4, K: 3 } },
      { id: "b", text: "Accept it — democracy means accepting the majority view.", scores: { S: 3, T: 2, A: 1 } },
      { id: "c", text: "Stay quiet but vote against it.", scores: { T: 2, A: 1, S: 2 } },
      { id: "d", text: "Publicly support it while privately working to undermine it.", scores: { T: 0, Ac: 0, A: 4 } },
    ],
  },
  {
    id: 18,
    text: "You have the opportunity to exaggerate your qualifications to get a job you're almost qualified for. You:",
    options: [
      { id: "a", text: "Don't exaggerate — if you don't get it, you don't deserve it.", scores: { Ac: 4, T: 4 } },
      { id: "b", text: "Emphasise your strengths honestly — let them decide.", scores: { T: 3, Ac: 3, A: 2 } },
      { id: "c", text: "Add a small exaggeration — everyone does this.", scores: { T: 1, Ac: 1, A: 3 } },
      { id: "d", text: "Lie boldly — you'll figure out the rest once you're in.", scores: { T: 0, Ac: 0, A: 4 } },
    ],
  },
  {
    id: 19,
    text: "Your community needs a leader. The most qualified person is unpopular. The most popular person is unqualified. You support:",
    options: [
      { id: "a", text: "The qualified person — competence matters more than popularity.", scores: { K: 4, T: 4, S: 2 } },
      { id: "b", text: "The popular person — they can learn and they have the people's trust.", scores: { S: 4, T: 1, A: 2 } },
      { id: "c", text: "Neither — find a compromise candidate.", scores: { S: 3, T: 2, A: 2 } },
      { id: "d", text: "Whoever will advance your interests.", scores: { Ac: 0, T: 0, A: 4 } },
    ],
  },
  {
    id: 20,
    text: "You can make a difference in your community, but it requires sacrificing your personal comfort. You:",
    options: [
      { id: "a", text: "Make the sacrifice — the community needs you.", scores: { S: 4, Ac: 4, A: 3 } },
      { id: "b", text: "Find a way to help without sacrificing too much.", scores: { S: 3, A: 3, Ac: 2 } },
      { id: "c", text: "Focus on your own success first — you can help later.", scores: { A: 3, S: 1, Ac: 1 } },
      { id: "d", text: "Talk about helping but don't actually do it — the intention counts.", scores: { S: 1, Ac: 0, A: 2 } },
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
      verdict: "10,000 Builders = Industrialised Nigeria in a decade.",
      verdictDetail:
        "Roads get fixed. Power plants get built. Factories rise. The society moves like Dangote's empire — relentless execution, visible results, infrastructure that compounds. But builders treat people like metrics. Empathy is a luxury. Those who can't keep up get paved over. The society is productive but cold.",
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
      verdict: "10,000 Sages = A society that debates brilliantly while the house burns.",
      verdictDetail:
        "Universities become world-class. Research output explodes. Every policy is rigorously analysed. But nothing gets done fast. A society of sages will write 47 white papers on fixing the power grid while the country stays dark. Depth without urgency. Wisdom without action. The smartest society that never quite arrives.",
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
      verdict: "10,000 Critics = A nation of Twitter threads that change nothing.",
      verdictDetail:
        "Every newspaper column is devastating. Every Twitter thread is viral. Every diagnosis is surgically precise. But no one picks up a hammer. The critics are always right and always watching — and the building crumbles around them because critique replaced construction. A society that knows exactly what's wrong and does nothing about it.",
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
      verdict: "10,000 Hustlers = Lagos on steroids — money moves, nothing gets built.",
      verdictDetail:
        "The hustle never stops. Markets are chaotic, deals are everywhere, someone is always making money. But there are no institutions, no long-term infrastructure, no systems. The economy booms and crashes in cycles. Everyone is moving, no one knows where. A society of pure motion without direction.",
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
      verdict: "10,000 Followers = A society waiting for a strongman to tell it what to do.",
      verdictDetail:
        "Harmonious on the surface. Deeply vulnerable underneath. Whoever controls the narrative controls everything. The community follows the loudest voice, the most charismatic leader, the strongest man. Compliance is mistaken for consensus. A society that is easy to lead — and easy to exploit.",
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
      verdict: "10,000 Performers = Nollywood meets Instagram — entertaining, shallow, bankrupt.",
      verdictDetail:
        "Incredibly entertaining. Deeply hollow. The attention economy thrives. The loudest voice wins, not the wisest one. Leaders are chosen for charisma. Institutions are theatre. Everyone is performing, no one is building. The show must go on — even when the house is on fire.",
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
      verdict: "10,000 Skeptics = A society that can't be conned but also can't agree on anything.",
      verdictDetail:
        "Hard to manipulate, but also hard to organise. Progress is slow because consensus is impossible. Every institution is questioned. Every leader is suspected. The society is resilient against external threats but paralysed by internal distrust. Nothing gets built because no one trusts anyone enough to collaborate.",
    },
  },
  intellectual: {
    id: "intellectual",
    name: "The Intellectual",
    tagline: "I can argue either side.",
    description:
      "You are articulate, well-read, and capable of constructing brilliant arguments for any position — including ones you don't believe. You use knowledge as a weapon, not a compass. You know the truth but you also know how to obscure it. This makes you dangerous.",
    traits: ["Articulate", "Strategic", "Dishonest", "Persuasive"],
    color: "text-violet-400",
    accentHex: "#a78bfa",
    society: {
      education: 65,
      economy: 40,
      governance: 25,
      cohesion: 30,
      resilience: 45,
      verdict: "10,000 Intellectuals = A society of beautiful lies.",
      verdictDetail:
        "The courts are full. The newspapers are eloquent. The debates are dazzling. But nothing is resolved because every fact has a counter-argument, every truth has a paid defender of its opposite. Justice becomes a performance. Policy becomes theatre. The society is intellectually sophisticated and morally bankrupt. Lawyers are the highest caste. Truth is whatever you can afford to argue.",
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
      verdict: "10,000 Olodos = A society that burns bright and fast.",
      verdictDetail:
        "Entertaining to watch from outside. Devastating to live in. Schools collapse from disinterest. Expertise is mocked. Leaders are elected on charisma and confidence alone. Accountability is near zero. The society cannot handle any serious crisis — it has no tools to do so. A society that is its own worst enemy.",
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
  if (K > 50 && T < 30 && Ac < 30) return "intellectual"; // Smart but dishonest
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
