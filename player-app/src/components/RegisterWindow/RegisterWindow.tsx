import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';
import { Box, TextField } from '@mui/material';

import { Button } from '../Button/Button';

import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../hook';
import { fetchRegister, selectIsAuth } from '../../store/auth/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import { Login } from '../../store/auth/types';

import './RegisterWindow.css';

const cnRegisterWindow = cn('RegisterWindow');

export const RegisterWindow: FC<{}> = () => {
  const navigate = useNavigate();
  const isAuth = useAppSelector(selectIsAuth);
  const dispatch = useAppDispatch();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (val: Login) => {
    const data: any = await dispatch(fetchRegister(val));
    if (!data.payload) {
      alert('У вас уже есть активная музыкальная подписка');
      navigate('/');
    }
    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    }
    reset();
  };

  if (isAuth) {
    return <Navigate to="/main" />;
  }

  return (
    <Box className={cnRegisterWindow()}>
      <img
        className={cnRegisterWindow('Img')}
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
          label="Имя аккаунта *"
          error={Boolean(errors.fullName?.message)}
          type="text"
          helperText={errors.fullName?.message}
          {...register('fullName', {
            required: 'Укажите полное имя',
            minLength: {
              value: 3,
              message: 'Минимум из 3 символов',
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
          buttonText="Зарегистрироваться"
        ></Button>
      </form>
    </Box>
  );
};
