/**TODO
 * Сортирует массив треков по году выпуска в возрастающем или убывающем порядке порядке
 */

import { Track, Order } from '../types'
import { getSortedByYearsArray } from './getSortedByYearsArray'

export const getSortedByOrderArray: (
  tracks: Track[],
  order: Order
) => Track[] = (tracks, order) => {
  let sortedArray = [...tracks]

  if (order === 'ASC') {
    return getSortedByYearsArray(sortedArray)
  } else {
    return getSortedByYearsArray(sortedArray).reverse()
  }
}
