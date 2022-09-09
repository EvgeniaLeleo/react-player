/**
 * Формирует массив треков, фильтруя исходные данные по фильтру checkedGenres
 */

import { TSong } from '../types';

export const checkedGenresFilterArray: (
  checkedItems: string[],
  data: TSong[],
) => TSong[] = (checkedItems, data) => {
  const checkedGenresFilteredData: TSong[] = [];

  checkedItems.forEach((genre: string) =>
    data.forEach((item) => {
      if (item.genre === genre) {
        checkedGenresFilteredData.push(item);
      }
    }),
  );

  return checkedGenresFilteredData;
};
