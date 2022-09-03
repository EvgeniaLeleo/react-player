import update from 'immutability-helper';
import { FC, useEffect } from 'react';
import { useCallback, useState } from 'react';
import { EMPTY_ARTIST, TEXT } from '../../../constants';
import { useAppDispatch, useAppSelector } from '../../../hook';
import { uploadMovedTracks } from '../../../store/trackSlice';
import { SongType } from '../../../types';
import { TrackItem } from './TrackItem';

export const TrackList: FC = () => {
  const dispatch = useAppDispatch();
  const lang = useAppSelector((state) => state.language.lang);

  const filteredTracksStore = useAppSelector(
    (state) => state.filteredItems.filteredTracks,
  );

  const allTracksStore = useAppSelector((state) => state.tracks.allTracks);

  const allTracks = filteredTracksStore.length
    ? filteredTracksStore
    : allTracksStore;

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
      {trackItems[0].artist === EMPTY_ARTIST && (
        <div>{TEXT.empty_results[lang]}</div>
      )}
      {trackItems[0].artist !== EMPTY_ARTIST && (
        <div>
          {trackItems.map((track: SongType, i: number) =>
            renderTrackItem(track, i),
          )}
        </div>
      )}
    </>
  );
};
