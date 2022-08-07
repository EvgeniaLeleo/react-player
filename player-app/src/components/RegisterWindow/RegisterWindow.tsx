import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

import './RegisterWindow.css';

const cnRegisterWindow = cn('RegisterWindow');

export const RegisterWindow: FC<{}> = () => {
  return (
    <div className={cnRegisterWindow()}>
      <img
        className={cnRegisterWindow('Img')}
        src="./skypro-logo.svg"
        alt="skypro-logo"
      ></img>
      <Input inputPlaceholder="Логин" marginBottom="32px"></Input>
      <Input inputPlaceholder="Пароль" marginBottom="32px"></Input>
      <Input inputPlaceholder="Повторите пароль" marginBottom="56px"></Input>
      <Button type="filled" buttonText="Зарегистрироваться"></Button>
    </div>
  );
};
