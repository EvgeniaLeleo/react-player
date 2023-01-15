import { FC } from 'react'
import {
  createTheme,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  ThemeProvider,
} from '@mui/material'

import { FilterButton } from '../FilterButton/FilterButton'
import { ORDER, TEXT } from '../../constants'
import { useAppDispatch, useAppSelector } from '../../hooks/hook'
import { Languages, Order, Track } from '../../types'
import { colorToSecondary } from '../../utils/colorUtils'
import { updateOrder } from '../../store/sortingSettingsSlice'

import style from './style.module.css'
import { getArtistsArray } from '../../utils/getArtistsArray'
import { getGenresArray } from '../../utils/getGenresArray'
import { getYearsArray } from '../../utils/getYearsArray'

type FilterButtonsProps = {
  lang: Languages
  textColor: string
  tracks: Track[]
}

export const FilterButtons: FC<FilterButtonsProps> = ({
  lang,
  textColor,
  tracks,
}) => {
  const artists = getArtistsArray(tracks)
  const genres = getGenresArray(tracks)
  const years = getYearsArray(tracks)

  const dispatch = useAppDispatch()

  const initialOrder = useAppSelector((state) => state.sortingSettings.order)
  const decorativeColor = useAppSelector(
    (state) => state.colorTheme.decorativeColor
  )

  const textColorSecondary = colorToSecondary(textColor)

  const buttonTheme = createTheme({
    palette: {
      primary: {
        main: decorativeColor,
      },
    },
  })

  const handleChange = (event: SelectChangeEvent) => {
    const newOrder = event.target.value as Order
    dispatch(updateOrder(newOrder))
  }

  return (
    <div className={style.Filters} style={{ color: textColor }}>
      <div className={style.ButtonsWrapper}>
        <span className={style.FiltersText}>{TEXT.search.searchBy[lang]}</span>
        <FilterButton
          buttonName="checkedArtists"
          buttonText={TEXT.search.artist[lang]}
          rows={3}
          checkItems={artists}
        />
        <FilterButton
          buttonName="checkedGenres"
          buttonText={TEXT.search.genre[lang]}
          rows={2}
          checkItems={genres}
        />
        <FilterButton
          buttonName="checkedYears"
          buttonText={TEXT.search.release[lang]}
          rows={3}
          checkItems={years}
        />
      </div>

      <ThemeProvider theme={buttonTheme}>
        <FormControl
          variant="standard"
          sx={{
            width: '175px',
          }}
        >
          <InputLabel
            id="demo-simple-select-standard-label"
            style={{
              color: textColorSecondary,
              fontWeight: 'bold',
              fontSize: '20px',
              fontFamily: 'inherit',
            }}
            className={style.FiltersText}
          >
            {TEXT.search.order[lang]}
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={initialOrder}
            onChange={handleChange}
            label="order"
            style={{
              color: textColor,
              fontSize: '15px',
            }}
          >
            <MenuItem value={ORDER.notSelected}>
              {TEXT.search.order.default[lang]}
            </MenuItem>
            <MenuItem value={ORDER.asc}>
              {TEXT.search.order.oldToNew[lang]}
            </MenuItem>
            <MenuItem value={ORDER.desc}>
              {TEXT.search.order.newToOld[lang]}
            </MenuItem>
          </Select>
        </FormControl>
      </ThemeProvider>
    </div>
  )
}
