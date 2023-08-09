import classNames from 'classnames';
import React from 'react';

import { FavoriteBtn } from '@/features/favorites';
import { IPersonInMovie } from '@/shared/api';
import { Button } from '@/shared/ui/btn-base';
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
}) => (
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
            <span className={styles.textWatch}>Смотреть сериал</span>
          </Button>
          <Button stylesType="bg" className={styles.btnTrailer}>
            <span>Трейлер</span>
          </Button>
          <FavoriteBtn />
        </div>
      </div>
    </div>
  </section>
);
