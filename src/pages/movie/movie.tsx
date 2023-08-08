'use client';

import { useGetMovieQuery } from './api';
import { FactsList } from './ui/facts-list';
import { MovieMain } from './ui/movie-main';
import { PersonsList } from './ui/persons-list';
import { SameMoviesList } from './ui/same-movies-list';
import { MovieTabs } from './ui/tabs/ui';

export default function Movie() {
  const { data } = useGetMovieQuery({ id: 430 });

  return (
    <>
      <MovieMain />
      <MovieTabs />
      <SameMoviesList />
      <PersonsList />
      {data?.facts && <FactsList facts={data.facts} />}
    </>
  );
}
