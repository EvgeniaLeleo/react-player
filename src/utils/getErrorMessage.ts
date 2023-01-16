import { ERRORS } from '../constants'
import { AuthError } from '../types'

export const getErrorMessage = (error: AuthError) => {
  if (!('data' in error)) {
    return ERRORS.DEFAULT_ERROR
  }

  const errData = error.data
  const errorFromApi = errData.username
    ? errData.username[0]
    : errData.email
    ? errData.email[0]
    : errData.detail
    ? errData.detail
    : ''

  if (errorFromApi in ERRORS) {
    return ERRORS[errorFromApi]
  }

  return errorFromApi || ERRORS.DEFAULT_ERROR
}
