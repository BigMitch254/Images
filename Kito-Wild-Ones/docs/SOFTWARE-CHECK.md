# Environment check — Cloud Agent (Linux)

Checked during foundation setup. **Nothing was installed automatically.**

| Software | Status | Version / notes |
|----------|--------|-----------------|
| Node.js | Installed | v22.14.0 |
| npm | Installed | 10.9.7 |
| Git | Installed | 2.43.0 |
| FFmpeg | Installed | 6.1.1 |
| Python | Installed as `python3` | 3.12.3 (`python` command not found) |
| Blender | **Missing** | not found on PATH |
| Remotion / React / TypeScript project | **Not installed yet** | recommended in `TECHNICAL-ARCHITECTURE.md`; await creator approval before scaffolding |

## Architecture note

Phase 2 recommendation: **Remotion + React + TypeScript + FFmpeg (+ Python tooling)**.  
Blender remains optional/later. See `docs/TECHNICAL-ARCHITECTURE.md`.

## Important path note

This Cloud Agent runs on **Linux**, not on the Windows PC path `C:\Users\HP\...`.

Project foundation was created at:

`/workspace/Kito-Wild-Ones`

When working on the HP Windows PC, copy or clone this folder to:

`C:\Users\HP\AnimationStudio\Kito-Wild-Ones`

Then re-run the same software checks on that PC (versions may differ).
