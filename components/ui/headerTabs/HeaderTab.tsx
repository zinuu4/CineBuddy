"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./headerTabs.module.scss";

interface TabsItem {
  title: string;
  href: string;
}

interface HeaderTabsProps {
  data: TabsItem[];
}

const HeaderTabs: React.FC<HeaderTabsProps> = ({ data }) => {
  const pathname = usePathname();

  return (
    <ul className={styles.list}>
      {data.map(({ title, href }) => {
        const linkClasses = `${styles.link} ${
          pathname === href ? styles.link__active : ""
        }`;
        return (
          <li key={title} className={styles.item}>
            <Link className={linkClasses} href={href}>
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default HeaderTabs;
