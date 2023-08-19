import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';

import { Button } from '@/shared/ui/btn-base';
import { Title } from '@/shared/ui/title';

import styles from './styles.module.scss';

export const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={classNames(styles.container, 'container')}>
      <Title
        className={styles.title}
        size="small"
        title="Добро пожаловать на CineBuddy - онлайн кинотеатр с более чем 960 тысячами фильмов!"
      />
      <p className={styles.descr}>
        У нас вы можете легко и быстро найти интересующий вас фильм благодаря
        нашему удобному поиску. Мы предлагаем широкий выбор кино различных
        жанров и направлений - от классики до новинок, от драм до боевиков. На
        CineBuddy вы сможете насладиться просмотром любимых фильмов в высоком
        качестве в любое время и в любом месте. Регистрируйтесь на нашем сайте и
        начните погружаться в увлекательный мир кино!
      </p>
      <div className={classNames(styles.divider, 'divider')} />
      <Button className={styles.social}>
        <a
          target="_blank"
          href="https://github.com/zinuu4/CineBuddy"
          rel="noreferrer"
        >
          <Image
            src="/icons/social/github.svg"
            alt="GitHub"
            width={30}
            height={30}
          />
        </a>
      </Button>
    </div>
  </footer>
);
