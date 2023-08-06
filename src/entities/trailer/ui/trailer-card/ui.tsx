import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

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
  const [imgVisibility, setImgVisibility] = useState(true);

  useEffect(() => {
    const videoElement = videoRef.current;

    const options = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setImgVisibility(false);
          videoElement?.play();
        } else {
          setImgVisibility(true);
          videoElement?.pause();
        }
      });
    }, options);

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
        <video
          ref={videoRef}
          className={styles.video}
          autoPlay
          muted
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
              <h2 className={styles.title}>{title}</h2>
              <div className={styles.properties}>
                <span className={styles.rating}>{rating?.toFixed(1)}</span>
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
