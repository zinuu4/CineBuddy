import { $nextApi } from '@/shared/api';

export interface ITrailer {
  imgUrl: string;
  videoUrl: string;
  title: string;
  rating: number;
  year: number;
  genre: string;
}

export const trailerApi = $nextApi.injectEndpoints({
  endpoints: (builder) => ({
    getTrailers: builder.query<ITrailer[], number>({
      query: (limit) => `trailers?limit=${limit}`,
    }),
  }),
});

export const { useGetTrailersQuery } = trailerApi;
