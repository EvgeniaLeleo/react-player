import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';
import { NavLink } from 'react-router-dom';
import { Box, FormControl } from '@mui/material';

import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import Logo from '../Logo/Logo';

import './RegisterWindow.css';

const cnRegisterWindow = cn('RegisterWindow');

export const RegisterWindow: FC<{}> = () => {
  return (
    <Box className={cnRegisterWindow()}>
      <Logo textColor="default" />
      <FormControl fullWidth>
        <Input
          inputPlaceholder="Логин"
          inputType="text"
          marginBottom="32px"
        ></Input>
        <Input
          inputPlaceholder="Пароль"
          inputType="password"
          marginBottom="32px"
        ></Input>
        <Input
          inputPlaceholder="Повторите пароль"
          inputType="password"
          marginBottom="40px"
        ></Input>
      </FormControl>
      <NavLink to={'/main'}>
        <Button
          buttonVariant="contained"
          buttonText="Зарегистрироваться"
        ></Button>
      </NavLink>
    </Box>
  );
};
