import React from "react";
import Image from "next/image";

import ButtonBase from "../buttonBase/ButtonBase";

import styles from "./loginBtn.module.scss";

const LoginBtn: React.FC = () => {
  return (
    <ButtonBase className={styles.btn}>
      <Image width={20} height={20} src="/profile.svg" alt="Войти" />
      Войти
    </ButtonBase>
  );
};

export default LoginBtn;
