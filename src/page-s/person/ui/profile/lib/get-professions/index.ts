import type { IProfession } from 'shared/api';

export function getProfessions(professions: IProfession[]) {
  return professions.map((item) => item.value).join(', ');
}
