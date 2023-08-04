"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { items } from "./config";

import styles from "./styles.module.scss";

export const Nav: React.FC = () => {
  const pathname = usePathname();

  return (
    <ul className={styles.list}>
      {items.map(({ title, href }) => {
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
