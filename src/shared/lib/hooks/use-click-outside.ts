'use client';

import { useEffect, MutableRefObject } from 'react';

export function useClickOutside<T extends HTMLElement | null>(
  ref: MutableRefObject<T>,
  handler: () => void,
) {
  useEffect(() => {
    const pointerHandler = (event: PointerEvent) => {
      if (!(event.target instanceof Node)) return;
      if (!ref.current || ref.current.contains(event.target)) return;

      handler();
    };

    const keyHandler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') handler();
    };

    document.addEventListener('pointerdown', pointerHandler);
    document.addEventListener('keydown', keyHandler);

    return () => {
      document.removeEventListener('pointerdown', pointerHandler);
      document.removeEventListener('keydown', keyHandler);
    };
  }, [ref, handler]);
}
