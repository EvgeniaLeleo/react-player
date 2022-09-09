/**
 * Сортирует массив треков по жанрам возрастающем порядке
 */
import { TSong } from '../types';

export const getSortedByGenresArray: (tracks: TSong[]) => TSong[] = (
  tracks,
) => {
  let sortedArray = [...tracks];

  sortedArray.sort((a, b) =>
    a.genre && b.genre ? (a.genre < b.genre ? -1 : 1) : 1,
  );
  return sortedArray;
};
