import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import { useAppDispatch, useAppSelector } from '../../hook';
import { bgColorToBgColorLight } from '../../utils/colorUtils';
import {
  updateCheckedArtists,
  updateCheckedGenres,
  updateCheckedYears,
} from '../../store/checkedItemsSlice';
import { TFilterButtonName } from '../../types';

import './Popup.css';

const cnPopup = cn('Popup');

export type PopupProps = {
  items: string[];
  buttonName: TFilterButtonName;
  rows: 1 | 2 | 3;
};

export const Popup: FC<PopupProps> = ({ items, rows, buttonName }) => {
  const dispatch = useAppDispatch();

  const bgColor = useAppSelector((state) => state.colorTheme.bgColor);
  const bgColorLight = bgColorToBgColorLight(bgColor);

  const localCheckedItems: {
    checkedArtists: string[];
    checkedYears: string[];
    checkedGenres: string[];
  } = {
    checkedArtists: JSON.parse(localStorage.getItem('checkedArtists') || '[]'),
    checkedYears: JSON.parse(localStorage.getItem('checkedYears') || '[]'),
    checkedGenres: JSON.parse(localStorage.getItem('checkedGenres') || '[]'),
  };

  const isChecked = (item: string, buttonName: TFilterButtonName) => {
    return localCheckedItems[`${buttonName}`].includes(item);
  };

  const handleChange = (item: string, buttonName: TFilterButtonName) => {
    localCheckedItems[`${buttonName}`].includes(item)
      ? localCheckedItems[`${buttonName}`].splice(
          localCheckedItems[`${buttonName}`].indexOf(item),
          1,
        )
      : localCheckedItems[`${buttonName}`].push(item);

    localStorage.setItem(
      `${buttonName}`,
      JSON.stringify(localCheckedItems[`${buttonName}`]),
    );

    if (buttonName === 'checkedArtists') {
      dispatch(updateCheckedArtists(localCheckedItems['checkedArtists']));
    }
    if (buttonName === 'checkedYears') {
      dispatch(updateCheckedYears(localCheckedItems['checkedYears']));
    }
    if (buttonName === 'checkedGenres') {
      dispatch(updateCheckedGenres(localCheckedItems['checkedGenres']));
    }

    // console.log(localCheckedItems);
    // console.log(localStorage);
  };

  let display;
  let height;

  if (rows === 1) {
    height = '92px';
  }
  if (rows === 2) {
    height = '138px';
  }
  if (rows === 3) {
    height = '184px';
  }

  return (
    <div
      className={cnPopup()}
      style={{
        height: height,
        display: display,
        backgroundColor: bgColorLight,
      }}
    >
      <div className={cnPopup('Content-Wrapper')}>
        {items.map((item) => (
          <span key={item}>
            <input
              className={cnPopup('Checkbox')}
              type="checkbox"
              id={item}
              checked={isChecked(item, buttonName)}
              onChange={() => handleChange(item, buttonName)}
            ></input>
            <label htmlFor={item} className={cnPopup('Label')} key={item}>
              {item}
            </label>
          </span>
        ))}
      </div>
    </div>
  );
};
