import { $firebaseApi, IBaseFirebaseProps, IMovieCard } from '../common';

import { fetchFirestoreDocument, postMovie } from './lib';

interface IGetDataProps extends IBaseFirebaseProps {}

interface IPostIdProps extends IBaseFirebaseProps {
  movie: Partial<IMovieCard>;
}

// prettier-ignore
export const userMoviesApi = $firebaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMovies: builder.query<{movies: IMovieCard[]} | undefined, IGetDataProps>({
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
    postMovie: builder.mutation<{} | {error: unknown}, IPostIdProps>({
      queryFn({ collectionName, documentId, movie }) {
        try {
          postMovie({ collectionName, documentId, movie });
          return { data: 'ok' };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ['Ids'],
    }),
  }),
});

export const { useGetMoviesQuery, usePostMovieMutation } = userMoviesApi;
