import React, { useState } from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import './FilterButton.css';
import { checkedItems, NumberOfCheckedItems } from '../../constants';
import { Popup } from '../Popup/Popup';

const cnFilterButton = cn('FilterButton');

export type FilterButtonProps = {
  buttonText: string;
};

export const FilterButton: FC<FilterButtonProps> = ({ buttonText }) => {
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);
  };

  let display;
  let borderColor;
  // let borderColorHover;
  state ? (display = 'block') : (display = 'none');
  if (state) {
    borderColor = '#ad61ff';
  } else {
    borderColor = '#ffffff';
    // borderColorHover = '#D9B6FF';
  }

  return (
    <div className={cnFilterButton('Wrapper')}>
      <button
        className={cnFilterButton()}
        style={{ borderColor: borderColor }}
        onClick={handleClick}
      >
        {buttonText.toLowerCase()}
        <div
          className={cnFilterButton('NumberOfCheckedItems')}
          style={{ display: display }}
        >
          {NumberOfCheckedItems}
        </div>
      </button>
      <Popup items={checkedItems} rows={1} isVisible={state}></Popup>
    </div>
  );
};
