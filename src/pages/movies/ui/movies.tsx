import { MoviesHeader } from './movies-header';
import { MoviesList } from '@/entities/movie/ui/movies-list';

export default function Movies() {
  return (
    <>
      <MoviesHeader />
      <MoviesList />
    </>
  );
}
