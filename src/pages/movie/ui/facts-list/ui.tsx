import React from "react";
import classNames from "classnames";

import { FactItem } from "@/entities/fact/ui/fact-card";
import { Title } from "@/shared/ui/title";
import { Button } from "@/shared/ui/button";

import styles from "./styles.module.scss";

export const FactsList = () => {
  return (
    <div className={classNames(styles.container, "container")}>
      <Title title="Знаете ли вы, что..." className={styles.title} />
      <ul className="list-reset">
        <FactItem text="hello world" />
        <FactItem text="hello world" />
        <FactItem text="hello world" />
        <FactItem text="hello world" />
      </ul>
      <Button className={styles.btn}>Показать еще</Button>
    </div>
  );
};
