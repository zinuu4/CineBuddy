import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

interface IYouTubePlayerProps {
  videoLink: string;
}

export const YouTubePlayer: React.FC<IYouTubePlayerProps> = ({ videoLink }) => {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.playVideo();
  };

  const opts: YouTubeProps['opts'] = {
    height: '533',
    width: '948',
    playerVars: {
      autoplay: 0,
    },
  };

  const urlParts = videoLink.split('/');

  const videoId = urlParts[urlParts.length - 1];

  return <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />;
};
