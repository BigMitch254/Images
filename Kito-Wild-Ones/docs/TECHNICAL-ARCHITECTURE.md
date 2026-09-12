# Technical Architecture — Kito & the Wild Ones

**Phase:** 2 (architecture decision)  
**Constraint:** Recommend from what is actually available. Do not install Blender automatically. Do not install unnecessary dependencies yet.

---

## Environment inspection (Cloud Agent)

| Technology | Available now? | Notes |
|------------|----------------|-------|
| Node.js | Yes | v22.14.0 |
| npm / npx | Yes | npm 10.9.7 |
| Git | Yes | 2.43.0 |
| FFmpeg | Yes | 6.1.1 |
| Python | Yes | 3.12.3 as `python3` (`python` missing) |
| Blender | **No** | not on PATH |
| Remotion | **Not installed** | can be added later via npm when approved |
| React / TypeScript | **Not installed in project yet** | available through Node ecosystem when approved |

Windows PC versions may differ and must be re-checked after sync.

---

## Decision summary

### Recommended primary stack

**Remotion + React + TypeScript + FFmpeg (+ light Python tooling)**

| Layer | Choice | Why |
|-------|--------|-----|
| Scene system | **Remotion** | Composition timeline, reusable components, deterministic frames, code-reviewed scenes |
| UI/component model | **React** | Characters, backgrounds, props as reusable components |
| Type safety | **TypeScript** | Safer props for cast, shots, dialogue cues, export presets |
| Media encode / transmux | **FFmpeg** | Already installed; YouTube 16:9 + Shorts 9:16 + audio mux |
| Automation scripts | **Python 3** | Batch rename, QC checks, subtitle helpers, folder ops |
| Optional later | **Blender** | Only if/when installed on the Windows PC for premium 3D assets — not required to start |

### What we are NOT choosing as primary (for now)

- **Blender-first pipeline:** Blender is missing here; heavy for batch YouTube kids iteration until a clear 3D need exists.
- **Python-only animation:** Possible for experiments, weaker for reusable cinematic scene graphs and componentized characters compared to Remotion.
- **Random no-code editors as source of truth:** Fine as helpers later; not ideal for scalable reusable systems in-repo.

---

## Long-term system requirements → architecture mapping

| Need | Approach |
|------|----------|
| Reusable characters | React/Remotion components + locked assets under `characters/` |
| Reusable backgrounds | Layered background kits under `backgrounds/` composed as scenes |
| Scenes | Remotion compositions per scene; episode playlists compose scenes |
| Camera movement | Remotion `interpolate` / spring camera props (x, y, zoom, pan) |
| Dialogue timing | Frame-based cue sheets (JSON/TS) driving mouth/act cues |
| Subtitles | Remotion text sequences + sidecar `.srt` export via scripts |
| Sound effects / music | Remotion `<Audio>` + files in `sound-effects/`, `music/` |
| Rendering | Remotion render → master in `renders/` |
| YouTube 16:9 | Composition size 1920×1080 export preset |
| Shorts 9:16 | Composition size 1080×1920 export preset (reframed shots) |
| Batch production | npm/Python scripts in `tools/` for episode queues |

---

## Proposed repo modules (when implementation is approved)

```
Kito-Wild-Ones/
├── docs/                      # bibles + specs (now)
├── characters/                # approved art + metadata
├── backgrounds/               # layered kits
├── props/
├── voices/ music/ sound-effects/
├── episodes/                  # episode packages
├── renders/ exports/ shorts/
└── tools/
    └── animation/             # Remotion + React + TypeScript project
        ├── package.json
        ├── src/
        │   ├── characters/    # placeholder components first
        │   ├── backgrounds/
        │   ├── scenes/
        │   ├── lib/camera.ts
        │   ├── lib/timing.ts
        │   ├── lib/subtitles.ts
        │   └── Root.tsx
        └── scripts/           # FFmpeg export helpers
```

**Not created yet** — documentation only until the creator approves scaffolding.

---

## Render + export pipeline (planned)

1. Remotion renders lossless/high-quality master → `renders/`
2. FFmpeg creates delivery encodes → `exports/` (16:9) and `shorts/` (9:16)
3. Optional Python QC: duration, loudness proxy checks, missing subtitle detection

---

## Safety / production rules

- Do not install Blender automatically
- Remotion scaffold is approved and present under `tools/animation/`
- Do not generate final series character art in this phase
- Keep masters; never overwrite without permission
- Human creator approves architecture changes that affect locked tooling

---

## Phase gate

| Gate | Status |
|------|--------|
| Foundation folders/docs | Done |
| Character + Visual bibles | Done (Phase 2) |
| Architecture recommendation | Done (this doc) |
| Remotion project scaffold | **Done** — `tools/animation/` |
| Test render | **Done** — `renders/tests/pip-walk-wave-v001.mp4` (1920×1080) |
| Episode 1 | **Blocked by design** until creator requests |
