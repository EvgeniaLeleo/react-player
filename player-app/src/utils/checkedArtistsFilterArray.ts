/**
 * Формирует массив треков, фильтруя исходные данные по фильтру checkedArtists
 */

import { SongType } from '../types';

export const checkedArtistsFilterArray: (
  checkedItems: string[],
  data: SongType[],
) => SongType[] = (checkedItems, data) => {
  const checkedArtistsFilteredData: SongType[] = [];

  checkedItems.forEach((artist: string) =>
    data.forEach((item) => {
      if (item.artist === artist) {
        checkedArtistsFilteredData.push(item);
      }
    }),
  );

  return checkedArtistsFilteredData;
};
