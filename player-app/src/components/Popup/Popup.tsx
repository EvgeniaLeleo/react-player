import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import { useAppDispatch, useAppSelector } from '../../hook';
import { bgColorToBgColorLight } from '../../utils/colorUtils';
import { TCheckedItems, TFilterButtonName } from '../../types';
import { getFinalItems } from '../../utils/getFinalItems';
import {
  updateCheckedArtists,
  updateCheckedGenres,
  updateCheckedYears,
  updateFilteredTracks,
} from '../../store/filteredItemsSlice';

import './Popup.css';

const cnPopup = cn('Popup');

export type PopupProps = {
  items: string[];
  buttonName: TFilterButtonName;
  rows: 1 | 2 | 3;
};

const newFilter: TCheckedItems = {
  checkedArtists: [],
  checkedYears: [],
  checkedGenres: [],
};

export const Popup: FC<PopupProps> = ({ items, rows, buttonName }) => {
  const dispatch = useAppDispatch();

  const bgColor = useAppSelector((state) => state.colorTheme.bgColor);
  const bgColorLight = bgColorToBgColorLight(bgColor);

  // const filteredTracksStore = useAppSelector(
  //   (state) => state.checkedItems.filteredTracks,
  // );
  // console.log('--> filteredTracksStore', filteredTracksStore);

  const allTracksStore = useAppSelector((state) => state.tracks.allTracks);

  const checkedItems = useAppSelector((state) => state.filteredItems);

  // console.log('--> checkedItems', checkedItems);

  newFilter[`${buttonName}`] = [...checkedItems[`${buttonName}`]];
  // console.log('--> newFilter', newFilter);

  const searchedItems = useAppSelector(
    (state) => state.filteredItems.searchedTracks,
  );

  const searchedItemsCurrent = searchedItems.length
    ? searchedItems
    : allTracksStore;

  const handleChange = (item: string, buttonName: TFilterButtonName) => {
    newFilter[`${buttonName}`] = [...checkedItems[`${buttonName}`]];

    newFilter[`${buttonName}`].includes(item)
      ? newFilter[`${buttonName}`].splice(
          newFilter[`${buttonName}`].indexOf(item),
          1,
        )
      : newFilter[`${buttonName}`].push(item);

    if (buttonName === 'checkedArtists') {
      dispatch(updateCheckedArtists(newFilter['checkedArtists']));
    }
    if (buttonName === 'checkedYears') {
      dispatch(updateCheckedYears(newFilter['checkedYears']));
    }
    if (buttonName === 'checkedGenres') {
      dispatch(updateCheckedGenres(newFilter['checkedGenres']));
    }

    // console.log(
    //   '--> getFinalItems()',
    //   getFinalItems(checkedItems[`${buttonName}`]),
    // );

    // console.log('--> getFinalItems', newFilter[`${buttonName}`]);
    // console.log(
    //   '--> getFinalItems',
    //   getFinalItems(allTracksStore, newFilter[`${buttonName}`]),
    // );

    const finalFilteredTracks = getFinalItems(
      allTracksStore,
      newFilter,
      searchedItemsCurrent,
    );

    dispatch(updateFilteredTracks(finalFilteredTracks));

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

  const isChecked = (item: string, buttonName: TFilterButtonName) => {
    return newFilter[`${buttonName}`].includes(item);
  };

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
