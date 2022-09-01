// import { TempleBuddhist } from '@mui/icons-material';
import update from 'immutability-helper';
import { FC } from 'react';
import { useCallback, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hook';
import { uploadAllTracks } from '../../../store/trackSlice';
import { SongType } from '../../../types';
import { TrackItem } from './TrackItem';

export const TrackList: FC = () => {
  const dispatch = useAppDispatch();

  const allTracksStore = useAppSelector((state) => state.tracks.allTracks);
  const allTracksLocal = JSON.parse(localStorage.getItem('allTracks') || '[]');

  const allTracks = allTracksLocal || allTracksStore;

  const [trackItems, setTrackItems] = useState(allTracks);
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

    localStorage.setItem('allTracks', JSON.stringify(trackItems));
    dispatch(uploadAllTracks(trackItems));
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
