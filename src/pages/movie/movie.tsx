import { ActorsList } from './ui/actors-list';
import { FactsList } from './ui/facts-list';
import { SameMoviesList } from './ui/same-movies-list';
import { MovieTabs } from './ui/tabs/ui';

export default function Movie() {
  return (
    <>
      <MovieTabs />
      <SameMoviesList />
      <ActorsList />
      <FactsList />
    </>
  );
}
