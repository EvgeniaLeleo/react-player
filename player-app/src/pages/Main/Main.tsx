import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import './Main.css';
import { LoginWindow } from '../../components/LoginWindow/LoginWindow';

const cnMain = cn('Main');

export const Main: FC<{}> = () => {
  return (
    <div className={cnMain()}>
      <LoginWindow></LoginWindow>
    </div>
  );
};
