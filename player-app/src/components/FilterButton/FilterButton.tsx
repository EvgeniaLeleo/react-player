import React, { useRef, useState } from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import { NumberOfCheckedItems } from '../../constants';
import { Popup } from '../Popup/Popup';
import { useAppSelector, useOnClickOutside } from '../../hook';
import { extradarkToDark, extradarkToHover } from '../../utils/colorUtils';

import './FilterButton.css';
import { ButtonChangeColor } from '../changeColor/ButtonChangeColor/ButtonChangeColor';

const cnFilterButton = cn('FilterButton');

export type FilterButtonProps = {
  buttonText: string;
  checkItems: string[];
  rows: 1 | 2 | 3;
};

export const FilterButton: FC<FilterButtonProps> = ({
  buttonText,
  checkItems,
  rows,
}) => {
  const textColor = useAppSelector((state) => state.colorTheme.textColor);
  const decorativeColor = useAppSelector(
    (state) => state.colorTheme.decorativeColor,
  );

  const colorHover = extradarkToHover(decorativeColor);
  const colorDark = extradarkToDark(decorativeColor);

  const ref = useRef(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [color, setColor] = useState(textColor);

  useOnClickOutside(ref, () => {
    setIsPopupVisible(false);
    setColor(textColor);
  });

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
    setColor(colorDark);
  };

  return (
    <div className={cnFilterButton('Wrapper')}>
      <ButtonChangeColor
        className={cnFilterButton()}
        color={color}
        colorHover={colorHover}
        colorActive={colorDark}
        borderColor={color}
        onClick={togglePopup}
      >
        {buttonText.toLowerCase()}
        {isPopupVisible && (
          <div
            className={cnFilterButton('NumberOfCheckedItems')}
            style={{ backgroundColor: decorativeColor }}
          >
            {NumberOfCheckedItems}
          </div>
        )}
      </ButtonChangeColor>
      <div ref={ref}>
        {isPopupVisible && <Popup items={checkItems} rows={rows}></Popup>}
      </div>
    </div>
  );
};
