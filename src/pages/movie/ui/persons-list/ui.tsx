import classNames from 'classnames';

import { PersonsSlider } from '@/widgets/persons-slider';
import { Title } from '@/shared/ui/title';

import styles from './styles.module.scss';

const actors = [
  { img: '/nagiev.webp', name: 'Дмитрий Нагиев', profession: 'Актер' },
  { img: '/nagiev.webp', name: 'Дмитрий Нагиев1', profession: 'Актер' },
  { img: '/nagiev.webp', name: 'Дмитрий Нагиев2', profession: 'Актер' },
];

export const PersonsList = () => (
  <section>
    <div className={classNames(styles.container, 'container')}>
      <Title title="Актеры и создатели" className={styles.title} />
      <PersonsSlider data={actors} />
    </div>
  </section>
);
