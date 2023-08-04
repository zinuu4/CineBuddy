import React, { ReactNode } from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

interface ButtonBaseProps {
  className?: string;
  children: ReactNode;
}

export const Button: React.FC<ButtonBaseProps> = ({ className, children }) => {
  return (
    <button className={classNames("btn-reset", styles.btn, className)}>
      {children}
    </button>
  );
};
