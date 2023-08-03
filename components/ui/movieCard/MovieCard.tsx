import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./movieCard.module.scss";

const MovieCard: React.FC = () => {
  return (
    <div className={styles.item}>
      <Link className={styles.link} href="/home">
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            src="/slide.webp"
            alt="slide"
            layout="fill"
          />
        </div>

        <div className={styles.content}>
          <span className={styles.rating}>6.0</span>
          <h3 className={styles.name}>Чебурашка</h3>
          <div className={styles.info}>
            <span className={styles.year}>2022</span>
            <span className={styles.length}>2 ч 22 мин</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
