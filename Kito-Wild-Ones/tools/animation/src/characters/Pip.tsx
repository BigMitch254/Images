import React from 'react';
import {interpolate} from 'remotion';
import type {PipPhase} from '../lib/timing';

type PipProps = {
  frame: number;
  phase: PipPhase;
  walkCycleFrames?: number;
  waveLoopFrames?: number;
  waveLocalFrame?: number;
};

/**
 * Pip — TECHNICAL TEST PLACEHOLDER ONLY.
 * Soft gray bean figure. Never part of the official Kito cast.
 */
export const Pip: React.FC<PipProps> = ({
  frame,
  phase,
  walkCycleFrames = 12,
  waveLoopFrames = 25,
  waveLocalFrame = 0,
}) => {
  const walkPhase = (frame % walkCycleFrames) / walkCycleFrames;
  const bob =
    phase === 'walking'
      ? Math.sin(walkPhase * Math.PI * 2) * 10
      : phase === 'stopping'
        ? Math.sin(frame * 0.4) * 2
        : 0;

  const legSwing =
    phase === 'walking' ? Math.sin(walkPhase * Math.PI * 2) * 18 : 0;

  const waveProgress =
    phase === 'waving' ? (waveLocalFrame % waveLoopFrames) / waveLoopFrames : 0;
  const armWave =
    phase === 'waving' ? Math.sin(waveProgress * Math.PI * 2) * 55 : 0;

  const rightArmRotate =
    phase === 'waving'
      ? -20 + armWave
      : phase === 'walking'
        ? -legSwing * 0.4
        : 12;

  const leftArmRotate = phase === 'walking' ? legSwing * 0.35 : -8;

  const smileScale = interpolate(
    phase === 'waving' ? 1 : phase === 'walking' ? 0.6 : 0.4,
    [0, 1],
    [0.85, 1.15],
  );

  return (
    <div
      style={{
        width: 220,
        height: 280,
        position: 'relative',
        transform: `translateY(${-bob}px)`,
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: 50,
          top: -26,
          width: 120,
          textAlign: 'center',
          fontFamily: 'Segoe UI, Helvetica, Arial, sans-serif',
          fontSize: 18,
          fontWeight: 700,
          color: '#3d4450',
          letterSpacing: 1,
        }}
      >
        PIP (TEST)
      </div>

      <div
        style={{
          position: 'absolute',
          left: 35,
          top: 70,
          width: 150,
          height: 170,
          borderRadius: '50% 50% 46% 46%',
          background: 'linear-gradient(180deg, #c5c8ce 0%, #9aa0a8 100%)',
          boxShadow: 'inset 0 -18px 30px rgba(0,0,0,0.12)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: 50,
          top: 8,
          width: 120,
          height: 110,
          borderRadius: '50%',
          background: 'linear-gradient(180deg, #d5d8de 0%, #b0b5bd 100%)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: 78,
          top: 48,
          width: 16,
          height: 20,
          borderRadius: '50%',
          background: '#2b3038',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 126,
          top: 48,
          width: 16,
          height: 20,
          borderRadius: '50%',
          background: '#2b3038',
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: 88,
          top: 78,
          width: 44,
          height: 22,
          borderBottom: '5px solid #2b3038',
          borderRadius: '0 0 40px 40px',
          transform: `scaleX(${smileScale})`,
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: 18,
          top: 110,
          width: 28,
          height: 90,
          borderRadius: 20,
          background: '#a8adb5',
          transformOrigin: '50% 10%',
          transform: `rotate(${leftArmRotate}deg)`,
        }}
      />

      <div
        style={{
          position: 'absolute',
          right: 18,
          top: 110,
          width: 28,
          height: 90,
          borderRadius: 20,
          background: '#a8adb5',
          transformOrigin: '50% 10%',
          transform: `rotate(${rightArmRotate}deg)`,
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: 70,
          bottom: 0,
          width: 28,
          height: 55,
          borderRadius: 16,
          background: '#8f959e',
          transformOrigin: '50% 0%',
          transform: `rotate(${-legSwing}deg)`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 122,
          bottom: 0,
          width: 28,
          height: 55,
          borderRadius: 16,
          background: '#8f959e',
          transformOrigin: '50% 0%',
          transform: `rotate(${legSwing}deg)`,
        }}
      />
    </div>
  );
};
