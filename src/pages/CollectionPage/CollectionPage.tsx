import { useParams } from 'react-router-dom'
import { Centerblock } from '../../components/Centerblock/Centerblock'
import { useCollection } from '../../hooks/useCollection'

export const CollectionPage = () => {
  const { id } = useParams()
  const idx = Number(id) || 1
  const { collection } = useCollection('', idx)

  return (
    <Centerblock
      header={collection}
      collectionId={idx}
      tracksHook={useCollection}
    />
  )
}
