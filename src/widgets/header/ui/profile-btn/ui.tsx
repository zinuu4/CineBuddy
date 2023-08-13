/* eslint-disable react/jsx-no-useless-fragment */

'use client';

import { useSession } from 'next-auth/react';
import React from 'react';

import { IProfile } from '@/shared/api';
import { ProfileBtn } from './profile';
import { SignInBtn } from './sign-in';

export const Profile: React.FC<Partial<IProfile>> = ({ photo }) => {
  const session = useSession();

  return (
    <>{session?.data?.user ? <ProfileBtn photo={photo} /> : <SignInBtn />}</>
  );
};
