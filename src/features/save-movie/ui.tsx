import Image from 'next/image';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

import { useGetIdsQuery, usePostIdMutation } from '@/shared/api/firebase/api';
import { Button } from '@/shared/ui/btn-base';

interface ISaveBtnProps {
  id: number;
}

export const SaveBtn: React.FC<ISaveBtnProps> = ({ id }) => {
  const session = useSession();
  const email = session?.data?.user?.email;
  const baseImgUrl = '/icons/common/';

  const [postId] = usePostIdMutation({});
  const { data } = useGetIdsQuery({
    collectionName: 'saved-movies',
    documentId: email ?? '',
  });

  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (data !== undefined) {
      setIsSaved(data?.ids.some((idd) => idd === id));
    }
  }, [id, data]);

  const handleClick = () => {
    if (email) {
      postId({ collectionName: 'saved-movies', documentId: email, id });
    }
  };

  return (
    <Button onClick={handleClick} stylesType="bg">
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
