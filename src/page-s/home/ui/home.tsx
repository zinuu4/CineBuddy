import { CategoriesList } from '@/page-s/home/ui/categories-list';
import { CategoriesCarousel } from '@/widgets/categories-carousel';
import { TrailersCarousel } from './trailers-carousel';

export default function Home() {
  return (
    <>
      <TrailersCarousel />
      <CategoriesCarousel />
      <CategoriesList />
    </>
  );
}
