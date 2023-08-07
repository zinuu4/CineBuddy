'use client';

import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { toast } from 'react-toastify';
import { genreOptions } from '@/features/movies-filters';
import { useGetMoviesQuery } from '@/entities/movie/api';
import { MovieCard } from '@/entities/movie/ui/movie-card';
import { LoadMoreBtn } from '@/shared/ui/load-more-btn';
import { Loader } from '@/shared/ui/loader';

import styles from './styles.module.scss';

export const MoviesList: React.FC = () => {
  const searchParams = useSearchParams();

  const [limit, setLimit] = useState(30);

  const genre = searchParams?.get('genre');
  const year = searchParams?.get('release');
  const rating = searchParams?.get('rate');
  const sort = searchParams?.get('sort');

  const selectedGenre = genreOptions.find((option) => option.value === genre);

  const {
    data: films,
    isLoading,
    isFetching,
    isError,
  } = useGetMoviesQuery({
    type: 'movie',
    ...(selectedGenre?.value !== '' && { genre: selectedGenre?.value }),
    ...(selectedGenre === null && { genre: '' }),
    limit,
    ...(year && { year }),
    ...(sort && { sortField: sort }),
    ...(rating && { rating }),
  });

  const handleLoadMore = () => {
    setLimit((prevLimit) => prevLimit + 30);
  };

  const onScroll = () => {
    const offset = window.innerHeight + window.pageYOffset;
    // prettier-ignore
    if (
      offset >= document.body.offsetHeight - 1 && !(isLoading || isError || isFetching)
    ) {
      handleLoadMore();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [isLoading, isError, isFetching]);

  const notify = () =>
    toast('Something went wrong. Network error', {
      theme: 'dark',
      autoClose: 5000,
      position: 'top-right',
    });

  useEffect(() => {
    if (isError) notify();
  }, [isError]);

  return (
    <section className="container">
      <div className={styles.list}>
        {films?.map((film) => (
          <div className={styles.card} key={film.img}>
            <MovieCard data={film} />
          </div>
        ))}
      </div>
      {isFetching || isLoading ? <Loader /> : null}
      <LoadMoreBtn
        isLoading={isLoading || isFetching}
        isError={isError}
        onClick={handleLoadMore}
        disabled={isFetching || isLoading || isError}
      />
    </section>
  );
};
