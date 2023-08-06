'use client';

import React, { useEffect } from "react";
import classNames from "classnames";

import { TitleChevron } from "@/shared/ui/title-chevron";
import { CategoriesSlider } from "@/widgets/categories-slider";

import { MovieCard } from '@/app/types/types';
import { toast } from 'react-toastify';

import { CategoriesApiProps, useGetMoviesQuery } from '../../api';

import styles from "./styles.module.scss";

interface CategoriesListItemProps {
  title: string
  params: CategoriesApiProps
}

export const CategoriesListItem: React.FC<CategoriesListItemProps> = ({ params, title }) => {
  const { data, error, refetch } = useGetMoviesQuery(params);

  const notify = () => toast('Something went wrong. Network error', {
    theme: 'dark',
    autoClose: 5000,
    position: 'top-right'
  });

  useEffect(() => {
    if (error) notify();
  }, [error])
  
  return (
    <section>
      <div className={classNames(styles.container, "container")}>
        <TitleChevron title={title} />
        <CategoriesSlider data={data} />
      </div>
    </section>
  );
};
