import React, { useState } from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import { NumberOfCheckedItems } from '../../constants';
import { Popup } from '../Popup/Popup';
import { useAppSelector } from '../../hook';
import { extradarkToDark, extradarkToHover } from '../../utils/utils';

import './FilterButton.css';
import { ButtonChangeColor } from '../changeColor/ButtonChangeColor/ButtonChangeColor';

const cnFilterButton = cn('FilterButton');

export type FilterButtonProps = {
  buttonText: string;
  checkItems: string[];
};

export const FilterButton: FC<FilterButtonProps> = ({
  buttonText,
  checkItems,
}) => {
  const textColor = useAppSelector((state) => state.colorTheme.textColor);
  const decorativeColor = useAppSelector(
    (state) => state.colorTheme.decorativeColor,
  );

  const colorHover = extradarkToHover(decorativeColor);
  const colorDark = extradarkToDark(decorativeColor);

  const [clicked, setClicked] = useState(false);
  const [color, setColor] = useState(textColor);

  const handleClick = () => {
    setClicked(!clicked);
    setColor(!clicked ? colorDark : textColor);
  };

  let display;
  clicked ? (display = 'block') : (display = 'none');

  return (
    <div className={cnFilterButton('Wrapper')}>
      <ButtonChangeColor
        className={cnFilterButton()}
        color={color}
        colorHover={colorHover}
        colorActive={colorDark}
        borderColor={color}
        onClick={handleClick}
      >
        {buttonText.toLowerCase()}
        <div
          className={cnFilterButton('NumberOfCheckedItems')}
          style={{ display: display, backgroundColor: decorativeColor }}
        >
          {NumberOfCheckedItems}
        </div>
      </ButtonChangeColor>
      <Popup items={checkItems} rows={2} isVisible={clicked}></Popup>
    </div>
  );
};
