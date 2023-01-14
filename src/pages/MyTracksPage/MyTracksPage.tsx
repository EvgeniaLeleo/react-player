import { Centerblock } from '../../components/Centerblock/Centerblock'
import { COLLECTION, TEXT } from '../../constants'
import { useAppSelector } from '../../hooks/hook'
import { useFavoriteTracks } from '../../hooks/useFavoriteTracks'

export const MyTracksPage = () => {
  const lang = useAppSelector((state) => state.language.lang)

  return (
    <Centerblock
      header={TEXT.header[COLLECTION.mytracks][lang]}
      tracksHook={useFavoriteTracks}
    />
  )
}
