import { $api, IMovieCard, ISearchMovie } from '@/shared/api';

interface ISearchApiProps {
  limit: number;
  query: string;
}

interface ISearchRespons {
  docs: ISearchMovie[];
  limit: number;
  page: number;
  pages: number;
  total: number;
}

export const searchApi = $api.injectEndpoints({
  endpoints: (builder) => ({
    getSearchMovies: builder.query<IMovieCard[], ISearchApiProps>({
      query: ({ limit, query }) =>
        `/v1.2/movie/search?page=1&limit=${limit}&query=${query}`,
      transformResponse: (response: ISearchRespons) => {
        const movies: IMovieCard[] = response.docs
          ? response.docs.map((movie) => ({
              name: movie.name,
              rating: movie.rating,
              year: movie.year,
              id: movie.id,
              poster: movie.poster,
            }))
          : [];

        return movies;
      },
    }),
  }),
});

export const { useGetSearchMoviesQuery } = searchApi;
