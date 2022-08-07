import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import './Popup.css';

const cnPopup = cn('Popup');

export type PopupProps = {
  items: string[];
};

export const Popup: FC<PopupProps> = ({ items }) => {
  return (
    <div className={cnPopup()}>
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
  );
};
