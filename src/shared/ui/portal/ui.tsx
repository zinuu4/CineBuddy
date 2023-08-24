import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps extends PropsWithChildren {}

export const Portal = ({ children }: IPortalProps) => {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
    containerRef.current = document.querySelector('#modal');
    return () => setMounted(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return mounted && !!containerRef.current
    ? // @ts-ignore
      createPortal(children, containerRef.current)
    : null;
};
