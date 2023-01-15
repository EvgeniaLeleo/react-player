import { Outlet } from 'react-router-dom'

import { NavMenu } from '../../components/NavMenu/NavMenu'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Player } from '../../components/Player/Player'
import { useAppSelector } from '../../hooks/hook'
import { TEXT } from '../../constants'
import { languageSelector } from '../../store/selectors/languageSelector'
import { bgColorSelector } from '../../store/selectors/colorThemeSelector'
import { headerSelector } from '../../store/selectors/headerSelector'

import style from './style.module.css'

export const PageWrapper = () => {
  const bgColor = useAppSelector(bgColorSelector)
  const header = useAppSelector(headerSelector)
  const lang = useAppSelector(languageSelector)

  const isUserVisible = header !== TEXT.menu.profile[lang]

  return (
    <div style={{ backgroundColor: bgColor }}>
      <div className={style.pageWrapper}>
        <NavMenu />
        <Outlet />
        {isUserVisible && <Sidebar />}
      </div>
      <Player />
    </div>
  )
}
