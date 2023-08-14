import { $firebaseApi, IBaseFirebaseProps } from '../common';

import { fetchFirestoreDocument, postId } from './lib';

interface IGetDataProps extends IBaseFirebaseProps {}

interface IPostIdProps extends IBaseFirebaseProps {
  id: number;
}

// prettier-ignore
export const userMoviesApi = $firebaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getIds: builder.query<{ids: number[]} | undefined, IGetDataProps>({
      queryFn({ collectionName, documentId }) {
        try {
          const data = fetchFirestoreDocument({ collectionName, documentId });
          return { data };
        } catch {
          throw new Error('Error while getting doc');
        }
      },
      providesTags: ['Ids'],
    }),
    postId: builder.mutation<{} | {error: unknown}, IPostIdProps>({
      queryFn({ collectionName, documentId, id }) {
        try {
          postId({ collectionName, documentId, id });
          return { data: 'ok' };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ['Ids'],
    }),
  }),
});

export const { useGetIdsQuery, usePostIdMutation } = userMoviesApi;
