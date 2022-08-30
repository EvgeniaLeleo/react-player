// import { TempleBuddhist } from '@mui/icons-material';
import update from 'immutability-helper';
import type { FC } from 'react';
import { useCallback, useState } from 'react';
import { SongType } from '../../../types';
import { TrackItem } from './TrackItem';

type ContainerProps = {
  allTracks: SongType[];
};

export const TrackList: FC<ContainerProps> = ({ allTracks }) => {
  const [tracks, setTrackItems] = useState(allTracks);

  const moveTrackItem = useCallback((dragIndex: number, hoverIndex: number) => {
    setTrackItems((prevTrackItems: SongType[]) =>
      update(prevTrackItems, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevTrackItems[dragIndex] as SongType],
        ],
      }),
    );
  }, []);

  const renderTrackItem = useCallback((track: SongType, index: number) => {
    return (
      <TrackItem
        key={track._id}
        index={index}
        id={track._id}
        moveTrackItem={moveTrackItem}
        track={track}
      />
    );
  }, []);

  return (
    <>
      <div>
        {tracks.map((track: SongType, i: number) => renderTrackItem(track, i))}
      </div>
    </>
  );
};
