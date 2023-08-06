import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITrailer } from './trailer.types';

export const trailerApi = createApi({
  reducerPath: 'api/trailers',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
  endpoints: (builder) => ({
    getTrailers: builder.query<ITrailer[], number>({ query: (limit) => `trailers?limit=${limit}` }),
  }),
});

export const { useGetTrailersQuery } = trailerApi;
