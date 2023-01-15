import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Centerblock } from '../../components/Centerblock/Centerblock'
import { useAppDispatch } from '../../hooks/hook'
import { useCollection } from '../../hooks/useCollection'
import { updateHeader } from '../../store/headerSlice'

export const CollectionPage = () => {
  const { id } = useParams()
  const idx = Number(id) || 1
  const { collection } = useCollection('', idx)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(updateHeader(''))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Centerblock
      header={collection}
      collectionId={idx}
      tracksHook={useCollection}
    />
  )
}
