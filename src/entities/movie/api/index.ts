import { RawMovieItems, IMovieCard, Genres, $api } from '@/shared/api';

import { LIMIT } from '@/shared/lib/consts';

export interface ICategoriesApiProps {
  genre?: Genres | string;
  year?: number | string;
  sort?: string;
  sortField?: string;
  rating?: number | string;
  limit?: number;
  page?: number | string;
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
      transformResponse: (response: RawMovieItems) => {
        const movies: IMovieCard[] = response.docs
          ? response.docs.map((movie) => ({
              name: movie.name,
              img: movie.poster.previewUrl,
              length: movie.movieLength,
              rating: movie.rating.kp ? movie.rating.kp.toFixed(1) : 0,
              year: movie.year,
              genre: movie.genres,
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

export const { useGetMoviesQuery } = categoryApi;
