import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

import { FavoriteBtn } from '@/features/favorites';
import { IPersonInMovie, IVideo } from '@/shared/api';
import { Button } from '@/shared/ui/btn-base';
import { Modal } from '@/shared/ui/modal';
import { YouTubePlayer } from '@/shared/ui/players';
import { Descr } from './descr';
import { MovieLogo } from './logo';
import { MainInfo } from './main-info';
import { People } from './people';

import styles from './styles.module.scss';

interface IMovieMainProps {
  backdrop: string;
  logo: string;
  rating: number;
  year: number;
  genre: string;
  ageRestriction: number;
  country: string;
  length: number;
  shortDescription: string;
  persons: IPersonInMovie[];
  trailers: IVideo[];
}

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
}) => {
  const [youTubePlayer, setYouTubePlayer] = useState(false);
  const [youTubeTrailers, setYouTubeTrailers] = useState<IVideo[]>([]);

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
            <MovieLogo img={logo} alt="img" />
            <MainInfo
              rating={rating}
              year={year}
              genre={genre}
              ageRestriction={ageRestriction}
              country={country}
              length={length}
            />
            <Descr descr={shortDescription} />
            <People persons={persons} />
            <div className={styles.btns}>
              <Button stylesType="bg" className={styles.btnWatch}>
                <span className={styles.textWatch}>Смотреть {genre}</span>
              </Button>
              <Button
                onClick={() => setYouTubePlayer(!youTubePlayer)}
                stylesType="bg"
                className={styles.btnTrailer}
              >
                <span>Трейлер</span>
              </Button>
              <FavoriteBtn />
            </div>
          </div>
        </div>
      </section>
      <Modal
        onClose={() => setYouTubePlayer(false)}
        isOpen={youTubePlayer}
        className={styles.modal}
      >
        {youTubeTrailers && (
          <YouTubePlayer videoLink={youTubeTrailers[0]?.url ?? ''} />
        )}
      </Modal>
    </>
  );
};
