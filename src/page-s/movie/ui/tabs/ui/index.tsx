import classNames from 'classnames';
import React from 'react';

import { Tabs as ReactTabs, type TabItem } from '@/shared/ui/tabs/ui';
import { Description } from './description';
import { Images } from './images';

import styles from './styles.module.scss';

interface IMovieTabsProps {
  description: string;
}

export const MovieTabs: React.FC<IMovieTabsProps> = ({ description }) => {
  const tabs: TabItem[] = [
    { label: 'Описание', content: <Description description={description} /> },
    { label: 'Изображения', content: <Images /> },
  ];

  return (
    <section className={classNames('container', styles.root)}>
      <ReactTabs tabs={tabs} />
    </section>
  );
};
