import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';

import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import Logo from '../Logo/Logo';

import './LoginWindow.css';

const cnLoginWindow = cn('LoginWindow');

export const LoginWindow: FC<{}> = () => {
  return (
    <Box className={cnLoginWindow()}>
      <Logo textColor="default" />
      <Input
        inputPlaceholder="Логин"
        inputType="text"
        marginBottom="32px"
      ></Input>
      <Input
        inputPlaceholder="Пароль"
        inputType="password"
        marginBottom="40px"
      ></Input>
      <NavLink to={'/main'}>
        <Button buttonVariant="contained" buttonText="Войти"></Button>
      </NavLink>
      <NavLink to={'/register'}>
        <Button
          buttonVariant="outlined"
          buttonText="Зарегистрироваться"
        ></Button>
      </NavLink>
    </Box>
  );
};
