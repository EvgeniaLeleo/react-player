/**
 * Сортирует массив треков по жанрам возрастающем порядке
 */
import { SongType } from '../types';

export const getSortedByGenresArray: (tracks: SongType[]) => SongType[] = (
  tracks,
) => {
  let sortedArray = [...tracks];

  sortedArray.sort((a, b) =>
    a.genre && b.genre ? (a.genre < b.genre ? -1 : 1) : 1,
  );
  console.log(sortedArray);
  return sortedArray;
};
