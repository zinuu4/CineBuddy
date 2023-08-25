import classNames from 'classnames';
import React from 'react';

import { PersonsSlider } from '@/widgets/persons-slider';
import { IPersonInMovie } from '@/shared/api';
import { Title } from '@/shared/ui';

import styles from './styles.module.scss';

interface IPersonsListProps {
  persons: IPersonInMovie[];
}

export const PersonsList: React.FC<IPersonsListProps> = ({ persons }) => (
  <section>
    <div className={classNames(styles.container, 'container')}>
      <Title title="Актеры и создатели" className={styles.title} />
      <PersonsSlider data={persons} />
    </div>
  </section>
);
