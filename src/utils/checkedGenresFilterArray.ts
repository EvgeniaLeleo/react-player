/**
 * Формирует массив треков, фильтруя исходные данные по фильтру checkedGenres
 */

import { Track } from '../types';

export const checkedGenresFilterArray: (
  checkedItems: string[],
  data: Track[],
) => Track[] = (checkedItems, data) => {
  const checkedGenresFilteredData: Track[] = [];

  checkedItems.forEach((genre: string) =>
    data.forEach((item) => {
      if (item.genre === genre) {
        checkedGenresFilteredData.push(item);
      }
    }),
  );

  return checkedGenresFilteredData;
};
