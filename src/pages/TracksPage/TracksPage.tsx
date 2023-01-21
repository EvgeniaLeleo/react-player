import { useEffect } from 'react'

import { Centerblock } from '../../components/Centerblock/Centerblock'
import { TEXT } from '../../constants'
import { useAppDispatch, useAppSelector } from '../../hooks/hook'
import { useSearchQueryTracks } from '../../hooks/useSearchQueryTracks'
import { updateHeader } from '../../store/headerSlice'
import { languageSelector } from '../../store/selectors/languageSelector'

export const TracksPage = () => {
  const lang = useAppSelector(languageSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(updateHeader(''))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Centerblock
      header={TEXT.header.tracks[lang]}
      tracksHook={useSearchQueryTracks}
    />
  )
}
