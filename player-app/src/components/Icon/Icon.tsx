import { FC } from 'react';
import { cn } from '@bem-react/classname';

import './Icon.css';

const cnIcon = cn('Icon');

export type IconProps = {
  type:
    | 'dislike'
    | 'like'
    | 'next'
    | 'note'
    | 'play'
    | 'prev'
    | 'repeat'
    | 'search'
    | 'shuffle'
    | 'sprite'
    | 'volume'
    | 'watch';
};

export const Icon: FC<IconProps> = ({ type }) => {
  return (
    <img src={`./icons/${type}.svg`} className={cnIcon()} alt={type}></img>
  );
};
