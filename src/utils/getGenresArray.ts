/**
 * Формирует массив жанров из исходного массива объектов-треков
 */

import { TSong } from '../types';

export const getGenresArray: (tracks: TSong[]) => string[] = (tracks) => {
  let genresArray: string[] = [];
  tracks.forEach((track) => {
    if (track.genre && !genresArray.includes(track.genre)) {
      genresArray.push(track.genre);
    }
  });
  return genresArray;
};
