import {
  collection,
  getDoc,
  setDoc,
  doc,
  arrayUnion,
  updateDoc,
} from 'firebase/firestore';
import { db } from '@/shared/configs';

import { IMovieCard, IBaseFirebaseProps } from '..';

export const fetchFirestoreDocument = async ({
  collectionName,
  documentId, // @ts-expect-error
}: IBaseFirebaseProps): { movies: IMovieCard[] } | undefined => {
  const docRef = doc(collection(db, collectionName), documentId);
  const docSnapshot = await getDoc(docRef);

  return docSnapshot.exists()
    ? (docSnapshot.data() as { movies: IMovieCard[] } | undefined)
    : undefined;
};

interface IPostIdProps extends IBaseFirebaseProps {
  movie: Partial<IMovieCard>;
}

export const postMovie = async ({
  collectionName,
  documentId,
  movie,
}: IPostIdProps) => {
  const movieDocRef = doc(db, collectionName, documentId);

  const docSnapshot = await getDoc(movieDocRef);

  if (docSnapshot.exists()) {
    const docData = docSnapshot.data();

    if (docData && docData.movies && Array.isArray(docData.movies)) {
      const updatedMovies = docData.movies.filter(
        (moviee) => moviee.id !== movie.id,
      );

      if (docData.movies.length === updatedMovies.length) {
        await updateDoc(movieDocRef, {
          movies: arrayUnion(movie),
        });
      } else {
        await updateDoc(movieDocRef, {
          movies: updatedMovies,
        });
      }
    }
  } else {
    await setDoc(movieDocRef, {
      movies: [movie],
    });
  }
};
