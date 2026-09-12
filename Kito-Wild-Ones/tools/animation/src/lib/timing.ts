/** Frame timing for the Pip technical test (docs/TEST-ANIMATION-SPEC.md). */

export const PIP_TEST = {
  fps: 30,
  width: 1920,
  height: 1080,
  durationInFrames: 240,
  fadeInEnd: 15,
  walkStart: 15,
  walkEnd: 90,
  stopEnd: 110,
  waveStart: 110,
  waveEnd: 160,
  cameraPushStart: 120,
  cameraPushEnd: 220,
  fadeOutStart: 220,
  walkCycleFrames: 12,
  waveLoopFrames: 25,
  waveLoops: 2,
} as const;

export type PipPhase = 'idle' | 'walking' | 'stopping' | 'waving' | 'hold';

export const getPipPhase = (frame: number): PipPhase => {
  if (frame < PIP_TEST.walkStart) return 'idle';
  if (frame < PIP_TEST.walkEnd) return 'walking';
  if (frame < PIP_TEST.stopEnd) return 'stopping';
  if (frame < PIP_TEST.waveEnd) return 'waving';
  return 'hold';
};
