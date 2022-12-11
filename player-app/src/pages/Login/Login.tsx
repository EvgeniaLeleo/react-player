import { FC } from 'react';
import { cn } from '@bem-react/classname';

import { LoginWindow } from '../../components/LoginWindow/LoginWindow';

import './Login.css';

const cnLogin = cn('Login');

export const Login: FC<{}> = () => {
  return (
    <div className={cnLogin()}>
      <LoginWindow></LoginWindow>
    </div>
  );
};
