import { useSession } from 'next-auth/react';
import React from 'react';

import { SaveBtn } from '@/features/save-movie';
import { usePostMovieMutation } from '@/shared/api/firebase/api';
import { collections } from '@/shared/lib/firebase-collections';
import { Button } from '@/shared/ui/btn-base';

import { getMovieType } from './lib';

import styles from './styles.module.scss';

interface IActionBtnsProps {
  setMoviePlayer: (arg: boolean) => void;
  setYouTubePlayer: (arg: boolean) => void;
  id: number;
  name: string;
  rating: number;
  length: number;
  year: number;
  type: string;
}

export const ActionBtns: React.FC<IActionBtnsProps> = ({
  setMoviePlayer,
  setYouTubePlayer,
  id,
  name,
  rating,
  length,
  year,
  type,
}) => {
  const [postMovie] = usePostMovieMutation();

  const session = useSession();
  const email = session?.data?.user?.email;

  const onWatch = () => {
    setMoviePlayer(true);
    if (email) {
      postMovie({
        collectionName: collections.history,
        documentId: email,
        movie: { name, rating, id, movieLength: length, year },
      });
    }
  };

  return (
    <div className={styles.btns}>
      <Button onClick={onWatch} stylesType="bg" className={styles.btnWatch}>
        <span className={styles.btnWatchText}>
          Смотреть {getMovieType(type)}
        </span>
      </Button>
      <Button
        onClick={() => setYouTubePlayer(true)}
        stylesType="bg"
        className={styles.btnTrailer}
      >
        <span>Трейлер</span>
      </Button>
      <SaveBtn movie={{ name, rating, id, movieLength: length, year }} />
    </div>
  );
};
