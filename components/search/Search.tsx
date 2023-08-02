import React from "react";
import { FiSearch } from "react-icons/fi";

import ButtonBase from "../ui/buttonBase/ButtonBase";

import styles from "./search.module.scss";

const Search: React.FC = () => {
  return (
    <ButtonBase className={styles.openSearch}>
      <FiSearch />
    </ButtonBase>
  );
};

export default Search;
