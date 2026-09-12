import React from 'react';
import {
  AbsoluteFill,
  Audio,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import {SunriseValleyTestBg} from '../backgrounds/SunriseValleyTestBg';
import {Pip} from '../characters/Pip';
import {getCameraState} from '../lib/camera';
import {PIP_TEST, getPipPhase} from '../lib/timing';

/**
 * Technical proof scene only.
 * Demonstrates: character + background + camera + timing + audio + render path.
 */
export const PipWalkWave: React.FC = () => {
  const frame = useCurrentFrame();
  const {width, height} = useVideoConfig();
  const phase = getPipPhase(frame);
  const camera = getCameraState(frame);

  const walkT = interpolate(
    frame,
    [PIP_TEST.walkStart, PIP_TEST.walkEnd],
    [0, 1],
    {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'},
  );

  const stopT = interpolate(
    frame,
    [PIP_TEST.walkEnd, PIP_TEST.stopEnd],
    [0, 1],
    {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'},
  );

  const walkX = interpolate(walkT, [0, 1], [-160, 1180]);
  const stopX = interpolate(stopT, [0, 1], [1180, 1280]);
  const pipX =
    frame < PIP_TEST.walkStart
      ? -160
      : frame < PIP_TEST.walkEnd
        ? walkX
        : frame < PIP_TEST.stopEnd
          ? stopX
          : 1280;

  const pipY = 620;
  const waveLocal = Math.max(0, frame - PIP_TEST.waveStart);

  const fadeIn = interpolate(frame, [0, PIP_TEST.fadeInEnd], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const fadeOut = interpolate(
    frame,
    [PIP_TEST.fadeOutStart, PIP_TEST.durationInFrames],
    [1, 0],
    {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'},
  );
  const opacity = Math.min(fadeIn, fadeOut);

  const parallax = interpolate(camera.zoom, [1, 1.35], [0, 70], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const footstepsVolume =
    phase === 'walking' ? 0.55 : phase === 'stopping' ? 0.2 : 0;

  return (
    <AbsoluteFill style={{backgroundColor: '#000'}}>
      <AbsoluteFill
        style={{
          opacity,
          transform: `translate(${width / 2 + camera.panX}px, ${
            height / 2 + camera.panY
          }px) scale(${camera.zoom}) translate(${-width / 2}px, ${-height / 2}px)`,
          transformOrigin: 'center center',
        }}
      >
        <SunriseValleyTestBg parallax={parallax} />

        <div
          style={{
            position: 'absolute',
            left: pipX,
            top: pipY,
          }}
        >
          <Pip
            frame={frame}
            phase={phase}
            walkCycleFrames={PIP_TEST.walkCycleFrames}
            waveLoopFrames={PIP_TEST.waveLoopFrames}
            waveLocalFrame={waveLocal}
          />
        </div>
      </AbsoluteFill>

      <Audio src={staticFile('audio/ambient-bed.wav')} volume={0.22} />

      {footstepsVolume > 0 ? (
        <Audio src={staticFile('audio/footsteps.wav')} volume={footstepsVolume} />
      ) : null}

      {frame >= PIP_TEST.waveStart ? (
        <Audio src={staticFile('audio/wave-chime.wav')} volume={0.7} />
      ) : null}

      <div
        style={{
          position: 'absolute',
          left: 36,
          bottom: 28,
          fontFamily: 'Segoe UI, Helvetica, Arial, sans-serif',
          fontSize: 22,
          color: 'rgba(30,40,40,0.75)',
          fontWeight: 600,
        }}
      >
        Kito pipeline test · Pip placeholder · not series canon
      </div>
    </AbsoluteFill>
  );
};
