import { ReadonlyURLSearchParams } from 'next/navigation';

export const createQueryString = (
  name: string,
  value: string,
  searchParams: ReadonlyURLSearchParams,
) => {
  const params = new URLSearchParams(searchParams.toString());
  params.set(name, value);

  return params.toString();
};
