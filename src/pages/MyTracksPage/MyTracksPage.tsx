import { COLLECTION, TEXT } from '../../constants'
import { useAppSelector } from '../../hooks/hook'
import { useFavoriteTracks } from '../../hooks/useFavoriteTracks'
import { PageWrapper } from '../PageWrapper/PageWrapper'

export const MyTracksPage = () => {
  const lang = useAppSelector((state) => state.language.lang)

  return (
    <PageWrapper
      header={TEXT.header[COLLECTION.mytracks][lang]}
      tracksHook={useFavoriteTracks}
    />
  )
}
