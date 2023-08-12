/* eslint-disable react/jsx-no-useless-fragment */

'use client';

import { useSession } from 'next-auth/react';
import React from 'react';

import { LoggedBtn } from './logged/ui';
import { NotLoggedBtn } from './not-logged/ui';

export const Profile: React.FC = () => {
  const session = useSession();

  console.log(session);

  return <>{session?.data?.user ? <LoggedBtn /> : <NotLoggedBtn />}</>;
};
