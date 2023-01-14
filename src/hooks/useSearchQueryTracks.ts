import { useState, useEffect } from 'react'

import { useGetTracksQuery } from '../services/dataApi'
import { Track } from '../types'
import { getSearchedData } from '../utils/getSearchedData'
import { useCurrentUser } from './useCurrentUser'

// getting tracks, searching by track name available
export const useSearchQueryTracks = (searchQuery = '') => {
  useCurrentUser()

  const { isLoading, isError, data, error } = useGetTracksQuery()
  const [searchedData, setSearchedData] = useState<Track[]>([])

  useEffect(() => {
    if (data) {
      setSearchedData(getSearchedData(data, searchQuery))
    }
  }, [data, isError, searchQuery])

  return { data: searchedData, isLoading, isError, error }
}
