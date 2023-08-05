import React from "react";
import classNames from "classnames";

import { TitleChevron } from "@/shared/ui/title-chevron";
import { CategoriesSlider } from "@/widgets/categories-slider";

import { MovieCard } from '@/app/types/types';

import styles from "./styles.module.scss";

interface ApiResponse {
  movies: MovieCard[]
  error: string | null
}

interface CategoriesListItemProps {
  title: string
  fetcher: () => Promise<ApiResponse | undefined>
}

export const CategoriesListItem: React.FC<CategoriesListItemProps> = async ({ fetcher, title }) => {
  const data = await fetcher();

  return (
    <section>
      <div className={classNames(styles.container, "container")}>
        <TitleChevron title={title} />
        {data?.error ? (
          <h3>Something went wrong</h3>
        ) : (
          <CategoriesSlider data={data?.movies ?? []} />
        )}
      </div>
    </section>
  );
};
