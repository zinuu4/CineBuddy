import Image from "next/image";
import React from "react";
import Link from "next/link";

import styles from "./styles.module.scss";

interface SwiperItemProps {
  title: string;
  img: string;
  href: string;
}

export const CarouselSlide: React.FC<SwiperItemProps> = ({
  title,
  img,
  href,
}) => {
  return (
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
};
