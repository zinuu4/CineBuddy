import classNames from 'classnames';
import React from 'react';

import { Tabs as ReactTabs, type TabItem } from '@/shared/ui/tabs/ui';
import { Description } from './description';
import { Images } from './images';

import styles from './styles.module.scss';

export const MovieTabs = () => {
  const tabs: TabItem[] = [
    { label: 'Описание', content: <Description /> },
    { label: 'Изображения', content: <Images /> },
  ];

  return (
    <section className={classNames('container', styles.root)}>
      <ReactTabs tabs={tabs} />
    </section>
  );
};
