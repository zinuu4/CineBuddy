import Image from "next/image";
import Link from "next/link";
import React from "react";
import classNames from "classnames";

import styles from "./titleWithChevron.module.scss";

interface TitleWithChevronProps {
  title: string;
}

const TitleWithChevron: React.FC<TitleWithChevronProps> = ({ title }) => {
  return (
    <Link className={classNames(styles.title, "title", "title-medium")} href="">
      {title}
      <span className={styles.iconWrapper}>
        <Image
          className={styles.icon}
          src="/chevron.svg"
          alt={title}
          width={15}
          height={15}
        />
      </span>
    </Link>
  );
};

export default TitleWithChevron;
