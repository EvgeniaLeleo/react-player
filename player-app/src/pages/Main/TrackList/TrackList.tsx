import update from 'immutability-helper';
import { FC, useEffect } from 'react';
import { useCallback, useState } from 'react';
import {
  ALBUM_DANCE,
  ALBUM_RANDOM,
  EMPTY_ARTIST,
  TEXT,
} from '../../../constants';
import { useAppDispatch, useAppSelector } from '../../../hook';
import { uploadMovedTracks } from '../../../store/trackSlice';
import { SongType } from '../../../types';
import { TrackItem } from './TrackItem';

export const TrackList: FC<{ header: string }> = ({ header }) => {
  // console.log('--> album', header);

  const dispatch = useAppDispatch();

  const lang = useAppSelector((state) => state.language.lang);

  const allTracksStore = useAppSelector((state) => state.tracks.allTracks);
  const danceTracksStore = useAppSelector((state) => state.tracks.danceTracks);
  const randomTracksStore = useAppSelector(
    (state) => state.tracks.randomTracks,
  );

  const filteredTracksStore = useAppSelector(
    (state) => state.filteredItems.filteredTracks,
  );
  const filteredDanceTracksStore = useAppSelector(
    (state) => state.filteredItems.filteredDanceTracks,
  );
  const filteredRandomTracksStore = useAppSelector(
    (state) => state.filteredItems.filteredRandomTracks,
  );
  // console.log('--> filteredDanceTracksStore', filteredDanceTracksStore);
  // console.log('--> danceTracksStore', danceTracksStore);

  // const checkedItems = useAppSelector((state) => state.filteredItems);
  // const order = useAppSelector((state) => state.sortingSettings.order);
  // const searchedItems = useAppSelector(
  //   (state) => state.filteredItems.searchedTracks,
  // );
  // const searchedItemsDance = useAppSelector(
  //   (state) => state.filteredItems.searchedTracksDance,
  // );

  // let allTracks = filteredTracksStore.length
  //   ? filteredTracksStore
  //   : allTracksStore;
  let allTracks = filteredTracksStore.length
    ? filteredTracksStore
    : allTracksStore;

  // console.log('--> filteredTracksStore', filteredTracksStore);
  // console.log('--> allTracksStore', allTracksStore);

  // if (!header) {
  //   allTracks = filteredTracksStore.length
  //     ? filteredTracksStore
  //     : allTracksStore;
  //   console.log('--> dance', allTracks);
  // }

  if (header === TEXT.albums[ALBUM_DANCE][lang]) {
    allTracks = filteredDanceTracksStore.length
      ? filteredDanceTracksStore
      : danceTracksStore;
    // console.log('--> dance', header);
    // console.log('--> dance searchedItems', searchedItems);
    // console.log('--> dance danceTracksStore', danceTracksStore);
    // console.log('--> dance filteredDanceTracksStore', filteredDanceTracksStore);
    // console.log('--> dance allTracks', allTracks);
  }

  if (header === TEXT.albums[ALBUM_RANDOM][lang]) {
    allTracks = filteredRandomTracksStore.length
      ? filteredRandomTracksStore
      : randomTracksStore;
  }

  // console.log('--> allTracks', allTracks);

  const [trackItems, setTrackItems] = useState(allTracks);

  useEffect(() => {
    setTrackItems(allTracks);
  }, [allTracks, header]);

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
