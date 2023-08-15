import { IMovieCard } from '@/shared/api';

export const filterMovies = (movies: IMovieCard[]) =>
  movies?.filter(
    ({ name, rating, poster }) =>
      name !== '' &&
      name !== null &&
      rating !== null &&
      rating !== 0 &&
      poster !== '',
  );
