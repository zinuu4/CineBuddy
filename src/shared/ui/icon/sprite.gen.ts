export interface SpritesMap {
  sprite:
    | 'back'
    | 'bookmark'
    | 'burger'
    | 'check'
    | 'chevron'
    | 'close'
    | 'edit'
    | 'filters'
    | 'link'
    | 'play'
    | 'profile'
    | 'search'
    | 'share'
    | 'sort'
    | 'star'
    | 'volume-high'
    | 'volume-slash'
    | 'cup'
    | 'fire'
    | 'happy'
    | 'hearts'
    | 'knife'
    | 'map'
    | 'music'
    | 'people'
    | 'rocket'
    | 'tank'
    | 'facebook'
    | 'github'
    | 'gmail'
    | 'telegram'
    | 'viber'
    | 'vk'
    | 'whatsapp';
}

export const SPRITES_META: { [K in keyof SpritesMap]: SpritesMap[K][] } = {
  sprite: [
    'back',
    'bookmark',
    'burger',
    'check',
    'chevron',
    'close',
    'edit',
    'filters',
    'link',
    'play',
    'profile',
    'search',
    'share',
    'sort',
    'star',
    'volume-high',
    'volume-slash',
    'cup',
    'fire',
    'happy',
    'hearts',
    'knife',
    'map',
    'music',
    'people',
    'rocket',
    'tank',
    'facebook',
    'github',
    'gmail',
    'telegram',
    'viber',
    'vk',
    'whatsapp',
  ],
};
