/* eslint-disable jsx-a11y/media-has-caption */

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

import { VolumeButton } from '@/features/volume-button';
import { Rating } from '@/shared/ui/rating';
import { Title } from '@/shared/ui/title';
import { createObserver } from '../../lib';

import styles from './styles.module.scss';

interface ITrailerCardProps {
  data: {
    imgUrl: string;
    videoUrl: string;
    title: string;
    rating: number;
    year: number;
    genre: string;
  };
}

export const TrailerCard: React.FC<ITrailerCardProps> = ({ data }) => {
  const { imgUrl, videoUrl, title, rating, year, genre } = data;

  const videoRef = useRef<HTMLVideoElement>(null);

  const [isMuted, setIsMuted] = useState(true);
  const [imgVisibility, setImgVisibility] = useState(true);

  const toggleMuted = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.muted = !videoElement.muted;
      setIsMuted(videoElement.muted);
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;

    const { observer } = createObserver(videoElement, setImgVisibility)!;

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      observer.disconnect();
    };
  }, [videoUrl]);

  return (
    data && (
      <div className={styles.card}>
        <VolumeButton onClick={toggleMuted} isMuted={isMuted} />
        <video
          ref={videoRef}
          className={styles.video}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          src={videoUrl}
        />
        {imgVisibility && (
          <>
            <Image
              src={imgUrl}
              alt="Image"
              className={styles.img}
              fill
              sizes="width: 100%, height: 30vw"
              priority
            />
            <div className={styles.content}>
              <Title title={title} as="h2" className={styles.title} />
              <div className={styles.properties}>
                <Rating rating={rating} />
                <span className={styles.year}>{year}</span>
                <span className={styles.genre}>{genre}</span>
              </div>
            </div>
          </>
        )}
      </div>
    )
  );
};
