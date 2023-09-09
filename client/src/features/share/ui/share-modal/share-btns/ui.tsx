import classNames from 'classnames';
import React from 'react';

import { items } from '@/features/share/config';

import styles from './styles.module.scss';

interface IShareBtnsProps {
  url: string;
}

export const ShareBtns: React.FC<IShareBtnsProps> = ({ url }) => (
  <div className={styles.btns}>
    {items.map(({ icon, text, button }) => {
      const Button = button;

      return (
        <Button
          key={text}
          resetButtonStyle={false}
          url={url}
          className={classNames('btn-reset', styles.btn)}
        >
          {icon}
          {text}
        </Button>
      );
    })}
  </div>
);
