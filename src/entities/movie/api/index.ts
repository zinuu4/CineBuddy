import {
  IRawMovieItems,
  IMovieCard,
  Genres,
  $api,
  $trailerApi,
} from '@/shared/api';

import { LIMIT } from '@/shared/consts';

export interface ICategoriesApiProps {
  genre?: Genres | string;
  year?: number | string;
  sort?: string;
  sortField?: string;
  rating?: number | string;
  limit?: number;
  type?: string;
}

interface IReturnValues {
  movies: IMovieCard[];
  total: number;
}

export const categoryApi = $api.injectEndpoints({
  endpoints: (builder) => ({
    getMovies: builder.query<IReturnValues, ICategoriesApiProps>({
      query: ({
        type,
        genre,
        limit,
        rating = '1-10',
        sort,
        sortField,
        year,
      }) => ({
        url: '/v1.3/movie',
        method: 'GET',
        params: {
          type,
          'genres.name': genre,
          'poster.previewUrl': '!null',
          name: '!null',
          year,
          'rating.kp': rating,
          sortField: sortField ?? 'votes.kp',
          sortType: sort ?? '-1',
          limit: limit ?? LIMIT,
        },
      }),
      transformResponse: (response: IRawMovieItems) => {
        const movies: IMovieCard[] = response.docs
          ? response.docs.map((movie) => ({
              name: movie.name,
              movieLength: movie.movieLength,
              rating: movie.rating.kp ? movie.rating.kp : 0,
              year: movie.year,
              genre: movie.genres,
              id: movie.id,
            }))
          : [];

        return {
          movies,
          total: response.total,
        };
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
