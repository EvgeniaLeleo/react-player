import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import './AlbumCover.css';
import { COLOR, COLOR_DARK, COLOR_EXTRADARK } from '../../constants';

const cnAlbumCover = cn('AlbumCover');

export type AlbumCoverProps = {
  text: string;
};

export const AlbumCover: FC<AlbumCoverProps> = ({ text }) => {
  return (
    <div
      className={cnAlbumCover()}
      style={{
        color: COLOR,
        background: `linear-gradient(${COLOR_EXTRADARK}, ${COLOR_DARK})`,
      }}
    >
      {text}
    </div>
  );
};
