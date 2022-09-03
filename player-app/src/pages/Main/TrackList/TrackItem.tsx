import { cn } from '@bem-react/classname';
import { FavoriteBorder } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import type { Identifier, XYCoord } from 'dnd-core';
import { FC, useCallback } from 'react';
import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import { DivChangeColor } from '../../../components/changeColor/DivChangeColor';
import { useAppDispatch, useAppSelector } from '../../../hook';
import { changeCurrentSong } from '../../../store/trackSlice';
import { SongType } from '../../../types';
import {
  colorToSecondary,
  extradarkToDark,
  extradarkToHover,
} from '../../../utils/colorUtils';

import './TrackItem.css';

const cnTrackItem = cn('TrackItem');

export const ItemTypes = {
  TRACK: 'track',
};

export interface TrackItemProps {
  id: any;
  index: number;
  track: SongType;
  moveTrackItem: (dragIndex: number, hoverIndex: number) => void;
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}

export const TrackItem: FC<TrackItemProps> = ({
  id,
  index,
  moveTrackItem,
  track,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [{ handlerId }, drop] = useDrop<
    DragItem,
    void,
    { handlerId: Identifier | null }
  >({
    accept: ItemTypes.TRACK,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveTrackItem(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.TRACK,
    item: () => {
      return { id, index };
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  const dispatch = useAppDispatch();

  const currentTrack = useAppSelector((state) => state.tracks.currentTrack);

  const textColor = useAppSelector((state) => state.colorTheme.textColor);
  const decorativeColor = useAppSelector(
    (state) => state.colorTheme.decorativeColor,
  );
  const textColorSecondary = colorToSecondary(textColor);
  const colorHover = extradarkToHover(decorativeColor);
  const colorDark = extradarkToDark(decorativeColor);

  const defineCurrentTrack = useCallback(
    (track: SongType) => {
      return currentTrack._id === track._id;
    },
    [currentTrack._id],
  );

  const handleChooseSong = useCallback(
    (track: SongType) => {
      dispatch(changeCurrentSong(track));
    },
    [dispatch],
  );

  return (
    <div
      ref={ref}
      className={cnTrackItem('Info')}
      style={{ opacity }}
      data-handler-id={handlerId}
    >
      <DivChangeColor
        color={defineCurrentTrack(track) ? colorHover : textColor}
        colorHover={colorHover}
        colorActive={colorDark}
        className={cnTrackItem('Info')}
        key={track._id}
        onClick={() => handleChooseSong(track)}
      >
        <img
          className={cnTrackItem('Icon')}
          src={track.img ? track.img : './icons/note.svg'}
          alt="Album_image"
        ></img>

        <span className={cnTrackItem('Name')}>{track.title}</span>

        {/* <span style={{ margin: '10px' }}>{track.genre}</span> */}
        {/* <span style={{ margin: '10px' }}>{track.year}</span> */}
        {/*  */}
        <span className={cnTrackItem('Author')}>{track.artist}</span>
        <span
          className={cnTrackItem('Album')}
          style={{ color: textColorSecondary }}
        >
          {track.album}, {track.year}
        </span>
        <IconButton sx={{ width: '5%' }} style={{ color: textColorSecondary }}>
          <FavoriteBorder fontSize="small" />
        </IconButton>
        <span
          className={cnTrackItem('Duration')}
          style={{ color: textColorSecondary }}
        >
          {/* {secondsToHms(track.duration_in_seconds)} */}
          {track?.duration}
        </span>
      </DivChangeColor>
    </div>
  );
};
