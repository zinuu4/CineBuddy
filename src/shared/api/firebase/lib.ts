import {
  collection,
  getDoc,
  doc,
  arrayUnion,
  updateDoc,
} from 'firebase/firestore';
import { db } from '@/shared/configs';

export const fetchFirestoreDocument = async (
  collectionName: string,
  documentId: string,
) => {
  const docRef = doc(collection(db, collectionName), documentId);
  const docSnapshot = await getDoc(docRef);

  const data = {
    id: docSnapshot.id,
    ...docSnapshot.data(),
  };

  return data;
};

export const postId = async (
  collectionName: string,
  documentId: string,
  id: number,
) => {
  const movieDocRef = doc(db, collectionName, documentId);

  await updateDoc(movieDocRef, {
    ids: arrayUnion(id),
  });
};
