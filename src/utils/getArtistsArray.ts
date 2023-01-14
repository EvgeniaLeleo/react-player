/**TODO
 * Формирует массив артистов выпуска из исходного массива объектов-треков
 */

import { Track } from '../types'

export const getArtistsArray: (tracks: Track[]) => string[] = (tracks) => {
  let authorsArray: string[] = []
  tracks.forEach((track) => {
    if (track.author && !authorsArray.includes(track.author)) {
      authorsArray.push(track.author)
    }
  })
  return authorsArray
}
