import { configureStore } from '@reduxjs/toolkit';
import colorThemeReducer from './colorThemeSlice';
import languageReducer from './languageSlice';
import trackReducer from './trackSlice';
import checkedItemsReducer from './checkedItemsSlice';
import sortedArraysReducer from './sortedArraysSlice';

const store = configureStore({
  reducer: {
    colorTheme: colorThemeReducer,
    language: languageReducer,
    tracks: trackReducer,
    checkedItems: checkedItemsReducer,
    sortedArrays: sortedArraysReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
