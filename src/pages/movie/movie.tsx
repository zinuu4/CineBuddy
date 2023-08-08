'use client';

import { useGetMovieQuery } from './api';
import { FactsList } from './ui/facts-list';
import { MovieMain } from './ui/movie-main';
import { PersonsList } from './ui/persons-list';
import { SimilarMoviesList } from './ui/similar-movies';
import { MovieTabs } from './ui/tabs/ui';

export default function Movie() {
  const { data } = useGetMovieQuery({ id: 430 });
  console.log(data);

  return (
    <>
      <MovieMain />
      {data?.description && <MovieTabs description={data.description} />}
      {data?.similarMovies && <SimilarMoviesList movies={data.similarMovies} />}
      {data?.persons && <PersonsList persons={data.persons} />}
      {data?.facts && <FactsList facts={data.facts} />}
    </>
  );
}
