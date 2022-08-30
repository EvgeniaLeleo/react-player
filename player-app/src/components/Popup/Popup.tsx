import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import { useAppSelector } from '../../hook';

import './Popup.css';
import { bgColorToBgColorLight } from '../../utils/utils';

const cnPopup = cn('Popup');

export type PopupProps = {
  items: string[];
  rows: 1 | 2;
};

export const Popup: FC<PopupProps> = ({ items, rows }) => {
  const bgColor = useAppSelector((state) => state.colorTheme.bgColor);
  const bgColorLight = bgColorToBgColorLight(bgColor);

  let display;
  let height;
  // isVisible ? (display = 'block') : (display = 'none');
  rows === 1 ? (height = '92px') : (height = '138px');

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
          <span key={crypto.randomUUID()}>
            <input
              className={cnPopup('Checkbox')}
              type="checkbox"
              id={item}
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
