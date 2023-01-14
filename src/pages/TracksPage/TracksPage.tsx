import { Centerblock } from '../../components/Centerblock/Centerblock'
import { COLLECTION, TEXT } from '../../constants'
import { useAppSelector } from '../../hooks/hook'
import { useFilteredTracks } from '../../hooks/useFilteredTracks'

// import style from './style.module.css';

export const TracksPage = () => {
  const lang = useAppSelector((state) => state.language.lang)

  return (
    <Centerblock
      header={TEXT.header[COLLECTION.tracks][lang]}
      tracksHook={useFilteredTracks}
    />
  )
}
