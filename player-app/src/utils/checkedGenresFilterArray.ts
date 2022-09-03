/**
 * Формирует массив треков, фильтруя исходные данные по фильтру checkedGenres
 */

import { SongType } from '../types';

export const checkedGenresFilterArray: (
  checkedItems: string[],
  data: SongType[],
) => SongType[] = (checkedItems, data) => {
  const checkedGenresFilteredData: SongType[] = [];

  checkedItems.forEach((genre: string) =>
    data.forEach((item) => {
      if (item.genre === genre) {
        checkedGenresFilteredData.push(item);
      }
    }),
  );

  return checkedGenresFilteredData;
};
