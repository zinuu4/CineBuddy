import React from "react";
import classNames from "classnames";

import TitleWithChevron from "../ui/titleWithChevron/TitleWithChevron";
import CategoriesSlider from "@/components/categoriesSlider/CategoriesSlider";

import styles from "./categoriesList.module.scss";

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

const CategoriesList: React.FC = () => {
  return (
    <>
      <section>
        <div className={classNames(styles.container, "container")}>
          <TitleWithChevron title="Смотрим всей семьей" />
          <CategoriesSlider data={ComedyFilms} />
        </div>
      </section>
      <section>
        <div className={classNames(styles.container, "container")}>
          <TitleWithChevron title="Новые фильмы" />
          <CategoriesSlider data={ComedyFilms} />
        </div>
      </section>
      <section>
        <div className={classNames(styles.container, "container")}>
          <TitleWithChevron title="Комедийные фильмы" />
          <CategoriesSlider data={ComedyFilms} />
        </div>
      </section>
      <section>
        <div className={classNames(styles.container, "container")}>
          <TitleWithChevron title="Фильмы для взрослых" />
          <CategoriesSlider data={ComedyFilms} />
        </div>
      </section>
      <section>
        <div className={classNames(styles.container, "container")}>
          <TitleWithChevron title="Фантастика" />
          <CategoriesSlider data={ComedyFilms} />
        </div>
      </section>
    </>
  );
};

export default CategoriesList;
