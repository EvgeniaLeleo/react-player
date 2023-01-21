import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { BGCOLOR, COLOR, COLOR_EXTRADARK } from '../constants'
import { ColorState } from '../types'

const initialState: ColorState = {
  textColor: localStorage.getItem('textColor') || COLOR,
  bgColor: localStorage.getItem('bgColor') || BGCOLOR,
  decorativeColor: localStorage.getItem('decorativeColor') || COLOR_EXTRADARK,
}

const colorThemeSlice = createSlice({
  name: 'colorTheme',
  initialState,
  reducers: {
    changeTextColor(state, action: PayloadAction<string>) {
      state.textColor = action.payload
    },
    changeBgColor(state, action: PayloadAction<string>) {
      state.bgColor = action.payload
    },
    changeDecorativeColor(state, action: PayloadAction<string>) {
      state.decorativeColor = action.payload
    },
  },
})

export const { changeTextColor, changeBgColor, changeDecorativeColor } =
  colorThemeSlice.actions

export default colorThemeSlice.reducer
