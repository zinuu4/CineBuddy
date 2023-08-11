'use client';

import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { genreOptions } from '@/features/movies-filters';
import { useGetMoviesQuery } from '@/entities/movie/api';
import { MovieCard } from '@/entities/movie/ui/movie-card';
import { ErrorMsg } from '@/shared/ui/error-msg';
import { LoadMoreBtn } from '@/shared/ui/load-more-btn';
import { Loader } from '@/shared/ui/loader';

import styles from './styles.module.scss';

interface IMoviesListProps {
  type: string;
}

export const MoviesList: React.FC<IMoviesListProps> = ({ type }) => {
  const searchParams = useSearchParams();

  const [limit, setLimit] = useState(30);

  const genre = searchParams?.get('genre');
  const year = searchParams?.get('release');
  const rating = searchParams?.get('rate');
  const sort = searchParams?.get('sort');

  const selectedGenre = genreOptions.find((option) => option.value === genre);

  const { data, isLoading, isFetching, isError } = useGetMoviesQuery({
    type,
    limit,
    ...(selectedGenre?.value !== '' && { genre: selectedGenre?.value }),
    ...(selectedGenre === null && { genre: '' }),
    ...(year && { year }),
    ...(sort && { sortField: sort }),
    ...(rating && { rating }),
  });

  const movies = data?.movies ? data.movies : [];
  const total = data?.total ? data.total : 0;

  const handleLoadMore = () => {
    setLimit((prevLimit) => prevLimit + 30);
  };

  const onScroll = () => {
    const offset = window.innerHeight + window.pageYOffset;
    if (
      offset >= document.body.offsetHeight - 1 &&
      !(isLoading || isError || isFetching || limit >= total)
    ) {
      handleLoadMore();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [isLoading, isError, isFetching, limit, total]);

  useEffect(() => {
    ErrorMsg(isError);
  }, [isError]);

  return (
    <section className="container">
      <div className={styles.list}>
        {movies?.map((movie) => (
          <div className={styles.card} key={movie.id}>
            <MovieCard data={movie} />
          </div>
        ))}
      </div>
      {isFetching || isLoading ? <Loader /> : null}
      <LoadMoreBtn
        onClick={handleLoadMore}
        disabled={isFetching || isLoading || isError}
        hide={limit >= total}
      />
    </section>
  );
};
