import React, { FC, useEffect, useState } from 'react'
import { InputAdornment, TextField } from '@mui/material'
import { Search } from '@mui/icons-material'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { TEXT } from '../../constants'
import { Profile } from '../Profile/Profile'
import { useAppSelector } from '../../hooks/hook'
import { TrackList } from '../TrackList/TrackList'
import { FilterButtons } from '../FilterButtons/FilterButtons'
import { SkeletonTrack } from '../SkeletonTrack/SkeletonTrack'
import { ListHeaders } from '../ListHeaders/ListHeaders'

import style from './style.module.css'
import { getSortedByOrderArray } from '../../utils/getSortedByOrderArray'

type PlayerProps = {
  tracksHook?: Function
  header?: string
  collectionId?: number
  isProfilePage?: boolean
}

export const Centerblock: FC<PlayerProps> = ({
  header,
  tracksHook,
  collectionId = 1,
  isProfilePage = false,
}) => {
  const lang = useAppSelector((state) => state.language.lang)
  const textColor = useAppSelector((state) => state.colorTheme.textColor)

  const [searchString, setSearchString] = useState('')
  const {
    isLoading,
    isError,
    data: tracks,
  } = tracksHook
    ? tracksHook(searchString, collectionId)
    : { data: [], isLoading: true, isError: false }

  const order = useAppSelector((state) => state.sortingSettings.order)

  const filteredTracks =
    header === TEXT.header.tracks[lang]
      ? getSortedByOrderArray(tracks, order)
      : tracks

  const handleSearch = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearchString(e.target.value)
  }

  useEffect(() => {
    return () => setSearchString('')
  }, [header])

  const array = new Array(10).fill(0)

  if (isProfilePage) {
    return <Profile />
  }

  return (
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
                <Search style={{ color: textColor }} className={style.Input} />
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
            <FilterButtons
              lang={lang}
              textColor={textColor}
              // searchString={searchString}
              tracks={tracks}
            />
          )}

          <div className={style.Content}>
            <ListHeaders />

            {isError && (
              <div style={{ color: textColor }}>Произошла ошибка</div>
            )}

            {isLoading &&
              array.map((_, i) => <SkeletonTrack key={i.toString()} />)}

            {!isLoading && (
              <TrackList header={header} tracks={filteredTracks} />
            )}

            {/* В зависимости от заголовка страницы - разное предупреждение об отсутствии результатов: */}
            {!isError &&
              tracks.length === 0 &&
              (header === TEXT.header.mytracks[lang] ? (
                <div style={{ color: textColor }}>
                  {TEXT.no_favourites[lang]}
                </div>
              ) : (
                <div style={{ color: textColor }}>
                  {TEXT.empty_results[lang]}
                </div>
              ))}
          </div>
        </div>
      </DndProvider>
    </div>
  )
}
