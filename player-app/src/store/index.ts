import { configureStore } from '@reduxjs/toolkit';
import colorThemeReducer from './colorThemeSlice';
import languageReducer from './languageSlice';

const store = configureStore({
  reducer: {
    colorTheme: colorThemeReducer,
    language: languageReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
