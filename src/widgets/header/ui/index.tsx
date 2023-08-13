'use client';

import classNames from 'classnames';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';

import { Burger } from './burger';
import { Logo } from './logo';
import { Menu } from './menu';
import { Nav } from './nav';
import { Profile } from './profile-btn';
import { SavedMoviesBtn } from './saved-movies-btn/ui';
import { SearchButton } from './search-btn';

import styles from './styles.module.scss';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const session = useSession();

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
          {session?.data?.user && <SavedMoviesBtn />}
          <Profile photo={session?.data?.user?.image ?? ''} />
          <Burger isOpen={isOpen} onOpen={onToggle} />
        </div>
      </div>
      <Menu isOpen={isOpen} onClose={onToggle} />
    </header>
  );
};
