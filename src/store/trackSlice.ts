import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Track } from '../types';

type TTrackState = {
  currentTrack: Track;
  allTracks: Track[];
  danceTracks: Track[];
  randomTracks: Track[];
  movedTracks: Track[];
  favourites: Track[];
  autoplay: boolean;
  isMoved: boolean;
  isShuffleActive: boolean;
};

const initialState: TTrackState = {
  currentTrack: JSON.parse(localStorage.getItem('currentTrack')!) || {},
  allTracks: [],
  randomTracks: [],
  danceTracks: [],
  movedTracks: [],
  favourites: JSON.parse(localStorage.getItem('favourites')!) || [],
  isMoved: false,
  autoplay: false,
  isShuffleActive: false,
};

const trackSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {
    changeCurrenTrack(state, action: PayloadAction<Track>) {
      state.autoplay = true;
      state.currentTrack = action.payload;
      localStorage.setItem('currentTrack', JSON.stringify(state.currentTrack));
    },
    uploadAllTracks(state, action: PayloadAction<Track[]>) {
      state.allTracks = action.payload;
    },
    uploadDanceTracks(state, action: PayloadAction<Track[]>) {
      state.danceTracks = action.payload;
    },
    uploadRandomTracks(state, action: PayloadAction<Track[]>) {
      state.randomTracks = action.payload;
    },
    uploadMovedTracks(state, action: PayloadAction<Track[]>) {
      state.movedTracks = action.payload;
    },
    addTrackToFavourites(state, action) {
      state.favourites = [...state.favourites, action.payload];
      // localStorage.setItem('favourites', JSON.stringify(state.favourites));
    },
    removeTrackFromFavourites(state, action) {
      state.favourites = state.favourites.filter(
        (favSong) => favSong.track_file !== action.payload.track_file,
      );
      localStorage.setItem('favourites', JSON.stringify(state.favourites));
    },
    switchToNextTrack(state, action: PayloadAction<Track[]>) {
      state.autoplay = true;
      let nextTrack: Track;
      let allTracks: Track[];

      if (state.isMoved) {
        allTracks = JSON.parse(JSON.stringify(state.movedTracks));
      } else {
        allTracks = action.payload;
      }

      let currentIndex = allTracks?.findIndex(
        (track) => track.track_file === state.currentTrack.track_file,
      );
      if (currentIndex! >= allTracks?.length! - 1) {
        nextTrack = allTracks?.[0];
      } else {
        nextTrack = allTracks?.[currentIndex! + 1];
      }
      if (state.isShuffleActive) {
        let nextTrack =
          allTracks?.[Math.floor(Math.random() * allTracks.length)];
        state.currentTrack = nextTrack;
      } else {
        state.currentTrack = nextTrack;
      }
    },
    switchToPreviousTrack(state, action: PayloadAction<Track[]>) {
      state.autoplay = true;
      let previousTrack;

      let allTracks: Track[];

      if (state.isMoved) {
        allTracks = JSON.parse(JSON.stringify(state.movedTracks));
      } else {
        allTracks = action.payload;
      }

      let currentIndex = allTracks?.findIndex(
        (track) => track.track_file === state.currentTrack.track_file,
      );
      if (currentIndex! <= 0) {
        previousTrack = allTracks?.[allTracks?.length! - 1];
      } else {
        previousTrack = allTracks?.[currentIndex! - 1];
      }
      state.currentTrack = previousTrack;
    },
    shuffleTracks(state, action) {
      if (action.payload) {
        let tracks = JSON.parse(JSON.stringify(state.allTracks));
        let nextTrack = tracks?.[Math.floor(Math.random() * tracks.length)];
        state.currentTrack = nextTrack;
      }
    },
    setShuffleStatus(state, action) {
      state.isShuffleActive = !action.payload;
    },
    setAutoplayStatus(state, action) {
      state.autoplay = action.payload;
    },
    setMovedStatus(state, action) {
      state.isMoved = action.payload;
    },
  },
});

export const {
  changeCurrenTrack,
  uploadAllTracks,
  uploadDanceTracks,
  uploadRandomTracks,
  uploadMovedTracks,
  switchToNextTrack,
  switchToPreviousTrack,
  shuffleTracks,
  setShuffleStatus,
  setAutoplayStatus,
  setMovedStatus,
  addTrackToFavourites,
  removeTrackFromFavourites,
} = trackSlice.actions;

export default trackSlice.reducer;
