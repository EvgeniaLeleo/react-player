import { useEffect } from 'react'

import { Centerblock } from '../../components/Centerblock/Centerblock'
import { TEXT } from '../../constants'
import { useAppDispatch, useAppSelector } from '../../hooks/hook'
import { updateHeader } from '../../store/headerSlice'

export const ProfilePage = () => {
  const dispatch = useAppDispatch()
  const lang = useAppSelector((state) => state.language.lang)
  const header = TEXT.header.profile[lang]

  useEffect(() => {
    dispatch(updateHeader(header))
  }, [])

  return <Centerblock header={header} isProfilePage={true} />
}
