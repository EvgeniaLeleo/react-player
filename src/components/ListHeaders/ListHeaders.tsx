import { AccessTime } from '@mui/icons-material'
import { SvgIcon } from '@mui/material'

import { TEXT } from '../../constants'
import { useAppSelector } from '../../hooks/hook'
import { colorToSecondary } from '../../utils/colorUtils'

import style from './style.module.css'

export const ListHeaders = () => {
  const lang = useAppSelector((state) => state.language.lang)
  const textColor = useAppSelector((state) => state.colorTheme.textColor)
  const textColorSecondary = colorToSecondary(textColor)

  return (
    <div className={style.ListHeaders}>
      <span className={style.Track} style={{ color: textColorSecondary }}>
        {TEXT.listHeader.track[lang]}
      </span>
      <span className={style.Singer} style={{ color: textColorSecondary }}>
        {TEXT.listHeader.artist[lang]}
      </span>
      <span className={style.Album} style={{ color: textColorSecondary }}>
        {TEXT.listHeader.album[lang]}
      </span>
      <SvgIcon fontSize="small" sx={{ my: 'auto', ml: 'auto' }}>
        <AccessTime />
      </SvgIcon>
    </div>
  )
}
