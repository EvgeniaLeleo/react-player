import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import './Input.css';
import { TextField } from '@mui/material';

const cnInput = cn('Input');

export type InputProps = {
  inputPlaceholder: 'Логин' | 'Пароль' | 'Повторите пароль';
  marginBottom: string;
  inputType: string;
};

export const Input: FC<InputProps> = ({
  inputPlaceholder,
  inputType,
  marginBottom,
}) => {
  return (
    <TextField
      fullWidth
      label={inputPlaceholder}
      type={inputType}
      variant="standard"
      className={cnInput()}
      sx={{ marginBottom: marginBottom }}
    />
  );
};
