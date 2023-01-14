import { SignupForm } from '../../components/SignupForm/SignupForm'
import { useAppDispatch } from '../../hooks/hook'
import { updateHeader } from '../../store/headerSlice'

import style from './style.module.css'

export const SignupPage = () => {
  const dispatch = useAppDispatch()
  dispatch(updateHeader(''))

  return (
    <div className={style.Register}>
      <SignupForm />
    </div>
  )
}
