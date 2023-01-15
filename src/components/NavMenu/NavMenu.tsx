import { useState, FC } from 'react'
import { NavLink } from 'react-router-dom'
import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import cn from 'classnames'

import { useAppDispatch, useAppSelector } from '../../hooks/hook'
import { bgColorToBgColorLight } from '../../utils/colorUtils'
import { Animation } from '../Animation/Animation'
import { LogoMenu } from '../Logo/LogoMenu'
import { setIsNavMenuOpened } from '../../store/navMenuSlice'
import { NavList } from '../NavList/NavList'
import {
  bgColorSelector,
  textColorSelector,
} from '../../store/selectors/colorThemeSelector'
import { navMenuSelector } from '../../store/selectors/navMenuSelector'

import style from './style.module.css'

export const NavMenu: FC<{}> = () => {
  const dispatch = useAppDispatch()

  const textColor = useAppSelector(textColorSelector)
  const bgColor = useAppSelector(bgColorSelector)
  const isNavMenuOpened = useAppSelector(navMenuSelector)

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
      <div className={style.navWrapperDesktop}>
        <div className={style.logoWrapperDesktop}>
          <NavLink to={'/'}>
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
        </div>

        <nav
          className={cn(
            style.NavMenu,
            { [style.navMenuVisible]: isVisible },
            { [style.navMenuHidden]: !isVisible }
          )}
          style={{
            backgroundColor: bgColorLight,
          }}
        >
          <div>
            <NavList />
            <div className={style.AnimationTop} />
            <Animation />
          </div>
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
            <NavLink to={'/'}>
              <LogoMenu textColor={textColor} />
            </NavLink>

            <NavList />
            <div className={style.AnimationTop} />
          </nav>
        )}
      </div>
    </>
  )
}
