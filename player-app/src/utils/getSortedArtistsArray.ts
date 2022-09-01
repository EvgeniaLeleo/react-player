import { SongType } from '../types';

/**
 * Формирует массив имен исполнителей из исходного массива объектов-треков
 */

const getArtistsArray: (tracks: SongType[]) => string[] = (tracks) => {
  let artistsArray: string[] = [];
  tracks.forEach((track) => {
    if (track.artist && !artistsArray.includes(track.artist)) {
      artistsArray.push(track.artist);
    }
  });
  return artistsArray;
};

/**
 * Формирует сортированный в алфавитном порядке массив исполнителей
 */

export const getSortedArtistsArray: (tracks: SongType[]) => string[] = (
  tracks,
) => {
  const artistsArray = getArtistsArray(tracks);
  const sortedArray = artistsArray.sort((a, b) => (a < b ? -1 : 1));
  return sortedArray;
};
