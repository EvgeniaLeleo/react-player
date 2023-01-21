/**
 * Формирует массив треков, фильтруя исходные данные по фильтру checkedYears
 */

import { Track } from '../types'

export const checkedYearsFilterArray: (
  checkedItems: string[],
  data: Track[]
) => Track[] = (checkedItems, data) => {
  const checkedYearsFilteredData: Track[] = []

  checkedItems.forEach((release_date: string) =>
    data.forEach((item) => {
      if (item.release_date?.slice(0, 4) === release_date?.slice(0, 4)) {
        checkedYearsFilteredData.push(item)
      }
    })
  )

  return checkedYearsFilteredData
}
