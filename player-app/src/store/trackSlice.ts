import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SongType } from "../types";

type TTrackState = {
  currentTrack: SongType;
  autoplay: boolean;
};

const initialState: TTrackState = {
  currentTrack: {},
  autoplay: false,
};

const trackSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {
    changeCurrentSong(state, action: PayloadAction<SongType>) {
      state.autoplay = true;
      state.currentTrack = action.payload;
    },
    setAutoplayToTrue(state, action) {
      state.autoplay = action.payload;
    },
  },
});

export const { changeCurrentSong, setAutoplayToTrue } = trackSlice.actions;

export default trackSlice.reducer;
