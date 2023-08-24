'use client';

import classNames from 'classnames';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';

import { SearchWindow } from '@/features/search-window';
import { setSearchWindow } from '@/features/search-window/model';
import { useAppDispatch } from '@/shared/lib/hooks/use-app-state';
import { Logo } from '@/shared/ui/logo';

import { useHeaderFixed, useSetSearchWindow } from '../lib';
import { Burger } from './burger';
import { Menu } from './menu';
import { Nav } from './nav';
import { Profile } from './profile-btn';
import { SavedMoviesBtn } from './saved-movies-btn/ui';
import { SearchButton } from './search-btn';

import styles from './styles.module.scss';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useAppDispatch();
  const session = useSession();

  useSetSearchWindow();

  const { isFixed } = useHeaderFixed();

  const onToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <header
        className={classNames(styles.header, {
          [styles.fixed]: isFixed,
        })}
      >
        <div className={classNames('container', styles.container)}>
          <div className="row">
            <Logo />
            <Nav />
          </div>
          <div className="row">
            <SearchButton onClick={() => dispatch(setSearchWindow(true))} />
            {session?.data?.user && <SavedMoviesBtn />}
            <Profile photo={session?.data?.user?.image ?? ''} />
            <Burger isOpen={isOpen} onOpen={onToggle} />
          </div>
        </div>
        <Menu isOpen={isOpen} onClose={onToggle} />
      </header>
      <SearchWindow />
    </>
  );
};
