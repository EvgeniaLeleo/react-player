import { FC } from 'react';
import { TextField } from '@mui/material';

import './Input.css';

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
      // className={cnInput()}
      sx={{ marginBottom: marginBottom }}
    />
  );
};
