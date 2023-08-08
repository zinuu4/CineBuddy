'use client';

import { useGetMovieQuery } from './api';
import { ActorsList } from './ui/actors-list';
import { FactsList } from './ui/facts-list';
import { MovieMain } from './ui/movie-main';
import { SameMoviesList } from './ui/same-movies-list';
import { MovieTabs } from './ui/tabs/ui';

export default function Movie() {
  const { data } = useGetMovieQuery({ id: 430 });

  return (
    <>
      <MovieMain />
      <MovieTabs />
      <SameMoviesList />
      <ActorsList />
      {data?.facts && <FactsList facts={data.facts} />}
    </>
  );
}
