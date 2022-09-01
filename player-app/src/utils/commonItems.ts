/**
 * Находит общие треки (по ключу '_id') в двух массивах SongType[]
 */

import { SongType } from '../types';

export const commonItems: (
  array1: SongType[],
  array2: SongType[],
) => SongType[] = (array1, array2) => {
  const commonItemsArray: SongType[] = [];

  array1.forEach((item) => {
    array2.forEach((item2) => {
      if (item._id === item2._id) {
        commonItemsArray.push(item);
      }
    });
  });

  return commonItemsArray;
};
