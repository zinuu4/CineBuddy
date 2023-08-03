import React from "react";
import Image from "next/image";
import classNames from "classnames";

import styles from "./footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={classNames(styles.container, "container")}>
        <a target="_blank" href="https://github.com/zinuu4/CineBuddy">
          <Image
            className={styles.icon}
            src="/github.svg"
            alt="GitHub"
            width={40}
            height={40}
          />
        </a>
        <div className={classNames(styles.divider, "divider")}></div>
        <div className={styles.copyright}>&copy; 2023 CineBuddy</div>
      </div>
    </footer>
  );
};

export default Footer;
