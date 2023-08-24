import type { RefObject } from 'react';

interface IPlayerHook {
  play: () => void;
  stop: () => void;
}

export function usePlayer(videoRef: RefObject<HTMLVideoElement>): IPlayerHook {
  const play = () => {
    videoRef.current?.play();
  };

  const stop = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return { play, stop };
}
