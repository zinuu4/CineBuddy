import classNames from 'classnames';
import React from 'react';

import { FactItem } from '@/entities/fact/ui/fact-card';
import { FactInMovie } from '@/shared/api';
import { Button } from '@/shared/ui/btn-base';
import { Title } from '@/shared/ui/title';

import styles from './styles.module.scss';

interface FactsListProps {
  facts: FactInMovie[];
}

export const FactsList: React.FC<FactsListProps> = ({ facts }) => (
  <section>
    <div className={classNames(styles.container, 'container')}>
      <Title title="Знаете ли вы, что..." className={styles.title} />
      <ul className="list-reset">
        {facts.map(({ value }) => (
          <FactItem key={value} text={value} />
        ))}
      </ul>
      <Button className={styles.btn}>Показать еще</Button>
    </div>
  </section>
);
