import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TSong } from '../types';

type TCheckedItems = {
  checkedArtists: string[];
  checkedYears: string[];
  checkedGenres: string[];
  searchedTracks: TSong[];
  searchedTracksDance: TSong[];
  searchedTracksRandom: TSong[];
  searchedTracksFavourites: TSong[];
  filteredTracks: TSong[];
  filteredDanceTracks: TSong[];
  filteredRandomTracks: TSong[];
  filteredFavouritesTracks: TSong[];
};

const initialState: TCheckedItems = {
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
};

const filteredItemsSlice = createSlice({
  name: 'filteredItems',
  initialState,
  reducers: {
    updateCheckedArtists(state, action: PayloadAction<string[]>) {
      state.checkedArtists = action.payload;
    },
    updateCheckedYears(state, action: PayloadAction<string[]>) {
      state.checkedYears = action.payload;
    },
    updateCheckedGenres(state, action: PayloadAction<string[]>) {
      state.checkedGenres = action.payload;
    },

    updateSearchedTracks(state, action: PayloadAction<TSong[]>) {
      state.searchedTracks = action.payload;
    },
    updateSearchedTracksDance(state, action: PayloadAction<TSong[]>) {
      state.searchedTracksDance = action.payload;
    },
    updateSearchedTracksRandom(state, action: PayloadAction<TSong[]>) {
      state.searchedTracksRandom = action.payload;
    },
    updateSearchedTracksFavourites(state, action: PayloadAction<TSong[]>) {
      state.searchedTracksFavourites = action.payload;
    },

    updateFilteredTracks(state, action: PayloadAction<TSong[]>) {
      state.filteredTracks = action.payload;
    },
    updateFilteredDanceTracks(state, action: PayloadAction<TSong[]>) {
      state.filteredDanceTracks = action.payload;
    },
    updateFilteredRandomTracks(state, action: PayloadAction<TSong[]>) {
      state.filteredRandomTracks = action.payload;
    },
    updateFilteredFavouritesTracks(state, action: PayloadAction<TSong[]>) {
      state.filteredFavouritesTracks = action.payload;
    },
  },
});

export const {
  updateCheckedArtists,
  updateCheckedYears,
  updateCheckedGenres,
  updateSearchedTracks,
  updateSearchedTracksDance,
  updateSearchedTracksRandom,
  updateSearchedTracksFavourites,
  updateFilteredTracks,
  updateFilteredDanceTracks,
  updateFilteredRandomTracks,
  updateFilteredFavouritesTracks,
} = filteredItemsSlice.actions;

export default filteredItemsSlice.reducer;
