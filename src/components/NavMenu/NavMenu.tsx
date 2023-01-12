import { useState, FC } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import Logo from '../Logo/Logo'
import { TEXT } from '../../constants'
import { SpanChangeColor } from '../changeColor/SpanChangeColor'
import { useAppDispatch, useAppSelector } from '../../hooks/hook'
import {
  bgColorToBgColorLight,
  extradarkToDark,
  extradarkToHover,
} from '../../utils/colorUtils'
import { openModal } from '../../store/modalSlice'

import {
  updateCheckedArtists,
  updateCheckedYears,
  updateCheckedGenres,
  updateFilteredTracks,
  updateSearchedTracks,
  updateFilteredDanceTracks,
  updateSearchedTracksDance,
  updateFilteredRandomTracks,
  updateSearchedTracksRandom,
  updateFilteredFavouritesTracks,
  updateSearchedTracksFavourites,
} from '../../store/filteredItemsSlice'
// import { uploadAllTracks } from '../../store/trackSlice'
// import { getFinalItems } from '../../utils/getFinalItems'
import { Track, CheckedItems } from '../../types'
import { updateSearchQuery } from '../../store/sortingSettingsSlice'
import { Animation } from '../Animation/Animation'
import { LogoMenu } from '../Logo/LogoMenu'
import { ROUTES } from '../../routes'

import style from './style.module.css'
import { setIsNavMenuOpened } from '../../store/navMenuSlice'

// const newFilter: CheckedItems = {
//   checkedArtists: [],
//   checkedYears: [],
//   checkedGenres: [],
// }

export const NavMenu: FC<{}> = () => {
  const dispatch = useAppDispatch()
  const lang = useAppSelector((state) => state.language.lang)

  const textColor = useAppSelector((state) => state.colorTheme.textColor)
  const bgColor = useAppSelector((state) => state.colorTheme.bgColor)
  const isNavMenuOpened = useAppSelector((state) => state.navMenu.isOpen)
  const bgColorLight = bgColorToBgColorLight(bgColor)

  const decorativeColor = useAppSelector(
    (state) => state.colorTheme.decorativeColor
  )
  const colorHover = extradarkToHover(decorativeColor)
  const colorDark = extradarkToDark(decorativeColor)

  const [isVisible, setIsVisible] = useState(isNavMenuOpened)

  const handleClick = () => {
    setIsVisible(!isVisible)
    dispatch(setIsNavMenuOpened(!isVisible))
  }

  const [isVisibleMobile, setIsVisibleMobile] = useState(false)

  const handleClickMobile = () => {
    setIsVisibleMobile(!isVisibleMobile)
  }

  const order = useAppSelector((state) => state.sortingSettings.order)

  const handleClickToMain = () => {
    // const searchedItemsCurrent = allTracks
    // dispatch(updateCheckedGenres([]))
    // dispatch(updateCheckedArtists([]))
    // dispatch(updateCheckedYears([]))
    // dispatch(updateFilteredTracks([]))
    // dispatch(updateFilteredDanceTracks([]))
    // dispatch(updateFilteredRandomTracks([]))
    // dispatch(updateFilteredFavouritesTracks([]))
    // dispatch(updateSearchQuery(''))
    // dispatch(updateSearchedTracks(allTracks))
    // dispatch(updateSearchedTracksDance(allTracksDance))
    // dispatch(updateSearchedTracksRandom(allTracksRandom))
    // dispatch(updateSearchedTracksFavourites(allTracksFavourites))
    // const finalFilteredTracks = getFinalItems(
    //   allTracks,
    //   newFilter,
    //   searchedItemsCurrent,
    //   order
    // )
    // dispatch(uploadAllTracks(finalFilteredTracks))
  }

  const navigate = useNavigate()

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
          <NavLink to={'/main'} onClick={handleClickToMain}>
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
              <div className={style.List}>
                <NavLink
                  className={style.ListButton}
                  style={{ color: textColor }}
                  to="/main"
                >
                  <SpanChangeColor
                    colorHover={colorHover}
                    colorActive={colorDark}
                  >
                    {TEXT.menu.homepage[lang]}
                  </SpanChangeColor>
                </NavLink>

                <NavLink
                  onClick={handleClickToMain}
                  className={style.ListButton}
                  style={{ color: textColor }}
                  to="/mytracks"
                >
                  <SpanChangeColor
                    colorHover={colorHover}
                    colorActive={colorDark}
                  >
                    {TEXT.menu.mytracks[lang]}
                  </SpanChangeColor>
                </NavLink>

                <NavLink
                  className={style.ListButton}
                  style={{ color: textColor }}
                  to={'/profile'}
                >
                  <SpanChangeColor
                    colorHover={colorHover}
                    colorActive={colorDark}
                  >
                    {TEXT.menu.profile[lang]}
                  </SpanChangeColor>
                </NavLink>

                <button
                  // onClick={() => dispatch(openModal())}
                  onClick={() => navigate(ROUTES.login)}
                  style={{ color: textColor }}
                  className={style.LogoutButton}
                >
                  <SpanChangeColor
                    colorHover={colorHover}
                    colorActive={colorDark}
                  >
                    {TEXT.menu.logout[lang]}
                  </SpanChangeColor>
                </button>
              </div>
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
            <NavLink to={'/main'} onClick={handleClickToMain}>
              <Logo textColor={textColor} />
            </NavLink>

            <>
              <div className={style.List}>
                <NavLink
                  className={style.ListButton}
                  style={{ color: textColor }}
                  to="/main"
                >
                  <SpanChangeColor
                    colorHover={colorHover}
                    colorActive={colorDark}
                  >
                    {TEXT.menu.homepage[lang]}
                  </SpanChangeColor>
                </NavLink>

                <NavLink
                  onClick={handleClickToMain}
                  className={style.ListButton}
                  style={{ color: textColor }}
                  to="/mytracks"
                >
                  <SpanChangeColor
                    colorHover={colorHover}
                    colorActive={colorDark}
                  >
                    {TEXT.menu.mytracks[lang]}
                  </SpanChangeColor>
                </NavLink>

                <NavLink
                  className={style.ListButton}
                  style={{ color: textColor }}
                  to={'/profile'}
                >
                  <SpanChangeColor
                    colorHover={colorHover}
                    colorActive={colorDark}
                  >
                    {TEXT.menu.profile[lang]}
                  </SpanChangeColor>
                </NavLink>

                <button
                  onClick={() => dispatch(openModal())}
                  style={{ color: textColor }}
                  className={style.LogoutButton}
                >
                  <SpanChangeColor
                    colorHover={colorHover}
                    colorActive={colorDark}
                  >
                    {TEXT.menu.logout[lang]}
                  </SpanChangeColor>
                </button>
              </div>
              <div className={style.AnimationTop}></div>
            </>
          </nav>
        )}
      </div>
    </>
  )
}

// const allTracks: Track[] = useAppSelector((state) => state.tracks.allTracks)
// const allTracksDance: Track[] = useAppSelector(
//   (state) => state.tracks.danceTracks
// )
// const allTracksRandom = useAppSelector((state) => state.tracks.randomTracks)

// const allTracksFavourites = useAppSelector((state) => state.tracks.favourites)
