import { MoviesList } from '@/pages/movies/ui/movies-list';
import { MoviesHeader } from './movies-header';

export default function Movies() {
  return (
    <>
      <MoviesHeader />
      <MoviesList />
    </>
  );
}
