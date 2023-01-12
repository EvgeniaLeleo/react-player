import { setToken } from '../store/tokenSlice'
import { useAppDispatch } from './hook'
import { useCookies } from 'react-cookie'

export const useLoadCredentialsFromCookies = () => {
  const [cookies] = useCookies(['access', 'refresh'])
  const dispatch = useAppDispatch()

  if (cookies && cookies.access) {
    dispatch(
      setToken({
        access: cookies.access,
        refresh: cookies.refresh,
      })
    )
    console.log('cookies', cookies)
    return true
  }

  console.log('no credentials found in cookies')
  return false
}
