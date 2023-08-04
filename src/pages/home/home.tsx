import { TrailersCarousel } from "@/shared/ui/trailers-carousel";
import { CategoriesCarousel } from "@/shared/ui/categories-carousel";
import { CategoriesList } from "@/widgets/categories-list";

export default function Home() {
  return (
    <main>
      <TrailersCarousel />
      <CategoriesCarousel />
      <CategoriesList />
    </main>
  );
}
