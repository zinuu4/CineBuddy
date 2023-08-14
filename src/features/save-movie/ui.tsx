import Image from 'next/image';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

import { IMovieCard } from '@/shared/api';
import {
  useGetMoviesQuery,
  usePostMovieMutation,
} from '@/shared/api/firebase/api';
import { collections } from '@/shared/lib/firebase-collections';
import { Button } from '@/shared/ui/btn-base';

interface ISaveBtnProps {
  movie: Partial<IMovieCard>;
}

export const SaveBtn: React.FC<ISaveBtnProps> = ({ movie }) => {
  const session = useSession();
  const email = session?.data?.user?.email;
  const baseImgUrl = '/icons/common/';

  const { data } = useGetMoviesQuery({
    collectionName: collections.saved,
    documentId: email ?? 'no-email',
  });
  const [postMovie, { isLoading }] = usePostMovieMutation({});

  const [isSaved, setIsSaved] = useState(false);

  const handleSaveToggle = () => {
    if (email) {
      postMovie({
        collectionName: collections.saved,
        documentId: email,
        movie,
      });
    }
  };

  useEffect(() => {
    if (data !== undefined && data?.movies) {
      setIsSaved(data?.movies.some((moviee) => moviee.id === movie.id));
    }
  }, [data?.movies]);

  return (
    <Button disabled={isLoading} onClick={handleSaveToggle} stylesType="bg">
      <Image
        src={
          isSaved
            ? `${baseImgUrl}fill-bookmark.svg`
            : `${baseImgUrl}bookmark.svg`
        }
        alt="Add to favorites"
        width={22}
        height={22}
      />
    </Button>
  );
};
