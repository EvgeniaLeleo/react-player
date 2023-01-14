import { useState, useEffect } from 'react'
import { useGetTracksQuery } from '../services/tracksDataApi'
import { Track } from '../types'
import { getFilteredData } from '../utils/getFilteredData'
import { useCurrentUser } from './useCurrentUser'

// getting tracks, searching by track name available
export const useTracks = (query = '') => {
  useCurrentUser()

  const { isLoading, isError, data, error } = useGetTracksQuery()
  const [filteredData, setFilteredData] = useState<Track[]>([])

  // console.log('data', data)

  useEffect(() => {
    if (data) setFilteredData(getFilteredData(data, query))
  }, [data, isError, query])

  return { data: filteredData, isLoading, isError, error }
}
