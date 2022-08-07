import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import './Input.css';

const cnInput = cn('Input');

export type InputProps = {
  inputPlaceholder: 'Логин' | 'Пароль' | 'Повторите пароль';
  marginBottom: string;
};

export const Input: FC<InputProps> = ({ inputPlaceholder, marginBottom }) => {
  return (
    <input
      className={cnInput()}
      placeholder={inputPlaceholder}
      style={{ marginBottom: marginBottom }}
    />
  );
};
