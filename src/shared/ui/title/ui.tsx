import classNames from 'classnames';
import React, { ElementType } from 'react';

import styles from './styles.module.scss';

interface TitleProps<E extends ElementType = ElementType> {
  size?: 'xs' | 'small' | 'medium' | 'large' | 'xl';
  className?: string;
  as?: E;
  title: string;
  children?: React.ReactNode;
  href?: string;
}

const DEFAULT_ELEMENT: ElementType = 'h1';

export const Title: React.FC<TitleProps> = ({ size = 'medium', className, as, title, children, href }) => {
  const Element = as || DEFAULT_ELEMENT;

  return (
    <Element href={href} className={classNames(styles.title, styles[size], className)}>
      {title}
      {children}
    </Element>
  );
};
