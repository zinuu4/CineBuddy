import React from 'react';

import { useGetMoviesQuery } from '@/entities/movie/api';
import { MovieCard } from '@/entities/movie/ui/movie-card';
import { Genres } from '@/shared/api';

import styles from './styles.module.scss';

const films = [
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

export const MoviesList: React.FC = () => {
  const { data } = useGetMoviesQuery({ genre: Genres.Comedy, limit: 30 });

  return (
    <section className="container">
      <div onClick={() => console.log(data)} className={styles.list}>
        {films.map((film, index) => (
          <div className={styles.card} key={index}>
            <MovieCard data={film} />
          </div>
        ))}
      </div>
    </section>
  );
};
