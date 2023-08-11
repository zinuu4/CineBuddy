'use client';

import React from 'react';

import { CategoriesListItem } from '../../categories-list-item';
import { categories } from '../config';

import styles from './styles.module.scss';

export const CategoriesList: React.FC = () => (
  <div className={styles.list}>
    {categories.map(({ title, queryName, queryValue, params }) => (
      <CategoriesListItem
        key={title}
        params={params}
        title={title}
        queryName={queryName}
        queryValue={queryValue}
      />
    ))}
  </div>
);
