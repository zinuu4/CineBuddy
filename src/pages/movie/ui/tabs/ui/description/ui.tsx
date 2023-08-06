"use client";

import React, { useState } from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

const MAX_WORDS = 30;

export const Description = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const words = text?.split(" ");
  const shortText = words?.slice(0, MAX_WORDS).join(" ");

  return (
    <p className={styles.descr}>
      {isExpanded ? text : shortText}
      {words?.length > MAX_WORDS && (
        <button
          className={classNames("btn-reset", styles.btn)}
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          {isExpanded ? "Свернуть описание" : "Подробное описание"}
        </button>
      )}
    </p>
  );
};

const text =
  "«Во все времена еда была рядом с людьми. Она искушает, вдохновляет, восхищает, отвращает. Но человек не может без еды, а значит тот, кто создает еду, может управлять миром...». Так думал Максим Лавров, когда шел осуществлять свою мечту – устраиваться поваром в один из самых дорогих ресторанов столицы. Мечта сбылась, вот только на деле все вышло не так вкусно. Шеф-повар ресторана Виктор Баринов – настоящая звезда гастрономического бомонда, знающая как угодить взыскательной публике. Оборотная сторона этого идеального образа – злоупотребление алкоголем, страсть к азартным играм и невыносимый характер. В гневе Баринов страшен, в загуле – неукротим. Арт-директор Виктория Гончарова – настоящая снежная королева, карьеристка с ледяным сердцем, однако именно с ней Макс проводит ночь до того, как пойти на новую работу. А вся команда поваров только и ждет промашки новичка, чтобы от души посмеяться.";
