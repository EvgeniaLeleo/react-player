import { FC } from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import { Button as MUIButton, createTheme, ThemeProvider } from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select'

import { BGCOLOR, COLOR, COLOR_EXTRADARK, TEXT } from '../../constants'
import { useAppDispatch, useAppSelector } from '../../hooks/hook'
import {
  changeBgColor,
  changeDecorativeColor,
  changeTextColor,
} from '../../store/colorThemeSlice'
import { colorToSecondary } from '../../utils/colorUtils'
import { changeLanguage } from '../../store/languageSlice'
import { Languages } from '../../types'
import { useGetCurrentUserQuery } from '../../services/dataApi'
import { updateHeader } from '../../store/headerSlice'
import {
  bgColorSelector,
  decorativeColorSelector,
  textColorSelector,
} from '../../store/selectors/colorThemeSelector'
import { languageSelector } from '../../store/selectors/languageSelector'

import style from './style.module.css'

export const Profile: FC = () => {
  const dispatch = useAppDispatch()
  const { data: user } = useGetCurrentUserQuery()

  const lang = useAppSelector(languageSelector)
  const textColor = useAppSelector(textColorSelector)
  const bgColor = useAppSelector(bgColorSelector)
  const decorativeColor = useAppSelector(decorativeColorSelector)

  const textColorSecondary = colorToSecondary(textColor)
  const buttonTheme = createTheme({
    palette: {
      primary: {
        main: decorativeColor,
      },
    },
  })

  const handleChange = (event: SelectChangeEvent) => {
    const newLanguage = event.target.value as Languages
    dispatch(changeLanguage(newLanguage))
    dispatch(updateHeader(TEXT.header.profile[newLanguage]))
    localStorage.setItem('language', newLanguage)
  }

  const handleChangeBgColor = (event: {
    target: { value: React.SetStateAction<string> }
  }) => {
    const newBgColor = event.target.value.toString()
    dispatch(changeBgColor(newBgColor))
    localStorage.setItem('bgColor', newBgColor)
  }

  const handleChangeTextColor = (event: {
    target: { value: React.SetStateAction<string> }
  }) => {
    const newTextColor = event.target.value.toString()
    dispatch(changeTextColor(newTextColor))
    localStorage.setItem('textColor', newTextColor)
  }

  const handleChangeDecorativeColor = (event: {
    target: { value: React.SetStateAction<string> }
  }) => {
    const newDecorativeColor = event.target.value.toString()
    dispatch(changeDecorativeColor(newDecorativeColor))
    localStorage.setItem('decorativeColor', newDecorativeColor)
  }

  const handleResetSettings = () => {
    dispatch(changeTextColor(COLOR))
    localStorage.setItem('textColor', COLOR)
    dispatch(changeBgColor(BGCOLOR))
    localStorage.setItem('bgColor', BGCOLOR)
    dispatch(changeDecorativeColor(COLOR_EXTRADARK))
    localStorage.setItem('decorativeColor', COLOR_EXTRADARK)
  }

  return (
    <div className={style.Profile}>
      <h2 style={{ color: textColor }} className={style.HeaderMain}>
        {TEXT.header.profile[lang]}
      </h2>
      <div className={style.Data} style={{ color: textColor }}>
        <h4 className={style.Header} style={{ color: textColorSecondary }}>
          {TEXT.profile.userData[lang]}
        </h4>
        <div className={style.UserData}>
          {TEXT.profile.userName[lang]} {user?.username}
        </div>
        <div className={style.UserData}>
          {TEXT.profile.login[lang]} {user?.email}
        </div>

        <h4 className={style.Header} style={{ color: textColorSecondary }}>
          {TEXT.profile.custom[lang]}
        </h4>
        <div className={style.Custom}>
          <div className={style.CustomBgColor}>
            <div>{TEXT.profile.bgcolor[lang]}</div>
            <input
              className={style.InputBgColor}
              type="color"
              value={bgColor}
              onChange={handleChangeBgColor}
            />
          </div>
          <div className={style.CustomTextColor}>
            <div>{TEXT.profile.textColor[lang]}</div>
            <input
              className={style.InputTextColor}
              type="color"
              value={textColor}
              onChange={handleChangeTextColor}
            />
          </div>
          <div className={style.CustomDecorativeColor}>
            <div>{TEXT.profile.designColor[lang]}</div>
            <input
              className={style.InputDecorativeColor}
              type="color"
              value={decorativeColor}
              onChange={handleChangeDecorativeColor}
            />
          </div>
        </div>

        <ThemeProvider theme={buttonTheme}>
          <MUIButton
            color={'primary'}
            variant={'contained'}
            sx={{
              width: '280px',
              height: '52px',
              padding: '10px 15px',
              mb: 2.5,
              mt: 1.5,
              fontSize: '16px',
              textTransform: 'none',
              color: textColor,
            }}
            onClick={handleResetSettings}
          >
            {TEXT.profile.buttonText[lang]}
          </MUIButton>
          <FormControl
            variant="standard"
            sx={{ m: 1, width: 110, margin: 0, marginTop: 3 }}
          >
            <InputLabel
              id="demo-simple-select-standard-label"
              style={{
                color: textColorSecondary,
                fontWeight: 'bold',
                fontSize: '20px',
                fontFamily: 'inherit',
              }}
            >
              {TEXT.profile.language[lang]}
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={lang}
              onChange={handleChange}
              label="Language"
              style={{ color: textColor }}
            >
              <MenuItem value={'ru'}>Русский</MenuItem>
              <MenuItem value={'en'}>English</MenuItem>
              <MenuItem value={'bel'}>Беларускі</MenuItem>
            </Select>
          </FormControl>
        </ThemeProvider>
      </div>
    </div>
  )
}
