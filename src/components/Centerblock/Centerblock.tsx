import React, { FC, useEffect, useState } from 'react'

import { Box, InputAdornment, TextField } from '@mui/material'
import { Search } from '@mui/icons-material'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { Track } from '../../types'
import { COLLECTION, TEXT } from '../../constants'
import { Profile } from '../Profile/Profile'
import { useAppDispatch, useAppSelector } from '../../hooks/hook'
import { TrackList } from '../TrackList/TrackList'
import { FilterButtons } from '../FilterButtons/FilterButtons'
import { getSearchQueryArray } from '../../utils/getSearchQueryArray'
import {
  updateFilteredDanceTracks,
  updateFilteredFavouritesTracks,
  updateFilteredRandomTracks,
  updateFilteredTracks,
  updateSearchedTracks,
  updateSearchedTracksDance,
  updateSearchedTracksFavourites,
  updateSearchedTracksRandom,
} from '../../store/filteredItemsSlice'
import { getFinalItems } from '../../utils/getFinalItems'
import { updateSearchQuery } from '../../store/sortingSettingsSlice'
import { SkeletonTrack } from '../SkeletonTrack/SkeletonTrack'
import { ListHeaders } from '../ListHeaders/ListHeaders'

import style from './style.module.css'

type PlayerProps = {
  tracks: Track[]
  header?: string
  searchString?: string
}

export const Centerblock: FC<PlayerProps> = ({
  header,
  tracks,
  searchString,
}) => {
  const dispatch = useAppDispatch()

  const lang = useAppSelector((state) => state.language.lang)
  const textColor = useAppSelector((state) => state.colorTheme.textColor)
  const order = useAppSelector((state) => state.sortingSettings.order)

  const array = new Array(10).fill(0)

  // const [value, setValue] = useState(searchString)

  // useEffect(() => {
  //   return () => setValue('')
  // }, [header])

  // const handleSearch = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setValue(e.target.value)
  // }

  if (header === TEXT.menu.profile[lang]) {
    return <Profile />
  } else {
    return (
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
