/**
 * Returns the current user, refreshing his token if necessary
 * If no logged in user or the refresh token is invalid, returns undefined
 */

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppSelector } from './hook'
import { useGetCurrentUserQuery } from '../services/dataApi'
import { useRefreshToken } from './useRefreshToken'
import { ROUTES } from '../routes'
import { refreshTokenSelector } from '../store/selectors/tokenSelector'

export const useCurrentUser = () => {
  const { data, isLoading, isError, error } = useGetCurrentUserQuery()

  const doRefreshToken = useRefreshToken()
  const refreshToken = useAppSelector(refreshTokenSelector)
  const navigate = useNavigate()

  const [resultError, setResultError] = useState(false)

  const handleRefreshToken = async (rt: string) => {
    const result = await doRefreshToken(rt)
    if ('error' in result) {
      navigate(ROUTES.login)
    }
  }

  const shouldRefreshTokens = () =>
    error ? 'status' in error && error.status === 401 : false

  useEffect(() => {
    if (isError) {
      if (shouldRefreshTokens() && refreshToken) {
        setResultError(false)
        handleRefreshToken(refreshToken)
      } else {
        navigate(ROUTES.login)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, refreshToken])

  return { user: data, isLoading, isError, error: resultError }
}
