import {
  createApi,
  fakeBaseQuery,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

export const $api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('X-API-KEY', process.env.API_KEY ?? '');

      return headers;
    },
  }),
  endpoints: () => ({}),
});

export const $nextApi = createApi({
  reducerPath: 'api/next',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://cine-buddy.vercel.app/api/' }),
  endpoints: () => ({}),
});

export const $firebaseApi = createApi({
  reducerPath: 'api/firebase',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Ids'],
  endpoints: () => ({}),
});
