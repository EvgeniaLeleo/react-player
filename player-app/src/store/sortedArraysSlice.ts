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
    // еще года и жанры
  },
});

export const { updateSortedArtists } = sortedArraysSlice.actions;

export default sortedArraysSlice.reducer;
