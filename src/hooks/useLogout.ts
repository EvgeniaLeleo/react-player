import { useAppDispatch } from './hook'
import { useCookies } from 'react-cookie'
import { setToken } from '../store/tokenSlice'
import { setIsNavMenuOpened } from '../store/navMenuSlice'

export const useLogout = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, setCookies, removeCookies] = useCookies(['access', 'refresh'])
  const dispatch = useAppDispatch()

  const logout = () => {
    // console.log('processing logout')
    removeCookies('access')
    removeCookies('refresh')
    dispatch(setIsNavMenuOpened(false))
    dispatch(setToken({ access: undefined, refresh: undefined }))
  }

  console.log('f')

  return logout
}