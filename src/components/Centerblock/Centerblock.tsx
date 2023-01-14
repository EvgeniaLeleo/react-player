import React, { FC, useEffect, useState } from 'react'
import { Box, InputAdornment, TextField } from '@mui/material'
import { Search } from '@mui/icons-material'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { TEXT } from '../../constants'
import { Profile } from '../Profile/Profile'
import { useAppDispatch, useAppSelector } from '../../hooks/hook'
import { TrackList } from '../TrackList/TrackList'
import { FilterButtons } from '../FilterButtons/FilterButtons'
import { SkeletonTrack } from '../SkeletonTrack/SkeletonTrack'
import { ListHeaders } from '../ListHeaders/ListHeaders'

import style from './style.module.css'

type PlayerProps = {
  // tracks: Track[]
  tracksHook?: Function
  header?: string
  // searchString?: string
  collectionId?: number
  isProfilePage?: boolean
}

export const Centerblock: FC<PlayerProps> = ({
  header,
  tracksHook,
  collectionId = 1,
  isProfilePage = false,
}) => {
  // const dispatch = useAppDispatch()

  const lang = useAppSelector((state) => state.language.lang)
  const textColor = useAppSelector((state) => state.colorTheme.textColor)
  // const order = useAppSelector((state) => state.sortingSettings.order)

  const [searchString, setSearchString] = useState('')
  const {
    // isLoading,
    // isError,
    data: tracks,
  } = tracksHook ? tracksHook(searchString, collectionId) : { data: [] }

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  //   setSearchString(e.target.value)

  // const isTrackIdInList = (trackIdArg: number) =>
  //   tracks.find((el: Track) => el.id === trackIdArg)

  const handleSearch = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearchString(e.target.value)
  }

  useEffect(() => {
    return () => setSearchString('')
  }, [header])

  const array = new Array(10).fill(0)

  if (header === TEXT.menu.profile[lang]) {
    return <Profile />
  } else {
    return (
      <>
        {isProfilePage && <Profile />}
        {!isProfilePage && (
          <div className={style.centerblockWrapper}>
            <form className={style.InputWrapper}>
              <TextField
                value={searchString}
                onChange={(e) => handleSearch(e)}
                InputLabelProps={{}}
                placeholder={TEXT.searchInput[lang]}
                fullWidth
                autoComplete="off"
                variant="standard"
                type={'search'}
                sx={{
                  mt: '5px',
                  input: { color: textColor },
                  label: { color: textColor, pl: '30px' },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment sx={{ color: textColor }} position="start">
                      <Search
                        style={{ color: textColor }}
                        className={style.Input}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            </form>

            <DndProvider backend={HTML5Backend}>
              <div className={style.Centerblock}>
                <h2 style={{ color: textColor }} className={style.Header}>
                  {header}
                </h2>

                {header === TEXT.header.tracks[lang] && (
                  <FilterButtons lang={lang} textColor={textColor} />
                )}

                <Box className={style.Content}>
                  <ListHeaders />

                  {!tracks?.length ? (
                    array.map((_, i) => <SkeletonTrack key={i.toString()} />)
                  ) : (
                    <TrackList header={header} tracks={tracks} />
                  )}
                </Box>
              </div>
            </DndProvider>
          </div>
        )}
      </>
    )
  }
}

// const allTracksStore = useAppSelector((state) => state.tracks.allTracks)
// const allTracksDance: Track[] = useAppSelector(
//   (state) => state.tracks.danceTracks
// )
// const allTracksRandom: Track[] = useAppSelector(
//   (state) => state.tracks.randomTracks
// )

// const allTracksFavourites = useAppSelector((state) => state.tracks.favourites)

// const checkedItems = useAppSelector((state) => state.filteredItems)
