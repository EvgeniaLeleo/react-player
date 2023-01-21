import { FC } from 'react'

import { useAppSelector } from '../../hooks/hook'
import {
  decorativeColorSelector,
  textColorSelector,
} from '../../store/selectors/colorThemeSelector'
import { extradarkToDark } from '../../utils/colorUtils'

import style from './style.module.css'

export type Props = {
  text: string
}

export const AlbumCover: FC<Props> = ({ text }) => {
  const textColor = useAppSelector(textColorSelector)
  const decorativeColor = useAppSelector(decorativeColorSelector)

  const decorativeColorDark = extradarkToDark(decorativeColor)

  return (
    <div
      className={style.AlbumCover}
      style={{
        color: textColor,
        background: `linear-gradient(${decorativeColor}, ${decorativeColorDark})`,
      }}
    >
      {text}
    </div>
  )
}
