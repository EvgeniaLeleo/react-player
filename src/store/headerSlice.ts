import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TTrackState = {
  header: string;
};

const initialState: TTrackState = {
  header: '',
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    updateHeader(state, action: PayloadAction<string>) {
      state.header = action.payload;
    },
  },
});

export const { updateHeader } = headerSlice.actions;

export default headerSlice.reducer;
