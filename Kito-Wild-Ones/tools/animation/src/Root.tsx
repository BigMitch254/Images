import React from 'react';
import {Composition} from 'remotion';
import {PipWalkWave} from './scenes/PipWalkWave';
import {PIP_TEST} from './lib/timing';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="PipWalkWave"
        component={PipWalkWave}
        durationInFrames={PIP_TEST.durationInFrames}
        fps={PIP_TEST.fps}
        width={PIP_TEST.width}
        height={PIP_TEST.height}
      />
    </>
  );
};
