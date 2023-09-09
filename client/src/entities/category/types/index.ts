import { SpritesMap } from '@/shared/ui/icon/sprite.gen';

export interface ICategoryCard {
  title: string;
  iconName: SpritesMap['sprite'];
  href: string;
  name: string;
  value: string;
}
