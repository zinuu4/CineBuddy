import {
  RawMovieItems,
  IMovieCard,
  Genres,
  $api,
  $trailerApi,
} from '@/shared/api';

import { LIMIT } from '@/shared/lib/consts';

export interface CategoriesApiProps {
  genre?: Genres;
  year?: number;
  sort?: string;
  sortField?: string;
  limit?: number;
}

export const categoryApi = $api.injectEndpoints({
  endpoints: (builder) => ({
    getMovies: builder.query<IMovieCard[], CategoriesApiProps>({
      query: ({ genre, limit, sort, sortField, year }) => ({
        url: '/v1.3/movie',
        method: 'GET',
        params: {
          'genres.name': genre,
          'poster.previewUrl': '!null',
          name: '!null',
          year,
          sortField: sortField ?? 'votes.imdb',
          sortType: sort ?? '-1',
          limit: limit ?? LIMIT,
        },
      }),
      transformResponse: (response: RawMovieItems) => {
        const movies: IMovieCard[] = response.docs.map((movie) => ({
          name: movie.name,
          img: movie.poster.previewUrl,
          length: movie.movieLength,
          rating: movie.rating.imdb,
          year: movie.year,
        }));

        return movies;
      },
    }),
  }),
});

export interface ITrailer {
  imgUrl: string;
  videoUrl: string;
  title: string;
  rating: number;
  year: number;
  genre: string;
}

export const trailerApi = $trailerApi.injectEndpoints({
  endpoints: (builder) => ({
    getTrailers: builder.query<ITrailer[], number>({
      query: (limit) => `trailers?limit=${limit}`,
    }),
  }),
});

export const { useGetMoviesQuery } = categoryApi;
export const { useGetTrailersQuery } = trailerApi;
