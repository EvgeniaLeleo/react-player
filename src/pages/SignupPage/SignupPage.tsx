import { SignupForm } from '../../components/SignupForm/SignupForm'

import style from './style.module.css'

export const SignupPage = () => {
  return (
    <div className={style.Register}>
      <SignupForm />
    </div>
  )
}
