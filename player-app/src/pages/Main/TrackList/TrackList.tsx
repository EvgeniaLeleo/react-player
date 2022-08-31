// import { TempleBuddhist } from '@mui/icons-material';
import update from 'immutability-helper';
import type { FC } from 'react';
import { useCallback, useState } from 'react';
// import { useAppDispatch } from '../../../hook';
// import { uploadAllTracks } from '../../../store/trackSlice';
import { SongType } from '../../../types';
import { TrackItem } from './TrackItem';

type ContainerProps = {
  allTracks: SongType[];
};

export const TrackList: FC<ContainerProps> = ({ allTracks }) => {
  // console.log('trlist', allTracks);
  // const dispatch = useAppDispatch();
  const [trackItems, setTrackItems] = useState(allTracks);
  // dispatch(uploadAllTracks(trackItems));
  // console.log('tr', trackItems);
  localStorage.setItem('allTracks', JSON.stringify(trackItems));

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
        {trackItems.map((track: SongType, i: number) =>
          renderTrackItem(track, i),
        )}
      </div>
    </>
  );
};
