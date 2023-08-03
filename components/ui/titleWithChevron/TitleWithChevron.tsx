import Image from "next/image";
import Link from "next/link";
import React from "react";
import classNames from "classnames";

import styles from "./titleWithChevron.module.scss";

const TitleWithChevron: React.FC = () => {
  return (
    <Link className={classNames("title", "title-small")} href="">
      Комедийные фильмы
      <span>
        <Image
          src="/chevron.svg"
          alt="Комедийные фильмы"
          width={15}
          height={15}
        />
      </span>
    </Link>
  );
};

export default TitleWithChevron;
