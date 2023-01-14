import { Centerblock } from '../../components/Centerblock/Centerblock'
import { COLLECTION, TEXT } from '../../constants'
import { useAppSelector } from '../../hooks/hook'

// import '../../index.css'

export const ProfilePage = () => {
  const lang = useAppSelector((state) => state.language.lang)

  return (
    <Centerblock
      header={TEXT.header[COLLECTION.profile][lang]}
      isProfilePage={true}
    />
  )
}

// <div className="center">
//   <Tracks title={name} tracksHook={useCollection} collectionId={idx} />
// </div>
