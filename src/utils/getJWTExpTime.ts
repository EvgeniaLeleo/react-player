import { parseJWT } from './parseJWT'

export const getJWTExpTime = (token: string) => {
  return new Date(+parseJWT(token).exp * 1000)
}
