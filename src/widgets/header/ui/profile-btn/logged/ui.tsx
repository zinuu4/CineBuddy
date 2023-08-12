import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { routes } from '@/shared/lib/routing';

export const LoggedBtn: React.FC = () => (
  <button className="btn-reset">
    <Link href={routes.profile}>
      <Image width={40} height={40} src="/profile.png" alt="Профиль" />
    </Link>
  </button>
);
