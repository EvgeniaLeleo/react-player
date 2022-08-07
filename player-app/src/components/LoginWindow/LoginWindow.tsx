import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

import './LoginWindow.css';

const cnLoginWindow = cn('LoginWindow');

// export type LoginWindowProps = {
//   inputPlaceholder: 'Логин' | 'Пароль' | 'Повторите пароль';
// };

export const LoginWindow: FC<{}> = () => {
  return (
    <div className={cnLoginWindow()}>
      <img
        className={cnLoginWindow('Img')}
        src="./skypro-logo.svg"
        alt="skypro-logo"
      ></img>
      <Input inputPlaceholder="Логин" marginBottom="32px"></Input>
      <Input inputPlaceholder="Пароль" marginBottom="56px"></Input>
      <Button type="filled" buttonText="Войти"></Button>
      <Button type="outlined" buttonText="Зарегистрироваться"></Button>
    </div>
  );
};
