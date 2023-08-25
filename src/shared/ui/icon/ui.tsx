import classNames from 'classnames';
import { SpritesMap } from './sprite.h';

export interface IconProps<Group extends keyof SpritesMap> {
  name: SpritesMap[Group];
  type?: Group;
  className?: string;
}

export function Icon<Group extends keyof SpritesMap = 'common'>({
  type,
  name,
  className,
}: IconProps<Group>) {
  return (
    <svg className={classNames('icon', className)}>
      <use xlinkHref={`/sprite/${type}.svg#${name}`} />
    </svg>
  );
}
