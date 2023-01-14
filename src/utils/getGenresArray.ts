/**TODO
 * Формирует массив жанров из исходного массива объектов-треков
 */

import { Track } from '../types'

export const getGenresArray: (tracks: Track[]) => string[] = (tracks) => {
  let genresArray: string[] = []
  tracks.forEach((track) => {
    if (track.genre && !genresArray.includes(track.genre)) {
      genresArray.push(track.genre)
    }
  })
  return genresArray.sort()
}
