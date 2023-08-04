import { CategoriesCarousel } from "@/widgets/categories-carousel";
import { CategoriesList } from "@/entities/category/ui/categories-list";
import { TrailersCarousel } from "@/widgets/trailers-carousel";

export default function Home() {
  return (
    <main>
      <TrailersCarousel />
      <CategoriesCarousel />
      <CategoriesList />
    </main>
  );
}
