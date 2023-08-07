import { RawMovieItems, IMovieCard, Genres, $api } from '@/shared/api';

import { LIMIT } from '@/shared/lib/consts';

export interface CategoriesApiProps {
  genre?: Genres | string;
  year?: number | string;
  sort?: string;
  sortField?: string;
  rating?: number | string;
  limit?: number;
  page?: number | string;
  type?: string;
}

export const categoryApi = $api.injectEndpoints({
  endpoints: (builder) => ({
    getMovies: builder.query<IMovieCard[], CategoriesApiProps>({
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
        console.log(response);
        const movies: IMovieCard[] = response.docs.map((movie) => ({
          name: movie.name,
          img: movie.poster.previewUrl,
          length: movie.movieLength,
          rating: movie.rating.kp.toFixed(1),
          year: movie.year,
          genre: movie.genres,
        }));

        return movies;
      },
    }),
  }),
});

export const { useGetMoviesQuery } = categoryApi;
