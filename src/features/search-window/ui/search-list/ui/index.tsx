import classNames from 'classnames';
// import { Loader } from '@/shared/ui/loader';
import { Title } from '@/shared/ui/title';
import { SearchItem } from './search-item';

import styles from './styles.module.scss';

const data = [
  {
    poster: {
      previewUrl: '/slide.webp',
    },
    id: 41943,
    name: 'Чебурашка',
    year: 2022,
    rating: 9.1,
    length: '2 ч 22 мин',
  },
  {
    poster: {
      previewUrl: '/slide.webp',
    },
    id: 419432,
    name: 'Чебурашка1',
    year: 2022,
    rating: 9.1,
    length: '2 ч 22 мин',
  },
  {
    poster: {
      previewUrl: '/slide.webp',
    },
    id: 41941,
    name: 'Чебурашка2',
    year: 2022,
    rating: 9.1,
    length: '2 ч 22 мин',
  },
  {
    poster: {
      previewUrl: '/slide.webp',
    },
    id: 41940,
    name: 'Чебурашка3',
    year: 2022,
    rating: 9.1,
    length: '2 ч 22 мин',
  },
  {
    poster: {
      previewUrl: '/slide.webp',
    },
    id: 41946,
    name: 'Чебурашка4',
    year: 2022,
    rating: 9.1,
    length: '2 ч 22 мин',
  },
  {
    poster: {
      previewUrl: '/slide.webp',
    },
    id: 41948,
    name: 'Чебурашка5',
    year: 2022,
    rating: 9.1,
    length: '2 ч 22 мин',
  },
  {
    poster: {
      previewUrl: '/slide.webp',
    },
    id: 4194300,
    name: 'Чебурашка6',
    year: 2022,
    rating: 9.1,
    length: '2 ч 22 мин',
  },
];

export const SearchList = () => {
  const NoResultsMessage = (
    <>
      <Title className={styles.title} size="small" title="Ничего не нашлось" />
      <p className={styles.desc}>
        Может быть, вы ищете то, чего пока нет в каталоге
      </p>
    </>
  );

  // if (!pending && !data?.docs.length) return NoResultsMessage;

  const SearchList = (
    <ul className={classNames('list-reset', styles.list)}>
      {data.map((item) => (
        <SearchItem key={item.id} item={item} />
      ))}
    </ul>
  );

  // const Loader = (
  //   <div className={styles.loader}>
  //     <Loader />
  //   </div>
  // );

  // return pending ? Loader : SearchList;
  return SearchList || NoResultsMessage;
};
