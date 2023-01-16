import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TextField } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import cn from 'classnames'

import { useAppDispatch } from '../../hooks/hook'
import { Button } from '../Button/Button'
import { ROUTES } from '../../routes'
import { useCookies } from 'react-cookie'
import { setToken } from '../../store/tokenSlice'
import { useTokenMutation } from '../../services/dataApi'
import { AuthError, LoginUser } from '../../types'
import { useLoadCredentialsFromCookies } from '../../hooks/useLoadCredentialsFromCookies'

import style from './style.module.css'
import { getErrorMessage } from '../../utils/getErrorMessage'

export const LoginForm = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [getTokens, { data: userTokens }] = useTokenMutation()
  const [error, setError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  })

  const [isDisabled, setIsDisabled] = useState<boolean>(false)

  const [, setCookies] = useCookies(['access', 'refresh'])

  useEffect(() => {
    if (userTokens) {
      setCookies('access', userTokens.access)
      setCookies('refresh', userTokens.refresh)

      dispatch(
        setToken({
          access: userTokens.access,
          refresh: userTokens.refresh,
        })
      )
    }
    // eslint-disable-next-line
  }, [userTokens])

  const isLoggedIn = useLoadCredentialsFromCookies()

  useEffect(() => {
    if (isLoggedIn) {
      navigate(ROUTES.main)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSignup = () => {
    navigate(ROUTES.signup)
  }

  const onSubmit: SubmitHandler<LoginUser> = async (data) => {
    setError('')
    setIsDisabled(true)
    try {
      await getTokens({
        email: data.email,
        password: data.password,
      }).unwrap()
      setIsDisabled(false)
      navigate(ROUTES.main)
    } catch (error) {
      setIsDisabled(false)
      console.log(error)
      setError(getErrorMessage(error as AuthError))
    }
  }

  return (
    <div className={style.LoginForm}>
      <img
        className={style.Img}
        src="./assets/images/skypro-logo.svg"
        alt="skypro-logo"
        height="21px"
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          sx={{ height: '70px' }}
          autoComplete="off"
          fullWidth
          variant="standard"
          label="E-Mail"
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          {...register('email', {
            required: 'Укажите почту',
            pattern: {
              value: /^([\w.*-]+@([\w-]+\.)+[\w-]{2,3})?$/,
              message: 'Не верный формат e-mail',
            },
          })}
        />
        <TextField
          sx={{ height: '70px' }}
          autoComplete="off"
          fullWidth
          type="password"
          variant="standard"
          label="Пароль"
          {...register('password', {
            required: 'Укажите пароль',
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
              message:
                'Не менее 8 символов, цифры, латинские буквы в верхнем и нижнем регистре',
            },
          })}
          helperText={errors.password?.message}
          error={Boolean(errors.password?.message)}
        />

        <p className={cn(style.error, style.back)}>
          {error && <span>{error}</span>}
        </p>

        <Button
          buttonType="submit"
          buttonVariant="contained"
          buttonText="Войти"
          disabled={isDisabled}
        />
      </form>

      <Button
        onClick={handleSignup}
        buttonVariant="outlined"
        buttonText="Зарегистрироваться"
        disabled={isDisabled}
      />
    </div>
  )
}
