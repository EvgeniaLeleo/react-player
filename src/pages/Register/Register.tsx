import { FC } from 'react';
import { cn } from '@bem-react/classname';

import { RegisterWindow } from '../../components/RegisterWindow/RegisterWindow';

import './Register.css';

const cnRegister = cn('Register');

export const Register: FC<{}> = () => {
  return (
    <div className={cnRegister()}>
      <RegisterWindow></RegisterWindow>
    </div>
  );
};
