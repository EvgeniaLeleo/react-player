/**TODO
 * Формирует массив годов выпуска из исходного массива объектов-треков
 */

import { Track } from '../types'

export const getYearsArray: (tracks: Track[]) => string[] = (tracks) => {
  let release_datesArray: string[] = []
  tracks.forEach((track) => {
    if (
      track.release_date &&
      !release_datesArray.includes(track.release_date?.slice(0, 4))
    ) {
      release_datesArray.push(track.release_date?.slice(0, 4))
    }
  })
  return release_datesArray.sort()
}
