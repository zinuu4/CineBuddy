import Image from 'next/image';
import React from 'react';

import { BtnBgOpacity } from '@/shared/ui/btn-bg-opacity';

export const FavoriteBtn = () => (
  <BtnBgOpacity>
    <Image src="/bookmark.svg" alt="Add to favorites" width={22} height={22} />
  </BtnBgOpacity>
);
