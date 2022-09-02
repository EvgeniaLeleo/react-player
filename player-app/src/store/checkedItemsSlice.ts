import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SongType } from '../types';

type TCheckedItems = {
  checkedArtists: string[];
  checkedYears: string[];
  checkedGenres: string[];
  filteredTracks: SongType[];
};

const initialState: TCheckedItems = {
  checkedArtists: [],
  checkedYears: [],
  checkedGenres: [],
  filteredTracks: [],
};

const checkedItemsSlice = createSlice({
  name: 'checkedItems',
  initialState,
  reducers: {
    updateCheckedArtists(state, action: PayloadAction<string[]>) {
      state.checkedArtists = action.payload;
    },
    updateCheckedYears(state, action: PayloadAction<string[]>) {
      state.checkedYears = action.payload;
    },
    updateCheckedGenres(state, action: PayloadAction<string[]>) {
      state.checkedGenres = action.payload;
    },
    updateFilteredTracks(state, action: PayloadAction<SongType[]>) {
      state.filteredTracks = action.payload;
    },
  },
});

export const {
  updateCheckedArtists,
  updateCheckedYears,
  updateCheckedGenres,
  updateFilteredTracks,
} = checkedItemsSlice.actions;

export default checkedItemsSlice.reducer;
