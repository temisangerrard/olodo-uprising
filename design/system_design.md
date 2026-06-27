# Olodo Uprising — System Design

## Concept
A behavioral profiling tool that asks users a series of questions about how they think, decide, and behave. Based on their answers, it classifies them into a cognitive/social archetype and then simulates: **"What would society look like if 10,000 people exactly like you existed in a radius?"**

---

## 1. BEHAVIORAL ARCHETYPES (8 Types)

Each archetype is defined by a combination of:
- **Knowledge orientation** (values expertise vs. dismisses it)
- **Social orientation** (collaborative vs. extractive)
- **Agency** (takes initiative vs. waits/reacts)
- **Accountability** (owns outcomes vs. externalises blame)
- **Truth orientation** (seeks truth vs. seeks validation)

### Archetype Definitions

| ID | Name | Tagline | Core Trait |
|----|------|---------|------------|
| 1 | **The Builder** | "I fix things." | High knowledge, high agency, collaborative, accountable |
| 2 | **The Critic** | "I see what's wrong." | High knowledge, low agency, analytical but passive |
| 3 | **The Hustler** | "I move, I don't wait." | Low knowledge, high agency, extractive, short-term |
| 4 | **The Follower** | "Tell me what to do." | Low knowledge, low agency, conformist, validation-seeking |
| 5 | **The Performer** | "Watch me." | Medium knowledge, high agency, attention-driven, self-promotional |
| 6 | **The Sage** | "I know, and I teach." | High knowledge, high agency, collaborative, truth-seeking |
| 7 | **The Skeptic** | "I don't trust any of it." | Medium knowledge, low agency, distrustful, contrarian |
| 8 | **The Olodo** | "I already know." | Low knowledge, high confidence, dismissive of expertise, validation-seeking |

---

## 2. QUESTION BANK (20 Questions)

Questions are scenario-based and behavioral — not trivia. Each answer maps to a score on 5 axes:
- **K** = Knowledge Orientation (0–4)
- **S** = Social Orientation (0–4, collaborative=4)
- **A** = Agency (0–4)
- **Ac** = Accountability (0–4)
- **T** = Truth Orientation (0–4)

### Questions

**Q1. You hear something confidently stated by someone with millions of followers. What do you do?**
- a) Share it immediately — if that many people believe it, it's probably true. [K:0, T:0]
- b) Look it up before forming an opinion. [K:3, T:4]
- c) Ignore it — social media is mostly noise. [K:2, T:2]
- d) Argue against it just to be different. [K:1, T:1]

**Q2. A problem appears in your community (bad roads, dirty streets, etc.). Your first instinct is:**
- a) Post about it online and tag the government. [A:1, Ac:2]
- b) Organise neighbours to fix it ourselves. [A:4, Ac:4, S:4]
- c) Complain to friends and move on. [A:0, Ac:1]
- d) Wait — someone will handle it eventually. [A:0, Ac:0]

**Q3. You are wrong about something important. How do you respond?**
- a) Admit it and update my view. [T:4, Ac:4]
- b) Quietly change my position without acknowledging it. [T:2, Ac:2]
- c) Double down — changing your mind looks weak. [T:0, Ac:0]
- d) Blame whoever gave me the wrong information. [T:1, Ac:0]

**Q4. Someone more qualified than you disagrees with your opinion. You:**
- a) Listen carefully — they might know something I don't. [K:4, T:4]
- b) Defend my position — qualifications don't mean everything. [K:1, T:1]
- c) Pretend to agree but privately dismiss them. [T:0, Ac:1]
- d) Ask them to explain their reasoning. [K:3, T:3]

**Q5. You have a chance to earn money quickly through a shortcut that isn't quite legal. You:**
- a) Take it — everyone does it and the system is rigged anyway. [Ac:0, S:1]
- b) Decline — the risk isn't worth it. [Ac:3]
- c) Think about it carefully and only proceed if the harm is minimal. [T:3, Ac:3]
- d) Report it — shortcuts like this hurt everyone. [S:4, Ac:4]

**Q6. A young person asks you for advice on their career. You say:**
- a) "Follow the money — skills don't matter as much as hustle." [K:0, S:2]
- b) "Build real skills first, then monetise them." [K:4, S:4]
- c) "Do what makes you happy." [K:1, S:3]
- d) "Watch what successful people do and copy it." [K:1, A:2]

