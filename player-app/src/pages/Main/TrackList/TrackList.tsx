// import { TempleBuddhist } from '@mui/icons-material';
import update from 'immutability-helper';
import { FC, useEffect } from 'react';
import { useCallback, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hook';
import { uploadMovedTracks } from '../../../store/trackSlice';
import { SongType } from '../../../types';
import { TrackItem } from './TrackItem';

export const TrackList: FC = () => {
  const dispatch = useAppDispatch();

  const filteredTracksStore = useAppSelector(
    (state) => state.checkedItems.filteredTracks,
  );
  // console.log('--> filteredTracksStore', filteredTracksStore);
  const allTracksStore = useAppSelector((state) => state.tracks.allTracks);
  const movedTracksStore = useAppSelector((state) => state.tracks.movedTracks);

  console.log(movedTracksStore);

  const allTracks = filteredTracksStore.length
    ? filteredTracksStore
    : allTracksStore;
  // const allTracks = filteredTracksStore.length
  //   ? filteredTracksStore
  //   : movedTracksStore.length
  //   ? movedTracksStore
  //   : allTracksStore;

  const [trackItems, setTrackItems] = useState(allTracks);

  useEffect(() => {
    setTrackItems(allTracks);
  }, [allTracks]);

  useEffect(() => {
    dispatch(uploadMovedTracks(trackItems));
  }, [dispatch, trackItems]);

  // console.log('--> trackItems', trackItems);

  const moveTrackItem = useCallback((dragIndex: number, hoverIndex: number) => {
    setTrackItems((prevTrackItems: SongType[]) =>
      update(prevTrackItems, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevTrackItems[dragIndex] as SongType],
        ],
      }),
    );
    console.log(trackItems);
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
