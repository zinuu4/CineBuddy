import React from "react";
import Image from "next/image";

import { Button } from "@/shared/ui/button";

import styles from "./styles.module.scss";

export const Profile: React.FC = () => {
  return (
    <Button className={styles.btn}>
      <Image width={20} height={20} src="/profile.svg" alt="Войти" />
      Войти
    </Button>
  );
};
