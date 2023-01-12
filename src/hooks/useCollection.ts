import { useState, useEffect } from 'react'

import { useGetCollectionQuery } from '../services/tracksDataApi'
import { selectRefreshToken } from '../store/tokenSlice'
import { Collection } from '../types'
import { getFilteredData } from '../utils/getFilteredData'
import { useAppSelector } from './hook'
import { useRefreshToken } from './useRefreshToken'

export const useCollection = (query = '', collectionId = 1) => {
  const { isLoading, isError, data, error } =
    useGetCollectionQuery(collectionId)
  const [filteredData, setFilteredData] = useState<Collection>()
  const refreshToken = useAppSelector(selectRefreshToken)
  const handleRefreshTokens = useRefreshToken()

  useEffect(() => {
    if (isError && 'status' in error && error.status === 401 && refreshToken) {
      handleRefreshTokens(refreshToken)
    }

    if (data) filterData(data)
    // eslint-disable-next-line
  }, [data, isError, query])

  const filterData = (data: Collection) => {
    setFilteredData({
      ...data,
      items: getFilteredData(data.items, query),
    })
  }

  if (filteredData) {
    return {
      collection: filteredData.name,
      data: filteredData.items,
      isLoading,
      isError,
      error,
    }
  }
  return { collection: '', data: [], isLoading, isError, error }
}
