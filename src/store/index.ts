import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import colorThemeReducer from './colorThemeSlice'
import languageReducer from './languageSlice'
import trackReducer from './trackSlice'
import playerReducer from './playerSlice'
import filteredItemsReducer from './filteredItemsSlice'
import sortingSettingsReducer from './sortingSettingsSlice'
import headerReducer from './headerSlice'
import { dataApi } from '../services/dataApi'
import tokenReducer from './tokenSlice'
import navMenuReducer from './navMenuSlice'

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    language: languageReducer,
    colorTheme: colorThemeReducer,
    track: trackReducer,
    player: playerReducer,
    filteredItems: filteredItemsReducer,
    header: headerReducer,
    navMenu: navMenuReducer,
    tracks: trackReducer,
    sortingSettings: sortingSettingsReducer,
    [dataApi.reducerPath]: dataApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
