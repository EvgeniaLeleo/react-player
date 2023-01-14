/**TODO
 * Сортирует массив треков по исполнителям в возрастающем порядке
 */

import { Track } from '../types'

export const getSortedByArtistsArray: (tracks: Track[]) => Track[] = (
  tracks
) => {
  let sortedArray = [...tracks]

  sortedArray.sort((a, b) =>
    a.author && b.author ? (a.author < b.author ? -1 : 1) : 1
  )
  return sortedArray
}
