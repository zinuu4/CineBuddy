/* eslint-disable react/jsx-no-useless-fragment */

'use client';

import { useSession } from 'next-auth/react';
import React from 'react';

import { ProfileBtn } from './profile';
import { SignInBtn } from './sign-in';

export const Profile: React.FC = () => {
  const session = useSession();

  console.log(session);

  return <>{session?.data?.user ? <ProfileBtn /> : <SignInBtn />}</>;
};
