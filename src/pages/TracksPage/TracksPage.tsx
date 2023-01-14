import { Centerblock } from '../../components/Centerblock/Centerblock'
import { TEXT } from '../../constants'
import { useAppDispatch, useAppSelector } from '../../hooks/hook'
import { useFilteredTracks } from '../../hooks/useFilteredTracks'
import { updateHeader } from '../../store/headerSlice'

export const TracksPage = () => {
  const lang = useAppSelector((state) => state.language.lang)
  const dispatch = useAppDispatch()
  dispatch(updateHeader(''))

  return (
    <Centerblock
      header={TEXT.header.tracks[lang]}
      tracksHook={useFilteredTracks}
    />
  )
}
