import classNames from 'classnames';
import React from 'react';

import { FavoriteBtn } from '@/features/favorites';
import { BtnBgOpacity } from '@/shared/ui/btn-bg-opacity';
import { Descr } from './descr';
import { MovieLogo } from './logo';
import { MainInfo } from './main-info';
import { People } from './people';

import styles from './styles.module.scss';

const MainInfoData = {
  year: 2012,
  genre: 'Комедия',
  ageRestriction: '16+',
  country: 'Россия',
  seasons: '6 сезонов',
};

const actors = ['Дмитрий Назаров', 'Марк Богатырев', 'Дмитрий Нагиев'];

export const MovieMain = () => {
  const lol = 10;
  return (
    <section className={styles.section}>
      <div className={styles.height} />
      <div
        style={{
          backgroundImage:
            'url(https://imagetmdb.com/t/p/original/nvfcOMwWJH9GGS31yNVCh1Fyfai.jpg)',
        }}
        className={styles.bg}
      />
      <div className={classNames(styles.container, 'container')}>
        <div className={styles.content}>
          <MovieLogo
            img="https://avatars.mds.yandex.net/get-ott/1652588/2a00000175799514a006ef67dddfdd600b88/orig"
            alt="img"
          />
          <MainInfo data={MainInfoData} />
          <Descr descr="Молодой повар-провинциал попадает в адский котел модного ресторана. Один из лучших российских ситкомов" />
          <People director="Дмитрий Дьяченко" actors={actors} />
          <div className={styles.btns}>
            <BtnBgOpacity className={styles.btnWatch}>
              <span className={styles.textWatch}>Смотреть сериал</span>
            </BtnBgOpacity>
            <BtnBgOpacity className={styles.btnTrailer}>
              <span>Трейлер</span>
            </BtnBgOpacity>
            <FavoriteBtn />
          </div>
        </div>
      </div>
    </section>
  );
};
