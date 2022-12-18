import { configureStore } from '@reduxjs/toolkit';

import colorThemeReducer from './colorThemeSlice';
import languageReducer from './languageSlice';
import trackReducer from './trackSlice';
import { authReducer } from './auth/auth';
import modalReducer from './modalSlice';
import filteredItemsReducer from './filteredItemsSlice';
import sortingSettingsReducer from './sortingSettingsSlice';
import headerReducer from './headerSlice';
import { tracksDataApi } from '../services/tracksDataApi';

const store = configureStore({
  reducer: {
    colorTheme: colorThemeReducer,
    language: languageReducer,
    auth: authReducer,
    modal: modalReducer,
    tracks: trackReducer,
    filteredItems: filteredItemsReducer,
    sortingSettings: sortingSettingsReducer,
    header: headerReducer,
    [tracksDataApi.reducerPath]: tracksDataApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tracksDataApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
