import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_LANG } from '../constants';
import { TLanguages } from '../types';

type TLanguageState = {
  lang: TLanguages;
};

const initialState: TLanguageState = {
  lang: (localStorage.getItem('language') as TLanguages) || DEFAULT_LANG,
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
