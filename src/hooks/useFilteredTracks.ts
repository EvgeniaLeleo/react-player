import { useState, useEffect } from 'react'

import { FilterItem, FilterSlice, Track } from '../types'
import { useFilterData } from './useFilterData'
import { useTracks } from './useTracks'

// getting filtered tracks
export const useFilteredTracks = (query = '') => {
  const { isLoading, isError, data, error } = useTracks(query)
  const [filteredData, setFilteredData] = useState<Track[]>([])
  const filterSliceData = useFilterData()

  const getSelectedItems = (data: FilterItem[]) =>
    data.filter((el: FilterItem) => el.selected).map((el) => el.value)

  useEffect(() => {
    if (filterSliceData && data) {
      filterData(data, filterSliceData)
    }
    // eslint-disable-next-line
  }, [data, filterSliceData, query])

  const filterData = (data: Track[], filter: FilterSlice) => {
    setFilteredData(
      data.filter((item: Track) => {
        const { field } = filter
        const filterItems = getSelectedItems(filter.filter[field])

        if (filterItems.length) {
          return field === 'release_date'
            ? filterItems.some((el) =>
                new RegExp(`^${el}`).test(String(item[field]))
              )
            : filterItems.some((el) => item[field]?.includes(el))
        }
        return data
      })
    )
  }

  // console.log('useFilteredTracks', filteredData)

  return { data: filteredData, isLoading, isError, error }
}
