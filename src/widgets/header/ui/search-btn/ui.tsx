import React from "react";
import { FiSearch } from "react-icons/fi";

import { Button } from "@/shared/ui/button";

import styles from "./styles.module.scss";

export const SearchButton: React.FC = () => {
  return (
    <Button className={styles.openSearch}>
      <FiSearch />
    </Button>
  );
};
