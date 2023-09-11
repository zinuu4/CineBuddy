import { capitalizeFirstLetter } from '@/shared/lib';

export function convertProfession(profession: string) {
  return capitalizeFirstLetter(profession.slice(0, -1));
}
