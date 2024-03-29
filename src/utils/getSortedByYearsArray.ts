/**
 * Сортирует массив треков по году выпуска в возрастающем порядке
 */

import { Track } from '../types'

export const getSortedByYearsArray: (tracks: Track[]) => Track[] = (tracks) => {
  let sortedArray = [...tracks]

  sortedArray.sort((a, b) => Number(a.release_date) - Number(b.release_date))
  return sortedArray
}
