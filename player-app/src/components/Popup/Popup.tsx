import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import './Popup.css';
import { useAppSelector } from '../../hook';
import { lightenDarkenColor } from '../../utils/utils';

const cnPopup = cn('Popup');

export type PopupProps = {
  items: string[];
  rows: 1 | 2;
  isVisible: boolean;
};

export const Popup: FC<PopupProps> = ({ items, rows, isVisible }) => {
  const bgColor = useAppSelector((state) => state.colorTheme.bgColor);
  const bgColorLight = lightenDarkenColor(bgColor, 10);

  let display;
  let height;
  isVisible ? (display = 'block') : (display = 'none');
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
