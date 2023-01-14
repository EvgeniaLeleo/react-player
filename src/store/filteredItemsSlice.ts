import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Track } from '../types'

type CheckedItems = {
  checkedArtists: string[]
  checkedYears: string[]
  checkedGenres: string[]
  searchedTracks: Track[]
  searchedTracksDance: Track[]
  searchedTracksRandom: Track[]
  searchedTracksFavourites: Track[]
  filteredTracks: Track[]
  filteredDanceTracks: Track[]
  filteredRandomTracks: Track[]
  filteredFavouritesTracks: Track[]
}

const initialState: CheckedItems = {
  checkedArtists: [],
  checkedYears: [],
  checkedGenres: [],
  searchedTracks: [],
  searchedTracksDance: [],
  searchedTracksRandom: [],
  searchedTracksFavourites: [],
  filteredTracks: [],
  filteredDanceTracks: [],
  filteredRandomTracks: [],
  filteredFavouritesTracks: [],
}

const filteredItemsSlice = createSlice({
  name: 'filteredItems',
  initialState,
  reducers: {
    updateCheckedArtists(state, action: PayloadAction<string[]>) {
      state.checkedArtists = action.payload
    },
    updateCheckedYears(state, action: PayloadAction<string[]>) {
      state.checkedYears = action.payload
    },
    updateCheckedGenres(state, action: PayloadAction<string[]>) {
      state.checkedGenres = action.payload
    },

    updateSearchedTracks(state, action: PayloadAction<Track[]>) {
      state.searchedTracks = action.payload
    },
    updateSearchedTracksDance(state, action: PayloadAction<Track[]>) {
      state.searchedTracksDance = action.payload
    },
    updateSearchedTracksRandom(state, action: PayloadAction<Track[]>) {
      state.searchedTracksRandom = action.payload
    },
    updateSearchedTracksFavourites(state, action: PayloadAction<Track[]>) {
      state.searchedTracksFavourites = action.payload
    },
    updateFilteredTracks(state, action: PayloadAction<Track[]>) {
      state.filteredTracks = action.payload
    },
    // updateFilteredDanceTracks(state, action: PayloadAction<Track[]>) {
    //   state.filteredDanceTracks = action.payload;
    // },
    // updateFilteredRandomTracks(state, action: PayloadAction<Track[]>) {
    //   state.filteredRandomTracks = action.payload;
    // },
    // updateFilteredFavouritesTracks(state, action: PayloadAction<Track[]>) {
    //   state.filteredFavouritesTracks = action.payload;
    // },
  },
})

export const {
  updateCheckedArtists,
  updateCheckedYears,
  updateCheckedGenres,
  updateSearchedTracks,
  updateSearchedTracksDance,
  updateSearchedTracksRandom,
  updateSearchedTracksFavourites,
  updateFilteredTracks,
  // updateFilteredDanceTracks,
  // updateFilteredRandomTracks,
  // updateFilteredFavouritesTracks,
} = filteredItemsSlice.actions

export default filteredItemsSlice.reducer
