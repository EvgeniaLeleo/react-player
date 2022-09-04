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
  const dispatch = useAppDispatch();

  const lang = useAppSelector((state) => state.language.lang);

  const tracksAll = useAppSelector((state) => state.tracks.allTracks);
  const tracksDance = useAppSelector((state) => state.tracks.danceTracks);
  const tracksRandom = useAppSelector((state) => state.tracks.randomTracks);

  const filteredTracks = useAppSelector(
    (state) => state.filteredItems.filteredTracks,
  );
  const filteredTracksDance = useAppSelector(
    (state) => state.filteredItems.filteredDanceTracks,
  );
  const filteredTracks_Random = useAppSelector(
    (state) => state.filteredItems.filteredRandomTracks,
  );

  let allTracks = filteredTracks.length ? filteredTracks : tracksAll;

  if (header === TEXT.albums[ALBUM_DANCE][lang]) {
    allTracks = filteredTracksDance.length ? filteredTracksDance : tracksDance;
  }

  if (header === TEXT.albums[ALBUM_RANDOM][lang]) {
    allTracks = filteredTracks_Random.length
      ? filteredTracks_Random
      : tracksRandom;
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
