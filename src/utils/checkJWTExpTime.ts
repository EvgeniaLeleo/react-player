import { getJWTExpTime } from './getJWTExpTime'

export const checkJWTExpTime = (token: string) => {
  return new Date() < getJWTExpTime(token)
}

// TODO на странице Мои треки убрать скелетоны, если избранных нет
