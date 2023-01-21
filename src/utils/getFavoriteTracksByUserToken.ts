import { Track } from '../types'
import { getFavoriteTracksByUserId } from './getFavoriteTracksByUserId'
import { getUserIdFromJWT } from './getUserIdFromJWT'

export const getFavoriteTracksByUserToken = (
  tracks: Track[],
  token?: string
) => {
  if (!token) return []
  return getFavoriteTracksByUserId(tracks, getUserIdFromJWT(token))
}
