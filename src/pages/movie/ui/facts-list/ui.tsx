import classNames from 'classnames';
import React from 'react';

import { FactItem } from '@/entities/fact/ui/fact-card';
import { IFactInMovie } from '@/shared/api';
import { cleanHtmlFromText } from '@/shared/lib/helpers/clean-html';
import { Button } from '@/shared/ui/btn-base';
import { Title } from '@/shared/ui/title';

import styles from './styles.module.scss';

interface IFactsListProps {
  facts: IFactInMovie[];
}

export const FactsList: React.FC<IFactsListProps> = ({ facts }) => (
  <section>
    <div className={classNames(styles.container, 'container')}>
      <Title title="Знаете ли вы, что..." className={styles.title} />
      <ul className="list-reset">
        {facts.map(({ value }) => (
          <FactItem key={value} text={cleanHtmlFromText(value) ?? ''} />
        ))}
      </ul>
      <Button className={styles.btn}>Показать еще</Button>
    </div>
  </section>
);
