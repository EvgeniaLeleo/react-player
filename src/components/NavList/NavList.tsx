import { FC } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import { TEXT } from '../../constants'
import { SpanChangeColor } from '../ChangeColorComponents/SpanChangeColor'
import { useAppSelector } from '../../hooks/hook'
import { extradarkToDark, extradarkToHover } from '../../utils/colorUtils'
// import { openModal } from '../../store/modalSlice'

import { ROUTES } from '../../routes'
import { useLogout } from '../../hooks/useLogout'

import style from './style.module.css'

export const NavList: FC<{}> = () => {
  const logout = useLogout()
  const navigate = useNavigate()

  const lang = useAppSelector((state) => state.language.lang)
  const textColor = useAppSelector((state) => state.colorTheme.textColor)

  const decorativeColor = useAppSelector(
    (state) => state.colorTheme.decorativeColor
  )

  const colorHover = extradarkToHover(decorativeColor)
  const colorDark = extradarkToDark(decorativeColor)

  const handleLogout = () => {
    localStorage.clear()
    logout()
    navigate(ROUTES.login)
  }

  return (
    <div className={style.List}>
      <NavLink className={style.ListButton} style={{ color: textColor }} to="/">
        <SpanChangeColor colorHover={colorHover} colorActive={colorDark}>
          {TEXT.menu.homepage[lang]}
        </SpanChangeColor>
      </NavLink>

      <NavLink
        className={style.ListButton}
        style={{ color: textColor }}
        to="/mytracks"
      >
        <SpanChangeColor colorHover={colorHover} colorActive={colorDark}>
          {TEXT.menu.mytracks[lang]}
        </SpanChangeColor>
      </NavLink>

      <NavLink
        className={style.ListButton}
        style={{ color: textColor }}
        to={'/profile'}
      >
        <SpanChangeColor colorHover={colorHover} colorActive={colorDark}>
          {TEXT.menu.profile[lang]}
        </SpanChangeColor>
      </NavLink>

      <button
        // onClick={() => dispatch(openModal())}
        onClick={handleLogout}
        style={{ color: textColor }}
        className={style.LogoutButton}
      >
        <SpanChangeColor colorHover={colorHover} colorActive={colorDark}>
          {TEXT.menu.logout[lang]}
        </SpanChangeColor>
      </button>
    </div>
  )
}
