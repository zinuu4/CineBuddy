import { $api, IPerson } from '@/shared/api';

export interface ICategoriesApiProps {
  id: number;
}

export const personApi = $api.injectEndpoints({
  endpoints: (builder) => ({
    getPerson: builder.query<IPerson, ICategoriesApiProps>({
      query: ({ id }) => ({
        url: `/v1/person/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetPersonQuery } = personApi;