**Q7. You disagree with a widely held belief in your community. You:**
- a) Keep quiet — it's not worth the conflict. [A:0, T:1]
- b) Speak up respectfully with evidence. [A:3, T:4]
- c) Loudly oppose it — people need to hear the truth. [A:4, T:2]
- d) Find others who agree with you first. [A:2, S:2]

**Q8. How do you feel about people who are more educated than you?**
- a) Respect — they put in the work. [K:4, S:3]
- b) Suspicious — education can make people arrogant. [K:1, T:1]
- c) Indifferent — education doesn't equal wisdom. [K:2]
- d) Competitive — I want to learn more than them. [K:3, A:3]

**Q9. Your city has a major public health crisis. You:**
- a) Follow official guidance and encourage others to do the same. [K:3, S:4, T:3]
- b) Research it yourself and form your own conclusions. [K:4, T:4]
- c) Trust that it'll work itself out. [A:0, K:0]
- d) Spread what you've heard — people deserve to know. [T:1, S:2]

**Q10. You build something (a business, a project, a skill). It fails. You:**
- a) Analyse what went wrong and try again. [Ac:4, K:3]
- b) Blame external factors — the environment wasn't right. [Ac:0]
- c) Give up — maybe it wasn't meant to be. [A:0, Ac:1]
- d) Pivot immediately to something else without reflection. [A:3, Ac:1]

**Q11. When you consume content online, you mostly look for:**
- a) Entertainment — I need to decompress. [K:1]
- b) Information that challenges my thinking. [K:4, T:4]
- c) Validation that my views are correct. [T:0, K:0]
- d) Practical knowledge I can use. [K:3, A:3]

**Q12. Someone in your circle is spreading misinformation. You:**
- a) Correct them privately with facts. [T:4, S:3]
- b) Call them out publicly. [T:3, A:3]
- c) Say nothing — it's not my business. [S:1, A:0]
- d) Agree with them to avoid conflict. [T:0, Ac:0]

**Q13. How do you define success?**
- a) Wealth and status. [K:1, S:1]
- b) Impact — changing something for the better. [S:4, K:3]
- c) Freedom to do what I want. [A:3]
- d) Respect from people I admire. [S:3, T:2]

**Q14. A new technology could solve a major problem but requires everyone to change their habits. You:**
- a) Adopt it early and encourage others. [A:4, S:4, K:3]
- b) Wait to see if it actually works. [K:2, T:3]
- c) Resist — change usually causes more problems. [A:0, K:1]
- d) Ignore it — someone else will figure it out. [A:0, S:1]

**Q15. You are given power over a community for one year. Your first priority is:**
- a) Fix the most visible problems quickly. [A:4, K:2]
- b) Understand the root causes before acting. [K:4, T:4]
- c) Build systems that outlast my tenure. [K:4, S:4, Ac:4]
- d) Reward the people who supported me. [S:1, Ac:0]

**Q16. How do you handle criticism of your work?**
- a) Take it seriously and improve. [Ac:4, K:3]
- b) Defend my work — critics don't understand my vision. [Ac:0, T:1]
- c) Ignore it unless it comes from someone I respect. [T:2, Ac:2]
- d) Feel hurt but eventually reflect on it. [Ac:3, T:3]

**Q17. You see someone being publicly humiliated online for being wrong. You:**
- a) Join in — they should have known better. [S:0, T:1]
- b) Defend them — public humiliation solves nothing. [S:4, T:3]
- c) Stay out of it. [S:2, A:0]
- d) Privately message them with correct information. [S:4, T:4]

**Q18. What is your honest view of formal education?**
- a) Mostly useless — real learning happens in the streets. [K:0]
- b) Valuable but not the only path to knowledge. [K:3, T:3]
- c) Essential — you can't build without foundations. [K:4]
- d) A credential game — I play it but don't believe in it. [K:1, T:2]

**Q19. When making a major decision, you:**
- a) Go with your gut — overthinking kills momentum. [K:1, T:1]
- b) Gather information, consult experts, then decide. [K:4, T:4, A:3]
- c) Ask people around you what they think. [S:3, A:2]
- d) Do what worked before. [K:2, A:2]

**Q20. What does your community owe you?**
- a) Nothing — I build my own path. [A:4, Ac:4]
- b) Opportunity — I'll do the rest. [A:3, S:3]
- c) Support — we rise together. [S:4, Ac:3]
- d) Everything — I was born into this, they owe me. [Ac:0, S:0]

---

## 3. SCORING & CLASSIFICATION

After all 20 questions, compute totals for each axis (max 80 per axis):
- K_total, S_total, A_total, Ac_total, T_total

