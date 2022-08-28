import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TLanguages } from '../types';

type TLanguageState = {
  lang: TLanguages;
};

const initialState: TLanguageState = {
  lang: (localStorage.getItem('language') as TLanguages) || 'ru',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLanguage(state, action: PayloadAction<TLanguages>) {
      state.lang = action.payload;
    },
  },
});

export const { changeLanguage } = languageSlice.actions;

export default languageSlice.reducer;
