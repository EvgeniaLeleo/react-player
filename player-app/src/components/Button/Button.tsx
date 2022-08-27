import React from 'react';
import { FC } from 'react';
import { Button as MUIButton } from '@mui/material';

export type ButtonProps = {
  buttonVariant: 'contained' | 'outlined';
  buttonText: string;
};

export const Button: FC<ButtonProps> = ({ buttonText, buttonVariant }) => {
  return (
    <MUIButton
      color="secondary"
      variant={buttonVariant}
      sx={{
        width: '278px',
        height: '52px',
        mb: 2.5,
        fontSize: '18px',
        textTransform: 'capitalize',
      }}
    >
      {buttonText}
    </MUIButton>
  );
};
