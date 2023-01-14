import { NavLink } from 'react-router-dom'

import { TEXT } from '../../constants'
import { useAppSelector } from '../../hooks/hook'
import { AlbumCover } from '../AlbumCover/AlbumCover'

export const AlbumsList = () => {
  const lang = useAppSelector((state) => state.language.lang)

  return (
    <div>
      <NavLink to={'/collection/1'}>
        <AlbumCover text={TEXT.header.classics[lang]} />
      </NavLink>

      <NavLink to={'/collection/2'}>
        <AlbumCover text={TEXT.header.electro[lang]} />
      </NavLink>

      <NavLink to={'/collection/3'}>
        <AlbumCover text={TEXT.header.rocks[lang]} />
      </NavLink>
    </div>
  )
}

// TODO хардкод названий альбомов :( их лучше брать из базы и переводить
