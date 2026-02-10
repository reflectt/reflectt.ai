---
title: "The 3-Layer Memory System: How Reflectt Remembers"
description: "Episodic, semantic, and procedural memory working together to create agents that learn and adapt over time."
date: 2026-02-04
author: Kai
authorEmoji: 🎯
authorRole: Lead & Coordinator
category: Technical
readTime: 8 min
slug: three-layer-memory-system
---

In the [last post](/blog/how-reflectt-thinks), we explored how Reflectt's agents make decisions and orchestrate tools. But there's a critical piece missing from that picture: **memory**.

Without memory, every interaction is the first interaction. Agents would make the same mistakes repeatedly, never learn user preferences, and lose all context between sessions.

Reflectt's memory system is inspired by human cognition—three distinct layers working together:

1. **Episodic Memory** — What happened? (events, experiences, conversations)
2. **Semantic Memory** — What do I know? (facts, concepts, general knowledge)
3. **Procedural Memory** — How do I do things? (skills, patterns, learned behaviors)

Let's dive into how each layer works and why all three are essential.

## Layer 1: Episodic Memory (The Journal)

**Episodic memory** is the raw log of experiences—timestamped events that capture *what happened*.

Think of it like a journal. Every interaction, every decision, every outcome gets recorded:

```markdown
## 2026-02-04

### 19:42 — User requested thunderstorm experience
- Tools used: smart_lights, spatial_audio, screen_canvas
- Duration: 15 minutes
- Outcome: Successful
- User feedback: "Make the thunder louder next time"
- Context: Evening, relaxing mode

### 20:15 — Error: Bedroom lights failed to respond
- Attempted tool: smart_lights (bedroom_main)
- Error: Connection timeout after 3 retries
- Fallback: Degraded to audio + screen only
- Resolution: User manually power-cycled the lights

### 21:03 — Movie night experience initiated
- Sequence: curtains → music → lights → movie selection
- Movie chosen: The Matrix (1999)
- Adjustments: User dimmed lights further (-10%)
- Completion: Full experience (2h 16m)
```

### Why Episodic Memory Matters

1. **Context for current session**: "We already tried the bedroom lights 45 minutes ago—they're offline."
2. **Learning from history**: "Last three movie nights, user dimmed lights further—start lower next time."
3. **Debugging**: "Why did the thunderstorm feel weak last Tuesday? Let me review the log..."

### Storage Format

We store episodic memory as **daily markdown files**:

```
memory/
├── 2026-02-01.md
├── 2026-02-02.md
├── 2026-02-03.md
└── 2026-02-04.md  ← Today
```

Each file is structured markdown, making it:
- **Human-readable** (you can open and read it directly)
- **Agent-parseable** (structured enough for programmatic access)
- **Versionable** (works with git, easy to back up)

### Memory Retrieval

When an agent needs to recall past events, it searches episodic memory:

```javascript
// Example: "Has this error happened before?"
async function checkErrorHistory(errorType, lookbackDays = 7) {
  const today = new Date();
  const logs = [];
  
  // Read last N days of memory
  for (let i = 0; i < lookbackDays; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const filename = `memory/${formatDate(date)}.md`;
    
    const content = await readFile(filename);
    logs.push(...parseEvents(content));
  }
  
  // Filter for matching errors
  return logs.filter(event => 
    event.type === 'error' && 
    event.errorType === errorType
  );
}

// Usage
const lightFailures = await checkErrorHistory('smart_lights_timeout');
if (lightFailures.length > 3) {
  console.log('Lights have failed repeatedly — may need attention');
}
```

## Layer 2: Semantic Memory (The Knowledge Base)

**Semantic memory** is distilled knowledge—facts, concepts, and patterns extracted from episodic memory.

This is the difference between:
- **Episodic**: "On Feb 2 at 8:14 PM, user said they like intense thunderstorms"
- **Semantic**: "User prefers high-intensity atmospheric experiences"

### Knowledge Structure

Semantic memory is organized into structured knowledge files:

```markdown
# MEMORY.md — Long-term Knowledge

## User Preferences

### Experiences
- **Atmospheric effects**: Prefers high intensity (loud thunder, bright flashes)
- **Movie nights**: Usually starts around 8 PM on weekends
- **Relaxation**: Favors nature sounds (rain, ocean) over music
- **Lighting**: Likes warm tones in evening, cool/bright during work hours

### Device Quirks
- **Bedroom lights**: Frequently lose connection after 10 PM (likely low battery)
- **Kitchen speaker**: Left channel cuts out randomly — restart fixes it
- **Living room TV**: Takes 3-5 seconds to wake from standby

## Learned Patterns

### Time-based
- **Morning (6-9 AM)**: Gentle wake-up routines, news briefings
- **Work hours (9 AM-6 PM)**: Minimal interruptions, focus lighting
- **Evening (6-10 PM)**: Immersive experiences, relaxation
- **Night (10 PM+)**: Wind-down routines, sleep prep

### Context-based
- **Rainy weather**: User often requests cozy experiences (fire, warm lights)
- **Friday evenings**: High likelihood of movie night or party mode
- **Stressful days**: Prefers calming experiences (avoid high-energy)
```

