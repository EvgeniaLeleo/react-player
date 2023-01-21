import { useRef, useState, FC } from 'react'

import { Popup } from '../Popup/Popup'
import { useAppSelector } from '../../hooks/hook'
import { extradarkToDark, extradarkToHover } from '../../utils/colorUtils'
import { ButtonChangeColor } from '../ChangeColorComponents/ButtonChangeColor'
import { FilterButtonName } from '../../types'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import {
  decorativeColorSelector,
  textColorSelector,
} from '../../store/selectors/colorThemeSelector'

import style from './style.module.css'

type Props = {
  buttonText: string
  buttonName: FilterButtonName
  checkItems: string[]
  rows: 1 | 2 | 3
}

export const FilterButton: FC<Props> = ({
  buttonName,
  buttonText,
  checkItems,
  rows,
}) => {
  const textColor = useAppSelector(textColorSelector)
  const decorativeColor = useAppSelector(decorativeColorSelector)
  const checkedItems = useAppSelector(
    (state) => state.filteredItems[`${buttonName}`]
  )

  const colorHover = extradarkToHover(decorativeColor)
  const colorDark = extradarkToDark(decorativeColor)

  const ref = useRef(null)

  const [isPopupVisible, setIsPopupVisible] = useState(false)
  const [color, setColor] = useState(textColor)

  useOnClickOutside(ref, () => {
    setIsPopupVisible(false)
    setColor(textColor)
  })

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible)
    setColor(colorDark)
  }

  return (
    <div className={style.Wrapper}>
      <ButtonChangeColor
        className={style.FilterButton}
        color={color}
        colorHover={colorHover}
        colorActive={colorDark}
        borderColor={color}
        onClick={togglePopup}
      >
        {buttonText.toLowerCase()}
        {isPopupVisible && (
          <div
            className={style.NumberOfCheckedItems}
            style={{ backgroundColor: decorativeColor }}
          >
            {checkedItems.length}
          </div>
        )}
      </ButtonChangeColor>
      <div ref={ref}>
        {isPopupVisible && (
          <Popup items={checkItems} rows={rows} buttonName={buttonName} />
        )}
      </div>
    </div>
  )
}
