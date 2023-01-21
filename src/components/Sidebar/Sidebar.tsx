import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Button,
  createTheme,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  ThemeProvider,
  Typography,
} from '@mui/material'

import { SpanChangeColor } from '../ChangeColorComponents/SpanChangeColor'
import { TEXT } from '../../constants'
import { useAppDispatch, useAppSelector } from '../../hooks/hook'
import {
  bgColorToBgColorLight,
  extradarkToDark,
  extradarkToHover,
} from '../../utils/colorUtils'
import { Languages } from '../../types'
import { changeLanguage } from '../../store/languageSlice'
import { AlbumsList } from '../AlbumsList/AlbumsList'
import { useGetCurrentUserQuery } from '../../services/dataApi'
import {
  bgColorSelector,
  decorativeColorSelector,
  textColorSelector,
} from '../../store/selectors/colorThemeSelector'
import { languageSelector } from '../../store/selectors/languageSelector'
import { headerSelector } from '../../store/selectors/headerSelector'

import style from './style.module.css'

export const Sidebar = () => {
  const dispatch = useAppDispatch()

  const { data: user } = useGetCurrentUserQuery()

  const header = useAppSelector(headerSelector)
  const lang = useAppSelector(languageSelector)
  const textColor = useAppSelector(textColorSelector)
  const bgColor = useAppSelector(bgColorSelector)
  const decorativeColor = useAppSelector(decorativeColorSelector)

  const isUserVisible = header !== TEXT.header.profile[lang]

  const [isAlbumsVisible, setIsAlbumsVisible] = useState(false)

  const bgColorLight = bgColorToBgColorLight(bgColor)
  const colorHover = extradarkToHover(decorativeColor)
  const colorDark = extradarkToDark(decorativeColor)

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
    localStorage.setItem('language', newLanguage)
  }

  const handleAlbumList = () => {
    setIsAlbumsVisible(!isAlbumsVisible)
  }

  useEffect(() => {
    return () => setIsAlbumsVisible(false)
  }, [])

  return (
    <div className={style.Sidebar}>
      {isUserVisible && (
        <div className={style.User}>
          <NavLink to={'/profile'}>
            <Typography className={style.UserName} style={{ color: textColor }}>
              <SpanChangeColor colorHover={colorHover} colorActive={colorDark}>
                {user?.username}
              </SpanChangeColor>
            </Typography>
          </NavLink>

          <ThemeProvider theme={buttonTheme}>
            <FormControl
              variant="standard"
              sx={{
                marginLeft: '25px',
                width: '60px',
                backgroundColor: bgColorLight,
                borderTopLeftRadius: '5px',
                borderTopRightRadius: '5px',
                minWidth: '60px',
              }}
            >
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={lang}
                onChange={handleChange}
                label="Language"
                style={{
                  color: textColor,
                  fontSize: '15px',
                  padding: '0 5px',
                }}
              >
                <MenuItem value={'ru'}>Ru</MenuItem>
                <MenuItem value={'en'}>En</MenuItem>
                <MenuItem value={'bel'}>Bel</MenuItem>
              </Select>
            </FormControl>
          </ThemeProvider>
        </div>
      )}

      <div style={{ backgroundColor: 'transparent' }}>
        <div className={style.List}>
          <AlbumsList />
        </div>

        <ThemeProvider theme={buttonTheme}>
          <div className={style.ButtonVisibility}>
            <Button
              onClick={handleAlbumList}
              color="primary"
              variant="contained"
              sx={{
                textTransform: 'none',
                color: textColor,
                width: '100%',
                minHeight: '30px',
                marginBottom: '13px',
                marginTop: '10px',
                padding: '10px',
              }}
              className={style.ButtonMobileList}
            >
              {TEXT.collections[lang]}
            </Button>
          </div>
        </ThemeProvider>

        {isAlbumsVisible && (
          <div className={style.MobileList}>
            <AlbumsList />
          </div>
        )}
      </div>
    </div>
  )
}
