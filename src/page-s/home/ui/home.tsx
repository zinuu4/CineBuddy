import { CategoriesList } from '@/page-s/home/ui/categories-list';
import { CategoriesCarousel } from '@/widgets/categories-carousel';
import { TrailersCarousel } from './trailers-carousel';

export const Home = () => (
  <>
    <TrailersCarousel />
    <CategoriesCarousel />
    <CategoriesList />
  </>
);
