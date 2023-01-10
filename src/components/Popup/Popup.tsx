import { FC } from 'react';

import { useAppDispatch, useAppSelector } from '../../hook';
import { bgColorToBgColorLight } from '../../utils/colorUtils';
import { CheckedItems, FilterButtonName } from '../../types';
import { getFinalItems } from '../../utils/getFinalItems';
import {
  updateCheckedArtists,
  updateCheckedGenres,
  updateCheckedYears,
  updateFilteredTracks,
} from '../../store/filteredItemsSlice';

import style from './style.module.css';

export type PopupProps = {
  items: string[];
  buttonName: FilterButtonName;
  rows: 1 | 2 | 3;
};

const newFilter: CheckedItems = {
  checkedArtists: [],
  checkedYears: [],
  checkedGenres: [],
};

export const Popup: FC<PopupProps> = ({ items, rows, buttonName }) => {
  const dispatch = useAppDispatch();

  const textColor = useAppSelector((state) => state.colorTheme.textColor);
  const bgColor = useAppSelector((state) => state.colorTheme.bgColor);
  const bgColorLight = bgColorToBgColorLight(bgColor);

  const allTracksStore = useAppSelector((state) => state.tracks.allTracks);
  const checkedItems = useAppSelector((state) => state.filteredItems);
  const order = useAppSelector((state) => state.sortingSettings.order);

  newFilter[`${buttonName}`] = [...checkedItems[`${buttonName}`]];

  const searchedItems = useAppSelector(
    (state) => state.filteredItems.searchedTracks,
  );

  const searchedItemsCurrent = searchedItems.length
    ? searchedItems
    : allTracksStore;

  const handleChange = (item: string, buttonName: FilterButtonName) => {
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

    const finalFilteredTracks = getFinalItems(
      allTracksStore,
      newFilter,
      searchedItemsCurrent,
      order,
    );

    dispatch(updateFilteredTracks(finalFilteredTracks));
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

  const isChecked = (item: string, buttonName: FilterButtonName) => {
    return newFilter[`${buttonName}`].includes(item);
  };

  return (
    <div
      className={style.Popup}
      style={{
        height: height,
        display: display,
        color: textColor,
        backgroundColor: bgColorLight,
      }}
    >
      <div className={style.ContentWrapper}>
        {items.map((item) => (
          <span key={item}>
            <input
              className={style.Checkbox}
              type="checkbox"
              id={item}
              checked={isChecked(item, buttonName)}
              onChange={() => handleChange(item, buttonName)}
            ></input>
            <label htmlFor={item} className={style.Label} key={item}>
              {item}
            </label>
          </span>
        ))}
      </div>
    </div>
  );
};
