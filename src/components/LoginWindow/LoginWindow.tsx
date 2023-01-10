import { FC } from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import { Box, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

import { useAppDispatch, useAppSelector } from '../../hook';
import { fetchLogin, selectIsAuth } from '../../store/auth/auth';
import { Button } from '../Button/Button';
import { Login } from '../../store/auth/types';

import style from './style.module.css';

export const LoginWindow: FC<{}> = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (val: Login) => {
    const data: any = await dispatch(fetchLogin(val));
    if (!data.payload) {
      const formError = {
        type: 'server',
        message: 'Неверный логин или пароль',
      };
      setError('password', formError);
      setError('email', formError);
    }
    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to="/main" />;
  }

  return (
    <Box className={style.LoginWindow}>
      <img
        className={style.Img}
        src="./skypro-logo.svg"
        alt="skypro-logo"
        height="21px"
      ></img>
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
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/,
              message:
                'Не менее 6 символов, цифры, латинские буквы в верхнем и нижнем регистре',
            },
          })}
          helperText={errors.password?.message}
          error={Boolean(errors.password?.message)}
        />
        <Button
          buttonType="submit"
          buttonVariant="contained"
          buttonText="Войти"
        ></Button>
      </form>
      <NavLink to={'/register'}>
        <Button
          buttonVariant="outlined"
          buttonText="Зарегистрироваться"
        ></Button>
      </NavLink>
    </Box>
  );
};
