import { useState, useEffect } from 'react'
import { selectAccessToken } from '../store/tokenSlice'
import { Track } from '../types'
import { getFavoriteTracksByUserToken } from '../utils/getFavoriteTracksByUserToken'
import { useAppSelector } from './hook'
import { useTracks } from './useTracks'

// getting the favorite tracks
export const useFavoriteTracks = (query = '') => {
  const { isLoading, isError, data, error } = useTracks(query)

  const token = useAppSelector(selectAccessToken)

  const [resultData, setResultData] = useState<Track[]>([])

  useEffect(() => {
    setResultData(getFavoriteTracksByUserToken(data, token))
  }, [data, token])

  return { data: resultData, isLoading, isError, error }
}
