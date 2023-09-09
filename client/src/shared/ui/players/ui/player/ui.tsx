import React from 'react';

interface IPlayerProps {
  id: number;
}

export const Player: React.FC<IPlayerProps> = ({ id }) => (
  <iframe
    src={`https://voidboost.net/embed/${id}?poster=1&poster_id=4&df=1`}
    allow="autoplay"
    width="100%"
    height="100%"
    allowFullScreen
    title={id.toString()}
  />
);
