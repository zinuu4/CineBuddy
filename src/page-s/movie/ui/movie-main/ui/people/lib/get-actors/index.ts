import { IPersonInMovie } from 'shared/api';

export function getActors(items: IPersonInMovie[]) {
  const persons = items.slice(0, 3);

  return persons;
}
