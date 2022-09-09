/**
 * Формирует массив треков, фильтруя исходные данные по фильтру checkedArtists
 */

import { TSong } from '../types';

export const checkedArtistsFilterArray: (
  checkedItems: string[],
  data: TSong[],
) => TSong[] = (checkedItems, data) => {
  const checkedArtistsFilteredData: TSong[] = [];

  checkedItems.forEach((author: string) =>
    data.forEach((item) => {
      if (item.author === author) {
        checkedArtistsFilteredData.push(item);
      }
    }),
  );

  return checkedArtistsFilteredData;
};
