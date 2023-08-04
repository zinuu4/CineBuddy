import React from "react";

import { MovieCard } from '../movie-card';

import styles from "./styles.module.scss";

const films = [
  {
    img: "/slide.webp",
    name: "Чебурашка",
    year: 2022,
    rating: 9.1,
    length: "2 ч 22 мин",
  },
  {
    img: "/slide.webp",
    name: "Чебурашка1",
    year: 2022,
    rating: 9.1,
    length: "2 ч 22 мин",
  },
  {
    img: "/slide.webp",
    name: "Чебурашка2",
    year: 2022,
    rating: 9.1,
    length: "2 ч 22 мин",
  },
  {
    img: "/slide.webp",
    name: "Чебурашка3",
    year: 2022,
    rating: 9.1,
    length: "2 ч 22 мин",
  },
  {
    img: "/slide.webp",
    name: "Чебурашка4",
    year: 2022,
    rating: 9.1,
    length: "2 ч 22 мин",
  },
  {
    img: "/slide.webp",
    name: "Чебурашка5",
    year: 2022,
    rating: 9.1,
    length: "2 ч 22 мин",
  },
  {
    img: "/slide.webp",
    name: "Чебурашка6",
    year: 2022,
    rating: 9.1,
    length: "2 ч 22 мин",
  },
  {
    img: "/slide.webp",
    name: "Чебурашка",
    year: 2022,
    rating: 9.1,
    length: "2 ч 22 мин",
  },
  {
    img: "/slide.webp",
    name: "Чебурашка1",
    year: 2022,
    rating: 9.1,
    length: "2 ч 22 мин",
  },
  {
    img: "/slide.webp",
    name: "Чебурашка2",
    year: 2022,
    rating: 9.1,
    length: "2 ч 22 мин",
  },
  {
    img: "/slide.webp",
    name: "Чебурашка3",
    year: 2022,
    rating: 9.1,
    length: "2 ч 22 мин",
  },
  {
    img: "/slide.webp",
    name: "Чебурашка4",
    year: 2022,
    rating: 9.1,
    length: "2 ч 22 мин",
  },
  {
    img: "/slide.webp",
    name: "Чебурашка5",
    year: 2022,
    rating: 9.1,
    length: "2 ч 22 мин",
  },
  {
    img: "/slide.webp",
    name: "Чебурашка6",
    year: 2022,
    rating: 9.1,
    length: "2 ч 22 мин",
  },
];

export const MoviesList: React.FC = () => {
  return (
    <section className={"container"}>
      <div className={styles.list}>
        {films.map((film, index) => (
          <div className={styles.card} key={index}>
            <MovieCard data={film} />
          </div>
        ))}
      </div>
    </section>
  );
};
