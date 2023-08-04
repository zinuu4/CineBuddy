import React from "react";
import classNames from "classnames";

import { TitleChevron } from "@/shared/ui/title-chevron";
import { CategoriesSlider } from "@/widgets/categories-slider";

import styles from "./styles.module.scss";

const ComedyFilms = [
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

export const CategoriesList: React.FC = () => {
  return (
    <>
      <section>
        <div className={classNames(styles.container, "container")}>
          <TitleChevron title="Смотрим всей семьей" />
          <CategoriesSlider data={ComedyFilms} />
        </div>
      </section>
      <section>
        <div className={classNames(styles.container, "container")}>
          <TitleChevron title="Новые фильмы" />
          <CategoriesSlider data={ComedyFilms} />
        </div>
      </section>
      <section>
        <div className={classNames(styles.container, "container")}>
          <TitleChevron title="Комедийные фильмы" />
          <CategoriesSlider data={ComedyFilms} />
        </div>
      </section>
      <section>
        <div className={classNames(styles.container, "container")}>
          <TitleChevron title="Фильмы для взрослых" />
          <CategoriesSlider data={ComedyFilms} />
        </div>
      </section>
      <section>
        <div className={classNames(styles.container, "container")}>
          <TitleChevron title="Фантастика" />
          <CategoriesSlider data={ComedyFilms} />
        </div>
      </section>
    </>
  );
};
