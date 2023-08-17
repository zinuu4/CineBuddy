import classNames from 'classnames';
import React, { useState } from 'react';

import { BtnBack } from '@/features/back-btn';
import { Modal } from '@/shared/ui/modal';
import { YouTubePlayer, Player } from '@/shared/ui/players';

import { getTrailer } from '../lib';
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
  type,
}) => {
  const [youTubePlayer, setYouTubePlayer] = useState(false);

  const [moviePlayer, setMoviePlayer] = useState(false);

  const trailer = getTrailer(trailers);

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
          <BtnBack />
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
              rating={rating}
              name={name}
              length={length}
              year={year}
              type={type}
            />
          </div>
        </div>
      </section>
      <Modal
        onClose={() => setYouTubePlayer(false)}
        isOpen={youTubePlayer}
        containerClassName={styles.trailer}
      >
        {trailer && <YouTubePlayer videoLink={trailer?.url ?? ''} />}
      </Modal>
      <Modal
        containerClassName={styles.movie}
        onClose={() => setMoviePlayer(false)}
        isOpen={moviePlayer}
        closeClassName={styles.close}
      >
        {moviePlayer && <Player id={id} />}
      </Modal>
    </>
  );
};
