import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ORDER } from '../constants';
import { Order } from '../types';

type TTrackState = {
  artists: string[];
  genres: string[];
  years: string[];
  order: Order;
  searchQuery: string;
};

const initialState: TTrackState = {
  artists: [],
  genres: [],
  years: [],
  order: ORDER.notSelected as Order,
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
    updateOrder(state, action: PayloadAction<Order>) {
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
