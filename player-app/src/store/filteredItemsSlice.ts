import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SongType } from '../types';

type TCheckedItems = {
  checkedArtists: string[];
  checkedYears: string[];
  checkedGenres: string[];
  searchedTracks: SongType[];
  filteredTracks: SongType[];
};

const initialState: TCheckedItems = {
  checkedArtists: [],
  checkedYears: [],
  checkedGenres: [],
  searchedTracks: [],
  filteredTracks: [],
};

const filteredItemsSlice = createSlice({
  name: 'filteredItems',
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
    updateSearchedTracks(state, action: PayloadAction<SongType[]>) {
      state.searchedTracks = action.payload;
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
  updateSearchedTracks,
  updateFilteredTracks,
} = filteredItemsSlice.actions;

export default filteredItemsSlice.reducer;
