// returns the current user, refreshing his token if necessary

import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from './hook'
import { useGetCurrentUserQuery } from '../services/dataApi'
import { selectRefreshToken } from '../store/tokenSlice'
import { useRefreshToken } from './useRefreshToken'
import { ROUTES } from '../routes'

// if no loggedin user or the refresh token is invalid, returns undefined
export const useCurrentUser = () => {
  const timestampRef = useRef(Date.now()).current
  const { data, isLoading, isError, error } =
    // useGetCurrentUserQuery(timestampRef)
    useGetCurrentUserQuery()

  const doRefreshToken = useRefreshToken()
  const refreshToken = useAppSelector(selectRefreshToken)
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

  // console.log('shouldRefreshTokens', shouldRefreshTokens())

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
