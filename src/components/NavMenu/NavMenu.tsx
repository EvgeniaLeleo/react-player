import { useState, FC } from 'react'
import { NavLink } from 'react-router-dom'
import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import { useAppDispatch, useAppSelector } from '../../hooks/hook'
import { bgColorToBgColorLight } from '../../utils/colorUtils'
import { Animation } from '../Animation/Animation'
import { LogoMenu } from '../Logo/LogoMenu'
import { setIsNavMenuOpened } from '../../store/navMenuSlice'
import { NavList } from '../NavList/NavList'

import style from './style.module.css'

export const NavMenu: FC<{}> = () => {
  const dispatch = useAppDispatch()

  const textColor = useAppSelector((state) => state.colorTheme.textColor)
  const bgColor = useAppSelector((state) => state.colorTheme.bgColor)
  const isNavMenuOpened = useAppSelector((state) => state.navMenu.isOpen)

  const [isVisibleMobile, setIsVisibleMobile] = useState(false)
  const [isVisible, setIsVisible] = useState(isNavMenuOpened)

  const bgColorLight = bgColorToBgColorLight(bgColor)

  const handleClick = () => {
    setIsVisible(!isVisible)
    dispatch(setIsNavMenuOpened(!isVisible))
  }

  const handleClickMobile = () => {
    setIsVisibleMobile(!isVisibleMobile)
  }

  return (
    <>
      <div className={style.WrapperDesktop}>
        <nav
          className={style.NavMenu}
          style={
            isVisible
              ? { backgroundColor: bgColorLight }
              : { backgroundColor: bgColor }
          }
        >
          <NavLink to={'/main'}>
            <LogoMenu textColor={textColor} />
          </NavLink>

          <IconButton
            sx={{ marginBottom: '20px' }}
            className={style.Burger}
            onClick={handleClick}
          >
            <MenuIcon
              className={style.BurgerIcon}
              style={{ color: textColor }}
            />
          </IconButton>
          {isVisible && (
            <>
              <NavList />
              <div className={style.AnimationTop}></div>
              <Animation></Animation>
            </>
          )}
        </nav>
      </div>

      <div className={style.BurgerMobile}>
        <IconButton sx={{ mb: 3.5 }} onClick={handleClickMobile}>
          <MenuIcon className={style.BurgerIcon} style={{ color: textColor }} />
        </IconButton>
      </div>
      <div className={style.WrapperMobile}>
        {isVisibleMobile && (
          <nav
            className={style.NavMenu}
            style={{ backgroundColor: bgColorLight, paddingTop: '70px' }}
          >
            <NavLink to={'/main'}>
              <LogoMenu textColor={textColor} />
            </NavLink>

            <NavList />
            <div className={style.AnimationTop}></div>
          </nav>
        )}
      </div>
    </>
  )
}
