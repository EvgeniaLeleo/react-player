// import { configureStore } from '@reduxjs/toolkit'

import colorThemeReducer from './colorThemeSlice'
import languageReducer from './languageSlice'
import trackReducer from './trackSlice'
// import { authReducer } from './auth/auth';
import modalReducer from './modalSlice'
import filteredItemsReducer from './filteredItemsSlice'
import sortingSettingsReducer from './sortingSettingsSlice'
import headerReducer from './headerSlice'
import { tracksDataApi } from '../services/tracksDataApi'
import tokenReducer from './tokenSlice'
// import userReducer from './userSlice'
import playerReducer from './playerSlice'
import filterReducer from './FilterSlice'
import navMenuReducer from './navMenuSlice'

// const store = configureStore({
//   reducer: {
//     language: languageReducer,
//     // auth: authReducer,
//     modal: modalReducer,
//     filteredItems: filteredItemsReducer,
//     header: headerReducer,
//     [tracksDataApi.reducerPath]: tracksDataApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(tracksDataApi.middleware),
// })

// export default store

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch

import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    filter: filterReducer,
    language: languageReducer,
    colorTheme: colorThemeReducer,
    track: trackReducer,
    // user: userReducer,
    navMenu: navMenuReducer,
    tracks: trackReducer,
    sortingSettings: sortingSettingsReducer,
    player: playerReducer,
    [tracksDataApi.reducerPath]: tracksDataApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tracksDataApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
