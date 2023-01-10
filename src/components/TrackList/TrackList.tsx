import update from 'immutability-helper';
import { FC, useEffect, useCallback, useState } from 'react';

import {
  ALBUM_DANCE,
  ALBUM_FAVOURITES,
  ALBUM_DAYPLAYLIST,
  EMPTY_ARTIST,
  TEXT,
} from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hook';
import { setMovedStatus, uploadMovedTracks } from '../../store/trackSlice';
import { Track } from '../../types';
import { TrackItem } from '../../pages/TrackItem/TrackItem';

export const TrackList: FC<{ header: string }> = ({ header }) => {
  const dispatch = useAppDispatch();

  const lang = useAppSelector((state) => state.language.lang);
  const textColor = useAppSelector((state) => state.colorTheme.textColor);

  const tracksAll = useAppSelector((state) => state.tracks.allTracks);
  const tracksDance = useAppSelector((state) => state.tracks.danceTracks);
  const tracksRandom = useAppSelector((state) => state.tracks.randomTracks);
  const tracksFavourites = useAppSelector((state) => state.tracks.favourites);

  const filteredTracks = useAppSelector(
    (state) => state.filteredItems.filteredTracks,
  );
  const filteredTracksDance = useAppSelector(
    (state) => state.filteredItems.filteredDanceTracks,
  );
  const filteredTracks_Random = useAppSelector(
    (state) => state.filteredItems.filteredRandomTracks,
  );
  const filteredTracks_Favourites = useAppSelector(
    (state) => state.filteredItems.filteredFavouritesTracks,
  );

  let allTracks = filteredTracks.length ? filteredTracks : tracksAll;

  if (header === TEXT.albums[ALBUM_DANCE][lang]) {
    allTracks = filteredTracksDance.length ? filteredTracksDance : tracksDance;
  }

  if (header === TEXT.albums[ALBUM_DAYPLAYLIST][lang]) {
    allTracks = filteredTracks_Random.length
      ? filteredTracks_Random
      : tracksRandom;
  }

  if (header === TEXT.albums[ALBUM_FAVOURITES][lang]) {
    allTracks = filteredTracks_Favourites.length
      ? filteredTracks_Favourites
      : tracksFavourites;
  }

  const [trackItems, setTrackItems] = useState(allTracks);

  useEffect(() => {
    setTrackItems(allTracks);
  }, [allTracks, header]);

  useEffect(() => {
    dispatch(uploadMovedTracks(trackItems));
    dispatch(setMovedStatus(true));
  }, [dispatch, trackItems]);

  const moveTrackItem = useCallback((dragIndex: number, hoverIndex: number) => {
    setTrackItems((prevTrackItems: Track[]) =>
      update(prevTrackItems, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevTrackItems[dragIndex] as Track],
        ],
      }),
    );
  }, []);

  const renderTrackItem = useCallback((track: Track, index: number) => {
    return (
      <TrackItem
        key={track.id}
        index={index}
        id={track.id}
        moveTrackItem={moveTrackItem}
        track={track}
      />
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (
    header === TEXT.albums[ALBUM_FAVOURITES][lang] &&
    trackItems.length === 0
  ) {
    return <div style={{ color: textColor }}>{TEXT.no_favourites[lang]}</div>;
  }

  return (
    <>
      {trackItems[0]?.author === EMPTY_ARTIST && (
        <div style={{ color: textColor }}>{TEXT.empty_results[lang]}</div>
      )}
      {trackItems[0]?.author !== EMPTY_ARTIST && (
        <div>
          {trackItems.map((track: Track, i: number) =>
            renderTrackItem(track, i),
          )}
        </div>
      )}
    </>
  );
};
