import { Track, FieldNames } from '../types'

// возвращает первоначальное значение фильтра из data по заданному полю
export const getFilterDataByField = (data: Track[], field: FieldNames) => {
  if (field === 'release_date') {
    const yearList = data.map((item: Track) =>
      item.release_date ? Number(item.release_date.split('-')[0]) : 0
    )

    const orderedList = Array.from(new Set(yearList))
      .filter((item) => item !== 0)
      .sort((a, b) => b - a)

    return orderedList.map((item) => ({ value: String(item), selected: false }))
  }

  const tempList = data
    .map((item: Track) => item[field]!)
    .filter((item) => item !== '-')

  const orderedList = Array.from(new Set(tempList)).sort()

  return orderedList.map((item) => ({ value: item, selected: false }))
}
