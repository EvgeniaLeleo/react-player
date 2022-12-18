/**
 * Формирует массив треков, соответствующих данным из строки поиска
 */

import { TSong } from '../types';

export const getSearchQueryArray: (
  query: string,
  initialData: TSong[],
) => TSong[] = (query, initialData) => {
  if (query === '' && initialData.length) {
    return initialData;
  }

  const tempArray: TSong[] = [];

  initialData.forEach((item) => {
    if (
      item.author?.toLowerCase().includes(query.toLowerCase()) ||
      item.name?.toLowerCase().includes(query.toLowerCase())
    ) {
      tempArray.push(item);
    }
  });

  return tempArray;
};
