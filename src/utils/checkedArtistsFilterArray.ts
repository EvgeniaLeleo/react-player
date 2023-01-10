/**
 * Формирует массив треков, фильтруя исходные данные по фильтру checkedArtists
 */

import { Track } from '../types';

export const checkedArtistsFilterArray: (
  checkedItems: string[],
  data: Track[],
) => Track[] = (checkedItems, data) => {
  const checkedArtistsFilteredData: Track[] = [];

  checkedItems.forEach((author: string) =>
    data.forEach((item) => {
      if (item.author === author) {
        checkedArtistsFilteredData.push(item);
      }
    }),
  );

  return checkedArtistsFilteredData;
};
