/**
 * Getting favorite tracks
 */

import { useState, useEffect } from 'react'

import { accessTokenSelector } from '../store/selectors/tokenSelector'
import { Track } from '../types'
import { getFavoriteTracksByUserToken } from '../utils/getFavoriteTracksByUserToken'
import { useAppSelector } from './hook'
import { useSearchQueryTracks } from './useSearchQueryTracks'

export const useFavoriteTracks = (query = '') => {
  const { isLoading, isError, data, error } = useSearchQueryTracks(query)

  const token = useAppSelector(accessTokenSelector)

  const [resultData, setResultData] = useState<Track[]>([])

  useEffect(() => {
    setResultData(getFavoriteTracksByUserToken(data, token))
  }, [data, token])

  return { data: resultData, isLoading, isError, error }
}
