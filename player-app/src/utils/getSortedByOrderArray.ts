/**
 * Сортирует массив треков по году выпуска в возрастающем или убывающем порядке порядке
 */

import { TSong, TOrder } from '../types';
import { getSortedByYearsArray } from './getSortedByYearsArray';

export const getSortedByOrderArray: (
  tracks: TSong[],
  order: TOrder,
) => TSong[] = (tracks, order) => {
  let sortedArray = [...tracks];

  if (order === 'ASC') {
    return getSortedByYearsArray(sortedArray);
  } else {
    return getSortedByYearsArray(sortedArray).reverse();
  }
};
