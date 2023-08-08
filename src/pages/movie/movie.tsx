import { ActorsList } from './ui/actors-list';
import { FactsList } from './ui/facts-list';
import { MovieMain } from './ui/movie-main';
import { SameMoviesList } from './ui/same-movies-list';
import { MovieTabs } from './ui/tabs/ui';

export default function Movie() {
  return (
    <>
      <MovieMain />
      <MovieTabs />
      <SameMoviesList />
      <ActorsList />
      <FactsList />
    </>
  );
}
