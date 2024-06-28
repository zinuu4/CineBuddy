import React from 'react';

interface IPlayerProps {
  id: number;
}

export const Player: React.FC<IPlayerProps> = ({ id }) => (
  <iframe
    src={`https://api.linktodo.ws/embed/kp/${id}?host=kinobd.net`}
    allow="autoplay"
    width="100%"
    height="100%"
    allowFullScreen
    title={id.toString()}
  />
);
