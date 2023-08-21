/* eslint-disable import/order */
/* eslint-disable jsx-a11y/media-has-caption */

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { VolumeButton } from '@/features/volume-btn';
import { routes } from '@/shared/lib/routing';
import { Rating } from '@/shared/ui/rating';
import { Title } from '@/shared/ui/title';

import { createObserver } from '../../lib';
import { ITrailerCard } from './types';

import styles from './styles.module.scss';

interface ITrailerCardProps {
  data: ITrailerCard;
}

export const TrailerCard: React.FC<ITrailerCardProps> = ({ data }) => {
  const { img, trailer, title, rating, year, genre, id } = data;

  const videoRef = useRef<HTMLVideoElement>(null);

  const [isMuted, setIsMuted] = useState(true);
  const [isActive, setIsActive] = useState(false);

  const toggleMuted = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.muted = !videoElement.muted;
      setIsMuted(videoElement.muted);
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;

    const { observer } = createObserver(videoElement, setIsActive)!;

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      observer.disconnect();
    };
  }, [trailer]);

  return (
    data && (
      <div className={styles.card}>
        <Link href={routes.movie(id)} className={styles.link}>
          <video
            ref={videoRef}
            className={styles.video}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            src={trailer}
          />
          <div className={styles.content}>
            <CSSTransition
              timeout={0}
              in={isActive}
              classNames={{ enterDone: styles.done }}
            >
              <Title
                size="small"
                title={title}
                as="h2"
                className={styles.title}
              />
            </CSSTransition>
            <CSSTransition
              timeout={0}
              in={isActive}
              classNames={{ enterDone: styles.done }}
            >
              <div className={styles.bottom}>
                <Rating rating={rating} />
                <span className={styles.year}>{year}</span>
                <span className={styles.genre}>{genre}</span>
              </div>
            </CSSTransition>
          </div>
          {!isActive && (
            <Image
              src={img}
              alt="Image"
              className={styles.img}
              fill
              sizes="100%"
              priority
            />
          )}
        </Link>
        <VolumeButton onClick={toggleMuted} isMuted={isMuted} />
      </div>
    )
  );
};
