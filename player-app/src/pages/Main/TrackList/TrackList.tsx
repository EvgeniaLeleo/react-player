import { cn } from '@bem-react/classname';
import { FavoriteBorder } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { FC, useCallback } from 'react';
import { DivChangeColor } from '../../../components/changeColor/DivChangeColor/DivChangeColor';
import { SkeletonRect } from '../../../components/Skeleton/Skeleton';
import { useAppDispatch, useAppSelector } from '../../../hook';
import { changeCurrentSong } from '../../../store/trackSlice';
import { SongType } from '../../../types';
import {
  colorToSecondary,
  extradarkToDark,
  extradarkToHover,
  lightenDarkenColor,
} from '../../../utils/utils';

import './TrackList.css';

const cnTrackList = cn('TrackList');

type TrackListProps = {
  tracks: SongType[];
};

export const TrackList: FC<TrackListProps> = ({ tracks }) => {
  const dispatch = useAppDispatch();

  const textColor = useAppSelector((state) => state.colorTheme.textColor);
  const decorativeColor = useAppSelector(
    (state) => state.colorTheme.decorativeColor,
  );

  const colorHover = extradarkToHover(decorativeColor);
  const colorDark = extradarkToDark(decorativeColor);
  const skeletonColor = lightenDarkenColor(textColor, -10);
  const textColorSecondary = colorToSecondary(textColor);

  const handleChooseSong = useCallback(
    (track: SongType) => {
      dispatch(changeCurrentSong(track));
    },
    [dispatch],
  );

  const array = new Array(10).fill(0);

  return (
    <>
      {!tracks
        ? array.map((_, i) => (
            <div className={cnTrackList('Info')} key={i.toString()}>
              <SkeletonRect
                width="4%"
                margin="2%"
                height="45px"
                color={skeletonColor}
              ></SkeletonRect>

              <SkeletonRect
                width="24%"
                margin="5%"
                color={skeletonColor}
              ></SkeletonRect>

              <SkeletonRect
                width="20%"
                margin="5%"
                color={skeletonColor}
              ></SkeletonRect>

              <SkeletonRect
                width="25%"
                margin="6%"
                color={skeletonColor}
              ></SkeletonRect>

              <SkeletonRect
                width="9%"
                margin="0"
                color={skeletonColor}
              ></SkeletonRect>
            </div>
          ))
        : tracks.map((track) => (
            <DivChangeColor
              color={textColor}
              colorHover={colorHover}
              colorActive={colorDark}
              className={cnTrackList('Info')}
              key={track._id}
              onClick={() => handleChooseSong(track)}
            >
              <img
                className={cnTrackList('Icon')}
                src={track.img ? track.img : './icons/note.svg'}
                alt="Album_image"
              ></img>

              <span className={cnTrackList('Name')}>{track.title}</span>
              <span className={cnTrackList('Author')}>{track.artist}</span>
              <span
                className={cnTrackList('Album')}
                style={{ color: textColorSecondary }}
              >
                {track.album}
              </span>
              <IconButton
                sx={{ width: '5%' }}
                style={{ color: textColorSecondary }}
              >
                <FavoriteBorder fontSize="small" />
              </IconButton>
              <span
                className={cnTrackList('Duration')}
                style={{ color: textColorSecondary }}
              >
                {/* {secondsToHms(track.duration_in_seconds)} */}
                {track?.duration}
              </span>
            </DivChangeColor>
          ))}
    </>
  );
};
