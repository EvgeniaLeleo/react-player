import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { Track } from '../types'

type Props = {
  currentTrack: Track
  isMoved: boolean
  movedTracks: Track[]
  favoriteTracks: number[]
  isShuffleActive: boolean
  id?: number
  autoplay?: boolean
}

const initialState: Props = {
  autoplay: false,
  currentTrack: JSON.parse(localStorage.getItem('currentTrack')!) || {},
  isMoved: false,
  isShuffleActive: false,
  movedTracks: [],
  favoriteTracks: [],
}

export const trackSlice = createSlice({
  name: 'track',
  initialState,
  reducers: {
    changeCurrentTrack(state, action: PayloadAction<Track>) {
      state.autoplay = true
      state.currentTrack = action.payload
    },

    switchToNextTrack(state, action: PayloadAction<Track[]>) {
      state.autoplay = true
      let nextTrack: Track
      let tracks: Track[]

      if (state.isMoved) {
        tracks = JSON.parse(JSON.stringify(state.movedTracks))
      } else {
        tracks = action.payload
      }

      let currentIndex = tracks?.findIndex(
        (track) => track.track_file === state.currentTrack.track_file
      )
      if (currentIndex! >= tracks?.length! - 1) {
        nextTrack = tracks?.[0]
      } else {
        nextTrack = tracks?.[currentIndex! + 1]
      }
      if (state.isShuffleActive) {
        let nextTrack = tracks?.[Math.floor(Math.random() * tracks.length)]
        state.currentTrack = nextTrack
      } else {
        state.currentTrack = nextTrack
      }
    },

    switchToPreviousTrack(state, action: PayloadAction<Track[]>) {
      state.autoplay = true
      let previousTrack

      let tracks: Track[]

      if (state.isMoved) {
        tracks = JSON.parse(JSON.stringify(state.movedTracks))
      } else {
        tracks = action.payload
      }

      let currentIndex = tracks?.findIndex(
        (track) => track.track_file === state.currentTrack.track_file
      )
      if (currentIndex! <= 0) {
        previousTrack = tracks?.[tracks?.length! - 1]
      } else {
        previousTrack = tracks?.[currentIndex! - 1]
      }
      state.currentTrack = previousTrack
    },

    shuffleTracks(state, action) {
      if (action.payload) {
        // let tracks = JSON.parse(JSON.stringify(state.))
        // let nextTrack = tracks?.[Math.floor(Math.random() * tracks.length)]
        // state.currentTrack = nextTrack
      }
    },

    setShuffleStatus(state, action) {
      state.isShuffleActive = !action.payload
    },

    setAutoplayStatus(state, action) {
      state.autoplay = action.payload
    },

    setMovedStatus(state, action) {
      state.isMoved = action.payload
    },

    uploadMovedTracks(state, action: PayloadAction<Track[]>) {
      state.movedTracks = action.payload
    },
  },
})

export const {
  changeCurrentTrack,
  switchToNextTrack,
  switchToPreviousTrack,
  shuffleTracks,
  setShuffleStatus,
  setAutoplayStatus,
  setMovedStatus,
  uploadMovedTracks,
} = trackSlice.actions

export const selectActiveTrackId = (state: RootState) => state.track.id

export default trackSlice.reducer
