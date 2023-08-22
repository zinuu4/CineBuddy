import classNames from 'classnames';
import React, { useState } from 'react';
import ReactHtmlParser from 'react-html-parser';

import { FactItem } from '@/entities/fact/ui/fact-card';
import { IFact } from '@/shared/api';
import { Button } from '@/shared/ui/btn-base';
import { Title } from '@/shared/ui/title';

import styles from './styles.module.scss';

interface IFactsListProps {
  facts: IFact[];
}

export const FactsList: React.FC<IFactsListProps> = ({ facts }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const croppedFacts = facts.slice(0, 5);

  const selectedFacts = isExpanded ? facts : croppedFacts;

  return (
    <section>
      <div className={classNames(styles.container, 'container')}>
        <Title title="Знаете ли вы, что..." className={styles.title} />
        <ul className="list-reset">
          {selectedFacts.map(({ value }) => (
            <FactItem key={value} text={ReactHtmlParser(value) ?? ''} />
          ))}
        </ul>
        {facts.length > 5 && (
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            className={styles.btn}
          >
            {isExpanded ? 'Скрыть' : 'Показать еще'}
          </Button>
        )}
      </div>
    </section>
  );
};
