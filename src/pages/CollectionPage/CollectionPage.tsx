import { useParams } from 'react-router-dom'
import { useCollection } from '../../hooks/useCollection'
import { PageWrapper } from '../PageWrapper/PageWrapper'

export const CollectionPage = () => {
  const { id } = useParams()
  const idx = Number(id) || 1
  const { collection } = useCollection('', idx)

  return (
    <PageWrapper
      header={collection}
      collectionId={idx}
      tracksHook={useCollection}
    />
  )
}

// const lang = useAppSelector((state) => state.language.lang)
// header={TEXT.header.tracks[lang]}
// <div className="center">
//   <Tracks title={name} tracksHook={useCollection} collectionId={idx} />
// </div>
