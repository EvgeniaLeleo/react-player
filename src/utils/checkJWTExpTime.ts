import { getJWTExpTime } from './getJWTExpTime'

export const checkJWTExpTime = (token: string) => {
  return new Date() < getJWTExpTime(token)
}
