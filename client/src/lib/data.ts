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
// QUESTION BANK (25 questions)
// Mix of fun, serious, everyday scenarios - phone quiz style
// Reveals archetype through moral and behavioral choices
// ============================================================

export const QUESTIONS: Question[] = [
  // Q1: Group project - reveals initiative vs free-riding
  {
    id: 1,
    text: "You're in a group project and nobody's doing their part. You:",
    options: [
      { id: "a", text: "Take charge and organize everyone.", scores: { A: 4, S: 3, Ac: 3 } },
      { id: "b", text: "Do it all yourself to ensure it's done right.", scores: { A: 3, K: 2, Ac: 2 } },
      { id: "c", text: "Complain but don't actually do anything.", scores: { T: 1, A: 0, S: 1 } },
      { id: "d", text: "Let it fail — not your problem.", scores: { A: 0, T: 0, Ac: 0 } },
    ],
  },
  // Q2: Vaccine debate - reveals truth vs tribal loyalty
  {
    id: 2,
    text: "Your family is sharing anti-vaccine misinformation in the group chat. You:",
    options: [
      { id: "a", text: "Post scientific sources and correct them directly.", scores: { T: 4, K: 4, Ac: 3 } },
      { id: "b", text: "Stay quiet — family harmony matters more.", scores: { A: 1, T: 0, S: 2 } },
      { id: "c", text: "Privately message the most influential one with facts.", scores: { T: 3, S: 3, K: 2 } },
      { id: "d", text: "Use sophisticated arguments to 'both sides' the issue.", scores: { K: 3, T: 0, Ac: 0 } },
    ],
  },
  // Q3: Finding money - reveals integrity
  {
    id: 3,
    text: "You find ₦50,000 on the street. Nobody saw you pick it up. You:",
    options: [
      { id: "a", text: "Try to find the owner or turn it in.", scores: { T: 4, Ac: 4, S: 2 } },
      { id: "b", text: "Keep it — finders keepers.", scores: { A: 2, T: 1, Ac: 0 } },
      { id: "c", text: "Donate half and keep half.", scores: { S: 2, T: 2, Ac: 2 } },
      { id: "d", text: "Post about it on social media to look good.", scores: { A: 2, T: 0, Ac: 1 } },
    ],
  },
  // Q4: Restaurant service - reveals empathy vs entitlement
  {
    id: 4,
    text: "The waiter gets your order wrong for the third time. You:",
    options: [
      { id: "a", text: "Politely point it out and give them another chance.", scores: { S: 3, T: 3, Ac: 2 } },
      { id: "b", text: "Demand to speak to the manager.", scores: { A: 3, T: 1, S: 0 } },
      { id: "c", text: "Eat it anyway — life's too short to fight over food.", scores: { S: 2, A: 1, T: 2 } },
      { id: "d", text: "Leave a bad review online without saying anything in person.", scores: { T: 1, Ac: 1, A: 2 } },
    ],
  },
  // Q5: Friend's bad business idea - reveals honesty vs comfort
  {
    id: 5,
    text: "Your friend wants your opinion on their business idea, but you know it will fail. You:",
    options: [
      { id: "a", text: "Tell them honestly with specific reasons why.", scores: { T: 4, Ac: 4, S: 2 } },
      { id: "b", text: "Encourage them — they'll learn from experience.", scores: { S: 2, T: 1, A: 2 } },
      { id: "c", text: "Give vague feedback to avoid hurting their feelings.", scores: { T: 1, Ac: 0, S: 2 } },
      { id: "d", text: "Write a detailed analysis of why it will fail.", scores: { K: 3, T: 2, Ac: 2 } },
    ],
  },
  // Q6: Traffic violation - reveals rule-following vs convenience
  {
    id: 6,
    text: "You're late for an important meeting and tempted to break traffic rules. You:",
    options: [
      { id: "a", text: "Follow the rules — being late is better than being dangerous.", scores: { T: 4, Ac: 4, S: 2 } },
      { id: "b", text: "Break the rules — this meeting is too important.", scores: { A: 3, T: 0, Ac: 0 } },
      { id: "c", text: "Call ahead to say you'll be late.", scores: { T: 3, Ac: 3, S: 2 } },
      { id: "d", text: "Find a 'creative' route that's technically legal but risky.", scores: { K: 2, T: 1, Ac: 1 } },
    ],
  },
  // Q7: Social media argument - reveals engagement style
  {
    id: 7,
    text: "Someone posts something you strongly disagree with on social media. You:",
    options: [
      { id: "a", text: "Engage respectfully with counter-arguments.", scores: { T: 3, K: 3, S: 2 } },
      { id: "b", text: "Ignore it — not worth the energy.", scores: { A: 1, T: 1, S: 1 } },
      { id: "c", text: "Write a detailed takedown to show everyone they're wrong.", scores: { K: 3, A: 2, T: 2 } },
      { id: "d", text: "Mock them publicly to undermine their credibility.", scores: { A: 2, T: 0, Ac: 0 } },
    ],
  },
  // Q8: Cheating on test - reveals integrity under pressure
  {
    id: 8,
    text: "You're failing a course and could easily cheat to pass. Nobody would know. You:",
    options: [
      { id: "a", text: "Don't cheat — fail honestly and retake it.", scores: { T: 4, Ac: 4, S: 2 } },
      { id: "b", text: "Cheat — everyone does it and the system is broken anyway.", scores: { T: 0, Ac: 0, A: 2 } },
      { id: "c", text: "Study harder and accept whatever grade you get.", scores: { A: 3, T: 3, Ac: 3 } },
      { id: "d", text: "Find a way to 'borrow' answers without getting caught.", scores: { K: 2, T: 0, Ac: 0 } },
    ],
  },
  // Q9: Community problem - reveals action vs talk
  {
    id: 9,
    text: "There's a broken streetlight in your neighborhood that's been there for months. You:",
    options: [
      { id: "a", text: "Call the authorities and follow up until it's fixed.", scores: { A: 4, Ac: 4, S: 3 } },
      { id: "b", text: "Post about it on social media to raise awareness.", scores: { S: 2, A: 1, T: 1 } },
      { id: "c", text: "Complain to neighbors but don't actually report it.", scores: { S: 1, A: 0, T: 0 } },
      { id: "d", text: "Ignore it — not your problem.", scores: { A: 0, S: 0, T: 0 } },
    ],
  },
  // Q10: Friend's toxic relationship - reveals intervention style
  {
    id: 10,
    text: "Your friend is in a toxic relationship. You can see it clearly. You:",
    options: [
      { id: "a", text: "Tell them directly with specific examples.", scores: { T: 4, Ac: 4, S: 3 } },
      { id: "b", text: "Drop hints and hope they figure it out.", scores: { T: 2, S: 2, Ac: 1 } },
      { id: "c", text: "Stay out of it — it's their life.", scores: { A: 1, T: 1, S: 1 } },
      { id: "d", text: "Write a long message explaining why it's toxic.", scores: { K: 3, T: 3, S: 2 } },
    ],
  },
  // Q11: Work credit - reveals integrity
  {
    id: 11,
    text: "Your boss praises you for work your colleague actually did. You:",
    options: [
      { id: "a", text: "Correct them immediately and give credit where it's due.", scores: { T: 4, Ac: 4, S: 3 } },
      { id: "b", text: "Accept the praise but mention your colleague privately.", scores: { T: 2, Ac: 2, S: 2 } },
      { id: "c", text: "Accept the praise — they should have spoken up.", scores: { T: 0, Ac: 0, A: 2 } },
      { id: "d", text: "Downplay your role to redirect attention.", scores: { T: 2, S: 2, Ac: 1 } },
    ],
  },
  // Q12: Party conversation - reveals intellectual honesty
  {
    id: 12,
    text: "At a party, someone makes a factually wrong claim everyone agrees with. You:",
    options: [
      { id: "a", text: "Correct them with evidence.", scores: { T: 4, K: 4, Ac: 3 } },
      { id: "b", text: "Let it slide — it's a party, not a debate.", scores: { S: 2, T: 1, A: 1 } },
      { id: "c", text: "Use sophisticated arguments to defend their position.", scores: { K: 4, T: 0, Ac: 0 } },
      { id: "d", text: "Privately correct them later.", scores: { T: 3, S: 3, Ac: 2 } },
    ],
  },
  // Q13: Queue jumping - reveals rule enforcement
  {
    id: 13,
    text: "Someone cuts in front of you in a long queue. You:",
    options: [
      { id: "a", text: "Call them out directly.", scores: { T: 4, Ac: 4, A: 3 } },
      { id: "b", text: "Complain to people behind you but not to them.", scores: { T: 1, A: 1, S: 1 } },
      { id: "c", text: "Let it go — not worth the confrontation.", scores: { S: 2, T: 1, A: 0 } },
      { id: "d", text: "Cut in front of someone else to 'balance' it.", scores: { T: 0, Ac: 0, A: 2 } },
    ],
  },
  // Q14: Learning something new - reveals approach to knowledge
  {
    id: 14,
    text: "You need to learn a new skill for work. You:",
    options: [
      { id: "a", text: "Dive deep into tutorials and practice deliberately.", scores: { K: 4, A: 4, Ac: 3 } },
      { id: "b", text: "Learn just enough to get by.", scores: { A: 2, K: 1, T: 1 } },
      { id: "c", text: "Find someone to do it for you while you 'supervise.'", scores: { A: 2, T: 0, Ac: 0 } },
      { id: "d", text: "Watch videos but never actually practice.", scores: { K: 1, A: 0, T: 0 } },
    ],
  },
  // Q15: Gossip - reveals social behavior
  {
    id: 15,
    text: "Your friends are gossiping about someone who isn't there. You:",
    options: [
      { id: "a", text: "Change the subject or defend the person.", scores: { T: 4, Ac: 4, S: 2 } },
      { id: "b", text: "Listen but don't contribute.", scores: { T: 2, S: 1, A: 1 } },
      { id: "c", text: "Join in — it's just conversation.", scores: { T: 0, Ac: 0, S: 2 } },
      { id: "d", text: "Add your own 'insights' to sound knowledgeable.", scores: { K: 2, T: 0, Ac: 0 } },
    ],
  },
  // Q16: Mistake at work - reveals accountability
  {
    id: 16,
    text: "You make a costly mistake at work. Nobody knows it was you. You:",
    options: [
      { id: "a", text: "Own up to it immediately.", scores: { T: 4, Ac: 4, S: 2 } },
      { id: "b", text: "Try to fix it quietly before anyone notices.", scores: { A: 3, T: 2, Ac: 2 } },
      { id: "c", text: "Stay quiet — if they don't know, it's not your problem.", scores: { T: 0, Ac: 0, A: 1 } },
      { id: "d", text: "Blame the system or someone else.", scores: { T: 0, Ac: 0, A: 2 } },
    ],
  },
  // Q17: Helping a stranger - reveals social orientation
  {
    id: 17,
    text: "You see someone struggling with heavy bags on the street. You:",
    options: [
      { id: "a", text: "Offer to help without hesitation.", scores: { S: 4, Ac: 3, A: 3 } },
      { id: "b", text: "Help if it's convenient for you.", scores: { S: 2, A: 2, T: 1 } },
      { id: "c", text: "Ignore them — everyone has their own problems.", scores: { S: 0, A: 1, T: 0 } },
      { id: "d", text: "Feel bad but keep walking.", scores: { S: 1, T: 1, A: 0 } },
    ],
  },
  // Q18: Political discussion - reveals tribal vs principled
  {
    id: 18,
    text: "Your political party is clearly wrong about something. You:",
    options: [
      { id: "a", text: "Speak out against it, even to fellow party members.", scores: { T: 4, Ac: 4, S: 2 } },
      { id: "b", text: "Support the party — unity matters more.", scores: { A: 2, T: 0, S: 2 } },
      { id: "c", text: "Stay quiet but vote your conscience.", scores: { T: 3, Ac: 2, A: 2 } },
      { id: "d", text: "Write sophisticated defenses of the party's position.", scores: { K: 4, T: 0, Ac: 0 } },
    ],
  },
  // Q19: Promising something - reveals commitment
  {
    id: 19,
    text: "You promise to help a friend move, but something better comes up. You:",
    options: [
      { id: "a", text: "Keep your promise — a promise is a promise.", scores: { T: 4, Ac: 4, S: 3 } },
      { id: "b", text: "Cancel and reschedule, even though it inconveniences them.", scores: { A: 2, T: 2, Ac: 1 } },
      { id: "c", text: "Take the better opportunity and apologize later.", scores: { A: 3, T: 0, Ac: 0 } },
      { id: "d", text: "Find an excuse to get out of it.", scores: { T: 0, Ac: 0, A: 2 } },
    ],
  },
  // Q20: Expert opinion - reveals intellectual humility
  {
    id: 20,
    text: "Someone with less education than you makes a valid point. You:",
    options: [
      { id: "a", text: "Acknowledge it openly and update your view.", scores: { T: 4, Ac: 4, S: 3 } },
      { id: "b", text: "Listen but respond with more sophisticated arguments.", scores: { K: 3, T: 2, Ac: 1 } },
      { id: "c", text: "Dismiss them subtly — they don't understand the complexity.", scores: { K: 2, T: 0, Ac: 0 } },
      { id: "d", text: "Use their lack of education to undermine their point.", scores: { K: 3, T: 0, Ac: 0 } },
    ],
  },
  // Q21: Sharing resources - reveals generosity
  {
    id: 21,
    text: "You have extra food and your neighbor is struggling. You:",
    options: [
      { id: "a", text: "Share it freely without making them feel bad.", scores: { S: 4, Ac: 3, T: 3 } },
      { id: "b", text: "Offer to sell it to them at a discount.", scores: { A: 2, S: 1, T: 1 } },
      { id: "c", text: "Wait for them to ask — you won't impose.", scores: { S: 1, T: 2, A: 1 } },
      { id: "d", text: "Keep it — you earned it.", scores: { S: 0, A: 2, T: 0 } },
    ],
  },
  // Q22: Changing your mind - reveals intellectual honesty
  {
    id: 22,
    text: "You've publicly defended a position for years. New evidence proves you wrong. You:",
    options: [
      { id: "a", text: "Publicly admit you were wrong and explain why.", scores: { T: 4, Ac: 4, S: 2 } },
      { id: "b", text: "Quietly shift your position without acknowledging it.", scores: { T: 1, Ac: 1, K: 2 } },
      { id: "c", text: "Find sophisticated reasons why the evidence doesn't apply.", scores: { K: 4, T: 0, Ac: 0 } },
      { id: "d", text: "Ignore the evidence — you've invested too much.", scores: { T: 0, Ac: 0, A: 2 } },
    ],
  },
  // Q23: Winning an argument - reveals what matters
  {
    id: 23,
    text: "You're winning an argument but realize you're actually wrong. You:",
    options: [
      { id: "a", text: "Stop and admit you're wrong.", scores: { T: 4, Ac: 4, S: 2 } },
      { id: "b", text: "Keep going — the crowd doesn't know the difference.", scores: { T: 0, Ac: 0, A: 3 } },
      { id: "c", text: "Pivot subtly to a related point you're right about.", scores: { K: 3, T: 1, Ac: 1 } },
      { id: "d", text: "Double down with more sophisticated arguments.", scores: { K: 4, T: 0, Ac: 0 } },
    ],
  },
  // Q24: Community event - reveals participation
  {
    id: 24,
    text: "Your community is organizing a cleanup event. You:",
    options: [
      { id: "a", text: "Show up early and help organize.", scores: { S: 4, Ac: 4, A: 3 } },
      { id: "b", text: "Show up if your schedule allows.", scores: { S: 2, A: 2, T: 1 } },
      { id: "c", text: "Post about it on social media to show support.", scores: { S: 1, A: 1, T: 0 } },
      { id: "d", text: "Don't go — that's what the government is for.", scores: { S: 0, A: 1, T: 0 } },
    ],
  },
  // Q25: Success definition - reveals values
  {
    id: 25,
    text: "What does success mean to you?",
    options: [
      { id: "a", text: "Building something that outlasts you.", scores: { S: 4, Ac: 4, A: 3 } },
      { id: "b", text: "Being recognized as an expert in your field.", scores: { K: 4, A: 3, S: 1 } },
      { id: "c", text: "Having enough freedom to do what you want.", scores: { A: 3, T: 2, S: 1 } },
      { id: "d", text: "Being wealthier than everyone you know.", scores: { A: 3, T: 0, S: 0 } },
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

  // The Olodo: Low knowledge, low truthfulness, low accountability
  if (K < 30 && T < 25 && Ac < 25) return "olodo";
  
  // The Intellectual: High knowledge but low truthfulness and accountability
  // Smart but dishonest - uses education to justify lies, bigotry, corruption
  if (K > 45 && T < 35 && Ac < 35) return "intellectual";
  
  // The Hustler: Low knowledge but high agency
  if (K < 30 && A > 50) return "hustler";
  
  // The Follower: Low knowledge and low agency
  if (K < 30 && A < 30) return "follower";
  
  // The Sage: High knowledge, high agency, high solidarity
  if (K > 50 && A > 50 && S > 50) return "sage";
  
  // The Builder: High knowledge, high agency, lower solidarity
  if (K > 50 && A > 50 && S < 40) return "builder";
  
  // The Critic: High knowledge but low agency
  if (K > 50 && A < 35) return "critic";
  
  // The Performer: High agency but low solidarity
  if (A > 50 && S < 30) return "performer";
  
  // The Skeptic: Everything else (default)
  return "skeptic";
}

export const SOCIETY_DIMENSIONS = [
  { key: "education" as const, label: "Education & Knowledge" },
  { key: "economy" as const, label: "Economy & Productivity" },
  { key: "governance" as const, label: "Governance" },
  { key: "cohesion" as const, label: "Social Cohesion" },
  { key: "resilience" as const, label: "Resilience" },
];