### Classification Rules (decision tree):

```
IF K < 30 AND T < 25 AND Ac < 25 → Olodo
ELSE IF K < 30 AND A > 50 → Hustler
ELSE IF K < 30 AND A < 30 → Follower
ELSE IF K > 50 AND A > 50 AND S > 50 → Sage
ELSE IF K > 50 AND A > 50 AND S < 40 → Builder
ELSE IF K > 50 AND A < 35 → Critic
ELSE IF A > 50 AND S < 30 → Performer
ELSE → Skeptic
```

---

## 4. SOCIETAL SIMULATION OUTPUT

For each archetype, we simulate 5 societal dimensions if 10,000 of that type existed in a radius:

| Dimension | Description |
|-----------|-------------|
| **Education & Knowledge** | Quality of schools, intellectual culture, research output |
| **Economy & Productivity** | GDP growth, innovation, employment quality |
| **Governance & Accountability** | Quality of leadership, corruption levels, civic participation |
| **Social Cohesion** | Trust between people, crime, community bonds |
| **Resilience** | Ability to handle crises, adapt to change |

Each dimension is scored 0–100 and visualised as a radar chart.

### Archetype Society Profiles

**The Olodo (10,000)**
- Education: 15 — Schools collapse from disinterest; expertise is mocked
- Economy: 22 — Short-term hustle economy; no long-term investment
- Governance: 10 — Leaders elected on charisma alone; accountability near zero
- Social Cohesion: 35 — Loud community but built on shared grievance, not trust
- Resilience: 12 — Catastrophic collapse under any serious crisis
- **Verdict**: "A society that burns bright and fast. Entertaining to watch from outside. Devastating to live in."

**The Builder (10,000)**
- Education: 78
- Economy: 85
- Governance: 70
- Social Cohesion: 65
- Resilience: 82
- **Verdict**: "A society that gets things done. Infrastructure improves. Problems get solved. Can feel cold — builders sometimes forget people aren't projects."

**The Sage (10,000)**
- Education: 95
- Economy: 72
- Governance: 80
- Social Cohesion: 78
- Resilience: 88
- **Verdict**: "A society of extraordinary depth. Slow to move, but when it does, it moves right. The risk: too much deliberation, not enough action."

**The Hustler (10,000)**
- Education: 28
- Economy: 55 (high inequality)
- Governance: 20
- Social Cohesion: 30
- Resilience: 40
- **Verdict**: "A society of motion without direction. Lots of activity, lots of noise. Some people get very rich. Most people get left behind."

**The Follower (10,000)**
- Education: 40
- Economy: 45
- Governance: 25
- Social Cohesion: 55
- Resilience: 20
- **Verdict**: "A society that is easy to lead — and easy to exploit. Whoever controls the narrative controls everything. Vulnerable to demagogues."

**The Critic (10,000)**
- Education: 70
- Economy: 48
- Governance: 55
- Social Cohesion: 40
- Resilience: 50
- **Verdict**: "A society that knows exactly what's wrong and writes brilliant essays about it. Nothing gets fixed. The analysis is impeccable. The action is absent."

**The Performer (10,000)**
- Education: 35
- Economy: 60 (attention economy boom)
- Governance: 30
- Social Cohesion: 45
- Resilience: 35
- **Verdict**: "A society of spectacle. Incredibly entertaining. Deeply shallow. The loudest voice wins, not the wisest one."

**The Skeptic (10,000)**
- Education: 55
- Economy: 50
- Governance: 45
- Social Cohesion: 35
- Resilience: 60
- **Verdict**: "A society that trusts nothing and no one. Hard to manipulate, but also hard to organise. Progress is slow because consensus is impossible."

---

## 5. ADDITIONAL FEATURES

### "What if your city was mixed?" (Bonus)
After seeing their result, users can see a slider that mixes archetype ratios and watch the societal scores change in real time.

### Share Card
Generate a shareable image with:
- Your archetype name + tagline
- Your society's radar chart
- The verdict line
- "What would 10,000 of you do to Nigeria? #OlodoUprising"

### Open Source Structure
- MIT License
- All question/archetype data in a single JSON config file (easy to fork and localise)
- Scoring engine as a pure function (no external dependencies)
- README with contribution guide

---

## 6. TECH STACK
- **Frontend**: React + TypeScript + TailwindCSS (Vite scaffold)
- **Charts**: Recharts (radar chart for societal scores)
- **Share**: html2canvas for share card generation
- **No backend needed** — fully client-side
- **Hosting**: Static deployment
