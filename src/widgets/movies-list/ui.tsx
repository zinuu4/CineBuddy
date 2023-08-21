'use client';

import classNames from 'classnames';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { genreOptions } from '@/features/movies-filters';
import { useGetMoviesQuery } from '@/entities/movie/api';
import { MovieCard } from '@/entities/movie/ui/movie-card';
import { ErrorMsg } from '@/shared/ui/error-msg';
import { LoadMoreBtn } from '@/shared/ui/load-more-btn';
import { Loader } from '@/shared/ui/loader';
import { NoResultsMessage } from '@/shared/ui/no-result-msg';

import { useScroll } from './lib';

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

  useScroll({ handleLoadMore, limit, total, isLoading, isError, isFetching });

  useEffect(() => {
    ErrorMsg(isError);
  }, [isError]);

  if (movies && movies.length === 0 && !isLoading && !isFetching && !isError) {
    return (
      <section className={classNames('container', styles.container)}>
        <NoResultsMessage />
      </section>
    );
  }

  return (
    <section className={classNames('container', styles.container)}>
      <div className={styles.list}>
        {movies?.map((movie) => <MovieCard key={movie?.id} data={movie} />)}
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
