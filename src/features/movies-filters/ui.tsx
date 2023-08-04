"use client";

import React, { useState } from "react";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import classNames from 'classnames';
import { VscSettings, VscClose } from 'react-icons/vsc';

import { Select } from '@/shared/ui/select';
import { Button } from '@/shared/ui/button';
import { createQueryString } from '@/shared/lib/helpers/createQuery';

import { MoviesDrawer } from './movies-drawer';

import styles from './styles.module.scss';

export const genreOptions = [
  {
    label: 'Все',
    value: '',
  },
  {
    label: 'Триллер',
    value: 'thriller',
  },
  {
    label: 'Ужасы',
    value: 'horror',
  },
  {
    label: 'Приключения',
    value: 'adventure',
  },
  {
    label: 'Боевики',
    value: 'action',
  },
  {
    label: 'Фантастика',
    value: 'fantasy',
  },
  {
    label: 'Научная Фантастика',
    value: 'sci-fi',
  },
  {
    label: 'Комедии',
    value: 'comedy',
  },
  {
    label: 'Драмы',
    value: 'drama',
  },
  {
    label: 'Мелодрамы',
    value: 'melodrama',
  },
]

export const ratingOptions = [
  {
    label: 'Любой рейтинг',
    value: '',
  },
  {
    label: 'Больше 9',
    value: 'nine',
  },
  {
    label: 'Больше 8',
    value: 'eight',
  },
  {
    label: 'Больше 7',
    value: 'seven',
  },
  {
    label: 'Больше 6',
    value: 'six',
  },
  {
    label: 'Больше 5',
    value: 'five',
  },
]

export const releaseOptions = [
  {
    label: 'Все годы',
    value: '',
  },
  {
    label: '2022-2023',
    value: '2022-2023',
  },
  {
    label: '2020-2021',
    value: '2020-2021',
  },
  {
    label: '2014-2019',
    value: '2014-2019',
  },
  {
    label: '2010-2014',
    value: '2010-2014',
  },
  {
    label: '2000-2009',
    value: '2000-2009',
  },
  {
    label: '1990-1999',
    value: '1990-1999',
  },
  {
    label: '1980-1989',
    value: '1980-1989',
  },
]

export const sortOptions = [
  {
    label: 'Рекоммендуемые',
    value: ''
  },
  {
    label: 'По рейтингу',
    value: 'by rate'
  },
  {
    label: 'По дате выхода',
    value: 'by release'
  },
]

const initialFilter = {
  genre: '',
  rate: '',
  release: '',
  sort: '',
}

type FilterType = 'rate' | 'genre' | 'release' | 'sort';

interface IFilters {
  label: string
  name: FilterType
  options: {
    label: string
    value: string
  }[]
}

const filters: IFilters[] = [
  { label: 'Жанры', name: 'genre', options: genreOptions },
  { label: 'Рейтинг', name: 'rate', options: ratingOptions },
  { label: 'Годы выхода', name: 'release', options: releaseOptions },
]

const sortFilter: IFilters = { label: 'Сортировка', name: 'sort', options: sortOptions }

export const MoviesFilters: React.FC = () => {
  const [filter, setFilter] = useState(initialFilter);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const onChange = (value: string, name: FilterType) => {
    setFilter({
      ...filter, 
      [name]: value
    });

    if (searchParams) {
      router.push(pathname + '?' + createQueryString(name, value, searchParams))
    }
  }

  return (
    <section className={classNames(styles.root, isOpen && styles.open)}>
      <button onClick={() => setIsOpen(true)} className={styles.filtersBtn}>
        <VscSettings size={22} />
      </button>
      <div className={styles.drawersContainer}>
        <button onClick={() => setIsOpen(false)} className={styles.closeBtn}>
          <VscClose size={17} />
        </button>
        <h3 className={styles.filtersHero}>Фильтры</h3>
        <div className={styles.col}>
          {[...filters, sortFilter].map((filterCategory) => (
            <MoviesDrawer 
              key={filterCategory.name} 
              filter={filterCategory} 
              value={filter[filterCategory.name]} 
              onChange={(value: string) => onChange(value, filterCategory.name)}
            />
          ))}
        </div>
        <Button className={styles.resultsBtn}>
          Показать результаты
        </Button>
      </div>
      <div className={styles.options}>
        <div className={styles.container}>
          <div className={styles.row}>
            {filters.map(({ name, ...rest }) => (
              <Select<FilterType>
                key={name}
                name={name}
                value={filter[name]}
                onChange={onChange}
                size="xl"
                {...rest}
              />
            ))}
          </div>
          <Select<FilterType>
            name="sort"
            value={filter.sort}
            label="Рекомендуемые"
            onChange={onChange}
            options={sortFilter.options}
            position="bottom-right"
            size="xl"
          />
        </div>
      </div>
    </section>
  );
};
