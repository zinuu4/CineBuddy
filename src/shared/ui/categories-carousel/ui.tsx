"use client";

import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";

import { CarouselSlide } from "@/entities/categories-carousel-slide";

import styles from "./styles.module.scss";

const swiperItemsData = [
  { title: "Лучшие", img: "/cup.svg", href: "/" },
  { title: "Новые", img: "/fire.svg", href: "/" },
  { title: "Мелодраммы", img: "/hearts.svg", href: "/" },
  { title: "Ужасы", img: "/knife.svg", href: "/" },
  { title: "Приключения", img: "/map.svg", href: "/" },
  { title: "Фантастика", img: "/rocket.svg", href: "/" },
  { title: "Семейные", img: "/people.svg", href: "/" },
  { title: "Комедии", img: "/happy.svg", href: "/" },
  { title: "Концерты", img: "/music.svg", href: "/" },
  { title: "Военные", img: "/tank.svg", href: "/" },
];

export const CategoriesCarousel: React.FC = () => {
  const [scroll, setScroll] = useState(0);
  const [maxScrollX, setMaxScrollX] = useState(0);
  const [boxShadowClassname, setBoxShadowClassname] = useState(styles.start);

  const carouselRef = useRef<HTMLDivElement>(null);

  const getScrollPositions = () => {
    if (carouselRef.current) {
      setScroll(carouselRef.current.scrollLeft);
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.addEventListener("scroll", getScrollPositions);
    }
    if (carouselRef.current) {
      const contentWidth = carouselRef.current.scrollWidth;
      const containerWidth = carouselRef.current.clientWidth;
      const maxScroll = contentWidth - containerWidth;
      setMaxScrollX(maxScroll);
    }
    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener("scroll", getScrollPositions);
      }
    };
  }, []);

  useEffect(() => {
    if (scroll === 0) {
      setBoxShadowClassname(styles.start);
    } else if (scroll > 0 && scroll < maxScrollX) {
      setBoxShadowClassname(classNames(styles.start, styles.end));
    } else if (scroll === maxScrollX) {
      setBoxShadowClassname(styles.end);
    }
  }, [scroll]);

  return (
    <section className={classNames(styles.section, boxShadowClassname)}>
      <div className="container">
        <div className={styles.base}>
          <div ref={carouselRef} className={styles.list}>
            {swiperItemsData.map(({ title, img, href }) => {
              return (
                <CarouselSlide
                  href={href}
                  key={title}
                  title={title}
                  img={img}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
