import { $trailerApi } from '@/shared/api';

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

export const { useGetTrailersQuery } = trailerApi;
