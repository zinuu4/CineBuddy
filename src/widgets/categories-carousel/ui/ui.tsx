'use client';

import classNames from 'classnames';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';

import { CategoryCard } from '@/entities/category/ui/category-card';
import { createQueryString } from '@/shared/lib/helpers/create-query';
import { categories } from '../config';

import styles from './styles.module.scss';

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

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const onChooseCategory = (name: string, value: string) => {
    if (searchParams) {
      router.push(
        `${pathname}films?${createQueryString(name, value, searchParams)}`,
      );
    }
  };

  return (
    <section className={classNames(styles.section, boxShadowClassname)}>
      <div className="container">
        <div className={styles.base}>
          <div ref={carouselRef} className={styles.list}>
            {categories.map((data) => (
              <CategoryCard
                onClick={onChooseCategory}
                key={data.title}
                data={data}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
