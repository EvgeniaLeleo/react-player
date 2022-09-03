import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ORDER } from '../constants';
import { TOrder } from '../types';

type TTrackState = {
  artists: string[];
  genres: string[];
  years: string[];
  order: TOrder;
  searchQuery: string;
};

const initialState: TTrackState = {
  artists: [],
  genres: [],
  years: [],
  order: ORDER.notSelected as TOrder,
  searchQuery: '',
};

const sortingSettingsSlice = createSlice({
  name: 'sortingSettings',
  initialState,
  reducers: {
    updateSortedArtists(state, action: PayloadAction<string[]>) {
      state.artists = action.payload;
    },
    updateSortedYears(state, action: PayloadAction<string[]>) {
      state.years = action.payload;
    },
    updateSortedGenres(state, action: PayloadAction<string[]>) {
      state.genres = action.payload;
    },
    updateOrder(state, action: PayloadAction<TOrder>) {
      state.order = action.payload;
    },
    updateSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
  },
});

export const {
  updateSortedArtists,
  updateSortedYears,
  updateSortedGenres,
  updateOrder,
  updateSearchQuery,
} = sortingSettingsSlice.actions;

export default sortingSettingsSlice.reducer;
