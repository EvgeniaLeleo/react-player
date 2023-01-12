import { useParams } from 'react-router-dom'
import { TEXT } from '../../constants'
import { useAppSelector } from '../../hooks/hook'
import { useCollection } from '../../hooks/useCollection'
import { PageWrapper } from '../PageWrapper/PageWrapper'

// import '../../index.css'

export const CollectionPage = () => {
  const { id } = useParams()
  const idx = Number(id) || 1
  const { collection } = useCollection('', idx)

  const lang = useAppSelector((state) => state.language.lang)

  return (
    <PageWrapper
      // header={TEXT.header.tracks[lang]}
      header={collection}
      collectionId={idx}
      tracksHook={useCollection}
    />
  )
}

// <div className="center">
//   <Tracks title={name} tracksHook={useCollection} collectionId={idx} />
// </div>
