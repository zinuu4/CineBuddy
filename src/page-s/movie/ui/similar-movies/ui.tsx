import classNames from 'classnames';
import React from 'react';

import { SimilarMoviesSlider } from '@/widgets/similar-movies-slider';
import { ILinkedMovie } from '@/shared/api';
import { Title } from '@/shared/ui/title';

import styles from './styles.module.scss';

interface ISimilarMoviesList {
  movies: ILinkedMovie[];
}

export const SimilarMoviesList: React.FC<ISimilarMoviesList> = ({ movies }) => (
  <section>
    <div className={classNames(styles.container, 'container')}>
      <Title title="Похожее" className={styles.title} />
      <SimilarMoviesSlider data={movies} />
    </div>
  </section>
);
