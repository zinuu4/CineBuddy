import Image from 'next/image';
import Link from 'next/link';

import { IMovieCard } from '@/shared/api';
import { routes } from '@/shared/lib';
import { Rating } from '@/shared/ui';

import styles from './styles.module.scss';

interface SearchItemProps {
  item: Partial<IMovieCard>;
}

export const SearchItem = ({ item }: SearchItemProps) => {
  const { id, name, year, rating, poster } = item;

  return (
    <li className={styles.item}>
      <Link className={styles.link} href={routes.movie(id)}>
        <div className={styles.image}>
          {poster && (
            <Image
              sizes="100%"
              fill
              quality={100}
              alt={item?.name ?? ''}
              src={poster}
            />
          )}
        </div>
        <div className={styles.text}>
          <span className={styles.name}>{name}</span>
          <div className={styles.info}>
            <span className={styles.year}>{year}</span>
            {rating && <Rating size="small" rating={rating} />}
          </div>
        </div>
      </Link>
    </li>
  );
};
