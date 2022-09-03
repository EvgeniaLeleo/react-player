import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TTrackState = {
  artists: string[];
  genres: string[];
  years: string[];
};

const initialState: TTrackState = {
  artists: [],
  genres: [],
  years: [],
};

const sortedArraysSlice = createSlice({
  name: 'sortedArrays',
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
  },
});

export const { updateSortedArtists, updateSortedYears, updateSortedGenres } =
  sortedArraysSlice.actions;

export default sortedArraysSlice.reducer;
