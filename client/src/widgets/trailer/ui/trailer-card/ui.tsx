/* eslint-disable import/order */
/* eslint-disable jsx-a11y/media-has-caption */

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { VolumeButton } from '@/features/volume-btn';
import { routes } from '@/shared/lib';
import { Rating, Title, Loader } from '@/shared/ui';

import { usePlayer } from '../../lib';
import { ITrailerCard } from './types';

import styles from './styles.module.scss';
import classNames from 'classnames';

interface ITrailerCardProps {
  data: ITrailerCard;
  isActiveSlide: boolean;
}

export const TrailerCard: React.FC<ITrailerCardProps> = ({
  data,
  isActiveSlide,
}) => {
  const { img, trailer, title, rating, year, genre, id } = data;

  const videoRef = useRef<HTMLVideoElement>(null);

  const { play, stop } = usePlayer(videoRef);

  const [isMuted, setIsMuted] = useState(true);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    let timeout: NodeJS.Timeout;

    if (isActiveSlide) {
      timeout = setTimeout(() => {
        play();
        setIsActive(true);
      }, 2000);
    } else {
      setIsActive(false);
      setIsMuted(true);
      stop();
    }

    return () => clearTimeout(timeout);
  }, [isActiveSlide, play, stop]);

  return (
    data && (
      <div className={styles.card}>
        <Link href={routes.movie(id)} className={styles.link}>
          {isActive && (
            <video
              ref={videoRef}
              className={styles.video}
              onCanPlay={() => setIsLoading(false)}
              onWaiting={() => setIsLoading(true)}
              autoPlay
              muted={isMuted}
              loop
              playsInline
              src={trailer}
            />
          )}
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
          <div
            className={classNames(styles.spinner, isLoading && styles.loading)}
          >
            <Loader />
          </div>
        </Link>
        <VolumeButton
          onClick={() => setIsMuted((prev) => !prev)}
          isMuted={isMuted}
        />
      </div>
    )
  );
};
