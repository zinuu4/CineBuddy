'use client';

import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';

import { CarouselSlide } from '@/entities/category/ui/category-card';

import styles from './styles.module.scss';

const swiperItemsData = [
  { title: 'Лучшие', img: '/icons/genres/cup.svg', href: '/' },
  { title: 'Новые', img: '/icons/genres/fire.svg', href: '/' },
  { title: 'Мелодраммы', img: '/icons/genres/hearts.svg', href: '/' },
  { title: 'Ужасы', img: '/icons/genres/knife.svg', href: '/' },
  { title: 'Приключения', img: '/icons/genres/map.svg', href: '/' },
  { title: 'Фантастика', img: '/icons/genres/rocket.svg', href: '/' },
  { title: 'Семейные', img: '/icons/genres/people.svg', href: '/' },
  { title: 'Комедии', img: '/icons/genres/happy.svg', href: '/' },
  { title: 'Концерты', img: '/icons/genres/music.svg', href: '/' },
  { title: 'Военные', img: '/icons/genres/tank.svg', href: '/' },
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
    const currentCarouselRef = carouselRef.current;

    if (currentCarouselRef) {
      currentCarouselRef.addEventListener('scroll', getScrollPositions);
      const contentWidth = currentCarouselRef.scrollWidth;
      const containerWidth = currentCarouselRef.clientWidth;
      const maxScroll = contentWidth - containerWidth;
      setMaxScrollX(maxScroll);
    }

    return () => {
      if (currentCarouselRef) {
        currentCarouselRef.removeEventListener('scroll', getScrollPositions);
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
            {swiperItemsData.map(({ title, img, href }) => (
              <CarouselSlide href={href} key={title} title={title} img={img} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
