import React, { FC, useEffect, useState } from 'react'
import { InputAdornment, TextField } from '@mui/material'
import { Search } from '@mui/icons-material'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { TEXT } from '../../constants'
import { Profile } from '../Profile/Profile'
import { useAppSelector } from '../../hooks/hook'
import { FilterButtons } from '../FilterButtons/FilterButtons'
import { ListHeaders } from '../ListHeaders/ListHeaders'
import { getFinalItems } from '../../utils/getFinalItems'
import { Tracks } from '../Tracks/Tracks'
import { textColorSelector } from '../../store/selectors/colorThemeSelector'
import { languageSelector } from '../../store/selectors/languageSelector'
import {
  checkedArtistsSelector,
  checkedGenresSelector,
  checkedYearsSelector,
} from '../../store/selectors/filteredItemsSelector'
import { orderSelector } from '../../store/selectors/orderSelector'

import style from './style.module.css'

type Props = {
  tracksHook?: Function
  header: string
  collectionId?: number
  isProfilePage?: boolean
}

export const Centerblock: FC<Props> = ({
  header,
  tracksHook,
  collectionId = 1,
  isProfilePage = false,
}) => {
  const lang = useAppSelector(languageSelector)
  const textColor = useAppSelector(textColorSelector)
  const order = useAppSelector(orderSelector)

  const [currentHeader, setCurrentHeader] = useState(header)

  useEffect(() => {
    if (header === TEXT.header.classics['ru']) {
      setCurrentHeader(TEXT.header.classics[lang])
    }
    if (header === TEXT.header.electro['ru']) {
      setCurrentHeader(TEXT.header.electro[lang])
    }
    if (header === TEXT.header.rocks['ru']) {
      setCurrentHeader(TEXT.header.rocks[lang])
    }
  }, [header, currentHeader, lang])

  const [searchString, setSearchString] = useState('')
  const {
    isLoading,
    isError,
    data: tracks,
  } = tracksHook
    ? tracksHook(searchString, collectionId)
    : { data: [], isLoading: true, isError: false }

  const checkedItemsObj = {
    checkedArtists: useAppSelector(checkedArtistsSelector),
    checkedYears: useAppSelector(checkedYearsSelector),
    checkedGenres: useAppSelector(checkedGenresSelector),
  }

  const filteredTracks =
    header === TEXT.header.tracks[lang]
      ? getFinalItems(tracks, checkedItemsObj, order)
      : tracks

  const handleSearch = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearchString(e.target.value)
  }

  useEffect(() => {
    return () => setSearchString('')
  }, [header])

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
            {currentHeader === TEXT.header.classics[lang] ||
            currentHeader === TEXT.header.rocks[lang] ||
            currentHeader === TEXT.header.electro[lang]
              ? currentHeader
              : header}
          </h2>

          {header === TEXT.header.tracks[lang] && (
            <FilterButtons lang={lang} textColor={textColor} tracks={tracks} />
          )}

          <div className={style.Content}>
            <ListHeaders />
            <Tracks
              isError={isError}
              isLoading={isLoading}
              header={header}
              filteredTracks={filteredTracks}
              tracks={tracks}
            />
          </div>
        </div>
      </DndProvider>
    </div>
  )
}
