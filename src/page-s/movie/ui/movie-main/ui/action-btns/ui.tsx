import { useSession } from 'next-auth/react';
import React from 'react';

import { SaveBtn } from '@/features/save-movie';
import { usePostIdMutation } from '@/shared/api/firebase/api';
import { collections } from '@/shared/lib/firebase-collections';
import { Button } from '@/shared/ui/btn-base';

import styles from './styles.module.scss';

interface IActionBtnsProps {
  setMoviePlayer: (arg: boolean) => void;
  setYouTubePlayer: (arg: boolean) => void;
  id: number;
  genre: string;
}

export const ActionBtns: React.FC<IActionBtnsProps> = ({
  setMoviePlayer,
  setYouTubePlayer,
  id,
  genre,
}) => {
  const [postId] = usePostIdMutation();

  const session = useSession();
  const email = session?.data?.user?.email;

  const onWatch = () => {
    setMoviePlayer(true);
    if (email) {
      postId({ collectionName: collections.history, documentId: email, id });
    }
  };

  return (
    <div className={styles.btns}>
      <Button onClick={onWatch} stylesType="bg" className={styles.btnWatch}>
        <span className={styles.btnWatchText}>Смотреть {genre}</span>
      </Button>
      <Button
        onClick={() => setYouTubePlayer(true)}
        stylesType="bg"
        className={styles.btnTrailer}
      >
        <span>Трейлер</span>
      </Button>
      <SaveBtn id={id} />
    </div>
  );
};
