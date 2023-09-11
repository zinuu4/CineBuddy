import classNames from 'classnames';
import { useSession } from 'next-auth/react';
import React from 'react';

import { SaveBtn } from '@/features/save-movie';
import { ShareBtn } from '@/features/share';
import { usePostMovieMutation } from '@/shared/api/firebase/api';
import { collections } from '@/shared/lib';
import { Button } from '@/shared/ui';

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
      <Button
        onClick={onWatch}
        stylesType="bg"
        className={classNames(styles.btnWatch, styles.btn)}
      >
        <span className={styles.btnWatchText}>
          Смотреть {getMovieType(type)}
        </span>
      </Button>
      <Button
        onClick={() => setYouTubePlayer(true)}
        stylesType="bg"
        className={classNames(styles.btnTrailer, styles.btn)}
      >
        <span>Трейлер</span>
      </Button>
      <SaveBtn
        wrapperClassName={styles.btn}
        movie={{ name, rating, id, movieLength: length, year }}
      />
      <ShareBtn className={styles.btn} />
    </div>
  );
};
