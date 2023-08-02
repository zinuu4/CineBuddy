import React, { ReactNode } from "react";
import classNames from "classnames";

import styles from "./buttonBase.module.scss";

interface ButtonBaseProps {
  className?: string;
  children: ReactNode;
}

const ButtonBase: React.FC<ButtonBaseProps> = ({ className, children }) => {
  return (
    <button className={classNames("btn-reset", styles.btn, className)}>
      {children}
    </button>
  );
};

export default ButtonBase;
