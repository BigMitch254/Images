# Test Animation Results — Pip Walk Wave

**Date:** 2026-09-12  
**Composition:** `PipWalkWave`  
**Status:** PASS (technical proof)

## Rendered master

| Property | Value |
|----------|-------|
| Path | `renders/tests/pip-walk-wave-v001.mp4` |
| Resolution | **1920 × 1080** |
| Aspect | **16:9** |
| Codec | H.264 + AAC |
| Duration | ~8.04 s (240 frames @ 30 fps) |
| Size | ~1.2 MB |

## What was proven

1. Reusable placeholder character component (`Pip`)
2. Layered Sunrise Valley background with parallax
3. Walk → stop → wave timing
4. Slow camera push-in
5. Footsteps synced to walking; chime on wave
6. Remotion render path works
7. FFmpeg proxies:
   - `exports/tests/pip-walk-wave-16x9-proxy.mp4`
   - `shorts/tests/pip-walk-wave-9x16-proxy.mp4`

## Explicit non-series note

**Pip is a technical test character only.**  
Pip is **not** part of the official Kito & the Wild Ones cast and must never be promoted into series canon.

## How to re-render

```bash
cd tools/animation
npm install
npm run render:pip-test
```
