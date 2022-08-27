import { configureStore } from '@reduxjs/toolkit';
import colorThemeReducer from './colorThemeSlice';

const store = configureStore({
  reducer: {
    colorTheme: colorThemeReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
