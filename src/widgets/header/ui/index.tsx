import React from "react";
import classNames from "classnames";

import { Logo } from "./logo";
import { Nav } from "./nav";
import { Profile } from "./profile";
import { SearchButton } from "./search-btn";

import styles from "./styles.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={classNames("container", styles.container)}>
        <div className="row">
          <Logo className={styles.logo} />
          <Nav />
        </div>
        <div className="row">
          <SearchButton />
          <Profile />
        </div>
      </div>
    </header>
  );
};
