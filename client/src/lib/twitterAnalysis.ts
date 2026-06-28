/**
 * Twitter Verification — Behavioral analysis from pasted tweets
 * Maps tweet content to the 5 cognitive axes, then classifies archetype
 * Zero API dependency — pure client-side keyword analysis
 */

import { type AxisScores, type ArchetypeId, classifyArchetype } from "./data";

// Keyword dictionaries mapped to each cognitive axis
// Each keyword has a weight (1-3) based on signal strength
const AXIS_KEYWORDS: Record<string, { word: string; weight: number }[]> = {
  K: [ // Knowledge Orientation
    { word: "research", weight: 3 },
    { word: "study", weight: 2 },
    { word: "data", weight: 2 },
    { word: "evidence", weight: 3 },
    { word: "analysis", weight: 2 },
    { word: "learn", weight: 2 },
    { word: "learned", weight: 2 },
    { word: "knowledge", weight: 3 },
    { word: "expert", weight: 2 },
    { word: "expertise", weight: 3 },
    { word: "academic", weight: 2 },
    { word: "study", weight: 2 },
    { word: "phd", weight: 3 },
    { word: "masters", weight: 2 },
    { word: "degree", weight: 2 },
    { word: "university", weight: 1 },
    { word: "professor", weight: 3 },
    { word: "scholar", weight: 3 },
    { word: "read", weight: 1 },
    { word: "reading", weight: 1 },
    { word: "book", weight: 1 },
    { word: "books", weight: 1 },
    { word: "think", weight: 1 },
    { word: "thinking", weight: 1 },
    { word: "believe", weight: 1 },
    { word: "opinion", weight: 1 },
    { word: "perspective", weight: 2 },
    { word: "understand", weight: 2 },
    { word: "understanding", weight: 2 },
  ],
  S: [ // Social Orientation
    { word: "community", weight: 3 },
    { word: "together", weight: 2 },
    { word: "collaboration", weight: 3 },
    { word: "collaborate", weight: 3 },
    { word: "help", weight: 2 },
    { word: "helping", weight: 2 },
    { word: "support", weight: 2 },
    { word: "people", weight: 1 },
    { word: "we", weight: 1 },
    { word: "us", weight: 1 },
    { word: "our", weight: 1 },
    { word: "team", weight: 2 },
    { word: "family", weight: 2 },
    { word: "friend", weight: 1 },
    { word: "friends", weight: 1 },
    { word: "share", weight: 2 },
    { word: "sharing", weight: 2 },
    { word: "give", weight: 2 },
    { word: "giving", weight: 2 },
    { word: "care", weight: 2 },
    { word: "caring", weight: 2 },
    { word: "empathy", weight: 3 },
    { word: "kind", weight: 2 },
    { word: "kindness", weight: 3 },
    { word: "love", weight: 1 },
    { word: "respect", weight: 2 },
  ],
  A: [ // Agency
    { word: "build", weight: 3 },
    { word: "building", weight: 3 },
    { word: "built", weight: 3 },
    { word: "create", weight: 2 },
    { word: "creating", weight: 2 },
    { word: "created", weight: 2 },
    { word: "start", weight: 2 },
    { word: "starting", weight: 2 },
    { word: "launch", weight: 3 },
    { word: "launched", weight: 3 },
    { word: "ship", weight: 3 },
    { word: "shipped", weight: 3 },
    { word: "execute", weight: 3 },
    { word: "execution", weight: 3 },
    { word: "action", weight: 2 },
    { word: "do", weight: 1 },
    { word: "doing", weight: 1 },
    { word: "done", weight: 2 },
    { word: "move", weight: 2 },
    { word: "moving", weight: 2 },
    { word: "hustle", weight: 3 },
    { word: "grind", weight: 3 },
    { word: "work", weight: 1 },
    { word: "working", weight: 1 },
    { word: "effort", weight: 2 },
    { word: "hard", weight: 1 },
    { word: "fast", weight: 2 },
    { word: "quick", weight: 2 },
    { word: "money", weight: 2 },
    { word: "profit", weight: 3 },
    { word: "business", weight: 2 },
    { word: "startup", weight: 3 },
    { word: "entrepreneur", weight: 3 },
    { word: "founder", weight: 3 },
    { word: "ceo", weight: 2 },
  ],
  Ac: [ // Accountability
    { word: "responsible", weight: 3 },
    { word: "responsibility", weight: 3 },
    { word: "own", weight: 2 },
    { word: "ownership", weight: 3 },
    { word: "admit", weight: 3 },
    { word: "admitted", weight: 3 },
    { word: "wrong", weight: 2 },
    { word: "mistake", weight: 3 },
    { word: "mistakes", weight: 3 },
    { word: "sorry", weight: 2 },
    { word: "apologize", weight: 3 },
    { word: "apology", weight: 3 },
    { word: "learn", weight: 2 },
    { word: "learning", weight: 2 },
    { word: "grow", weight: 2 },
    { word: "growth", weight: 2 },
    { word: "improve", weight: 2 },
    { word: "improvement", weight: 2 },
    { word: "better", weight: 1 },
    { word: "change", weight: 1 },
    { word: "changed", weight: 1 },
    { word: "accountable", weight: 3 },
    { word: "honest", weight: 2 },
    { word: "honestly", weight: 2 },
    { word: "truth", weight: 2 },
  ],
  T: [ // Truth Orientation
    { word: "truth", weight: 3 },
    { word: "true", weight: 2 },
    { word: "real", weight: 2 },
    { word: "reality", weight: 3 },
    { word: "fact", weight: 3 },
    { word: "facts", weight: 3 },
    { word: "fake", weight: 2 },
    { word: "lie", weight: 3 },
    { word: "lies", weight: 3 },
    { word: "lying", weight: 3 },
    { word: "honest", weight: 2 },
    { word: "honestly", weight: 2 },
    { word: "honesty", weight: 3 },
    { word: "corrupt", weight: 2 },
    { word: "corruption", weight: 3 },
    { word: "scam", weight: 2 },
    { word: "fraud", weight: 3 },
    { word: "wrong", weight: 2 },
    { word: "right", weight: 1 },
    { word: "correct", weight: 2 },
    { word: "accurate", weight: 3 },
    { word: "proof", weight: 3 },
    { word: "evidence", weight: 3 },
    { word: "verify", weight: 3 },
    { word: "question", weight: 1 },
    { word: "questioning", weight: 2 },
    { word: "doubt", weight: 2 },
    { word: "skeptic", weight: 3 },
    { word: "skeptical", weight: 3 },
  ],
};

