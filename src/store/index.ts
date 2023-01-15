import colorThemeReducer from './colorThemeSlice'
import languageReducer from './languageSlice'
import trackReducer from './trackSlice'
import filteredItemsReducer from './filteredItemsSlice'
import sortingSettingsReducer from './sortingSettingsSlice'
import headerReducer from './headerSlice'
import { dataApi } from '../services/dataApi'
import tokenReducer from './tokenSlice'
import filterReducer from './FilterSlice'
import navMenuReducer from './navMenuSlice'

import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    filter: filterReducer,
    language: languageReducer,
    colorTheme: colorThemeReducer,
    track: trackReducer,
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
