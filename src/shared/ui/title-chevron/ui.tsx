import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './styles.module.scss';

interface TitleWithChevronProps {
  title: string;
}

export const TitleChevron: React.FC<TitleWithChevronProps> = ({ title }) => (
  <Link className={classNames(styles.title, 'title', 'title-medium')} href="">
    {title}
    <span className={styles.iconWrapper}>
      <Image className={styles.icon} src="/chevron.svg" alt={title} width={15} height={15} />
    </span>
  </Link>
);
