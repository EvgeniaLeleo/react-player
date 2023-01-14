/**TODO
 * Сортирует массив треков по жанрам возрастающем порядке
 */
import { Track } from '../../types'

export const getSortedByGenresArray: (tracks: Track[]) => Track[] = (
  tracks
) => {
  let sortedArray = [...tracks]

  sortedArray.sort((a, b) =>
    a.genre && b.genre ? (a.genre < b.genre ? -1 : 1) : 1
  )
  return sortedArray
}
