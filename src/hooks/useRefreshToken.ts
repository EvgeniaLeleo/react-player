// возвращает функцию для обновления access токена
// запрашивает новый access token с помощью refresh token
// монтирует его в cookies и store

import { useAppDispatch } from './hook'
import { useRefreshUserTokenMutation } from '../services/dataApi'
import { setToken } from '../store/tokenSlice'
import { useCookies } from 'react-cookie'

// возвращает новый access token или ошибку
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
