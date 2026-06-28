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
// Nigerian context — forces ownership of real behaviors
// Reveals archetypes through moral, religious, ethnic, and economic choices
// ============================================================

export const QUESTIONS: Question[] = [
  // Q1: Religious violence — reveals truth vs tribal/religious loyalty
  {
    id: 1,
    text: "A student is accused of blasphemy and killed by a mob. Your religious leaders say the killing was 'understandable.' You:",
    options: [
      { id: "a", text: "Condemn the killing publicly, regardless of your faith.", scores: { T: 4, Ac: 4, S: 3 } },
      { id: "b", text: "Stay quiet — speaking out puts you at risk.", scores: { A: 2, T: 0, Ac: 0 } },
      { id: "c", text: "Write sophisticated arguments about 'religious sensitivity' that implicitly justify the mob.", scores: { K: 4, T: 0, Ac: 0 } },
      { id: "d", text: "Share angry posts but don't actually do anything concrete.", scores: { S: 2, T: 1, Ac: 1 } },
    ],
  },
  // Q2: Ethnic hiring — reveals merit vs tribal loyalty
  {
    id: 2,
    text: "You're hiring. A qualified candidate from your ethnic group is available, but there's a better candidate from a different group. You:",
    options: [
      { id: "a", text: "Hire the best candidate, regardless of ethnicity.", scores: { T: 4, Ac: 4, K: 2 } },
      { id: "b", text: "Hire your ethnic kin — they'll understand the culture better.", scores: { A: 3, T: 0, Ac: 0 } },
      { id: "c", text: "Create a sophisticated justification for why your ethnic candidate is actually better.", scores: { K: 4, T: 0, Ac: 0 } },
      { id: "d", text: "Delay the decision and hope someone else makes it for you.", scores: { A: 2, T: 1, S: 1 } },
    ],
  },
  // Q3: Corruption compromise — reveals integrity vs pragmatism
  {
    id: 3,
    text: "A politician offers you funding for your community project, but the money comes from corruption. You:",
    options: [
      { id: "a", text: "Refuse — dirty money corrupts the project.", scores: { T: 4, Ac: 4, S: 2 } },
      { id: "b", text: "Accept it — the community needs this, and you can do good with the money.", scores: { A: 3, S: 3, T: 1 } },
      { id: "c", text: "Accept it and write op-eds defending the politician's 'generosity.'", scores: { K: 4, T: 0, Ac: 0 } },
      { id: "d", text: "Publicly condemn corruption but privately take the money.", scores: { T: 0, Ac: 0, A: 3 } },
    ],
  },
  // Q4: Religious bigotry in politics — reveals principle vs voting bloc
  {
    id: 4,
    text: "A presidential candidate from your religion makes openly bigoted statements against other faiths. Your religious leaders endorse them. You:",
    options: [
      { id: "a", text: "Vote against them and speak out against the bigotry.", scores: { T: 4, Ac: 4, S: 3 } },
      { id: "b", text: "Vote for them anyway — religious solidarity matters more.", scores: { A: 3, T: 0, Ac: 0 } },
      { id: "c", text: "Write nuanced pieces about 'understanding both sides' without condemning the bigotry.", scores: { K: 4, T: 0, Ac: 0 } },
      { id: "d", text: "Don't vote — all politicians are the same.", scores: { T: 1, A: 2, S: 1 } },
    ],
  },
  // Q5: Media manipulation — reveals critical thinking vs gullibility
  {
    id: 5,
    text: "A viral video shows your ethnic group attacking another group. Later, evidence emerges the video was doctored. You:",
    options: [
      { id: "a", text: "Publicly correct the record and apologize for sharing it.", scores: { T: 4, Ac: 4, S: 2 } },
      { id: "b", text: "Quietly delete your posts without acknowledging the error.", scores: { T: 1, Ac: 1, A: 2 } },
      { id: "c", text: "Argue that even if doctored, it 'reflects underlying truths.'", scores: { K: 4, T: 0, Ac: 0 } },
      { id: "d", text: "Share the debunking but also share 'concerns' about the other group.", scores: { T: 1, A: 2, K: 2 } },
    ],
  },
  // Q6: Expertise for hire — reveals intellectual honesty
  {
    id: 6,
    text: "You're an expert. A group pays you to produce research supporting their position, which you know is wrong. You:",
    options: [
      { id: "a", text: "Decline — your expertise has ethical limits.", scores: { T: 4, Ac: 4, K: 2 } },
      { id: "b", text: "Accept the money and produce the best case you can for their position.", scores: { K: 4, T: 0, Ac: 0 } },
      { id: "c", text: "Accept but water down the conclusions to be less misleading.", scores: { T: 2, Ac: 2, K: 2 } },
      { id: "d", text: "Accept and donate the money to charity — you're still doing good.", scores: { A: 3, S: 2, T: 1 } },
    ],
  },
  // Q7: Criticizing successful people — reveals economic hypocrisy
  {
    id: 7,
    text: "A young entrepreneur who dropped out of university becomes a billionaire. You're a educated professional struggling financially. You:",
    options: [
      { id: "a", text: "Acknowledge their success and learn from their approach.", scores: { T: 4, Ac: 4, S: 2 } },
      { id: "b", text: "Criticize them — they got lucky or did something unethical.", scores: { K: 2, T: 0, Ac: 0, A: 2 } },
      { id: "c", text: "Write sophisticated analyses of why their success is 'problematic.'", scores: { K: 4, T: 0, Ac: 0 } },
      { id: "d", text: "Ignore them — focus on your own career.", scores: { A: 2, T: 1, S: 1 } },
    ],
  },
  // Q8: Tribal violence — reveals moral clarity vs tribal loyalty
  {
    id: 8,
    text: "Members of your ethnic group are attacked. Your community demands revenge against innocent people from another group. You:",
    options: [
      { id: "a", text: "Condemn revenge and demand justice through proper channels.", scores: { T: 4, Ac: 4, S: 3 } },
      { id: "b", text: "Support revenge — your people need to defend themselves.", scores: { A: 3, T: 0, Ac: 0 } },
      { id: "c", text: "Write sophisticated justifications for why revenge is 'understandable.'", scores: { K: 4, T: 0, Ac: 0 } },
      { id: "d", text: "Stay quiet — speaking out makes you a target from both sides.", scores: { A: 2, T: 0, S: 1 } },
    ],
  },
  // Q9: Educational standards — reveals merit vs access
  {
    id: 9,
    text: "University admission standards are excluding many students from your region. You:",
    options: [
      { id: "a", text: "Advocate for better primary education, not lower standards.", scores: { K: 4, S: 4, Ac: 3 } },
      { id: "b", text: "Demand quota systems to ensure your region is represented.", scores: { A: 3, T: 1, K: 1 } },
      { id: "c", text: "Write op-eds about how 'standardized testing is culturally biased.'", scores: { K: 3, T: 1, A: 2 } },
      { id: "d", text: "Accept that your region needs to catch up — standards shouldn't change.", scores: { T: 3, Ac: 3, A: 1 } },
    ],
  },
  // Q10: Whistleblowing — reveals loyalty vs truth
  {
    id: 10,
    text: "You discover your organization is engaged in harmful practices. Reporting it will hurt your community's reputation. You:",
    options: [
      { id: "a", text: "Report it — harm is harm, regardless of who commits it.", scores: { T: 4, Ac: 4, S: 3 } },
      { id: "b", text: "Try to fix it internally first, without public exposure.", scores: { S: 3, Ac: 3, T: 2 } },
      { id: "c", text: "Stay quiet — your community has enough problems.", scores: { A: 3, T: 0, Ac: 0 } },
      { id: "d", text: "Leak it anonymously but deny involvement if questioned.", scores: { T: 2, Ac: 1, A: 2 } },
    ],
  },
  // Q11: Religious extremism — reveals principle vs comfort
  {
    id: 11,
    text: "Your religious community is becoming increasingly intolerant. You:",
    options: [
      { id: "a", text: "Speak out against the intolerance, even if it makes you unpopular.", scores: { T: 4, Ac: 4, S: 3 } },
      { id: "b", text: "Leave and find a more tolerant community.", scores: { S: 2, T: 2, A: 2 } },
      { id: "c", text: "Stay but focus on the 'positive aspects' of your faith.", scores: { A: 2, T: 1, S: 2 } },
      { id: "d", text: "Go along with it — you don't want to rock the boat.", scores: { A: 3, T: 0, Ac: 0 } },
    ],
  },
  // Q12: Political corruption — reveals action vs cynicism
  {
    id: 12,
    text: "Your preferred politician is caught in corruption. You:",
    options: [
      { id: "a", text: "Condemn them and support accountability, even if it hurts your side.", scores: { T: 4, Ac: 4, S: 3 } },
      { id: "b", text: "Defend them — all politicians are corrupt, and your side needs power.", scores: { A: 3, T: 0, Ac: 0 } },
      { id: "c", text: "Write nuanced pieces about 'the complexity of governance.'", scores: { K: 4, T: 0, Ac: 0 } },
      { id: "d", text: "Become more cynical — all politicians are the same.", scores: { T: 1, A: 2, S: 1 } },
    ],
  },
  // Q13: Gender discrimination — reveals principle vs culture
  {
    id: 13,
    text: "Your cultural tradition discriminates against women. You:",
    options: [
      { id: "a", text: "Challenge the tradition publicly and advocate for change.", scores: { T: 4, Ac: 4, S: 3 } },
      { id: "b", text: "Work within the tradition to slowly change it.", scores: { S: 3, Ac: 3, T: 2 } },
      { id: "c", text: "Defend the tradition as 'cultural preservation.'", scores: { K: 3, T: 0, Ac: 0, A: 2 } },
      { id: "d", text: "Follow the tradition personally but don't impose it on others.", scores: { A: 2, T: 1, S: 1 } },
    ],
  },
  // Q14: Media responsibility — reveals truth vs narrative
  {
    id: 14,
    text: "You're a journalist. A story that would help your community is based on weak evidence. You:",
    options: [
      { id: "a", text: "Don't publish it — weak evidence is irresponsible.", scores: { T: 4, Ac: 4, K: 3 } },
      { id: "b", text: "Publish it with caveats about the evidence.", scores: { T: 2, Ac: 2, K: 2 } },
      { id: "c", text: "Publish it — the narrative is more important than perfect evidence.", scores: { K: 3, T: 0, Ac: 0, A: 2 } },
      { id: "d", text: "Wait for stronger evidence, even if it means missing the story.", scores: { K: 3, T: 3, Ac: 2 } },
    ],
  },
  // Q15: Youth unemployment — reveals solutions vs complaints
  {
    id: 15,
    text: "Youth unemployment is crisis-level. You:",
    options: [
      { id: "a", text: "Start a business or training program to create opportunities.", scores: { S: 4, Ac: 4, A: 3 } },
      { id: "b", text: "Advocate for policy changes and systemic reform.", scores: { K: 3, S: 3, Ac: 3 } },
      { id: "c", text: "Post about the problem and blame the government.", scores: { S: 2, T: 1, Ac: 1 } },
      { id: "d", text: "Focus on your own career — you can't solve systemic problems.", scores: { A: 3, T: 0, S: 0 } },
    ],
  },
  // Q16: Interfaith marriage — reveals principle vs prejudice
  {
    id: 16,
    text: "Your child wants to marry someone from a different religion. Your religious community opposes it. You:",
    options: [
      { id: "a", text: "Support their choice — love matters more than religion.", scores: { T: 4, Ac: 4, S: 2 } },
      { id: "b", text: "Ask them to reconsider — religious compatibility is important.", scores: { A: 3, T: 1, S: 2 } },
      { id: "c", text: "Write sophisticated arguments about 'preserving religious identity.'", scores: { K: 4, T: 0, Ac: 0 } },
      { id: "d", text: "Oppose it strongly — religious boundaries must be maintained.", scores: { A: 3, T: 0, Ac: 0 } },
    ],
  },
  // Q17: Historical revisionism — reveals truth vs narrative
  {
    id: 17,
    text: "Your ethnic group's historical narrative about a conflict is inaccurate. You:",
    options: [
      { id: "a", text: "Correct the record, even if it undermines your group's position.", scores: { T: 4, Ac: 4, S: 3 } },
      { id: "b", text: "Stay quiet — the narrative serves a purpose.", scores: { A: 3, T: 0, Ac: 0 } },
      { id: "c", text: "Write sophisticated histories that 'contextualize' the inaccuracies.", scores: { K: 4, T: 0, Ac: 0 } },
      { id: "d", text: "Privately know the truth but publicly support the narrative.", scores: { T: 1, Ac: 0, A: 2, K: 2 } },
    ],
  },
  // Q18: Resource allocation — reveals merit vs favoritism
  {
    id: 18,
    text: "You control resources for your community. Your family expects preferential treatment. You:",
    options: [
      { id: "a", text: "Allocate based on need and merit, regardless of family.", scores: { T: 4, Ac: 4, S: 3 } },
      { id: "b", text: "Help your family first — that's what family is for.", scores: { A: 3, T: 0, Ac: 0 } },
      { id: "c", text: "Create complex criteria that justify helping your family.", scores: { K: 4, T: 0, Ac: 0 } },
      { id: "d", text: "Try to balance family expectations with fair allocation.", scores: { T: 2, Ac: 2, A: 2 } },
    ],
  },
  // Q19: Political tribalism — reveals truth vs team loyalty
  {
    id: 19,
    text: "Your political party is clearly wrong about a policy. You:",
    options: [
      { id: "a", text: "Speak out publicly against the wrong policy.", scores: { T: 4, Ac: 4, S: 3 } },
      { id: "b", text: "Support the party — unity matters more than being right.", scores: { A: 3, T: 0, Ac: 0 } },
      { id: "c", text: "Write sophisticated defenses of the party's position.", scores: { K: 4, T: 0, Ac: 0 } },
      { id: "d", text: "Leave the party and find one that aligns with your views.", scores: { T: 3, S: 2, A: 1 } },
    ],
  },
  // Q20: Educational access — reveals solutions vs excuses
  {
    id: 20,
    text: "Students from your region perform poorly on national exams. You:",
    options: [
      { id: "a", text: "Invest in better teaching and infrastructure in your region.", scores: { S: 4, Ac: 4, K: 3 } },
      { id: "b", text: "Argue that the exams are culturally biased and demand changes.", scores: { K: 3, A: 2, T: 1 } },
      { id: "c", text: "Blame the government for underfunding your region's schools.", scores: { S: 2, T: 1, A: 2 } },
      { id: "d", text: "Accept that your region needs to improve its educational culture.", scores: { T: 3, Ac: 3, S: 2 } },
    ],
  },
  // Q21: Corruption in your community — reveals action vs acceptance
  {
    id: 21,
    text: "You discover corruption in your community's leadership. You:",
    options: [
      { id: "a", text: "Expose it publicly and demand accountability.", scores: { T: 4, Ac: 4, S: 3 } },
      { id: "b", text: "Try to address it privately to avoid embarrassing the community.", scores: { S: 3, Ac: 3, T: 2 } },
      { id: "c", text: "Accept it — corruption is everywhere, and your community needs stability.", scores: { A: 3, T: 0, Ac: 0 } },
      { id: "d", text: "Use the information to gain leverage for your own benefit.", scores: { A: 3, T: 0, Ac: 0, K: 2 } },
    ],
  },
  // Q22: Intellectual dishonesty — reveals the core Intellectual trait
  {
    id: 22,
    text: "You're at a dinner party and someone makes a factually incorrect claim that aligns with your political views. You:",
    options: [
      { id: "a", text: "Correct them — truth matters more than tribal loyalty.", scores: { T: 4, Ac: 4, S: 2 } },
      { id: "b", text: "Stay quiet — it's not worth correcting someone on your side.", scores: { T: 0, Ac: 0, A: 2 } },
      { id: "c", text: "Use sophisticated arguments to defend their position, even though you know it's wrong.", scores: { T: 0, Ac: 0, K: 4 } },
      { id: "d", text: "Privately correct them later to maintain the relationship.", scores: { T: 3, S: 3, Ac: 2 } },
    ],
  },
  // Q23: Teaching controversial topics — reveals intellectual courage
  {
    id: 23,
    text: "You're asked to teach a course where the evidence clearly supports one conclusion, but your audience believes the opposite. You:",
    options: [
      { id: "a", text: "Teach the evidence regardless of audience beliefs.", scores: { T: 4, K: 4, Ac: 3 } },
      { id: "b", text: "Present both sides equally, even though one is clearly wrong.", scores: { T: 1, Ac: 1, K: 2 } },
      { id: "c", text: "Frame the evidence in a way that supports what the audience already believes.", scores: { T: 0, Ac: 0, K: 3 } },
      { id: "d", text: "Avoid the controversial parts and focus on uncontested material.", scores: { T: 2, Ac: 2, A: 1 } },
    ],
  },
  // Q24: Changing your mind — reveals intellectual honesty
  {
    id: 24,
    text: "You've publicly defended a position for years. New evidence proves you wrong. You:",
    options: [
      { id: "a", text: "Publicly admit you were wrong and explain what changed your mind.", scores: { T: 4, Ac: 4, S: 2 } },
      { id: "b", text: "Quietly shift your position without acknowledging the contradiction.", scores: { T: 1, Ac: 1, K: 2 } },
      { id: "c", text: "Find sophisticated reasons why the evidence doesn't apply to your case.", scores: { K: 4, T: 0, Ac: 0 } },
      { id: "d", text: "Ignore the evidence — you've invested too much to change now.", scores: { T: 0, Ac: 0, A: 2 } },
    ],
  },
  // Q25: Community development — reveals builder vs talker
  {
    id: 25,
    text: "Your community needs a school. The government won't build it. You:",
    options: [
      { id: "a", text: "Organize the community and start building it yourselves.", scores: { S: 4, Ac: 4, A: 3 } },
      { id: "b", text: "Write detailed proposals and lobby the government persistently.", scores: { K: 3, S: 3, Ac: 3 } },
      { id: "c", text: "Post about the problem on social media and tag relevant officials.", scores: { S: 2, T: 1, Ac: 1 } },
      { id: "d", text: "Wait for someone else to solve it — it's not your responsibility.", scores: { A: 2, T: 0, S: 0 } },
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
