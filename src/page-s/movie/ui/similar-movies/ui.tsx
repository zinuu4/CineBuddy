import classNames from 'classnames';
import React from 'react';

import { MoviesSlider } from '@/widgets/movies-slider';
import { IMovieCard } from '@/shared/api';
import { Title } from '@/shared/ui/title';

import styles from './styles.module.scss';

interface ISimilarMoviesList {
  movies: Partial<IMovieCard[]>;
}

export const SimilarMoviesList: React.FC<ISimilarMoviesList> = ({ movies }) => (
  <section className={styles.section}>
    <div className={classNames(styles.container, 'container')}>
      <Title title="Похожее" className={styles.title} />
      <MoviesSlider data={movies} />
    </div>
  </section>
);
