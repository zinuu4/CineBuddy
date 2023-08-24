import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';

type IsCopied = boolean;
type CopyFn = () => Promise<void>;

export function useCopyToClipboard(): [CopyFn, IsCopied] {
  const [isCopied, setIsCopied] = useState(false);
  const pathname = usePathname();

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(
        `https://cine-buddy.vercel.app${pathname}`,
      );
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    } catch (error) {
      toast('Что-то пошло не так', {
        theme: 'dark',
        autoClose: 3000,
        position: 'top-right',
      });
    }
  };

  return [copy, isCopied];
}
