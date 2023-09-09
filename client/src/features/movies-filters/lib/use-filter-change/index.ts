import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { createQueryString } from '@/shared/lib';

import { FilterType } from '../../config';

export function useFilterChange() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const onChange = (value: string, name: FilterType) => {
    if (searchParams) {
      router.push(
        `${pathname}?${createQueryString(name, value, searchParams)}`,
      );
    }
  };

  return { onChange };
}
