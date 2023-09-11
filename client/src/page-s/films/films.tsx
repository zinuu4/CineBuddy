import { MoviesHeader } from '@/widgets/movies-header';
import { MoviesList } from '@/widgets/movies-list';

export default function Films() {
  return (
    <>
      <MoviesHeader title="Фильмы" />
      <MoviesList type="movie" />
    </>
  );
}
