import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BGCOLOR, COLOR, COLOR_EXTRADARK } from '../constants';

type TColorState = {
  textColor: string;
  bgColor: string;
  decorativeColor: string;
};

const initialState: TColorState = {
  textColor: COLOR,
  bgColor: BGCOLOR,
  decorativeColor: COLOR_EXTRADARK,
};

const todoSlice = createSlice({
  name: 'colorTheme',
  initialState,
  reducers: {
    changeTextColor(state, action) {
      state.textColor = action.payload;
    },
    changeBgColor(state, action) {
      state.bgColor = action.payload;
    },
    changeDecorativeColor(state, action) {
      state.decorativeColor = action.payload;
    },
  },
});

export const { changeTextColor, changeBgColor, changeDecorativeColor } =
  todoSlice.actions;

export default todoSlice.reducer;
