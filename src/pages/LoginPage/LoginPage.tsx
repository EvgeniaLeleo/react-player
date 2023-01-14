import { LoginForm } from '../../components/LoginForm/LoginForm'
import { useAppDispatch } from '../../hooks/hook'
import { updateHeader } from '../../store/headerSlice'

import style from './style.module.css'

export const LoginPage = () => {
  const dispatch = useAppDispatch()
  dispatch(updateHeader(''))

  return (
    <div className={style.Login}>
      <LoginForm />
    </div>
  )
}
