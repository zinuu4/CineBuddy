import Image from 'next/image';
import React from 'react';

import { Button } from '@/shared/ui/btn-base';

export const FavoriteBtn = () => (
  <Button stylesType="bg">
    <Image src="/bookmark.svg" alt="Add to favorites" width={22} height={22} />
  </Button>
);
