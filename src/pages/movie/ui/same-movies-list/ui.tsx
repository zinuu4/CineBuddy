import classNames from 'classnames';
import React from 'react';

import { MoviesSlider } from '@/widgets/movies-slider';
import { Title } from '@/shared/ui/title';

import styles from './styles.module.scss';

const ComedyFilms = [
  {
    img: '/slide.webp',
    name: 'Чебурашка',
    year: 2022,
    rating: 9.1,
    length: '2 ч 22 мин',
  },
  {
    img: '/slide.webp',
    name: 'Чебурашка1',
    year: 2022,
    rating: 9.1,
    length: '2 ч 22 мин',
  },
  {
    img: '/slide.webp',
    name: 'Чебурашка2',
    year: 2022,
    rating: 9.1,
    length: '2 ч 22 мин',
  },
  {
    img: '/slide.webp',
    name: 'Чебурашка3',
    year: 2022,
    rating: 9.1,
    length: '2 ч 22 мин',
  },
  {
    img: '/slide.webp',
    name: 'Чебурашка4',
    year: 2022,
    rating: 9.1,
    length: '2 ч 22 мин',
  },
  {
    img: '/slide.webp',
    name: 'Чебурашка5',
    year: 2022,
    rating: 9.1,
    length: '2 ч 22 мин',
  },
  {
    img: '/slide.webp',
    name: 'Чебурашка6',
    year: 2022,
    rating: 9.1,
    length: '2 ч 22 мин',
  },
];

export const SameMoviesList = () => (
  <section>
    <div className={classNames(styles.container, 'container')}>
      <Title title="Похожее" className={styles.title} />
      <MoviesSlider data={ComedyFilms} />
    </div>
  </section>
);
