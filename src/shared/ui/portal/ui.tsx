import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps extends PropsWithChildren {
  rootId?: string;
}

export const Portal = ({ rootId, children }: IPortalProps) => {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
    containerRef.current = document.querySelector(`${rootId}`);
    return () => setMounted(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return mounted && !!containerRef.current
    ? createPortal(children, containerRef.current)
    : null;
};
