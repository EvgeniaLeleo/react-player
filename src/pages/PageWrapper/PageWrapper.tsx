import { Outlet } from 'react-router-dom'

import { NavMenu } from '../../components/NavMenu/NavMenu'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Player } from '../../components/Player/Player'
import { useAppSelector } from '../../hooks/hook'

import style from './style.module.css'

export type Props = {
  tracksHook?: Function
}

export const PageWrapper = () => {
  const bgColor = useAppSelector((state) => state.colorTheme.bgColor)

  return (
    <div style={{ backgroundColor: bgColor }}>
      <div className={style.pageWrapper}>
        <NavMenu />
        <Outlet />
        <Sidebar />
      </div>
      <Player />
    </div>
  )
}
