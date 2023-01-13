import { Track, StaredUser } from '../types'

export const getFavoriteTracksByUserId = (tracks: Track[], userID: number) => {
  return tracks.filter((track: Track) =>
    track.stared_user?.find((user: StaredUser) => user.id === userID)
  )
}
