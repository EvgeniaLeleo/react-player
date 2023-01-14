import { useAppDispatch } from './hook'
import { useCookies } from 'react-cookie'
import { setToken } from '../store/tokenSlice'
import { setIsNavMenuOpened } from '../store/navMenuSlice'

export const useLogout = () => {
  const [, , removeCookies] = useCookies(['access', 'refresh'])
  const dispatch = useAppDispatch()

  const logout = () => {
    removeCookies('access')
    removeCookies('refresh')
    dispatch(setIsNavMenuOpened(false))
    dispatch(setToken({ access: undefined, refresh: undefined }))
  }

  return logout
}
