import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { NavMenu } from '../../components/NavMenu/NavMenu'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Player } from '../../components/Player/Player'
import { TEXT } from '../../constants'
import { useAppSelector } from '../../hooks/hook'

import style from './style.module.css'

export type Props = {
  header?: string
  tracksHook?: Function
}

export const PageWrapper: FC<Props> = ({ header }) => {
  const currentTrack = useAppSelector((state) => state.tracks.currentTrack)

  const lang = useAppSelector((state) => state.language.lang)
  const bgColor = useAppSelector((state) => state.colorTheme.bgColor)

  return (
    <div style={{ backgroundColor: bgColor }}>
      <div className={style.pageWrapper}>
        <NavMenu />
        <Outlet />
        <Sidebar
          isVisible={header === TEXT.header.tracks[lang]}
          isUserVisible={header !== TEXT.menu.profile[lang]}
        />
      </div>
      <Player
        currentTrack={currentTrack}
        // tracks={tracks}
      />
    </div>
  )
}
