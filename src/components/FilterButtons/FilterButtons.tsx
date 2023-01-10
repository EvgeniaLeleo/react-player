import { FC } from 'react';
import {
  Box,
  createTheme,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  ThemeProvider,
} from '@mui/material';
import { FilterButton } from '../FilterButton/FilterButton';
import { ORDER, TEXT } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hook';
import { Track, Languages, Order } from '../../types';
import { colorToSecondary } from '../../utils/colorUtils';
import { updateOrder } from '../../store/sortingSettingsSlice';
import { getFinalItems } from '../../utils/getFinalItems';
import { updateFilteredTracks } from '../../store/filteredItemsSlice';

import style from './style.module.css';

type FilterButtonsProps = { lang: Languages; textColor: string };

export const FilterButtons: FC<FilterButtonsProps> = ({ lang, textColor }) => {
  const dispatch = useAppDispatch();

  const allTracksStore = useAppSelector((state) => state.tracks.allTracks);
  const checkedItems = useAppSelector((state) => state.filteredItems);
  const searchQuery = useAppSelector(
    (state) => state.sortingSettings.searchQuery,
  );
  const searchedItemsStore: Track[] = useAppSelector(
    (state) => state.filteredItems.searchedTracks,
  );

  const initialOrder = useAppSelector((state) => state.sortingSettings.order);
  const checkedArtists = useAppSelector(
    (state) => state.sortingSettings.artists,
  );
  const checkedYears = useAppSelector((state) => state.sortingSettings.years);
  const checkedGenres = useAppSelector((state) => state.sortingSettings.genres);
  const decorativeColor = useAppSelector(
    (state) => state.colorTheme.decorativeColor,
  );
  const textColorSecondary = colorToSecondary(textColor);

  const buttonTheme = createTheme({
    palette: {
      primary: {
        main: decorativeColor,
      },
    },
  });

  // const [_, setOrder] = useState(ORDER.notSelected);

  const handleChange = (event: SelectChangeEvent) => {
    const newOrder = event.target.value as Order;
    const searchedItems =
      searchQuery === '' ? allTracksStore : searchedItemsStore;
    // setOrder(newOrder);
    dispatch(updateOrder(newOrder));

    const finalItems = getFinalItems(
      allTracksStore,
      checkedItems,
      searchedItems,
      newOrder,
    );

    dispatch(updateFilteredTracks(finalItems));
  };

  return (
    <Box className={style.Filters} style={{ color: textColor }}>
      <div className={style.ButtonsWrapper}>
        <span className={style.FiltersText}>{TEXT.search.searchBy[lang]}</span>
        <FilterButton
          buttonName="checkedArtists"
          buttonText={TEXT.search.artist[lang]}
          rows={3}
          checkItems={checkedArtists}
        ></FilterButton>
        <FilterButton
          buttonName="checkedGenres"
          buttonText={TEXT.search.genre[lang]}
          rows={2}
          checkItems={checkedGenres}
        ></FilterButton>
        <FilterButton
          buttonName="checkedYears"
          buttonText={TEXT.search.release[lang]}
          rows={3}
          checkItems={checkedYears}
        ></FilterButton>
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
    </Box>
  );
};
