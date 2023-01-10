import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { DEFAULT_LANG } from '../constants';
import { Languages } from '../types';

type TLanguageState = {
  lang: Languages;
};

const initialState: TLanguageState = {
  lang: (localStorage.getItem('language') as Languages) || DEFAULT_LANG,
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLanguage(state, action: PayloadAction<Languages>) {
      state.lang = action.payload;
    },
  },
});

export const { changeLanguage } = languageSlice.actions;

export default languageSlice.reducer;
