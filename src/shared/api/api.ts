import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const $api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ 
    baseUrl: process.env.BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('X-API-KEY', process.env.API_KEY ?? '')

      return headers;
    }
  }),
  endpoints: () => ({})
})
