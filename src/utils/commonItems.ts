/**
 * Находит общие треки (по ключу 'id') в двух массивах Track[]
 */

import { Track } from '../types'

export const commonItems: (array1: Track[], array2: Track[]) => Track[] = (
  array1,
  array2
) => {
  const commonItemsArray: Track[] = []

  array1.forEach((item) => {
    array2.forEach((item2) => {
      if (item.id === item2.id) {
        commonItemsArray.push(item)
      }
    })
  })

  return commonItemsArray
}
