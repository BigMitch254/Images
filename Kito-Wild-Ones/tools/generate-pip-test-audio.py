#!/usr/bin/env python3
"""Regenerate Pip technical-test placeholder audio (not series music)."""

from __future__ import annotations

import math
import struct
import wave
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "tools" / "animation" / "public" / "audio"
SFX = ROOT / "sound-effects" / "tests"
MUSIC = ROOT / "music" / "tests"
SR = 44100


def write_wav(path: Path, samples: list[float], sr: int = SR) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with wave.open(str(path), "w") as w:
        w.setnchannels(1)
        w.setsampwidth(2)
        w.setframerate(sr)
        frames = b"".join(
            struct.pack("<h", max(-32767, min(32767, int(s * 32767)))) for s in samples
        )
        w.writeframes(frames)


def footsteps(duration: float = 4.0) -> list[float]:
    out: list[float] = []
    for i in range(int(SR * duration)):
        t = i / SR
        phase = (t % 0.4) / 0.4
        env = math.exp(-phase * 18) if phase < 0.35 else 0.0
        s = env * (
            0.55 * math.sin(2 * math.pi * 90 * t)
            + 0.25 * math.sin(2 * math.pi * 55 * t)
        )
        out.append(s * 0.6)
    return out


def chime(duration: float = 1.2) -> list[float]:
    out: list[float] = []
    for i in range(int(SR * duration)):
        t = i / SR
        env = math.exp(-t * 2.8)
        s = env * (
            0.5 * math.sin(2 * math.pi * 880 * t)
            + 0.3 * math.sin(2 * math.pi * 1320 * t)
            + 0.15 * math.sin(2 * math.pi * 1760 * t)
        )
        out.append(s * 0.7)
    return out


def ambient(duration: float = 8.2) -> list[float]:
    out: list[float] = []
    for i in range(int(SR * duration)):
        t = i / SR
        fade = min(1.0, t / 0.4) * min(1.0, (duration - t) / 0.5)
        s = fade * (
            0.18 * math.sin(2 * math.pi * 110 * t)
            + 0.12 * math.sin(2 * math.pi * 164.5 * t)
            + 0.08 * math.sin(2 * math.pi * 220 * t)
        )
        out.append(s)
    return out


def main() -> None:
    foot = footsteps()
    chim = chime()
    amb = ambient()

    write_wav(PUBLIC / "footsteps.wav", foot)
    write_wav(PUBLIC / "wave-chime.wav", chim)
    write_wav(PUBLIC / "ambient-bed.wav", amb)

    write_wav(SFX / "footsteps.wav", foot)
    write_wav(SFX / "wave-chime.wav", chim)
    write_wav(MUSIC / "ambient-bed.wav", amb)
    print("Wrote Pip test audio to public/audio, sound-effects/tests, music/tests")


if __name__ == "__main__":
    main()