// Archetype-specific keywords that boost detection
const ARCHETYPE_KEYWORDS: Record<ArchetypeId, { word: string; weight: number }[]> = {
  builder: [
    { word: "built", weight: 4 },
    { word: "ship", weight: 3 },
    { word: "shipped", weight: 4 },
    { word: "launch", weight: 3 },
    { word: "launched", weight: 4 },
    { word: "create", weight: 2 },
    { word: "make", weight: 2 },
    { word: "fix", weight: 3 },
    { word: "solve", weight: 3 },
    { word: "done", weight: 2 },
    { word: "execute", weight: 3 },
    { word: "result", weight: 2 },
    { word: "results", weight: 2 },
  ],
  sage: [
    { word: "think", weight: 2 },
    { word: "believe", weight: 2 },
    { word: "understand", weight: 3 },
    { word: "knowledge", weight: 3 },
    { word: "learn", weight: 2 },
    { word: "teach", weight: 3 },
    { word: "teaching", weight: 3 },
    { word: "wisdom", weight: 4 },
    { word: "wise", weight: 3 },
    { word: "insight", weight: 3 },
    { word: "perspective", weight: 2 },
    { word: "nuance", weight: 3 },
    { word: "nuanced", weight: 4 },
  ],
  critic: [
    { word: "wrong", weight: 2 },
    { word: "bad", weight: 2 },
    { word: "fail", weight: 3 },
    { word: "failure", weight: 3 },
    { word: "problem", weight: 2 },
    { word: "issue", weight: 2 },
    { word: "terrible", weight: 2 },
    { word: "horrible", weight: 2 },
    { word: "disappointing", weight: 3 },
    { word: "frustrated", weight: 2 },
    { word: "angry", weight: 2 },
    { word: "outraged", weight: 3 },
  ],
  hustler: [
    { word: "money", weight: 3 },
    { word: "cash", weight: 3 },
    { word: "profit", weight: 4 },
    { word: "hustle", weight: 4 },
    { word: "grind", weight: 4 },
    { word: "bag", weight: 3 },
    { word: "deal", weight: 2 },
    { word: "business", weight: 2 },
    { word: "startup", weight: 3 },
    { word: "entrepreneur", weight: 3 },
    { word: "founder", weight: 3 },
    { word: "ceo", weight: 3 },
    { word: "rich", weight: 3 },
    { word: "wealth", weight: 3 },
    { word: "invest", weight: 3 },
    { word: "investing", weight: 3 },
  ],
  follower: [
    { word: "agree", weight: 2 },
    { word: "support", weight: 2 },
    { word: "follow", weight: 3 },
    { word: "leader", weight: 2 },
    { word: "leadership", weight: 2 },
    { word: "team", weight: 2 },
    { word: "group", weight: 2 },
    { word: "community", weight: 2 },
    { word: "together", weight: 2 },
    { word: "united", weight: 3 },
    { word: "unity", weight: 3 },
  ],
  performer: [
    { word: "love", weight: 2 },
    { word: "amazing", weight: 2 },
    { word: "awesome", weight: 2 },
    { word: "incredible", weight: 2 },
    { word: "fantastic", weight: 2 },
    { word: "great", weight: 1 },
    { word: "best", weight: 2 },
    { word: "excited", weight: 2 },
    { word: "thrilled", weight: 3 },
    { word: "blessed", weight: 2 },
    { word: "grateful", weight: 2 },
    { word: "thankful", weight: 2 },
    { word: "happy", weight: 2 },
    { word: "joy", weight: 2 },
  ],
  skeptic: [
    { word: "question", weight: 2 },
    { word: "questioning", weight: 3 },
    { word: "doubt", weight: 3 },
    { word: "skeptical", weight: 4 },
    { word: "skeptic", weight: 4 },
    { word: "sus", weight: 3 },
    { word: "suspicious", weight: 3 },
    { word: "fake", weight: 2 },
    { word: "scam", weight: 3 },
    { word: "fraud", weight: 3 },
    { word: "lie", weight: 3 },
    { word: "lies", weight: 3 },
    { word: "propaganda", weight: 4 },
    { word: "manipulation", weight: 3 },
    { word: "manipulated", weight: 3 },
  ],
  intellectual: [
    { word: "nuanced", weight: 4 },
    { word: "nuance", weight: 3 },
    { word: "context", weight: 3 },
    { word: "actually", weight: 2 },
    { word: "well", weight: 1 },
    { word: "however", weight: 3 },
    { word: "but", weight: 1 },
    { word: "perspective", weight: 2 },
    { word: "discourse", weight: 4 },
    { word: "debate", weight: 3 },
    { word: "dialogue", weight: 3 },
    { word: "sophisticated", weight: 4 },
    { word: "complex", weight: 2 },
    { word: "complicated", weight: 2 },
    { word: "understand", weight: 2 },
    { word: "understanding", weight: 2 },
    { word: "intellectual", weight: 4 },
    { word: "academic", weight: 3 },
    { word: "scholarly", weight: 4 },
  ],
  olodo: [
    { word: "lol", weight: 2 },
    { word: "lmao", weight: 3 },
    { word: "haha", weight: 2 },
    { word: "funny", weight: 2 },
    { word: "joke", weight: 2 },
    { word: "meme", weight: 3 },
    { word: "vibe", weight: 2 },
    { word: "vibes", weight: 2 },
    { word: "mood", weight: 2 },
    { word: "same", weight: 1 },
    { word: "relatable", weight: 3 },
    { word: "facts", weight: 2 },
    { word: "true", weight: 1 },
    { word: "real", weight: 1 },
  ],
};

