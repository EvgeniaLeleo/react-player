/**
 * Returns the function for refreshing access token
 * Requests new access token using refresh token and sets it in cookies and store
 * Returns new access token or error
 */

import { useAppDispatch } from './hook'
import { useRefreshUserTokenMutation } from '../services/dataApi'
import { setToken } from '../store/tokenSlice'
import { useCookies } from 'react-cookie'

export const useRefreshToken = () => {
  const [, setCookies] = useCookies(['access', 'refresh'])
  const dispatch = useAppDispatch()
  const [doRefreshToken] = useRefreshUserTokenMutation()

  const handleRefreshToken = async (refreshTokenIn: string) => {
    try {
      const { access } = await doRefreshToken(refreshTokenIn).unwrap()
      setCookies('access', access)
      dispatch(setToken({ access, refresh: refreshTokenIn }))
      return { access }
    } catch (err) {
      console.log(err)
      return { error: err }
    }
  }

  return handleRefreshToken
}
