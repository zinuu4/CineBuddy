import { DocumentData } from 'firebase/firestore';
import { $firebaseApi, IBaseFirebaseProps } from '../common';

import { fetchFirestoreDocument, postId } from './lib';

interface IGetDataProps extends IBaseFirebaseProps {}

interface IPostIdProps extends IBaseFirebaseProps {
  id: number;
}

// prettier-ignore
export const userMoviesApi = $firebaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDataByDoc: builder.query<DocumentData | {error: unknown}, IGetDataProps>({
      queryFn({ collection, document }) {
        try {
          const data = fetchFirestoreDocument(collection, document);
          return { data };
        } catch (error) {
          return { error };
        }
      },
    }),
    postId: builder.mutation<{} | {error: unknown}, IPostIdProps>({
      queryFn({ collection, document, id }) {
        try {
          postId(collection, document, id);
          return { data: 'ok' };
        } catch (error) {
          return { error };
        }
      },
    }),
  }),
});

export const { useGetDataByDocQuery, usePostIdMutation } = userMoviesApi;
