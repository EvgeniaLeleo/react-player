/**
 * Формирует массив треков, соответствующих данным из строки поиска
 */

import { SongType } from '../types';

export const getSearchQueryArray: (
  query: string,
  initialData: SongType[],
) => SongType[] = (query, initialData) => {
  if (query === '' && initialData.length) {
    return initialData;
    // console.log('--> initialData', initialData);
  }

  const tempArray: SongType[] = [];

  initialData.forEach((item) => {
    if (
      item.artist?.toLowerCase().includes(query.toLowerCase()) ||
      item.title?.toLowerCase().includes(query.toLowerCase())
    ) {
      tempArray.push(item);
    }
  });

  //   console.log('--> getSearchQueryArray', tempArray);

  return tempArray;
};
