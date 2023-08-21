import { MoviesHeader } from '@/widgets/movies-header';
import { MoviesList } from '@/widgets/movies-list';

export default function Series() {
  return (
    <>
      <MoviesHeader title="Сериалы" />
      <MoviesList type="tv-series" />
    </>
  );
}
