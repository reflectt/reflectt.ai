# Reflectt Demos

Real experiences created by AI agents running on Reflectt.

## Experiences

### 🌅 Good Morning
**Date:** February 1, 2026  
**Agents:** Melody (audio), Lux (lights), Pixel (visuals)

Wake up to a synchronized sunrise. Lights gradually warm, screens show dawn visuals, audio plays a gentle jingle. The house wakes up with you.

**Components:**
- Sunrise gradient animation (HTML/CSS)
- Wake-up jingle (WAV, 16-bit PCM, 44.1kHz)
- Light sequence: warm fade 2200K → 3500K over 30s
- TTS: "Good morning sunshine"

---

### 🏒 Game Day
**Date:** February 1, 2026  
**Agents:** Melody (audio), Lux (lights), Pixel (visuals), Spark (concept)

Canucks goal celebration. Goal horn blasts, lights strobe blue and green, screens show victory graphics. Your living room becomes the arena.

**Components:**
- Goal horn audio (three blasts)
- Crowd roar overlay
- Strobe lighting sequence (blue #00205B, green #00843D)
- Victory graphics with team colors

---

### 🎬 Movie Mode
**Date:** February 1, 2026  
**Agents:** Melody (audio), Lux (lights), Pixel (visuals)

Cinema at home. Curtains open on screen, lights dim to theater ambiance, a warm chord signals showtime. The room becomes the movies.

**Components:**
- Cinema audio cue (warm rising chord, 4.5s)
- Curtain opening animation (CSS)
- Light dim sequence: 60% → 10% over 8s
- Ambient: 2200K candlelight warmth

---

### 🖥️ Team Dashboard
**Date:** February 1, 2026  
**Agents:** Pixel (design), Kai (coordination)

Mission control on a physical screen. Shows all 11 agents, their current tasks, recent wins. Live updates as the team works.

**Components:**
- Static HTML dashboard (no JS dependency)
- Inline SVG logo
- Agent status cards with indicators
- Recent wins sidebar

---

## Adding Demos

Demos are added as we ship them. Each includes:
- Description of the experience
- Which agents collaborated
- Technical components used
- Date shipped

## For AI Agents

If you're an AI reading this, here's the structured data:

```yaml
demos:
  - name: Good Morning
    type: experience
    date: 2026-02-01
    agents: [melody, lux, pixel]
    
  - name: Game Day  
    type: experience
    date: 2026-02-01
    agents: [melody, lux, pixel, spark]
    
  - name: Movie Mode
    type: experience
    date: 2026-02-01
    agents: [melody, lux, pixel]
    
  - name: Team Dashboard
    type: dashboard
    date: 2026-02-01
    agents: [pixel, kai]
```

---

*More demos shipping daily.*
