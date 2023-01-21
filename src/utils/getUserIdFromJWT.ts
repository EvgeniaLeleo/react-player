import { parseJWT } from './parseJWT'

export const getUserIdFromJWT = (token: string) => {
  return parseJWT(token).user_id
}