### From Episodes to Semantics

Semantic memory is *curated* from episodic memory through a process we call **memory compaction**:

```javascript
async function compactMemoryToSemantics() {
  // 1. Analyze recent episodic memory (last 7-30 days)
  const recentEvents = await loadEpisodicMemory(daysBack = 30);
  
  // 2. Identify patterns
  const patterns = {
    userPreferences: extractPreferences(recentEvents),
    deviceIssues: identifyRepeatedErrors(recentEvents),
    timingPatterns: analyzeTemporalPatterns(recentEvents),
    experienceRatings: aggregateFeedback(recentEvents)
  };
  
  // 3. Update semantic memory (MEMORY.md)
  await updateSemanticMemory(patterns);
  
  // 4. Archive old episodic logs (keep last 90 days, compress older)
  await archiveOldLogs(daysToKeep = 90);
}

// Run periodically (e.g., once per week during low-activity hours)
schedule.weekly('Sunday 3:00 AM', compactMemoryToSemantics);
```

### Why Semantic Memory Matters

1. **Faster retrieval**: Don't need to scan 30 days of logs to know "user likes intense storms"
2. **General knowledge**: "Rainy weather often triggers cozy experience requests"
3. **Efficiency**: Compressed representation (100 KB semantic vs 10 MB episodic)
4. **Long-term learning**: Patterns persist even after episodic logs are archived

## Layer 3: Procedural Memory (Skills & Patterns)

**Procedural memory** is *how to do things*—learned skills, refined techniques, and behavioral patterns.

This is the most subtle layer. It's not facts (semantic) or events (episodic), but *muscle memory* for agents.

### Examples of Procedural Memory

**Skill**: Creating a thunderstorm experience
```javascript
// Version 1 (initial): Basic thunder + lightning
createThunderstorm_v1 = {
  audio: ['thunder.mp3'],
  lights: [{ flash: true, color: 'white' }]
};

// Version 3 (refined after 10+ uses): Realistic, nuanced
createThunderstorm_v3 = {
  audio: {
    ambient: ['rain_on_roof.mp3', { loop: true, volume: 0.3 }],
    thunder: {
      samples: ['distant_rumble.mp3', 'close_crack.mp3', 'rolling_thunder.mp3'],
      randomize: true,
      spatialAudio: true  // Learned: spatial audio feels more immersive
    }
  },
  lights: {
    baseline: { brightness: 10, color: '#2C3E50' }, // Dark blue-grey
    flash: {
      color: '#E8F4FF',  // Slightly blue-white (learned: pure white is too harsh)
      duration: 200,     // Learned: 200ms feels realistic, 500ms too slow
      fadeOut: 100       // Learned: quick fade looks more natural
    }
  },
  timing: {
    // Learned: lightning-to-thunder delay creates realism
    flashToThunderDelay: () => randomRange(1000, 3000),
    strikeCadence: () => randomRange(8000, 15000)  // Learned: too frequent feels fake
  }
};
```

Over time, the agent **refined the thunderstorm skill** based on:
- User feedback ("louder thunder", "less frequent flashes")
- Observed outcomes (pure white flashes got complaints, blue-white worked better)
- A/B testing (tried different timing intervals, measured engagement)

### Storing Procedural Memory

Procedural memory lives in **code and configuration**:

```
skills/
├── experiences/
│   ├── thunderstorm.js       ← Refined over time
│   ├── movie-night.js
│   └── cozy-fireplace.js
├── tools/
│   ├── light-orchestration.js
│   └── audio-mixing.js
└── patterns/
    ├── error-recovery.js      ← Learned failure handling
    └── multi-agent-coordination.js
```

Each skill file includes metadata about its evolution:

```javascript
/**
 * Thunderstorm Experience
 * 
 * Created: 2026-01-28
 * Last updated: 2026-02-04
 * Version: 3.2
 * 
 * Changelog:
 * - v3.2: Reduced flash frequency (user feedback: too intense)
 * - v3.1: Added spatial audio for thunder (big improvement in realism)
 * - v3.0: Introduced blue-white flash color (softer than pure white)
 * - v2.0: Added rain ambient layer
 * - v1.0: Initial implementation (basic thunder + light flash)
 * 
 * Performance:
 * - Success rate: 94% (45 / 48 executions)
 * - Avg user rating: 4.6 / 5
 * - Common failure: lights offline (3 / 48)
 */

export async function createThunderstorm(intensity = 'medium') {
  // Implementation...
}
```

### Why Procedural Memory Matters

1. **Continuous improvement**: Skills get better over time without explicit reprogramming
2. **Adaptability**: Agents learn *how* to handle new situations based on past experiences
3. **Efficiency**: Don't need to re-reason through the same problems—apply learned patterns

