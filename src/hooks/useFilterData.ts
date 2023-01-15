import { useState, useEffect } from 'react'
import { useGetTracksQuery } from '../services/dataApi'
import { selectFilter } from '../store/FilterSlice'
import { FilterSlice, initialState } from '../types'
import { useAppDispatch, useAppSelector } from './hook'

export const useFilterData = () => {
  const { data: tracks } = useGetTracksQuery()

  const [filteredData, setFilteredData] = useState<FilterSlice>(initialState)

  const dispatch = useAppDispatch()
  const selectedData = useAppSelector(selectFilter)

  // useEffect(() => {
  //   if (tracks) {
  //     dispatch(updateFilter(tracks))
  //   }
  // }, [tracks, dispatch])

  useEffect(() => {
    if (selectedData) {
      setFilteredData(selectedData)
    }
  }, [selectedData])

  return filteredData
}
