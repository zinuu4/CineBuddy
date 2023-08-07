import { CategoriesList } from '@/pages/home/ui/categories-list';
import { CategoriesCarousel } from '@/widgets/categories-carousel';
import { TrailersCarousel } from './trailers-carousel';

export default function Home() {
  return (
    <main>
      <TrailersCarousel />
      <CategoriesCarousel />
      <CategoriesList />
    </main>
  );
}
