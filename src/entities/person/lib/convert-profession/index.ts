import { capitalizeFirstLetter } from '@/shared/lib/helpers';

export function convertProfession(profession: string) {
  return capitalizeFirstLetter(profession.slice(0, -1));
}
