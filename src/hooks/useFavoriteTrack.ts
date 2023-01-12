import { useNavigate } from 'react-router-dom'
// import { ROUTES } from '../routes'
// import {
//   useAddTrackToFavoriteMutation,
//   useRemoveTrackFromFavoriteMutation,
// } from '../services/tracksDataApi'
// import { selectAccessToken, selectRefreshToken } from '../store/tokenSlice'
// import { Track, StaredUser } from '../types'
// import { getUserIdFromJWT } from '../utils/utilsCookie'
// import { useAppSelector } from './hook'
// import { useRefreshToken } from './useRefreshToken'

// export const useFavoriteTrack = (track?: Track) => {
//   const token = useAppSelector(selectAccessToken)
//   const refreshToken = useAppSelector(selectRefreshToken)
//   const handleRefreshToken = useRefreshToken()
//   const [addTrackToFavorite] = useAddTrackToFavoriteMutation()
//   const [removeTrackFromFavorite] = useRemoveTrackFromFavoriteMutation()
//   const navigate = useNavigate()

//   const isUserInStaredUser = (starredUser?: StaredUser[]) => {
//     const user = starredUser?.find(
//       (el: StaredUser) => el.id === (token ? getUserIdFromJWT(token) : 0)
//     )
//     if (user) return true
//     return false
//   }

//   const favorite: boolean = track
//     ? isUserInStaredUser(track.stared_user)
//     : false

//   const toggleFavoriteTrack = async (trackId: number) => {
//     const handler = favorite ? removeTrackFromFavorite : addTrackToFavorite
//     try {
//       await handler(trackId).unwrap()
//     } catch (err) {
//       if (refreshToken) {
//         await handleRefreshToken(refreshToken)
//         await toggleFavoriteTrack(trackId)
//       } else {
//         console.error('No refresh token')
//         navigate(ROUTES.login)
//       }
//     }
//   }

//   return { favorite, toggleFavoriteTrack }
// }
