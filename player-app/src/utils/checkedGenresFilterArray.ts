/**
 * Формирует массив треков, фильтруя исходные данные по фильтру checkedGenres
 */

import { SongType } from '../types';

export const checkedGenresFilterArray: (data: SongType[]) => SongType[] = (
  data,
) => {
  const checkedGenresFilteredData: SongType[] = [];

  const checkedGenresLocal = JSON.parse(localStorage['checkedGenres'] || '[]');

  checkedGenresLocal.forEach((genre: string) =>
    data.forEach((item) => {
      if (item.genre === genre) {
        checkedGenresFilteredData.push(item);
      }
    }),
  );

  return checkedGenresFilteredData;
};
