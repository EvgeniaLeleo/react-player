import { useEffect } from 'react'

import { Centerblock } from '../../components/Centerblock/Centerblock'
import { TEXT } from '../../constants'
import { useAppDispatch, useAppSelector } from '../../hooks/hook'
import { updateHeader } from '../../store/headerSlice'
import { languageSelector } from '../../store/selectors/languageSelector'

export const ProfilePage = () => {
  const dispatch = useAppDispatch()
  const lang = useAppSelector(languageSelector)
  const header = TEXT.header.profile[lang]

  console.log('header page', header)

  useEffect(() => {
    dispatch(updateHeader(header))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <Centerblock header={header} isProfilePage={true} />
}
