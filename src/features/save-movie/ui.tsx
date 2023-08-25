import classNames from 'classnames';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { IMovieCard } from '@/shared/api';
import {
  useGetMoviesQuery,
  usePostMovieMutation,
} from '@/shared/api/firebase/api';
import { collections } from '@/shared/lib/firebase-collections';
import { Button } from '@/shared/ui/btn-base';
import { Icon } from '@/shared/ui/icon';

import styles from './styles.module.scss';

interface ISaveBtnProps {
  movie: Partial<IMovieCard>;
  wrapperClassName?: string;
  label?: boolean;
  round?: boolean;
}

export const SaveBtn: React.FC<ISaveBtnProps> = ({
  movie,
  wrapperClassName,
  label,
  round,
}) => {
  const session = useSession();
  const email = session?.data?.user?.email;

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
    } else {
      toast.error('Войдите или зарегистрируйтесь, чтобы сохранить', {
        theme: 'dark',
        autoClose: 5000,
        position: 'top-right',
      });
    }
  };

  useEffect(() => {
    if (data !== undefined && data?.movies) {
      setIsSaved(data?.movies.some((moviee) => moviee.id === movie.id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.movies]);

  return (
    <div className={classNames(label && styles.wrapper, wrapperClassName)}>
      <Button
        className={round ? styles.round : ''}
        disabled={isLoading}
        onClick={handleSaveToggle}
        stylesType="bg"
      >
        <Icon
          type="common"
          name="bookmark"
          className={classNames(styles.icon, isSaved && styles.fill)}
        />
      </Button>
      {label && (
        <span className={styles.label}>
          {isSaved ? 'Запомнен' : 'Запомнить'}
        </span>
      )}
    </div>
  );
};
