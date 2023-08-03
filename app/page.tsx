import { TrailersCarousel } from '../components/trailersCarousel/TrailersCarousel';
import CategoriesCarousel from '@/components/categoriesCarousel/CategoriesCarousel';
import CategoriesList from '@/components/categoriesList/CategoriesList';

export default function Home() {
  return (
    <main>
      <TrailersCarousel />
      <CategoriesCarousel />
      <CategoriesList />
    </main>
  );
}
