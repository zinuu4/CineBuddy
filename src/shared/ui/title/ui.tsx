import classNames from 'classnames';
import Image from 'next/image';
import React, { ElementType } from 'react';

import styles from './styles.module.scss';

interface TitleProps<E extends ElementType = ElementType> {
  size?: 'xs' | 'small' | 'medium' | 'large' | 'xl';
  className?: string;
  as?: E;
  title: string;
  children?: React.ReactNode;
  href?: string;
  chevron?: boolean;
  onClick?: () => void;
}

const DEFAULT_ELEMENT: ElementType = 'h1';

export const Title: React.FC<TitleProps> = ({
  size = 'medium',
  className,
  as,
  title,
  children,
  href,
  chevron,
  onClick,
}) => {
  const Element = as || DEFAULT_ELEMENT;

  return (
    <Element
      href={href}
      onClick={onClick}
      className={classNames(
        styles.title,
        chevron ? styles.chevron : '',
        styles[size],
        className,
      )}
    >
      {title}
      {children}
      {chevron && (
        <span className={styles.iconWrapper}>
          <Image
            className={styles.icon}
            src="/icons/common/chevron.svg"
            alt={title}
            width={15}
            height={15}
          />
        </span>
      )}
    </Element>
  );
};
