import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import './Register.css';
import { RegisterWindow } from '../../components/RegisterWindow/RegisterWindow';

const cnRegister = cn('Register');

export const Register: FC<{}> = () => {
  return (
    <div className={cnRegister()}>
      <RegisterWindow></RegisterWindow>
    </div>
  );
};
