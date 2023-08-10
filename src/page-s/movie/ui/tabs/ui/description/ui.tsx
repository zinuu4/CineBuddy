'use client';

import classNames from 'classnames';
import React, { useState } from 'react';

import styles from './styles.module.scss';

const MAX_WORDS = 30;

interface IDescriptionProps {
  description: string;
}

export const Description: React.FC<IDescriptionProps> = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const words = description?.split(' ');
  const shortText = words?.slice(0, MAX_WORDS).join(' ');

  return (
    <p className={styles.descr}>
      {isExpanded ? description : shortText}
      {words?.length > MAX_WORDS && (
        <button
          className={classNames('btn-reset', styles.btn)}
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          {isExpanded ? 'Свернуть описание' : 'Подробное описание'}
        </button>
      )}
    </p>
  );
};
