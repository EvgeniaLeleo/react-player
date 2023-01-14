import { useEffect } from 'react'

import { Centerblock } from '../../components/Centerblock/Centerblock'
import { TEXT } from '../../constants'
import { useAppDispatch, useAppSelector } from '../../hooks/hook'
import { useFavoriteTracks } from '../../hooks/useFavoriteTracks'
import { updateHeader } from '../../store/headerSlice'

export const MyTracksPage = () => {
  const lang = useAppSelector((state) => state.language.lang)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(updateHeader(''))
  }, [])

  return (
    <Centerblock
      header={TEXT.header.mytracks[lang]}
      tracksHook={useFavoriteTracks}
    />
  )
}
