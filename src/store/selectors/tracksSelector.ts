import { RootState } from '..'

export const autoplaySelector = (state: RootState) => state.tracks.autoplay

export const currentTrackSelector = (state: RootState) =>
  state.tracks.currentTrack

export const movedTracksSelector = (state: RootState) =>
  state.tracks.movedTracks

export const isShuffleActiveSelector = (state: RootState) =>
  state.tracks.isShuffleActive
