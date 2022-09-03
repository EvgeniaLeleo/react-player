/**
 * Формирует массив треков, фильтруя исходные данные по фильтру checkedYears
 */

import { SongType } from '../types';

export const checkedYearsFilterArray: (
  checkedItems: string[],
  data: SongType[],
) => SongType[] = (checkedItems, data) => {
  const checkedYearsFilteredData: SongType[] = [];

  checkedItems.forEach((year: string) =>
    data.forEach((item) => {
      if (item.year === year) {
        checkedYearsFilteredData.push(item);
      }
    }),
  );

  return checkedYearsFilteredData;
};
