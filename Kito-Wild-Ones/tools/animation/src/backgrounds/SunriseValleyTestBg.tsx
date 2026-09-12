import React from 'react';
import {AbsoluteFill} from 'remotion';

type BgProps = {
  /** Pixels of layered shift during camera push */
  parallax: number;
};

/**
 * Layered Sunrise Valley test background (placeholder kit — not final art).
 */
export const SunriseValleyTestBg: React.FC<BgProps> = ({parallax}) => {
  const far = parallax * 0.25;
  const mid = parallax * 0.55;
  const near = parallax * 0.9;

  return (
    <AbsoluteFill>
      <AbsoluteFill
        style={{
          background:
            'linear-gradient(180deg, #ffd2a8 0%, #ffe6c8 28%, #b7e4ef 70%, #7ec8de 100%)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: 220 - far,
          top: 120,
          width: 180,
          height: 180,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, #fff1c9 0%, #ffc978 55%, rgba(255,180,90,0) 70%)',
          opacity: 0.95,
        }}
      />

      <svg
        width="1920"
        height="1080"
        viewBox="0 0 1920 1080"
        style={{
          position: 'absolute',
          inset: 0,
          transform: `translateX(${-far}px)`,
        }}
      >
        <path
          d="M0,620 C220,540 420,560 640,600 C900,650 1100,520 1360,560 C1560,590 1760,540 1920,570 L1920,1080 L0,1080 Z"
          fill="#8fb87a"
          opacity="0.75"
        />
      </svg>

      <svg
        width="1920"
        height="1080"
        viewBox="0 0 1920 1080"
        style={{
          position: 'absolute',
          inset: 0,
          transform: `translateX(${-mid}px)`,
        }}
      >
        <path
          d="M0,700 C260,640 480,680 720,720 C980,760 1180,660 1480,700 C1680,725 1820,690 1920,700 L1920,1080 L0,1080 Z"
          fill="#6f9a58"
        />
        <ellipse cx="1480" cy="560" rx="120" ry="42" fill="#2f4a32" />
        <ellipse cx="1410" cy="575" rx="70" ry="28" fill="#2f4a32" />
        <ellipse cx="1555" cy="575" rx="75" ry="30" fill="#2f4a32" />
        <rect x="1472" y="560" width="16" height="160" fill="#3a2f24" rx="4" />
      </svg>

      <svg
        width="1920"
        height="1080"
        viewBox="0 0 1920 1080"
        style={{
          position: 'absolute',
          inset: 0,
          transform: `translateX(${-near * 0.15}px)`,
        }}
      >
        <path
          d="M0,820 C400,780 800,860 1200,820 C1500,790 1750,840 1920,820 L1920,1080 L0,1080 Z"
          fill="#d7b07a"
        />
        <path
          d="M0,860 C450,830 850,900 1250,860 C1550,835 1780,880 1920,865 L1920,1080 L0,1080 Z"
          fill="#c49860"
          opacity="0.85"
        />
      </svg>

      <svg
        width="1920"
        height="1080"
        viewBox="0 0 1920 1080"
        style={{
          position: 'absolute',
          inset: 0,
          transform: `translateX(${-near}px)`,
        }}
      >
        <g fill="#4f7a3f">
          <path d="M80,1000 q20,-60 40,0 q-18,-20 -40,0" />
          <path d="M140,1010 q18,-50 36,0 q-16,-18 -36,0" />
          <path d="M1760,995 q22,-70 44,0 q-20,-22 -44,0" />
          <path d="M1820,1015 q16,-48 32,0 q-14,-16 -32,0" />
        </g>
      </svg>
    </AbsoluteFill>
  );
};
