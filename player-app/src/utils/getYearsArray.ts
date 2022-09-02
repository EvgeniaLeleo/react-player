/**
 * Формирует массив годов выпуска из исходного массива объектов-треков
 */

import { SongType } from '../types';

export const getYearsArray: (tracks: SongType[]) => string[] = (tracks) => {
  let yearsArray: string[] = [];
  tracks.forEach((track) => {
    if (track.year && !yearsArray.includes(track.year)) {
      yearsArray.push(track.year);
    }
  });
  return yearsArray;
};
