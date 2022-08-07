import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import './Button.css';

const cnButton = cn('Button');

export type ButtonProps = {
  type: 'filled' | 'outlined';
  buttonText: string;
};

export const Button: FC<ButtonProps> = ({ buttonText, type }) => {
  return (
    <button
      className={cnButton({
        type: type,
      })}
    >
      {buttonText}
    </button>
  );
};
