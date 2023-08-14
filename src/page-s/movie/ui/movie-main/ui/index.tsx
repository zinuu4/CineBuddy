import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

import { IVideo } from '@/shared/api';
import { Modal } from '@/shared/ui/modal';
import { YouTubePlayer, Player } from '@/shared/ui/players';

import { IMovieMainProps } from '../types';
import { ActionBtns } from './action-btns';
import { Descr } from './descr';
import { MovieLogo } from './logo';
import { MainInfo } from './main-info';
import { People } from './people';

import styles from './styles.module.scss';

export const MovieMain: React.FC<IMovieMainProps> = ({
  backdrop,
  logo,
  rating,
  year,
  genre,
  ageRestriction,
  country,
  length,
  shortDescription,
  persons,
  trailers,
  id,
  name,
  isSeries,
  seasons,
}) => {
  const [youTubePlayer, setYouTubePlayer] = useState(false);
  const [youTubeTrailers, setYouTubeTrailers] = useState<IVideo[]>([]);

  const [moviePlayer, setMoviePlayer] = useState(false);

  useEffect(() => {
    setYouTubeTrailers(trailers.filter(({ site }) => site === 'youtube'));
  }, [trailers]);

  return (
    <>
      <section className={styles.section}>
        <div className={styles.height} />
        <div
          style={{
            backgroundImage: `url(${backdrop})`,
          }}
          className={styles.bg}
        />
        <div className={classNames(styles.container, 'container')}>
          <div className={styles.content}>
            <MovieLogo img={logo} alt={name} />
            <MainInfo
              rating={rating}
              year={year}
              genre={genre}
              ageRestriction={ageRestriction}
              country={country}
              length={length}
              isSeries={isSeries}
              seasons={seasons}
            />
            <Descr descr={shortDescription} />
            <People persons={persons} />
            <ActionBtns
              setMoviePlayer={setMoviePlayer}
              setYouTubePlayer={setYouTubePlayer}
              id={id}
              genre={genre}
            />
          </div>
        </div>
      </section>
      <Modal
        onClose={() => setYouTubePlayer(false)}
        isOpen={youTubePlayer}
        className={styles.trailer}
      >
        {youTubeTrailers && (
          <YouTubePlayer videoLink={youTubeTrailers[0]?.url ?? ''} />
        )}
      </Modal>
      <Modal
        className={styles.movie}
        onClose={() => setMoviePlayer(false)}
        isOpen={moviePlayer}
        closeClassname={styles.close}
      >
        {moviePlayer && <Player id={id} />}
      </Modal>
    </>
  );
};
