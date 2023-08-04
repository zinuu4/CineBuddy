import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

interface ITrailerCardProps {
  url: string;
  title: string;
  rating: number;
  year: number;
  genre: string;
}

export const TrailerCard: React.FC<ITrailerCardProps> = ({
  url,
  title,
  rating,
  year,
  genre,
}) => {
  return (
    <div className={styles.card}>
      <Image
        src={url}
        alt="Image"
        className={styles.img}
        fill
        sizes="width: 100%, height: 30vw"
        priority
      />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.properties}>
          <span className={styles.rating}>{rating.toFixed(1)}</span>
          <span className={styles.year}>{year}</span>
          <span className={styles.genre}>{genre}</span>
        </div>
      </div>
    </div>
  );
};
