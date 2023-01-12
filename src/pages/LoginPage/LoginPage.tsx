import { FC } from 'react'

import { LoginForm } from '../../components/LoginForm/LoginForm'

import style from './style.module.css'

export const LoginPage: FC<{}> = () => {
  return (
    <div className={style.Login}>
      <LoginForm />
    </div>
  )
}
