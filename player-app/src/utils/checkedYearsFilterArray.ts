/**
 * Формирует массив треков, фильтруя исходные данные по фильтру checkedYears
 */

import { SongType } from '../types';

export const checkedYearsFilterArray: (data: SongType[]) => SongType[] = (
  data,
) => {
  const checkedYearsFilteredData: SongType[] = [];

  const checkedYearsLocal = JSON.parse(localStorage['checkedYears'] || '[]');

  checkedYearsLocal.forEach((year: string) =>
    data.forEach((item) => {
      if (item.year === year) {
        checkedYearsFilteredData.push(item);
      }
    }),
  );

  return checkedYearsFilteredData;
};
