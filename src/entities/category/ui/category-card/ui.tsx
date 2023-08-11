import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './styles.module.scss';

interface SwiperItemProps {
  data: {
    title: string;
    img: string;
    href: string;
    name: string;
    value: string;
  };
  onClick: (name: string, value: string) => void;
}

export const CategoryCard: React.FC<SwiperItemProps> = ({ data, onClick }) => {
  const { title, img, href, name, value } = data;
  return (
    <div onClick={() => onClick(name, value)} className={styles.item}>
      <Link className={styles.link} href={href}>
        <Image
          className={styles.icon}
          src={img}
          alt={title}
          width={23}
          height={23}
        />
        <span className={styles.title}>{title}</span>
      </Link>
    </div>
  );
};
