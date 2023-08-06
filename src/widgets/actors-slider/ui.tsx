"use client";

import React from "react";

import { Slider } from "@/shared/ui/slider";
import { ActorCard } from "@/entities/actor/ui/actor-card";

import styles from "./styles.module.scss";

interface IActorsSliderProps {
  data: any;
}

export const ActorsSlider: React.FC<IActorsSliderProps> = ({ data }) => {
  return (
    <Slider
      slidesData={data}
      Card={ActorCard}
      slidesPerView={"auto"}
      navigation={false}
      spaceBetween={14}
      slideClassName={styles.slide}
    />
  );
};
