import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import './AlbumCover.css';
import { useAppSelector } from '../../hook';
import { lightenDarkenColor } from '../../utils/utils';

const cnAlbumCover = cn('AlbumCover');

export type AlbumCoverProps = {
  text: string;
};

export const AlbumCover: FC<AlbumCoverProps> = ({ text }) => {
  const textColor = useAppSelector((state) => state.colorTheme.textColor);
  const decorativeColor = useAppSelector(
    (state) => state.colorTheme.decorativeColor,
  );

  const decorativeColorDark = lightenDarkenColor(decorativeColor, 60);

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
