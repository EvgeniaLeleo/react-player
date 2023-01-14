import { useState, useEffect } from 'react'

import { useGetCollectionQuery } from '../services/dataApi'
import { selectRefreshToken } from '../store/tokenSlice'
import { Collection } from '../types'
import { getSearchedData } from '../utils/getSearchedData'
import { useAppSelector } from './hook'
import { useRefreshToken } from './useRefreshToken'

export const useCollection = (query = '', collectionId = 1) => {
  const {
    data: tracks,
    isLoading,
    isError,
    error,
  } = useGetCollectionQuery(collectionId)

  const [searchedData, setSearchedData] = useState<Collection>()

  const refreshToken = useAppSelector(selectRefreshToken)
  const handleRefreshTokens = useRefreshToken()

  useEffect(() => {
    if (isError && 'status' in error && error.status === 401 && refreshToken) {
      handleRefreshTokens(refreshToken)
    }

    if (tracks) {
      filterData(tracks)
    }
    // eslint-disable-next-line
  }, [tracks, isError, query])

  const filterData = (tracksCollection: Collection) => {
    setSearchedData({
      ...tracksCollection,
      items: getSearchedData(tracksCollection.items, query),
    })
  }

  if (searchedData) {
    return {
      collection: searchedData.name,
      data: searchedData.items,
      isLoading,
      isError,
      error,
    }
  }

  return { collection: '', data: [], isLoading, isError, error }
}
