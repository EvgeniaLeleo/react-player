/**
 * Формирует массив артистов выпуска из исходного массива объектов-треков
 */

import { SongType } from '../types';

export const getArtistsArray: (tracks: SongType[]) => string[] = (tracks) => {
  let artistsArray: string[] = [];
  tracks.forEach((track) => {
    if (track.artist && !artistsArray.includes(track.artist)) {
      artistsArray.push(track.artist);
    }
  });
  return artistsArray;
};
