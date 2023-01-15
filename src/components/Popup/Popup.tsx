import { FC } from 'react'

import { useAppDispatch, useAppSelector } from '../../hooks/hook'
import { bgColorToBgColorLight } from '../../utils/colorUtils'
import { CheckedItems, FilterButtonName } from '../../types'
import {
  updateCheckedArtists,
  updateCheckedGenres,
  updateCheckedYears,
} from '../../store/filteredItemsSlice'
import {
  bgColorSelector,
  textColorSelector,
} from '../../store/selectors/colorThemeSelector'
import { filteredItemsSelector } from '../../store/selectors/filteredItemsSelector'

import style from './style.module.css'

type Props = {
  items: string[]
  buttonName: FilterButtonName
  rows: 1 | 2 | 3
}

const newFilter: CheckedItems = {
  checkedArtists: [],
  checkedYears: [],
  checkedGenres: [],
}

export const Popup: FC<Props> = ({ items, rows, buttonName }) => {
  const dispatch = useAppDispatch()

  const textColor = useAppSelector(textColorSelector)
  const bgColor = useAppSelector(bgColorSelector)
  const checkedItems = useAppSelector(filteredItemsSelector)

  const bgColorLight = bgColorToBgColorLight(bgColor)

  newFilter[`${buttonName}`] = [...checkedItems[`${buttonName}`]]

  const handleChange = (item: string, buttonName: FilterButtonName) => {
    newFilter[`${buttonName}`] = [...checkedItems[`${buttonName}`]]

    newFilter[`${buttonName}`].includes(item)
      ? newFilter[`${buttonName}`].splice(
          newFilter[`${buttonName}`].indexOf(item),
          1
        )
      : newFilter[`${buttonName}`].push(item)

    if (buttonName === 'checkedArtists') {
      dispatch(updateCheckedArtists(newFilter['checkedArtists']))
    }
    if (buttonName === 'checkedYears') {
      dispatch(updateCheckedYears(newFilter['checkedYears']))
    }
    if (buttonName === 'checkedGenres') {
      dispatch(updateCheckedGenres(newFilter['checkedGenres']))
    }
  }

  let display
  let height

  if (rows === 1) {
    height = '92px'
  }
  if (rows === 2) {
    height = '138px'
  }
  if (rows === 3) {
    height = '184px'
  }

  const isChecked = (item: string, buttonName: FilterButtonName) => {
    return newFilter[`${buttonName}`].includes(item)
  }

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
            />
            <label htmlFor={item} className={style.Label} key={item}>
              {item}
            </label>
          </span>
        ))}
      </div>
    </div>
  )
}
