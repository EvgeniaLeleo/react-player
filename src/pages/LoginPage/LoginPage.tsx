import { useEffect } from 'react'

import { LoginForm } from '../../components/LoginForm/LoginForm'
import { useAppDispatch } from '../../hooks/hook'
import { updateHeader } from '../../store/headerSlice'

import style from './style.module.css'

export const LoginPage = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(updateHeader(''))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={style.Login}>
      <LoginForm />
    </div>
  )
}
