/**
 * Сортирует массив треков по году выпуска в возрастающем или убывающем порядке
 */

import { ORDER } from '../constants'
import { Track } from '../types'
import { getSortedByYearsArray } from './getSortedByYearsArray'

export const getSortedByOrderArray: (
  tracks: Track[],
  order: string
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
