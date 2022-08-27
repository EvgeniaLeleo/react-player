import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BGCOLOR, COLOR, COLOR_EXTRADARK } from '../constants';

type TColorState = {
  textColor: string;
  bgColor: string;
  decorationColor: string;
};

const initialState: TColorState = {
  textColor: COLOR,
  bgColor: BGCOLOR,
  decorationColor: COLOR_EXTRADARK,
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
    changeDecorationColor(state, action) {
      state.decorationColor = action.payload;
    },
  },
});

export const { changeTextColor, changeBgColor, changeDecorationColor } =
  todoSlice.actions;

export default todoSlice.reducer;
