import { MoviesHeader } from '@/widgets/movies-header';
import { MoviesList } from '@/widgets/movies-list';

export default function Cartoons() {
  return (
    <>
      <MoviesHeader title="Мультфильмы" />
      <MoviesList type="cartoon" />
    </>
  );
}
