'use client';

import classNames from 'classnames';
import React, { useState } from 'react';

import { Burger } from './burger';
import { Logo } from './logo';
import { Menu } from './menu';
import { Nav } from './nav';
import { Profile } from './profile-btn';
import { SearchButton } from './search-btn';

import styles from './styles.module.scss';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={classNames('container', styles.container)}>
        <div className="row">
          <Logo className={styles.logo} />
          <Nav />
        </div>
        <div className="row">
          <SearchButton />
          <Profile />
          <Burger isOpen={isOpen} onOpen={onToggle} />
        </div>
      </div>
      <Menu isOpen={isOpen} onClose={onToggle} />
    </header>
  );
};