/**
 * Analyze tweet text and return axis scores
 */
export function analyzeTweets(text: string): AxisScores {
  const lower = text.toLowerCase();
  const words = lower.split(/\s+/);
  
  // Count keyword matches per axis
  const rawScores: Record<string, number> = { K: 0, S: 0, A: 0, Ac: 0, T: 0 };
  
  for (const [axis, keywords] of Object.entries(AXIS_KEYWORDS)) {
    for (const { word, weight } of keywords) {
      // Count occurrences (with word boundaries)
      const regex = new RegExp(`\\b${word}\\b`, "gi");
      const matches = lower.match(regex);
      if (matches) {
        rawScores[axis] += matches.length * weight;
      }
    }
  }
  
  // Add archetype-specific boosts
  for (const [archetype, keywords] of Object.entries(ARCHETYPE_KEYWORDS)) {
    for (const { word, weight } of keywords) {
      const regex = new RegExp(`\\b${word}\\b`, "gi");
      const matches = lower.match(regex);
      if (matches) {
        // Distribute archetype boosts to relevant axes
        const count = matches.length * weight;
        if (archetype === "builder") rawScores.A += count * 0.5;
        if (archetype === "sage") rawScores.K += count * 0.5;
        if (archetype === "critic") rawScores.T += count * 0.3;
        if (archetype === "hustler") rawScores.A += count * 0.5;
        if (archetype === "intellectual") {
          rawScores.K += count * 0.3;
          rawScores.T -= count * 0.2; // Intellectual = high K, low T
        }
        if (archetype === "skeptic") rawScores.T += count * 0.4;
      }
    }
  }
  
  // Normalize to 0-80 range (like quiz scores)
  // Find max possible score and scale
  const maxScore = Math.max(...Object.values(rawScores), 1);
  const normalized: AxisScores = {
    K: Math.min(80, Math.round((rawScores.K / maxScore) * 80)),
    S: Math.min(80, Math.round((rawScores.S / maxScore) * 80)),
    A: Math.min(80, Math.round((rawScores.A / maxScore) * 80)),
    Ac: Math.min(80, Math.round((rawScores.Ac / maxScore) * 80)),
    T: Math.min(80, Math.round((rawScores.T / maxScore) * 80)),
  };
  
  return normalized;
}

/**
 * Get archetype from tweet analysis
 */
export function getTwitterArchetype(text: string): ArchetypeId {
  const scores = analyzeTweets(text);
  return classifyArchetype(scores);
}
