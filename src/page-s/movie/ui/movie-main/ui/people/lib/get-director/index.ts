import { IPersonInMovie } from '@/shared/api';

export function getDirector(persons: IPersonInMovie[]) {
  const director = persons?.filter(
    (person) => person.enProfession === 'director',
  )[0];

  return [director];
}
