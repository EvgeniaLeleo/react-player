import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, TextField } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'

// TODO обработка неверного email или пароля

import { useAppDispatch } from '../../hooks/hook'
import { Button } from '../Button/Button'
import { ROUTES } from '../../routes'
import { useLogout } from '../../hooks/useLogout'
import { useCookies } from 'react-cookie'
import { setToken } from '../../store/tokenSlice'
import { useTokenMutation } from '../../services/tracksDataApi'
import { LoginUser } from '../../types'

import style from './style.module.css'

export const LoginForm = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [getTokens, { data: userTokens, error }] = useTokenMutation()

  const {
    register,
    handleSubmit,
    // setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  })

  const logout = useLogout()
  const [isDisabled, setIsDisabled] = useState<boolean>(false)

  useEffect(() => {
    logout()
    console.log('logout')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [, setCookies] = useCookies(['access', 'refresh'])

  useEffect(() => {
    if (userTokens) {
      setCookies('access', userTokens.access)
      setCookies('refresh', userTokens.refresh)

      // console.log('userTokens', userTokens)

      dispatch(
        setToken({
          access: userTokens.access,
          refresh: userTokens.refresh,
        })
      )
    }
    // eslint-disable-next-line
  }, [userTokens])

  const handleSignup = () => {
    navigate(ROUTES.signup)
  }

  const onSubmit: SubmitHandler<LoginUser> = async (data) => {
    // setError('')
    setIsDisabled(true)
    try {
      // if (user)
      await getTokens({
        email: data.email,
        password: data.password,
      }).unwrap()
      setIsDisabled(false)
      navigate(ROUTES.main)
    } catch (error) {
      setIsDisabled(false)
      console.log(error)
      // setError(getErrorMessage(error as AuthError))
    }
  }

  // TODO Вставить после реализации кнопки выхода
  // if (isLoggedIn) {
  //   return <Navigate to="/main" />
  // }

  return (
    <>
      <Box className={style.LoginForm}>
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
            sx={{ height: '100px' }}
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
      </Box>
    </>
  )
}

// const onSubmit = async (val: Login) => {
//   const data: any = await dispatch(fetchLogin(val))
// const onSubmit = async () => {
//   if (!data.payload) {
//     const formError = {
//       type: 'server',
//       message: 'Неверный логин или пароль',
//     }
//     setError('password', formError)
//     setError('email', formError)
//   }
//   if ('token' in data.payload) {
//     window.localStorage.setItem('token', data.payload.token)
//   }
// }
// if (isAuth) {
//   return <Navigate to="/main" />
// }
// }
