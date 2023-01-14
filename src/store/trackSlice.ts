// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// import { Track } from '../types';

// const initialState: TTrackState = {
//
//   tracks: [],
//   randomTracks: [],
//   danceTracks: [],
//   movedTracks: [],
//   favourites: JSON.parse(localStorage.getItem('favourites')!) || [],

// };

// const trackSlice = createSlice({
//   name: 'tracks',
//   initialState,
//   reducers: {

//     uploadAllTracks(state, action: PayloadAction<Track[]>) {
//       state.tracks = action.payload;
//     },
//     uploadDanceTracks(state, action: PayloadAction<Track[]>) {
//       state.danceTracks = action.payload;
//     },
//     uploadRandomTracks(state, action: PayloadAction<Track[]>) {
//       state.randomTracks = action.payload;
//     },

//     addTrackToFavourites(state, action) {
//       state.favourites = [...state.favourites, action.payload];
//       // localStorage.setItem('favourites', JSON.stringify(state.favourites));
//     },
//     removeTrackFromFavourites(state, action) {
//       state.favourites = state.favourites.filter(
//         (favSong) => favSong.track_file !== action.payload.track_file,
//       );
//       localStorage.setItem('favourites', JSON.stringify(state.favourites));
//     },
//     switchToNextTrack(state, action: PayloadAction<Track[]>) {
//       state.autoplay = true;
//       let nextTrack: Track;
//       let tracks: Track[];

//       if (state.isMoved) {
//         tracks = JSON.parse(JSON.stringify(state.movedTracks));
//       } else {
//         tracks = action.payload;
//       }

//       let currentIndex = tracks?.findIndex(
//         (track) => track.track_file === state.currentTrack.track_file,
//       );
//       if (currentIndex! >= tracks?.length! - 1) {
//         nextTrack = tracks?.[0];
//       } else {
//         nextTrack = tracks?.[currentIndex! + 1];
//       }
//       if (state.isShuffleActive) {
//         let nextTrack =
//           tracks?.[Math.floor(Math.random() * tracks.length)];
//         state.currentTrack = nextTrack;
//       } else {
//         state.currentTrack = nextTrack;
//       }
//     },
//     switchToPreviousTrack(state, action: PayloadAction<Track[]>) {
//       state.autoplay = true;
//       let previousTrack;

//       let tracks: Track[];

//       if (state.isMoved) {
//         tracks = JSON.parse(JSON.stringify(state.movedTracks));
//       } else {
//         tracks = action.payload;
//       }

//       let currentIndex = tracks?.findIndex(
//         (track) => track.track_file === state.currentTrack.track_file,
//       );
//       if (currentIndex! <= 0) {
//         previousTrack = tracks?.[tracks?.length! - 1];
//       } else {
//         previousTrack = tracks?.[currentIndex! - 1];
//       }
//       state.currentTrack = previousTrack;
//     },
//     shuffleTracks(state, action) {
//       if (action.payload) {
//         let tracks = JSON.parse(JSON.stringify(state.tracks));
//         let nextTrack = tracks?.[Math.floor(Math.random() * tracks.length)];
//         state.currentTrack = nextTrack;
//       }
//     },
//     setShuffleStatus(state, action) {
//       state.isShuffleActive = !action.payload;
//     },
//     setAutoplayStatus(state, action) {
//       state.autoplay = action.payload;
//     },
//     setMovedStatus(state, action) {
//       state.isMoved = action.payload;
//     },
//   },
// });

// export const {
//   changeCurrenTrack,
//   uploadAllTracks,
//   uploadDanceTracks,
//   uploadRandomTracks,
//   uploadMovedTracks,
//   switchToNextTrack,
//   switchToPreviousTrack,
//   shuffleTracks,
//   setShuffleStatus,
//   setAutoplayStatus,
//   setMovedStatus,
//   addTrackToFavourites,
//   removeTrackFromFavourites,
// } = trackSlice.actions;

// export default trackSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { Track } from '../types'

// type TrackState = {
//   currentTrack: Track;
//   tracks: Track[];
//   danceTracks: Track[];
//   randomTracks: Track[];
//   favourites: Track[];
// };

type Props = {
  currentTrack: Track
  id?: number
  autoplay?: boolean
  isMoved: boolean
  movedTracks: Track[]
  favoriteTracks: number[]
  isShuffleActive: boolean
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
    setActiveTrackId: (state, action: PayloadAction<number>) => {
      state.id = action.payload
    },

    changeCurrentTrack(state, action: PayloadAction<Track>) {
      state.autoplay = true
      state.currentTrack = action.payload
      // localStorage.setItem('currentTrack', JSON.stringify(state.currentTrack))
    },

    addFavoriteTrack: (state, action: PayloadAction<number>) => {
      state.favoriteTracks = [...state.favoriteTracks, action.payload]
    },

    removeFavoriteTrack: (state, action: PayloadAction<number>) => {
      const index = state.favoriteTracks.indexOf(action.payload)
      state.favoriteTracks = [
        ...state.favoriteTracks.slice(0, index),
        ...state.favoriteTracks.slice(index + 1),
      ]
    },

    // toggleFavoriteTrack: (state, action: PayloadAction<number>) => {
    //   if (state.includes(action.payload)) {
    //     const index = state.indexOf(action.payload)
    //     state = [
    //       ...state.slice(0, index),
    //       ...state.slice(index + 1),
    //     ]
    //   }
    //   state.favoriteTracks = [...state.favoriteTracks, action.payload]
    // }

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

    changeAutoplayStatus(state, action) {
      state.autoplay = !action.payload
    },

    uploadMovedTracks(state, action: PayloadAction<Track[]>) {
      state.movedTracks = action.payload
    },
  },
})

export const {
  // updateFavoriteTracks,
  // toggleFavoriteTrack,
  addFavoriteTrack,
  removeFavoriteTrack,
  setActiveTrackId,
  changeCurrentTrack,
  switchToNextTrack,
  switchToPreviousTrack,
  shuffleTracks,
  setShuffleStatus,
  setAutoplayStatus,
  setMovedStatus,
  uploadMovedTracks,
  changeAutoplayStatus,
} = trackSlice.actions

export const selectActiveTrackId = (state: RootState) => state.track.id

export default trackSlice.reducer

// TODO сердечко в плеере
// Анимация двигается только на той странице, где включили
