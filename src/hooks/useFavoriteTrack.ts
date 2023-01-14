import { useNavigate } from 'react-router-dom'

import { ROUTES } from '../routes'
import {
  useAddTrackToFavoriteMutation,
  useRemoveTrackFromFavoriteMutation,
} from '../services/dataApi'
import { selectAccessToken, selectRefreshToken } from '../store/tokenSlice'
import { Track, StaredUser } from '../types'
import { getUserIdFromJWT } from '../utils/getUserIdFromJWT'
import { useAppSelector } from './hook'
import { useRefreshToken } from './useRefreshToken'

export const useFavoriteTrack = (track?: Track) => {
  const token = useAppSelector(selectAccessToken)
  const refreshToken = useAppSelector(selectRefreshToken)
  const handleRefreshToken = useRefreshToken()

  const [addTrackToFavorite] = useAddTrackToFavoriteMutation()
  const [removeTrackFromFavorite] = useRemoveTrackFromFavoriteMutation()
  const navigate = useNavigate()

  const isUserInStaredUser = (starredUser: StaredUser[]) => {
    const user = starredUser.find(
      (el: StaredUser) => el.id === (token ? getUserIdFromJWT(token) : 0)
    )
    return !!user
  }

  const favorite: boolean =
    track && track.stared_user ? isUserInStaredUser(track.stared_user) : false

  const toggleFavoriteTrack = async (trackId: number) => {
    const toggle = favorite ? removeTrackFromFavorite : addTrackToFavorite

    try {
      await toggle(trackId).unwrap()
    } catch (err) {
      if (refreshToken) {
        await handleRefreshToken(refreshToken)
        await toggleFavoriteTrack(trackId)
      } else {
        console.error('No refresh token')
        navigate(ROUTES.login)
      }
    }
  }

  return { favorite, toggleFavoriteTrack }
}
