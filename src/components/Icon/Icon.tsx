import { FC } from 'react';

import style from './style.module.css';

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
    <img src={`./icons/${type}.svg`} className={style.Icon} alt={type}></img>
  );
};
