import {Easing, interpolate} from 'remotion';
import {PIP_TEST} from './timing';

export type CameraState = {
  zoom: number;
  panX: number;
  panY: number;
};

/** Slow ease-in-out push toward Pip (center-right). */
export const getCameraState = (frame: number): CameraState => {
  const zoom = interpolate(
    frame,
    [PIP_TEST.cameraPushStart, PIP_TEST.cameraPushEnd],
    [1, 1.35],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.inOut(Easing.cubic),
    },
  );

  const panX = interpolate(
    frame,
    [PIP_TEST.cameraPushStart, PIP_TEST.cameraPushEnd],
    [0, 140],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.inOut(Easing.cubic),
    },
  );

  const panY = interpolate(
    frame,
    [PIP_TEST.cameraPushStart, PIP_TEST.cameraPushEnd],
    [0, 40],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.inOut(Easing.cubic),
    },
  );

  return {zoom, panX, panY};
};
