import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

import { setSearchWindow } from '@/features/search-window/model';
import { useAppDispatch } from '@/shared/lib/hooks/use-app-state';

export function useSetSearchWindow() {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      dispatch(setSearchWindow(false));
    }

    prevPathnameRef.current = pathname;
  }, [pathname]);
}
