import { TrailersCarousel } from './components/trailersCarousel/TrailersCarousel';
import CategoriesCarousel from '@/components/categoriesCarousel/CategoriesCarousel';

export default function Home() {
  return (
    <main>
      <section>
        <TrailersCarousel />
      </section>
      <CategoriesCarousel />
    </main>
  );
}
