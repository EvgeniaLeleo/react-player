import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import './FilterButton.css';

const cnFilterButton = cn('FilterButton');

export type FilterButtonProps = {
  buttonText: string;
};

export const FilterButton: FC<FilterButtonProps> = ({ buttonText }) => {
  return (
    <button className={cnFilterButton()}>{buttonText.toLowerCase()}</button>
  );
};
