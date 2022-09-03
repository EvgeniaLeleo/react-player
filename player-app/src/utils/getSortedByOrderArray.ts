/**
 * Сортирует массив треков по году выпуска в возрастающем или убывающем порядке порядке
 */

import { SongType, TOrder } from '../types';
import { getSortedByYearsArray } from './getSortedByYearsArray';

export const getSortedByOrderArray: (
  tracks: SongType[],
  order: TOrder,
) => SongType[] = (tracks, order) => {
  let sortedArray = [...tracks];

  if (order === 'ASC') {
    return getSortedByYearsArray(sortedArray);
  } else {
    return getSortedByYearsArray(sortedArray).reverse();
  }
};
