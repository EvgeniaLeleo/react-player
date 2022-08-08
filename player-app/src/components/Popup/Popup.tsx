import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import './Popup.css';

const cnPopup = cn('Popup');

export type PopupProps = {
  items: string[];
  rows: 1 | 2;
};

export const Popup: FC<PopupProps> = ({ items, rows }) => {
  return (
    <div
      className={cnPopup()}
      style={rows === 1 ? { height: '92px' } : { height: '138px' }}
    >
      <div className={cnPopup('Content-Wrapper')}>
        {items.map((item) => (
          <>
            <input
              className={cnPopup('Checkbox')}
              type="checkbox"
              id={item}
            ></input>
            <label htmlFor={item} className={cnPopup('Label')} key={item}>
              {item}
            </label>
          </>
        ))}
      </div>
    </div>
  );
};
