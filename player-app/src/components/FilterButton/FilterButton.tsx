import React, { useState } from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import './FilterButton.css';
import {
  checkedItems,
  COLOR,
  COLOR_DARK,
  COLOR_HOVER,
  NumberOfCheckedItems,
} from '../../constants';
import { Popup } from '../Popup/Popup';
import { styled } from '@mui/material';
import { useAppSelector } from '../../hook';
import { lightenDarkenColor } from '../../utils/utils';

const cnFilterButton = cn('FilterButton');

export type FilterButtonProps = {
  buttonText: string;
};

const CustomButton = styled('button')`
color: ${COLOR}
border-color: ${COLOR};

  &:hover {
    border-color: ${COLOR_HOVER} !important;
    color: ${COLOR_HOVER} !important; 
  }

  &:active {
    border-color: ${COLOR_DARK} !important;
    color: ${COLOR_DARK} !important; 
  }
`;

export const FilterButton: FC<FilterButtonProps> = ({ buttonText }) => {
  const textColor = useAppSelector((state) => state.colorTheme.textColor);
  const decorativeColor = useAppSelector(
    (state) => state.colorTheme.decorativeColor,
  );

  const decorativeColorDark = lightenDarkenColor(decorativeColor, 60);

  const [clicked, setClicked] = useState(false);
  const [color, setColor] = useState(textColor);

  const handleClick = () => {
    setClicked(!clicked);
    setColor(!clicked ? decorativeColorDark : textColor);
    console.log(color);
  };

  let display;
  clicked ? (display = 'block') : (display = 'none');

  return (
    <div className={cnFilterButton('Wrapper')}>
      <CustomButton
        className={cnFilterButton()}
        style={{ borderColor: color, color: color }}
        onClick={handleClick}
      >
        {buttonText.toLowerCase()}
        <div
          className={cnFilterButton('NumberOfCheckedItems')}
          style={{ display: display }}
        >
          {NumberOfCheckedItems}
        </div>
      </CustomButton>
      <Popup items={checkedItems} rows={2} isVisible={clicked}></Popup>
    </div>
  );
};
