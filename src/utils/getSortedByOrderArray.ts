/**TODO
 * Сортирует массив треков по году выпуска в возрастающем или убывающем порядке порядке
 */

import { ORDER } from '../constants'
import { Track, Order } from '../types'
import { getSortedByYearsArray } from './unused/getSortedByYearsArray'

export const getSortedByOrderArray: (
  tracks: Track[],
  order: Order
) => Track[] = (tracks, order) => {
  let sortedArray = [...tracks]

  if (order === ORDER.asc) {
    return getSortedByYearsArray(sortedArray)
  }

  if (order === ORDER.desc) {
    return getSortedByYearsArray(sortedArray).reverse()
  }

  return tracks
}
