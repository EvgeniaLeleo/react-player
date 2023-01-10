import { FC } from 'react';

import { LoginWindow } from '../../components/LoginWindow/LoginWindow';

import style from './style.module.css';

export const Login: FC<{}> = () => {
  return (
    <div className={style.Login}>
      <LoginWindow></LoginWindow>
    </div>
  );
};
