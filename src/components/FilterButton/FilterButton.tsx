import { useRef, useState, FC } from 'react'

import { Popup } from '../Popup/Popup'
import { useAppSelector } from '../../hooks/hook'
import { extradarkToDark, extradarkToHover } from '../../utils/colorUtils'
import { ButtonChangeColor } from '../ChangeColorComponents/ButtonChangeColor'
import { FilterButtonName } from '../../types'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'

import style from './style.module.css'

export type FilterButtonProps = {
  buttonText: string
  buttonName: FilterButtonName
  checkItems: string[]
  rows: 1 | 2 | 3
}

export const FilterButton: FC<FilterButtonProps> = ({
  buttonName,
  buttonText,
  checkItems,
  rows,
}) => {
  const textColor = useAppSelector((state) => state.colorTheme.textColor)
  const decorativeColor = useAppSelector(
    (state) => state.colorTheme.decorativeColor
  )

  const colorHover = extradarkToHover(decorativeColor)
  const colorDark = extradarkToDark(decorativeColor)

  const checkedItems = useAppSelector(
    (state) => state.filteredItems[`${buttonName}`]
  )

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
