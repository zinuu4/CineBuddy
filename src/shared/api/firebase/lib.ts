import {
  collection,
  getDoc,
  setDoc,
  doc,
  arrayUnion,
  updateDoc,
} from 'firebase/firestore';
import { db } from '@/shared/configs';

import { IBaseFirebaseProps } from '..';

export const fetchFirestoreDocument = async ({
  collectionName,
  documentId, // @ts-expect-error
}: IBaseFirebaseProps): { ids: number[] } | undefined => {
  const docRef = doc(collection(db, collectionName), documentId);
  const docSnapshot = await getDoc(docRef);

  return docSnapshot.exists()
    ? (docSnapshot.data() as { ids: number[] } | undefined)
    : undefined;
};

interface IPostIdProps extends IBaseFirebaseProps {
  id: number;
}

export const postId = async ({
  collectionName,
  documentId,
  id,
}: IPostIdProps) => {
  const movieDocRef = doc(db, collectionName, documentId);

  const docSnapshot = await getDoc(movieDocRef);

  if (docSnapshot.exists()) {
    const docData = docSnapshot.data();

    if (docData && docData.ids && Array.isArray(docData.ids)) {
      if (docData.ids.includes(id)) {
        const updatedIds = docData.ids.filter(
          (existingId) => existingId !== id,
        );

        await updateDoc(movieDocRef, {
          ids: updatedIds,
        });
      } else {
        await updateDoc(movieDocRef, {
          ids: arrayUnion(id),
        });
      }
    }
  } else {
    await setDoc(movieDocRef, {
      ids: [id],
    });
  }
};
