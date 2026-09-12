# Test Animation Spec — Technical Proof Scene

**Purpose:** Prove that character/object + background + camera + timing + audio + rendering can work together.  
**Not Episode 1.**  
**Not final characters.**  
**Do not render until the Remotion (or approved) stack is installed.**

---

## Placeholder cast

| Element | Placeholder design |
|---------|--------------------|
| Character | Soft rounded gray “bean” figure with simple face (eyes + smile). No Kito final design. |
| Background | Flat Sunrise Valley kit: sky gradient (peach→aqua), two hill layers, one acacia silhouette, simple path |
| Audio | Soft footstep loop + one gentle “wave” chime + light ambient bed (original/placeholder files only) |

Name the placeholder character: **Pip** (test-only; not part of series bible).

---

## Shot outline (target ~8 seconds @ 30fps = 240 frames)

| Frames | Action |
|--------|--------|
| 0–15 | Fade in on Sunrise Valley wide shot |
| 15–90 | Pip enters from left, walks across path at constant pace |
| 90–110 | Pip decelerates and stops at center-right mark |
| 110–160 | Pip waves (arm cycle 2×) |
| 120–220 | Camera slowly pushes in toward Pip (overlap with wave) |
| 220–240 | Hold + soft fade out |

### Camera
- Start: wide (zoom 1.0), centered on path
- End: medium-close on Pip (zoom ~1.35)
- Ease: smooth ease-in-out; no shake

### Timing notes
- Walk cycle: ~12 frames per step (placeholder)
- Wave: 25-frame loop × 2
- Audio: footsteps only while walking; chime on first wave frame

---

## Technical acceptance criteria

The test passes when all are true:

1. Placeholder character renders as a reusable component  
2. Background layers show parallax during camera push  
3. Walk → stop → wave timing matches the frame table (±3 frames)  
4. Audio syncs to footsteps and wave  
5. Master renders to `renders/tests/pip-walk-wave-v001.mp4`  
6. FFmpeg can derive:
   - 16:9 delivery proxy → `exports/tests/`
   - 9:16 center-reframe proxy → `shorts/tests/`

---

## Implementation plan (when approved)

1. Scaffold Remotion + React + TypeScript under `tools/animation/` (creator approval required)
2. Add `Pip.tsx`, `SunriseValleyTestBg.tsx`, `PipWalkWave.tsx`
3. Add placeholder audio files under `sound-effects/tests/` and `music/tests/`
4. Render once; store notes in `docs/TEST-ANIMATION-RESULTS.md`
5. Stop — do not proceed to real character builds without approval

---

## Explicit non-goals

- No final Kito / Zuri / Bobo / Jabari / Mama Tembo art
- No Episode 1 story
- No YouTube upload
- No Blender dependency for this test
