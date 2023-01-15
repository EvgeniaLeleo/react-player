import { FC, useEffect, useState } from 'react'
import { TextField } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Navigate, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

import { Button } from '../Button/Button'
import { useAppDispatch } from '../../hooks/hook'
import { SignupUser } from '../../types'
import { useLoadCredentialsFromCookies } from '../../hooks/useLoadCredentialsFromCookies'
import { useSignupMutation, useTokenMutation } from '../../services/dataApi'
import { setToken } from '../../store/tokenSlice'
import { ROUTES } from '../../routes'

import style from './style.module.css'

// TODO обработка занятого логина или пароля

export const SignupForm: FC<{}> = () => {
  const isLoggedIn = useLoadCredentialsFromCookies()

  const [signUp, { error }] = useSignupMutation()

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupUser>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
    mode: 'onTouched',
  })

  const [, setCookies] = useCookies(['access', 'refresh'])
  const [getTokens, { data: userTokens }] = useTokenMutation()

  const [isDisabled, setIsDisabled] = useState<boolean>(false)

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

  const onSubmit: SubmitHandler<SignupUser> = async (data) => {
    // setError('')
    setIsDisabled(true)
    try {
      const user = await signUp({
        username: data.username,
        password: data.password,
        email: data.email,
      }).unwrap()

      if (user)
        await getTokens({
          email: data.email,
          password: data.password,
        }).unwrap()

      setIsDisabled(false)
      navigate(ROUTES.main)
    } catch (error) {
      setIsDisabled(false)
      // setError(getErrorMessage(error as AuthError))
    }
  }

  if (isLoggedIn) {
    return <Navigate to="/main" />
  }

  return (
    <div className={style.SignupForm}>
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
          label="Имя аккаунта *"
          error={Boolean(errors.username?.message)}
          type="text"
          helperText={errors.username?.message}
          {...register('username', {
            required: 'Укажите полное имя',
            minLength: {
              value: 3,
              message: 'Минимум 3 символа',
            },
          })}
        />
        <TextField
          sx={{ height: '70px' }}
          autoComplete="off"
          fullWidth
          variant="standard"
          label="E-Mail *"
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
          sx={{ height: '70px', marginBottom: '30px' }}
          autoComplete="off"
          fullWidth
          variant="standard"
          label="Пароль *"
          type="password"
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

        <Button
          buttonType="submit"
          buttonVariant="contained"
          buttonText="Зарегистрироваться"
          disabled={isDisabled}
        />
      </form>
    </div>
  )
}
