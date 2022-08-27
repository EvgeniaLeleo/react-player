import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import './Login.css';
import { LoginWindow } from '../../components/LoginWindow/LoginWindow';

const cnLogin = cn('Login');

export const Login: FC<{}> = () => {
  return (
    <div className={cnLogin()}>
      <LoginWindow></LoginWindow>
    </div>
  );
};
