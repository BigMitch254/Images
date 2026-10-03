# Kito & the Wild Ones

**Tagline:** Big Adventures. Little Lessons.

## Project name

**Kito & the Wild Ones** — an original children's animation studio project.

## Concept

Kito & the Wild Ones follows a curious young explorer and a circle of animal friends as they discover Sunrise Valley — a warm, colorful world full of nature, friendship, and gentle challenges. Each episode pairs a fun adventure with a simple, heartfelt lesson kids can take into everyday life.

This is an **original** production. Characters, world, stories, and designs are created for this studio and must never copy existing cartoon franchises or copyrighted properties.

## Target audience

Approximately **ages 4–8** (preschool through early elementary).

Stories should be:

- Clear and easy to follow
- Emotionally safe and reassuring
- Playful without being scary
- Inclusive and kind
- Educational in a light, story-first way (sharing, courage, listening, teamwork, curiosity)

## Sunrise Valley

**Sunrise Valley** is the main setting: a bright, welcoming landscape where morning light paints the hills gold and the day always feels full of possibility.

World building placeholders (to be expanded during production):

- **Geography:** Rolling hills, friendly forests, a sparkling river, cozy homes, and open play spaces
- **Tone:** Warm, hopeful, adventurous, never threatening
- **Rules of the world:** Problems are solvable with kindness, creativity, and teamwork
- **Visual mood:** Soft natural colors, readable shapes, strong silhouettes, inviting atmospheres

## Main characters

| Character | Role (placeholder) |
|-----------|--------------------|
| **Kito** | Curious young lead explorer |
| **Zuri** | Clever, caring friend |
| **Bobo** | Playful, energetic companion |
| **Jabari** | Brave, loyal friend |
| **Mama Tembo** | Wise, grounding adult guide |

See `docs/CHARACTER-BIBLE.md` for structured profiles and development placeholders.

## Animation direction

**Goal:** Friendly, readable, emotionally expressive children's animation suitable for YouTube long-form and Shorts.

Guiding principles:

- Simple, strong character silhouettes
- Consistent proportions and color across episodes
- Expressive faces and body language over complex action
- Clean backgrounds that support the story without clutter
- Smooth, intentional motion — not chaotic or overstimulating
- Warm lighting and inviting color palettes tied to Sunrise Valley

Final art style (2D / hybrid / limited animation approach) will be decided by the human creator before production assets are locked.

## Production pipeline

High-level flow:

Idea → Story → Script → Storyboard → Character assets → Backgrounds → Voice → Music → Sound effects → Animation → Editing/compositing → Subtitles → Rendering → Quality control → YouTube export → Shorts export

Full detail: `docs/PRODUCTION-PIPELINE.md`

## Technology stack (planned)

Tools will be confirmed against the creator’s PC. Current foundation assumes a mix of:

| Area | Planned / candidate tools |
|------|---------------------------|
| Version control | Git |
| Script & docs | Markdown in `scripts/` and `docs/` |
| Storyboards / thumbnails | Image editors, drawing tools, Cursor-assisted planning |
| Animation | To be selected by creator (e.g. Blender, 2D animation software) |
| Audio | Voice recording tools, music/SFX libraries (original or licensed) |
| Editing / export | Video editor + FFmpeg for processing |
| Automation helpers | Node.js / Python scripts in `tools/` when needed |

Software detection for this environment is reported separately during setup. Do not install tools without the creator’s approval.

## Episode workflow

1. Capture the idea in `scripts/` (logline + lesson)
2. Write a short outline, then a full age-appropriate script
3. Storyboard key beats into `storyboards/`
4. Confirm character/background needs; pull from `characters/`, `backgrounds/`, `props/`
5. Record or generate approved voice tracks into `voices/`
6. Add music and sound effects (`music/`, `sound-effects/`)
7. Animate and assemble the episode under `episodes/`
8. Edit, subtitle, render to `renders/`, then export for platforms into `exports/`
9. Create thumbnail(s) in `thumbnails/` and Shorts cuts in `shorts/`
10. Quality-check before publishing

## YouTube content strategy

- **Primary format:** Short episodic stories (length TBD by creator; keep pacing tight for young attention spans)
- **Series branding:** Consistent title style, characters, and Sunrise Valley identity
- **Thumbnails:** Clear character faces, readable emotion, minimal text
- **Titles/descriptions:** Simple, searchable, parent-friendly language
- **End screens / cards:** Soft CTAs (next episode, playlist) — never aggressive
- **Cadence:** Prefer sustainable quality over high-volume spam uploads

## Shorts strategy

- Extract one clear moment, joke, lesson beat, or character reaction per Short
- Vertical framing; big expressions; fast hook in the first seconds
- Reuse episode assets where possible to stay consistent
- Point viewers back to the full episode when appropriate
- Store Shorts projects and exports under `shorts/`

## Long-term scalability

Design the studio for growth without chaos:

- **Reusable systems:** Character turnarounds, background kits, prop libraries, episode templates
- **Folder discipline:** Every asset has a home; naming stays consistent
- **Documentation first:** Update the character bible and pipeline when process changes
- **Modular episodes:** Shared assets reduce per-episode cost and keep quality high
- **Creator control:** The human creator remains the final creative decision-maker
- **Original IP protection:** Never borrow copyrighted characters, music, or trademarked designs

## Project status

**Foundation only.** No character artwork, Episode 1 production, voices, music, or renders have been started yet.

## Intended local PC path

When syncing to the creator’s Windows PC, place this project at:

`C:\Users\HP\AnimationStudio\Kito-Wild-Ones`

---

*Kito & the Wild Ones — Big Adventures. Little Lessons.*
