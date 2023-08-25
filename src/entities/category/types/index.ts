import { SpritesMap } from '@/shared/ui/icon/sprite.h';

export interface ICategoryCard {
  title: string;
  iconName: SpritesMap['genres'];
  href: string;
  name: string;
  value: string;
}
