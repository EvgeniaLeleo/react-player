import { FC } from 'react'
import cn from 'classnames'

import { useAppSelector } from '../../hooks/hook'
import { extradarkToDark } from '../../utils/colorUtils'

import style from './style.module.css'

export type AlbumCoverProps = {
  text: string
}

export const AlbumCover: FC<AlbumCoverProps> = ({ text }) => {
  const textColor = useAppSelector((state) => state.colorTheme.textColor)
  const decorativeColor = useAppSelector(
    (state) => state.colorTheme.decorativeColor
  )

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
