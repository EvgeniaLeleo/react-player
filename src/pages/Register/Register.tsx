import { FC } from 'react';

import { RegisterWindow } from '../../components/RegisterWindow/RegisterWindow';

import style from './style.module.css';

export const Register: FC<{}> = () => {
  return (
    <div className={style.Register}>
      <RegisterWindow />
    </div>
  );
};
