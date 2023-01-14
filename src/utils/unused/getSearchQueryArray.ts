/**TODO
 * Формирует массив треков, соответствующих данным из строки поиска
 */

import { Track } from '../../types'

export const getSearchQueryArray: (
  query: string,
  initialData: Track[]
) => Track[] = (query, initialData) => {
  if (query === '' && initialData.length) {
    return initialData
  }

  const tempArray: Track[] = []

  initialData.forEach((item) => {
    if (
      item.author?.toLowerCase().includes(query.toLowerCase()) ||
      item.name?.toLowerCase().includes(query.toLowerCase())
    ) {
      tempArray.push(item)
    }
  })

  return tempArray
}
