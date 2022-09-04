import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SongType } from '../types';

type TTrackState = {
  currentTrack: SongType;
  allTracks: SongType[];
  danceTracks: SongType[];
  randomTracks: SongType[];
  movedTracks: SongType[];
  autoplay: boolean;
};

const initialState: TTrackState = {
  currentTrack: JSON.parse(localStorage.getItem('currentTrack')!) || {},
  allTracks: [],
  randomTracks: [],
  danceTracks: [],
  movedTracks: [],
  autoplay: false,
};

const trackSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {
    changeCurrentSong(state, action: PayloadAction<SongType>) {
      state.autoplay = true;
      state.currentTrack = action.payload;
      localStorage.setItem('currentTrack', JSON.stringify(state.currentTrack));
    },
    uploadAllTracks(state, action: PayloadAction<SongType[]>) {
      state.allTracks = action.payload;
    },
    uploadDanceTracks(state, action: PayloadAction<SongType[]>) {
      state.danceTracks = action.payload;
    },
    uploadRandomTracks(state, action: PayloadAction<SongType[]>) {
      state.randomTracks = action.payload;
    },
    uploadMovedTracks(state, action: PayloadAction<SongType[]>) {
      state.movedTracks = action.payload;
    },
    switchToNextTrack(state, action: PayloadAction<SongType[]>) {
      state.autoplay = true;
      let nextTrack;
      let currentIndex = action.payload?.findIndex(
        (track) => track.url === state.currentTrack.url,
      );
      if (currentIndex! >= action.payload?.length! - 1) {
        nextTrack = action.payload?.[0];
      } else {
        nextTrack = action.payload?.[currentIndex! + 1];
      }
      state.currentTrack = nextTrack;
    },
    switchToPreviousTrack(state, action: PayloadAction<SongType[]>) {
      state.autoplay = true;
      let previousTrack;
      let currentIndex = action.payload?.findIndex(
        (track) => track.url === state.currentTrack.url,
      );
      if (currentIndex! <= 0) {
        previousTrack = action.payload?.[action.payload?.length! - 1];
      } else {
        previousTrack = action.payload?.[currentIndex! - 1];
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
  },
});

export const {
  changeCurrentSong,
  uploadAllTracks,
  uploadDanceTracks,
  uploadRandomTracks,
  uploadMovedTracks,
  switchToNextTrack,
  switchToPreviousTrack,
  shuffleTracks,
} = trackSlice.actions;

export default trackSlice.reducer;
