/**
 * Находит общие треки (по ключу 'id') в двух массивах TSong[]
 */

import { TSong } from '../types';

export const commonItems: (array1: TSong[], array2: TSong[]) => TSong[] = (
  array1,
  array2,
) => {
  const commonItemsArray: TSong[] = [];

  array1.forEach((item) => {
    array2.forEach((item2) => {
      if (item.id === item2.id) {
        commonItemsArray.push(item);
      }
    });
  });

  return commonItemsArray;
};
