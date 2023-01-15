import { Outlet } from 'react-router-dom'

import { NavMenu } from '../../components/NavMenu/NavMenu'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Player } from '../../components/Player/Player'
import { useAppSelector } from '../../hooks/hook'
import { TEXT } from '../../constants'

import style from './style.module.css'

export type Props = {
  tracksHook?: Function
}

export const PageWrapper = () => {
  const bgColor = useAppSelector((state) => state.colorTheme.bgColor)
  const header = useAppSelector((state) => state.header.header)
  const lang = useAppSelector((state) => state.language.lang)
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
