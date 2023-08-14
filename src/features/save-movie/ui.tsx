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

  const { data } = useGetIdsQuery({
    collectionName: 'saved-movies',
    documentId: email ?? '',
  });
  const [postId, { isLoading }] = usePostIdMutation({});

  const [isSaved, setIsSaved] = useState(false);

  const handleSaveToggle = () => {
    if (email) {
      postId({ collectionName: 'saved-movies', documentId: email, id });
    }
  };

  useEffect(() => {
    if (data !== undefined && data?.ids) {
      setIsSaved(data.ids.some((idd) => idd === id));
    }
  }, [id, data?.ids]);

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
