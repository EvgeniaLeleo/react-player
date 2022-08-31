import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import { useAppSelector } from '../../hook';

import './AlbumCover.css';
import { extradarkToDark } from '../../utils/colorUtils';

const cnAlbumCover = cn('AlbumCover');

export type AlbumCoverProps = {
  text: string;
};

export const AlbumCover: FC<AlbumCoverProps> = ({ text }) => {
  const textColor = useAppSelector((state) => state.colorTheme.textColor);
  const decorativeColor = useAppSelector(
    (state) => state.colorTheme.decorativeColor,
  );

  const decorativeColorDark = extradarkToDark(decorativeColor);

  return (
    <div
      className={cnAlbumCover()}
      style={{
        color: textColor,
        background: `linear-gradient(${decorativeColor}, ${decorativeColorDark})`,
      }}
    >
      {text}
    </div>
  );
};