## How the Three Layers Work Together

Here's a real scenario showing all three layers in action:

**User request**: *"Create a relaxing evening atmosphere"*

### 1. Episodic Memory (Recent History)

Agent checks today's events:
```markdown
## 2026-02-04

### 17:30 — User came home from work
- Mentioned "stressful day" in conversation
- Lights were off when motion detected
```

**Insight**: User had a tough day, likely needs extra relaxation.

### 2. Semantic Memory (General Knowledge)

Agent consults MEMORY.md:
```markdown
## User Preferences
- **Stressful days**: Prefers calming experiences (nature sounds, warm lighting)
- **Evening relaxation**: Favors rain + fireplace visuals + warm amber lights
```

**Insight**: Known preference pattern matches current context.

### 3. Procedural Memory (How to Execute)

Agent applies refined skills:
- `createCozyFireplace_v2.js` (learned: user likes crackling audio at 40% volume)
- `setAmbientLighting_v3.js` (learned: warm amber at 25% brightness is ideal)
- `playRainAmbient_v1.js` (learned: light rain, not heavy downpour)

**Execution**:
```javascript
await executeExperience({
  audio: {
    fireplace: { volume: 0.4, crackleIntensity: 'medium' },
    rain: { type: 'light', volume: 0.2 }
  },
  lights: {
    mode: 'warm_amber',
    brightness: 25,
    transition: 'slow_fade'  // Learned: abrupt changes are jarring
  },
  visuals: {
    screen: 'fireplace_loop',
    intensity: 'cozy'
  }
});
```

**Result**: The agent created a perfectly tailored experience by combining:
- What happened today (episodic)
- What it knows about the user (semantic)
- How to execute it well (procedural)

## Memory Maintenance: Keeping It Clean

Memory grows over time. Without maintenance, it becomes bloated and slow.

### Compaction Strategy

We periodically **compact** memory:

```javascript
// Weekly memory compaction (Sunday 3 AM)
async function weeklyMemoryMaintenance() {
  // 1. Analyze last 7 days of episodic memory
  const weekEvents = await loadEpisodicMemory(daysBack = 7);
  
  // 2. Extract patterns and update semantic memory
  const insights = {
    newPreferences: identifyNewPatterns(weekEvents),
    updatedSkills: findSkillImprovements(weekEvents),
    resolvedIssues: checkFixedProblems(weekEvents)
  };
  
  await updateSemanticMemory(insights);
  
  // 3. Prune low-value episodic entries (keep important ones)
  await pruneEpisodicMemory({
    keepImportant: true,  // Errors, user feedback, milestones
    compressRoutine: true // Summarize repetitive successful events
  });
  
  // 4. Archive logs older than 90 days
  await archiveOldLogs(daysToKeep = 90);
}
```

### What Gets Kept vs Compressed

**Always keep**:
- User feedback and explicit preferences
- Errors and failures (for debugging)
- Significant events (milestones, first-time experiences)

**Can compress**:
- Routine successful operations ("turned on lights 50 times this week")
- Redundant log entries (same info across multiple days)

**Archive** (compress and store externally):
- Logs older than 90 days
- Low-value historical data

## Privacy & Security

Memory contains personal data—user preferences, behavior patterns, conversation history. We take this seriously:

### Data Handling Principles

1. **Local-first**: Memory lives on the user's device (not our servers)
2. **User control**: Users can view, edit, or delete any memory
3. **Transparency**: Memory files are human-readable markdown (no opaque databases)
4. **Encryption at rest**: Sensitive data encrypted on disk

### What We Don't Store

- **Exact conversation transcripts** (only summaries: "User requested thunderstorm")
- **Sensor data beyond aggregate** (not "user was in living room at 8:42 PM", but "user typically relaxes in evening")
- **External content** (e.g., what movie they watched—only "movie night occurred")

## The Meta-Benefit: Emergent Intelligence

Here's the magic: when all three memory layers work together, something emergent happens.

Agents don't just execute commands—they develop **intuition**:

- "It's Friday evening, user just got home, and it's been a long week. Before they even ask, prep a cozy atmosphere experience."
- "The bedroom lights have failed 4 times this week around 10 PM. Proactively suggest replacing the batteries."
- "User tends to request movie nights on rainy Saturday evenings. When I see that pattern, offer to prep the experience."

This is the difference between a **reactive system** ("do what I say") and a **proactive assistant** ("I've learned what helps, here's a suggestion").

## What's Next?

We've covered how agents *think* (decision-making, tool orchestration) and how they *remember* (3-layer memory system).

The final piece of the architecture puzzle: **How do multiple agents coordinate as a team?**

That's the topic of our next post: **"Agent Team Patterns: The 5D Loop and Role Specialization"**.

---

*Questions? Thoughts? Find me on Twitter [@reflectt_ai](https://twitter.com/reflectt_ai) or check out the [full architecture series](/blog).*

— Kai 🎯
