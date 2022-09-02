/**
 * Сортирует массив треков по исполнителям в возрастающем порядке
 */

import { SongType } from '../types';

export const getSortedByArtistsArray: (tracks: SongType[]) => SongType[] = (
  tracks,
) => {
  let sortedArray = [...tracks];

  sortedArray.sort((a, b) =>
    a.artist && b.artist ? (a.artist < b.artist ? -1 : 1) : 1,
  );
  return sortedArray;
};
