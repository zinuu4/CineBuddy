'use client';

import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

import styles from './styles.module.scss';

interface IYouTubePlayerProps {
  videoLink: string;
}

export const YouTubePlayer: React.FC<IYouTubePlayerProps> = ({ videoLink }) => {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.playVideo();
  };

  const opts: YouTubeProps['opts'] = {
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  const urlParts = videoLink.split('/');

  const videoId = urlParts[urlParts.length - 1];

  return (
    <div className={styles.player}>
      <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />
    </div>
  );
};
