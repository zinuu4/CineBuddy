'use client';

import { useGetMovieQuery } from './api';
import { FactsList } from './ui/facts-list';
import { MovieMain } from './ui/movie-main';
import { PersonsList } from './ui/persons-list';
import { SimilarMoviesList } from './ui/similar-movies';
import { MovieTabs } from './ui/tabs/ui';

export default function Movie() {
  const { data } = useGetMovieQuery({ id: 430 });

  return (
    <>
      <MovieMain />
      <MovieTabs />
      {data?.similarMovies && <SimilarMoviesList movies={data.similarMovies} />}
      <PersonsList />
      {data?.facts && <FactsList facts={data.facts} />}
    </>
  );
}
