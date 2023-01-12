import { COLLECTION, TEXT } from '../../constants'
import { useAppSelector } from '../../hooks/hook'
import { PageWrapper } from '../PageWrapper/PageWrapper'

// import '../../index.css'

export const ProfilePage = () => {
  const lang = useAppSelector((state) => state.language.lang)

  return (
    <PageWrapper
      header={TEXT.header[COLLECTION.profile][lang]}
      isProfilePage={true}
    />
  )
}

// <div className="center">
//   <Tracks title={name} tracksHook={useCollection} collectionId={idx} />
// </div>
