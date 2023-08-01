import React from "react";
import classNames from "classnames";

import { RoutesEnum } from "@/constants/routes";

import Logo from "../ui/logo/Logo";
import HeaderTabs from "../ui/headerTabs/HeaderTab";
import LoginBtn from "../ui/loginBtn/LoginBtn";
import Search from "../search/Search";

import styles from "./header.module.scss";

const Header: React.FC = () => {
  const headerTabsData = [
    { title: "Главная", href: RoutesEnum.Home },
    { title: "Фильмы", href: RoutesEnum.Films },
    { title: "Сериалы", href: RoutesEnum.Series },
    { title: "Мультфильмы", href: RoutesEnum.Cartoons },
  ];

  return (
    <header className={styles.header}>
      <div className={classNames("container", styles.container)}>
        <div className="row">
          <Logo className={styles.logo} />
          <HeaderTabs data={headerTabsData} />
        </div>
        <div className="row">
          <Search />
          <LoginBtn />
        </div>
      </div>
    </header>
  );
};

export default Header;
