import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './styles.module.scss';

interface SwiperItemProps {
  title: string;
  img: string;
  href: string;
}

export const CarouselSlide: React.FC<SwiperItemProps> = ({
  title,
  img,
  href,
}) => (
  <div className={styles.item}>
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
