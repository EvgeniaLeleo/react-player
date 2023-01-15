import { useEffect } from 'react'

import { Centerblock } from '../../components/Centerblock/Centerblock'
import { TEXT } from '../../constants'
import { useAppDispatch, useAppSelector } from '../../hooks/hook'
import { useFavoriteTracks } from '../../hooks/useFavoriteTracks'
import { updateHeader } from '../../store/headerSlice'
import { languageSelector } from '../../store/selectors/languageSelector'

export const MyTracksPage = () => {
  const lang = useAppSelector(languageSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(updateHeader(''))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Centerblock
      header={TEXT.header.mytracks[lang]}
      tracksHook={useFavoriteTracks}
    />
  )
}
