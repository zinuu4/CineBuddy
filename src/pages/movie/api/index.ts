import { $api, IMovie } from '@/shared/api';

export interface ICategoriesApiProps {
  id: number;
}

export const categoryApi = $api.injectEndpoints({
  endpoints: (builder) => ({
    getMovie: builder.query<IMovie, ICategoriesApiProps>({
      query: ({ id }) => ({
        url: `/v1.3/movie/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetMovieQuery } = categoryApi;
