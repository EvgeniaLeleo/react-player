import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TCheckedItems = {
  checkedArtists: string[];
  checkedYears: string[];
  checkedGenres: string[];
};

const initialState: TCheckedItems = {
  checkedArtists: JSON.parse(localStorage.getItem('checkedArtists') || '[]'),
  checkedYears: JSON.parse(localStorage.getItem('checkedYears') || '[]'),
  checkedGenres: JSON.parse(localStorage.getItem('checkedGenres') || '[]'),
};

const checkedItemsSlice = createSlice({
  name: 'checkedItems',
  initialState,
  reducers: {
    updateCheckedArtists(state, action: PayloadAction<string[]>) {
      state.checkedArtists = action.payload;
      localStorage.setItem('checkedArtists', JSON.stringify(action.payload));
    },
    updateCheckedYears(state, action: PayloadAction<string[]>) {
      state.checkedYears = action.payload;
      localStorage.setItem('checkedYears', JSON.stringify(action.payload));
    },
    updateCheckedGenres(state, action: PayloadAction<string[]>) {
      state.checkedGenres = action.payload;
      localStorage.setItem('checkedGenres', JSON.stringify(action.payload));
    },
  },
});

export const { updateCheckedArtists, updateCheckedYears, updateCheckedGenres } =
  checkedItemsSlice.actions;

export default checkedItemsSlice.reducer;
