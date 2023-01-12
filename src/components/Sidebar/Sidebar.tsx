import { FC, useEffect, useRef, useState } from 'react'
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

import { SpanChangeColor } from '../changeColor/SpanChangeColor'
import { AlbumCover } from '../AlbumCover/AlbumCover'
import { COLLECTION, TEXT } from '../../constants'
import { useAppDispatch, useAppSelector } from '../../hooks/hook'
import {
  bgColorToBgColorLight,
  extradarkToDark,
  extradarkToHover,
} from '../../utils/colorUtils'
import { CheckedItems, Languages } from '../../types'
import { changeLanguage } from '../../store/languageSlice'
import {
  updateCheckedArtists,
  updateCheckedGenres,
  updateCheckedYears,
  updateFilteredDanceTracks,
  updateFilteredFavouritesTracks,
  updateFilteredRandomTracks,
  updateFilteredTracks,
} from '../../store/filteredItemsSlice'
import { updateSearchQuery } from '../../store/sortingSettingsSlice'

import style from './style.module.css'
import { useGetCurrentUserQuery } from '../../services/tracksDataApi'
import { AlbumsList } from '../AlbumsList/AlbumsList'

type SidebarProps = {
  isVisible?: boolean
  isUserVisible?: boolean
}

export const Sidebar: FC<SidebarProps> = ({
  isVisible = true,
  isUserVisible = true,
}) => {
  const dispatch = useAppDispatch()

  // const dataUser = useAppSelector((state) => state.auth.data);
  // const [user] = useCurrentUser()
  // const dataUser = { fullName: 'Evgenia Leleo' }
  const timestampRef = useRef(Date.now()).current
  const {
    data: user,
    isLoading,
    isError,
    error,
    // } = useGetCurrentUserQuery(timestampRef)
  } = useGetCurrentUserQuery()

  const lang = useAppSelector((state) => state.language.lang)
  const textColor = useAppSelector((state) => state.colorTheme.textColor)
  const bgColor = useAppSelector((state) => state.colorTheme.bgColor)
  const decorativeColor = useAppSelector(
    (state) => state.colorTheme.decorativeColor
  )
  const bgColorLight = bgColorToBgColorLight(bgColor)
  const colorHover = extradarkToHover(decorativeColor)
  const colorDark = extradarkToDark(decorativeColor)

  const handleChange = (event: SelectChangeEvent) => {
    const newLanguage = event.target.value as Languages
    dispatch(changeLanguage(newLanguage))
    localStorage.setItem('language', newLanguage)
  }

  const buttonTheme = createTheme({
    palette: {
      primary: {
        main: decorativeColor,
      },
    },
  })

  // const allTracks: Track[] = useAppSelector((state) => state.tracks.allTracks)
  // const allTracksDance: Track[] = useAppSelector(
  //   (state) => state.tracks.danceTracks
  // )
  // const allTracksRandom: Track[] = useAppSelector(
  //   (state) => state.tracks.randomTracks
  // )
  // const allTracksFavourites = useAppSelector((state) => state.tracks.favourites)

  // const order = useAppSelector((state) => state.sortingSettings.order)

  // const handleClickDance = () => {
  //   const newFilter: CheckedItems = {
  //     checkedArtists: [],
  //     checkedYears: [],
  //     checkedGenres: [],
  //   }

  // const searchedItemsCurrent = allTracksDance

  // newFilter.checkedGenres = [COLLECTION.dance]

  // dispatch(updateCheckedGenres([COLLECTION.dance]))
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
  //   allTracksDance,
  //   newFilter,
  //   searchedItemsCurrent,
  //   order
  // )

  // dispatch(uploadDanceTracks(finalFilteredTracks))
  // }

  // const handleClickRandom = () => {
  //   // const searchedItemsCurrent = allTracksRandom
  //   // const newFilter: CheckedItems = {
  //   //   checkedArtists: [],
  //   //   checkedYears: [],
  //   //   checkedGenres: [],
  //   // }

  //   // dispatch(updateCheckedGenres([]))
  //   // dispatch(updateCheckedArtists([]))
  //   // dispatch(updateCheckedYears([]))

  //   // dispatch(updateFilteredTracks([]))
  //   // dispatch(updateFilteredDanceTracks([]))
  //   // dispatch(updateFilteredRandomTracks([]))
  //   // dispatch(updateFilteredFavouritesTracks([]))

  //   // dispatch(updateSearchQuery(''))
  //   // dispatch(updateSearchedTracks(allTracks))
  //   // dispatch(updateSearchedTracksDance(allTracksDance))
  //   // dispatch(updateSearchedTracksRandom(allTracksRandom))
  //   // dispatch(updateSearchedTracksFavourites(allTracksFavourites))

  //   // const finalFilteredTracks = getFinalItems(
  //   //   allTracksRandom,
  //   //   newFilter,
  //   //   searchedItemsCurrent,
  //   //   order
  //   // )

  //   // dispatch(uploadRandomTracks(finalFilteredTracks))
  // }

  const [isAlbumsVisible, setIsAlbumsVisible] = useState(false)

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

      {isUserVisible && (
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
      )}
    </div>
  )
}

// TODO хардкод названий альбомов :( их лучше брать из базы и переводить
