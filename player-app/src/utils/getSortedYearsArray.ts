import { SongType } from '../types';

/**
 * Формирует массив годов выпуска из исходного массива объектов-треков
 */

const getYearsArray: (tracks: SongType[]) => string[] = (tracks) => {
  let yearsArray: string[] = [];
  tracks.forEach((track) => {
    if (track.year && !yearsArray.includes(track.year)) {
      yearsArray.push(track.year);
    }
  });
  return yearsArray;
};

/**
 * Формирует сортированный в возрастающем порядке массив годов выпуска
 */

export const getSortedYearsArray: (tracks: SongType[]) => string[] = (
  tracks,
) => {
  const yearsArray = getYearsArray(tracks);
  const sortedArray = yearsArray.sort((a, b) => Number(a) - Number(b));
  return sortedArray;
};
