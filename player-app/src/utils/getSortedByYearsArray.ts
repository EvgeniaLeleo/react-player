/**
 * Сортирует массив треков по году выпуска в возрастающем порядке
 */

import { SongType } from '../types';

export const getSortedByYearsArray: (tracks: SongType[]) => SongType[] = (
  tracks,
) => {
  let sortedArray = [...tracks];

  sortedArray.sort((a, b) => Number(a.year) - Number(b.year));
  return sortedArray;
};
